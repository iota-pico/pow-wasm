/// <reference types="emscripten" />
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
// @ts-ignore
import iotaPicoPowWasm from "../wasm/iota-pico-pow-wasm";
import { IWebPlatform } from "./IWebPlatform";

/**
 * ProofOfWork implementation using WebAssembly.
 */
export class ProofOfWorkWasm extends ProofOfWorkBase {
    /* @internal */
    private readonly _webPlatform: IWebPlatform;

    /* @internal */
    private _ccurlPow: (trytes: string, minWeightMagnitude: number) => string;

    /**
     * Create a new instance of ProofOfWork.
     * @param webPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webPlatform?: IWebPlatform, timeService?: ITimeService) {
        super(timeService);

        if (ObjectHelper.isEmpty(webPlatform)) {
            this._webPlatform = {
                webAssemblyType: typeof WebAssembly,
                wasmModuleLoader: iotaPicoPowWasm
            };
        } else {
            this._webPlatform = webPlatform;
        }
    }

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        await super.initialize();
        return new Promise<void>(async (resolve, reject) => {
            if (ObjectHelper.isEmpty(this._webPlatform.webAssemblyType) || this._webPlatform.webAssemblyType === "undefined") {
                reject(new CryptoError("No WebAssembly support detected"));
            }

            const module: any = {};

            module.onRuntimeInitialized = () => {
                this._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                resolve();
            };

            try {
                this._webPlatform.wasmModuleLoader(module);
            } catch (err) {
                reject(new CryptoError("There was a problem intializing the WebAssembly Module", undefined, err));
            }
        });
    }

    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        return new Promise<Trytes>((resolve, reject) => {
            if (ObjectHelper.isEmpty(this._ccurlPow)) {
                throw new CryptoError("WebAssembly not loaded, have you called initialize");
            }
            if (!ObjectHelper.isType(trytes, Trytes)) {
                throw new CryptoError("The trytes must be an object of type Trytes");
            }
            if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new CryptoError("The minWeightMagnitude must be > 0");
            }

            try {
                const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);

                resolve(Trytes.fromString(result));
            } catch (err) {
                reject(err);
            }
        });
    }
}
