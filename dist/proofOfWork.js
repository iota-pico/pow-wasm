var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="emscripten" />
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
// @ts-ignore
const iota_pico_pow_wasm_1 = __importDefault(require("../wasm/iota-pico-pow-wasm"));
/**
 * ProofOfWork implementation using WebAssembly.
 */
class ProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        return new Promise((resolve, reject) => {
            if (objectHelper_1.ObjectHelper.isEmpty(typeof WebAssembly)) {
                reject(new cryptoError_1.CryptoError("No WebAssembly support detected"));
            }
            const module = {};
            module.onRuntimeInitialized = () => {
                this._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                resolve();
            };
            try {
                iota_pico_pow_wasm_1.default(module);
            }
            catch (err) {
                reject(new cryptoError_1.CryptoError("There was a problem intializing the WebAssembly Module", undefined, err));
            }
        });
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        return new Promise((resolve, reject) => {
            if (objectHelper_1.ObjectHelper.isEmpty(this._ccurlPow)) {
                throw new cryptoError_1.CryptoError("WebAssembly not loaded, have you called initialize");
            }
            if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude value is not an integer");
            }
            const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);
            resolve(trytes_1.Trytes.fromString(result));
        });
    }
}
exports.ProofOfWork = ProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJvb2ZPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9DQUFvQztBQUNwQyw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDBFQUF1RTtBQUV2RSw2REFBMEQ7QUFDMUQsYUFBYTtBQUNiLG9GQUF5RDtBQUV6RDs7R0FFRztBQUNIO0lBSUk7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsSUFBSSx5QkFBVyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1lBRXZCLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDO2dCQUNELDRCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUkseUJBQVcsQ0FBQyx3REFBd0QsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7UUFDdkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDaEYsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNkNBQTZDLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxJQUFJLHlCQUFXLENBQUMsZ0RBQWdELENBQUMsQ0FBQztZQUM1RSxDQUFDO1lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVyRSxPQUFPLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBcERELGtDQW9EQyJ9