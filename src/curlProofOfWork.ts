/// <reference types="emscripten" />
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ICurlProofOfWork } from "@iota-pico/crypto/dist/interfaces/ICurlProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
// @ts-ignore
import iotaPicoPowWasm from "../wasm/iota-pico-pow-wasm";

/**
 * CurlProofOfWork implementation using WebAssembly.
 */
export class CurlProofOfWork implements ICurlProofOfWork {
    /* @internal */
    private _ccurlPow: (trytes: string, minWeightMagnitude: number) => string;

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (typeof WebAssembly === undefined) {
                reject(new CoreError("No WebAssembly Support detected"));
            }

            const module = iotaPicoPowWasm();
            module.onRuntimeInitialized = () => {
                this._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                resolve();
             };
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
                throw new CoreError("Trytes can not be null or undefined");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude)) {
                throw new CoreError("The minWeightMagnitude value is not an integer");
            }

            const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);

            resolve(Trytes.create(result));
        });
    }
}
