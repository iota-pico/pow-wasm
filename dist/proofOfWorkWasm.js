var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="emscripten" />
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const proofOfWorkBase_1 = require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
// @ts-ignore
const iota_pico_pow_wasm_1 = __importDefault(require("../wasm/iota-pico-pow-wasm"));
/**
 * ProofOfWork implementation using WebAssembly.
 */
class ProofOfWorkWasm extends proofOfWorkBase_1.ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param webPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webPlatform, timeService) {
        super(timeService);
        if (objectHelper_1.ObjectHelper.isEmpty(webPlatform)) {
            this._webPlatform = {
                webAssemblyType: typeof WebAssembly,
                wasmModuleLoader: iota_pico_pow_wasm_1.default
            };
        }
        else {
            this._webPlatform = webPlatform;
        }
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    async initialize() {
        await super.initialize();
        return new Promise(async (resolve, reject) => {
            if (objectHelper_1.ObjectHelper.isEmpty(this._webPlatform.webAssemblyType) || this._webPlatform.webAssemblyType === "undefined") {
                reject(new cryptoError_1.CryptoError("No WebAssembly support detected"));
            }
            const module = {};
            module.onRuntimeInitialized = () => {
                this._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                resolve();
            };
            try {
                this._webPlatform.wasmModuleLoader(module);
            }
            catch (err) {
                reject(new cryptoError_1.CryptoError("There was a problem intializing the WebAssembly Module", undefined, err));
            }
        });
    }
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async singlePow(trytes, minWeightMagnitude) {
        return new Promise((resolve, reject) => {
            if (objectHelper_1.ObjectHelper.isEmpty(this._ccurlPow)) {
                throw new cryptoError_1.CryptoError("WebAssembly not loaded, have you called initialize");
            }
            if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
            }
            try {
                const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);
                resolve(trytes_1.Trytes.fromString(result));
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
exports.ProofOfWorkWasm = ProofOfWorkWasm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXYXNtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Byb29mT2ZXb3JrV2FzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0NBQW9DO0FBQ3BDLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsMEVBQXVFO0FBQ3ZFLHdGQUFxRjtBQUNyRiw2REFBMEQ7QUFDMUQsYUFBYTtBQUNiLG9GQUF5RDtBQUd6RDs7R0FFRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxpQ0FBZTtJQU9oRDs7OztPQUlHO0lBQ0gsWUFBWSxXQUEwQixFQUFFLFdBQTBCO1FBQzlELEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuQixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2hCLGVBQWUsRUFBRSxPQUFPLFdBQVc7Z0JBQ25DLGdCQUFnQixFQUFFLDRCQUFlO2FBQ3BDLENBQUM7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLE1BQU0sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQU8sS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEtBQUssV0FBVyxFQUFFO2dCQUM5RyxNQUFNLENBQUMsSUFBSSx5QkFBVyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQzthQUM5RDtZQUVELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztZQUV2QixNQUFNLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQztZQUVGLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLHlCQUFXLENBQUMsd0RBQXdELEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckc7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBYyxFQUFFLGtCQUEwQjtRQUM3RCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLElBQUkseUJBQVcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO2FBQy9FO1lBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNkNBQTZDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxJQUFJLHlCQUFXLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUMvRDtZQUVELElBQUk7Z0JBQ0EsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFFckUsT0FBTyxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN0QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUEvRUQsMENBK0VDIn0=