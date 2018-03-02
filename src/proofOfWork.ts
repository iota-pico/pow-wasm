/// <reference types="emscripten" />
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
// @ts-ignore
import iotaPicoPowWasm from "../wasm/iota-pico-pow-wasm";

/**
 * ProofOfWork implementation using WebAssembly.
 */
export class ProofOfWork implements IProofOfWork {
    /* @internal */
    private _ccurlPow: (trytes: string, minWeightMagnitude: number) => string;

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (ObjectHelper.isEmpty(typeof WebAssembly)) {
                reject(new CryptoError("No WebAssembly support detected"));
            }

            const module: any = {};

            module.onRuntimeInitialized = () => {
                this._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                resolve();
            };

            try {
                iotaPicoPowWasm(module);
            } catch (err) {
                reject(new CryptoError("There was a problem intializing the WebAssembly Module", undefined, err));
            }
        });
    }

    /**
     * Performs single conversion per pow call.
     * @returns True if pow only does one conversion.
     */
    public performsSingle(): boolean {
        return true;
    }

    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]> {
        return new Promise<Trytes[]>((resolve, reject) => {
            if (ObjectHelper.isEmpty(this._ccurlPow)) {
                throw new CryptoError("WebAssembly not loaded, have you called initialize");
            }
            if (!ArrayHelper.isTyped(trytes, Trytes)) {
                throw new CryptoError("The trytes must be an array of type Trytes");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new CryptoError("The minWeightMagnitude must be > 0");
            }

            const result = this._ccurlPow(trytes[0].toString(), minWeightMagnitude);

            resolve([ Trytes.fromString(result) ]);
        });
    }
}
