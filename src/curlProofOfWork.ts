/// <reference types="webassembly-js-api" />
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ICurlProofOfWork } from "@iota-pico/crypto/dist/interfaces/ICurlProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

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
        if (typeof WebAssembly === undefined) {
            throw new CoreError("No WebAssembly Support detected");
        }

        await this.loadWebAssembly("../iota-pico-pow-wasm.wasm")
            .then(instance => {
                this._ccurlPow = instance.exports._ccurlPow;
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

    private async loadWebAssembly(filename: string): Promise<WebAssembly.Instance> {
        return fetch(filename)
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.compile(buffer))
            .then(module => {
                const imports: { [id: string]: any } = {};
                imports.env = imports.env || {};
                imports.env.memoryBase = imports.env.memoryBase || 0;
                imports.env.tableBase = imports.env.tableBase || 0;
                if (!imports.env.memory) {
                    imports.env.memory = new WebAssembly.Memory({ initial: 256 });
                }
                if (!imports.env.table) {
                    imports.env.table =
                        new WebAssembly.Table({ initial: 0, element: "anyfunc" });
                }
                return new WebAssembly.Instance(module, imports);
            });
    }
}
