var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="emscripten" />
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
// @ts-ignore
const iota_pico_pow_wasm_1 = __importDefault(require("../wasm/iota-pico-pow-wasm"));
/**
 * CurlProofOfWork implementation using WebAssembly.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        return new Promise((resolve, reject) => {
            if (typeof WebAssembly === undefined) {
                reject(new coreError_1.CoreError("No WebAssembly support detected"));
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
                reject(new coreError_1.CoreError("There was a problem intializing the WebAssembly Module", undefined, err));
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
            if (trytes === undefined || trytes === null) {
                throw new coreError_1.CoreError("Trytes can not be null or undefined");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
                throw new coreError_1.CoreError("The minWeightMagnitude value is not an integer");
            }
            const result = this._ccurlPow(trytes.toString(), minWeightMagnitude);
            resolve(trytes_1.Trytes.create(result));
        });
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybFByb29mT2ZXb3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2N1cmxQcm9vZk9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0NBQW9DO0FBQ3BDLG9FQUFpRTtBQUNqRSw0RUFBeUU7QUFFekUsNkRBQTBEO0FBQzFELGFBQWE7QUFDYixvRkFBeUQ7QUFFekQ7O0dBRUc7QUFDSDtJQUlJOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxxQkFBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBRUQsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1lBRXZCLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDO2dCQUNELDRCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUkscUJBQVMsQ0FBQyx3REFBd0QsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7UUFFdkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDMUUsQ0FBQztZQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFckUsT0FBTyxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWxERCwwQ0FrREMifQ==