"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="webassembly-js-api" />
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const fetch = __importStar(require("node-fetch"));
/**
 * CurlProofOfWork implementation using WebAssembly.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        if (typeof WebAssembly === undefined) {
            throw new coreError_1.CoreError("No WebAssembly Support detected");
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
    async loadWebAssembly(filename) {
        return fetch(filename)
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.compile(buffer))
            .then(module => {
            const imports = {};
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
exports.CurlProofOfWork = CurlProofOfWork;
