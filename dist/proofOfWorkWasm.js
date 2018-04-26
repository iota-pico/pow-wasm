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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXYXNtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Byb29mT2ZXb3JrV2FzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0NBQW9DO0FBQ3BDLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsMEVBQXVFO0FBQ3ZFLHdGQUFxRjtBQUNyRiw2REFBMEQ7QUFDMUQsYUFBYTtBQUNiLG9GQUF5RDtBQUd6RDs7R0FFRztBQUNILHFCQUE2QixTQUFRLGlDQUFlO0lBT2hEOzs7O09BSUc7SUFDSCxZQUFZLFdBQTBCLEVBQUUsV0FBMEI7UUFDOUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5CLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDaEIsZUFBZSxFQUFFLE9BQU8sV0FBVztnQkFDbkMsZ0JBQWdCLEVBQUUsNEJBQWU7YUFDcEMsQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDbkIsTUFBTSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBTyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQy9DLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7Z0JBQzlHLE1BQU0sQ0FBQyxJQUFJLHlCQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1lBRUQsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1lBRXZCLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsSUFBSTtnQkFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUkseUJBQVcsQ0FBQyx3REFBd0QsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyRztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsa0JBQTBCO1FBQzdELE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7YUFDL0U7WUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLElBQUkseUJBQVcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsSUFBSTtnQkFDQSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUVyRSxPQUFPLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQS9FRCwwQ0ErRUMifQ==