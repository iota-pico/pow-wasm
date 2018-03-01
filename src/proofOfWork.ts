/// <reference types="emscripten" />
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
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
            if (typeof WebAssembly === undefined) {
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
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trytes: Trytes, minWeightMagnitude: number):
        Promise<Trytes> {
        return new Promise<Trytes>((resolve, reject) => {
            if (trytes === undefined || trytes === null) {
                throw new CryptoError("Trytes can not be null or undefined");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude)) {
                throw new CryptoError("The minWeightMagnitude value is not an integer");
            }

            const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);

            resolve(Trytes.fromString(result));
        });
    }
}
