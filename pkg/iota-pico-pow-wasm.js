(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"), require("@iota-pico/data/dist/data/trytes"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-wasm", ["@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/crypto/dist/error/cryptoError", "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase", "@iota-pico/data/dist/data/trytes"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-wasm"] = factory(require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"), require("@iota-pico/data/dist/data/trytes"));
	else
		root["IotaPicoPowWasm"] = factory(root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/crypto/dist/error/cryptoError"], root["@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"], root["@iota-pico/data/dist/data/trytes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_proofOfWork_proofOfWorkBase__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./proofOfWorkWasm */ "./dist/proofOfWorkWasm.js"));

/***/ }),

/***/ "./dist/proofOfWorkWasm.js":
/*!*********************************!*\
  !*** ./dist/proofOfWorkWasm.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); /// <reference types="emscripten" />

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");

var proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes"); // @ts-ignore


var iota_pico_pow_wasm_1 = __importDefault(__webpack_require__(/*! ../wasm/iota-pico-pow-wasm */ "./wasm/iota-pico-pow-wasm.js"));
/**
 * ProofOfWork implementation using WebAssembly.
 */


var ProofOfWorkWasm =
/*#__PURE__*/
function (_proofOfWorkBase_1$Pr) {
  _inherits(ProofOfWorkWasm, _proofOfWorkBase_1$Pr);

  /**
   * Create a new instance of ProofOfWork.
   * @param webPlatform Provides platform specific functions, optional mostly used for testing.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkWasm(webPlatform, timeService) {
    var _this;

    _classCallCheck(this, ProofOfWorkWasm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProofOfWorkWasm).call(this, timeService));

    if (objectHelper_1.ObjectHelper.isEmpty(webPlatform)) {
      _this._webPlatform = {
        webAssemblyType: typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly),
        wasmModuleLoader: iota_pico_pow_wasm_1.default
      };
    } else {
      _this._webPlatform = webPlatform;
    }

    return _this;
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   * @returns Promise.
   */


  _createClass(ProofOfWorkWasm, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(_getPrototypeOf(ProofOfWorkWasm.prototype), "initialize", this).call(this);

              case 2:
                return _context2.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(resolve, reject) {
                    var module;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (objectHelper_1.ObjectHelper.isEmpty(_this2._webPlatform.webAssemblyType) || _this2._webPlatform.webAssemblyType === "undefined") {
                              reject(new cryptoError_1.CryptoError("No WebAssembly support detected"));
                            }

                            module = {};

                            module.onRuntimeInitialized = function () {
                              _this2._ccurlPow = module.cwrap("ccurl_pow", "string", ["string", "number"]);
                              resolve();
                            };

                            try {
                              _this2._webPlatform.wasmModuleLoader(module);
                            } catch (err) {
                              reject(new cryptoError_1.CryptoError("There was a problem intializing the WebAssembly Module", undefined, err));
                            }

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "singlePow",
    value: function () {
      var _singlePow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(trytes, minWeightMagnitude) {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  if (objectHelper_1.ObjectHelper.isEmpty(_this3._ccurlPow)) {
                    throw new cryptoError_1.CryptoError("WebAssembly not loaded, have you called initialize");
                  }

                  if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                    throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
                  }

                  if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                    throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
                  }

                  try {
                    var result = _this3._ccurlPow(trytes.toString(), minWeightMagnitude);

                    resolve(trytes_1.Trytes.fromString(result));
                  } catch (err) {
                    reject(err);
                  }
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function singlePow(_x3, _x4) {
        return _singlePow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkWasm;
}(proofOfWorkBase_1.ProofOfWorkBase);

exports.ProofOfWorkWasm = ProofOfWorkWasm;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/node-libs-browser/2.1.0/node_modules/node-libs-browser/mock/empty.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/node-libs-browser/2.1.0/node_modules/node-libs-browser/mock/empty.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/webpack/4.12.2/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./wasm/iota-pico-pow-wasm.js":
/*!************************************!*\
  !*** ./wasm/iota-pico-pow-wasm.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Module = function Module(_Module) {
  _Module = _Module || {}; // The Module object: Our interface to the outside world. We import
  // and export values on it. There are various ways Module can be used:
  // 1. Not defined. We create it here
  // 2. A function parameter, function(Module) { ..generated code.. }
  // 3. pre-run appended it, var Module = {}; ..generated code..
  // 4. External script tag defines var Module.
  // We need to check if Module already exists (e.g. case 3 above).
  // Substitution will be replaced with actual code on later stage of the build,
  // this way Closure Compiler will not mangle it (e.g. case 4. above).
  // Note that if you want to run closure, and also to use Module
  // after the generated code, you will need to define   var Module = {};
  // before the code. Then that object will be used in the code, and you
  // can continue to use Module afterwards as well.

  var _Module = typeof _Module !== 'undefined' ? _Module : {}; // --pre-jses are emitted after the Module integration code, so that they can
  // refer to Module (if they choose; they can also define Module)
  // {{PRE_JSES}}
  // Sometimes an existing Module object exists with properties
  // meant to overwrite the default module functionality. Here
  // we collect those properties and reapply _after_ we configure
  // the current environment's defaults to avoid having to be so
  // defensive during initialization.


  var moduleOverrides = {};
  var key;

  for (key in _Module) {
    if (_Module.hasOwnProperty(key)) {
      moduleOverrides[key] = _Module[key];
    }
  }

  _Module['arguments'] = [];
  _Module['thisProgram'] = './this.program';

  _Module['quit'] = function (status, toThrow) {
    throw toThrow;
  };

  _Module['preRun'] = [];
  _Module['postRun'] = []; // The environment setup code below is customized to use Module.
  // *** Environment setup code ***

  var ENVIRONMENT_IS_WEB = false;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false; // Three configurations we can be running in:
  // 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
  // 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
  // 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

  if (_Module['ENVIRONMENT']) {
    if (_Module['ENVIRONMENT'] === 'WEB') {
      ENVIRONMENT_IS_WEB = true;
    } else if (_Module['ENVIRONMENT'] === 'WORKER') {
      ENVIRONMENT_IS_WORKER = true;
    } else if (_Module['ENVIRONMENT'] === 'NODE') {
      ENVIRONMENT_IS_NODE = true;
    } else if (_Module['ENVIRONMENT'] === 'SHELL') {
      ENVIRONMENT_IS_SHELL = true;
    } else {
      throw new Error('Module[\'ENVIRONMENT\'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.');
    }
  } else {
    ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
    ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
    ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && "function" === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  }

  if (ENVIRONMENT_IS_NODE) {
    // Expose functionality in the same simple way that the shells work
    // Note that we pollute the global namespace here, otherwise we break in node
    var nodeFS;
    var nodePath;

    _Module['read'] = function shell_read(filename, binary) {
      var ret;
      ret = tryParseAsDataURI(filename);

      if (!ret) {
        if (!nodeFS) nodeFS = __webpack_require__(/*! fs */ "./node_modules/.registry.npmjs.org/node-libs-browser/2.1.0/node_modules/node-libs-browser/mock/empty.js");
        if (!nodePath) nodePath = __webpack_require__(/*! path */ "./node_modules/.registry.npmjs.org/node-libs-browser/2.1.0/node_modules/node-libs-browser/mock/empty.js");
        filename = nodePath['normalize'](filename);
        ret = nodeFS['readFileSync'](filename);
      }

      return binary ? ret : ret.toString();
    };

    _Module['readBinary'] = function readBinary(filename) {
      var ret = _Module['read'](filename, true);

      if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }

      assert(ret.buffer);
      return ret;
    };

    if (process['argv'].length > 1) {
      _Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    }

    _Module['arguments'] = process['argv'].slice(2); // MODULARIZE will export the module in the proper place outside, we don't need to export here

    process['on']('uncaughtException', function (ex) {
      // suppress ExitStatus exceptions from showing an error
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    }); // Currently node will swallow unhandled rejections, but this behavior is
    // deprecated, and in the future it will exit with error status.

    process['on']('unhandledRejection', function (reason, p) {
      _Module['printErr']('node.js exiting due to unhandled promise rejection');

      process['exit'](1);
    });

    _Module['inspect'] = function () {
      return '[Emscripten Module object]';
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != 'undefined') {
      _Module['read'] = function shell_read(f) {
        var data = tryParseAsDataURI(f);

        if (data) {
          return intArrayToString(data);
        }

        return read(f);
      };
    }

    _Module['readBinary'] = function readBinary(f) {
      var data;
      data = tryParseAsDataURI(f);

      if (data) {
        return data;
      }

      if (typeof readbuffer === 'function') {
        return new Uint8Array(readbuffer(f));
      }

      data = read(f, 'binary');
      assert(_typeof(data) === 'object');
      return data;
    };

    if (typeof scriptArgs != 'undefined') {
      _Module['arguments'] = scriptArgs;
    } else if (typeof arguments != 'undefined') {
      _Module['arguments'] = arguments;
    }

    if (typeof quit === 'function') {
      _Module['quit'] = function (status, toThrow) {
        quit(status);
      };
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    _Module['read'] = function shell_read(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send(null);
        return xhr.responseText;
      } catch (err) {
        var data = tryParseAsDataURI(url);

        if (data) {
          return intArrayToString(data);
        }

        throw err;
      }
    };

    if (ENVIRONMENT_IS_WORKER) {
      _Module['readBinary'] = function readBinary(url) {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          xhr.responseType = 'arraybuffer';
          xhr.send(null);
          return new Uint8Array(xhr.response);
        } catch (err) {
          var data = tryParseAsDataURI(url);

          if (data) {
            return data;
          }

          throw err;
        }
      };
    }

    _Module['readAsync'] = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function xhr_onload() {
        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
          // file URLs can return 0
          onload(xhr.response);
          return;
        }

        var data = tryParseAsDataURI(url);

        if (data) {
          onload(data.buffer);
          return;
        }

        onerror();
      };

      xhr.onerror = onerror;
      xhr.send(null);
    };

    if (typeof arguments != 'undefined') {
      _Module['arguments'] = arguments;
    }

    _Module['setWindowTitle'] = function (title) {
      document.title = title;
    };
  } else {
    // Unreachable because SHELL is dependent on the others
    throw new Error('unknown runtime environment');
  } // console.log is checked first, as 'print' on the web will open a print dialogue
  // printErr is preferable to console.warn (works better in shells)


  _Module['print'] = typeof console !== 'undefined' ? console.log : typeof print !== 'undefined' ? print : null;
  _Module['printErr'] = typeof printErr !== 'undefined' ? printErr : typeof console !== 'undefined' && console.warn || _Module['print']; // *** Environment setup code ***
  // Closure helpers

  _Module.print = _Module['print'];
  _Module.printErr = _Module['printErr']; // Merge back in the overrides

  for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      _Module[key] = moduleOverrides[key];
    }
  } // Free the object hierarchy contained in the overrides, this lets the GC
  // reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.


  moduleOverrides = undefined; // {{PREAMBLE_ADDITIONS}}

  var STACK_ALIGN = 16; // stack management, and other functionality that is provided by the compiled code,
  // should not be used before it is ready

  _stackSave = _stackRestore = stackAlloc = setTempRet0 = getTempRet0 = function getTempRet0() {
    abort('cannot use the stack before compiled code is ready to run, and has provided stack access');
  };

  function staticAlloc(size) {
    assert(!staticSealed);
    var ret = STATICTOP;
    STATICTOP = STATICTOP + size + 15 & -16;
    return ret;
  }

  function dynamicAlloc(size) {
    assert(DYNAMICTOP_PTR);
    var ret = HEAP32[DYNAMICTOP_PTR >> 2];
    var end = ret + size + 15 & -16;
    HEAP32[DYNAMICTOP_PTR >> 2] = end;

    if (end >= TOTAL_MEMORY) {
      var success = enlargeMemory();

      if (!success) {
        HEAP32[DYNAMICTOP_PTR >> 2] = ret;
        return 0;
      }
    }

    return ret;
  }

  function alignMemory(size, factor) {
    if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default

    var ret = size = Math.ceil(size / factor) * factor;
    return ret;
  }

  function getNativeTypeSize(type) {
    switch (type) {
      case 'i1':
      case 'i8':
        return 1;

      case 'i16':
        return 2;

      case 'i32':
        return 4;

      case 'i64':
        return 8;

      case 'float':
        return 4;

      case 'double':
        return 8;

      default:
        {
          if (type[type.length - 1] === '*') {
            return 4; // A pointer
          } else if (type[0] === 'i') {
            var bits = parseInt(type.substr(1));
            assert(bits % 8 === 0);
            return bits / 8;
          } else {
            return 0;
          }
        }
    }
  }

  function warnOnce(text) {
    if (!warnOnce.shown) warnOnce.shown = {};

    if (!warnOnce.shown[text]) {
      warnOnce.shown[text] = 1;

      _Module.printErr(text);
    }
  }

  var functionPointers = new Array(0);

  function addFunction(func) {
    for (var i = 0; i < functionPointers.length; i++) {
      if (!functionPointers[i]) {
        functionPointers[i] = func;
        return 1 + i;
      }
    }

    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  }

  function removeFunction(index) {
    functionPointers[index - 1] = null;
  }

  var funcWrappers = {};

  function getFuncWrapper(func, sig) {
    if (!func) return; // on null pointer, return undefined

    assert(sig);

    if (!funcWrappers[sig]) {
      funcWrappers[sig] = {};
    }

    var sigCache = funcWrappers[sig];

    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }

    return sigCache[func];
  }

  function makeBigInt(low, high, unsigned) {
    return unsigned ? +(low >>> 0) + +(high >>> 0) * 4294967296.0 : +(low >>> 0) + +(high | 0) * 4294967296.0;
  }

  function dynCall(sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length - 1);
      assert('dynCall_' + sig in _Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return _Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert('dynCall_' + sig in _Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return _Module['dynCall_' + sig].call(null, ptr);
    }
  }

  function getCompilerSetting(name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
  }

  var Runtime = {
    // FIXME backwards compatibility layer for ports. Support some Runtime.*
    //       for now, fix it there, then remove it from here. That way we
    //       can minimize any period of breakage.
    dynCall: dynCall,
    // for SDL2 port
    // helpful errors
    getTempRet0: function getTempRet0() {
      abort('getTempRet0() is now a top-level function, after removing the Runtime object. Remove "Runtime."');
    },
    staticAlloc: function staticAlloc() {
      abort('staticAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."');
    },
    stackAlloc: function stackAlloc() {
      abort('stackAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."');
    }
  }; // The address globals begin at. Very low in memory, for code size and optimization opportunities.
  // Above 0 is static memory, starting with globals.
  // Then the stack.
  // Then 'dynamic' memory for sbrk.

  var GLOBAL_BASE = 1024; // === Preamble library stuff ===
  // Documentation for the public APIs defined in this file must be updated in:
  //    site/source/docs/api_reference/preamble.js.rst
  // A prebuilt local version of the documentation is available at:
  //    site/build/text/docs/api_reference/preamble.js.txt
  // You can also build docs locally as HTML or other formats in site/
  // An online HTML version (which may be of a different version of Emscripten)
  //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html
  //========================================
  // Runtime essentials
  //========================================

  var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()

  var EXITSTATUS = 0;
  /** @type {function(*, string=)} */

  function assert(condition, text) {
    if (!condition) {
      abort('Assertion failed: ' + text);
    }
  }

  var globalScope = this; // Returns the C function with a specified identifier (for C++, you need to do manual name mangling)

  function getCFunc(ident) {
    var func = _Module['_' + ident]; // closure exported function

    assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
    return func;
  }

  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function stackSave() {
      _stackSave();
    },
    'stackRestore': function stackRestore() {
      _stackRestore();
    },
    // type conversion from js to c
    'arrayToC': function arrayToC(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC': function stringToC(str) {
      var ret = 0;

      if (str !== null && str !== undefined && str !== 0) {
        // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }

      return ret;
    }
  }; // For fast lookup of conversion functions

  var toC = {
    'string': JSfuncs['stringToC'],
    'array': JSfuncs['arrayToC']
  }; // C calling interface.

  function ccall(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');

    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];

        if (converter) {
          if (stack === 0) stack = _stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }

    var ret = func.apply(null, cArgs);
    if (returnType === 'string') ret = Pointer_stringify(ret);

    if (stack !== 0) {
      _stackRestore(stack);
    }

    return ret;
  }

  function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident); // When the function takes numbers and returns a number, we can just return
    // the original function

    var numericArgs = argTypes.every(function (type) {
      return type === 'number';
    });
    var numericRet = returnType !== 'string';

    if (numericRet && numericArgs) {
      return cfunc;
    }

    return function () {
      return ccall(ident, returnType, argTypes, arguments);
    };
  }
  /** @type {function(number, number, string, boolean=)} */


  function setValue(ptr, value, type, noSafe) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit

    switch (type) {
      case 'i1':
        HEAP8[ptr >> 0] = value;
        break;

      case 'i8':
        HEAP8[ptr >> 0] = value;
        break;

      case 'i16':
        HEAP16[ptr >> 1] = value;
        break;

      case 'i32':
        HEAP32[ptr >> 2] = value;
        break;

      case 'i64':
        tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= 1.0 ? tempDouble > 0.0 ? (Math_min(+Math_floor(tempDouble / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296.0) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
        break;

      case 'float':
        HEAPF32[ptr >> 2] = value;
        break;

      case 'double':
        HEAPF64[ptr >> 3] = value;
        break;

      default:
        abort('invalid type for setValue: ' + type);
    }
  }
  /** @type {function(number, string, boolean=)} */


  function getValue(ptr, type, noSafe) {
    type = type || 'i8';
    if (type.charAt(type.length - 1) === '*') type = 'i32'; // pointers are 32-bit

    switch (type) {
      case 'i1':
        return HEAP8[ptr >> 0];

      case 'i8':
        return HEAP8[ptr >> 0];

      case 'i16':
        return HEAP16[ptr >> 1];

      case 'i32':
        return HEAP32[ptr >> 2];

      case 'i64':
        return HEAP32[ptr >> 2];

      case 'float':
        return HEAPF32[ptr >> 2];

      case 'double':
        return HEAPF64[ptr >> 3];

      default:
        abort('invalid type for getValue: ' + type);
    }

    return null;
  }

  var ALLOC_NORMAL = 0; // Tries to use _malloc()

  var ALLOC_STACK = 1; // Lives for the duration of the current function call

  var ALLOC_STATIC = 2; // Cannot be freed

  var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk

  var ALLOC_NONE = 4; // Do not allocate
  // allocate(): This is for internal use. You can use it yourself as well, but the interface
  //             is a little tricky (see docs right below). The reason is that it is optimized
  //             for multiple syntaxes to save space in generated code. So you should
  //             normally not use allocate(), and instead allocate memory using _malloc(),
  //             initialize it with setValue(), and so forth.
  // @slab: An array of data, or a number. If a number, then the size of the block to allocate,
  //        in *bytes* (note that this is sometimes confusing: the next parameter does not
  //        affect this!)
  // @types: Either an array of types, one for each byte (or 0 if no type at that position),
  //         or a single type which is used for the entire block. This only matters if there
  //         is initial data - if @slab is a number, then this does not matter at all and is
  //         ignored.
  // @allocator: How to allocate memory, see ALLOC_*

  /** @type {function((TypedArray|Array<number>|number), string, number, number=)} */

  function allocate(slab, types, allocator, ptr) {
    var zeroinit, size;

    if (typeof slab === 'number') {
      zeroinit = true;
      size = slab;
    } else {
      zeroinit = false;
      size = slab.length;
    }

    var singleType = typeof types === 'string' ? types : null;
    var ret;

    if (allocator == ALLOC_NONE) {
      ret = ptr;
    } else {
      ret = [typeof _malloc === 'function' ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
    }

    if (zeroinit) {
      var stop;
      ptr = ret;
      assert((ret & 3) == 0);
      stop = ret + (size & ~3);

      for (; ptr < stop; ptr += 4) {
        HEAP32[ptr >> 2] = 0;
      }

      stop = ret + size;

      while (ptr < stop) {
        HEAP8[ptr++ >> 0] = 0;
      }

      return ret;
    }

    if (singleType === 'i8') {
      if (slab.subarray || slab.slice) {
        HEAPU8.set(
        /** @type {!Uint8Array} */
        slab, ret);
      } else {
        HEAPU8.set(new Uint8Array(slab), ret);
      }

      return ret;
    }

    var i = 0,
        type,
        typeSize,
        previousType;

    while (i < size) {
      var curr = slab[i];
      type = singleType || types[i];

      if (type === 0) {
        i++;
        continue;
      }

      assert(type, 'Must know what type to store in allocate!');
      if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

      setValue(ret + i, curr, type); // no need to look up size unless type changes, so cache it

      if (previousType !== type) {
        typeSize = getNativeTypeSize(type);
        previousType = type;
      }

      i += typeSize;
    }

    return ret;
  } // Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready


  function getMemory(size) {
    if (!staticSealed) return staticAlloc(size);
    if (!runtimeInitialized) return dynamicAlloc(size);
    return _malloc(size);
  }
  /** @type {function(number, number=)} */


  function Pointer_stringify(ptr, length) {
    if (length === 0 || !ptr) return ''; // TODO: use TextDecoder
    // Find the length, and check for UTF while doing so

    var hasUtf = 0;
    var t;
    var i = 0;

    while (1) {
      assert(ptr + i < TOTAL_MEMORY);
      t = HEAPU8[ptr + i >> 0];
      hasUtf |= t;
      if (t == 0 && !length) break;
      i++;
      if (length && i == length) break;
    }

    if (!length) length = i;
    var ret = '';

    if (hasUtf < 128) {
      var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack

      var curr;

      while (length > 0) {
        curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
        ret = ret ? ret + curr : curr;
        ptr += MAX_CHUNK;
        length -= MAX_CHUNK;
      }

      return ret;
    }

    return UTF8ToString(ptr);
  } // Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
  // a copy of that string as a Javascript String object.


  function AsciiToString(ptr) {
    var str = '';

    while (1) {
      var ch = HEAP8[ptr++ >> 0];
      if (!ch) return str;
      str += String.fromCharCode(ch);
    }
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.


  function stringToAscii(str, outPtr) {
    return writeAsciiToMemory(str, outPtr, false);
  } // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
  // a copy of that string as a Javascript String object.


  var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

  function UTF8ArrayToString(u8Array, idx) {
    var endPtr = idx; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.

    while (u8Array[endPtr]) {
      ++endPtr;
    }

    if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
    } else {
      var u0, u1, u2, u3, u4, u5;
      var str = '';

      while (1) {
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
        u0 = u8Array[idx++];
        if (!u0) return str;

        if (!(u0 & 0x80)) {
          str += String.fromCharCode(u0);
          continue;
        }

        u1 = u8Array[idx++] & 63;

        if ((u0 & 0xE0) == 0xC0) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }

        u2 = u8Array[idx++] & 63;

        if ((u0 & 0xF0) == 0xE0) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u3 = u8Array[idx++] & 63;

          if ((u0 & 0xF8) == 0xF0) {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3;
          } else {
            u4 = u8Array[idx++] & 63;

            if ((u0 & 0xFC) == 0xF8) {
              u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4;
            } else {
              u5 = u8Array[idx++] & 63;
              u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5;
            }
          }
        }

        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
        }
      }
    }
  } // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
  // a copy of that string as a Javascript String object.


  function UTF8ToString(ptr) {
    return UTF8ArrayToString(HEAPU8, ptr);
  } // Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
  // encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
  //   outIdx: The starting offset in the array to begin the copying.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
      return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      var u = str.charCodeAt(i); // possibly a lead surrogate

      if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;

      if (u <= 0x7F) {
        if (outIdx >= endIdx) break;
        outU8Array[outIdx++] = u;
      } else if (u <= 0x7FF) {
        if (outIdx + 1 >= endIdx) break;
        outU8Array[outIdx++] = 0xC0 | u >> 6;
        outU8Array[outIdx++] = 0x80 | u & 63;
      } else if (u <= 0xFFFF) {
        if (outIdx + 2 >= endIdx) break;
        outU8Array[outIdx++] = 0xE0 | u >> 12;
        outU8Array[outIdx++] = 0x80 | u >> 6 & 63;
        outU8Array[outIdx++] = 0x80 | u & 63;
      } else if (u <= 0x1FFFFF) {
        if (outIdx + 3 >= endIdx) break;
        outU8Array[outIdx++] = 0xF0 | u >> 18;
        outU8Array[outIdx++] = 0x80 | u >> 12 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 6 & 63;
        outU8Array[outIdx++] = 0x80 | u & 63;
      } else if (u <= 0x3FFFFFF) {
        if (outIdx + 4 >= endIdx) break;
        outU8Array[outIdx++] = 0xF8 | u >> 24;
        outU8Array[outIdx++] = 0x80 | u >> 18 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 12 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 6 & 63;
        outU8Array[outIdx++] = 0x80 | u & 63;
      } else {
        if (outIdx + 5 >= endIdx) break;
        outU8Array[outIdx++] = 0xFC | u >> 30;
        outU8Array[outIdx++] = 0x80 | u >> 24 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 18 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 12 & 63;
        outU8Array[outIdx++] = 0x80 | u >> 6 & 63;
        outU8Array[outIdx++] = 0x80 | u & 63;
      }
    } // Null-terminate the pointer to the buffer.


    outU8Array[outIdx] = 0;
    return outIdx - startIdx;
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF8(str) {
    var len = 0;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var u = str.charCodeAt(i); // possibly a lead surrogate

      if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;

      if (u <= 0x7F) {
        ++len;
      } else if (u <= 0x7FF) {
        len += 2;
      } else if (u <= 0xFFFF) {
        len += 3;
      } else if (u <= 0x1FFFFF) {
        len += 4;
      } else if (u <= 0x3FFFFFF) {
        len += 5;
      } else {
        len += 6;
      }
    }

    return len;
  } // Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
  // a copy of that string as a Javascript String object.


  var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

  function UTF16ToString(ptr) {
    assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
    var endPtr = ptr; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.

    var idx = endPtr >> 1;

    while (HEAP16[idx]) {
      ++idx;
    }

    endPtr = idx << 1;

    if (endPtr - ptr > 32 && UTF16Decoder) {
      return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
    } else {
      var i = 0;
      var str = '';

      while (1) {
        var codeUnit = HEAP16[ptr + i * 2 >> 1];
        if (codeUnit == 0) return str;
        ++i; // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.

        str += String.fromCharCode(codeUnit);
      }
    }
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
  // Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF16(str, outPtr, maxBytesToWrite) {
    assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'); // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.

    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }

    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2; // Null terminator.

    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;

    for (var i = 0; i < numCharsToWrite; ++i) {
      // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

      HEAP16[outPtr >> 1] = codeUnit;
      outPtr += 2;
    } // Null-terminate the pointer to the HEAP.


    HEAP16[outPtr >> 1] = 0;
    return outPtr - startPtr;
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF16(str) {
    return str.length * 2;
  }

  function UTF32ToString(ptr) {
    assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
    var i = 0;
    var str = '';

    while (1) {
      var utf32 = HEAP32[ptr + i * 4 >> 2];
      if (utf32 == 0) return str;
      ++i; // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
      // See http://unicode.org/faq/utf_bom.html#utf16-3

      if (utf32 >= 0x10000) {
        var ch = utf32 - 0x10000;
        str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
      } else {
        str += String.fromCharCode(utf32);
      }
    }
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
  // Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF32(str, outPtr, maxBytesToWrite) {
    assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!'); // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.

    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }

    if (maxBytesToWrite < 4) return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
        var trailSurrogate = str.charCodeAt(++i);
        codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | trailSurrogate & 0x3FF;
      }

      HEAP32[outPtr >> 2] = codeUnit;
      outPtr += 4;
      if (outPtr + 4 > endPtr) break;
    } // Null-terminate the pointer to the HEAP.


    HEAP32[outPtr >> 2] = 0;
    return outPtr - startPtr;
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF32(str) {
    var len = 0;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i);
      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.

      len += 4;
    }

    return len;
  } // Allocate heap space for a JS string, and write it there.
  // It is the responsibility of the caller to free() that memory.


  function allocateUTF8(str) {
    var size = lengthBytesUTF8(str) + 1;

    var ret = _malloc(size);

    if (ret) stringToUTF8Array(str, HEAP8, ret, size);
    return ret;
  } // Allocate stack space for a JS string, and write it there.


  function allocateUTF8OnStack(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8Array(str, HEAP8, ret, size);
    return ret;
  }

  function demangle(func) {
    warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
    return func;
  }

  function demangleAll(text) {
    var regex = /__Z[\w\d_]+/g;
    return text.replace(regex, function (x) {
      var y = demangle(x);
      return x === y ? x : x + ' [' + y + ']';
    });
  }

  function jsStackTrace() {
    var err = new Error();

    if (!err.stack) {
      // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
      // so try that as a special-case.
      try {
        throw new Error(0);
      } catch (e) {
        err = e;
      }

      if (!err.stack) {
        return '(no stack trace available)';
      }
    }

    return err.stack.toString();
  }

  function stackTrace() {
    var js = jsStackTrace();
    if (_Module['extraStackTrace']) js += '\n' + _Module['extraStackTrace']();
    return demangleAll(js);
  } // Memory management


  var PAGE_SIZE = 16384;
  var WASM_PAGE_SIZE = 65536;
  var ASMJS_PAGE_SIZE = 16777216;
  var MIN_TOTAL_MEMORY = 16777216;

  function alignUp(x, multiple) {
    if (x % multiple > 0) {
      x += multiple - x % multiple;
    }

    return x;
  }

  var HEAP,
  /** @type {ArrayBuffer} */
  buffer,
  /** @type {Int8Array} */
  HEAP8,
  /** @type {Uint8Array} */
  HEAPU8,
  /** @type {Int16Array} */
  HEAP16,
  /** @type {Uint16Array} */
  HEAPU16,
  /** @type {Int32Array} */
  HEAP32,
  /** @type {Uint32Array} */
  HEAPU32,
  /** @type {Float32Array} */
  HEAPF32,
  /** @type {Float64Array} */
  HEAPF64;

  function updateGlobalBuffer(buf) {
    _Module['buffer'] = buffer = buf;
  }

  function updateGlobalBufferViews() {
    _Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
    _Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
    _Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
    _Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
    _Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
    _Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
    _Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
    _Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
  }

  var STATIC_BASE, STATICTOP, staticSealed; // static area

  var STACK_BASE, STACKTOP, STACK_MAX; // stack area

  var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false; // Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.

  function writeStackCookie() {
    assert((STACK_MAX & 3) == 0);
    HEAPU32[(STACK_MAX >> 2) - 1] = 0x02135467;
    HEAPU32[(STACK_MAX >> 2) - 2] = 0x89BACDFE;
  }

  function checkStackCookie() {
    if (HEAPU32[(STACK_MAX >> 2) - 1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2) - 2] != 0x89BACDFE) {
      abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2) - 2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2) - 1].toString(16));
    } // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.


    if (HEAP32[0] !== 0x63736d65
    /* 'emsc' */
    ) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
  }

  function abortStackOverflow(allocSize) {
    abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - _stackSave() + allocSize) + ' bytes available!');
  }

  function abortOnCannotGrowMemory() {
    abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
  }

  function enlargeMemory() {
    abortOnCannotGrowMemory();
  }

  var TOTAL_STACK = _Module['TOTAL_STACK'] || 5242880;
  var TOTAL_MEMORY = _Module['TOTAL_MEMORY'] || 16777216;
  if (TOTAL_MEMORY < TOTAL_STACK) _Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')'); // Initialize the runtime's memory
  // check for full engine support (use string 'subarray' to avoid closure compiler confusion)

  assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, 'JS engine does not provide full typed array support'); // Use a provided buffer, if there is one, or else allocate a new one

  if (_Module['buffer']) {
    buffer = _Module['buffer'];
    assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
  } else {
    // Use a WebAssembly memory where available
    if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) === 'object' && typeof WebAssembly.Memory === 'function') {
      assert(TOTAL_MEMORY % WASM_PAGE_SIZE === 0);
      _Module['wasmMemory'] = new WebAssembly.Memory({
        'initial': TOTAL_MEMORY / WASM_PAGE_SIZE,
        'maximum': TOTAL_MEMORY / WASM_PAGE_SIZE
      });
      buffer = _Module['wasmMemory'].buffer;
    } else {
      buffer = new ArrayBuffer(TOTAL_MEMORY);
    }

    assert(buffer.byteLength === TOTAL_MEMORY);
    _Module['buffer'] = buffer;
  }

  updateGlobalBufferViews();

  function getTotalMemory() {
    return TOTAL_MEMORY;
  } // Endianness check (note: assumes compiler arch was little-endian)


  HEAP32[0] = 0x63736d65;
  /* 'emsc' */

  HEAP16[1] = 0x6373;
  if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();

      if (typeof callback == 'function') {
        callback();
        continue;
      }

      var func = callback.func;

      if (typeof func === 'number') {
        if (callback.arg === undefined) {
          _Module['dynCall_v'](func);
        } else {
          _Module['dynCall_vi'](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }

  var __ATPRERUN__ = []; // functions called before the runtime is initialized

  var __ATINIT__ = []; // functions called during startup

  var __ATMAIN__ = []; // functions called when main() is to be run

  var __ATEXIT__ = []; // functions called during shutdown

  var __ATPOSTRUN__ = []; // functions called after the runtime has exited

  var runtimeInitialized = false;
  var runtimeExited = false;

  function preRun() {
    // compatibility - merge in anything from Module['preRun'] at this time
    if (_Module['preRun']) {
      if (typeof _Module['preRun'] == 'function') _Module['preRun'] = [_Module['preRun']];

      while (_Module['preRun'].length) {
        addOnPreRun(_Module['preRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPRERUN__);
  }

  function ensureInitRuntime() {
    checkStackCookie();
    if (runtimeInitialized) return;
    runtimeInitialized = true;
    callRuntimeCallbacks(__ATINIT__);
  }

  function preMain() {
    checkStackCookie();
    callRuntimeCallbacks(__ATMAIN__);
  }

  function exitRuntime() {
    checkStackCookie();
    callRuntimeCallbacks(__ATEXIT__);
    runtimeExited = true;
  }

  function postRun() {
    checkStackCookie(); // compatibility - merge in anything from Module['postRun'] at this time

    if (_Module['postRun']) {
      if (typeof _Module['postRun'] == 'function') _Module['postRun'] = [_Module['postRun']];

      while (_Module['postRun'].length) {
        addOnPostRun(_Module['postRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPOSTRUN__);
  }

  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }

  function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }

  function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }

  function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
  }

  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  } // Deprecated: This function should not be called because it is unsafe and does not provide
  // a maximum length limit of how many bytes it is allowed to write. Prefer calling the
  // function stringToUTF8Array() instead, which takes in a maximum length that can be used
  // to be secure from out of bounds writes.

  /** @deprecated */


  function writeStringToMemory(string, buffer, dontAddNull) {
    warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');
    var
    /** @type {number} */
    lastChar,
    /** @type {number} */
    end;

    if (dontAddNull) {
      // stringToUTF8Array always appends null. If we don't want to do that, remember the
      // character that existed at the location where the null will be placed, and restore
      // that after the write (below).
      end = buffer + lengthBytesUTF8(string);
      lastChar = HEAP8[end];
    }

    stringToUTF8(string, buffer, Infinity);
    if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
  }

  function writeArrayToMemory(array, buffer) {
    assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)');
    HEAP8.set(array, buffer);
  }

  function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      assert(str.charCodeAt(i) === str.charCodeAt(i) & 0xff);
      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    } // Null-terminate the pointer to the HEAP.


    if (!dontAddNull) HEAP8[buffer >> 0] = 0;
  }

  function unSign(value, bits, ignore) {
    if (value >= 0) {
      return value;
    }

    return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
    : Math.pow(2, bits) + value;
  }

  function reSign(value, bits, ignore) {
    if (value <= 0) {
      return value;
    }

    var half = bits <= 32 ? Math.abs(1 << bits - 1) // abs is needed if bits == 32
    : Math.pow(2, bits - 1);

    if (value >= half && (bits <= 32 || value > half)) {
      // for huge values, we can hit the precision limit and always get true here. so don't do that
      // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
      // TODO: In i64 mode 1, resign the two parts separately and safely
      value = -2 * half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
    }

    return value;
  }

  assert(Math['imul'] && Math['fround'] && Math['clz32'] && Math['trunc'], 'this is a legacy browser, build with LEGACY_VM_SUPPORT');
  var Math_abs = Math.abs;
  var Math_cos = Math.cos;
  var Math_sin = Math.sin;
  var Math_tan = Math.tan;
  var Math_acos = Math.acos;
  var Math_asin = Math.asin;
  var Math_atan = Math.atan;
  var Math_atan2 = Math.atan2;
  var Math_exp = Math.exp;
  var Math_log = Math.log;
  var Math_sqrt = Math.sqrt;
  var Math_ceil = Math.ceil;
  var Math_floor = Math.floor;
  var Math_pow = Math.pow;
  var Math_imul = Math.imul;
  var Math_fround = Math.fround;
  var Math_round = Math.round;
  var Math_min = Math.min;
  var Math_max = Math.max;
  var Math_clz32 = Math.clz32;
  var Math_trunc = Math.trunc; // A counter of dependencies for calling run(). If we need to
  // do asynchronous work before running, increment this and
  // decrement it. Incrementing must happen in a place like
  // PRE_RUN_ADDITIONS (used by emcc to add file preloading).
  // Note that you can add dependencies in preRun, even though
  // it happens right before run - run will be postponed until
  // the dependencies are met.

  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

  var runDependencyTracking = {};

  function getUniqueRunDependency(id) {
    var orig = id;

    while (1) {
      if (!runDependencyTracking[id]) return id;
      id = orig + Math.random();
    }

    return id;
  }

  function addRunDependency(id) {
    runDependencies++;

    if (_Module['monitorRunDependencies']) {
      _Module['monitorRunDependencies'](runDependencies);
    }

    if (id) {
      assert(!runDependencyTracking[id]);
      runDependencyTracking[id] = 1;

      if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
        // Check for missing dependencies every few seconds
        runDependencyWatcher = setInterval(function () {
          if (ABORT) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
            return;
          }

          var shown = false;

          for (var dep in runDependencyTracking) {
            if (!shown) {
              shown = true;

              _Module.printErr('still waiting on run dependencies:');
            }

            _Module.printErr('dependency: ' + dep);
          }

          if (shown) {
            _Module.printErr('(end of list)');
          }
        }, 10000);
      }
    } else {
      _Module.printErr('warning: run dependency added without ID');
    }
  }

  function removeRunDependency(id) {
    runDependencies--;

    if (_Module['monitorRunDependencies']) {
      _Module['monitorRunDependencies'](runDependencies);
    }

    if (id) {
      assert(runDependencyTracking[id]);
      delete runDependencyTracking[id];
    } else {
      _Module.printErr('warning: run dependency removed without ID');
    }

    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }

      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback(); // can add another dependenciesFulfilled
      }
    }
  }

  _Module["preloadedImages"] = {}; // maps url to image data

  _Module["preloadedAudios"] = {}; // maps url to audio data

  var memoryInitializer = null;
  var
  /* show errors on likely calls to FS when it was not included */
  FS = {
    error: function error() {
      abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
    },
    init: function init() {
      FS.error();
    },
    createDataFile: function createDataFile() {
      FS.error();
    },
    createPreloadedFile: function createPreloadedFile() {
      FS.error();
    },
    createLazyFile: function createLazyFile() {
      FS.error();
    },
    open: function open() {
      FS.error();
    },
    mkdev: function mkdev() {
      FS.error();
    },
    registerDevice: function registerDevice() {
      FS.error();
    },
    analyzePath: function analyzePath() {
      FS.error();
    },
    loadFilesFromDB: function loadFilesFromDB() {
      FS.error();
    },
    ErrnoError: function ErrnoError() {
      FS.error();
    }
  };
  _Module['FS_createDataFile'] = FS.createDataFile;
  _Module['FS_createPreloadedFile'] = FS.createPreloadedFile; // Prefix of data URIs emitted by SINGLE_FILE and related options.

  var dataURIPrefix = 'data:application/octet-stream;base64,'; // Indicates whether filename is a base64 data URI.

  function isDataURI(filename) {
    return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
  }

  function integrateWasmJS() {
    // wasm.js has several methods for creating the compiled code module here:
    //  * 'native-wasm' : use native WebAssembly support in the browser
    //  * 'interpret-s-expr': load s-expression code from a .wast and interpret
    //  * 'interpret-binary': load binary wasm and interpret
    //  * 'interpret-asm2wasm': load asm.js code, translate to wasm, and interpret
    //  * 'asmjs': no wasm, just load the asm.js code and use that (good for testing)
    // The method is set at compile time (BINARYEN_METHOD)
    // The method can be a comma-separated list, in which case, we will try the
    // options one by one. Some of them can fail gracefully, and then we can try
    // the next.
    // inputs
    var method = 'native-wasm';
    var wasmTextFile = '';
    var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABchJgA39/fwF/YAF/AX9gAAF/YAF/AGACf38Bf2AEf39/fwF/YAJ/fwBgA39/fwBgBH9/f38AYAN/f38BfmAAAGAFf39/f38Bf2ADfn9/AX9gAn5/AX9gBX9/f39/AGAGf3x/f39/AX9gAXwBfmACfH8BfAKXBSEDZW52Bm1lbW9yeQIBgAKAAgNlbnYFdGFibGUBcAEQEANlbnYKbWVtb3J5QmFzZQN/AANlbnYJdGFibGVCYXNlA38AA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYNdGVtcERvdWJsZVB0cgN/AANlbnYFQUJPUlQDfwADZW52CFNUQUNLVE9QA38AA2VudglTVEFDS19NQVgDfwADZW52B2N0dHpfaTgDfwAGZ2xvYmFsA05hTgN8AAZnbG9iYWwISW5maW5pdHkDfAADZW52DWVubGFyZ2VNZW1vcnkAAgNlbnYOZ2V0VG90YWxNZW1vcnkAAgNlbnYXYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkAAgNlbnYSYWJvcnRTdGFja092ZXJmbG93AAMDZW52C251bGxGdW5jX2lpAAMDZW52DW51bGxGdW5jX2lpaWkAAwNlbnYHX19fbG9jawADA2VudgtfX19zZXRFcnJObwADA2Vudg1fX19zeXNjYWxsMTQwAAQDZW52DV9fX3N5c2NhbGwxNDYABANlbnYMX19fc3lzY2FsbDU0AAQDZW52C19fX3N5c2NhbGw2AAQDZW52CV9fX3VubG9jawADA2VudiFfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQAAgNlbnYWX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZwAAA2VudhJfbGx2bV9zdGFja3Jlc3RvcmUAAwNlbnYPX2xsdm1fc3RhY2tzYXZlAAIDZW52D19wdGhyZWFkX2NyZWF0ZQAFA2Vudg1fcHRocmVhZF9qb2luAAQDZW52E19wdGhyZWFkX211dGV4X2luaXQABANlbnYIX3N5c2NvbmYAAQNSUQECAwYGAwIEAwcDCAcBCAAICQQACgYBAwEAAAECAQAEAAsBAwcBBwwNDQEADgQPEBERAAICAgQEBAAEAAEEAQQEAgoBAQAKAQAAAQEBBAUBAAZyFH8BIwILfwEjAwt/ASMEC38BIwULfwEjBgt/ASMHC38BQQALfwFBAAt/AUEAC38BQQALfAEjCAt8ASMJC38BQQALfwFBAAt/AUEAC38BQQALfAFEAAAAAAAAAAALfwFBAAt9AUMAAAAAC30BQwAAAAALB6kCFRFfX19lcnJub19sb2NhdGlvbgAxCl9jY3VybF9wb3cAHAdfZmZsdXNoAFgFX2ZyZWUALA9fbGx2bV9ic3dhcF9pMzIAXAdfbWFsbG9jACsHX21lbWNweQBdB19tZW1zZXQAXhNfcHRocmVhZF9tdXRleF9sb2NrAF8VX3B0aHJlYWRfbXV0ZXhfdW5sb2NrAGAFX3NicmsAYQpkeW5DYWxsX2lpAGIMZHluQ2FsbF9paWlpAGMTZXN0YWJsaXNoU3RhY2tTcGFjZQAYC2dldFRlbXBSZXQwABsLcnVuUG9zdFNldHMAWwtzZXRUZW1wUmV0MAAaCHNldFRocmV3ABkKc3RhY2tBbGxvYwAVDHN0YWNrUmVzdG9yZQAXCXN0YWNrU2F2ZQAWCRYBACMBCxBkLWRkZCJkZGVlLi8zZWVlCsb0AlEoAQF/Iw0hASMNIABqJA0jDUEPakFwcSQNIw0jDk4EQCAAEAMLIAEPCwUAIw0PCwYAIAAkDQsKACAAJA0gASQOCxIAIxBBAEYEQCAAJBAgASQRCwsGACAAJBsLBQAjGw8LzAEBGH8jDSEZIw1BoAZqJA0jDSMOTgRAQaAGEAMLIBlBOGohFSAZIRYgACEMIAEhERApQQAhEiAMIRcgF0HxFBBSIQIgAiETIAwhAyATIQQgAyAEECchBSAFIRQgFRAdIBQhBiAVIAZB4DwQHiAUIQcgB0HgPGohCCAVIAhB8wEQXRogESEJIBYgFSAJQX8QICAUIQogCkHgPGohCyALIBVB8wEQXRogFCENIA1BAEHTPhAoIQ4gDiESIBQhDyAPECwgEiEQIBkkDSAQDwsyAQR/Iw0hBCMNQRBqJA0jDSMOTgRAQRAQAwsgACEBIAEhAiACQQBB2QUQXhogBCQNDwusAQEVfyMNIRcjDUEQaiQNIw0jDk4EQEEQEAMLIAAhDyABIRAgAiERQQAhEgNAAkAgDyETIBAhFCASIRUgFCAVaiEDIBEhBCAEQfMBSCEFIBEhBiAFBH8gBgVB8wELIQcgByEIIBMgAyAIEF0aIA8hCSAJEB8gEiEKIApB8wFqIQsgCyESIBEhDCAMQfMBayENIA0hESANQQBKIQ4gDkUEQAwBCwwBCwsgFyQNDwvBAgElfyMNISUjDUHwBWokDSMNIw5OBEBB8AUQAwsgJUEMaiEeIAAhAUEAIQwDQAJAIAwhHyAfQdEASCEgICBFBEAMAQsgASEhIB4gIUHZBRBdGkEAIRcDQAJAIBchIiAiQdkFSCEjICNFBEAMAQsgFyECQYAIIAJBAnRqIQMgAygCACEEIB4gBGohBSAFLAAAIQYgBkEYdEEYdSEHIBchCCAIQQFqIQlBgAggCUECdGohCiAKKAIAIQsgHiALaiENIA0sAAAhDiAOQRh0QRh1IQ8gD0ECdCEQIAcgEGohESARQQVqIRJB6B4gEkECdGohEyATKAIAIRQgFEH/AXEhFSABIRYgFyEYIBYgGGohGSAZIBU6AAAgFyEaIBpBAWohGyAbIRcMAQsLIAwhHCAcQQFqIR0gHSEMDAELCyAlJA0PC9sGAVV/Iw0hWCMNQfC2AWokDSMNIw5OBEBB8LYBEAMLIFhBoLYBaiFWIFghByBYQbi2AWohCSBYQaS2AWohCiAAISUgASEwIAIhOyADIUYgOyELIAtBAEghDCA7IQ0gDUHzAUohDiAMIA5yIVUgJSEPIFUEQCAPQQU2AgBBlB8oAgAhECA7IREgViARNgIAIBBBiCMgVhBaGiBYJA0PCyAPQQE2AgAgMCESIAcgEkGiARAhEA0hEyAlIRQgFEEEaiEVIBUgEzYCACAlIRYgFkEEaiEXIBcoAgAhGCAYQQBHIRkgGUUEQCAKIAc2AgAgMCFLIApBBGohTCBMIEs2AgAgOyFNIApBCGohTiBOIE02AgAgVCFPIApBDGohUCBQIE82AgAgJSFSIApBEGohUyBTIFI2AgAgChAiGiBYJA0PCyBGIRogGkEATCEbIBsEQEHUABAUIRwgHEEBayEdIB0hRiBGIR4gHkEBSCEfIB8Ef0EBBSAdCyEEIAQhRgsgJSEgICBBCGohISAhQQAQExogRiEiEBAhIyAjIQggIkECdCEFIw0hJCMNQQEgBWxBD2pBcHFqJA0jDSMOTgRAQQEgBWxBD2pBcHEQAwsgRiEmICZBFGwhBiMNIScjDUEBIAZsQQ9qQXBxaiQNIw0jDk4EQEEBIAZsQQ9qQXBxEAMLQQAhVANAAkAgVCEoIEYhKSAoIClIISogKkUEQAwBCyBUISsgJyArQRRsaiEsIAkgBzYCACAJQQRqIS0gMCEuIC0gLjYCACAJQQhqIS8gOyExIC8gMTYCACAJQQxqITIgVCEzIDIgMzYCACAJQRBqITQgJSE1IDQgNTYCACAsIAkpAgA3AgAgLEEIaiAJQQhqKQIANwIAICxBEGogCUEQaigCADYCACBUITYgJCA2QQJ0aiE3IFQhOCAnIDhBFGxqITkgN0EAQQUgORARGiBUITogOkEBaiE8IDwhVAwBCwtBACFRA0ACQCBRIT0gVCE+ID0gPkghPyA/RQRADAELIFEhQCAkIEBBAnRqIUEgQSgCACFCIEJBAEchQyBDBEAgUSFEICQgREECdGohRSBFKAIAIUcgR0EAEBIaCyBRIUggSEEBaiFJIEkhUQwBCwsgCCFKIEoQDyBYJA0PC64FAkd/AX4jDSFJIw1BEGokDSMNIw5OBEBBEBADCyAAIRggASEjIAIhLkEAITkDQAJAIDkhRCBEQdkFSCFGIEZFBEAMAQsgIyFHIDkhBCBHIARqIQUgBSwAACEGIAZBGHRBGHUhBwJAAkACQAJAIAdBAGsOAgABAgsCQCAYIQggOSEJIAggCUEDdGohCiAKQn83AwAgGCELIAtByC1qIQwgOSENIAwgDUEDdGohDkJ/IUogDiEDDAMACwALAkAgGCEPIDkhECAPIBBBA3RqIREgEUIANwMAIBghEiASQcgtaiETIDkhFCATIBRBA3RqIRVCfyFKIBUhAwwCAAsACwJAIBghFiA5IRcgFiAXQQN0aiEZIBlCfzcDACAYIRogGkHILWohGyA5IRwgGyAcQQN0aiEdQgAhSiAdIQMLCyADIEo3AwAgOSEeIB5BAWohHyAfITkMAQsLIBghICAuISEgICAhQQN0aiEiICJC7bbb7bbb7bZbNwMAIBghJCAkQcgtaiElIC4hJiAlICZBA3RqIScgJ0Lb7bbb7bbb7bZ/NwMAIBghKCAuISkgKUEBaiEqICggKkEDdGohKyArQsef/vjjj7/8cTcDACAYISwgLEHILWohLSAuIS8gL0EBaiEwIC0gMEEDdGohMSAxQr/88cef/vjjj383AwAgGCEyIC4hMyAzQQJqITQgMiA0QQN0aiE1IDVC/4Pw//+B+P//ADcDACAYITYgNkHILWohNyAuITggOEECaiE6IDcgOkEDdGohOyA7Qv//j8D//4dgNwMAIBghPCAuIT0gPUEDaiE+IDwgPkEDdGohPyA/Qv///7+AgIBgNwMAIBghQCBAQcgtaiFBIC4hQiBCQQNqIUMgQSBDQQN0aiFFIEVC/////////x83AwAgSSQNDwvrBgJSfwx+Iw0hUiMNQeCRAmokDSMNIw5OBEBB4JECEAMLIFJB+OMBaiEoIFJBsLYBaiEzIFJB2IgBaiEDIFJBkNsAaiEEIFJByC1qIQUgUiEGIAAhCyALIQggCCEWIBYhCSAJQRBqIQogCigCACEMIAwhISAWIQ0gDUEEaiEOIA4oAgAhDyAPIQIgKEEAQcgtEF4aIDNBAEHILRBeGiAWIRAgECgCACERICggEUHILRBdGiAWIRIgEigCACETIBNByC1qIRQgMyAUQcgtEF0aIBYhFSAVQQxqIRcgFygCACEYIBghOwNAAkAgOyEZIBlBf2ohGiAaITsgGUEASiEbIBtFBEAMAQsgKCAzQaYBQcEBECMMAQsLIAVBAEHILRBeGiAGQQBByC0QXhogA0EAQcgtEF4aIARBAEHILRBeGkEAIQcDQAJAIBYhHCAhIR0gHCAdQQEQJCEeIB5BGHRBGHVBAEchHyAfRQRAQRIhUQwBCyAoIDNBwQFB8wEQIyAFIChByC0QXRogBiAzQcgtEF0aIAUgBiADIAQQJSAWISAgIEEIaiEiICIoAgAhIyAFIAYgIxAmIVQgVCFeIFRCAFEhJCAkRQRADAELDAELCyBRQRJGBEBBACEBIAEhUCBSJA0gUA8LIF4hVSBVeiFWIFanISUgJSFDIEMhJkEBICZ0IScgJ6whVyBXIVMgISEpIClBBGohKiAqKAIAISsgK0EARyEsICwEQCAWIS0gLUEQaiEuIC4oAgAhLyAvQQhqITAgMBBfGgsgISExIDEoAgAhMiAyQQNHITQCQCA0BEAgISE1IDVBAzYCAEEAITsDQCA7ITYgNkHzAUghNyA3RQRADAMLIDshOCAoIDhBA3RqITkgOSkDACFYIFMhWSBYIFmDIVogWkIAUSE6IDoEQEEBIUEFIDshPCAzIDxBA3RqIT0gPSkDACFbIFMhXCBbIFyDIV0gXUIAUSE+ID4Ef0F/BUEACyE/ID8hQQsgQUH/AXEhQCACIUIgOyFEIEIgRGohRSBFIEA6AAAgOyFGIEZBAWohRyBHITsMAAsACwsgISFIIEhBBGohSSBJKAIAIUogSkEARyFLIEsEQCAWIUwgTEEQaiFNIE0oAgAhTiBOQQhqIU8gTxBgGgtBACEBIAEhUCBSJA0gUA8LnAICG38OfiMNIR4jDUEwaiQNIw0jDk4EQEEwEAMLIAAhFiABIRkgAiEaIAMhG0IBISwgGiEEIAQhHANAAkAgHCEFIBshBiAFIAZJIQcgLCEhICFCAFIhCCAHBH8gCAVBAAshCSAJRQRADAELIBYhCiAcIQsgCiALQQN0aiEMIAwpAwAhIiAiIR8gGSENIBwhDiANIA5BA3RqIQ8gDykDACEjICMhICAgISQgHyElICQgJYUhJiAWIRAgHCERIBAgEUEDdGohEiASICY3AwAgHyEnIBkhEyAcIRQgEyAUQQN0aiEVIBUgJzcDACAgISggHyEpIClCf4UhKiAoICqDISsgKyEsIBwhFyAXQQFqIRggGCEcDAELCyAeJA0PC/YBASF/Iw0hIyMNQRBqJA0jDSMOTgRAQRAQAwsgACEcIAEhHSACIR4gHSEgICBBBGohISAhKAIAIQMgA0EARyEEIAQEQCAcIQUgBUEQaiEGIAYoAgAhByAHQQhqIQggCBBfGiAdIQkgCSgCACEKIB4hCyAKIAtGIQwgDEEBcSENIA1B/wFxIQ4gDiEfIBwhDyAPQRBqIRAgECgCACERIBFBCGohEiASEGAaIB8hEyATIRcgFyEbICMkDSAbDwUgHSEUIBQoAgAhFSAeIRYgFSAWRiEYIBhBAXEhGSAZQf8BcSEaIBohFyAXIRsgIyQNIBsPCwBBAA8LzAMCKn8WfiMNIS0jDUHAAGokDSMNIw5OBEBBwAAQAwsgACEbIAEhHyACISMgAyEpQQAhKkHRACErA0ACQCArIQUgBUF/aiEGIAYhKyAFQQBKIQcgB0UEQAwBCyAjIQggGyEJIAggCUHILRBdGiApIQogHyELIAogC0HILRBdGkEAIQQDQCAEIQwgDEHZBUghDSANRQRADAMLICMhDiAqIQ8gDiAPQQN0aiEQIBApAwAhMiAyIS4gKSERICohEiARIBJBA3RqIRMgEykDACEzIDMhLyApIRQgKiEVIBVB7QJIIRYgFgR/QewCBUGTfQshFyAqIRggGCAXaiEZIBkhKiAUIBlBA3RqIRogGikDACE0IDQhMCAuITUgMCE2IDZCf4UhNyA1IDeEITggIyEcICohHSAcIB1BA3RqIR4gHikDACE5IC8hOiA5IDqFITsgOCA7gyE8IDwhMSAxIT0gPUJ/hSE+IBshICAEISEgICAhQQN0aiEiICIgPjcDACAuIT8gMCFAID8gQIUhQSAxIUIgQSBChCFDIB8hJCAEISUgJCAlQQN0aiEmICYgQzcDACAEIScgJ0EBaiEoICghBAwACwAMAQsLIC0kDQ8LigICE38LfiMNIRUjDUEgaiQNIw0jDk4EQEEgEAMLIAAhDyABIRAgAiERQn8hICARIRMgEyESA0ACQCASIQMgA0F/aiEEIAQhEiADQQBKIQUgBUUEQEEFIRQMAQsgDyEGIBIhB0HyASAHayEIIAYgCEEDdGohCSAJKQMAIRYgECEKIBIhC0HyASALayEMIAogDEEDdGohDSANKQMAIRcgFiAXhSEYIBhCf4UhGSAgIRogGiAZgyEbIBshICAgIRwgHEIAUSEOIA4EQEEEIRQMAQsMAQsLIBRBBEYEQEIAIR4gHiEfIBUkDSAfDwUgFEEFRgRAICAhHSAdIR4gHiEfIBUkDSAfDwsLQgAPC+oBAR1/Iw0hHiMNQRBqJA0jDSMOTgRAQRAQAwsgACEMIAEhFiAWIRkgGUEDbCEaIBohGyAbECshHCAcIRhBACEXA0ACQCAXIQIgFiEDIAIgA0ghBCAYIQUgBEUEQAwBCyAXIQYgBkEDbCEHIAUgB2ohCCAMIQkgFyEKIAkgCmohCyALLAAAIQ0gDUEYdEEYdSEOQaYjIA4QVCEPIA8hEEGmIyERIBAgEWshEkG7xAAgEkEDbGohEyAIIBMuAAA7AAAgCEECaiATQQJqLAAAOgAAIBchFCAUQQFqIRUgFSEXDAELCyAeJA0gBQ8L7QMBR38jDSFJIw1BIGokDSMNIw5OBEBBIBADCyAAIRcgASEiIAIhLSAtIQMgA0EDaiEEIARBAWshBSAFQQNtQX9xIQYgBiFDIEMhByAHQQFqIQggCCEJIAkQKyEKIAohRiBGIQsgQyEMIAsgDGohDSANQQA6AABBACE4A0ACQCA4IQ4gQyEPIA4gD0ghECAQRQRADAELIBchESAiIRIgOCETIBNBA2whFCASIBRqIRUgESAVaiEWIBYsAAAhGCAYQRh0QRh1IRkgFyEaICIhGyA4IRwgHEEDbCEdIBsgHWohHiAeQQFqIR8gGiAfaiEgICAsAAAhISAhQRh0QRh1ISMgI0EDbCEkIBkgJGohJSAXISYgIiEnIDghKCAoQQNsISkgJyApaiEqICpBAmohKyAmICtqISwgLCwAACEuIC5BGHRBGHUhLyAvQQlsITAgJSAwaiExIDFB/wFxITIgMiFHIEchMyAzQRh0QRh1ITQgNEEASCE1IDUEQCBHITYgNkEYdEEYdSE3IDdBG2ohOSA5Qf8BcSE6IDohRwsgRyE7IDtBGHRBGHUhPEGmIyA8aiE9ID0sAAAhPiBGIT8gOCFAID8gQGohQSBBID46AAAgOCFCIEJBAWohRCBEITgMAQsLIEYhRSBJJA0gRQ8L9AEBEH8jDSEPIw1BEGokDSMNIw5OBEBBEBADCyAPQQRqIQEgAUEANgAAIAFBBGpBADoAAEEAIQADQAJAIAAhBiAGQfMBSCEHIAdFBEAMAQsgACEIQfw6IAhBBWxqIQkgCSABKAAANgAAIAlBBGogAUEEaiwAADoAACABQQUQKiAAIQogCkEBaiELIAshAAwBCwtBACEAA0ACQCAAIQwgDEEbSCENIA1FBEAMAQsgACECQbvEACACQQNsaiEDIAMgAS4AADsAACADQQJqIAFBAmosAAA6AAAgAUEDECogACEEIARBAWohBSAFIQAMAQsLIA8kDQ8LwwEBFH8jDSEVIw1BEGokDSMNIw5OBEBBEBADCyAAIQwgASENQQAhDgNAAkAgDiEPIA0hECAPIBBIIREgEUUEQEEFIRQMAQsgDCESIA4hEyASIBNqIQIgAiwAACEDIANBAWpBGHRBGHUhBCACIAQ6AAAgBEEYdEEYdSEFIAVBAUohBiAGRQRAQQUhFAwBCyAMIQcgDiEIIAcgCGohCSAJQX86AAAgDiEKIApBAWohCyALIQ4MAQsLIBRBBUYEQCAVJA0PCwutbgGzCH8jDSGzCCMNQRBqJA0jDSMOTgRAQRAQAwsgswghVSAAQfUBSSHEAQJAIMQBBEAgAEELSSGzAiAAQQtqIaIDIKIDQXhxIZEEILMCBH9BEAUgkQQLIYAFIIAFQQN2Ie8FQbw2KAIAId4GIN4GIO8FdiHNByDNB0EDcSFWIFZBAEYhYSBhRQRAIM0HQQFxIWwgbEEBcyF3IHcg7wVqIYIBIIIBQQF0IY0BQeQ2II0BQQJ0aiGYASCYAUEIaiGjASCjASgCACGuASCuAUEIaiG5ASC5ASgCACHFASDFASCYAUYh0AEg0AEEQEEBIIIBdCHbASDbAUF/cyHmASDeBiDmAXEh8QFBvDYg8QE2AgAFIMUBQQxqIfwBIPwBIJgBNgIAIKMBIMUBNgIACyCCAUEDdCGHAiCHAkEDciGSAiCuAUEEaiGdAiCdAiCSAjYCACCuASCHAmohqAIgqAJBBGohtAIgtAIoAgAhvwIgvwJBAXIhygIgtAIgygI2AgAguQEhBiCzCCQNIAYPC0HENigCACHVAiCABSDVAksh4AIg4AIEQCDNB0EARiHrAiDrAkUEQCDNByDvBXQh9gJBAiDvBXQhgQNBACCBA2shjAMggQMgjANyIZcDIPYCIJcDcSGjA0EAIKMDayGuAyCjAyCuA3EhuQMguQNBf2ohxAMgxANBDHYhzwMgzwNBEHEh2gMgxAMg2gN2IeUDIOUDQQV2IfADIPADQQhxIfsDIPsDINoDciGGBCDlAyD7A3YhkgQgkgRBAnYhnQQgnQRBBHEhqAQghgQgqARyIbMEIJIEIKgEdiG+BCC+BEEBdiHJBCDJBEECcSHUBCCzBCDUBHIh3wQgvgQg1AR2IeoEIOoEQQF2IfUEIPUEQQFxIYEFIN8EIIEFciGMBSDqBCCBBXYhlwUgjAUglwVqIaIFIKIFQQF0Ia0FQeQ2IK0FQQJ0aiG4BSC4BUEIaiHDBSDDBSgCACHOBSDOBUEIaiHZBSDZBSgCACHkBSDkBSC4BUYh8AUg8AUEQEEBIKIFdCH7BSD7BUF/cyGGBiDeBiCGBnEhkQZBvDYgkQY2AgAgkQYhzgcFIOQFQQxqIZwGIJwGILgFNgIAIMMFIOQFNgIAIN4GIc4HCyCiBUEDdCGnBiCnBiCABWshsgYggAVBA3IhvQYgzgVBBGohyAYgyAYgvQY2AgAgzgUggAVqIdMGILIGQQFyId8GINMGQQRqIeoGIOoGIN8GNgIAIM4FIKcGaiH1BiD1BiCyBjYCACDVAkEARiGAByCAB0UEQEHQNigCACGLByDVAkEDdiGWByCWB0EBdCGhB0HkNiChB0ECdGohrAdBASCWB3QhtwcgzgcgtwdxIcIHIMIHQQBGIdkHINkHBEAgzgcgtwdyIeQHQbw2IOQHNgIAIKwHQQhqIUQgrAchECBEIU4FIKwHQQhqIe8HIO8HKAIAIfoHIPoHIRAg7wchTgsgTiCLBzYCACAQQQxqIYUIIIUIIIsHNgIAIIsHQQhqIZAIIJAIIBA2AgAgiwdBDGohmwggmwggrAc2AgALQcQ2ILIGNgIAQdA2INMGNgIAINkFIQYgswgkDSAGDwtBwDYoAgAhngggnghBAEYhnwggnwgEQCCABSEPBUEAIJ4IayFXIJ4IIFdxIVggWEF/aiFZIFlBDHYhWiBaQRBxIVsgWSBbdiFcIFxBBXYhXSBdQQhxIV4gXiBbciFfIFwgXnYhYCBgQQJ2IWIgYkEEcSFjIF8gY3IhZCBgIGN2IWUgZUEBdiFmIGZBAnEhZyBkIGdyIWggZSBndiFpIGlBAXYhaiBqQQFxIWsgaCBrciFtIGkga3YhbiBtIG5qIW9B7Dggb0ECdGohcCBwKAIAIXEgcUEEaiFyIHIoAgAhcyBzQXhxIXQgdCCABWshdSBxQRBqIXYgdigCACF4IHhBAEYheSB5QQFxIVEgcUEQaiBRQQJ0aiF6IHooAgAheyB7QQBGIXwgfARAIHEhCyB1IQ0FIHEhDCB1IQ4geyF+A0ACQCB+QQRqIX0gfSgCACF/IH9BeHEhgAEggAEggAVrIYEBIIEBIA5JIYMBIIMBBH8ggQEFIA4LIQIggwEEfyB+BSAMCyEBIH5BEGohhAEghAEoAgAhhQEghQFBAEYhhgEghgFBAXEhTyB+QRBqIE9BAnRqIYcBIIcBKAIAIYgBIIgBQQBGIYkBIIkBBEAgASELIAIhDQwBBSABIQwgAiEOIIgBIX4LDAELCwsgCyCABWohigEgigEgC0shiwEgiwEEQCALQRhqIYwBIIwBKAIAIY4BIAtBDGohjwEgjwEoAgAhkAEgkAEgC0YhkQECQCCRAQRAIAtBFGohlgEglgEoAgAhlwEglwFBAEYhmQEgmQEEQCALQRBqIZoBIJoBKAIAIZsBIJsBQQBGIZwBIJwBBEBBACE0DAMFIJsBISYgmgEhJwsFIJcBISYglgEhJwsDQAJAICZBFGohnQEgnQEoAgAhngEgngFBAEYhnwEgnwFFBEAgngEhJiCdASEnDAILICZBEGohoAEgoAEoAgAhoQEgoQFBAEYhogEgogEEQAwBBSChASEmIKABIScLDAELCyAnQQA2AgAgJiE0BSALQQhqIZIBIJIBKAIAIZMBIJMBQQxqIZQBIJQBIJABNgIAIJABQQhqIZUBIJUBIJMBNgIAIJABITQLCyCOAUEARiGkAQJAIKQBRQRAIAtBHGohpQEgpQEoAgAhpgFB7DggpgFBAnRqIacBIKcBKAIAIagBIAsgqAFGIakBIKkBBEAgpwEgNDYCACA0QQBGIaAIIKAIBEBBASCmAXQhqgEgqgFBf3MhqwEgngggqwFxIawBQcA2IKwBNgIADAMLBSCOAUEQaiGtASCtASgCACGvASCvASALRyGwASCwAUEBcSFSII4BQRBqIFJBAnRqIbEBILEBIDQ2AgAgNEEARiGyASCyAQRADAMLCyA0QRhqIbMBILMBII4BNgIAIAtBEGohtAEgtAEoAgAhtQEgtQFBAEYhtgEgtgFFBEAgNEEQaiG3ASC3ASC1ATYCACC1AUEYaiG4ASC4ASA0NgIACyALQRRqIboBILoBKAIAIbsBILsBQQBGIbwBILwBRQRAIDRBFGohvQEgvQEguwE2AgAguwFBGGohvgEgvgEgNDYCAAsLCyANQRBJIb8BIL8BBEAgDSCABWohwAEgwAFBA3IhwQEgC0EEaiHCASDCASDBATYCACALIMABaiHDASDDAUEEaiHGASDGASgCACHHASDHAUEBciHIASDGASDIATYCAAUggAVBA3IhyQEgC0EEaiHKASDKASDJATYCACANQQFyIcsBIIoBQQRqIcwBIMwBIMsBNgIAIIoBIA1qIc0BIM0BIA02AgAg1QJBAEYhzgEgzgFFBEBB0DYoAgAhzwEg1QJBA3Yh0QEg0QFBAXQh0gFB5DYg0gFBAnRqIdMBQQEg0QF0IdQBIN4GINQBcSHVASDVAUEARiHWASDWAQRAIN4GINQBciHXAUG8NiDXATYCACDTAUEIaiFFINMBIQcgRSFNBSDTAUEIaiHYASDYASgCACHZASDZASEHINgBIU0LIE0gzwE2AgAgB0EMaiHaASDaASDPATYCACDPAUEIaiHcASDcASAHNgIAIM8BQQxqId0BIN0BINMBNgIAC0HENiANNgIAQdA2IIoBNgIACyALQQhqId4BIN4BIQYgswgkDSAGDwUggAUhDwsLBSCABSEPCwUgAEG/f0sh3wEg3wEEQEF/IQ8FIABBC2oh4AEg4AFBeHEh4QFBwDYoAgAh4gEg4gFBAEYh4wEg4wEEQCDhASEPBUEAIOEBayHkASDgAUEIdiHlASDlAUEARiHnASDnAQRAQQAhIAUg4QFB////B0sh6AEg6AEEQEEfISAFIOUBQYD+P2oh6QEg6QFBEHYh6gEg6gFBCHEh6wEg5QEg6wF0IewBIOwBQYDgH2oh7QEg7QFBEHYh7gEg7gFBBHEh7wEg7wEg6wFyIfABIOwBIO8BdCHyASDyAUGAgA9qIfMBIPMBQRB2IfQBIPQBQQJxIfUBIPABIPUBciH2AUEOIPYBayH3ASDyASD1AXQh+AEg+AFBD3Yh+QEg9wEg+QFqIfoBIPoBQQF0IfsBIPoBQQdqIf0BIOEBIP0BdiH+ASD+AUEBcSH/ASD/ASD7AXIhgAIggAIhIAsLQew4ICBBAnRqIYECIIECKAIAIYICIIICQQBGIYMCAkAggwIEQEEAITNBACE2IOQBITdBOSGyCAUgIEEfRiGEAiAgQQF2IYUCQRkghQJrIYYCIIQCBH9BAAUghgILIYgCIOEBIIgCdCGJAkEAIRsg5AEhHiCCAiEfIIkCISJBACEkA0ACQCAfQQRqIYoCIIoCKAIAIYsCIIsCQXhxIYwCIIwCIOEBayGNAiCNAiAeSSGOAiCOAgRAII0CQQBGIY8CII8CBEBBACE9IB8hQCAfIUFBPSGyCAwFBSAfISsgjQIhLAsFIBshKyAeISwLIB9BFGohkAIgkAIoAgAhkQIgIkEfdiGTAiAfQRBqIJMCQQJ0aiGUAiCUAigCACGVAiCRAkEARiGWAiCRAiCVAkYhlwIglgIglwJyIagIIKgIBH8gJAUgkQILIS0glQJBAEYhmAIgmAJBAXMhpAggpAhBAXEhmQIgIiCZAnQhISCYAgRAIC0hMyArITYgLCE3QTkhsggMAQUgKyEbICwhHiCVAiEfICEhIiAtISQLDAELCwsLILIIQTlGBEAgM0EARiGaAiA2QQBGIZsCIJoCIJsCcSGmCCCmCARAQQIgIHQhnAJBACCcAmshngIgnAIgngJyIZ8CIOIBIJ8CcSGgAiCgAkEARiGhAiChAgRAIOEBIQ8MBgtBACCgAmshogIgoAIgogJxIaMCIKMCQX9qIaQCIKQCQQx2IaUCIKUCQRBxIaYCIKQCIKYCdiGnAiCnAkEFdiGpAiCpAkEIcSGqAiCqAiCmAnIhqwIgpwIgqgJ2IawCIKwCQQJ2Ia0CIK0CQQRxIa4CIKsCIK4CciGvAiCsAiCuAnYhsAIgsAJBAXYhsQIgsQJBAnEhsgIgrwIgsgJyIbUCILACILICdiG2AiC2AkEBdiG3AiC3AkEBcSG4AiC1AiC4AnIhuQIgtgIguAJ2IboCILkCILoCaiG7AkHsOCC7AkECdGohvAIgvAIoAgAhvQJBACE6IL0CIT8FIDYhOiAzIT8LID9BAEYhvgIgvgIEQCA6ITkgNyE8BSA3IT0gPyFAIDohQUE9IbIICwsgsghBPUYEQANAAkBBACGyCCBAQQRqIcACIMACKAIAIcECIMECQXhxIcICIMICIOEBayHDAiDDAiA9SSHEAiDEAgR/IMMCBSA9CyEEIMQCBH8gQAUgQQshPiBAQRBqIcUCIMUCKAIAIcYCIMYCQQBGIccCIMcCQQFxIVMgQEEQaiBTQQJ0aiHIAiDIAigCACHJAiDJAkEARiHLAiDLAgRAID4hOSAEITwMAQUgBCE9IMkCIUAgPiFBQT0hsggLDAELCwsgOUEARiHMAiDMAgRAIOEBIQ8FQcQ2KAIAIc0CIM0CIOEBayHOAiA8IM4CSSHPAiDPAgRAIDkg4QFqIdACINACIDlLIdECINECRQRAQQAhBiCzCCQNIAYPCyA5QRhqIdICINICKAIAIdMCIDlBDGoh1AIg1AIoAgAh1gIg1gIgOUYh1wICQCDXAgRAIDlBFGoh3AIg3AIoAgAh3QIg3QJBAEYh3gIg3gIEQCA5QRBqId8CIN8CKAIAIeECIOECQQBGIeICIOICBEBBACE4DAMFIOECIS4g3wIhLwsFIN0CIS4g3AIhLwsDQAJAIC5BFGoh4wIg4wIoAgAh5AIg5AJBAEYh5QIg5QJFBEAg5AIhLiDjAiEvDAILIC5BEGoh5gIg5gIoAgAh5wIg5wJBAEYh6AIg6AIEQAwBBSDnAiEuIOYCIS8LDAELCyAvQQA2AgAgLiE4BSA5QQhqIdgCINgCKAIAIdkCINkCQQxqIdoCINoCINYCNgIAINYCQQhqIdsCINsCINkCNgIAINYCITgLCyDTAkEARiHpAgJAIOkCBEAg4gEhxgMFIDlBHGoh6gIg6gIoAgAh7AJB7Dgg7AJBAnRqIe0CIO0CKAIAIe4CIDkg7gJGIe8CIO8CBEAg7QIgODYCACA4QQBGIaIIIKIIBEBBASDsAnQh8AIg8AJBf3Mh8QIg4gEg8QJxIfICQcA2IPICNgIAIPICIcYDDAMLBSDTAkEQaiHzAiDzAigCACH0AiD0AiA5RyH1AiD1AkEBcSFUINMCQRBqIFRBAnRqIfcCIPcCIDg2AgAgOEEARiH4AiD4AgRAIOIBIcYDDAMLCyA4QRhqIfkCIPkCINMCNgIAIDlBEGoh+gIg+gIoAgAh+wIg+wJBAEYh/AIg/AJFBEAgOEEQaiH9AiD9AiD7AjYCACD7AkEYaiH+AiD+AiA4NgIACyA5QRRqIf8CIP8CKAIAIYADIIADQQBGIYIDIIIDBEAg4gEhxgMFIDhBFGohgwMggwMggAM2AgAggANBGGohhAMghAMgODYCACDiASHGAwsLCyA8QRBJIYUDAkAghQMEQCA8IOEBaiGGAyCGA0EDciGHAyA5QQRqIYgDIIgDIIcDNgIAIDkghgNqIYkDIIkDQQRqIYoDIIoDKAIAIYsDIIsDQQFyIY0DIIoDII0DNgIABSDhAUEDciGOAyA5QQRqIY8DII8DII4DNgIAIDxBAXIhkAMg0AJBBGohkQMgkQMgkAM2AgAg0AIgPGohkgMgkgMgPDYCACA8QQN2IZMDIDxBgAJJIZQDIJQDBEAgkwNBAXQhlQNB5DYglQNBAnRqIZYDQbw2KAIAIZgDQQEgkwN0IZkDIJgDIJkDcSGaAyCaA0EARiGbAyCbAwRAIJgDIJkDciGcA0G8NiCcAzYCACCWA0EIaiFJIJYDISUgSSFMBSCWA0EIaiGdAyCdAygCACGeAyCeAyElIJ0DIUwLIEwg0AI2AgAgJUEMaiGfAyCfAyDQAjYCACDQAkEIaiGgAyCgAyAlNgIAINACQQxqIaEDIKEDIJYDNgIADAILIDxBCHYhpAMgpANBAEYhpQMgpQMEQEEAISMFIDxB////B0shpgMgpgMEQEEfISMFIKQDQYD+P2ohpwMgpwNBEHYhqAMgqANBCHEhqQMgpAMgqQN0IaoDIKoDQYDgH2ohqwMgqwNBEHYhrAMgrANBBHEhrQMgrQMgqQNyIa8DIKoDIK0DdCGwAyCwA0GAgA9qIbEDILEDQRB2IbIDILIDQQJxIbMDIK8DILMDciG0A0EOILQDayG1AyCwAyCzA3QhtgMgtgNBD3YhtwMgtQMgtwNqIbgDILgDQQF0IboDILgDQQdqIbsDIDwguwN2IbwDILwDQQFxIb0DIL0DILoDciG+AyC+AyEjCwtB7DggI0ECdGohvwMg0AJBHGohwAMgwAMgIzYCACDQAkEQaiHBAyDBA0EEaiHCAyDCA0EANgIAIMEDQQA2AgBBASAjdCHDAyDGAyDDA3EhxQMgxQNBAEYhxwMgxwMEQCDGAyDDA3IhyANBwDYgyAM2AgAgvwMg0AI2AgAg0AJBGGohyQMgyQMgvwM2AgAg0AJBDGohygMgygMg0AI2AgAg0AJBCGohywMgywMg0AI2AgAMAgsgvwMoAgAhzAMgI0EfRiHNAyAjQQF2Ic4DQRkgzgNrIdADIM0DBH9BAAUg0AMLIdEDIDwg0QN0IdIDINIDIRwgzAMhHQNAAkAgHUEEaiHTAyDTAygCACHUAyDUA0F4cSHVAyDVAyA8RiHWAyDWAwRAQeEAIbIIDAELIBxBH3Yh1wMgHUEQaiDXA0ECdGoh2AMgHEEBdCHZAyDYAygCACHbAyDbA0EARiHcAyDcAwRAQeAAIbIIDAEFINkDIRwg2wMhHQsMAQsLILIIQeAARgRAINgDINACNgIAINACQRhqId0DIN0DIB02AgAg0AJBDGoh3gMg3gMg0AI2AgAg0AJBCGoh3wMg3wMg0AI2AgAMAgUgsghB4QBGBEAgHUEIaiHgAyDgAygCACHhAyDhA0EMaiHiAyDiAyDQAjYCACDgAyDQAjYCACDQAkEIaiHjAyDjAyDhAzYCACDQAkEMaiHkAyDkAyAdNgIAINACQRhqIeYDIOYDQQA2AgAMAwsLCwsgOUEIaiHnAyDnAyEGILMIJA0gBg8FIOEBIQ8LCwsLCwtBxDYoAgAh6AMg6AMgD0kh6QMg6QNFBEAg6AMgD2sh6gNB0DYoAgAh6wMg6gNBD0sh7AMg7AMEQCDrAyAPaiHtA0HQNiDtAzYCAEHENiDqAzYCACDqA0EBciHuAyDtA0EEaiHvAyDvAyDuAzYCACDrAyDoA2oh8QMg8QMg6gM2AgAgD0EDciHyAyDrA0EEaiHzAyDzAyDyAzYCAAVBxDZBADYCAEHQNkEANgIAIOgDQQNyIfQDIOsDQQRqIfUDIPUDIPQDNgIAIOsDIOgDaiH2AyD2A0EEaiH3AyD3AygCACH4AyD4A0EBciH5AyD3AyD5AzYCAAsg6wNBCGoh+gMg+gMhBiCzCCQNIAYPC0HINigCACH8AyD8AyAPSyH9AyD9AwRAIPwDIA9rIf4DQcg2IP4DNgIAQdQ2KAIAIf8DIP8DIA9qIYAEQdQ2IIAENgIAIP4DQQFyIYEEIIAEQQRqIYIEIIIEIIEENgIAIA9BA3IhgwQg/wNBBGohhAQghAQggwQ2AgAg/wNBCGohhQQghQQhBiCzCCQNIAYPC0GUOigCACGHBCCHBEEARiGIBCCIBARAQZw6QYAgNgIAQZg6QYAgNgIAQaA6QX82AgBBpDpBfzYCAEGoOkEANgIAQfg5QQA2AgAgVSGJBCCJBEFwcSGKBCCKBEHYqtWqBXMhiwRBlDogiwQ2AgBBgCAhjwQFQZw6KAIAIUggSCGPBAsgD0EwaiGMBCAPQS9qIY0EII8EII0EaiGOBEEAII8EayGQBCCOBCCQBHEhkwQgkwQgD0shlAQglARFBEBBACEGILMIJA0gBg8LQfQ5KAIAIZUEIJUEQQBGIZYEIJYERQRAQew5KAIAIZcEIJcEIJMEaiGYBCCYBCCXBE0hmQQgmAQglQRLIZoEIJkEIJoEciGnCCCnCARAQQAhBiCzCCQNIAYPCwtB+DkoAgAhmwQgmwRBBHEhnAQgnARBAEYhngQCQCCeBARAQdQ2KAIAIZ8EIJ8EQQBGIaAEAkAgoAQEQEH2ACGyCAVB/DkhCgNAAkAgCigCACGhBCChBCCfBEshogQgogRFBEAgCkEEaiGjBCCjBCgCACGkBCChBCCkBGohpQQgpQQgnwRLIaYEIKYEBEAMAgsLIApBCGohpwQgpwQoAgAhqQQgqQRBAEYhqgQgqgQEQEH2ACGyCAwEBSCpBCEKCwwBCwsgjgQg/ANrIcMEIMMEIJAEcSHEBCDEBEH/////B0khxQQgxQQEQCDEBBBhIcYEIAooAgAhxwQgowQoAgAhyAQgxwQgyARqIcoEIMYEIMoERiHLBCDLBARAIMYEQX9GIcwEIMwEBEAgxAQhMAUgxAQhQiDGBCFDQYcBIbIIDAYLBSDGBCExIMQEITJB/gAhsggLBUEAITALCwsCQCCyCEH2AEYEQEEAEGEhqwQgqwRBf0YhrAQgrAQEQEEAITAFIKsEIa0EQZg6KAIAIa4EIK4EQX9qIa8EIK8EIK0EcSGwBCCwBEEARiGxBCCvBCCtBGohsgRBACCuBGshtAQgsgQgtARxIbUEILUEIK0EayG2BCCxBAR/QQAFILYECyG3BCC3BCCTBGohBUHsOSgCACG4BCAFILgEaiG5BCAFIA9LIboEIAVB/////wdJIbsEILoEILsEcSGlCCClCARAQfQ5KAIAIbwEILwEQQBGIb0EIL0ERQRAILkEILgETSG/BCC5BCC8BEshwAQgvwQgwARyIa0IIK0IBEBBACEwDAULCyAFEGEhwQQgwQQgqwRGIcIEIMIEBEAgBSFCIKsEIUNBhwEhsggMBgUgwQQhMSAFITJB/gAhsggLBUEAITALCwsLAkAgsghB/gBGBEBBACAyayHNBCAxQX9HIc4EIDJB/////wdJIc8EIM8EIM4EcSGxCCCMBCAySyHQBCDQBCCxCHEhqQggqQhFBEAgMUF/RiHbBCDbBARAQQAhMAwDBSAyIUIgMSFDQYcBIbIIDAULAAtBnDooAgAh0QQgjQQgMmsh0gQg0gQg0QRqIdMEQQAg0QRrIdUEINMEINUEcSHWBCDWBEH/////B0kh1wQg1wRFBEAgMiFCIDEhQ0GHASGyCAwECyDWBBBhIdgEINgEQX9GIdkEINkEBEAgzQQQYRpBACEwDAIFINYEIDJqIdoEINoEIUIgMSFDQYcBIbIIDAQLAAsLQfg5KAIAIdwEINwEQQRyId0EQfg5IN0ENgIAIDAhO0GFASGyCAVBACE7QYUBIbIICwsgsghBhQFGBEAgkwRB/////wdJId4EIN4EBEAgkwQQYSHgBEEAEGEh4QQg4ARBf0ch4gQg4QRBf0ch4wQg4gQg4wRxIa8IIOAEIOEESSHkBCDkBCCvCHEhqggg4QQh5QQg4AQh5gQg5QQg5gRrIecEIA9BKGoh6AQg5wQg6ARLIekEIOkEBH8g5wQFIDsLIQMgqghBAXMhqwgg4ARBf0Yh6wQg6QRBAXMhowgg6wQgowhyIewEIOwEIKsIciGuCCCuCEUEQCADIUIg4AQhQ0GHASGyCAsLCyCyCEGHAUYEQEHsOSgCACHtBCDtBCBCaiHuBEHsOSDuBDYCAEHwOSgCACHvBCDuBCDvBEsh8AQg8AQEQEHwOSDuBDYCAAtB1DYoAgAh8QQg8QRBAEYh8gQCQCDyBARAQcw2KAIAIfMEIPMEQQBGIfQEIEMg8wRJIfYEIPQEIPYEciGsCCCsCARAQcw2IEM2AgALQfw5IEM2AgBBgDogQjYCAEGIOkEANgIAQZQ6KAIAIfcEQeA2IPcENgIAQdw2QX82AgBB8DZB5DY2AgBB7DZB5DY2AgBB+DZB7DY2AgBB9DZB7DY2AgBBgDdB9DY2AgBB/DZB9DY2AgBBiDdB/DY2AgBBhDdB/DY2AgBBkDdBhDc2AgBBjDdBhDc2AgBBmDdBjDc2AgBBlDdBjDc2AgBBoDdBlDc2AgBBnDdBlDc2AgBBqDdBnDc2AgBBpDdBnDc2AgBBsDdBpDc2AgBBrDdBpDc2AgBBuDdBrDc2AgBBtDdBrDc2AgBBwDdBtDc2AgBBvDdBtDc2AgBByDdBvDc2AgBBxDdBvDc2AgBB0DdBxDc2AgBBzDdBxDc2AgBB2DdBzDc2AgBB1DdBzDc2AgBB4DdB1Dc2AgBB3DdB1Dc2AgBB6DdB3Dc2AgBB5DdB3Dc2AgBB8DdB5Dc2AgBB7DdB5Dc2AgBB+DdB7Dc2AgBB9DdB7Dc2AgBBgDhB9Dc2AgBB/DdB9Dc2AgBBiDhB/Dc2AgBBhDhB/Dc2AgBBkDhBhDg2AgBBjDhBhDg2AgBBmDhBjDg2AgBBlDhBjDg2AgBBoDhBlDg2AgBBnDhBlDg2AgBBqDhBnDg2AgBBpDhBnDg2AgBBsDhBpDg2AgBBrDhBpDg2AgBBuDhBrDg2AgBBtDhBrDg2AgBBwDhBtDg2AgBBvDhBtDg2AgBByDhBvDg2AgBBxDhBvDg2AgBB0DhBxDg2AgBBzDhBxDg2AgBB2DhBzDg2AgBB1DhBzDg2AgBB4DhB1Dg2AgBB3DhB1Dg2AgBB6DhB3Dg2AgBB5DhB3Dg2AgAgQkFYaiH4BCBDQQhqIfkEIPkEIfoEIPoEQQdxIfsEIPsEQQBGIfwEQQAg+gRrIf0EIP0EQQdxIf4EIPwEBH9BAAUg/gQLIf8EIEMg/wRqIYIFIPgEIP8EayGDBUHUNiCCBTYCAEHINiCDBTYCACCDBUEBciGEBSCCBUEEaiGFBSCFBSCEBTYCACBDIPgEaiGGBSCGBUEEaiGHBSCHBUEoNgIAQaQ6KAIAIYgFQdg2IIgFNgIABUH8OSEVA0ACQCAVKAIAIYkFIBVBBGohigUgigUoAgAhiwUgiQUgiwVqIY0FIEMgjQVGIY4FII4FBEBBjwEhsggMAQsgFUEIaiGPBSCPBSgCACGQBSCQBUEARiGRBSCRBQRADAEFIJAFIRULDAELCyCyCEGPAUYEQCAVQQxqIZIFIJIFKAIAIZMFIJMFQQhxIZQFIJQFQQBGIZUFIJUFBEAgiQUg8QRNIZYFIEMg8QRLIZgFIJgFIJYFcSGwCCCwCARAIIsFIEJqIZkFIIoFIJkFNgIAQcg2KAIAIZoFIJoFIEJqIZsFIPEEQQhqIZwFIJwFIZ0FIJ0FQQdxIZ4FIJ4FQQBGIZ8FQQAgnQVrIaAFIKAFQQdxIaEFIJ8FBH9BAAUgoQULIaMFIPEEIKMFaiGkBSCbBSCjBWshpQVB1DYgpAU2AgBByDYgpQU2AgAgpQVBAXIhpgUgpAVBBGohpwUgpwUgpgU2AgAg8QQgmwVqIagFIKgFQQRqIakFIKkFQSg2AgBBpDooAgAhqgVB2DYgqgU2AgAMBAsLC0HMNigCACGrBSBDIKsFSSGsBSCsBQRAQcw2IEM2AgALIEMgQmohrgVB/DkhKANAAkAgKCgCACGvBSCvBSCuBUYhsAUgsAUEQEGXASGyCAwBCyAoQQhqIbEFILEFKAIAIbIFILIFQQBGIbMFILMFBEBB/DkhCQwBBSCyBSEoCwwBCwsgsghBlwFGBEAgKEEMaiG0BSC0BSgCACG1BSC1BUEIcSG2BSC2BUEARiG3BSC3BQRAICggQzYCACAoQQRqIbkFILkFKAIAIboFILoFIEJqIbsFILkFILsFNgIAIENBCGohvAUgvAUhvQUgvQVBB3EhvgUgvgVBAEYhvwVBACC9BWshwAUgwAVBB3EhwQUgvwUEf0EABSDBBQshwgUgQyDCBWohxAUgrgVBCGohxQUgxQUhxgUgxgVBB3EhxwUgxwVBAEYhyAVBACDGBWshyQUgyQVBB3EhygUgyAUEf0EABSDKBQshywUgrgUgywVqIcwFIMwFIc0FIMQFIc8FIM0FIM8FayHQBSDEBSAPaiHRBSDQBSAPayHSBSAPQQNyIdMFIMQFQQRqIdQFINQFINMFNgIAIPEEIMwFRiHVBQJAINUFBEBByDYoAgAh1gUg1gUg0gVqIdcFQcg2INcFNgIAQdQ2INEFNgIAINcFQQFyIdgFINEFQQRqIdoFINoFINgFNgIABUHQNigCACHbBSDbBSDMBUYh3AUg3AUEQEHENigCACHdBSDdBSDSBWoh3gVBxDYg3gU2AgBB0DYg0QU2AgAg3gVBAXIh3wUg0QVBBGoh4AUg4AUg3wU2AgAg0QUg3gVqIeEFIOEFIN4FNgIADAILIMwFQQRqIeIFIOIFKAIAIeMFIOMFQQNxIeUFIOUFQQFGIeYFIOYFBEAg4wVBeHEh5wUg4wVBA3Yh6AUg4wVBgAJJIekFAkAg6QUEQCDMBUEIaiHqBSDqBSgCACHrBSDMBUEMaiHsBSDsBSgCACHtBSDtBSDrBUYh7gUg7gUEQEEBIOgFdCHxBSDxBUF/cyHyBUG8NigCACHzBSDzBSDyBXEh9AVBvDYg9AU2AgAMAgUg6wVBDGoh9QUg9QUg7QU2AgAg7QVBCGoh9gUg9gUg6wU2AgAMAgsABSDMBUEYaiH3BSD3BSgCACH4BSDMBUEMaiH5BSD5BSgCACH6BSD6BSDMBUYh/AUCQCD8BQRAIMwFQRBqIYEGIIEGQQRqIYIGIIIGKAIAIYMGIIMGQQBGIYQGIIQGBEAggQYoAgAhhQYghQZBAEYhhwYghwYEQEEAITUMAwUghQYhKSCBBiEqCwUggwYhKSCCBiEqCwNAAkAgKUEUaiGIBiCIBigCACGJBiCJBkEARiGKBiCKBkUEQCCJBiEpIIgGISoMAgsgKUEQaiGLBiCLBigCACGMBiCMBkEARiGNBiCNBgRADAEFIIwGISkgiwYhKgsMAQsLICpBADYCACApITUFIMwFQQhqIf0FIP0FKAIAIf4FIP4FQQxqIf8FIP8FIPoFNgIAIPoFQQhqIYAGIIAGIP4FNgIAIPoFITULCyD4BUEARiGOBiCOBgRADAILIMwFQRxqIY8GII8GKAIAIZAGQew4IJAGQQJ0aiGSBiCSBigCACGTBiCTBiDMBUYhlAYCQCCUBgRAIJIGIDU2AgAgNUEARiGhCCChCEUEQAwCC0EBIJAGdCGVBiCVBkF/cyGWBkHANigCACGXBiCXBiCWBnEhmAZBwDYgmAY2AgAMAwUg+AVBEGohmQYgmQYoAgAhmgYgmgYgzAVHIZsGIJsGQQFxIVAg+AVBEGogUEECdGohnQYgnQYgNTYCACA1QQBGIZ4GIJ4GBEAMBAsLCyA1QRhqIZ8GIJ8GIPgFNgIAIMwFQRBqIaAGIKAGKAIAIaEGIKEGQQBGIaIGIKIGRQRAIDVBEGohowYgowYgoQY2AgAgoQZBGGohpAYgpAYgNTYCAAsgoAZBBGohpQYgpQYoAgAhpgYgpgZBAEYhqAYgqAYEQAwCCyA1QRRqIakGIKkGIKYGNgIAIKYGQRhqIaoGIKoGIDU2AgALCyDMBSDnBWohqwYg5wUg0gVqIawGIKsGIQggrAYhFgUgzAUhCCDSBSEWCyAIQQRqIa0GIK0GKAIAIa4GIK4GQX5xIa8GIK0GIK8GNgIAIBZBAXIhsAYg0QVBBGohsQYgsQYgsAY2AgAg0QUgFmohswYgswYgFjYCACAWQQN2IbQGIBZBgAJJIbUGILUGBEAgtAZBAXQhtgZB5DYgtgZBAnRqIbcGQbw2KAIAIbgGQQEgtAZ0IbkGILgGILkGcSG6BiC6BkEARiG7BiC7BgRAILgGILkGciG8BkG8NiC8BjYCACC3BkEIaiFHILcGIRkgRyFLBSC3BkEIaiG+BiC+BigCACG/BiC/BiEZIL4GIUsLIEsg0QU2AgAgGUEMaiHABiDABiDRBTYCACDRBUEIaiHBBiDBBiAZNgIAINEFQQxqIcIGIMIGILcGNgIADAILIBZBCHYhwwYgwwZBAEYhxAYCQCDEBgRAQQAhGgUgFkH///8HSyHFBiDFBgRAQR8hGgwCCyDDBkGA/j9qIcYGIMYGQRB2IccGIMcGQQhxIckGIMMGIMkGdCHKBiDKBkGA4B9qIcsGIMsGQRB2IcwGIMwGQQRxIc0GIM0GIMkGciHOBiDKBiDNBnQhzwYgzwZBgIAPaiHQBiDQBkEQdiHRBiDRBkECcSHSBiDOBiDSBnIh1AZBDiDUBmsh1QYgzwYg0gZ0IdYGINYGQQ92IdcGINUGINcGaiHYBiDYBkEBdCHZBiDYBkEHaiHaBiAWINoGdiHbBiDbBkEBcSHcBiDcBiDZBnIh3QYg3QYhGgsLQew4IBpBAnRqIeAGINEFQRxqIeEGIOEGIBo2AgAg0QVBEGoh4gYg4gZBBGoh4wYg4wZBADYCACDiBkEANgIAQcA2KAIAIeQGQQEgGnQh5QYg5AYg5QZxIeYGIOYGQQBGIecGIOcGBEAg5AYg5QZyIegGQcA2IOgGNgIAIOAGINEFNgIAINEFQRhqIekGIOkGIOAGNgIAINEFQQxqIesGIOsGINEFNgIAINEFQQhqIewGIOwGINEFNgIADAILIOAGKAIAIe0GIBpBH0Yh7gYgGkEBdiHvBkEZIO8GayHwBiDuBgR/QQAFIPAGCyHxBiAWIPEGdCHyBiDyBiEXIO0GIRgDQAJAIBhBBGoh8wYg8wYoAgAh9AYg9AZBeHEh9gYg9gYgFkYh9wYg9wYEQEHAASGyCAwBCyAXQR92IfgGIBhBEGog+AZBAnRqIfkGIBdBAXQh+gYg+QYoAgAh+wYg+wZBAEYh/AYg/AYEQEG/ASGyCAwBBSD6BiEXIPsGIRgLDAELCyCyCEG/AUYEQCD5BiDRBTYCACDRBUEYaiH9BiD9BiAYNgIAINEFQQxqIf4GIP4GINEFNgIAINEFQQhqIf8GIP8GINEFNgIADAIFILIIQcABRgRAIBhBCGohgQcggQcoAgAhggcgggdBDGohgwcggwcg0QU2AgAggQcg0QU2AgAg0QVBCGohhAcghAcgggc2AgAg0QVBDGohhQcghQcgGDYCACDRBUEYaiGGByCGB0EANgIADAMLCwsLIMQFQQhqIZEIIJEIIQYgswgkDSAGDwVB/DkhCQsLA0ACQCAJKAIAIYcHIIcHIPEESyGIByCIB0UEQCAJQQRqIYkHIIkHKAIAIYoHIIcHIIoHaiGMByCMByDxBEshjQcgjQcEQAwCCwsgCUEIaiGOByCOBygCACGPByCPByEJDAELCyCMB0FRaiGQByCQB0EIaiGRByCRByGSByCSB0EHcSGTByCTB0EARiGUB0EAIJIHayGVByCVB0EHcSGXByCUBwR/QQAFIJcHCyGYByCQByCYB2ohmQcg8QRBEGohmgcgmQcgmgdJIZsHIJsHBH8g8QQFIJkHCyGcByCcB0EIaiGdByCcB0EYaiGeByBCQVhqIZ8HIENBCGohoAcgoAchogcgogdBB3EhowcgowdBAEYhpAdBACCiB2shpQcgpQdBB3EhpgcgpAcEf0EABSCmBwshpwcgQyCnB2ohqAcgnwcgpwdrIakHQdQ2IKgHNgIAQcg2IKkHNgIAIKkHQQFyIaoHIKgHQQRqIasHIKsHIKoHNgIAIEMgnwdqIa0HIK0HQQRqIa4HIK4HQSg2AgBBpDooAgAhrwdB2DYgrwc2AgAgnAdBBGohsAcgsAdBGzYCACCdB0H8OSkCADcCACCdB0EIakH8OUEIaikCADcCAEH8OSBDNgIAQYA6IEI2AgBBiDpBADYCAEGEOiCdBzYCACCeByGyBwNAAkAgsgdBBGohsQcgsQdBBzYCACCyB0EIaiGzByCzByCMB0khtAcgtAcEQCCxByGyBwUMAQsMAQsLIJwHIPEERiG1ByC1B0UEQCCcByG2ByDxBCG4ByC2ByC4B2shuQcgsAcoAgAhugcgugdBfnEhuwcgsAcguwc2AgAguQdBAXIhvAcg8QRBBGohvQcgvQcgvAc2AgAgnAcguQc2AgAguQdBA3YhvgcguQdBgAJJIb8HIL8HBEAgvgdBAXQhwAdB5DYgwAdBAnRqIcEHQbw2KAIAIcMHQQEgvgd0IcQHIMMHIMQHcSHFByDFB0EARiHGByDGBwRAIMMHIMQHciHHB0G8NiDHBzYCACDBB0EIaiFGIMEHIRMgRiFKBSDBB0EIaiHIByDIBygCACHJByDJByETIMgHIUoLIEog8QQ2AgAgE0EMaiHKByDKByDxBDYCACDxBEEIaiHLByDLByATNgIAIPEEQQxqIcwHIMwHIMEHNgIADAMLILkHQQh2Ic8HIM8HQQBGIdAHINAHBEBBACEUBSC5B0H///8HSyHRByDRBwRAQR8hFAUgzwdBgP4/aiHSByDSB0EQdiHTByDTB0EIcSHUByDPByDUB3Qh1Qcg1QdBgOAfaiHWByDWB0EQdiHXByDXB0EEcSHYByDYByDUB3Ih2gcg1Qcg2Ad0IdsHINsHQYCAD2oh3Acg3AdBEHYh3Qcg3QdBAnEh3gcg2gcg3gdyId8HQQ4g3wdrIeAHINsHIN4HdCHhByDhB0EPdiHiByDgByDiB2oh4wcg4wdBAXQh5Qcg4wdBB2oh5gcguQcg5gd2IecHIOcHQQFxIegHIOgHIOUHciHpByDpByEUCwtB7DggFEECdGoh6gcg8QRBHGoh6wcg6wcgFDYCACDxBEEUaiHsByDsB0EANgIAIJoHQQA2AgBBwDYoAgAh7QdBASAUdCHuByDtByDuB3Eh8Acg8AdBAEYh8Qcg8QcEQCDtByDuB3Ih8gdBwDYg8gc2AgAg6gcg8QQ2AgAg8QRBGGoh8wcg8wcg6gc2AgAg8QRBDGoh9Acg9Acg8QQ2AgAg8QRBCGoh9Qcg9Qcg8QQ2AgAMAwsg6gcoAgAh9gcgFEEfRiH3ByAUQQF2IfgHQRkg+AdrIfkHIPcHBH9BAAUg+QcLIfsHILkHIPsHdCH8ByD8ByERIPYHIRIDQAJAIBJBBGoh/Qcg/QcoAgAh/gcg/gdBeHEh/wcg/wcguQdGIYAIIIAIBEBB1QEhsggMAQsgEUEfdiGBCCASQRBqIIEIQQJ0aiGCCCARQQF0IYMIIIIIKAIAIYQIIIQIQQBGIYYIIIYIBEBB1AEhsggMAQUggwghESCECCESCwwBCwsgsghB1AFGBEAggggg8QQ2AgAg8QRBGGohhwgghwggEjYCACDxBEEMaiGICCCICCDxBDYCACDxBEEIaiGJCCCJCCDxBDYCAAwDBSCyCEHVAUYEQCASQQhqIYoIIIoIKAIAIYsIIIsIQQxqIYwIIIwIIPEENgIAIIoIIPEENgIAIPEEQQhqIY0III0IIIsINgIAIPEEQQxqIY4III4IIBI2AgAg8QRBGGohjwggjwhBADYCAAwECwsLCwtByDYoAgAhkgggkgggD0shkwggkwgEQCCSCCAPayGUCEHINiCUCDYCAEHUNigCACGVCCCVCCAPaiGWCEHUNiCWCDYCACCUCEEBciGXCCCWCEEEaiGYCCCYCCCXCDYCACAPQQNyIZkIIJUIQQRqIZoIIJoIIJkINgIAIJUIQQhqIZwIIJwIIQYgswgkDSAGDwsLEDEhnQggnQhBDDYCAEEAIQYgswgkDSAGDwuwGwGbAn8jDSGbAiAAQQBGIRQgFARADwsgAEF4aiGDAUHMNigCACHLASAAQXxqIdYBINYBKAIAIeEBIOEBQXhxIewBIIMBIOwBaiH3ASDhAUEBcSGCAiCCAkEARiGNAgJAII0CBEAggwEoAgAhFSDhAUEDcSEgICBBAEYhKyArBEAPC0EAIBVrITYggwEgNmohQSAVIOwBaiFMIEEgywFJIVcgVwRADwtB0DYoAgAhYiBiIEFGIW0gbQRAIPcBQQRqIYECIIECKAIAIYMCIIMCQQNxIYQCIIQCQQNGIYUCIIUCRQRAIEEhByBMIQggQSGLAgwDC0HENiBMNgIAIIMCQX5xIYYCIIECIIYCNgIAIExBAXIhhwIgQUEEaiGIAiCIAiCHAjYCACBBIExqIYkCIIkCIEw2AgAPCyAVQQN2IXggFUGAAkkhhAEghAEEQCBBQQhqIY8BII8BKAIAIZoBIEFBDGohpQEgpQEoAgAhsAEgsAEgmgFGIbsBILsBBEBBASB4dCHGASDGAUF/cyHIAUG8NigCACHJASDJASDIAXEhygFBvDYgygE2AgAgQSEHIEwhCCBBIYsCDAMFIJoBQQxqIcwBIMwBILABNgIAILABQQhqIc0BIM0BIJoBNgIAIEEhByBMIQggQSGLAgwDCwALIEFBGGohzgEgzgEoAgAhzwEgQUEMaiHQASDQASgCACHRASDRASBBRiHSAQJAINIBBEAgQUEQaiHYASDYAUEEaiHZASDZASgCACHaASDaAUEARiHbASDbAQRAINgBKAIAIdwBINwBQQBGId0BIN0BBEBBACEODAMFINwBIQkg2AEhCgsFINoBIQkg2QEhCgsDQAJAIAlBFGoh3gEg3gEoAgAh3wEg3wFBAEYh4AEg4AFFBEAg3wEhCSDeASEKDAILIAlBEGoh4gEg4gEoAgAh4wEg4wFBAEYh5AEg5AEEQAwBBSDjASEJIOIBIQoLDAELCyAKQQA2AgAgCSEOBSBBQQhqIdMBINMBKAIAIdQBINQBQQxqIdUBINUBINEBNgIAINEBQQhqIdcBINcBINQBNgIAINEBIQ4LCyDPAUEARiHlASDlAQRAIEEhByBMIQggQSGLAgUgQUEcaiHmASDmASgCACHnAUHsOCDnAUECdGoh6AEg6AEoAgAh6QEg6QEgQUYh6gEg6gEEQCDoASAONgIAIA5BAEYhmAIgmAIEQEEBIOcBdCHrASDrAUF/cyHtAUHANigCACHuASDuASDtAXEh7wFBwDYg7wE2AgAgQSEHIEwhCCBBIYsCDAQLBSDPAUEQaiHwASDwASgCACHxASDxASBBRyHyASDyAUEBcSESIM8BQRBqIBJBAnRqIfMBIPMBIA42AgAgDkEARiH0ASD0AQRAIEEhByBMIQggQSGLAgwECwsgDkEYaiH1ASD1ASDPATYCACBBQRBqIfYBIPYBKAIAIfgBIPgBQQBGIfkBIPkBRQRAIA5BEGoh+gEg+gEg+AE2AgAg+AFBGGoh+wEg+wEgDjYCAAsg9gFBBGoh/AEg/AEoAgAh/QEg/QFBAEYh/gEg/gEEQCBBIQcgTCEIIEEhiwIFIA5BFGoh/wEg/wEg/QE2AgAg/QFBGGohgAIggAIgDjYCACBBIQcgTCEIIEEhiwILCwUggwEhByDsASEIIIMBIYsCCwsgiwIg9wFJIYoCIIoCRQRADwsg9wFBBGohjAIgjAIoAgAhjgIgjgJBAXEhjwIgjwJBAEYhkAIgkAIEQA8LII4CQQJxIZECIJECQQBGIZICIJICBEBB1DYoAgAhkwIgkwIg9wFGIZQCIJQCBEBByDYoAgAhlQIglQIgCGohlgJByDYglgI2AgBB1DYgBzYCACCWAkEBciGXAiAHQQRqIRYgFiCXAjYCAEHQNigCACEXIAcgF0YhGCAYRQRADwtB0DZBADYCAEHENkEANgIADwtB0DYoAgAhGSAZIPcBRiEaIBoEQEHENigCACEbIBsgCGohHEHENiAcNgIAQdA2IIsCNgIAIBxBAXIhHSAHQQRqIR4gHiAdNgIAIIsCIBxqIR8gHyAcNgIADwsgjgJBeHEhISAhIAhqISIgjgJBA3YhIyCOAkGAAkkhJAJAICQEQCD3AUEIaiElICUoAgAhJiD3AUEMaiEnICcoAgAhKCAoICZGISkgKQRAQQEgI3QhKiAqQX9zISxBvDYoAgAhLSAtICxxIS5BvDYgLjYCAAwCBSAmQQxqIS8gLyAoNgIAIChBCGohMCAwICY2AgAMAgsABSD3AUEYaiExIDEoAgAhMiD3AUEMaiEzIDMoAgAhNCA0IPcBRiE1AkAgNQRAIPcBQRBqITsgO0EEaiE8IDwoAgAhPSA9QQBGIT4gPgRAIDsoAgAhPyA/QQBGIUAgQARAQQAhDwwDBSA/IQsgOyEMCwUgPSELIDwhDAsDQAJAIAtBFGohQiBCKAIAIUMgQ0EARiFEIERFBEAgQyELIEIhDAwCCyALQRBqIUUgRSgCACFGIEZBAEYhRyBHBEAMAQUgRiELIEUhDAsMAQsLIAxBADYCACALIQ8FIPcBQQhqITcgNygCACE4IDhBDGohOSA5IDQ2AgAgNEEIaiE6IDogODYCACA0IQ8LCyAyQQBGIUggSEUEQCD3AUEcaiFJIEkoAgAhSkHsOCBKQQJ0aiFLIEsoAgAhTSBNIPcBRiFOIE4EQCBLIA82AgAgD0EARiGZAiCZAgRAQQEgSnQhTyBPQX9zIVBBwDYoAgAhUSBRIFBxIVJBwDYgUjYCAAwECwUgMkEQaiFTIFMoAgAhVCBUIPcBRyFVIFVBAXEhEyAyQRBqIBNBAnRqIVYgViAPNgIAIA9BAEYhWCBYBEAMBAsLIA9BGGohWSBZIDI2AgAg9wFBEGohWiBaKAIAIVsgW0EARiFcIFxFBEAgD0EQaiFdIF0gWzYCACBbQRhqIV4gXiAPNgIACyBaQQRqIV8gXygCACFgIGBBAEYhYSBhRQRAIA9BFGohYyBjIGA2AgAgYEEYaiFkIGQgDzYCAAsLCwsgIkEBciFlIAdBBGohZiBmIGU2AgAgiwIgImohZyBnICI2AgBB0DYoAgAhaCAHIGhGIWkgaQRAQcQ2ICI2AgAPBSAiIQ0LBSCOAkF+cSFqIIwCIGo2AgAgCEEBciFrIAdBBGohbCBsIGs2AgAgiwIgCGohbiBuIAg2AgAgCCENCyANQQN2IW8gDUGAAkkhcCBwBEAgb0EBdCFxQeQ2IHFBAnRqIXJBvDYoAgAhc0EBIG90IXQgcyB0cSF1IHVBAEYhdiB2BEAgcyB0ciF3Qbw2IHc2AgAgckEIaiEQIHIhBiAQIREFIHJBCGoheSB5KAIAIXogeiEGIHkhEQsgESAHNgIAIAZBDGoheyB7IAc2AgAgB0EIaiF8IHwgBjYCACAHQQxqIX0gfSByNgIADwsgDUEIdiF+IH5BAEYhfyB/BEBBACEFBSANQf///wdLIYABIIABBEBBHyEFBSB+QYD+P2ohgQEggQFBEHYhggEgggFBCHEhhQEgfiCFAXQhhgEghgFBgOAfaiGHASCHAUEQdiGIASCIAUEEcSGJASCJASCFAXIhigEghgEgiQF0IYsBIIsBQYCAD2ohjAEgjAFBEHYhjQEgjQFBAnEhjgEgigEgjgFyIZABQQ4gkAFrIZEBIIsBII4BdCGSASCSAUEPdiGTASCRASCTAWohlAEglAFBAXQhlQEglAFBB2ohlgEgDSCWAXYhlwEglwFBAXEhmAEgmAEglQFyIZkBIJkBIQULC0HsOCAFQQJ0aiGbASAHQRxqIZwBIJwBIAU2AgAgB0EQaiGdASAHQRRqIZ4BIJ4BQQA2AgAgnQFBADYCAEHANigCACGfAUEBIAV0IaABIJ8BIKABcSGhASChAUEARiGiAQJAIKIBBEAgnwEgoAFyIaMBQcA2IKMBNgIAIJsBIAc2AgAgB0EYaiGkASCkASCbATYCACAHQQxqIaYBIKYBIAc2AgAgB0EIaiGnASCnASAHNgIABSCbASgCACGoASAFQR9GIakBIAVBAXYhqgFBGSCqAWshqwEgqQEEf0EABSCrAQshrAEgDSCsAXQhrQEgrQEhAyCoASEEA0ACQCAEQQRqIa4BIK4BKAIAIa8BIK8BQXhxIbEBILEBIA1GIbIBILIBBEBByQAhmgIMAQsgA0EfdiGzASAEQRBqILMBQQJ0aiG0ASADQQF0IbUBILQBKAIAIbYBILYBQQBGIbcBILcBBEBByAAhmgIMAQUgtQEhAyC2ASEECwwBCwsgmgJByABGBEAgtAEgBzYCACAHQRhqIbgBILgBIAQ2AgAgB0EMaiG5ASC5ASAHNgIAIAdBCGohugEgugEgBzYCAAwCBSCaAkHJAEYEQCAEQQhqIbwBILwBKAIAIb0BIL0BQQxqIb4BIL4BIAc2AgAgvAEgBzYCACAHQQhqIb8BIL8BIL0BNgIAIAdBDGohwAEgwAEgBDYCACAHQRhqIcEBIMEBQQA2AgAMAwsLCwtB3DYoAgAhwgEgwgFBf2ohwwFB3DYgwwE2AgAgwwFBAEYhxAEgxAEEQEGEOiECBQ8LA0ACQCACKAIAIQEgAUEARiHFASABQQhqIccBIMUBBEAMAQUgxwEhAgsMAQsLQdw2QX82AgAPC08BCH8jDSEIIw1BEGokDSMNIw5OBEBBEBADCyAIIQYgAEE8aiEBIAEoAgAhAiACEDIhAyAGIAM2AgBBBiAGEAshBCAEEDAhBSAIJA0gBQ8LmwUBQH8jDSFCIw1BMGokDSMNIw5OBEBBMBADCyBCQRBqITwgQiE7IEJBIGohHiAAQRxqISkgKSgCACE0IB4gNDYCACAeQQRqITcgAEEUaiE4IDgoAgAhOSA5IDRrITogNyA6NgIAIB5BCGohCiAKIAE2AgAgHkEMaiELIAsgAjYCACA6IAJqIQwgAEE8aiENIA0oAgAhDiAeIQ8gOyAONgIAIDtBBGohPSA9IA82AgAgO0EIaiE+ID5BAjYCAEGSASA7EAkhECAQEDAhESAMIBFGIRICQCASBEBBAyFBBUECIQQgDCEFIB4hBiARIRsDQAJAIBtBAEghGiAaBEAMAQsgBSAbayEkIAZBBGohJSAlKAIAISYgGyAmSyEnIAZBCGohKCAnBH8gKAUgBgshCSAnQR90QR91ISogBCAqaiEIICcEfyAmBUEACyErIBsgK2shAyAJKAIAISwgLCADaiEtIAkgLTYCACAJQQRqIS4gLigCACEvIC8gA2shMCAuIDA2AgAgDSgCACExIAkhMiA8IDE2AgAgPEEEaiE/ID8gMjYCACA8QQhqIUAgQCAINgIAQZIBIDwQCSEzIDMQMCE1ICQgNUYhNiA2BEBBAyFBDAQFIAghBCAkIQUgCSEGIDUhGwsMAQsLIABBEGohHCAcQQA2AgAgKUEANgIAIDhBADYCACAAKAIAIR0gHUEgciEfIAAgHzYCACAEQQJGISAgIARAQQAhBwUgBkEEaiEhICEoAgAhIiACICJrISMgIyEHCwsLIEFBA0YEQCAAQSxqIRMgEygCACEUIABBMGohFSAVKAIAIRYgFCAWaiEXIABBEGohGCAYIBc2AgAgFCEZICkgGTYCACA4IBk2AgAgAiEHCyBCJA0gBw8LsAEBEH8jDSESIw1BIGokDSMNIw5OBEBBIBADCyASIQwgEkEUaiEFIABBPGohBiAGKAIAIQcgBSEIIAwgBzYCACAMQQRqIQ0gDUEANgIAIAxBCGohDiAOIAE2AgAgDEEMaiEPIA8gCDYCACAMQRBqIRAgECACNgIAQYwBIAwQCCEJIAkQMCEKIApBAEghCyALBEAgBUF/NgIAQX8hBAUgBSgCACEDIAMhBAsgEiQNIAQPCzMBBn8jDSEGIABBgGBLIQIgAgRAQQAgAGshAxAxIQQgBCADNgIAQX8hAQUgACEBCyABDwsMAQJ/Iw0hAUHsOg8LCwECfyMNIQIgAA8LuwEBEX8jDSETIw1BIGokDSMNIw5OBEBBIBADCyATIQ8gE0EQaiEIIABBJGohCSAJQQI2AgAgACgCACEKIApBwABxIQsgC0EARiEMIAwEQCAAQTxqIQ0gDSgCACEOIAghAyAPIA42AgAgD0EEaiEQIBBBk6gBNgIAIA9BCGohESARIAM2AgBBNiAPEAohBCAEQQBGIQUgBUUEQCAAQcsAaiEGIAZBfzoAAAsLIAAgASACEC4hByATJA0gBw8L0AEBFX8jDSEWIAAsAAAhCyABLAAAIQwgC0EYdEEYdSAMQRh0QRh1RyENIAtBGHRBGHVBAEYhDiAOIA1yIRQgFARAIAwhBCALIQUFIAEhAiAAIQMDQAJAIANBAWohDyACQQFqIRAgDywAACERIBAsAAAhEiARQRh0QRh1IBJBGHRBGHVHIQYgEUEYdEEYdUEARiEHIAcgBnIhEyATBEAgEiEEIBEhBQwBBSAQIQIgDyEDCwwBCwsLIAVB/wFxIQggBEH/AXEhCSAIIAlrIQogCg8LwwQBLX8jDSEvIw1B4AFqJA0jDSMOTgRAQeABEAMLIC9B+ABqIRsgL0HQAGohJiAvISggL0GIAWohKSAmQgA3AgAgJkEIakIANwIAICZBEGpCADcCACAmQRhqQgA3AgAgJkEgakIANwIAIAIoAgAhLSAbIC02AgBBACABIBsgKCAmEDYhKiAqQQBIISsgKwRAQX8hBAUgAEHMAGohLCAsKAIAIQcgB0F/SiEIIAgEQCAAEDchCSAJIScFQQAhJwsgACgCACEKIApBIHEhCyAAQcoAaiEMIAwsAAAhDSANQRh0QRh1QQFIIQ4gDgRAIApBX3EhDyAAIA82AgALIABBMGohECAQKAIAIREgEUEARiESIBIEQCAAQSxqIRQgFCgCACEVIBQgKTYCACAAQRxqIRYgFiApNgIAIABBFGohFyAXICk2AgAgEEHQADYCACApQdAAaiEYIABBEGohGSAZIBg2AgAgACABIBsgKCAmEDYhGiAVQQBGIRwgHARAIBohBQUgAEEkaiEdIB0oAgAhHiAAQQBBACAeQQdxQQhqEQAAGiAXKAIAIR8gH0EARiEgICAEf0F/BSAaCyEDIBQgFTYCACAQQQA2AgAgGUEANgIAIBZBADYCACAXQQA2AgAgAyEFCwUgACABIBsgKCAmEDYhEyATIQULIAAoAgAhISAhQSBxISIgIkEARiEjICMEfyAFBUF/CyEGICEgC3IhJCAAICQ2AgAgJ0EARiElICVFBEAgABA4CyAGIQQLIC8kDSAEDwvoKgPnAn8OfgF8Iw0h6wIjDUHAAGokDSMNIw5OBEBBwAAQAwsg6wJBEGohkgIg6wIhnQIg6wJBGGohqAIg6wJBCGohswIg6wJBFGohvQIgkgIgATYCACAAQQBHIU8gqAJBKGohWiBaIWQgqAJBJ2ohbyCzAkEEaiF6QQAhFkEAIRdBACEhIAEhvQEDQAJAIBdBf0ohhAECQCCEAQRAQf////8HIBdrIY4BIBYgjgFKIZcBIJcBBEAQMSGhASChAUHLADYCAEF/ISoMAgUgFiAXaiGqASCqASEqDAILAAUgFyEqCwsgvQEsAAAhswEgswFBGHRBGHVBAEYhxwEgxwEEQEHWACHqAgwBBSCzASHSASC9ASHnAQsDQAJAAkACQAJAAkAg0gFBGHRBGHVBAGsOJgECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgsCQCDnASEZIOcBIfsBQQkh6gIMBAwDAAsACwJAIOcBIRgg5wEhhwIMAwwCAAsACwELIOcBQQFqId0BIJICIN0BNgIAIN0BLAAAIUogSiHSASDdASHnAQwBCwsCQCDqAkEJRgRAA0ACQEEAIeoCIPsBQQFqIfIBIPIBLAAAIfwBIPwBQRh0QRh1QSVGIf0BIP0BRQRAIBkhGCD7ASGHAgwECyAZQQFqIf4BIPsBQQJqIf8BIJICIP8BNgIAIP8BLAAAIYACIIACQRh0QRh1QSVGIYECIIECBEAg/gEhGSD/ASH7AUEJIeoCBSD+ASEYIP8BIYcCDAELDAELCwsLIBghggIgvQEhgwIgggIggwJrIYQCIE8EQCAAIL0BIIQCEDkLIIQCQQBGIYUCIIUCRQRAICEhIiCEAiEWICohFyCHAiG9ASAiISEMAgsghwJBAWohhgIghgIsAAAhiAIgiAJBGHRBGHUhiQIgiQJBUGoh3wIg3wJBCkkh3AIg3AIEQCCHAkECaiGKAiCKAiwAACGLAiCLAkEYdEEYdUEkRiGMAiCHAkEDaiGNAiCMAgR/II0CBSCGAgshRCCMAgR/QQEFICELIQkgjAIEfyDfAgVBfwsh4AIg4AIhGyAJITAgRCHnAgVBfyEbICEhMCCGAiHnAgsgkgIg5wI2AgAg5wIsAAAhjgIgjgJBGHRBGHUhjwIgjwJBYGohkAIgkAJBH0shkQJBASCQAnQhkwIgkwJBidEEcSGUAiCUAkEARiGVAiCRAiCVAnIhzQIgzQIEQEEAIR8gjgIhSSDnAiGnAgVBACEgII4CIZcCIOcCIZwCA0ACQCCXAkEYdEEYdSGWAiCWAkFgaiGYAkEBIJgCdCGZAiCZAiAgciGaAiCcAkEBaiGbAiCSAiCbAjYCACCbAiwAACGeAiCeAkEYdEEYdSGfAiCfAkFgaiGgAiCgAkEfSyGhAkEBIKACdCGiAiCiAkGJ0QRxIaMCIKMCQQBGIaQCIKECIKQCciHMAiDMAgRAIJoCIR8gngIhSSCbAiGnAgwBBSCaAiEgIJ4CIZcCIJsCIZwCCwwBCwsLIElBGHRBGHVBKkYhpQIgpQIEQCCnAkEBaiGmAiCmAiwAACGpAiCpAkEYdEEYdSGqAiCqAkFQaiHiAiDiAkEKSSHeAiDeAgRAIKcCQQJqIasCIKsCLAAAIawCIKwCQRh0QRh1QSRGIa0CIK0CBEAgBCDiAkECdGohrgIgrgJBCjYCACCmAiwAACGvAiCvAkEYdEEYdSGwAiCwAkFQaiGxAiADILECQQN0aiGyAiCyAikDACH5AiD5AqchtAIgpwJBA2ohtQIgtAIhHkEBITwgtQIh6AIFQRYh6gILBUEWIeoCCyDqAkEWRgRAQQAh6gIgMEEARiG2AiC2AkUEQEF/IQwMAwsgTwRAIAIoAgAhyAIgyAIhtwJBAEEEaiHXAiDXAiHWAiDWAkEBayHOAiC3AiDOAmohuAJBAEEEaiHbAiDbAiHaAiDaAkEBayHZAiDZAkF/cyHYAiC4AiDYAnEhuQIguQIhugIgugIoAgAhuwIgugJBBGohygIgAiDKAjYCACC7AiEeQQAhPCCmAiHoAgVBACEeQQAhPCCmAiHoAgsLIJICIOgCNgIAIB5BAEghvAIgH0GAwAByIb4CQQAgHmshvwIgvAIEfyC+AgUgHwshCCC8AgR/IL8CBSAeCyEHIAchLSAIIS4gPCFCIOgCIcMCBSCSAhA6IcACIMACQQBIIcECIMECBEBBfyEMDAILIJICKAIAIUsgwAIhLSAfIS4gMCFCIEshwwILIMMCLAAAIcICIMICQRh0QRh1QS5GIcQCAkAgxAIEQCDDAkEBaiHFAiDFAiwAACHGAiDGAkEYdEEYdUEqRiHHAiDHAkUEQCDDAkEBaiFlIJICIGU2AgAgkgIQOiFmIJICKAIAIU0gZiEcIE0hTAwCCyDDAkECaiFQIFAsAAAhUSBRQRh0QRh1IVIgUkFQaiHhAiDhAkEKSSHdAiDdAgRAIMMCQQNqIVMgUywAACFUIFRBGHRBGHVBJEYhVSBVBEAgBCDhAkECdGohViBWQQo2AgAgUCwAACFXIFdBGHRBGHUhWCBYQVBqIVkgAyBZQQN0aiFbIFspAwAh7QIg7QKnIVwgwwJBBGohXSCSAiBdNgIAIFwhHCBdIUwMAwsLIEJBAEYhXiBeRQRAQX8hDAwDCyBPBEAgAigCACHJAiDJAiFfQQBBBGoh0QIg0QIh0AIg0AJBAWshzwIgXyDPAmohYEEAQQRqIdUCINUCIdQCINQCQQFrIdMCINMCQX9zIdICIGAg0gJxIWEgYSFiIGIoAgAhYyBiQQRqIcsCIAIgywI2AgAgYyH5AQVBACH5AQsgkgIgUDYCACD5ASEcIFAhTAVBfyEcIMMCIUwLC0EAIRogTCFoA0ACQCBoLAAAIWcgZ0EYdEEYdSFpIGlBv39qIWogakE5SyFrIGsEQEF/IQwMAwsgaEEBaiFsIJICIGw2AgAgaCwAACFtIG1BGHRBGHUhbiBuQb9/aiFwQcIjIBpBOmxqIHBqIXEgcSwAACFyIHJB/wFxIXMgc0F/aiF0IHRBCEkhdSB1BEAgcyEaIGwhaAUMAQsMAQsLIHJBGHRBGHVBAEYhdiB2BEBBfyEMDAELIHJBGHRBGHVBE0YhdyAbQX9KIXgCQCB3BEAgeARAQX8hDAwDBUEwIeoCCwUgeARAIAQgG0ECdGoheSB5IHM2AgAgAyAbQQN0aiF7IHspAwAh7gIgnQIg7gI3AwBBMCHqAgwCCyBPRQRAQQAhDAwDCyCdAiBzIAIQOwsLIOoCQTBGBEBBACHqAiBPRQRAQQAhFiAqIRcgQiEhIGwhvQEMAwsLIGgsAAAhfCB8QRh0QRh1IX0gGkEARyF+IH1BD3EhfyB/QQNGIYABIH4ggAFxIeQCIH1BX3EhgQEg5AIEfyCBAQUgfQshESAuQYDAAHEhggEgggFBAEYhgwEgLkH//3txIYUBIIMBBH8gLgUghQELIS8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgEUHBAGsOOA0VCxUQDw4VFRUVFRUVFRUVFQwVFRUVAhUVFRUVFRUVERUIBhQTEhUFFRUVCQAEARUVChUHFRUDFQsCQCAaQf8BcSHpAgJAAkACQAJAAkACQAJAAkACQCDpAkEYdEEYdUEAaw4IAAECAwQHBQYHCwJAIJ0CKAIAIYYBIIYBICo2AgBBACEWICohFyBCISEgbCG9AQwiDAgACwALAkAgnQIoAgAhhwEghwEgKjYCAEEAIRYgKiEXIEIhISBsIb0BDCEMBwALAAsCQCAqrCHvAiCdAigCACGIASCIASDvAjcDAEEAIRYgKiEXIEIhISBsIb0BDCAMBgALAAsCQCAqQf//A3EhiQEgnQIoAgAhigEgigEgiQE7AQBBACEWICohFyBCISEgbCG9AQwfDAUACwALAkAgKkH/AXEhiwEgnQIoAgAhjAEgjAEgiwE6AABBACEWICohFyBCISEgbCG9AQweDAQACwALAkAgnQIoAgAhjQEgjQEgKjYCAEEAIRYgKiEXIEIhISBsIb0BDB0MAwALAAsCQCAqrCHwAiCdAigCACGPASCPASDwAjcDAEEAIRYgKiEXIEIhISBsIb0BDBwMAgALAAsCQEEAIRYgKiEXIEIhISBsIb0BDBsACwALDBYACwALAkAgHEEISyGQASCQAQR/IBwFQQgLIZEBIC9BCHIhkgFB+AAhJiCRASEsIJIBIUFBPCHqAgwVAAsACwELAkAgESEmIBwhLCAvIUFBPCHqAgwTAAsACwJAIJ0CKQMAIfICIPICIFoQPSGbASAvQQhxIZwBIJwBQQBGIZ0BIJsBIZ4BIGQgngFrIZ8BIBwgnwFKIaABIJ8BQQFqIaIBIJ0BIKABciGjASCjAQR/IBwFIKIBCyEdIJsBIQ1BACElQZInIScgHSE4IC8hRiDyAiH2AkHCACHqAgwSAAsACwELAkAgnQIpAwAh8wIg8wJCAFMhpAEgpAEEQEIAIPMCfSH0AiCdAiD0AjcDAEEBIRBBkichEiD0AiH1AkHBACHqAgwSBSAvQYAQcSGlASClAUEARiGmASAvQQFxIacBIKcBQQBGIagBIKgBBH9BkicFQZQnCyEFIKYBBH8gBQVBkycLIQYgL0GBEHEhqQEgqQFBAEchqwEgqwFBAXEhPSA9IRAgBiESIPMCIfUCQcEAIeoCDBILAAwQAAsACwJAIJ0CKQMAIewCQQAhEEGSJyESIOwCIfUCQcEAIeoCDA8ACwALAkAgnQIpAwAh9wIg9wKnQf8BcSG4ASBvILgBOgAAIG8hMUEAITJBkichMyBaITdBASFHIIUBIUgMDgALAAsCQBAxIbkBILkBKAIAIboBILoBED8huwEguwEhI0HGACHqAgwNAAsACwJAIJ0CKAIAIbwBILwBQQBHIb4BIL4BBH8gvAEFQZwnCyG/ASC/ASEjQcYAIeoCDAwACwALAkAgnQIpAwAh+AIg+AKnIcYBILMCIMYBNgIAIHpBADYCACCdAiCzAjYCAEF/IUUgswIh+gFBygAh6gIMCwALAAsCQCCdAigCACFOIBxBAEYhyAEgyAEEQCAAQSAgLUEAIC8QQUEAIRRB0wAh6gIFIBwhRSBOIfoBQcoAIeoCCwwKAAsACwELAQsBCwELAQsBCwELAkAgnQIrAwAh+gIgACD6AiAtIBwgLyAREEMh4AEg4AEhFiAqIRcgQiEhIGwhvQEMBQwCAAsACwJAIL0BITFBACEyQZInITMgWiE3IBwhRyAvIUgLCwsCQCDqAkE8RgRAQQAh6gIgnQIpAwAh8QIgJkEgcSGTASDxAiBaIJMBEDwhlAEg8QJCAFEhlQEgQUEIcSGWASCWAUEARiGYASCYASCVAXIh5QIgJkEEdSGZAUGSJyCZAWohmgEg5QIEf0GSJwUgmgELIT4g5QIEf0EABUECCyE/IJQBIQ0gPyElID4hJyAsITggQSFGIPECIfYCQcIAIeoCBSDqAkHBAEYEQEEAIeoCIPUCIFoQPiGsASCsASENIBAhJSASIScgHCE4IC8hRiD1AiH2AkHCACHqAgUg6gJBxgBGBEBBACHqAiAjQQAgHBBAIcABIMABQQBGIcEBIMABIcIBICMhwwEgwgEgwwFrIcQBICMgHGohxQEgwQEEfyAcBSDEAQshQCDBAQR/IMUBBSDAAQshKyAjITFBACEyQZInITMgKyE3IEAhRyCFASFIBSDqAkHKAEYEQEEAIeoCIPoBIQ9BACEVQQAhKQNAAkAgDygCACHJASDJAUEARiHKASDKAQRAIBUhEyApITYMAQsgvQIgyQEQQiHLASDLAUEASCHMASBFIBVrIc0BIMsBIM0BSyHOASDMASDOAXIh5gIg5gIEQCAVIRMgywEhNgwBCyAPQQRqIc8BIMsBIBVqIdABIEUg0AFLIdEBINEBBEAgzwEhDyDQASEVIMsBISkFINABIRMgywEhNgwBCwwBCwsgNkEASCHTASDTAQRAQX8hDAwGCyAAQSAgLSATIC8QQSATQQBGIdQBINQBBEBBACEUQdMAIeoCBSD6ASEkQQAhKANAAkAgJCgCACHVASDVAUEARiHWASDWAQRAIBMhFEHTACHqAgwICyC9AiDVARBCIdcBINcBIChqIdgBINgBIBNKIdkBINkBBEAgEyEUQdMAIeoCDAgLICRBBGoh2gEgACC9AiDXARA5INgBIBNJIdsBINsBBEAg2gEhJCDYASEoBSATIRRB0wAh6gIMAQsMAQsLCwsLCwsLIOoCQcIARgRAQQAh6gIgOEF/SiGtASBGQf//e3EhrgEgrQEEfyCuAQUgRgshCiD2AkIAUiGvASA4QQBHIbABILABIK8BciHjAiANIbEBIGQgsQFrIbIBIK8BQQFzIbQBILQBQQFxIbUBILIBILUBaiG2ASA4ILYBSiG3ASC3AQR/IDgFILYBCyE5IOMCBH8gOQUgOAshOiDjAgR/IA0FIFoLIQ4gDiExICUhMiAnITMgWiE3IDohRyAKIUgFIOoCQdMARgRAQQAh6gIgL0GAwABzIdwBIABBICAtIBQg3AEQQSAtIBRKId4BIN4BBH8gLQUgFAsh3wEg3wEhFiAqIRcgQiEhIGwhvQEMAwsLIDch4QEgMSHiASDhASDiAWsh4wEgRyDjAUgh5AEg5AEEfyDjAQUgRwshCyALIDJqIeUBIC0g5QFIIeYBIOYBBH8g5QEFIC0LITsgAEEgIDsg5QEgSBBBIAAgMyAyEDkgSEGAgARzIegBIABBMCA7IOUBIOgBEEEgAEEwIAsg4wFBABBBIAAgMSDjARA5IEhBgMAAcyHpASAAQSAgOyDlASDpARBBIDshFiAqIRcgQiEhIGwhvQEMAQsLAkAg6gJB1gBGBEAgAEEARiHqASDqAQRAICFBAEYh6wEg6wEEQEEAIQwFQQEhNQNAAkAgBCA1QQJ0aiHsASDsASgCACHtASDtAUEARiHuASDuAQRAIDUhNAwBCyADIDVBA3RqIfABIPABIO0BIAIQOyA1QQFqIfEBIDVBCUgh8wEg8wEEQCDxASE1BSDxASE0DAELDAELCyA0QQpIIe8BIO8BBEAgNCFDA0ACQCAEIENBAnRqIfYBIPYBKAIAIfcBIPcBQQBGIfgBIPgBRQRAQX8hDAwHCyBDQQFqIfQBIENBCUgh9QEg9QEEQCD0ASFDBUEBIQwMAQsMAQsLBUEBIQwLCwUgKiEMCwsLIOsCJA0gDA8LCwECfyMNIQJBAA8LCQECfyMNIQIPCywBBX8jDSEHIAAoAgAhAyADQSBxIQQgBEEARiEFIAUEQCABIAIgABBQGgsPC6IBARJ/Iw0hEiAAKAIAIQMgAywAACEEIARBGHRBGHUhBSAFQVBqIQ8gD0EKSSENIA0EQEEAIQIgAyEJIA8hEANAAkAgAkEKbCEGIBAgBmohByAJQQFqIQggACAINgIAIAgsAAAhCiAKQRh0QRh1IQsgC0FQaiEOIA5BCkkhDCAMBEAgByECIAghCSAOIRAFIAchAQwBCwwBCwsFQQAhAQsgAQ8LmQoDkAF/B34CfCMNIZIBIAFBFEshFgJAIBZFBEACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4KAAECAwQFBgcICQoLAkAgAigCACE3IDchH0EAQQRqIU0gTSFMIExBAWshSyAfIEtqISlBAEEEaiFRIFEhUCBQQQFrIU8gT0F/cyFOICkgTnEhMiAyITQgNCgCACE1IDRBBGohQSACIEE2AgAgACA1NgIADA0MCwALAAsCQCACKAIAITsgOyE2QQBBBGohVCBUIVMgU0EBayFSIDYgUmohBUEAQQRqIVggWCFXIFdBAWshViBWQX9zIVUgBSBVcSEGIAYhByAHKAIAIQggB0EEaiFIIAIgSDYCACAIrCGTASAAIJMBNwMADAwMCgALAAsCQCACKAIAIT8gPyEJQQBBBGohWyBbIVogWkEBayFZIAkgWWohCkEAQQRqIV8gXyFeIF5BAWshXSBdQX9zIVwgCiBccSELIAshDCAMKAIAIQ0gDEEEaiFJIAIgSTYCACANrSGUASAAIJQBNwMADAsMCQALAAsCQCACKAIAIUAgQCEOQQBBCGohYiBiIWEgYUEBayFgIA4gYGohD0EAQQhqIWYgZiFlIGVBAWshZCBkQX9zIWMgDyBjcSEQIBAhESARKQMAIZUBIBFBCGohSiACIEo2AgAgACCVATcDAAwKDAgACwALAkAgAigCACE4IDghEkEAQQRqIWkgaSFoIGhBAWshZyASIGdqIRNBAEEEaiFtIG0hbCBsQQFrIWsga0F/cyFqIBMganEhFCAUIRUgFSgCACEXIBVBBGohQiACIEI2AgAgF0H//wNxIRggGEEQdEEQdawhlgEgACCWATcDAAwJDAcACwALAkAgAigCACE5IDkhGUEAQQRqIXAgcCFvIG9BAWshbiAZIG5qIRpBAEEEaiF0IHQhcyBzQQFrIXIgckF/cyFxIBogcXEhGyAbIRwgHCgCACEdIBxBBGohQyACIEM2AgAgHUH//wNxIQQgBK0hlwEgACCXATcDAAwIDAYACwALAkAgAigCACE6IDohHkEAQQRqIXcgdyF2IHZBAWshdSAeIHVqISBBAEEEaiF7IHsheiB6QQFrIXkgeUF/cyF4ICAgeHEhISAhISIgIigCACEjICJBBGohRCACIEQ2AgAgI0H/AXEhJCAkQRh0QRh1rCGYASAAIJgBNwMADAcMBQALAAsCQCACKAIAITwgPCElQQBBBGohfiB+IX0gfUEBayF8ICUgfGohJkEAQQRqIYIBIIIBIYEBIIEBQQFrIYABIIABQX9zIX8gJiB/cSEnICchKCAoKAIAISogKEEEaiFFIAIgRTYCACAqQf8BcSEDIAOtIZkBIAAgmQE3AwAMBgwEAAsACwJAIAIoAgAhPSA9IStBAEEIaiGFASCFASGEASCEAUEBayGDASArIIMBaiEsQQBBCGohiQEgiQEhiAEgiAFBAWshhwEghwFBf3MhhgEgLCCGAXEhLSAtIS4gLisDACGaASAuQQhqIUYgAiBGNgIAIAAgmgE5AwAMBQwDAAsACwJAIAIoAgAhPiA+IS9BAEEIaiGMASCMASGLASCLAUEBayGKASAvIIoBaiEwQQBBCGohkAEgkAEhjwEgjwFBAWshjgEgjgFBf3MhjQEgMCCNAXEhMSAxITMgMysDACGbASAzQQhqIUcgAiBHNgIAIAAgmwE5AwAMBAwCAAsACwwCCwsLDwuQAQIOfwJ+Iw0hECAAQgBRIQggCARAIAEhAwUgASEEIAAhEQNAAkAgEachCSAJQQ9xIQpBxicgCmohCyALLAAAIQwgDEH/AXEhDSANIAJyIQ4gDkH/AXEhBSAEQX9qIQYgBiAFOgAAIBFCBIghEiASQgBRIQcgBwRAIAYhAwwBBSAGIQQgEiERCwwBCwsLIAMPC3UCCn8CfiMNIQsgAEIAUSEEIAQEQCABIQIFIAAhDCABIQMDQAJAIAynQf8BcSEFIAVBB3EhBiAGQTByIQcgA0F/aiEIIAggBzoAACAMQgOIIQ0gDUIAUSEJIAkEQCAIIQIMAQUgDSEMIAghAwsMAQsLCyACDwv9AQIWfwN+Iw0hFyAAQv////8PViEOIACnIRQgDgRAIAAhGCABIQUDQAJAIBhCCoIhGSAZp0H/AXEhDyAPQTByIRAgBUF/aiERIBEgEDoAACAYQgqAIRogGEL/////nwFWIRIgEgRAIBohGCARIQUFDAELDAELCyAapyEVIBUhAiARIQQFIBQhAiABIQQLIAJBAEYhEyATBEAgBCEGBSACIQMgBCEHA0ACQCADQQpwQX9xIQggCEEwciEJIAlB/wFxIQogB0F/aiELIAsgCjoAACADQQpuQX9xIQwgA0EKSSENIA0EQCALIQYMAQUgDCEDIAshBwsMAQsLCyAGDwsmAQZ/Iw0hBhBKIQEgAUG8AWohAiACKAIAIQMgACADEEshBCAEDwuHBQE4fyMNITogAUH/AXEhJiAAITEgMUEDcSEyIDJBAEchMyACQQBHITQgNCAzcSE4AkAgOARAIAFB/wFxITUgACEGIAIhCQNAAkAgBiwAACE2IDZBGHRBGHUgNUEYdEEYdUYhEiASBEAgBiEFIAkhCEEGITkMBAsgBkEBaiETIAlBf2ohFCATIRUgFUEDcSEWIBZBAEchFyAUQQBHIRggGCAXcSE3IDcEQCATIQYgFCEJBSATIQQgFCEHIBghEUEFITkMAQsMAQsLBSAAIQQgAiEHIDQhEUEFITkLCyA5QQVGBEAgEQRAIAQhBSAHIQhBBiE5BSAEIQ5BACEQCwsCQCA5QQZGBEAgBSwAACEZIAFB/wFxIRogGUEYdEEYdSAaQRh0QRh1RiEbIBsEQCAFIQ4gCCEQBSAmQYGChAhsIRwgCEEDSyEdAkAgHQRAIAUhCiAIIQwDQAJAIAooAgAhHiAeIBxzIR8gH0H//ft3aiEgIB9BgIGChHhxISEgIUGAgYKEeHMhIiAiICBxISMgI0EARiEkICRFBEAMAQsgCkEEaiElIAxBfGohJyAnQQNLISggKARAICUhCiAnIQwFICUhAyAnIQtBCyE5DAQLDAELCyAKIQ0gDCEPBSAFIQMgCCELQQshOQsLIDlBC0YEQCALQQBGISkgKQRAIAMhDkEAIRAMBAUgAyENIAshDwsLA0ACQCANLAAAISogKkEYdEEYdSAaQRh0QRh1RiErICsEQCANIQ4gDyEQDAULIA1BAWohLCAPQX9qIS0gLUEARiEuIC4EQCAsIQ5BACEQDAEFICwhDSAtIQ8LDAELCwsLCyAQQQBHIS8gLwR/IA4FQQALITAgMA8LzAEBEX8jDSEVIw1BgAJqJA0jDSMOTgRAQYACEAMLIBUhDiAEQYDABHEhDyAPQQBGIRAgAiADSiERIBEgEHEhEyATBEAgAiADayESIBJBgAJJIQcgBwR/IBIFQYACCyEIIA4gASAIEF4aIBJB/wFLIQkgCQRAIAIgA2shCiASIQYDQAJAIAAgDkGAAhA5IAZBgH5qIQsgC0H/AUshDCAMBEAgCyEGBQwBCwwBCwsgCkH/AXEhDSANIQUFIBIhBQsgACAOIAUQOQsgFSQNDwsqAQV/Iw0hBiAAQQBGIQMgAwRAQQAhAgUgACABQQAQRyEEIAQhAgsgAg8L3DAD0gN/D34hfCMNIdcDIw1BsARqJA0jDSMOTgRAQbAEEAMLINcDQQhqIaUDINcDIa8DINcDQYwEaiG6AyC6AyHCAyDXA0GABGohbiCvA0EANgIAIG5BDGoheCABEEQh2AMg2ANCAFMhhQEghQEEQCABmiH4AyD4AyHqA0EBIRxBoychHQUgBEGAEHEhmAEgmAFBAEYhowEgBEEBcSGuASCuAUEARiG5ASC5AQR/QaQnBUGpJwshBiCjAQR/IAYFQaYnCyEHIARBgRBxIcQBIMQBQQBHIc8BIM8BQQFxIUogASHqAyBKIRwgByEdCyDqAxBEIeADIOADQoCAgICAgID4/wCDIeEDIOEDQoCAgICAgID4/wBRIe0BAkAg7QEEQCAFQSBxIfYBIPYBQQBHIYECIIECBH9BticFQbonCyGMAiDqAyDqA2JEAAAAAAAAAABEAAAAAAAAAABiciGXAiCBAgR/Qb4nBUHCJwshogIglwIEfyCiAgUgjAILIRkgHEEDaiGtAiAEQf//e3EhtwIgAEEgIAIgrQIgtwIQQSAAIB0gHBA5IAAgGUEDEDkgBEGAwABzIcICIABBICACIK0CIMICEEEgrQIhbQUg6gMgrwMQRSH8AyD8A0QAAAAAAAAAQKIh/QMg/QNEAAAAAAAAAABiIeACIOACBEAgrwMoAgAh6gIg6gJBf2oh9QIgrwMg9QI2AgALIAVBIHIh/wIg/wJB4QBGIYoDIIoDBEAgBUEgcSGVAyCVA0EARiGYAyAdQQlqIZkDIJgDBH8gHQUgmQMLIR4gHEECciGaAyADQQtLIZsDQQwgA2shnAMgnANBAEYhnQMgmwMgnQNyIZ4DAkAgngMEQCD9AyHuAwVEAAAAAAAAIEAh6wMgnAMhKgNAAkAgKkF/aiGfAyDrA0QAAAAAAAAwQKIh/gMgnwNBAEYhoAMgoAMEQAwBBSD+AyHrAyCfAyEqCwwBCwsgHiwAACGhAyChA0EYdEEYdUEtRiGiAyCiAwRAIP0DmiH/AyD/AyD+A6EhgAQg/gMggASgIYEEIIEEmiGCBCCCBCHuAwwCBSD9AyD+A6AhgwQggwQg/gOhIYQEIIQEIe4DDAILAAsLIK8DKAIAIaMDIKMDQQBIIaQDQQAgowNrIaYDIKQDBH8gpgMFIKMDCyGnAyCnA6wh5gMg5gMgeBA+IagDIKgDIHhGIakDIKkDBEAgbkELaiGqAyCqA0EwOgAAIKoDIRoFIKgDIRoLIKMDQR91IasDIKsDQQJxIawDIKwDQStqIa0DIK0DQf8BcSGuAyAaQX9qIbADILADIK4DOgAAIAVBD2ohsQMgsQNB/wFxIbIDIBpBfmohswMgswMgsgM6AAAgA0EBSCG0AyAEQQhxIbUDILUDQQBGIbYDILoDIR8g7gMh7wMDQAJAIO8DqiG3A0HGJyC3A2ohuAMguAMsAAAhuQMguQNB/wFxIbsDIJUDILsDciG8AyC8A0H/AXEhvQMgH0EBaiG+AyAfIL0DOgAAILcDtyGFBCDvAyCFBKEhhgQghgREAAAAAAAAMECiIYcEIL4DIb8DIL8DIMIDayHAAyDAA0EBRiHBAyDBAwRAIIcERAAAAAAAAAAAYSHDAyC0AyDDA3EhzwMgtgMgzwNxIc4DIM4DBEAgvgMhLgUgH0ECaiHEAyC+A0EuOgAAIMQDIS4LBSC+AyEuCyCHBEQAAAAAAAAAAGIhxQMgxQMEQCAuIR8ghwQh7wMFDAELDAELCyADQQBGIcYDIC4haCDGAwRAQRgh1gMFQX4gwgNrIccDIMcDIGhqIcgDIMgDIANIIckDIMkDBEAgA0ECaiHKAyBoIMIDayFnIGchZSDKAyFqBUEYIdYDCwsg1gNBGEYEQCBoIMIDayHLAyDLAyFlIMsDIWoLIHghzAMgswMhbyDMAyBvayFwIHAgmgNqIXEgcSBqaiFyIABBICACIHIgBBBBIAAgHiCaAxA5IARBgIAEcyFzIABBMCACIHIgcxBBIAAgugMgZRA5IGogZWshdCAAQTAgdEEAQQAQQSAAILMDIHAQOSAEQYDAAHMhdSAAQSAgAiByIHUQQSByIW0MAgsgA0EASCF2IHYEf0EGBSADCyFLIOACBEAg/QNEAAAAAAAAsEGiIfQDIK8DKAIAIXcgd0FkaiF5IK8DIHk2AgAg9AMh8AMgeSFiBSCvAygCACFkIP0DIfADIGQhYgsgYkEASCF6IKUDQaACaiF7IHoEfyClAwUgewshVSBVIRgg8AMh8QMDQAJAIPEDqyF8IBggfDYCACAYQQRqIX0gfLgh9QMg8QMg9QOhIfYDIPYDRAAAAABlzc1BoiH3AyD3A0QAAAAAAAAAAGIhfiB+BEAgfSEYIPcDIfEDBQwBCwwBCwsgYkEASiF/IH8EQCBVISYgfSEpIGIhgQEDQAJAIIEBQR1IIYABIIABBH8ggQEFQR0LIYIBIClBfGohFCAUICZJIYMBIIMBBEAgJiE4BSCCAa0h2QMgFCEVQQAhFwNAAkAgFSgCACGEASCEAa0h2gMg2gMg2QOGIdsDIBetIdwDINsDINwDfCHdAyDdA0KAlOvcA4Ih3gMg3gOnIYYBIBUghgE2AgAg3QNCgJTr3AOAId8DIN8DpyGHASAVQXxqIRMgEyAmSSGIASCIAQRADAEFIBMhFSCHASEXCwwBCwsghwFBAEYhiQEgiQEEQCAmITgFICZBfGohigEgigEghwE2AgAgigEhOAsLICkhOQNAAkAgOSA4SyGLASCLAUUEQAwBCyA5QXxqIYwBIIwBKAIAIY0BII0BQQBGIY4BII4BBEAgjAEhOQUMAQsMAQsLIK8DKAIAIY8BII8BIIIBayGQASCvAyCQATYCACCQAUEASiGRASCRAQRAIDghJiA5ISkgkAEhgQEFIDghJSA5ISggkAEhYwwBCwwBCwsFIFUhJSB9ISggYiFjCyBjQQBIIZIBIJIBBEAgS0EZaiGTASCTAUEJbUF/cSGUASCUAUEBaiGVASD/AkHmAEYhlgEgJSFAICghQiBjIZkBA0ACQEEAIJkBayGXASCXAUEJSCGaASCaAQR/IJcBBUEJCyGbASBAIEJJIZwBIJwBBEBBASCbAXQhoAEgoAFBf2ohoQFBgJTr3AMgmwF2IaIBQQAhEiBAIScDQAJAICcoAgAhpAEgpAEgoQFxIaUBIKQBIJsBdiGmASCmASASaiGnASAnIKcBNgIAIKUBIKIBbCGoASAnQQRqIakBIKkBIEJJIaoBIKoBBEAgqAEhEiCpASEnBQwBCwwBCwsgQCgCACGrASCrAUEARiGsASBAQQRqIa0BIKwBBH8grQEFIEALIQggqAFBAEYhrwEgrwEEQCAIIQogQiFHBSBCQQRqIbABIEIgqAE2AgAgCCEKILABIUcLBSBAKAIAIZ0BIJ0BQQBGIZ4BIEBBBGohnwEgngEEfyCfAQUgQAshCSAJIQogQiFHCyCWAQR/IFUFIAoLIbEBIEchsgEgsQEhswEgsgEgswFrIbQBILQBQQJ1IbUBILUBIJUBSiG2ASCxASCVAUECdGohtwEgtgEEfyC3AQUgRwshDCCvAygCACG4ASC4ASCbAWohugEgrwMgugE2AgAgugFBAEghuwEguwEEQCAKIUAgDCFCILoBIZkBBSAKIT8gDCFBDAELDAELCwUgJSE/ICghQQsgPyBBSSG8ASBVIb0BILwBBEAgPyG+ASC9ASC+AWshvwEgvwFBAnUhwAEgwAFBCWwhwQEgPygCACHCASDCAUEKSSHDASDDAQRAIMEBIS0FIMEBIRtBCiEiA0ACQCAiQQpsIcUBIBtBAWohxgEgwgEgxQFJIccBIMcBBEAgxgEhLQwBBSDGASEbIMUBISILDAELCwsFQQAhLQsg/wJB5gBHIcgBIMgBBH8gLQVBAAshyQEgSyDJAWshygEg/wJB5wBGIcsBIEtBAEchzAEgzAEgywFxIc0BIM0BQR90QR91IV8gygEgX2ohzgEgQSHQASDQASC9AWsh0QEg0QFBAnUh0gEg0gFBCWwh0wEg0wFBd2oh1AEgzgEg1AFIIdUBINUBBEAgVUEEaiHWASDOAUGAyABqIdcBINcBQQltQX9xIdgBINgBQYB4aiHZASDWASDZAUECdGoh2gEg1wFBCW9Bf3Eh2wEg2wFBCEgh3AEg3AEEQCDbASEhQQohMgNAAkAgIUEBaiEgIDJBCmwh3QEgIUEHSCHeASDeAQRAICAhISDdASEyBSDdASExDAELDAELCwVBCiExCyDaASgCACHfASDfASAxcEF/cSHgASDgAUEARiHhASDaAUEEaiHiASDiASBBRiHjASDjASDhAXEh0AMg0AMEQCDaASFGIC0hSCA/IVwFIN8BIDFuQX9xIeQBIOQBQQFxIeUBIOUBQQBGIeYBIOYBBHxEAAAAAAAAQEMFRAEAAAAAAEBDCyHyAyAxQQJtQX9xIecBIOABIOcBSSHoASDgASDnAUYh6QEg4wEg6QFxIdEDINEDBHxEAAAAAAAA8D8FRAAAAAAAAPg/CyHzAyDoAQR8RAAAAAAAAOA/BSDzAwsh6QMgHEEARiHqASDqAQRAIOkDIewDIPIDIe0DBSAdLAAAIesBIOsBQRh0QRh1QS1GIewBIPIDmiH5AyDpA5oh+gMg7AEEfCD5AwUg8gMLIegDIOwBBHwg+gMFIOkDCyHnAyDnAyHsAyDoAyHtAwsg3wEg4AFrIe4BINoBIO4BNgIAIO0DIOwDoCH7AyD7AyDtA2Ih7wEg7wEEQCDuASAxaiHwASDaASDwATYCACDwAUH/k+vcA0sh8QEg8QEEQCA/IU8g2gEhbANAAkAgbEF8aiHyASBsQQA2AgAg8gEgT0kh8wEg8wEEQCBPQXxqIfQBIPQBQQA2AgAg9AEhVgUgTyFWCyDyASgCACH1ASD1AUEBaiH3ASDyASD3ATYCACD3AUH/k+vcA0sh+AEg+AEEQCBWIU8g8gEhbAUgViFOIPIBIWsMAQsMAQsLBSA/IU4g2gEhawsgTiH5ASC9ASD5AWsh+gEg+gFBAnUh+wEg+wFBCWwh/AEgTigCACH9ASD9AUEKSSH+ASD+AQRAIGshRiD8ASFIIE4hXAUg/AEhO0EKIT0DQAJAID1BCmwh/wEgO0EBaiGAAiD9ASD/AUkhggIgggIEQCBrIUYggAIhSCBOIVwMAQUggAIhOyD/ASE9CwwBCwsLBSDaASFGIC0hSCA/IVwLCyBGQQRqIYMCIEEggwJLIYQCIIQCBH8ggwIFIEELIQsgSCFSIAshWyBcIV0FIC0hUiBBIVsgPyFdCyBbIVkDQAJAIFkgXUshhQIghQJFBEBBACFeDAELIFlBfGohhgIghgIoAgAhhwIghwJBAEYhiAIgiAIEQCCGAiFZBUEBIV4MAQsMAQsLQQAgUmshiQICQCDLAQRAIMwBQQFzIc0DIM0DQQFxIYoCIEsgigJqIUwgTCBSSiGLAiBSQXtKIY0CIIsCII0CcSHTAyDTAwRAIAVBf2ohjgIgTEF/aiFgIGAgUmshjwIgjgIhESCPAiE1BSAFQX5qIZACIExBf2ohkQIgkAIhESCRAiE1CyAEQQhxIZICIJICQQBGIZMCIJMCBEAgXgRAIFlBfGohlAIglAIoAgAhlQIglQJBAEYhlgIglgIEQEEJITwFIJUCQQpwQX9xIZgCIJgCQQBGIZkCIJkCBEBBACEwQQohQwNAAkAgQ0EKbCGaAiAwQQFqIZsCIJUCIJoCcEF/cSGcAiCcAkEARiGdAiCdAgRAIJsCITAgmgIhQwUgmwIhPAwBCwwBCwsFQQAhPAsLBUEJITwLIBFBIHIhngIgngJB5gBGIZ8CIFkhoAIgoAIgvQFrIaECIKECQQJ1IaMCIKMCQQlsIaQCIKQCQXdqIaUCIJ8CBEAgpQIgPGshpgIgpgJBAEohpwIgpwIEfyCmAgVBAAshTSA1IE1IIagCIKgCBH8gNQUgTQshNiARISQgNiE+QQAhZgwDBSClAiBSaiGpAiCpAiA8ayGqAiCqAkEASiGrAiCrAgR/IKoCBUEACyFRIDUgUUghrAIgrAIEfyA1BSBRCyE3IBEhJCA3IT5BACFmDAMLAAUgESEkIDUhPiCSAiFmCwUgBEEIcSFpIAUhJCBLIT4gaSFmCwsgPiBmciGuAiCuAkEARyGvAiCvAkEBcSGwAiAkQSByIbECILECQeYARiGyAiCyAgRAIFJBAEohswIgswIEfyBSBUEACyG0AkEAITogtAIhYQUgUkEASCG1AiC1AgR/IIkCBSBSCyG2AiC2Aqwh4gMg4gMgeBA+IbgCIHghuQIguAIhugIguQIgugJrIbsCILsCQQJIIbwCILwCBEAguAIhLANAAkAgLEF/aiG9AiC9AkEwOgAAIL0CIb4CILkCIL4CayG/AiC/AkECSCHAAiDAAgRAIL0CISwFIL0CISsMAQsMAQsLBSC4AiErCyBSQR91IcECIMECQQJxIcMCIMMCQStqIcQCIMQCQf8BcSHFAiArQX9qIcYCIMYCIMUCOgAAICRB/wFxIccCICtBfmohyAIgyAIgxwI6AAAgyAIhyQIguQIgyQJrIcoCIMgCITogygIhYQsgHEEBaiHLAiDLAiA+aiHMAiDMAiCwAmohLyAvIGFqIc0CIABBICACIM0CIAQQQSAAIB0gHBA5IARBgIAEcyHOAiAAQTAgAiDNAiDOAhBBILICBEAgXSBVSyHPAiDPAgR/IFUFIF0LIRYgugNBCWoh0AIg0AIh0QIgugNBCGoh0gIgFiFQA0ACQCBQKAIAIdMCINMCrSHjAyDjAyDQAhA+IdQCIFAgFkYh1QIg1QIEQCDUAiDQAkYh2wIg2wIEQCDSAkEwOgAAINICISMFINQCISMLBSDUAiC6A0sh1gIg1gIEQCDUAiHXAiDXAiDCA2sh2AIgugNBMCDYAhBeGiDUAiEQA0ACQCAQQX9qIdkCINkCILoDSyHaAiDaAgRAINkCIRAFINkCISMMAQsMAQsLBSDUAiEjCwsgIyHcAiDRAiDcAmsh3QIgACAjIN0CEDkgUEEEaiHeAiDeAiBVSyHfAiDfAgRADAEFIN4CIVALDAELCyCuAkEARiHhAiDhAkUEQCAAQdYnQQEQOQsg3gIgWUkh4gIgPkEASiHjAiDiAiDjAnEh5AIg5AIEQCA+IUUg3gIhVwNAAkAgVygCACHlAiDlAq0h5AMg5AMg0AIQPiHmAiDmAiC6A0sh5wIg5wIEQCDmAiHoAiDoAiDCA2sh6QIgugNBMCDpAhBeGiDmAiEPA0ACQCAPQX9qIesCIOsCILoDSyHsAiDsAgRAIOsCIQ8FIOsCIQ4MAQsMAQsLBSDmAiEOCyBFQQlIIe0CIO0CBH8gRQVBCQsh7gIgACAOIO4CEDkgV0EEaiHvAiBFQXdqIfACIO8CIFlJIfECIEVBCUoh8gIg8QIg8gJxIfMCIPMCBEAg8AIhRSDvAiFXBSDwAiFEDAELDAELCwUgPiFECyBEQQlqIfQCIABBMCD0AkEJQQAQQQUgXUEEaiH2AiBeBH8gWQUg9gILIVogPkF/SiH3AiD3AgRAILoDQQlqIfgCIGZBAEYh+QIg+AIh+gJBACDCA2sh+wIgugNBCGoh/AIgPiFUIF0hWANAAkAgWCgCACH9AiD9Aq0h5QMg5QMg+AIQPiH+AiD+AiD4AkYhgAMggAMEQCD8AkEwOgAAIPwCIQ0FIP4CIQ0LIFggXUYhgQMCQCCBAwRAIA1BAWohhQMgACANQQEQOSBUQQFIIYYDIPkCIIYDcSHSAyDSAwRAIIUDITQMAgsgAEHWJ0EBEDkghQMhNAUgDSC6A0shggMgggNFBEAgDSE0DAILIA0g+wJqIdQDINQDIdUDILoDQTAg1QMQXhogDSEzA0ACQCAzQX9qIYMDIIMDILoDSyGEAyCEAwRAIIMDITMFIIMDITQMAQsMAQsLCwsgNCGHAyD6AiCHA2shiAMgVCCIA0ohiQMgiQMEfyCIAwUgVAshiwMgACA0IIsDEDkgVCCIA2shjAMgWEEEaiGNAyCNAyBaSSGOAyCMA0F/SiGPAyCOAyCPA3EhkAMgkAMEQCCMAyFUII0DIVgFIIwDIUkMAQsMAQsLBSA+IUkLIElBEmohkQMgAEEwIJEDQRJBABBBIHghkgMgOiGTAyCSAyCTA2shlAMgACA6IJQDEDkLIARBgMAAcyGWAyAAQSAgAiDNAiCWAxBBIM0CIW0LCyBtIAJIIZcDIJcDBH8gAgUgbQshUyDXAyQNIFMPCxICAn8BfiMNIQIgAL0hAyADDwsVAgJ/AXwjDSEDIAAgARBGIQQgBA8L9BEDC38EfgV8Iw0hDCAAvSEPIA9CNIghECAQp0H//wNxIQkgCUH/D3EhCgJAAkACQAJAIApBEHRBEHVBAGsOgBAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAQILAkAgAEQAAAAAAAAAAGIhBCAEBEAgAEQAAAAAAADwQ6IhFCAUIAEQRiEVIAEoAgAhBSAFQUBqIQYgFSESIAYhCAUgACESQQAhCAsgASAINgIAIBIhEQwDAAsACwJAIAAhEQwCAAsACwJAIBCnIQcgB0H/D3EhAiACQYJ4aiEDIAEgAzYCACAPQv////////+HgH+DIQ0gDUKAgICAgICA8D+EIQ4gDr8hEyATIRELCyARDwvkBAE7fyMNIT0gAEEARiEYAkAgGARAQQEhAwUgAUGAAUkhIyAjBEAgAUH/AXEhLiAAIC46AABBASEDDAILEEghNyA3QbwBaiE4IDgoAgAhOSA5KAIAITogOkEARiEEIAQEQCABQYB/cSEFIAVBgL8DRiEGIAYEQCABQf8BcSEIIAAgCDoAAEEBIQMMAwUQMSEHIAdB1AA2AgBBfyEDDAMLAAsgAUGAEEkhCSAJBEAgAUEGdiEKIApBwAFyIQsgC0H/AXEhDCAAQQFqIQ0gACAMOgAAIAFBP3EhDiAOQYABciEPIA9B/wFxIRAgDSAQOgAAQQIhAwwCCyABQYCwA0khESABQYBAcSESIBJBgMADRiETIBEgE3IhOyA7BEAgAUEMdiEUIBRB4AFyIRUgFUH/AXEhFiAAQQFqIRcgACAWOgAAIAFBBnYhGSAZQT9xIRogGkGAAXIhGyAbQf8BcSEcIABBAmohHSAXIBw6AAAgAUE/cSEeIB5BgAFyIR8gH0H/AXEhICAdICA6AABBAyED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ADYCACAPQQA2AgAgAkEANgIAIAVBADYCACADQQA2AgBBACEBCyABDws3AQR/Iw0hBiMNQRBqJA0jDSMOTgRAQRAQAwsgBiEDIAMgAjYCACAAIAEgAxA1IQQgBiQNIAQPCwMAAQssACAAQf8BcUEYdCAAQQh1Qf8BcUEQdHIgAEEQdUH/AXFBCHRyIABBGHZyDwvkBAEEfyACQYDAAE4EQCAAIAEgAhAODwsgACEDIAAgAmohBiAAQQNxIAFBA3FGBEADQAJAIABBA3FFBEAMAQsCQCACQQBGBEAgAw8LIAAgASwAADoAACAAQQFqIQAgAUEBaiEBIAJBAWshAgsMAQsLIAZBfHEhBCAEQcAAayEFA0ACQCAAIAVMRQRADAELAkAgACABKAIANgIAIABBBGogAUEEaigCADYCACAAQQhqIAFBCGooAgA2AgAgAEEMaiABQQxqKAIANgIAIABBEGogAUEQaigCADYCACAAQRRqIAFBFGooAgA2AgAgAEEYaiABQRhqKAIANgIAIABBHGogAUEcaigCADYCACAAQSBqIAFBIGooAgA2AgAgAEEkaiABQSRqKAIANgIAIABBKGogAUEoaigCADYCACAAQSxqIAFBLGooAgA2AgAgAEEwaiABQTBqKAIANgIAIABBNGogAUE0aigCADYCACAAQThqIAFBOGooAgA2AgAgAEE8aiABQTxqKAIANgIAIABBwABqIQAgAUHAAGohAQsMAQsLA0ACQCAAIARIRQRADAELAkAgACABKAIANgIAIABBBGohACABQQRqIQELDAELCwUgBkEEayEEA0ACQCAAIARIRQRADAELAkAgACABLAAAOgAAIABBAWogAUEBaiwAADoAACAAQQJqIAFBAmosAAA6AAAgAEEDaiABQQNqLAAAOgAAIABBBGohACABQQRqIQELDAELCwsDQAJAIAAgBkhFBEAMAQsCQCAAIAEsAAA6AAAgAEEBaiEAIAFBAWohAQsMAQsLIAMPC/ECAQR/IAAgAmohAyABQf8BcSEBIAJBwwBOBEADQAJAIABBA3FBAEdFBEAMAQsCQCAAIAE6AAAgAEEBaiEACwwBCwsgA0F8cSEEIARBwABrIQUgASABQQh0ciABQRB0ciABQRh0ciEGA0ACQCAAIAVMRQRADAELAkAgACAGNgIAIABBBGogBjYCACAAQQhqIAY2AgAgAEEMaiAGNgIAIABBEGogBjYCACAAQRRqIAY2AgAgAEEYaiAGNgIAIABBHGogBjYCACAAQSBqIAY2AgAgAEEkaiAGNgIAIABBKGogBjYCACAAQSxqIAY2AgAgAEEwaiAGNgIAIABBNGogBjYCACAAQThqIAY2AgAgAEE8aiAGNgIAIABBwABqIQALDAELCwNAAkAgACAESEUEQAwBCwJAIAAgBjYCACAAQQRqIQALDAELCwsDQAJAIAAgA0hFBEAMAQsCQCAAIAE6AAAgAEEBaiEACwwBCwsgAyACaw8LBQBBAA8LBQBBAA8LZgEEfyAAQQ9qQXBxIQAjCigCACEBIAEgAGohAyAAQQBKIAMgAUhxIANBAEhyBEAQAhpBDBAHQX8PCyMKIAM2AgAQASEEIAMgBEoEQBAAQQBGBEAjCiABNgIAQQwQB0F/DwsLIAEPCxAAIAEgAEEHcUEAahEBAA8LFAAgASACIAMgAEEHcUEIahEAAA8LCQBBABAEQQAPCwkAQQEQBUEADwsLwi4BAEGACAu6LgAAAABsAQAA2AIAAGsBAADXAgAAagEAANYCAABpAQAA1QIAAGgBAADUAgAAZwEAANMCAABmAQAA0gIAAGUBAADRAgAAZAEAANACAABjAQAAzwIAAGIBAADOAgAAYQEAAM0CAABgAQAAzAIAAF8BAADLAgAAXgEAAMoCAABdAQAAyQIAAFwBAADIAgAAWwEAAMcCAABaAQAAxgIAAFkBAADFAgAAWAEAAMQCAABXAQAAwwIAAFYBAADCAgAAVQEAAMECAABUAQAAwAIAAFMBAAC/AgAAUgEAAL4CAABRAQAAvQIAAFABAAC8AgAATwEAALsCAABOAQAAugIAAE0BAAC5AgAATAEAALgCAABLAQAAtwIAAEoBAAC2AgAASQEAALUCAABIAQAAtAIAAEcBAACzAgAARgEAALICAABFAQAAsQIAAEQBAACwAgAAQwEAAK8CAABCAQAArgIAAEEBAACtAgAAQAEAAKwCAAA/AQAAqwIAAD4BAACqAgAAPQEAAKkCAAA8AQAAqAIAADsBAACnAgAAOgEAAKYCAAA5AQAApQIAADgBAACkAgAANwEAAKMCAAA2AQAAogIAADUBAAChAgAANAEAAKACAAAzAQAAnwIAADIBAACeAgAAMQEAAJ0CAAAwAQAAnAIAAC8BAACbAgAALgEAAJoCAAAtAQAAmQIAACwBAACYAgAAKwEAAJcCAAAqAQAAlgIAACkBAACVAgAAKAEAAJQCAAAnAQAAkwIAACYBAACSAgAAJQEAAJECAAAkAQAAkAIAACMBAACPAgAAIgEAAI4CAAAhAQAAjQIAACABAACMAgAAHwEAAIsCAAAeAQAAigIAAB0BAACJAgAAHAEAAIgCAAAbAQAAhwIAABoBAACGAgAAGQEAAIUCAAAYAQAAhAIAABcBAACDAgAAFgEAAIICAAAVAQAAgQIAABQBAACAAgAAEwEAAH8CAAASAQAAfgIAABEBAAB9AgAAEAEAAHwCAAAPAQAAewIAAA4BAAB6AgAADQEAAHkCAAAMAQAAeAIAAAsBAAB3AgAACgEAAHYCAAAJAQAAdQIAAAgBAAB0AgAABwEAAHMCAAAGAQAAcgIAAAUBAABxAgAABAEAAHACAAADAQAAbwIAAAIBAABuAgAAAQEAAG0CAAAAAQAAbAIAAP8AAABrAgAA/gAAAGoCAAD9AAAAaQIAAPwAAABoAgAA+wAAAGcCAAD6AAAAZgIAAPkAAABlAgAA+AAAAGQCAAD3AAAAYwIAAPYAAABiAgAA9QAAAGECAAD0AAAAYAIAAPMAAABfAgAA8gAAAF4CAADxAAAAXQIAAPAAAABcAgAA7wAAAFsCAADuAAAAWgIAAO0AAABZAgAA7AAAAFgCAADrAAAAVwIAAOoAAABWAgAA6QAAAFUCAADoAAAAVAIAAOcAAABTAgAA5gAAAFICAADlAAAAUQIAAOQAAABQAgAA4wAAAE8CAADiAAAATgIAAOEAAABNAgAA4AAAAEwCAADfAAAASwIAAN4AAABKAgAA3QAAAEkCAADcAAAASAIAANsAAABHAgAA2gAAAEYCAADZAAAARQIAANgAAABEAgAA1wAAAEMCAADWAAAAQgIAANUAAABBAgAA1AAAAEACAADTAAAAPwIAANIAAAA+AgAA0QAAAD0CAADQAAAAPAIAAM8AAAA7AgAAzgAAADoCAADNAAAAOQIAAMwAAAA4AgAAywAAADcCAADKAAAANgIAAMkAAAA1AgAAyAAAADQCAADHAAAAMwIAAMYAAAAyAgAAxQAAADECAADEAAAAMAIAAMMAAAAvAgAAwgAAAC4CAADBAAAALQIAAMAAAAAsAgAAvwAAACsCAAC+AAAAKgIAAL0AAAApAgAAvAAAACgCAAC7AAAAJwIAALoAAAAmAgAAuQAAACUCAAC4AAAAJAIAALcAAAAjAgAAtgAAACICAAC1AAAAIQIAALQAAAAgAgAAswAAAB8CAACyAAAAHgIAALEAAAAdAgAAsAAAABwCAACvAAAAGwIAAK4AAAAaAgAArQAAABkCAACsAAAAGAIAAKsAAAAXAgAAqgAAABYCAACpAAAAFQIAAKgAAAAUAgAApwAAABMCAACmAAAAEgIAAKUAAAARAgAApAAAABACAACjAAAADwIAAKIAAAAOAgAAoQAAAA0CAACgAAAADAIAAJ8AAAALAgAAngAAAAoCAACdAAAACQIAAJwAAAAIAgAAmwAAAAcCAACaAAAABgIAAJkAAAAFAgAAmAAAAAQCAACXAAAAAwIAAJYAAAACAgAAlQAAAAECAACUAAAAAAIAAJMAAAD/AQAAkgAAAP4BAACRAAAA/QEAAJAAAAD8AQAAjwAAAPsBAACOAAAA+gEAAI0AAAD5AQAAjAAAAPgBAACLAAAA9wEAAIoAAAD2AQAAiQAAAPUBAACIAAAA9AEAAIcAAADzAQAAhgAAAPIBAACFAAAA8QEAAIQAAADwAQAAgwAAAO8BAACCAAAA7gEAAIEAAADtAQAAgAAAAOwBAAB/AAAA6wEAAH4AAADqAQAAfQAAAOkBAAB8AAAA6AEAAHsAAADnAQAAegAAAOYBAAB5AAAA5QEAAHgAAADkAQAAdwAAAOMBAAB2AAAA4gEAAHUAAADhAQAAdAAAAOABAABzAAAA3wEAAHIAAADeAQAAcQAAAN0BAABwAAAA3AEAAG8AAADbAQAAbgAAANoBAABtAAAA2QEAAGwAAADYAQAAawAAANcBAABqAAAA1gEAAGkAAADVAQAAaAAAANQBAABnAAAA0wEAAGYAAADSAQAAZQAAANEBAABkAAAA0AEAAGMAAADPAQAAYgAAAM4BAABhAAAAzQEAAGAAAADMAQAAXwAAAMsBAABeAAAAygEAAF0AAADJAQAAXAAAAMgBAABbAAAAxwEAAFoAAADGAQAAWQAAAMUBAABYAAAAxAEAAFcAAADDAQAAVgAAAMIBAABVAAAAwQEAAFQAAADAAQAAUwAAAL8BAABSAAAAvgEAAFEAAAC9AQAAUAAAALwBAABPAAAAuwEAAE4AAAC6AQAATQAAALkBAABMAAAAuAEAAEsAAAC3AQAASgAAALYBAABJAAAAtQEAAEgAAAC0AQAARwAAALMBAABGAAAAsgEAAEUAAACxAQAARAAAALABAABDAAAArwEAAEIAAACuAQAAQQAAAK0BAABAAAAArAEAAD8AAACrAQAAPgAAAKoBAAA9AAAAqQEAADwAAACoAQAAOwAAAKcBAAA6AAAApgEAADkAAAClAQAAOAAAAKQBAAA3AAAAowEAADYAAACiAQAANQAAAKEBAAA0AAAAoAEAADMAAACfAQAAMgAAAJ4BAAAxAAAAnQEAADAAAACcAQAALwAAAJsBAAAuAAAAmgEAAC0AAACZAQAALAAAAJgBAAArAAAAlwEAACoAAACWAQAAKQAAAJUBAAAoAAAAlAEAACcAAACTAQAAJgAAAJIBAAAlAAAAkQEAACQAAACQAQAAIwAAAI8BAAAiAAAAjgEAACEAAACNAQAAIAAAAIwBAAAfAAAAiwEAAB4AAACKAQAAHQAAAIkBAAAcAAAAiAEAABsAAACHAQAAGgAAAIYBAAAZAAAAhQEAABgAAACEAQAAFwAAAIMBAAAWAAAAggEAABUAAACBAQAAFAAAAIABAAATAAAAfwEAABIAAAB+AQAAEQAAAH0BAAAQAAAAfAEAAA8AAAB7AQAADgAAAHoBAAANAAAAeQEAAAwAAAB4AQAACwAAAHcBAAAKAAAAdgEAAAkAAAB1AQAACAAAAHQBAAAHAAAAcwEAAAYAAAByAQAABQAAAHEBAAAEAAAAcAEAAAMAAABvAQAAAgAAAG4BAAABAAAAbQEAAAAAAAABAAAAAAAAAP////8CAAAAAQAAAP////8AAAAAAgAAAP////8BAAAAAAAAAJgPAAAFAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAJQiAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAMAAACcIgAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACv////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW52YWxpZCBtaW5XZWlnaHRNYWduaXR1ZGUgJWQAOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBuYW4ATkFOADAxMjM0NTY3ODlBQkNERUYuAFQhIhkNAQIDEUscDBAECx0SHidobm9wcWIgBQYPExQVGggWBygkFxgJCg4bHyUjg4J9JiorPD0+P0NHSk1YWVpbXF1eX2BhY2RlZmdpamtscnN0eXp7fABJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBlcnJvciBpbmZvcm1hdGlvbg==';
    var asmjsCodeFile = '';

    if (typeof _Module['locateFile'] === 'function') {
      if (!isDataURI(wasmTextFile)) {
        wasmTextFile = _Module['locateFile'](wasmTextFile);
      }

      if (!isDataURI(wasmBinaryFile)) {
        wasmBinaryFile = _Module['locateFile'](wasmBinaryFile);
      }

      if (!isDataURI(asmjsCodeFile)) {
        asmjsCodeFile = _Module['locateFile'](asmjsCodeFile);
      }
    } // utilities


    var wasmPageSize = 64 * 1024;
    var info = {
      'global': null,
      'env': null,
      'asm2wasm': {
        // special asm2wasm imports
        "f64-rem": function f64Rem(x, y) {
          return x % y;
        },
        "debugger": function _debugger() {
          debugger;
        }
      },
      'parent': _Module // Module inside wasm-js.cpp refers to wasm-js.cpp; this allows access to the outside program.

    };
    var exports = null;

    function mergeMemory(newBuffer) {
      // The wasm instance creates its memory. But static init code might have written to
      // buffer already, including the mem init file, and we must copy it over in a proper merge.
      // TODO: avoid this copy, by avoiding such static init writes
      // TODO: in shorter term, just copy up to the last static init write
      var oldBuffer = _Module['buffer'];

      if (newBuffer.byteLength < oldBuffer.byteLength) {
        _Module['printErr']('the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here');
      }

      var oldView = new Int8Array(oldBuffer);
      var newView = new Int8Array(newBuffer);
      newView.set(oldView);
      updateGlobalBuffer(newBuffer);
      updateGlobalBufferViews();
    }

    function fixImports(imports) {
      return imports;
    }

    function getBinary() {
      try {
        if (_Module['wasmBinary']) {
          return new Uint8Array(_Module['wasmBinary']);
        }

        var binary = tryParseAsDataURI(wasmBinaryFile);

        if (binary) {
          return binary;
        }

        if (_Module['readBinary']) {
          return _Module['readBinary'](wasmBinaryFile);
        } else {
          throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
        }
      } catch (err) {
        abort(err);
      }
    }

    function getBinaryPromise() {
      // if we don't have the binary yet, and have the Fetch api, use that
      // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
      if (!_Module['wasmBinary'] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function') {
        return fetch(wasmBinaryFile, {
          credentials: 'same-origin'
        }).then(function (response) {
          if (!response['ok']) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }

          return response['arrayBuffer']();
        }).catch(function () {
          return getBinary();
        });
      } // Otherwise, getBinary should be able to get it synchronously


      return new Promise(function (resolve, reject) {
        resolve(getBinary());
      });
    } // do-method functions


    function doNativeWasm(global, env, providedBuffer) {
      if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) !== 'object') {
        _Module['printErr']('no native wasm support detected');

        return false;
      } // prepare memory import


      if (!(_Module['wasmMemory'] instanceof WebAssembly.Memory)) {
        _Module['printErr']('no native wasm Memory in use');

        return false;
      }

      env['memory'] = _Module['wasmMemory']; // Load the wasm module and create an instance of using native support in the JS engine.

      info['global'] = {
        'NaN': NaN,
        'Infinity': Infinity
      };
      info['global.Math'] = Math;
      info['env'] = env; // handle a generated wasm instance, receiving its exports and
      // performing other necessary setup

      function receiveInstance(instance, module) {
        exports = instance.exports;
        if (exports.memory) mergeMemory(exports.memory);
        _Module['asm'] = exports;
        _Module["usingWasm"] = true;
        removeRunDependency('wasm-instantiate');
      }

      addRunDependency('wasm-instantiate'); // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
      // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
      // to any other async startup actions they are performing.

      if (_Module['instantiateWasm']) {
        try {
          return _Module['instantiateWasm'](info, receiveInstance);
        } catch (e) {
          _Module['printErr']('Module.instantiateWasm callback failed with error: ' + e);

          return false;
        }
      } // Async compilation can be confusing when an error on the page overwrites Module
      // (for example, if the order of elements is wrong, and the one defining Module is
      // later), so we save Module and check it later.


      var trueModule = _Module;

      function receiveInstantiatedSource(output) {
        // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
        // receiveInstance() will swap in the exports (to Module.asm) so they can be called
        assert(_Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
        trueModule = null;
        receiveInstance(output['instance'], output['module']);
      }

      function instantiateArrayBuffer(receiver) {
        getBinaryPromise().then(function (binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver).catch(function (reason) {
          _Module['printErr']('failed to asynchronously prepare wasm: ' + reason);

          abort(reason);
        });
      } // Prefer streaming instantiation if available.


      if (!_Module['wasmBinary'] && typeof WebAssembly.instantiateStreaming === 'function' && !isDataURI(wasmBinaryFile) && typeof fetch === 'function') {
        WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, {
          credentials: 'same-origin'
        }), info).then(receiveInstantiatedSource).catch(function (reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          _Module['printErr']('wasm streaming compile failed: ' + reason);

          _Module['printErr']('falling back to ArrayBuffer instantiation');

          instantiateArrayBuffer(receiveInstantiatedSource);
        });
      } else {
        instantiateArrayBuffer(receiveInstantiatedSource);
      }

      return {}; // no exports yet; we'll fill them in later
    } // We may have a preloaded value in Module.asm, save it


    _Module['asmPreload'] = _Module['asm']; // Memory growth integration code

    var asmjsReallocBuffer = _Module['reallocBuffer'];

    var wasmReallocBuffer = function wasmReallocBuffer(size) {
      var PAGE_MULTIPLE = _Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.

      size = alignUp(size, PAGE_MULTIPLE); // round up to wasm page size

      var old = _Module['buffer'];
      var oldSize = old.byteLength;

      if (_Module["usingWasm"]) {
        // native wasm support
        try {
          var result = _Module['wasmMemory'].grow((size - oldSize) / wasmPageSize); // .grow() takes a delta compared to the previous size


          if (result !== (-1 | 0)) {
            // success in native wasm memory growth, get the buffer from the memory
            return _Module['buffer'] = _Module['wasmMemory'].buffer;
          } else {
            return null;
          }
        } catch (e) {
          console.error('Module.reallocBuffer: Attempted to grow from ' + oldSize + ' bytes to ' + size + ' bytes, but got error: ' + e);
          return null;
        }
      }
    };

    _Module['reallocBuffer'] = function (size) {
      if (finalMethod === 'asmjs') {
        return asmjsReallocBuffer(size);
      } else {
        return wasmReallocBuffer(size);
      }
    }; // we may try more than one; this is the final one, that worked and we are using


    var finalMethod = ''; // Provide an "asm.js function" for the application, called to "link" the asm.js module. We instantiate
    // the wasm module at that time, and it receives imports and provides exports and so forth, the app
    // doesn't need to care that it is wasm or olyfilled wasm or asm.js.

    _Module['asm'] = function (global, env, providedBuffer) {
      env = fixImports(env); // import table

      if (!env['table']) {
        var TABLE_SIZE = _Module['wasmTableSize'];
        if (TABLE_SIZE === undefined) TABLE_SIZE = 1024; // works in binaryen interpreter at least

        var MAX_TABLE_SIZE = _Module['wasmMaxTableSize'];

        if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) === 'object' && typeof WebAssembly.Table === 'function') {
          if (MAX_TABLE_SIZE !== undefined) {
            env['table'] = new WebAssembly.Table({
              'initial': TABLE_SIZE,
              'maximum': MAX_TABLE_SIZE,
              'element': 'anyfunc'
            });
          } else {
            env['table'] = new WebAssembly.Table({
              'initial': TABLE_SIZE,
              element: 'anyfunc'
            });
          }
        } else {
          env['table'] = new Array(TABLE_SIZE); // works in binaryen interpreter at least
        }

        _Module['wasmTable'] = env['table'];
      }

      if (!env['memoryBase']) {
        env['memoryBase'] = _Module['STATIC_BASE']; // tell the memory segments where to place themselves
      }

      if (!env['tableBase']) {
        env['tableBase'] = 0; // table starts at 0 by default, in dynamic linking this will change
      } // try the methods. each should return the exports if it succeeded


      var exports;
      exports = doNativeWasm(global, env, providedBuffer);
      if (!exports) abort('no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods');
      return exports;
    };

    var methodHandler = _Module['asm']; // note our method handler, as we may modify Module['asm'] later
  }

  integrateWasmJS(); // === Body ===

  var ASM_CONSTS = [];
  STATIC_BASE = GLOBAL_BASE;
  STATICTOP = STATIC_BASE + 9888;
  /* global initializers */

  __ATINIT__.push();

  var STATIC_BUMP = 9888;
  _Module["STATIC_BASE"] = STATIC_BASE;
  _Module["STATIC_BUMP"] = STATIC_BUMP;
  /* no memory initializer */

  var tempDoublePtr = STATICTOP;
  STATICTOP += 16;
  assert(tempDoublePtr % 8 == 0);

  function copyTempFloat(ptr) {
    // functions, because inlining this code increases code size too much
    HEAP8[tempDoublePtr] = HEAP8[ptr];
    HEAP8[tempDoublePtr + 1] = HEAP8[ptr + 1];
    HEAP8[tempDoublePtr + 2] = HEAP8[ptr + 2];
    HEAP8[tempDoublePtr + 3] = HEAP8[ptr + 3];
  }

  function copyTempDouble(ptr) {
    HEAP8[tempDoublePtr] = HEAP8[ptr];
    HEAP8[tempDoublePtr + 1] = HEAP8[ptr + 1];
    HEAP8[tempDoublePtr + 2] = HEAP8[ptr + 2];
    HEAP8[tempDoublePtr + 3] = HEAP8[ptr + 3];
    HEAP8[tempDoublePtr + 4] = HEAP8[ptr + 4];
    HEAP8[tempDoublePtr + 5] = HEAP8[ptr + 5];
    HEAP8[tempDoublePtr + 6] = HEAP8[ptr + 6];
    HEAP8[tempDoublePtr + 7] = HEAP8[ptr + 7];
  } // {{PRE_LIBRARY}}


  function ___lock() {}

  var SYSCALLS = {
    varargs: 0,
    get: function get(varargs) {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    },
    getStr: function getStr() {
      var ret = Pointer_stringify(SYSCALLS.get());
      return ret;
    },
    get64: function get64() {
      var low = SYSCALLS.get(),
          high = SYSCALLS.get();
      if (low >= 0) assert(high === 0);else assert(high === -1);
      return low;
    },
    getZero: function getZero() {
      assert(SYSCALLS.get() === 0);
    }
  };

  function ___syscall140(which, varargs) {
    SYSCALLS.varargs = varargs;

    try {
      // llseek
      var stream = SYSCALLS.getStreamFromFD(),
          offset_high = SYSCALLS.get(),
          offset_low = SYSCALLS.get(),
          result = SYSCALLS.get(),
          whence = SYSCALLS.get(); // NOTE: offset_high is unused - Emscripten's off_t is 32-bit

      var offset = offset_low;
      FS.llseek(stream, offset, whence);
      HEAP32[result >> 2] = stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state

      return 0;
    } catch (e) {
      if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
      return -e.errno;
    }
  }

  function flush_NO_FILESYSTEM() {
    // flush anything remaining in the buffers during shutdown
    var fflush = _Module["_fflush"];
    if (fflush) fflush(0);
    var printChar = ___syscall146.printChar;
    if (!printChar) return;
    var buffers = ___syscall146.buffers;
    if (buffers[1].length) printChar(1, 10);
    if (buffers[2].length) printChar(2, 10);
  }

  function ___syscall146(which, varargs) {
    SYSCALLS.varargs = varargs;

    try {
      // writev
      // hack to support printf in NO_FILESYSTEM
      var stream = SYSCALLS.get(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();
      var ret = 0;

      if (!___syscall146.buffers) {
        ___syscall146.buffers = [null, [], []]; // 1 => stdout, 2 => stderr

        ___syscall146.printChar = function (stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);

          if (curr === 0 || curr === 10) {
            (stream === 1 ? _Module['print'] : _Module['printErr'])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }

      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];

        for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr + j]);
        }

        ret += len;
      }

      return ret;
    } catch (e) {
      if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
      return -e.errno;
    }
  }

  function ___syscall54(which, varargs) {
    SYSCALLS.varargs = varargs;

    try {
      // ioctl
      return 0;
    } catch (e) {
      if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
      return -e.errno;
    }
  }

  function ___syscall6(which, varargs) {
    SYSCALLS.varargs = varargs;

    try {
      // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
      if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
      return -e.errno;
    }
  }

  function ___unlock() {}

  function _emscripten_has_threading_support() {
    return 0;
  }

  var cttz_i8 = allocate([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", ALLOC_STATIC);

  function _llvm_cttz_i32(x) {
    x = x | 0;
    var ret = 0;
    ret = HEAP8[cttz_i8 + (x & 0xff) >> 0] | 0;
    if ((ret | 0) < 8) return ret | 0;
    ret = HEAP8[cttz_i8 + (x >> 8 & 0xff) >> 0] | 0;
    if ((ret | 0) < 8) return ret + 8 | 0;
    ret = HEAP8[cttz_i8 + (x >> 16 & 0xff) >> 0] | 0;
    if ((ret | 0) < 8) return ret + 16 | 0;
    return (HEAP8[cttz_i8 + (x >>> 24) >> 0] | 0) + 24 | 0;
  }

  function _llvm_cttz_i64(l, h) {
    var ret = _llvm_cttz_i32(l);

    if (ret == 32) ret += _llvm_cttz_i32(h);
    return (setTempRet0(0), ret) | 0;
  }

  function _llvm_stackrestore(p) {
    var self = _llvm_stacksave;
    var ret = self.LLVM_SAVEDSTACKS[p];
    self.LLVM_SAVEDSTACKS.splice(p, 1);

    _stackRestore(ret);
  }

  function _llvm_stacksave() {
    var self = _llvm_stacksave;

    if (!self.LLVM_SAVEDSTACKS) {
      self.LLVM_SAVEDSTACKS = [];
    }

    self.LLVM_SAVEDSTACKS.push(_stackSave());
    return self.LLVM_SAVEDSTACKS.length - 1;
  }

  function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    return dest;
  }

  function _pthread_create() {
    return 11;
  }

  function _pthread_join() {}

  function _pthread_mutex_init() {}

  function ___setErrNo(value) {
    if (_Module['___errno_location']) HEAP32[_Module['___errno_location']() >> 2] = value;else _Module.printErr('failed to set errno from JS');
    return value;
  }

  var ERRNO_CODES = {
    EPERM: 1,
    ENOENT: 2,
    ESRCH: 3,
    EINTR: 4,
    EIO: 5,
    ENXIO: 6,
    E2BIG: 7,
    ENOEXEC: 8,
    EBADF: 9,
    ECHILD: 10,
    EAGAIN: 11,
    EWOULDBLOCK: 11,
    ENOMEM: 12,
    EACCES: 13,
    EFAULT: 14,
    ENOTBLK: 15,
    EBUSY: 16,
    EEXIST: 17,
    EXDEV: 18,
    ENODEV: 19,
    ENOTDIR: 20,
    EISDIR: 21,
    EINVAL: 22,
    ENFILE: 23,
    EMFILE: 24,
    ENOTTY: 25,
    ETXTBSY: 26,
    EFBIG: 27,
    ENOSPC: 28,
    ESPIPE: 29,
    EROFS: 30,
    EMLINK: 31,
    EPIPE: 32,
    EDOM: 33,
    ERANGE: 34,
    ENOMSG: 42,
    EIDRM: 43,
    ECHRNG: 44,
    EL2NSYNC: 45,
    EL3HLT: 46,
    EL3RST: 47,
    ELNRNG: 48,
    EUNATCH: 49,
    ENOCSI: 50,
    EL2HLT: 51,
    EDEADLK: 35,
    ENOLCK: 37,
    EBADE: 52,
    EBADR: 53,
    EXFULL: 54,
    ENOANO: 55,
    EBADRQC: 56,
    EBADSLT: 57,
    EDEADLOCK: 35,
    EBFONT: 59,
    ENOSTR: 60,
    ENODATA: 61,
    ETIME: 62,
    ENOSR: 63,
    ENONET: 64,
    ENOPKG: 65,
    EREMOTE: 66,
    ENOLINK: 67,
    EADV: 68,
    ESRMNT: 69,
    ECOMM: 70,
    EPROTO: 71,
    EMULTIHOP: 72,
    EDOTDOT: 73,
    EBADMSG: 74,
    ENOTUNIQ: 76,
    EBADFD: 77,
    EREMCHG: 78,
    ELIBACC: 79,
    ELIBBAD: 80,
    ELIBSCN: 81,
    ELIBMAX: 82,
    ELIBEXEC: 83,
    ENOSYS: 38,
    ENOTEMPTY: 39,
    ENAMETOOLONG: 36,
    ELOOP: 40,
    EOPNOTSUPP: 95,
    EPFNOSUPPORT: 96,
    ECONNRESET: 104,
    ENOBUFS: 105,
    EAFNOSUPPORT: 97,
    EPROTOTYPE: 91,
    ENOTSOCK: 88,
    ENOPROTOOPT: 92,
    ESHUTDOWN: 108,
    ECONNREFUSED: 111,
    EADDRINUSE: 98,
    ECONNABORTED: 103,
    ENETUNREACH: 101,
    ENETDOWN: 100,
    ETIMEDOUT: 110,
    EHOSTDOWN: 112,
    EHOSTUNREACH: 113,
    EINPROGRESS: 115,
    EALREADY: 114,
    EDESTADDRREQ: 89,
    EMSGSIZE: 90,
    EPROTONOSUPPORT: 93,
    ESOCKTNOSUPPORT: 94,
    EADDRNOTAVAIL: 99,
    ENETRESET: 102,
    EISCONN: 106,
    ENOTCONN: 107,
    ETOOMANYREFS: 109,
    EUSERS: 87,
    EDQUOT: 122,
    ESTALE: 116,
    ENOTSUP: 95,
    ENOMEDIUM: 123,
    EILSEQ: 84,
    EOVERFLOW: 75,
    ECANCELED: 125,
    ENOTRECOVERABLE: 131,
    EOWNERDEAD: 130,
    ESTRPIPE: 86
  };

  function _sysconf(name) {
    // long sysconf(int name);
    // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
    switch (name) {
      case 30:
        return PAGE_SIZE;

      case 85:
        var maxHeapSize = 2 * 1024 * 1024 * 1024 - 65536;
        maxHeapSize = HEAPU8.length;
        return maxHeapSize / PAGE_SIZE;

      case 132:
      case 133:
      case 12:
      case 137:
      case 138:
      case 15:
      case 235:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 149:
      case 13:
      case 10:
      case 236:
      case 153:
      case 9:
      case 21:
      case 22:
      case 159:
      case 154:
      case 14:
      case 77:
      case 78:
      case 139:
      case 80:
      case 81:
      case 82:
      case 68:
      case 67:
      case 164:
      case 11:
      case 29:
      case 47:
      case 48:
      case 95:
      case 52:
      case 51:
      case 46:
        return 200809;

      case 79:
        return 0;

      case 27:
      case 246:
      case 127:
      case 128:
      case 23:
      case 24:
      case 160:
      case 161:
      case 181:
      case 182:
      case 242:
      case 183:
      case 184:
      case 243:
      case 244:
      case 245:
      case 165:
      case 178:
      case 179:
      case 49:
      case 50:
      case 168:
      case 169:
      case 175:
      case 170:
      case 171:
      case 172:
      case 97:
      case 76:
      case 32:
      case 173:
      case 35:
        return -1;

      case 176:
      case 177:
      case 7:
      case 155:
      case 8:
      case 157:
      case 125:
      case 126:
      case 92:
      case 93:
      case 129:
      case 130:
      case 131:
      case 94:
      case 91:
        return 1;

      case 74:
      case 60:
      case 69:
      case 70:
      case 4:
        return 1024;

      case 31:
      case 42:
      case 72:
        return 32;

      case 87:
      case 26:
      case 33:
        return 2147483647;

      case 34:
      case 1:
        return 47839;

      case 38:
      case 36:
        return 99;

      case 43:
      case 37:
        return 2048;

      case 0:
        return 2097152;

      case 3:
        return 65536;

      case 28:
        return 32768;

      case 44:
        return 32767;

      case 75:
        return 16384;

      case 39:
        return 1000;

      case 89:
        return 700;

      case 71:
        return 256;

      case 40:
        return 255;

      case 2:
        return 100;

      case 180:
        return 64;

      case 25:
        return 20;

      case 5:
        return 16;

      case 6:
        return 6;

      case 73:
        return 4;

      case 84:
        {
          if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object') return navigator['hardwareConcurrency'] || 1;
          return 1;
        }
    }

    ___setErrNo(ERRNO_CODES.EINVAL);

    return -1;
  }

  DYNAMICTOP_PTR = staticAlloc(4);
  STACK_BASE = STACKTOP = alignMemory(STATICTOP);
  STACK_MAX = STACK_BASE + TOTAL_STACK;
  DYNAMIC_BASE = alignMemory(STACK_MAX);
  HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
  staticSealed = true; // seal the static portion of memory

  assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");
  var ASSERTIONS = true;
  /** @type {function(string, boolean=, number=)} */

  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }

  function intArrayToString(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      var chr = array[i];

      if (chr > 0xFF) {
        if (ASSERTIONS) {
          assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
        }

        chr &= 0xFF;
      }

      ret.push(String.fromCharCode(chr));
    }

    return ret.join('');
  } // Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149
  // This code was written by Tyler Akins and has been placed in the
  // public domain.  It would be nice if you left this header intact.
  // Base64 code from Tyler Akins -- http://rumkin.com

  /**
   * Decodes a base64 string.
   * @param {String} input The string to decode.
   */


  var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    } while (i < input.length);

    return output;
  }; // Converts a string of base64 into a byte array.
  // Throws error on invalid input.

  function intArrayFromBase64(s) {
    if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
      var buf;

      try {
        buf = Buffer.from(s, 'base64');
      } catch (_) {
        buf = new Buffer(s, 'base64');
      }

      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }

    try {
      var decoded = decodeBase64(s);
      var bytes = new Uint8Array(decoded.length);

      for (var i = 0; i < decoded.length; ++i) {
        bytes[i] = decoded.charCodeAt(i);
      }

      return bytes;
    } catch (_) {
      throw new Error('Converting base64 string to bytes failed.');
    }
  } // If filename is a base64 data URI, parses and returns data (Buffer on node,
  // Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.


  function tryParseAsDataURI(filename) {
    if (!isDataURI(filename)) {
      return;
    }

    return intArrayFromBase64(filename.slice(dataURIPrefix.length));
  }

  function nullFunc_ii(x) {
    _Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");

    _Module["printErr"]("Build with ASSERTIONS=2 for more info.");

    abort(x);
  }

  function nullFunc_iiii(x) {
    _Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");

    _Module["printErr"]("Build with ASSERTIONS=2 for more info.");

    abort(x);
  }

  _Module['wasmTableSize'] = 16;
  _Module['wasmMaxTableSize'] = 16;

  function invoke_ii(index, a1) {
    try {
      return _Module["dynCall_ii"](index, a1);
    } catch (e) {
      if (typeof e !== 'number' && e !== 'longjmp') throw e;

      _Module["setThrew"](1, 0);
    }
  }

  function invoke_iiii(index, a1, a2, a3) {
    try {
      return _Module["dynCall_iiii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== 'number' && e !== 'longjmp') throw e;

      _Module["setThrew"](1, 0);
    }
  }

  _Module.asmGlobalArg = {};
  _Module.asmLibraryArg = {
    "abort": abort,
    "assert": assert,
    "enlargeMemory": enlargeMemory,
    "getTotalMemory": getTotalMemory,
    "abortOnCannotGrowMemory": abortOnCannotGrowMemory,
    "abortStackOverflow": abortStackOverflow,
    "nullFunc_ii": nullFunc_ii,
    "nullFunc_iiii": nullFunc_iiii,
    "invoke_ii": invoke_ii,
    "invoke_iiii": invoke_iiii,
    "___lock": ___lock,
    "___setErrNo": ___setErrNo,
    "___syscall140": ___syscall140,
    "___syscall146": ___syscall146,
    "___syscall54": ___syscall54,
    "___syscall6": ___syscall6,
    "___unlock": ___unlock,
    "_emscripten_has_threading_support": _emscripten_has_threading_support,
    "_emscripten_memcpy_big": _emscripten_memcpy_big,
    "_llvm_cttz_i32": _llvm_cttz_i32,
    "_llvm_cttz_i64": _llvm_cttz_i64,
    "_llvm_stackrestore": _llvm_stackrestore,
    "_llvm_stacksave": _llvm_stacksave,
    "_pthread_create": _pthread_create,
    "_pthread_join": _pthread_join,
    "_pthread_mutex_init": _pthread_mutex_init,
    "_sysconf": _sysconf,
    "flush_NO_FILESYSTEM": flush_NO_FILESYSTEM,
    "DYNAMICTOP_PTR": DYNAMICTOP_PTR,
    "tempDoublePtr": tempDoublePtr,
    "ABORT": ABORT,
    "STACKTOP": STACKTOP,
    "STACK_MAX": STACK_MAX,
    "cttz_i8": cttz_i8
  }; // EMSCRIPTEN_START_ASM

  var asm = _Module["asm"] // EMSCRIPTEN_END_ASM
  (_Module.asmGlobalArg, _Module.asmLibraryArg, buffer);

  var real____errno_location = asm["___errno_location"];

  asm["___errno_location"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real____errno_location.apply(null, arguments);
  };

  var real__ccurl_pow = asm["_ccurl_pow"];

  asm["_ccurl_pow"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__ccurl_pow.apply(null, arguments);
  };

  var real__fflush = asm["_fflush"];

  asm["_fflush"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__fflush.apply(null, arguments);
  };

  var real__free = asm["_free"];

  asm["_free"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__free.apply(null, arguments);
  };

  var real__llvm_bswap_i32 = asm["_llvm_bswap_i32"];

  asm["_llvm_bswap_i32"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__llvm_bswap_i32.apply(null, arguments);
  };

  var real__malloc = asm["_malloc"];

  asm["_malloc"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__malloc.apply(null, arguments);
  };

  var real__pthread_mutex_lock = asm["_pthread_mutex_lock"];

  asm["_pthread_mutex_lock"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__pthread_mutex_lock.apply(null, arguments);
  };

  var real__pthread_mutex_unlock = asm["_pthread_mutex_unlock"];

  asm["_pthread_mutex_unlock"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__pthread_mutex_unlock.apply(null, arguments);
  };

  var real__sbrk = asm["_sbrk"];

  asm["_sbrk"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__sbrk.apply(null, arguments);
  };

  var real_establishStackSpace = asm["establishStackSpace"];

  asm["establishStackSpace"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_establishStackSpace.apply(null, arguments);
  };

  var real_getTempRet0 = asm["getTempRet0"];

  asm["getTempRet0"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_getTempRet0.apply(null, arguments);
  };

  var real_setTempRet0 = asm["setTempRet0"];

  asm["setTempRet0"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_setTempRet0.apply(null, arguments);
  };

  var real_setThrew = asm["setThrew"];

  asm["setThrew"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_setThrew.apply(null, arguments);
  };

  var real_stackAlloc = asm["stackAlloc"];

  asm["stackAlloc"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_stackAlloc.apply(null, arguments);
  };

  var real_stackRestore = asm["stackRestore"];

  asm["stackRestore"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_stackRestore.apply(null, arguments);
  };

  var real_stackSave = asm["stackSave"];

  asm["stackSave"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real_stackSave.apply(null, arguments);
  };

  _Module["asm"] = asm;

  var ___errno_location = _Module["___errno_location"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["___errno_location"].apply(null, arguments);
  };

  var _ccurl_pow = _Module["_ccurl_pow"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_ccurl_pow"].apply(null, arguments);
  };

  var _fflush = _Module["_fflush"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_fflush"].apply(null, arguments);
  };

  var _free = _Module["_free"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_free"].apply(null, arguments);
  };

  var _llvm_bswap_i32 = _Module["_llvm_bswap_i32"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_llvm_bswap_i32"].apply(null, arguments);
  };

  var _malloc = _Module["_malloc"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_malloc"].apply(null, arguments);
  };

  var _memcpy = _Module["_memcpy"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_memcpy"].apply(null, arguments);
  };

  var _memset = _Module["_memset"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_memset"].apply(null, arguments);
  };

  var _pthread_mutex_lock = _Module["_pthread_mutex_lock"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_pthread_mutex_lock"].apply(null, arguments);
  };

  var _pthread_mutex_unlock = _Module["_pthread_mutex_unlock"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_pthread_mutex_unlock"].apply(null, arguments);
  };

  var _sbrk = _Module["_sbrk"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["_sbrk"].apply(null, arguments);
  };

  var establishStackSpace = _Module["establishStackSpace"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["establishStackSpace"].apply(null, arguments);
  };

  var getTempRet0 = _Module["getTempRet0"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["getTempRet0"].apply(null, arguments);
  };

  var runPostSets = _Module["runPostSets"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["runPostSets"].apply(null, arguments);
  };

  var setTempRet0 = _Module["setTempRet0"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["setTempRet0"].apply(null, arguments);
  };

  var setThrew = _Module["setThrew"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["setThrew"].apply(null, arguments);
  };

  var stackAlloc = _Module["stackAlloc"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["stackAlloc"].apply(null, arguments);
  };

  var _stackRestore = _Module["stackRestore"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["stackRestore"].apply(null, arguments);
  };

  var _stackSave = _Module["stackSave"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["stackSave"].apply(null, arguments);
  };

  var dynCall_ii = _Module["dynCall_ii"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["dynCall_ii"].apply(null, arguments);
  };

  var dynCall_iiii = _Module["dynCall_iiii"] = function () {
    assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
    assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return _Module["asm"]["dynCall_iiii"].apply(null, arguments);
  };

  ; // === Auto-generated postamble setup entry stuff ===

  _Module['asm'] = asm;
  if (!_Module["intArrayFromString"]) _Module["intArrayFromString"] = function () {
    abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["intArrayToString"]) _Module["intArrayToString"] = function () {
    abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  _Module["ccall"] = ccall;
  _Module["cwrap"] = cwrap;
  if (!_Module["setValue"]) _Module["setValue"] = function () {
    abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getValue"]) _Module["getValue"] = function () {
    abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["allocate"]) _Module["allocate"] = function () {
    abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getMemory"]) _Module["getMemory"] = function () {
    abort("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["Pointer_stringify"]) _Module["Pointer_stringify"] = function () {
    abort("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["AsciiToString"]) _Module["AsciiToString"] = function () {
    abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stringToAscii"]) _Module["stringToAscii"] = function () {
    abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["UTF8ArrayToString"]) _Module["UTF8ArrayToString"] = function () {
    abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["UTF8ToString"]) _Module["UTF8ToString"] = function () {
    abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stringToUTF8Array"]) _Module["stringToUTF8Array"] = function () {
    abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stringToUTF8"]) _Module["stringToUTF8"] = function () {
    abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["lengthBytesUTF8"]) _Module["lengthBytesUTF8"] = function () {
    abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["UTF16ToString"]) _Module["UTF16ToString"] = function () {
    abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stringToUTF16"]) _Module["stringToUTF16"] = function () {
    abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["lengthBytesUTF16"]) _Module["lengthBytesUTF16"] = function () {
    abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["UTF32ToString"]) _Module["UTF32ToString"] = function () {
    abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stringToUTF32"]) _Module["stringToUTF32"] = function () {
    abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["lengthBytesUTF32"]) _Module["lengthBytesUTF32"] = function () {
    abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["allocateUTF8"]) _Module["allocateUTF8"] = function () {
    abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["stackTrace"]) _Module["stackTrace"] = function () {
    abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addOnPreRun"]) _Module["addOnPreRun"] = function () {
    abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addOnInit"]) _Module["addOnInit"] = function () {
    abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addOnPreMain"]) _Module["addOnPreMain"] = function () {
    abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addOnExit"]) _Module["addOnExit"] = function () {
    abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addOnPostRun"]) _Module["addOnPostRun"] = function () {
    abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["writeStringToMemory"]) _Module["writeStringToMemory"] = function () {
    abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["writeArrayToMemory"]) _Module["writeArrayToMemory"] = function () {
    abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["writeAsciiToMemory"]) _Module["writeAsciiToMemory"] = function () {
    abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addRunDependency"]) _Module["addRunDependency"] = function () {
    abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["removeRunDependency"]) _Module["removeRunDependency"] = function () {
    abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS"]) _Module["FS"] = function () {
    abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["FS_createFolder"]) _Module["FS_createFolder"] = function () {
    abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createPath"]) _Module["FS_createPath"] = function () {
    abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createDataFile"]) _Module["FS_createDataFile"] = function () {
    abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createPreloadedFile"]) _Module["FS_createPreloadedFile"] = function () {
    abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createLazyFile"]) _Module["FS_createLazyFile"] = function () {
    abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createLink"]) _Module["FS_createLink"] = function () {
    abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_createDevice"]) _Module["FS_createDevice"] = function () {
    abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["FS_unlink"]) _Module["FS_unlink"] = function () {
    abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  };
  if (!_Module["GL"]) _Module["GL"] = function () {
    abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["staticAlloc"]) _Module["staticAlloc"] = function () {
    abort("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["dynamicAlloc"]) _Module["dynamicAlloc"] = function () {
    abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["warnOnce"]) _Module["warnOnce"] = function () {
    abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["loadDynamicLibrary"]) _Module["loadDynamicLibrary"] = function () {
    abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["loadWebAssemblyModule"]) _Module["loadWebAssemblyModule"] = function () {
    abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getLEB"]) _Module["getLEB"] = function () {
    abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getFunctionTables"]) _Module["getFunctionTables"] = function () {
    abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["alignFunctionTables"]) _Module["alignFunctionTables"] = function () {
    abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["registerFunctions"]) _Module["registerFunctions"] = function () {
    abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["addFunction"]) _Module["addFunction"] = function () {
    abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["removeFunction"]) _Module["removeFunction"] = function () {
    abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getFuncWrapper"]) _Module["getFuncWrapper"] = function () {
    abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["prettyPrint"]) _Module["prettyPrint"] = function () {
    abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["makeBigInt"]) _Module["makeBigInt"] = function () {
    abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["dynCall"]) _Module["dynCall"] = function () {
    abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["getCompilerSetting"]) _Module["getCompilerSetting"] = function () {
    abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["intArrayFromBase64"]) _Module["intArrayFromBase64"] = function () {
    abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["tryParseAsDataURI"]) _Module["tryParseAsDataURI"] = function () {
    abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  };
  if (!_Module["ALLOC_NORMAL"]) Object.defineProperty(_Module, "ALLOC_NORMAL", {
    get: function get() {
      abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
    }
  });
  if (!_Module["ALLOC_STACK"]) Object.defineProperty(_Module, "ALLOC_STACK", {
    get: function get() {
      abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
    }
  });
  if (!_Module["ALLOC_STATIC"]) Object.defineProperty(_Module, "ALLOC_STATIC", {
    get: function get() {
      abort("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
    }
  });
  if (!_Module["ALLOC_DYNAMIC"]) Object.defineProperty(_Module, "ALLOC_DYNAMIC", {
    get: function get() {
      abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
    }
  });
  if (!_Module["ALLOC_NONE"]) Object.defineProperty(_Module, "ALLOC_NONE", {
    get: function get() {
      abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
    }
  }); // Modularize mode returns a function, which can be called to
  // create instances. The instances provide a then() method,
  // must like a Promise, that receives a callback. The callback
  // is called when the module is ready to run, with the module
  // as a parameter. (Like a Promise, it also returns the module
  // so you can use the output of .then(..)).

  _Module['then'] = function (func) {
    // We may already be ready to run code at this time. if
    // so, just queue a call to the callback.
    if (_Module['calledRun']) {
      func(_Module);
    } else {
      // we are not ready to call then() yet. we must call it
      // at the same time we would call onRuntimeInitialized.
      var old = _Module['onRuntimeInitialized'];

      _Module['onRuntimeInitialized'] = function () {
        if (old) old();
        func(_Module);
      };
    }

    return _Module;
  };
  /**
   * @constructor
   * @extends {Error}
   * @this {ExitStatus}
   */


  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }

  ;
  ExitStatus.prototype = new Error();
  ExitStatus.prototype.constructor = ExitStatus;
  var initialStackTop;
  var calledMain = false;

  dependenciesFulfilled = function runCaller() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!_Module['calledRun']) run();
    if (!_Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
  };
  /** @type {function(Array=)} */


  function run(args) {
    args = args || _Module['arguments'];

    if (runDependencies > 0) {
      return;
    }

    writeStackCookie();
    preRun();
    if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

    if (_Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

    function doRun() {
      if (_Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening

      _Module['calledRun'] = true;
      if (ABORT) return;
      ensureInitRuntime();
      preMain();
      if (_Module['onRuntimeInitialized']) _Module['onRuntimeInitialized']();
      assert(!_Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      postRun();
    }

    if (_Module['setStatus']) {
      _Module['setStatus']('Running...');

      setTimeout(function () {
        setTimeout(function () {
          _Module['setStatus']('');
        }, 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }

    checkStackCookie();
  }

  _Module['run'] = run;

  function checkUnflushedContent() {
    // Compiler settings do not allow exiting the runtime, so flushing
    // the streams is not possible. but in ASSERTIONS mode we check
    // if there was something to flush, and if so tell the user they
    // should request that the runtime be exitable.
    // Normally we would not even include flush() at all, but in ASSERTIONS
    // builds we do so just for this check, and here we see if there is any
    // content to flush, that is, we check if there would have been
    // something a non-ASSERTIONS build would have not seen.
    // How we flush the streams depends on whether we are in NO_FILESYSTEM
    // mode (which has its own special function for this; otherwise, all
    // the code is inside libc)
    var print = _Module['print'];
    var printErr = _Module['printErr'];
    var has = false;

    _Module['print'] = _Module['printErr'] = function (x) {
      has = true;
    };

    try {
      // it doesn't matter if it fails
      var flush = flush_NO_FILESYSTEM;
      if (flush) flush(0);
    } catch (e) {}

    _Module['print'] = print;
    _Module['printErr'] = printErr;

    if (has) {
      warnOnce('stdio streams had content in them that was not flushed. you should set NO_EXIT_RUNTIME to 0 (see the FAQ), or make sure to emit a newline when you printf etc.');
    }
  }

  function exit(status, implicit) {
    checkUnflushedContent(); // if this is just main exit-ing implicitly, and the status is 0, then we
    // don't need to do anything here and can just leave. if the status is
    // non-zero, though, then we need to report it.
    // (we may have warned about this earlier, if a situation justifies doing so)

    if (implicit && _Module['noExitRuntime'] && status === 0) {
      return;
    }

    if (_Module['noExitRuntime']) {
      // if exit() was called, we may warn the user if the runtime isn't actually being shut down
      if (!implicit) {
        _Module.printErr('exit(' + status + ') called, but NO_EXIT_RUNTIME is set, so halting execution but not exiting the runtime or preventing further async execution (build with NO_EXIT_RUNTIME=0, if you want a true shutdown)');
      }
    } else {
      ABORT = true;
      EXITSTATUS = status;
      STACKTOP = initialStackTop;
      exitRuntime();
      if (_Module['onExit']) _Module['onExit'](status);
    }

    if (ENVIRONMENT_IS_NODE) {
      process['exit'](status);
    }

    _Module['quit'](status, new ExitStatus(status));
  }

  _Module['exit'] = exit;
  var abortDecorators = [];

  function abort(what) {
    if (_Module['onAbort']) {
      _Module['onAbort'](what);
    }

    if (what !== undefined) {
      _Module.print(what);

      _Module.printErr(what);

      what = JSON.stringify(what);
    } else {
      what = '';
    }

    ABORT = true;
    EXITSTATUS = 1;
    var extra = '';
    var output = 'abort(' + what + ') at ' + stackTrace() + extra;

    if (abortDecorators) {
      abortDecorators.forEach(function (decorator) {
        output = decorator(output, what);
      });
    }

    throw output;
  }

  _Module['abort'] = abort; // {{PRE_RUN_ADDITIONS}}

  if (_Module['preInit']) {
    if (typeof _Module['preInit'] == 'function') _Module['preInit'] = [_Module['preInit']];

    while (_Module['preInit'].length > 0) {
      _Module['preInit'].pop()();
    }
  }

  _Module["noExitRuntime"] = true;
  run(); // {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}

  return _Module;
};

if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = Module;else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  return Module;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.registry.npmjs.org/webpack/4.12.2/node_modules/webpack/buildin/module.js */ "./node_modules/.registry.npmjs.org/webpack/4.12.2/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/crypto/dist/error/cryptoError":
/*!***********************************************************!*\
  !*** external "@iota-pico/crypto/dist/error/cryptoError" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__;

/***/ }),

/***/ "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase":
/*!*********************************************************************!*\
  !*** external "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_proofOfWork_proofOfWorkBase__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trytes":
/*!***************************************************!*\
  !*** external "@iota-pico/data/dist/data/trytes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uLi9zcmMvcHJvb2ZPZldvcmtXYXNtLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vLi93YXNtL2lvdGEtcGljby1wb3ctd2FzbS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIiJdLCJuYW1lcyI6WyJNb2R1bGUiLCJtb2R1bGVPdmVycmlkZXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInN0YXR1cyIsInRvVGhyb3ciLCJFTlZJUk9OTUVOVF9JU19XRUIiLCJFTlZJUk9OTUVOVF9JU19XT1JLRVIiLCJFTlZJUk9OTUVOVF9JU19OT0RFIiwiRU5WSVJPTk1FTlRfSVNfU0hFTEwiLCJFcnJvciIsIndpbmRvdyIsImltcG9ydFNjcmlwdHMiLCJwcm9jZXNzIiwibm9kZUZTIiwibm9kZVBhdGgiLCJzaGVsbF9yZWFkIiwiZmlsZW5hbWUiLCJiaW5hcnkiLCJyZXQiLCJ0cnlQYXJzZUFzRGF0YVVSSSIsInJlcXVpcmUiLCJ0b1N0cmluZyIsInJlYWRCaW5hcnkiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYXNzZXJ0IiwibGVuZ3RoIiwicmVwbGFjZSIsInNsaWNlIiwiZXgiLCJFeGl0U3RhdHVzIiwicmVhc29uIiwicCIsInJlYWQiLCJmIiwiZGF0YSIsImludEFycmF5VG9TdHJpbmciLCJyZWFkYnVmZmVyIiwic2NyaXB0QXJncyIsImFyZ3VtZW50cyIsInF1aXQiLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwicmVzcG9uc2VUZXh0IiwiZXJyIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2UiLCJyZWFkQXN5bmMiLCJvbmxvYWQiLCJvbmVycm9yIiwieGhyX29ubG9hZCIsInRpdGxlIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwicHJpbnQiLCJwcmludEVyciIsIndhcm4iLCJ1bmRlZmluZWQiLCJTVEFDS19BTElHTiIsInN0YWNrU2F2ZSIsInN0YWNrUmVzdG9yZSIsInN0YWNrQWxsb2MiLCJzZXRUZW1wUmV0MCIsImdldFRlbXBSZXQwIiwiYWJvcnQiLCJzdGF0aWNBbGxvYyIsInNpemUiLCJzdGF0aWNTZWFsZWQiLCJTVEFUSUNUT1AiLCJkeW5hbWljQWxsb2MiLCJEWU5BTUlDVE9QX1BUUiIsIkhFQVAzMiIsImVuZCIsIlRPVEFMX01FTU9SWSIsInN1Y2Nlc3MiLCJlbmxhcmdlTWVtb3J5IiwiYWxpZ25NZW1vcnkiLCJmYWN0b3IiLCJNYXRoIiwiY2VpbCIsImdldE5hdGl2ZVR5cGVTaXplIiwidHlwZSIsImJpdHMiLCJwYXJzZUludCIsInN1YnN0ciIsIndhcm5PbmNlIiwidGV4dCIsInNob3duIiwiZnVuY3Rpb25Qb2ludGVycyIsIkFycmF5IiwiYWRkRnVuY3Rpb24iLCJmdW5jIiwiaSIsInJlbW92ZUZ1bmN0aW9uIiwiaW5kZXgiLCJmdW5jV3JhcHBlcnMiLCJnZXRGdW5jV3JhcHBlciIsInNpZyIsInNpZ0NhY2hlIiwiZHluQ2FsbF93cmFwcGVyIiwiZHluQ2FsbCIsImFyZyIsInByb3RvdHlwZSIsImNhbGwiLCJtYWtlQmlnSW50IiwibG93IiwiaGlnaCIsInVuc2lnbmVkIiwicHRyIiwiYXJncyIsImFwcGx5IiwiY29uY2F0IiwiZ2V0Q29tcGlsZXJTZXR0aW5nIiwibmFtZSIsIlJ1bnRpbWUiLCJHTE9CQUxfQkFTRSIsIkFCT1JUIiwiRVhJVFNUQVRVUyIsImNvbmRpdGlvbiIsImdsb2JhbFNjb3BlIiwiZ2V0Q0Z1bmMiLCJpZGVudCIsIkpTZnVuY3MiLCJhcnIiLCJ3cml0ZUFycmF5VG9NZW1vcnkiLCJzdHIiLCJsZW4iLCJzdHJpbmdUb1VURjgiLCJ0b0MiLCJjY2FsbCIsInJldHVyblR5cGUiLCJhcmdUeXBlcyIsIm9wdHMiLCJjQXJncyIsInN0YWNrIiwiY29udmVydGVyIiwiUG9pbnRlcl9zdHJpbmdpZnkiLCJjd3JhcCIsImNmdW5jIiwibnVtZXJpY0FyZ3MiLCJldmVyeSIsIm51bWVyaWNSZXQiLCJzZXRWYWx1ZSIsInZhbHVlIiwibm9TYWZlIiwiY2hhckF0IiwiSEVBUDgiLCJIRUFQMTYiLCJ0ZW1wSTY0IiwidGVtcERvdWJsZSIsIk1hdGhfYWJzIiwiTWF0aF9taW4iLCJNYXRoX2Zsb29yIiwiTWF0aF9jZWlsIiwiSEVBUEYzMiIsIkhFQVBGNjQiLCJnZXRWYWx1ZSIsIkFMTE9DX05PUk1BTCIsIkFMTE9DX1NUQUNLIiwiQUxMT0NfU1RBVElDIiwiQUxMT0NfRFlOQU1JQyIsIkFMTE9DX05PTkUiLCJhbGxvY2F0ZSIsInNsYWIiLCJ0eXBlcyIsImFsbG9jYXRvciIsInplcm9pbml0Iiwic2luZ2xlVHlwZSIsIl9tYWxsb2MiLCJtYXgiLCJzdG9wIiwic3ViYXJyYXkiLCJIRUFQVTgiLCJzZXQiLCJ0eXBlU2l6ZSIsInByZXZpb3VzVHlwZSIsImN1cnIiLCJnZXRNZW1vcnkiLCJydW50aW1lSW5pdGlhbGl6ZWQiLCJoYXNVdGYiLCJ0IiwiTUFYX0NIVU5LIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluIiwiVVRGOFRvU3RyaW5nIiwiQXNjaWlUb1N0cmluZyIsImNoIiwic3RyaW5nVG9Bc2NpaSIsIm91dFB0ciIsIndyaXRlQXNjaWlUb01lbW9yeSIsIlVURjhEZWNvZGVyIiwiVGV4dERlY29kZXIiLCJVVEY4QXJyYXlUb1N0cmluZyIsInU4QXJyYXkiLCJpZHgiLCJlbmRQdHIiLCJkZWNvZGUiLCJ1MCIsInUxIiwidTIiLCJ1MyIsInU0IiwidTUiLCJzdHJpbmdUb1VURjhBcnJheSIsIm91dFU4QXJyYXkiLCJvdXRJZHgiLCJtYXhCeXRlc1RvV3JpdGUiLCJzdGFydElkeCIsImVuZElkeCIsInUiLCJjaGFyQ29kZUF0IiwibGVuZ3RoQnl0ZXNVVEY4IiwiVVRGMTZEZWNvZGVyIiwiVVRGMTZUb1N0cmluZyIsImNvZGVVbml0Iiwic3RyaW5nVG9VVEYxNiIsInN0YXJ0UHRyIiwibnVtQ2hhcnNUb1dyaXRlIiwibGVuZ3RoQnl0ZXNVVEYxNiIsIlVURjMyVG9TdHJpbmciLCJ1dGYzMiIsInN0cmluZ1RvVVRGMzIiLCJ0cmFpbFN1cnJvZ2F0ZSIsImxlbmd0aEJ5dGVzVVRGMzIiLCJhbGxvY2F0ZVVURjgiLCJhbGxvY2F0ZVVURjhPblN0YWNrIiwiZGVtYW5nbGUiLCJkZW1hbmdsZUFsbCIsInJlZ2V4IiwieCIsInkiLCJqc1N0YWNrVHJhY2UiLCJlIiwic3RhY2tUcmFjZSIsImpzIiwiUEFHRV9TSVpFIiwiV0FTTV9QQUdFX1NJWkUiLCJBU01KU19QQUdFX1NJWkUiLCJNSU5fVE9UQUxfTUVNT1JZIiwiYWxpZ25VcCIsIm11bHRpcGxlIiwiSEVBUCIsIkhFQVBVMTYiLCJIRUFQVTMyIiwidXBkYXRlR2xvYmFsQnVmZmVyIiwiYnVmIiwidXBkYXRlR2xvYmFsQnVmZmVyVmlld3MiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJTVEFUSUNfQkFTRSIsIlNUQUNLX0JBU0UiLCJTVEFDS1RPUCIsIlNUQUNLX01BWCIsIkRZTkFNSUNfQkFTRSIsIndyaXRlU3RhY2tDb29raWUiLCJjaGVja1N0YWNrQ29va2llIiwiYWJvcnRTdGFja092ZXJmbG93IiwiYWxsb2NTaXplIiwiYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkiLCJUT1RBTF9TVEFDSyIsImJ5dGVMZW5ndGgiLCJXZWJBc3NlbWJseSIsIk1lbW9yeSIsIkFycmF5QnVmZmVyIiwiZ2V0VG90YWxNZW1vcnkiLCJjYWxsUnVudGltZUNhbGxiYWNrcyIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwic2hpZnQiLCJfX0FUUFJFUlVOX18iLCJfX0FUSU5JVF9fIiwiX19BVE1BSU5fXyIsIl9fQVRFWElUX18iLCJfX0FUUE9TVFJVTl9fIiwicnVudGltZUV4aXRlZCIsInByZVJ1biIsImFkZE9uUHJlUnVuIiwiZW5zdXJlSW5pdFJ1bnRpbWUiLCJwcmVNYWluIiwiZXhpdFJ1bnRpbWUiLCJwb3N0UnVuIiwiYWRkT25Qb3N0UnVuIiwiY2IiLCJ1bnNoaWZ0IiwiYWRkT25Jbml0IiwiYWRkT25QcmVNYWluIiwiYWRkT25FeGl0Iiwid3JpdGVTdHJpbmdUb01lbW9yeSIsInN0cmluZyIsImRvbnRBZGROdWxsIiwibGFzdENoYXIiLCJJbmZpbml0eSIsImFycmF5IiwidW5TaWduIiwiaWdub3JlIiwiYWJzIiwicG93IiwicmVTaWduIiwiaGFsZiIsIk1hdGhfY29zIiwiY29zIiwiTWF0aF9zaW4iLCJzaW4iLCJNYXRoX3RhbiIsInRhbiIsIk1hdGhfYWNvcyIsImFjb3MiLCJNYXRoX2FzaW4iLCJhc2luIiwiTWF0aF9hdGFuIiwiYXRhbiIsIk1hdGhfYXRhbjIiLCJhdGFuMiIsIk1hdGhfZXhwIiwiZXhwIiwiTWF0aF9sb2ciLCJNYXRoX3NxcnQiLCJzcXJ0IiwiZmxvb3IiLCJNYXRoX3BvdyIsIk1hdGhfaW11bCIsImltdWwiLCJNYXRoX2Zyb3VuZCIsImZyb3VuZCIsIk1hdGhfcm91bmQiLCJyb3VuZCIsIk1hdGhfbWF4IiwiTWF0aF9jbHozMiIsImNsejMyIiwiTWF0aF90cnVuYyIsInRydW5jIiwicnVuRGVwZW5kZW5jaWVzIiwicnVuRGVwZW5kZW5jeVdhdGNoZXIiLCJkZXBlbmRlbmNpZXNGdWxmaWxsZWQiLCJydW5EZXBlbmRlbmN5VHJhY2tpbmciLCJnZXRVbmlxdWVSdW5EZXBlbmRlbmN5IiwiaWQiLCJvcmlnIiwicmFuZG9tIiwiYWRkUnVuRGVwZW5kZW5jeSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRlcCIsInJlbW92ZVJ1bkRlcGVuZGVuY3kiLCJtZW1vcnlJbml0aWFsaXplciIsIkZTIiwiZXJyb3IiLCJpbml0IiwiY3JlYXRlRGF0YUZpbGUiLCJjcmVhdGVQcmVsb2FkZWRGaWxlIiwiY3JlYXRlTGF6eUZpbGUiLCJta2RldiIsInJlZ2lzdGVyRGV2aWNlIiwiYW5hbHl6ZVBhdGgiLCJsb2FkRmlsZXNGcm9tREIiLCJFcnJub0Vycm9yIiwiZGF0YVVSSVByZWZpeCIsImlzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJpbmRleE9mIiwiaW50ZWdyYXRlV2FzbUpTIiwibWV0aG9kIiwid2FzbVRleHRGaWxlIiwid2FzbUJpbmFyeUZpbGUiLCJhc21qc0NvZGVGaWxlIiwid2FzbVBhZ2VTaXplIiwiaW5mbyIsImV4cG9ydHMiLCJtZXJnZU1lbW9yeSIsIm5ld0J1ZmZlciIsIm9sZEJ1ZmZlciIsIm9sZFZpZXciLCJuZXdWaWV3IiwiZml4SW1wb3J0cyIsImltcG9ydHMiLCJnZXRCaW5hcnkiLCJnZXRCaW5hcnlQcm9taXNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJjYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZG9OYXRpdmVXYXNtIiwiZ2xvYmFsIiwiZW52IiwicHJvdmlkZWRCdWZmZXIiLCJOYU4iLCJyZWNlaXZlSW5zdGFuY2UiLCJpbnN0YW5jZSIsIm1vZHVsZSIsIm1lbW9yeSIsInRydWVNb2R1bGUiLCJyZWNlaXZlSW5zdGFudGlhdGVkU291cmNlIiwib3V0cHV0IiwiaW5zdGFudGlhdGVBcnJheUJ1ZmZlciIsInJlY2VpdmVyIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0cmVhbWluZyIsImFzbWpzUmVhbGxvY0J1ZmZlciIsIndhc21SZWFsbG9jQnVmZmVyIiwiUEFHRV9NVUxUSVBMRSIsIm9sZCIsIm9sZFNpemUiLCJyZXN1bHQiLCJncm93IiwiZmluYWxNZXRob2QiLCJUQUJMRV9TSVpFIiwiTUFYX1RBQkxFX1NJWkUiLCJUYWJsZSIsImVsZW1lbnQiLCJtZXRob2RIYW5kbGVyIiwiQVNNX0NPTlNUUyIsInB1c2giLCJTVEFUSUNfQlVNUCIsInRlbXBEb3VibGVQdHIiLCJjb3B5VGVtcEZsb2F0IiwiY29weVRlbXBEb3VibGUiLCJfX19sb2NrIiwiU1lTQ0FMTFMiLCJ2YXJhcmdzIiwiZ2V0IiwiZ2V0U3RyIiwiZ2V0NjQiLCJnZXRaZXJvIiwiX19fc3lzY2FsbDE0MCIsIndoaWNoIiwic3RyZWFtIiwiZ2V0U3RyZWFtRnJvbUZEIiwib2Zmc2V0X2hpZ2giLCJvZmZzZXRfbG93Iiwid2hlbmNlIiwib2Zmc2V0IiwibGxzZWVrIiwicG9zaXRpb24iLCJnZXRkZW50cyIsImVycm5vIiwiZmx1c2hfTk9fRklMRVNZU1RFTSIsImZmbHVzaCIsInByaW50Q2hhciIsIl9fX3N5c2NhbGwxNDYiLCJidWZmZXJzIiwiaW92IiwiaW92Y250IiwiaiIsIl9fX3N5c2NhbGw1NCIsIl9fX3N5c2NhbGw2IiwiY2xvc2UiLCJfX191bmxvY2siLCJfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQiLCJjdHR6X2k4IiwiX2xsdm1fY3R0el9pMzIiLCJfbGx2bV9jdHR6X2k2NCIsImwiLCJoIiwiX2xsdm1fc3RhY2tyZXN0b3JlIiwic2VsZiIsIl9sbHZtX3N0YWNrc2F2ZSIsIkxMVk1fU0FWRURTVEFDS1MiLCJzcGxpY2UiLCJfZW1zY3JpcHRlbl9tZW1jcHlfYmlnIiwiZGVzdCIsInNyYyIsIm51bSIsIl9wdGhyZWFkX2NyZWF0ZSIsIl9wdGhyZWFkX2pvaW4iLCJfcHRocmVhZF9tdXRleF9pbml0IiwiX19fc2V0RXJyTm8iLCJFUlJOT19DT0RFUyIsIkVQRVJNIiwiRU5PRU5UIiwiRVNSQ0giLCJFSU5UUiIsIkVJTyIsIkVOWElPIiwiRTJCSUciLCJFTk9FWEVDIiwiRUJBREYiLCJFQ0hJTEQiLCJFQUdBSU4iLCJFV09VTERCTE9DSyIsIkVOT01FTSIsIkVBQ0NFUyIsIkVGQVVMVCIsIkVOT1RCTEsiLCJFQlVTWSIsIkVFWElTVCIsIkVYREVWIiwiRU5PREVWIiwiRU5PVERJUiIsIkVJU0RJUiIsIkVJTlZBTCIsIkVORklMRSIsIkVNRklMRSIsIkVOT1RUWSIsIkVUWFRCU1kiLCJFRkJJRyIsIkVOT1NQQyIsIkVTUElQRSIsIkVST0ZTIiwiRU1MSU5LIiwiRVBJUEUiLCJFRE9NIiwiRVJBTkdFIiwiRU5PTVNHIiwiRUlEUk0iLCJFQ0hSTkciLCJFTDJOU1lOQyIsIkVMM0hMVCIsIkVMM1JTVCIsIkVMTlJORyIsIkVVTkFUQ0giLCJFTk9DU0kiLCJFTDJITFQiLCJFREVBRExLIiwiRU5PTENLIiwiRUJBREUiLCJFQkFEUiIsIkVYRlVMTCIsIkVOT0FOTyIsIkVCQURSUUMiLCJFQkFEU0xUIiwiRURFQURMT0NLIiwiRUJGT05UIiwiRU5PU1RSIiwiRU5PREFUQSIsIkVUSU1FIiwiRU5PU1IiLCJFTk9ORVQiLCJFTk9QS0ciLCJFUkVNT1RFIiwiRU5PTElOSyIsIkVBRFYiLCJFU1JNTlQiLCJFQ09NTSIsIkVQUk9UTyIsIkVNVUxUSUhPUCIsIkVET1RET1QiLCJFQkFETVNHIiwiRU5PVFVOSVEiLCJFQkFERkQiLCJFUkVNQ0hHIiwiRUxJQkFDQyIsIkVMSUJCQUQiLCJFTElCU0NOIiwiRUxJQk1BWCIsIkVMSUJFWEVDIiwiRU5PU1lTIiwiRU5PVEVNUFRZIiwiRU5BTUVUT09MT05HIiwiRUxPT1AiLCJFT1BOT1RTVVBQIiwiRVBGTk9TVVBQT1JUIiwiRUNPTk5SRVNFVCIsIkVOT0JVRlMiLCJFQUZOT1NVUFBPUlQiLCJFUFJPVE9UWVBFIiwiRU5PVFNPQ0siLCJFTk9QUk9UT09QVCIsIkVTSFVURE9XTiIsIkVDT05OUkVGVVNFRCIsIkVBRERSSU5VU0UiLCJFQ09OTkFCT1JURUQiLCJFTkVUVU5SRUFDSCIsIkVORVRET1dOIiwiRVRJTUVET1VUIiwiRUhPU1RET1dOIiwiRUhPU1RVTlJFQUNIIiwiRUlOUFJPR1JFU1MiLCJFQUxSRUFEWSIsIkVERVNUQUREUlJFUSIsIkVNU0dTSVpFIiwiRVBST1RPTk9TVVBQT1JUIiwiRVNPQ0tUTk9TVVBQT1JUIiwiRUFERFJOT1RBVkFJTCIsIkVORVRSRVNFVCIsIkVJU0NPTk4iLCJFTk9UQ09OTiIsIkVUT09NQU5ZUkVGUyIsIkVVU0VSUyIsIkVEUVVPVCIsIkVTVEFMRSIsIkVOT1RTVVAiLCJFTk9NRURJVU0iLCJFSUxTRVEiLCJFT1ZFUkZMT1ciLCJFQ0FOQ0VMRUQiLCJFTk9UUkVDT1ZFUkFCTEUiLCJFT1dORVJERUFEIiwiRVNUUlBJUEUiLCJfc3lzY29uZiIsIm1heEhlYXBTaXplIiwibmF2aWdhdG9yIiwiQVNTRVJUSU9OUyIsImludEFycmF5RnJvbVN0cmluZyIsInN0cmluZ3kiLCJ1OGFycmF5IiwibnVtQnl0ZXNXcml0dGVuIiwiY2hyIiwiam9pbiIsImRlY29kZUJhc2U2NCIsImF0b2IiLCJpbnB1dCIsImtleVN0ciIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpbnRBcnJheUZyb21CYXNlNjQiLCJzIiwiQnVmZmVyIiwiZnJvbSIsIl8iLCJieXRlT2Zmc2V0IiwiZGVjb2RlZCIsImJ5dGVzIiwibnVsbEZ1bmNfaWkiLCJudWxsRnVuY19paWlpIiwiaW52b2tlX2lpIiwiYTEiLCJpbnZva2VfaWlpaSIsImEyIiwiYTMiLCJhc21HbG9iYWxBcmciLCJhc21MaWJyYXJ5QXJnIiwiYXNtIiwicmVhbF9fX19lcnJub19sb2NhdGlvbiIsInJlYWxfX2NjdXJsX3BvdyIsInJlYWxfX2ZmbHVzaCIsInJlYWxfX2ZyZWUiLCJyZWFsX19sbHZtX2Jzd2FwX2kzMiIsInJlYWxfX21hbGxvYyIsInJlYWxfX3B0aHJlYWRfbXV0ZXhfbG9jayIsInJlYWxfX3B0aHJlYWRfbXV0ZXhfdW5sb2NrIiwicmVhbF9fc2JyayIsInJlYWxfZXN0YWJsaXNoU3RhY2tTcGFjZSIsInJlYWxfZ2V0VGVtcFJldDAiLCJyZWFsX3NldFRlbXBSZXQwIiwicmVhbF9zZXRUaHJldyIsInJlYWxfc3RhY2tBbGxvYyIsInJlYWxfc3RhY2tSZXN0b3JlIiwicmVhbF9zdGFja1NhdmUiLCJfX19lcnJub19sb2NhdGlvbiIsIl9jY3VybF9wb3ciLCJfZmZsdXNoIiwiX2ZyZWUiLCJfbGx2bV9ic3dhcF9pMzIiLCJfbWVtY3B5IiwiX21lbXNldCIsIl9wdGhyZWFkX211dGV4X2xvY2siLCJfcHRocmVhZF9tdXRleF91bmxvY2siLCJfc2JyayIsImVzdGFibGlzaFN0YWNrU3BhY2UiLCJydW5Qb3N0U2V0cyIsInNldFRocmV3IiwiZHluQ2FsbF9paSIsImR5bkNhbGxfaWlpaSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwibWVzc2FnZSIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFN0YWNrVG9wIiwiY2FsbGVkTWFpbiIsInJ1bkNhbGxlciIsInJ1biIsImRvUnVuIiwic2V0VGltZW91dCIsImNoZWNrVW5mbHVzaGVkQ29udGVudCIsImhhcyIsImZsdXNoIiwiZXhpdCIsImltcGxpY2l0IiwiYWJvcnREZWNvcmF0b3JzIiwid2hhdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRyYSIsImZvckVhY2giLCJkZWNvcmF0b3IiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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LEVBQTZJLENBQTdJLEVBQStJLENBQS9JLEVBQWlKLENBQWpKLEVBQW1KLENBQW5KLEVBQXFKLENBQXJKLEVBQXVKLENBQXZKLEVBQXlKLENBQXpKLEVBQTJKLENBQTNKLEVBQTZKLENBQTdKLEVBQStKLENBQS9KLEVBQWlLLENBQWpLLEVBQW1LLENBQW5LLEVBQXFLLENBQXJLLEVBQXVLLENBQXZLLEVBQXlLLENBQXpLLEVBQTJLLENBQTNLLEVBQTZLLENBQTdLLEVBQStLLENBQS9LLEVBQWlMLENBQWpMLEVBQW1MLENBQW5MLEVBQXFMLENBQXJMLEVBQXVMLENBQXZMLEVBQXlMLENBQXpMLEVBQTJMLENBQTNMLEVBQTZMLENBQTdMLEVBQStMLENBQS9MLEVBQWlNLENBQWpNLEVBQW1NLENBQW5NLEVBQXFNLENBQXJNLEVBQXVNLENBQXZNLEVBQXlNLENBQXpNLEVBQTJNLENBQTNNLEVBQTZNLENBQTdNLEVBQStNLENBQS9NLEVBQWlOLENBQWpOLEVBQW1OLENBQW5OLEVBQXFOLENBQXJOLEVBQXVOLENBQXZOLEVBQXlOLENBQXpOLEVBQTJOLENBQTNOLEVBQTZOLENBQTdOLEVBQStOLENBQS9OLEVBQWlPLENBQWpPLEVBQW1PLENBQW5PLEVBQXFPLENBQXJPLEVBQXVPLENBQXZPLEVBQXlPLENBQXpPLEVBQTJPLENBQTNPLEVBQTZPLENBQTdPLEVBQStPLENBQS9PLEVBQWlQLENBQWpQLEVBQW1QLENBQW5QLEVBQXFQLENBQXJQLEVBQXVQLENBQXZQLEVBQXlQLENBQXpQLEVBQTJQLENBQTNQLEVBQTZQLENBQTdQLEVBQStQLENBQS9QLEVBQWlRLENBQWpRLEVBQW1RLENBQW5RLEVBQXFRLENBQXJRLEVBQXVRLENBQXZRLEVBQXlRLENBQXpRLEVBQTJRLENBQTNRLEVBQTZRLENBQTdRLEVBQStRLENBQS9RLEVBQWlSLENBQWpSLEVBQW1SLENBQW5SLEVBQXFSLENBQXJSLEVBQXVSLENBQXZSLEVBQXlSLENBQXpSLEVBQTJSLENBQTNSLEVBQTZSLENBQTdSLEVBQStSLENBQS9SLEVBQWlTLENBQWpTLEVBQW1TLENBQW5TLEVBQXFTLENBQXJTLEVBQXVTLENBQXZTLEVBQXlTLENBQXpTLEVBQTJTLENBQTNTLEVBQTZTLENBQTdTLEVBQStTLENBQS9TLEVBQWlULENBQWpULEVBQW1ULENBQW5ULEVBQXFULENBQXJULEVBQXVULENBQXZULEVBQXlULENBQXpULEVBQTJULENBQTNULEVBQTZULENBQTdULEVBQStULENBQS9ULEVBQWlVLENBQWpVLEVBQW1VLENBQW5VLEVBQXFVLENBQXJVLEVBQXVVLENBQXZVLEVBQXlVLENBQXpVLEVBQTJVLENBQTNVLEVBQTZVLENBQTdVLEVBQStVLENBQS9VLEVBQWlWLENBQWpWLEVBQW1WLENBQW5WLEVBQXFWLENBQXJWLEVBQXVWLENBQXZWLEVBQXlWLENBQXpWLEVBQTJWLENBQTNWLEVBQTZWLENBQTdWLEVBQStWLENBQS9WLEVBQWlXLENBQWpXLEVBQW1XLENBQW5XLEVBQXFXLENBQXJXLEVBQXVXLENBQXZXLEVBQXlXLENBQXpXLEVBQTJXLENBQTNXLEVBQTZXLENBQTdXLEVBQStXLENBQS9XLEVBQWlYLENBQWpYLEVBQW1YLENBQW5YLEVBQXFYLENBQXJYLEVBQXVYLENBQXZYLEVBQXlYLENBQXpYLEVBQTJYLENBQTNYLEVBQTZYLENBQTdYLEVBQStYLENBQS9YLEVBQWlZLENBQWpZLEVBQW1ZLENBQW5ZLEVBQXFZLENBQXJZLEVBQXVZLENBQXZZLEVBQXlZLENBQXpZLEVBQTJZLENBQTNZLEVBQTZZLENBQTdZLEVBQStZLENBQS9ZLEVBQWlaLENBQWpaLEVBQW1aLENBQW5aLEVBQXFaLENBQXJaLEVBQXVaLENBQXZaLEVBQXlaLENBQXpaLEVBQTJaLENBQTNaLEVBQTZaLENBQTdaLEVBQStaLENBQS9aLEVBQWlhLENBQWphLEVBQW1hLENBQW5hLEVBQXFhLENBQXJhLEVBQXVhLENBQXZhLEVBQXlhLENBQXphLEVBQTJhLENBQTNhLEVBQTZhLENBQTdhLEVBQSthLENBQS9hLEVBQWliLENBQWpiLEVBQW1iLENBQW5iLEVBQXFiLENBQXJiLEVBQXViLENBQXZi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QUFLLEVBQUw7QUFDRSxlQUFPLENBQVA7O0FBQ0YsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxDQUFDLENBQVI7O0FBQ0YsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxDQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxDQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxDQUFQOztBQUNGLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssQ0FBTDtBQUNFLGVBQU8sSUFBUDs7QUFDRixXQUFLLEVBQUw7QUFDQSxXQUFLLEVBQUw7QUFDQSxXQUFLLEVBQUw7QUFDRSxlQUFPLEVBQVA7O0FBQ0YsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxVQUFQOztBQUNGLFdBQUssRUFBTDtBQUNBLFdBQUssQ0FBTDtBQUNFLGVBQU8sS0FBUDs7QUFDRixXQUFLLEVBQUw7QUFDQSxXQUFLLEVBQUw7QUFDRSxlQUFPLEVBQVA7O0FBQ0YsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxJQUFQOztBQUNGLFdBQUssQ0FBTDtBQUFRLGVBQU8sT0FBUDs7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLEtBQVA7O0FBQ1IsV0FBSyxFQUFMO0FBQVMsZUFBTyxLQUFQOztBQUNULFdBQUssRUFBTDtBQUFTLGVBQU8sS0FBUDs7QUFDVCxXQUFLLEVBQUw7QUFBUyxlQUFPLEtBQVA7O0FBQ1QsV0FBSyxFQUFMO0FBQVMsZUFBTyxJQUFQOztBQUNULFdBQUssRUFBTDtBQUFTLGVBQU8sR0FBUDs7QUFDVCxXQUFLLEVBQUw7QUFBUyxlQUFPLEdBQVA7O0FBQ1QsV0FBSyxFQUFMO0FBQVMsZUFBTyxHQUFQOztBQUNULFdBQUssQ0FBTDtBQUFRLGVBQU8sR0FBUDs7QUFDUixXQUFLLEdBQUw7QUFBVSxlQUFPLEVBQVA7O0FBQ1YsV0FBSyxFQUFMO0FBQVMsZUFBTyxFQUFQOztBQUNULFdBQUssQ0FBTDtBQUFRLGVBQU8sRUFBUDs7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLENBQVA7O0FBQ1IsV0FBSyxFQUFMO0FBQVMsZUFBTyxDQUFQOztBQUNULFdBQUssRUFBTDtBQUFTO0FBQ1AsY0FBSSxRQUFPMlcsU0FBUCx5Q0FBT0EsU0FBUCxPQUFxQixRQUF6QixFQUFtQyxPQUFPQSxVQUFVLHFCQUFWLEtBQW9DLENBQTNDO0FBQ25DLGlCQUFPLENBQVA7QUFDRDtBQTNJSDs7QUE2SUE3SCxnQkFBWUMsWUFBWXVCLE1BQXhCOztBQUNBLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0w1YSxtQkFBaUJMLFlBQVksQ0FBWixDQUFqQjtBQUVBK0wsZUFBYUMsV0FBV3JMLFlBQVlSLFNBQVosQ0FBeEI7QUFFQThMLGNBQVlGLGFBQWFTLFdBQXpCO0FBRUFOLGlCQUFldkwsWUFBWXNMLFNBQVosQ0FBZjtBQUVBM0wsU0FBT0Qsa0JBQWdCLENBQXZCLElBQTRCNkwsWUFBNUI7QUFFQWhNLGlCQUFlLElBQWYsQ0F6bEU4QixDQXlsRVQ7O0FBRXJCOUMsU0FBTzhPLGVBQWUxTCxZQUF0QixFQUFvQyx1Q0FBcEM7QUFFQSxNQUFJK2dCLGFBQWEsSUFBakI7QUFFQTs7QUFDQSxXQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUNuVCxXQUFyQyxFQUFrRGpSLE1BQWxELEVBQTBEO0FBQ3hELFFBQUl3RyxNQUFNeEcsU0FBUyxDQUFULEdBQWFBLE1BQWIsR0FBc0I4TCxnQkFBZ0JzWSxPQUFoQixJQUF5QixDQUF6RDtBQUNBLFFBQUlDLFVBQVUsSUFBSWxnQixLQUFKLENBQVVxQyxHQUFWLENBQWQ7QUFDQSxRQUFJOGQsa0JBQWtCaFosa0JBQWtCOFksT0FBbEIsRUFBMkJDLE9BQTNCLEVBQW9DLENBQXBDLEVBQXVDQSxRQUFRcmtCLE1BQS9DLENBQXRCO0FBQ0EsUUFBSWlSLFdBQUosRUFBaUJvVCxRQUFRcmtCLE1BQVIsR0FBaUJza0IsZUFBakI7QUFDakIsV0FBT0QsT0FBUDtBQUNEOztBQUVELFdBQVMzakIsZ0JBQVQsQ0FBMEIwUSxLQUExQixFQUFpQztBQUMvQixRQUFJNVIsTUFBTSxFQUFWOztBQUNBLFNBQUssSUFBSThFLElBQUksQ0FBYixFQUFnQkEsSUFBSThNLE1BQU1wUixNQUExQixFQUFrQ3NFLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUlpZ0IsTUFBTW5ULE1BQU05TSxDQUFOLENBQVY7O0FBQ0EsVUFBSWlnQixNQUFNLElBQVYsRUFBZ0I7QUFDZCxZQUFJTCxVQUFKLEVBQWdCO0FBQ2Rua0IsaUJBQU8sS0FBUCxFQUFjLG9CQUFvQndrQixHQUFwQixHQUEwQixJQUExQixHQUFpQ3ZhLE9BQU9DLFlBQVAsQ0FBb0JzYSxHQUFwQixDQUFqQyxHQUE0RCxlQUE1RCxHQUE4RWpnQixDQUE5RSxHQUFrRixvQkFBaEc7QUFDRDs7QUFDRGlnQixlQUFPLElBQVA7QUFDRDs7QUFDRC9rQixVQUFJc1osSUFBSixDQUFTOU8sT0FBT0MsWUFBUCxDQUFvQnNhLEdBQXBCLENBQVQ7QUFDRDs7QUFDRCxXQUFPL2tCLElBQUlnbEIsSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNELEdBcm5FNkIsQ0F3bkU5QjtBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBSUEsTUFBSUMsZUFBZSxPQUFPQyxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCQSxJQUE3QixHQUFvQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RFLFFBQUlDLFNBQVMsbUVBQWI7QUFFQSxRQUFJak4sU0FBUyxFQUFiO0FBQ0EsUUFBSWtOLElBQUosRUFBVUMsSUFBVixFQUFnQkMsSUFBaEI7QUFDQSxRQUFJQyxJQUFKLEVBQVVDLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QjtBQUNBLFFBQUk3Z0IsSUFBSSxDQUFSLENBTnNFLENBT3RFOztBQUNBcWdCLFlBQVFBLE1BQU0xa0IsT0FBTixDQUFjLHFCQUFkLEVBQXFDLEVBQXJDLENBQVI7O0FBQ0EsT0FBRztBQUNEK2tCLGFBQU9KLE9BQU9yUCxPQUFQLENBQWVvUCxNQUFNaGQsTUFBTixDQUFhckQsR0FBYixDQUFmLENBQVA7QUFDQTJnQixhQUFPTCxPQUFPclAsT0FBUCxDQUFlb1AsTUFBTWhkLE1BQU4sQ0FBYXJELEdBQWIsQ0FBZixDQUFQO0FBQ0E0Z0IsYUFBT04sT0FBT3JQLE9BQVAsQ0FBZW9QLE1BQU1oZCxNQUFOLENBQWFyRCxHQUFiLENBQWYsQ0FBUDtBQUNBNmdCLGFBQU9QLE9BQU9yUCxPQUFQLENBQWVvUCxNQUFNaGQsTUFBTixDQUFhckQsR0FBYixDQUFmLENBQVA7QUFFQXVnQixhQUFRRyxRQUFRLENBQVQsR0FBZUMsUUFBUSxDQUE5QjtBQUNBSCxhQUFRLENBQUNHLE9BQU8sRUFBUixLQUFlLENBQWhCLEdBQXNCQyxRQUFRLENBQXJDO0FBQ0FILGFBQVEsQ0FBQ0csT0FBTyxDQUFSLEtBQWMsQ0FBZixHQUFvQkMsSUFBM0I7QUFFQXhOLGVBQVNBLFNBQVMzTixPQUFPQyxZQUFQLENBQW9CNGEsSUFBcEIsQ0FBbEI7O0FBRUEsVUFBSUssU0FBUyxFQUFiLEVBQWlCO0FBQ2Z2TixpQkFBU0EsU0FBUzNOLE9BQU9DLFlBQVAsQ0FBb0I2YSxJQUFwQixDQUFsQjtBQUNEOztBQUNELFVBQUlLLFNBQVMsRUFBYixFQUFpQjtBQUNmeE4saUJBQVNBLFNBQVMzTixPQUFPQyxZQUFQLENBQW9COGEsSUFBcEIsQ0FBbEI7QUFDRDtBQUNGLEtBbEJELFFBa0JTemdCLElBQUlxZ0IsTUFBTTNrQixNQWxCbkI7O0FBbUJBLFdBQU8yWCxNQUFQO0FBQ0QsR0E3QkQsQ0Fsb0U4QixDQWlxRTlCO0FBQ0E7O0FBQ0EsV0FBU3lOLGtCQUFULENBQTRCQyxDQUE1QixFQUErQjtBQUM3QixRQUFJLE9BQU94bUIsbUJBQVAsS0FBK0IsU0FBL0IsSUFBNENBLG1CQUFoRCxFQUFxRTtBQUNuRSxVQUFJbVAsR0FBSjs7QUFDQSxVQUFJO0FBQ0ZBLGNBQU1zWCxPQUFPQyxJQUFQLENBQVlGLENBQVosRUFBZSxRQUFmLENBQU47QUFDRCxPQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1Z4WCxjQUFNLElBQUlzWCxNQUFKLENBQVdELENBQVgsRUFBYyxRQUFkLENBQU47QUFDRDs7QUFDRCxhQUFPLElBQUl2bEIsVUFBSixDQUFla08sSUFBSW5PLE1BQW5CLEVBQTJCbU8sSUFBSXlYLFVBQS9CLEVBQTJDelgsSUFBSW9CLFVBQS9DLENBQVA7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsVUFBSXNXLFVBQVVqQixhQUFhWSxDQUFiLENBQWQ7QUFDQSxVQUFJTSxRQUFRLElBQUk3bEIsVUFBSixDQUFlNGxCLFFBQVExbEIsTUFBdkIsQ0FBWjs7QUFDQSxXQUFLLElBQUlzRSxJQUFJLENBQWIsRUFBaUJBLElBQUlvaEIsUUFBUTFsQixNQUE3QixFQUFzQyxFQUFFc0UsQ0FBeEMsRUFBMkM7QUFDekNxaEIsY0FBTXJoQixDQUFOLElBQVdvaEIsUUFBUTdaLFVBQVIsQ0FBbUJ2SCxDQUFuQixDQUFYO0FBQ0Q7O0FBQ0QsYUFBT3FoQixLQUFQO0FBQ0QsS0FQRCxDQU9FLE9BQU9ILENBQVAsRUFBVTtBQUNWLFlBQU0sSUFBSXptQixLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNEO0FBQ0YsR0F4ckU2QixDQTByRTlCO0FBQ0E7OztBQUNBLFdBQVNVLGlCQUFULENBQTJCSCxRQUEzQixFQUFxQztBQUNuQyxRQUFJLENBQUMrVixVQUFVL1YsUUFBVixDQUFMLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsV0FBTzhsQixtQkFBbUI5bEIsU0FBU1ksS0FBVCxDQUFla1YsY0FBY3BWLE1BQTdCLENBQW5CLENBQVA7QUFDRDs7QUFJRCxXQUFTNGxCLFdBQVQsQ0FBcUI1WSxDQUFyQixFQUF3QjtBQUFFM08sWUFBTyxVQUFQLEVBQW1CLGlXQUFuQjs7QUFBd1hBLFlBQU8sVUFBUCxFQUFtQix3Q0FBbkI7O0FBQTZEcUUsVUFBTXNLLENBQU47QUFBVTs7QUFFemQsV0FBUzZZLGFBQVQsQ0FBdUI3WSxDQUF2QixFQUEwQjtBQUFFM08sWUFBTyxVQUFQLEVBQW1CLG1XQUFuQjs7QUFBMFhBLFlBQU8sVUFBUCxFQUFtQix3Q0FBbkI7O0FBQTZEcUUsVUFBTXNLLENBQU47QUFBVTs7QUFFN2QzTyxVQUFPLGVBQVAsSUFBMEIsRUFBMUI7QUFFQUEsVUFBTyxrQkFBUCxJQUE2QixFQUE3Qjs7QUFFQSxXQUFTeW5CLFNBQVQsQ0FBbUJ0aEIsS0FBbkIsRUFBeUJ1aEIsRUFBekIsRUFBNkI7QUFDM0IsUUFBSTtBQUNGLGFBQU8xbkIsUUFBTyxZQUFQLEVBQXFCbUcsS0FBckIsRUFBMkJ1aEIsRUFBM0IsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFNNVksQ0FBTixFQUFTO0FBQ1QsVUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QkEsTUFBTSxTQUFuQyxFQUE4QyxNQUFNQSxDQUFOOztBQUM5QzlPLGNBQU8sVUFBUCxFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBUzJuQixXQUFULENBQXFCeGhCLEtBQXJCLEVBQTJCdWhCLEVBQTNCLEVBQThCRSxFQUE5QixFQUFpQ0MsRUFBakMsRUFBcUM7QUFDbkMsUUFBSTtBQUNGLGFBQU83bkIsUUFBTyxjQUFQLEVBQXVCbUcsS0FBdkIsRUFBNkJ1aEIsRUFBN0IsRUFBZ0NFLEVBQWhDLEVBQW1DQyxFQUFuQyxDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU0vWSxDQUFOLEVBQVM7QUFDVCxVQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCQSxNQUFNLFNBQW5DLEVBQThDLE1BQU1BLENBQU47O0FBQzlDOU8sY0FBTyxVQUFQLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFREEsVUFBTzhuQixZQUFQLEdBQXNCLEVBQXRCO0FBRUE5bkIsVUFBTytuQixhQUFQLEdBQXVCO0FBQUUsYUFBUzFqQixLQUFYO0FBQWtCLGNBQVUzQyxNQUE1QjtBQUFvQyxxQkFBaUJzRCxhQUFyRDtBQUFvRSxzQkFBa0JtTSxjQUF0RjtBQUFzRywrQkFBMkJOLHVCQUFqSTtBQUEwSiwwQkFBc0JGLGtCQUFoTDtBQUFvTSxtQkFBZTRXLFdBQW5OO0FBQWdPLHFCQUFpQkMsYUFBalA7QUFBZ1EsaUJBQWFDLFNBQTdRO0FBQXdSLG1CQUFlRSxXQUF2UztBQUFvVCxlQUFXN00sT0FBL1Q7QUFBd1UsbUJBQWVpRCxXQUF2VjtBQUFvVyxxQkFBaUIxQyxhQUFyWDtBQUFvWSxxQkFBaUJlLGFBQXJaO0FBQW9hLG9CQUFnQkssWUFBcGI7QUFBa2MsbUJBQWVDLFdBQWpkO0FBQThkLGlCQUFhRSxTQUEzZTtBQUFzZix5Q0FBcUNDLGlDQUEzaEI7QUFBOGpCLDhCQUEwQlcsc0JBQXhsQjtBQUFnbkIsc0JBQWtCVCxjQUFsb0I7QUFBa3BCLHNCQUFrQkMsY0FBcHFCO0FBQW9yQiwwQkFBc0JHLGtCQUExc0I7QUFBOHRCLHVCQUFtQkUsZUFBanZCO0FBQWt3Qix1QkFBbUJPLGVBQXJ4QjtBQUFzeUIscUJBQWlCQyxhQUF2ekI7QUFBczBCLDJCQUF1QkMsbUJBQTcxQjtBQUFrM0IsZ0JBQVk0SCxRQUE5M0I7QUFBdzRCLDJCQUF1QnpKLG1CQUEvNUI7QUFBbzdCLHNCQUFrQnRYLGNBQXQ4QjtBQUFzOUIscUJBQWlCZ1csYUFBditCO0FBQXMvQixhQUFTbFQsS0FBLy9CO0FBQXNnQyxnQkFBWTZJLFFBQWxoQztBQUE0aEMsaUJBQWFDLFNBQXppQztBQUFvakMsZUFBV3VNO0FBQS9qQyxHQUF2QixDQWx1RThCLENBbXVFOUI7O0FBQ0EsTUFBSWtMLE1BQUtob0IsUUFBTyxLQUFQLEVBQWE7QUFBYixHQUNSQSxRQUFPOG5CLFlBREMsRUFDYTluQixRQUFPK25CLGFBRHBCLEVBQ21Ddm1CLE1BRG5DLENBQVQ7O0FBR0EsTUFBSXltQix5QkFBeUJELElBQUksbUJBQUosQ0FBN0I7O0FBQXVEQSxNQUFJLG1CQUFKLElBQTJCLFlBQVc7QUFDM0Z0bUIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPb1csdUJBQXVCOWdCLEtBQXZCLENBQTZCLElBQTdCLEVBQW1DM0UsU0FBbkMsQ0FBUDtBQUNELEdBSnNEOztBQU12RCxNQUFJMGxCLGtCQUFrQkYsSUFBSSxZQUFKLENBQXRCOztBQUF5Q0EsTUFBSSxZQUFKLElBQW9CLFlBQVc7QUFDdEV0bUIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPcVcsZ0JBQWdCL2dCLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCM0UsU0FBNUIsQ0FBUDtBQUNELEdBSndDOztBQU16QyxNQUFJMmxCLGVBQWVILElBQUksU0FBSixDQUFuQjs7QUFBbUNBLE1BQUksU0FBSixJQUFpQixZQUFXO0FBQzdEdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT3NXLGFBQWFoaEIsS0FBYixDQUFtQixJQUFuQixFQUF5QjNFLFNBQXpCLENBQVA7QUFDRCxHQUprQzs7QUFNbkMsTUFBSTRsQixhQUFhSixJQUFJLE9BQUosQ0FBakI7O0FBQStCQSxNQUFJLE9BQUosSUFBZSxZQUFXO0FBQ3ZEdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT3VXLFdBQVdqaEIsS0FBWCxDQUFpQixJQUFqQixFQUF1QjNFLFNBQXZCLENBQVA7QUFDRCxHQUo4Qjs7QUFNL0IsTUFBSTZsQix1QkFBdUJMLElBQUksaUJBQUosQ0FBM0I7O0FBQW1EQSxNQUFJLGlCQUFKLElBQXlCLFlBQVc7QUFDckZ0bUIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPd1cscUJBQXFCbGhCLEtBQXJCLENBQTJCLElBQTNCLEVBQWlDM0UsU0FBakMsQ0FBUDtBQUNELEdBSmtEOztBQU1uRCxNQUFJOGxCLGVBQWVOLElBQUksU0FBSixDQUFuQjs7QUFBbUNBLE1BQUksU0FBSixJQUFpQixZQUFXO0FBQzdEdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT3lXLGFBQWFuaEIsS0FBYixDQUFtQixJQUFuQixFQUF5QjNFLFNBQXpCLENBQVA7QUFDRCxHQUprQzs7QUFNbkMsTUFBSStsQiwyQkFBMkJQLElBQUkscUJBQUosQ0FBL0I7O0FBQTJEQSxNQUFJLHFCQUFKLElBQTZCLFlBQVc7QUFDakd0bUIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPMFcseUJBQXlCcGhCLEtBQXpCLENBQStCLElBQS9CLEVBQXFDM0UsU0FBckMsQ0FBUDtBQUNELEdBSjBEOztBQU0zRCxNQUFJZ21CLDZCQUE2QlIsSUFBSSx1QkFBSixDQUFqQzs7QUFBK0RBLE1BQUksdUJBQUosSUFBK0IsWUFBVztBQUN2R3RtQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU8yVywyQkFBMkJyaEIsS0FBM0IsQ0FBaUMsSUFBakMsRUFBdUMzRSxTQUF2QyxDQUFQO0FBQ0QsR0FKOEQ7O0FBTS9ELE1BQUlpbUIsYUFBYVQsSUFBSSxPQUFKLENBQWpCOztBQUErQkEsTUFBSSxPQUFKLElBQWUsWUFBVztBQUN2RHRtQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU80VyxXQUFXdGhCLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUIzRSxTQUF2QixDQUFQO0FBQ0QsR0FKOEI7O0FBTS9CLE1BQUlrbUIsMkJBQTJCVixJQUFJLHFCQUFKLENBQS9COztBQUEyREEsTUFBSSxxQkFBSixJQUE2QixZQUFXO0FBQ2pHdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzZXLHlCQUF5QnZoQixLQUF6QixDQUErQixJQUEvQixFQUFxQzNFLFNBQXJDLENBQVA7QUFDRCxHQUowRDs7QUFNM0QsTUFBSW1tQixtQkFBbUJYLElBQUksYUFBSixDQUF2Qjs7QUFBMkNBLE1BQUksYUFBSixJQUFxQixZQUFXO0FBQ3pFdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzhXLGlCQUFpQnhoQixLQUFqQixDQUF1QixJQUF2QixFQUE2QjNFLFNBQTdCLENBQVA7QUFDRCxHQUowQzs7QUFNM0MsTUFBSW9tQixtQkFBbUJaLElBQUksYUFBSixDQUF2Qjs7QUFBMkNBLE1BQUksYUFBSixJQUFxQixZQUFXO0FBQ3pFdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTytXLGlCQUFpQnpoQixLQUFqQixDQUF1QixJQUF2QixFQUE2QjNFLFNBQTdCLENBQVA7QUFDRCxHQUowQzs7QUFNM0MsTUFBSXFtQixnQkFBZ0JiLElBQUksVUFBSixDQUFwQjs7QUFBcUNBLE1BQUksVUFBSixJQUFrQixZQUFXO0FBQ2hFdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT2dYLGNBQWMxaEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQjNFLFNBQTFCLENBQVA7QUFDRCxHQUpvQzs7QUFNckMsTUFBSXNtQixrQkFBa0JkLElBQUksWUFBSixDQUF0Qjs7QUFBeUNBLE1BQUksWUFBSixJQUFvQixZQUFXO0FBQ3RFdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT2lYLGdCQUFnQjNoQixLQUFoQixDQUFzQixJQUF0QixFQUE0QjNFLFNBQTVCLENBQVA7QUFDRCxHQUp3Qzs7QUFNekMsTUFBSXVtQixvQkFBb0JmLElBQUksY0FBSixDQUF4Qjs7QUFBNkNBLE1BQUksY0FBSixJQUFzQixZQUFXO0FBQzVFdG1CLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBT2tYLGtCQUFrQjVoQixLQUFsQixDQUF3QixJQUF4QixFQUE4QjNFLFNBQTlCLENBQVA7QUFDRCxHQUo0Qzs7QUFNN0MsTUFBSXdtQixpQkFBaUJoQixJQUFJLFdBQUosQ0FBckI7O0FBQXVDQSxNQUFJLFdBQUosSUFBbUIsWUFBVztBQUNuRXRtQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU9tWCxlQUFlN2hCLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkIzRSxTQUEzQixDQUFQO0FBQ0QsR0FKc0M7O0FBS3ZDeEMsVUFBTyxLQUFQLElBQWdCZ29CLEdBQWhCOztBQUNBLE1BQUlpQixvQkFBb0JqcEIsUUFBTyxtQkFBUCxJQUE4QixZQUFXO0FBQy9EMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsbUJBQWQsRUFBbUNtSCxLQUFuQyxDQUF5QyxJQUF6QyxFQUErQzNFLFNBQS9DLENBQVA7QUFBa0UsR0FIcEU7O0FBSUEsTUFBSTBtQixhQUFhbHBCLFFBQU8sWUFBUCxJQUF1QixZQUFXO0FBQ2pEMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsWUFBZCxFQUE0Qm1ILEtBQTVCLENBQWtDLElBQWxDLEVBQXdDM0UsU0FBeEMsQ0FBUDtBQUEyRCxHQUg3RDs7QUFJQSxNQUFJMm1CLFVBQVVucEIsUUFBTyxTQUFQLElBQW9CLFlBQVc7QUFDM0MwQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU83UixRQUFPLEtBQVAsRUFBYyxTQUFkLEVBQXlCbUgsS0FBekIsQ0FBK0IsSUFBL0IsRUFBcUMzRSxTQUFyQyxDQUFQO0FBQXdELEdBSDFEOztBQUlBLE1BQUk0bUIsUUFBUXBwQixRQUFPLE9BQVAsSUFBa0IsWUFBVztBQUN2QzBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLE9BQWQsRUFBdUJtSCxLQUF2QixDQUE2QixJQUE3QixFQUFtQzNFLFNBQW5DLENBQVA7QUFBc0QsR0FIeEQ7O0FBSUEsTUFBSTZtQixrQkFBa0JycEIsUUFBTyxpQkFBUCxJQUE0QixZQUFXO0FBQzNEMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsaUJBQWQsRUFBaUNtSCxLQUFqQyxDQUF1QyxJQUF2QyxFQUE2QzNFLFNBQTdDLENBQVA7QUFBZ0UsR0FIbEU7O0FBSUEsTUFBSXFJLFVBQVU3SyxRQUFPLFNBQVAsSUFBb0IsWUFBVztBQUMzQzBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLFNBQWQsRUFBeUJtSCxLQUF6QixDQUErQixJQUEvQixFQUFxQzNFLFNBQXJDLENBQVA7QUFBd0QsR0FIMUQ7O0FBSUEsTUFBSThtQixVQUFVdHBCLFFBQU8sU0FBUCxJQUFvQixZQUFXO0FBQzNDMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsU0FBZCxFQUF5Qm1ILEtBQXpCLENBQStCLElBQS9CLEVBQXFDM0UsU0FBckMsQ0FBUDtBQUF3RCxHQUgxRDs7QUFJQSxNQUFJK21CLFVBQVV2cEIsUUFBTyxTQUFQLElBQW9CLFlBQVc7QUFDM0MwQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU83UixRQUFPLEtBQVAsRUFBYyxTQUFkLEVBQXlCbUgsS0FBekIsQ0FBK0IsSUFBL0IsRUFBcUMzRSxTQUFyQyxDQUFQO0FBQXdELEdBSDFEOztBQUlBLE1BQUlnbkIsc0JBQXNCeHBCLFFBQU8scUJBQVAsSUFBZ0MsWUFBVztBQUNuRTBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLHFCQUFkLEVBQXFDbUgsS0FBckMsQ0FBMkMsSUFBM0MsRUFBaUQzRSxTQUFqRCxDQUFQO0FBQW9FLEdBSHRFOztBQUlBLE1BQUlpbkIsd0JBQXdCenBCLFFBQU8sdUJBQVAsSUFBa0MsWUFBVztBQUN2RTBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLHVCQUFkLEVBQXVDbUgsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQzRSxTQUFuRCxDQUFQO0FBQXNFLEdBSHhFOztBQUlBLE1BQUlrbkIsUUFBUTFwQixRQUFPLE9BQVAsSUFBa0IsWUFBVztBQUN2QzBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLE9BQWQsRUFBdUJtSCxLQUF2QixDQUE2QixJQUE3QixFQUFtQzNFLFNBQW5DLENBQVA7QUFBc0QsR0FIeEQ7O0FBSUEsTUFBSW1uQixzQkFBc0IzcEIsUUFBTyxxQkFBUCxJQUFnQyxZQUFXO0FBQ25FMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMscUJBQWQsRUFBcUNtSCxLQUFyQyxDQUEyQyxJQUEzQyxFQUFpRDNFLFNBQWpELENBQVA7QUFBb0UsR0FIdEU7O0FBSUEsTUFBSTRCLGNBQWNwRSxRQUFPLGFBQVAsSUFBd0IsWUFBVztBQUNuRDBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLGFBQWQsRUFBNkJtSCxLQUE3QixDQUFtQyxJQUFuQyxFQUF5QzNFLFNBQXpDLENBQVA7QUFBNEQsR0FIOUQ7O0FBSUEsTUFBSW9uQixjQUFjNXBCLFFBQU8sYUFBUCxJQUF3QixZQUFXO0FBQ25EMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsYUFBZCxFQUE2Qm1ILEtBQTdCLENBQW1DLElBQW5DLEVBQXlDM0UsU0FBekMsQ0FBUDtBQUE0RCxHQUg5RDs7QUFJQSxNQUFJMkIsY0FBY25FLFFBQU8sYUFBUCxJQUF3QixZQUFXO0FBQ25EMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsYUFBZCxFQUE2Qm1ILEtBQTdCLENBQW1DLElBQW5DLEVBQXlDM0UsU0FBekMsQ0FBUDtBQUE0RCxHQUg5RDs7QUFJQSxNQUFJcW5CLFdBQVc3cEIsUUFBTyxVQUFQLElBQXFCLFlBQVc7QUFDN0MwQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU83UixRQUFPLEtBQVAsRUFBYyxVQUFkLEVBQTBCbUgsS0FBMUIsQ0FBZ0MsSUFBaEMsRUFBc0MzRSxTQUF0QyxDQUFQO0FBQXlELEdBSDNEOztBQUlBLE1BQUkwQixhQUFhbEUsUUFBTyxZQUFQLElBQXVCLFlBQVc7QUFDakQwQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU83UixRQUFPLEtBQVAsRUFBYyxZQUFkLEVBQTRCbUgsS0FBNUIsQ0FBa0MsSUFBbEMsRUFBd0MzRSxTQUF4QyxDQUFQO0FBQTJELEdBSDdEOztBQUlBLE1BQUl5QixnQkFBZWpFLFFBQU8sY0FBUCxJQUF5QixZQUFXO0FBQ3JEMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsY0FBZCxFQUE4Qm1ILEtBQTlCLENBQW9DLElBQXBDLEVBQTBDM0UsU0FBMUMsQ0FBUDtBQUE2RCxHQUgvRDs7QUFJQSxNQUFJd0IsYUFBWWhFLFFBQU8sV0FBUCxJQUFzQixZQUFXO0FBQy9DMEIsV0FBTzZKLGtCQUFQLEVBQTJCLGtGQUEzQjtBQUNBN0osV0FBTyxDQUFDbVEsYUFBUixFQUF1QixrRkFBdkI7QUFDQSxXQUFPN1IsUUFBTyxLQUFQLEVBQWMsV0FBZCxFQUEyQm1ILEtBQTNCLENBQWlDLElBQWpDLEVBQXVDM0UsU0FBdkMsQ0FBUDtBQUEwRCxHQUg1RDs7QUFJQSxNQUFJc25CLGFBQWE5cEIsUUFBTyxZQUFQLElBQXVCLFlBQVc7QUFDakQwQixXQUFPNkosa0JBQVAsRUFBMkIsa0ZBQTNCO0FBQ0E3SixXQUFPLENBQUNtUSxhQUFSLEVBQXVCLGtGQUF2QjtBQUNBLFdBQU83UixRQUFPLEtBQVAsRUFBYyxZQUFkLEVBQTRCbUgsS0FBNUIsQ0FBa0MsSUFBbEMsRUFBd0MzRSxTQUF4QyxDQUFQO0FBQTJELEdBSDdEOztBQUlBLE1BQUl1bkIsZUFBZS9wQixRQUFPLGNBQVAsSUFBeUIsWUFBVztBQUNyRDBCLFdBQU82SixrQkFBUCxFQUEyQixrRkFBM0I7QUFDQTdKLFdBQU8sQ0FBQ21RLGFBQVIsRUFBdUIsa0ZBQXZCO0FBQ0EsV0FBTzdSLFFBQU8sS0FBUCxFQUFjLGNBQWQsRUFBOEJtSCxLQUE5QixDQUFvQyxJQUFwQyxFQUEwQzNFLFNBQTFDLENBQVA7QUFBNkQsR0FIL0Q7O0FBSUEsR0EzNUU4QixDQSs1RTlCOztBQUVBeEMsVUFBTyxLQUFQLElBQWdCZ29CLEdBQWhCO0FBRUEsTUFBSSxDQUFDaG9CLFFBQU8sb0JBQVAsQ0FBTCxFQUFtQ0EsUUFBTyxvQkFBUCxJQUErQixZQUFXO0FBQUVxRSxVQUFNLCtGQUFOO0FBQXdHLEdBQXBKO0FBQ25DLE1BQUksQ0FBQ3JFLFFBQU8sa0JBQVAsQ0FBTCxFQUFpQ0EsUUFBTyxrQkFBUCxJQUE2QixZQUFXO0FBQUVxRSxVQUFNLDZGQUFOO0FBQXNHLEdBQWhKO0FBQ2pDckUsVUFBTyxPQUFQLElBQWtCc0ksS0FBbEI7QUFDQXRJLFVBQU8sT0FBUCxJQUFrQjhJLEtBQWxCO0FBQ0EsTUFBSSxDQUFDOUksUUFBTyxVQUFQLENBQUwsRUFBeUJBLFFBQU8sVUFBUCxJQUFxQixZQUFXO0FBQUVxRSxVQUFNLHFGQUFOO0FBQThGLEdBQWhJO0FBQ3pCLE1BQUksQ0FBQ3JFLFFBQU8sVUFBUCxDQUFMLEVBQXlCQSxRQUFPLFVBQVAsSUFBcUIsWUFBVztBQUFFcUUsVUFBTSxxRkFBTjtBQUE4RixHQUFoSTtBQUN6QixNQUFJLENBQUNyRSxRQUFPLFVBQVAsQ0FBTCxFQUF5QkEsUUFBTyxVQUFQLElBQXFCLFlBQVc7QUFBRXFFLFVBQU0scUZBQU47QUFBOEYsR0FBaEk7QUFDekIsTUFBSSxDQUFDckUsUUFBTyxXQUFQLENBQUwsRUFBMEJBLFFBQU8sV0FBUCxJQUFzQixZQUFXO0FBQUVxRSxVQUFNLGlMQUFOO0FBQTBMLEdBQTdOO0FBQzFCLE1BQUksQ0FBQ3JFLFFBQU8sbUJBQVAsQ0FBTCxFQUFrQ0EsUUFBTyxtQkFBUCxJQUE4QixZQUFXO0FBQUVxRSxVQUFNLDhGQUFOO0FBQXVHLEdBQWxKO0FBQ2xDLE1BQUksQ0FBQ3JFLFFBQU8sZUFBUCxDQUFMLEVBQThCQSxRQUFPLGVBQVAsSUFBMEIsWUFBVztBQUFFcUUsVUFBTSwwRkFBTjtBQUFtRyxHQUExSTtBQUM5QixNQUFJLENBQUNyRSxRQUFPLGVBQVAsQ0FBTCxFQUE4QkEsUUFBTyxlQUFQLElBQTBCLFlBQVc7QUFBRXFFLFVBQU0sMEZBQU47QUFBbUcsR0FBMUk7QUFDOUIsTUFBSSxDQUFDckUsUUFBTyxtQkFBUCxDQUFMLEVBQWtDQSxRQUFPLG1CQUFQLElBQThCLFlBQVc7QUFBRXFFLFVBQU0sOEZBQU47QUFBdUcsR0FBbEo7QUFDbEMsTUFBSSxDQUFDckUsUUFBTyxjQUFQLENBQUwsRUFBNkJBLFFBQU8sY0FBUCxJQUF5QixZQUFXO0FBQUVxRSxVQUFNLHlGQUFOO0FBQWtHLEdBQXhJO0FBQzdCLE1BQUksQ0FBQ3JFLFFBQU8sbUJBQVAsQ0FBTCxFQUFrQ0EsUUFBTyxtQkFBUCxJQUE4QixZQUFXO0FBQUVxRSxVQUFNLDhGQUFOO0FBQXVHLEdBQWxKO0FBQ2xDLE1BQUksQ0FBQ3JFLFFBQU8sY0FBUCxDQUFMLEVBQTZCQSxRQUFPLGNBQVAsSUFBeUIsWUFBVztBQUFFcUUsVUFBTSx5RkFBTjtBQUFrRyxHQUF4STtBQUM3QixNQUFJLENBQUNyRSxRQUFPLGlCQUFQLENBQUwsRUFBZ0NBLFFBQU8saUJBQVAsSUFBNEIsWUFBVztBQUFFcUUsVUFBTSw0RkFBTjtBQUFxRyxHQUE5STtBQUNoQyxNQUFJLENBQUNyRSxRQUFPLGVBQVAsQ0FBTCxFQUE4QkEsUUFBTyxlQUFQLElBQTBCLFlBQVc7QUFBRXFFLFVBQU0sMEZBQU47QUFBbUcsR0FBMUk7QUFDOUIsTUFBSSxDQUFDckUsUUFBTyxlQUFQLENBQUwsRUFBOEJBLFFBQU8sZUFBUCxJQUEwQixZQUFXO0FBQUVxRSxVQUFNLDBGQUFOO0FBQW1HLEdBQTFJO0FBQzlCLE1BQUksQ0FBQ3JFLFFBQU8sa0JBQVAsQ0FBTCxFQUFpQ0EsUUFBTyxrQkFBUCxJQUE2QixZQUFXO0FBQUVxRSxVQUFNLDZGQUFOO0FBQXNHLEdBQWhKO0FBQ2pDLE1BQUksQ0FBQ3JFLFFBQU8sZUFBUCxDQUFMLEVBQThCQSxRQUFPLGVBQVAsSUFBMEIsWUFBVztBQUFFcUUsVUFBTSwwRkFBTjtBQUFtRyxHQUExSTtBQUM5QixNQUFJLENBQUNyRSxRQUFPLGVBQVAsQ0FBTCxFQUE4QkEsUUFBTyxlQUFQLElBQTBCLFlBQVc7QUFBRXFFLFVBQU0sMEZBQU47QUFBbUcsR0FBMUk7QUFDOUIsTUFBSSxDQUFDckUsUUFBTyxrQkFBUCxDQUFMLEVBQWlDQSxRQUFPLGtCQUFQLElBQTZCLFlBQVc7QUFBRXFFLFVBQU0sNkZBQU47QUFBc0csR0FBaEo7QUFDakMsTUFBSSxDQUFDckUsUUFBTyxjQUFQLENBQUwsRUFBNkJBLFFBQU8sY0FBUCxJQUF5QixZQUFXO0FBQUVxRSxVQUFNLHlGQUFOO0FBQWtHLEdBQXhJO0FBQzdCLE1BQUksQ0FBQ3JFLFFBQU8sWUFBUCxDQUFMLEVBQTJCQSxRQUFPLFlBQVAsSUFBdUIsWUFBVztBQUFFcUUsVUFBTSx1RkFBTjtBQUFnRyxHQUFwSTtBQUMzQixNQUFJLENBQUNyRSxRQUFPLGFBQVAsQ0FBTCxFQUE0QkEsUUFBTyxhQUFQLElBQXdCLFlBQVc7QUFBRXFFLFVBQU0sd0ZBQU47QUFBaUcsR0FBdEk7QUFDNUIsTUFBSSxDQUFDckUsUUFBTyxXQUFQLENBQUwsRUFBMEJBLFFBQU8sV0FBUCxJQUFzQixZQUFXO0FBQUVxRSxVQUFNLHNGQUFOO0FBQStGLEdBQWxJO0FBQzFCLE1BQUksQ0FBQ3JFLFFBQU8sY0FBUCxDQUFMLEVBQTZCQSxRQUFPLGNBQVAsSUFBeUIsWUFBVztBQUFFcUUsVUFBTSx5RkFBTjtBQUFrRyxHQUF4STtBQUM3QixNQUFJLENBQUNyRSxRQUFPLFdBQVAsQ0FBTCxFQUEwQkEsUUFBTyxXQUFQLElBQXNCLFlBQVc7QUFBRXFFLFVBQU0sc0ZBQU47QUFBK0YsR0FBbEk7QUFDMUIsTUFBSSxDQUFDckUsUUFBTyxjQUFQLENBQUwsRUFBNkJBLFFBQU8sY0FBUCxJQUF5QixZQUFXO0FBQUVxRSxVQUFNLHlGQUFOO0FBQWtHLEdBQXhJO0FBQzdCLE1BQUksQ0FBQ3JFLFFBQU8scUJBQVAsQ0FBTCxFQUFvQ0EsUUFBTyxxQkFBUCxJQUFnQyxZQUFXO0FBQUVxRSxVQUFNLGdHQUFOO0FBQXlHLEdBQXRKO0FBQ3BDLE1BQUksQ0FBQ3JFLFFBQU8sb0JBQVAsQ0FBTCxFQUFtQ0EsUUFBTyxvQkFBUCxJQUErQixZQUFXO0FBQUVxRSxVQUFNLCtGQUFOO0FBQXdHLEdBQXBKO0FBQ25DLE1BQUksQ0FBQ3JFLFFBQU8sb0JBQVAsQ0FBTCxFQUFtQ0EsUUFBTyxvQkFBUCxJQUErQixZQUFXO0FBQUVxRSxVQUFNLCtGQUFOO0FBQXdHLEdBQXBKO0FBQ25DLE1BQUksQ0FBQ3JFLFFBQU8sa0JBQVAsQ0FBTCxFQUFpQ0EsUUFBTyxrQkFBUCxJQUE2QixZQUFXO0FBQUVxRSxVQUFNLHdMQUFOO0FBQWlNLEdBQTNPO0FBQ2pDLE1BQUksQ0FBQ3JFLFFBQU8scUJBQVAsQ0FBTCxFQUFvQ0EsUUFBTyxxQkFBUCxJQUFnQyxZQUFXO0FBQUVxRSxVQUFNLDJMQUFOO0FBQW9NLEdBQWpQO0FBQ3BDLE1BQUksQ0FBQ3JFLFFBQU8sSUFBUCxDQUFMLEVBQW1CQSxRQUFPLElBQVAsSUFBZSxZQUFXO0FBQUVxRSxVQUFNLCtFQUFOO0FBQXdGLEdBQXBIO0FBQ25CLE1BQUksQ0FBQ3JFLFFBQU8saUJBQVAsQ0FBTCxFQUFnQ0EsUUFBTyxpQkFBUCxJQUE0QixZQUFXO0FBQUVxRSxVQUFNLHVMQUFOO0FBQWdNLEdBQXpPO0FBQ2hDLE1BQUksQ0FBQ3JFLFFBQU8sZUFBUCxDQUFMLEVBQThCQSxRQUFPLGVBQVAsSUFBMEIsWUFBVztBQUFFcUUsVUFBTSxxTEFBTjtBQUE4TCxHQUFyTztBQUM5QixNQUFJLENBQUNyRSxRQUFPLG1CQUFQLENBQUwsRUFBa0NBLFFBQU8sbUJBQVAsSUFBOEIsWUFBVztBQUFFcUUsVUFBTSx5TEFBTjtBQUFrTSxHQUE3TztBQUNsQyxNQUFJLENBQUNyRSxRQUFPLHdCQUFQLENBQUwsRUFBdUNBLFFBQU8sd0JBQVAsSUFBbUMsWUFBVztBQUFFcUUsVUFBTSw4TEFBTjtBQUF1TSxHQUF2UDtBQUN2QyxNQUFJLENBQUNyRSxRQUFPLG1CQUFQLENBQUwsRUFBa0NBLFFBQU8sbUJBQVAsSUFBOEIsWUFBVztBQUFFcUUsVUFBTSx5TEFBTjtBQUFrTSxHQUE3TztBQUNsQyxNQUFJLENBQUNyRSxRQUFPLGVBQVAsQ0FBTCxFQUE4QkEsUUFBTyxlQUFQLElBQTBCLFlBQVc7QUFBRXFFLFVBQU0scUxBQU47QUFBOEwsR0FBck87QUFDOUIsTUFBSSxDQUFDckUsUUFBTyxpQkFBUCxDQUFMLEVBQWdDQSxRQUFPLGlCQUFQLElBQTRCLFlBQVc7QUFBRXFFLFVBQU0sdUxBQU47QUFBZ00sR0FBek87QUFDaEMsTUFBSSxDQUFDckUsUUFBTyxXQUFQLENBQUwsRUFBMEJBLFFBQU8sV0FBUCxJQUFzQixZQUFXO0FBQUVxRSxVQUFNLGlMQUFOO0FBQTBMLEdBQTdOO0FBQzFCLE1BQUksQ0FBQ3JFLFFBQU8sSUFBUCxDQUFMLEVBQW1CQSxRQUFPLElBQVAsSUFBZSxZQUFXO0FBQUVxRSxVQUFNLCtFQUFOO0FBQXdGLEdBQXBIO0FBQ25CLE1BQUksQ0FBQ3JFLFFBQU8sYUFBUCxDQUFMLEVBQTRCQSxRQUFPLGFBQVAsSUFBd0IsWUFBVztBQUFFcUUsVUFBTSx3RkFBTjtBQUFpRyxHQUF0STtBQUM1QixNQUFJLENBQUNyRSxRQUFPLGNBQVAsQ0FBTCxFQUE2QkEsUUFBTyxjQUFQLElBQXlCLFlBQVc7QUFBRXFFLFVBQU0seUZBQU47QUFBa0csR0FBeEk7QUFDN0IsTUFBSSxDQUFDckUsUUFBTyxVQUFQLENBQUwsRUFBeUJBLFFBQU8sVUFBUCxJQUFxQixZQUFXO0FBQUVxRSxVQUFNLHFGQUFOO0FBQThGLEdBQWhJO0FBQ3pCLE1BQUksQ0FBQ3JFLFFBQU8sb0JBQVAsQ0FBTCxFQUFtQ0EsUUFBTyxvQkFBUCxJQUErQixZQUFXO0FBQUVxRSxVQUFNLCtGQUFOO0FBQXdHLEdBQXBKO0FBQ25DLE1BQUksQ0FBQ3JFLFFBQU8sdUJBQVAsQ0FBTCxFQUFzQ0EsUUFBTyx1QkFBUCxJQUFrQyxZQUFXO0FBQUVxRSxVQUFNLGtHQUFOO0FBQTJHLEdBQTFKO0FBQ3RDLE1BQUksQ0FBQ3JFLFFBQU8sUUFBUCxDQUFMLEVBQXVCQSxRQUFPLFFBQVAsSUFBbUIsWUFBVztBQUFFcUUsVUFBTSxtRkFBTjtBQUE0RixHQUE1SDtBQUN2QixNQUFJLENBQUNyRSxRQUFPLG1CQUFQLENBQUwsRUFBa0NBLFFBQU8sbUJBQVAsSUFBOEIsWUFBVztBQUFFcUUsVUFBTSw4RkFBTjtBQUF1RyxHQUFsSjtBQUNsQyxNQUFJLENBQUNyRSxRQUFPLHFCQUFQLENBQUwsRUFBb0NBLFFBQU8scUJBQVAsSUFBZ0MsWUFBVztBQUFFcUUsVUFBTSxnR0FBTjtBQUF5RyxHQUF0SjtBQUNwQyxNQUFJLENBQUNyRSxRQUFPLG1CQUFQLENBQUwsRUFBa0NBLFFBQU8sbUJBQVAsSUFBOEIsWUFBVztBQUFFcUUsVUFBTSw4RkFBTjtBQUF1RyxHQUFsSjtBQUNsQyxNQUFJLENBQUNyRSxRQUFPLGFBQVAsQ0FBTCxFQUE0QkEsUUFBTyxhQUFQLElBQXdCLFlBQVc7QUFBRXFFLFVBQU0sd0ZBQU47QUFBaUcsR0FBdEk7QUFDNUIsTUFBSSxDQUFDckUsUUFBTyxnQkFBUCxDQUFMLEVBQStCQSxRQUFPLGdCQUFQLElBQTJCLFlBQVc7QUFBRXFFLFVBQU0sMkZBQU47QUFBb0csR0FBNUk7QUFDL0IsTUFBSSxDQUFDckUsUUFBTyxnQkFBUCxDQUFMLEVBQStCQSxRQUFPLGdCQUFQLElBQTJCLFlBQVc7QUFBRXFFLFVBQU0sMkZBQU47QUFBb0csR0FBNUk7QUFDL0IsTUFBSSxDQUFDckUsUUFBTyxhQUFQLENBQUwsRUFBNEJBLFFBQU8sYUFBUCxJQUF3QixZQUFXO0FBQUVxRSxVQUFNLHdGQUFOO0FBQWlHLEdBQXRJO0FBQzVCLE1BQUksQ0FBQ3JFLFFBQU8sWUFBUCxDQUFMLEVBQTJCQSxRQUFPLFlBQVAsSUFBdUIsWUFBVztBQUFFcUUsVUFBTSx1RkFBTjtBQUFnRyxHQUFwSTtBQUMzQixNQUFJLENBQUNyRSxRQUFPLFNBQVAsQ0FBTCxFQUF3QkEsUUFBTyxTQUFQLElBQW9CLFlBQVc7QUFBRXFFLFVBQU0sb0ZBQU47QUFBNkYsR0FBOUg7QUFDeEIsTUFBSSxDQUFDckUsUUFBTyxvQkFBUCxDQUFMLEVBQW1DQSxRQUFPLG9CQUFQLElBQStCLFlBQVc7QUFBRXFFLFVBQU0sK0ZBQU47QUFBd0csR0FBcEo7QUFDbkMsTUFBSSxDQUFDckUsUUFBTyxvQkFBUCxDQUFMLEVBQW1DQSxRQUFPLG9CQUFQLElBQStCLFlBQVc7QUFBRXFFLFVBQU0sK0ZBQU47QUFBd0csR0FBcEo7QUFDbkMsTUFBSSxDQUFDckUsUUFBTyxtQkFBUCxDQUFMLEVBQWtDQSxRQUFPLG1CQUFQLElBQThCLFlBQVc7QUFBRXFFLFVBQU0sOEZBQU47QUFBdUcsR0FBbEo7QUFBbUosTUFBSSxDQUFDckUsUUFBTyxjQUFQLENBQUwsRUFBNkJncUIsT0FBT0MsY0FBUCxDQUFzQmpxQixPQUF0QixFQUE4QixjQUE5QixFQUE4QztBQUFFaWIsU0FBSyxlQUFXO0FBQUU1VyxZQUFNLHlGQUFOO0FBQWtHO0FBQXRILEdBQTlDO0FBQ2xOLE1BQUksQ0FBQ3JFLFFBQU8sYUFBUCxDQUFMLEVBQTRCZ3FCLE9BQU9DLGNBQVAsQ0FBc0JqcUIsT0FBdEIsRUFBOEIsYUFBOUIsRUFBNkM7QUFBRWliLFNBQUssZUFBVztBQUFFNVcsWUFBTSx3RkFBTjtBQUFpRztBQUFySCxHQUE3QztBQUM1QixNQUFJLENBQUNyRSxRQUFPLGNBQVAsQ0FBTCxFQUE2QmdxQixPQUFPQyxjQUFQLENBQXNCanFCLE9BQXRCLEVBQThCLGNBQTlCLEVBQThDO0FBQUVpYixTQUFLLGVBQVc7QUFBRTVXLFlBQU0seUZBQU47QUFBa0c7QUFBdEgsR0FBOUM7QUFDN0IsTUFBSSxDQUFDckUsUUFBTyxlQUFQLENBQUwsRUFBOEJncUIsT0FBT0MsY0FBUCxDQUFzQmpxQixPQUF0QixFQUE4QixlQUE5QixFQUErQztBQUFFaWIsU0FBSyxlQUFXO0FBQUU1VyxZQUFNLDBGQUFOO0FBQW1HO0FBQXZILEdBQS9DO0FBQzlCLE1BQUksQ0FBQ3JFLFFBQU8sWUFBUCxDQUFMLEVBQTJCZ3FCLE9BQU9DLGNBQVAsQ0FBc0JqcUIsT0FBdEIsRUFBOEIsWUFBOUIsRUFBNEM7QUFBRWliLFNBQUssZUFBVztBQUFFNVcsWUFBTSx1RkFBTjtBQUFnRztBQUFwSCxHQUE1QyxFQXArRUcsQ0F3K0U5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FyRSxVQUFPLE1BQVAsSUFBaUIsVUFBU2dHLElBQVQsRUFBZTtBQUM5QjtBQUNBO0FBQ0EsUUFBSWhHLFFBQU8sV0FBUCxDQUFKLEVBQXlCO0FBQ3ZCZ0csV0FBS2hHLE9BQUw7QUFDRCxLQUZELE1BRU87QUFDTDtBQUNBO0FBQ0EsVUFBSThaLE1BQU05WixRQUFPLHNCQUFQLENBQVY7O0FBQ0FBLGNBQU8sc0JBQVAsSUFBaUMsWUFBVztBQUMxQyxZQUFJOFosR0FBSixFQUFTQTtBQUNUOVQsYUFBS2hHLE9BQUw7QUFDRCxPQUhEO0FBSUQ7O0FBQ0QsV0FBT0EsT0FBUDtBQUNELEdBZkQ7QUFpQkE7Ozs7Ozs7QUFLQSxXQUFTK0IsVUFBVCxDQUFvQjNCLE1BQXBCLEVBQTRCO0FBQzFCLFNBQUtrSCxJQUFMLEdBQVksWUFBWjtBQUNBLFNBQUs0aUIsT0FBTCxHQUFlLGtDQUFrQzlwQixNQUFsQyxHQUEyQyxHQUExRDtBQUNBLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOztBQUFBO0FBQ0QyQixhQUFXNEUsU0FBWCxHQUF1QixJQUFJakcsS0FBSixFQUF2QjtBQUNBcUIsYUFBVzRFLFNBQVgsQ0FBcUJ3akIsV0FBckIsR0FBbUNwb0IsVUFBbkM7QUFFQSxNQUFJcW9CLGVBQUo7QUFDQSxNQUFJQyxhQUFhLEtBQWpCOztBQUVBN1UsMEJBQXdCLFNBQVM4VSxTQUFULEdBQXFCO0FBQzNDO0FBQ0EsUUFBSSxDQUFDdHFCLFFBQU8sV0FBUCxDQUFMLEVBQTBCdXFCO0FBQzFCLFFBQUksQ0FBQ3ZxQixRQUFPLFdBQVAsQ0FBTCxFQUEwQndWLHdCQUF3QjhVLFNBQXhCLENBSGlCLENBR2tCO0FBQzlELEdBSkQ7QUFVQTs7O0FBQ0EsV0FBU0MsR0FBVCxDQUFhcmpCLElBQWIsRUFBbUI7QUFDakJBLFdBQU9BLFFBQVFsSCxRQUFPLFdBQVAsQ0FBZjs7QUFFQSxRQUFJc1Ysa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQ3RTtBQUVBcUI7QUFFQSxRQUFJd0Qsa0JBQWtCLENBQXRCLEVBQXlCLE9BWFIsQ0FXZ0I7O0FBQ2pDLFFBQUl0VixRQUFPLFdBQVAsQ0FBSixFQUF5QixPQVpSLENBWWdCOztBQUVqQyxhQUFTd3FCLEtBQVQsR0FBaUI7QUFDZixVQUFJeHFCLFFBQU8sV0FBUCxDQUFKLEVBQXlCLE9BRFYsQ0FDa0I7O0FBQ2pDQSxjQUFPLFdBQVAsSUFBc0IsSUFBdEI7QUFFQSxVQUFJeUgsS0FBSixFQUFXO0FBRVh1SztBQUVBQztBQUVBLFVBQUlqUyxRQUFPLHNCQUFQLENBQUosRUFBb0NBLFFBQU8sc0JBQVA7QUFFcEMwQixhQUFPLENBQUMxQixRQUFPLE9BQVAsQ0FBUixFQUF5QiwwR0FBekI7QUFFQW1TO0FBQ0Q7O0FBRUQsUUFBSW5TLFFBQU8sV0FBUCxDQUFKLEVBQXlCO0FBQ3ZCQSxjQUFPLFdBQVAsRUFBb0IsWUFBcEI7O0FBQ0F5cUIsaUJBQVcsWUFBVztBQUNwQkEsbUJBQVcsWUFBVztBQUNwQnpxQixrQkFBTyxXQUFQLEVBQW9CLEVBQXBCO0FBQ0QsU0FGRCxFQUVHLENBRkg7QUFHQXdxQjtBQUNELE9BTEQsRUFLRyxDQUxIO0FBTUQsS0FSRCxNQVFPO0FBQ0xBO0FBQ0Q7O0FBQ0Q5WjtBQUNEOztBQUNEMVEsVUFBTyxLQUFQLElBQWdCdXFCLEdBQWhCOztBQUVBLFdBQVNHLHFCQUFULEdBQWlDO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJL21CLFFBQVEzRCxRQUFPLE9BQVAsQ0FBWjtBQUNBLFFBQUk0RCxXQUFXNUQsUUFBTyxVQUFQLENBQWY7QUFDQSxRQUFJMnFCLE1BQU0sS0FBVjs7QUFDQTNxQixZQUFPLE9BQVAsSUFBa0JBLFFBQU8sVUFBUCxJQUFxQixVQUFTMk8sQ0FBVCxFQUFZO0FBQ2pEZ2MsWUFBTSxJQUFOO0FBQ0QsS0FGRDs7QUFHQSxRQUFJO0FBQUU7QUFDSixVQUFJQyxRQUFRM08sbUJBQVo7QUFDQSxVQUFJMk8sS0FBSixFQUFXQSxNQUFNLENBQU47QUFDWixLQUhELENBR0UsT0FBTTliLENBQU4sRUFBUyxDQUFFOztBQUNiOU8sWUFBTyxPQUFQLElBQWtCMkQsS0FBbEI7QUFDQTNELFlBQU8sVUFBUCxJQUFxQjRELFFBQXJCOztBQUNBLFFBQUkrbUIsR0FBSixFQUFTO0FBQ1BqbEIsZUFBUyxnS0FBVDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU21sQixJQUFULENBQWN6cUIsTUFBZCxFQUFzQjBxQixRQUF0QixFQUFnQztBQUM5QkosNEJBRDhCLENBRzlCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUlJLFlBQVk5cUIsUUFBTyxlQUFQLENBQVosSUFBdUNJLFdBQVcsQ0FBdEQsRUFBeUQ7QUFDdkQ7QUFDRDs7QUFFRCxRQUFJSixRQUFPLGVBQVAsQ0FBSixFQUE2QjtBQUMzQjtBQUNBLFVBQUksQ0FBQzhxQixRQUFMLEVBQWU7QUFDYjlxQixnQkFBTzRELFFBQVAsQ0FBZ0IsVUFBVXhELE1BQVYsR0FBbUIsMExBQW5DO0FBQ0Q7QUFDRixLQUxELE1BS087QUFFTHFILGNBQVEsSUFBUjtBQUNBQyxtQkFBYXRILE1BQWI7QUFDQWtRLGlCQUFXOFosZUFBWDtBQUVBbFk7QUFFQSxVQUFJbFMsUUFBTyxRQUFQLENBQUosRUFBc0JBLFFBQU8sUUFBUCxFQUFpQkksTUFBakI7QUFDdkI7O0FBRUQsUUFBSUksbUJBQUosRUFBeUI7QUFDdkJLLGNBQVEsTUFBUixFQUFnQlQsTUFBaEI7QUFDRDs7QUFDREosWUFBTyxNQUFQLEVBQWVJLE1BQWYsRUFBdUIsSUFBSTJCLFVBQUosQ0FBZTNCLE1BQWYsQ0FBdkI7QUFDRDs7QUFDREosVUFBTyxNQUFQLElBQWlCNnFCLElBQWpCO0FBRUEsTUFBSUUsa0JBQWtCLEVBQXRCOztBQUVBLFdBQVMxbUIsS0FBVCxDQUFlMm1CLElBQWYsRUFBcUI7QUFDbkIsUUFBSWhyQixRQUFPLFNBQVAsQ0FBSixFQUF1QjtBQUNyQkEsY0FBTyxTQUFQLEVBQWtCZ3JCLElBQWxCO0FBQ0Q7O0FBRUQsUUFBSUEsU0FBU2xuQixTQUFiLEVBQXdCO0FBQ3RCOUQsY0FBTzJELEtBQVAsQ0FBYXFuQixJQUFiOztBQUNBaHJCLGNBQU80RCxRQUFQLENBQWdCb25CLElBQWhCOztBQUNBQSxhQUFPQyxLQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FBUDtBQUNELEtBSkQsTUFJTztBQUNMQSxhQUFPLEVBQVA7QUFDRDs7QUFFRHZqQixZQUFRLElBQVI7QUFDQUMsaUJBQWEsQ0FBYjtBQUVBLFFBQUl5akIsUUFBUSxFQUFaO0FBQ0EsUUFBSTdSLFNBQVMsV0FBVzBSLElBQVgsR0FBa0IsT0FBbEIsR0FBNEJqYyxZQUE1QixHQUEyQ29jLEtBQXhEOztBQUNBLFFBQUlKLGVBQUosRUFBcUI7QUFDbkJBLHNCQUFnQkssT0FBaEIsQ0FBd0IsVUFBU0MsU0FBVCxFQUFvQjtBQUMxQy9SLGlCQUFTK1IsVUFBVS9SLE1BQVYsRUFBa0IwUixJQUFsQixDQUFUO0FBQ0QsT0FGRDtBQUdEOztBQUNELFVBQU0xUixNQUFOO0FBQ0Q7O0FBQ0R0WixVQUFPLE9BQVAsSUFBa0JxRSxLQUFsQixDQWxxRjhCLENBb3FGOUI7O0FBRUEsTUFBSXJFLFFBQU8sU0FBUCxDQUFKLEVBQXVCO0FBQ3JCLFFBQUksT0FBT0EsUUFBTyxTQUFQLENBQVAsSUFBNEIsVUFBaEMsRUFBNENBLFFBQU8sU0FBUCxJQUFvQixDQUFDQSxRQUFPLFNBQVAsQ0FBRCxDQUFwQjs7QUFDNUMsV0FBT0EsUUFBTyxTQUFQLEVBQWtCMkIsTUFBbEIsR0FBMkIsQ0FBbEMsRUFBcUM7QUFDbkMzQixjQUFPLFNBQVAsRUFBa0JzckIsR0FBbEI7QUFDRDtBQUNGOztBQUdEdHJCLFVBQU8sZUFBUCxJQUEwQixJQUExQjtBQUVBdXFCLFFBaHJGOEIsQ0FrckY5QjtBQU1BOztBQU1FLFNBQU92cUIsT0FBUDtBQUNELENBL3JGRDs7QUFnc0ZBLElBQUksOEJBQU8wWCxPQUFQLE9BQW1CLFFBQW5CLElBQStCLDhCQUFPd0IsTUFBUCxPQUFrQixRQUFyRCxFQUNFQSxPQUFPeEIsT0FBUCxHQUFpQjFYLE1BQWpCLENBREYsS0FFSyxJQUFJLElBQUosRUFDSCxpQ0FBTyxFQUFQLG1DQUFXLFlBQVc7QUFBRSxTQUFPQSxNQUFQO0FBQWdCLENBQXhDO0FBQUEscUdBREcsS0FFQSxFOzs7Ozs7Ozs7Ozs7QUNwc0ZMLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLDhFIiwiZmlsZSI6ImlvdGEtcGljby1wb3ctd2FzbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vcG93LXdhc21cIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vcG93LXdhc21cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUG93V2FzbVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZXNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29ya1dhc21cIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NkVU5CUVd0REluMD0iLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZW1zY3JpcHRlblwiIC8+XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0Jhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgaW90YV9waWNvX3Bvd193YXNtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3dhc20vaW90YS1waWNvLXBvdy13YXNtXCIpKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIFdlYkFzc2VtYmx5LlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtXYXNtIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHdlYlBsYXRmb3JtIFByb3ZpZGVzIHBsYXRmb3JtIHNwZWNpZmljIGZ1bmN0aW9ucywgb3B0aW9uYWwgbW9zdGx5IHVzZWQgZm9yIHRlc3RpbmcuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIHRpbWUgZm9yIGF0dGFjaG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJQbGF0Zm9ybSwgdGltZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0aW1lU2VydmljZSk7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHdlYlBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJQbGF0Zm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIHdlYkFzc2VtYmx5VHlwZTogdHlwZW9mIFdlYkFzc2VtYmx5LFxyXG4gICAgICAgICAgICAgICAgd2FzbU1vZHVsZUxvYWRlcjogaW90YV9waWNvX3Bvd193YXNtXzEuZGVmYXVsdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViUGxhdGZvcm0gPSB3ZWJQbGF0Zm9ybTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGF3YWl0IHN1cGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fd2ViUGxhdGZvcm0ud2ViQXNzZW1ibHlUeXBlKSB8fCB0aGlzLl93ZWJQbGF0Zm9ybS53ZWJBc3NlbWJseVR5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk5vIFdlYkFzc2VtYmx5IHN1cHBvcnQgZGV0ZWN0ZWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHt9O1xyXG4gICAgICAgICAgICBtb2R1bGUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jY3VybFBvdyA9IG1vZHVsZS5jd3JhcChcImNjdXJsX3Bvd1wiLCBcInN0cmluZ1wiLCBbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2ViUGxhdGZvcm0ud2FzbU1vZHVsZUxvYWRlcihtb2R1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW50aWFsaXppbmcgdGhlIFdlYkFzc2VtYmx5IE1vZHVsZVwiLCB1bmRlZmluZWQsIGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NjdXJsUG93KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXZWJBc3NlbWJseSBub3QgbG9hZGVkLCBoYXZlIHlvdSBjYWxsZWQgaW5pdGlhbGl6ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY2N1cmxQb3codHJ5dGVzLnRvU3RyaW5nKCksIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya1dhc20gPSBQcm9vZk9mV29ya1dhc207XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdFhZWE50TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwzQnliMjltVDJaWGIzSnJWMkZ6YlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc2IwTkJRVzlETzBGQlEzQkRMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNNRVZCUVhWRk8wRkJRM1pGTEhkR1FVRnhSanRCUVVOeVJpdzJSRUZCTUVRN1FVRkRNVVFzWVVGQllUdEJRVU5pTEc5R1FVRjVSRHRCUVVkNlJEczdSMEZGUnp0QlFVTklMSEZDUVVFMlFpeFRRVUZSTEdsRFFVRmxPMGxCVDJoRU96czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxGZEJRVEJDTEVWQlFVVXNWMEZCTUVJN1VVRkRPVVFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlc1Q0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3V1VGRGJrTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSenRuUWtGRGFFSXNaVUZCWlN4RlFVRkZMRTlCUVU4c1YwRkJWenRuUWtGRGJrTXNaMEpCUVdkQ0xFVkJRVVVzTkVKQlFXVTdZVUZEY0VNc1EwRkJRenRUUVVOTU8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1EwRkJRenRUUVVOdVF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVN1VVRkRia0lzVFVGQlRTeExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRla0lzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCVHl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlF5OURMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhYUVVGWExFVkJRVVU3WjBKQlF6bEhMRTFCUVUwc1EwRkJReXhKUVVGSkxIbENRVUZYTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6bEVPMWxCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVkVzUlVGQlJTeERRVUZETzFsQlJYWkNMRTFCUVUwc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SFFVRkhMRVZCUVVVN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpORkxFOUJRVThzUlVGQlJTeERRVUZETzFsQlEyUXNRMEZCUXl4RFFVRkRPMWxCUlVZc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUXpsRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdaMEpCUTFZc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4M1JFRkJkMFFzUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOeVJ6dFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRmpMRVZCUVVVc2EwSkJRVEJDTzFGQlF6ZEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRNME1zU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlFUVVGdlJDeERRVUZETEVOQlFVTTdZVUZETDBVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTjBReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzJGQlEzaEZPMWxCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTjRSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzJGQlF5OUVPMWxCUlVRc1NVRkJTVHRuUWtGRFFTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4clFrRkJhMElzUTBGQlF5eERRVUZETzJkQ1FVVnlSU3hQUVVGUExFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM1JETzFsQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1owSkJRMVlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTJZN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdRMEZEU2p0QlFTOUZSQ3d3UTBFclJVTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgTW9kdWxlID0gZnVuY3Rpb24oTW9kdWxlKSB7XHJcbiAgTW9kdWxlID0gTW9kdWxlIHx8IHt9O1xyXG5cclxuLy8gVGhlIE1vZHVsZSBvYmplY3Q6IE91ciBpbnRlcmZhY2UgdG8gdGhlIG91dHNpZGUgd29ybGQuIFdlIGltcG9ydFxyXG4vLyBhbmQgZXhwb3J0IHZhbHVlcyBvbiBpdC4gVGhlcmUgYXJlIHZhcmlvdXMgd2F5cyBNb2R1bGUgY2FuIGJlIHVzZWQ6XHJcbi8vIDEuIE5vdCBkZWZpbmVkLiBXZSBjcmVhdGUgaXQgaGVyZVxyXG4vLyAyLiBBIGZ1bmN0aW9uIHBhcmFtZXRlciwgZnVuY3Rpb24oTW9kdWxlKSB7IC4uZ2VuZXJhdGVkIGNvZGUuLiB9XHJcbi8vIDMuIHByZS1ydW4gYXBwZW5kZWQgaXQsIHZhciBNb2R1bGUgPSB7fTsgLi5nZW5lcmF0ZWQgY29kZS4uXHJcbi8vIDQuIEV4dGVybmFsIHNjcmlwdCB0YWcgZGVmaW5lcyB2YXIgTW9kdWxlLlxyXG4vLyBXZSBuZWVkIHRvIGNoZWNrIGlmIE1vZHVsZSBhbHJlYWR5IGV4aXN0cyAoZS5nLiBjYXNlIDMgYWJvdmUpLlxyXG4vLyBTdWJzdGl0dXRpb24gd2lsbCBiZSByZXBsYWNlZCB3aXRoIGFjdHVhbCBjb2RlIG9uIGxhdGVyIHN0YWdlIG9mIHRoZSBidWlsZCxcclxuLy8gdGhpcyB3YXkgQ2xvc3VyZSBDb21waWxlciB3aWxsIG5vdCBtYW5nbGUgaXQgKGUuZy4gY2FzZSA0LiBhYm92ZSkuXHJcbi8vIE5vdGUgdGhhdCBpZiB5b3Ugd2FudCB0byBydW4gY2xvc3VyZSwgYW5kIGFsc28gdG8gdXNlIE1vZHVsZVxyXG4vLyBhZnRlciB0aGUgZ2VuZXJhdGVkIGNvZGUsIHlvdSB3aWxsIG5lZWQgdG8gZGVmaW5lICAgdmFyIE1vZHVsZSA9IHt9O1xyXG4vLyBiZWZvcmUgdGhlIGNvZGUuIFRoZW4gdGhhdCBvYmplY3Qgd2lsbCBiZSB1c2VkIGluIHRoZSBjb2RlLCBhbmQgeW91XHJcbi8vIGNhbiBjb250aW51ZSB0byB1c2UgTW9kdWxlIGFmdGVyd2FyZHMgYXMgd2VsbC5cclxudmFyIE1vZHVsZSA9IHR5cGVvZiBNb2R1bGUgIT09ICd1bmRlZmluZWQnID8gTW9kdWxlIDoge307XHJcblxyXG4vLyAtLXByZS1qc2VzIGFyZSBlbWl0dGVkIGFmdGVyIHRoZSBNb2R1bGUgaW50ZWdyYXRpb24gY29kZSwgc28gdGhhdCB0aGV5IGNhblxyXG4vLyByZWZlciB0byBNb2R1bGUgKGlmIHRoZXkgY2hvb3NlOyB0aGV5IGNhbiBhbHNvIGRlZmluZSBNb2R1bGUpXHJcbi8vIHt7UFJFX0pTRVN9fVxyXG5cclxuLy8gU29tZXRpbWVzIGFuIGV4aXN0aW5nIE1vZHVsZSBvYmplY3QgZXhpc3RzIHdpdGggcHJvcGVydGllc1xyXG4vLyBtZWFudCB0byBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgbW9kdWxlIGZ1bmN0aW9uYWxpdHkuIEhlcmVcclxuLy8gd2UgY29sbGVjdCB0aG9zZSBwcm9wZXJ0aWVzIGFuZCByZWFwcGx5IF9hZnRlcl8gd2UgY29uZmlndXJlXHJcbi8vIHRoZSBjdXJyZW50IGVudmlyb25tZW50J3MgZGVmYXVsdHMgdG8gYXZvaWQgaGF2aW5nIHRvIGJlIHNvXHJcbi8vIGRlZmVuc2l2ZSBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXHJcbnZhciBtb2R1bGVPdmVycmlkZXMgPSB7fTtcclxudmFyIGtleTtcclxuZm9yIChrZXkgaW4gTW9kdWxlKSB7XHJcbiAgaWYgKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICBtb2R1bGVPdmVycmlkZXNba2V5XSA9IE1vZHVsZVtrZXldO1xyXG4gIH1cclxufVxyXG5cclxuTW9kdWxlWydhcmd1bWVudHMnXSA9IFtdO1xyXG5Nb2R1bGVbJ3RoaXNQcm9ncmFtJ10gPSAnLi90aGlzLnByb2dyYW0nO1xyXG5Nb2R1bGVbJ3F1aXQnXSA9IGZ1bmN0aW9uKHN0YXR1cywgdG9UaHJvdykge1xyXG4gIHRocm93IHRvVGhyb3c7XHJcbn07XHJcbk1vZHVsZVsncHJlUnVuJ10gPSBbXTtcclxuTW9kdWxlWydwb3N0UnVuJ10gPSBbXTtcclxuXHJcbi8vIFRoZSBlbnZpcm9ubWVudCBzZXR1cCBjb2RlIGJlbG93IGlzIGN1c3RvbWl6ZWQgdG8gdXNlIE1vZHVsZS5cclxuLy8gKioqIEVudmlyb25tZW50IHNldHVwIGNvZGUgKioqXHJcbnZhciBFTlZJUk9OTUVOVF9JU19XRUIgPSBmYWxzZTtcclxudmFyIEVOVklST05NRU5UX0lTX1dPUktFUiA9IGZhbHNlO1xyXG52YXIgRU5WSVJPTk1FTlRfSVNfTk9ERSA9IGZhbHNlO1xyXG52YXIgRU5WSVJPTk1FTlRfSVNfU0hFTEwgPSBmYWxzZTtcclxuXHJcbi8vIFRocmVlIGNvbmZpZ3VyYXRpb25zIHdlIGNhbiBiZSBydW5uaW5nIGluOlxyXG4vLyAxKSBXZSBjb3VsZCBiZSB0aGUgYXBwbGljYXRpb24gbWFpbigpIHRocmVhZCBydW5uaW5nIGluIHRoZSBtYWluIEpTIFVJIHRocmVhZC4gKEVOVklST05NRU5UX0lTX1dPUktFUiA9PSBmYWxzZSBhbmQgRU5WSVJPTk1FTlRfSVNfUFRIUkVBRCA9PSBmYWxzZSlcclxuLy8gMikgV2UgY291bGQgYmUgdGhlIGFwcGxpY2F0aW9uIG1haW4oKSB0aHJlYWQgcHJveGllZCB0byB3b3JrZXIuICh3aXRoIEVtc2NyaXB0ZW4gLXMgUFJPWFlfVE9fV09SS0VSPTEpIChFTlZJUk9OTUVOVF9JU19XT1JLRVIgPT0gdHJ1ZSwgRU5WSVJPTk1FTlRfSVNfUFRIUkVBRCA9PSBmYWxzZSlcclxuLy8gMykgV2UgY291bGQgYmUgYW4gYXBwbGljYXRpb24gcHRocmVhZCBydW5uaW5nIGluIGEgd29ya2VyLiAoRU5WSVJPTk1FTlRfSVNfV09SS0VSID09IHRydWUgYW5kIEVOVklST05NRU5UX0lTX1BUSFJFQUQgPT0gdHJ1ZSlcclxuXHJcbmlmIChNb2R1bGVbJ0VOVklST05NRU5UJ10pIHtcclxuICBpZiAoTW9kdWxlWydFTlZJUk9OTUVOVCddID09PSAnV0VCJykge1xyXG4gICAgRU5WSVJPTk1FTlRfSVNfV0VCID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKE1vZHVsZVsnRU5WSVJPTk1FTlQnXSA9PT0gJ1dPUktFUicpIHtcclxuICAgIEVOVklST05NRU5UX0lTX1dPUktFUiA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChNb2R1bGVbJ0VOVklST05NRU5UJ10gPT09ICdOT0RFJykge1xyXG4gICAgRU5WSVJPTk1FTlRfSVNfTk9ERSA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChNb2R1bGVbJ0VOVklST05NRU5UJ10gPT09ICdTSEVMTCcpIHtcclxuICAgIEVOVklST05NRU5UX0lTX1NIRUxMID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNb2R1bGVbXFwnRU5WSVJPTk1FTlRcXCddIHZhbHVlIGlzIG5vdCB2YWxpZC4gbXVzdCBiZSBvbmUgb2Y6IFdFQnxXT1JLRVJ8Tk9ERXxTSEVMTC4nKTtcclxuICB9XHJcbn0gZWxzZSB7XHJcbiAgRU5WSVJPTk1FTlRfSVNfV0VCID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCc7XHJcbiAgRU5WSVJPTk1FTlRfSVNfV09SS0VSID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbic7XHJcbiAgRU5WSVJPTk1FTlRfSVNfTk9ERSA9IHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhRU5WSVJPTk1FTlRfSVNfV0VCICYmICFFTlZJUk9OTUVOVF9JU19XT1JLRVI7XHJcbiAgRU5WSVJPTk1FTlRfSVNfU0hFTEwgPSAhRU5WSVJPTk1FTlRfSVNfV0VCICYmICFFTlZJUk9OTUVOVF9JU19OT0RFICYmICFFTlZJUk9OTUVOVF9JU19XT1JLRVI7XHJcbn1cclxuXHJcblxyXG5pZiAoRU5WSVJPTk1FTlRfSVNfTk9ERSkge1xyXG4gIC8vIEV4cG9zZSBmdW5jdGlvbmFsaXR5IGluIHRoZSBzYW1lIHNpbXBsZSB3YXkgdGhhdCB0aGUgc2hlbGxzIHdvcmtcclxuICAvLyBOb3RlIHRoYXQgd2UgcG9sbHV0ZSB0aGUgZ2xvYmFsIG5hbWVzcGFjZSBoZXJlLCBvdGhlcndpc2Ugd2UgYnJlYWsgaW4gbm9kZVxyXG4gIHZhciBub2RlRlM7XHJcbiAgdmFyIG5vZGVQYXRoO1xyXG5cclxuICBNb2R1bGVbJ3JlYWQnXSA9IGZ1bmN0aW9uIHNoZWxsX3JlYWQoZmlsZW5hbWUsIGJpbmFyeSkge1xyXG4gICAgdmFyIHJldDtcclxuICAgIHJldCA9IHRyeVBhcnNlQXNEYXRhVVJJKGZpbGVuYW1lKTtcclxuICAgIGlmICghcmV0KSB7XHJcbiAgICAgIGlmICghbm9kZUZTKSBub2RlRlMgPSByZXF1aXJlKCdmcycpO1xyXG4gICAgICBpZiAoIW5vZGVQYXRoKSBub2RlUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuICAgICAgZmlsZW5hbWUgPSBub2RlUGF0aFsnbm9ybWFsaXplJ10oZmlsZW5hbWUpO1xyXG4gICAgICByZXQgPSBub2RlRlNbJ3JlYWRGaWxlU3luYyddKGZpbGVuYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiaW5hcnkgPyByZXQgOiByZXQudG9TdHJpbmcoKTtcclxuICB9O1xyXG5cclxuICBNb2R1bGVbJ3JlYWRCaW5hcnknXSA9IGZ1bmN0aW9uIHJlYWRCaW5hcnkoZmlsZW5hbWUpIHtcclxuICAgIHZhciByZXQgPSBNb2R1bGVbJ3JlYWQnXShmaWxlbmFtZSwgdHJ1ZSk7XHJcbiAgICBpZiAoIXJldC5idWZmZXIpIHtcclxuICAgICAgcmV0ID0gbmV3IFVpbnQ4QXJyYXkocmV0KTtcclxuICAgIH1cclxuICAgIGFzc2VydChyZXQuYnVmZmVyKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHByb2Nlc3NbJ2FyZ3YnXS5sZW5ndGggPiAxKSB7XHJcbiAgICBNb2R1bGVbJ3RoaXNQcm9ncmFtJ10gPSBwcm9jZXNzWydhcmd2J11bMV0ucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xyXG4gIH1cclxuXHJcbiAgTW9kdWxlWydhcmd1bWVudHMnXSA9IHByb2Nlc3NbJ2FyZ3YnXS5zbGljZSgyKTtcclxuXHJcbiAgLy8gTU9EVUxBUklaRSB3aWxsIGV4cG9ydCB0aGUgbW9kdWxlIGluIHRoZSBwcm9wZXIgcGxhY2Ugb3V0c2lkZSwgd2UgZG9uJ3QgbmVlZCB0byBleHBvcnQgaGVyZVxyXG5cclxuICBwcm9jZXNzWydvbiddKCd1bmNhdWdodEV4Y2VwdGlvbicsIGZ1bmN0aW9uKGV4KSB7XHJcbiAgICAvLyBzdXBwcmVzcyBFeGl0U3RhdHVzIGV4Y2VwdGlvbnMgZnJvbSBzaG93aW5nIGFuIGVycm9yXHJcbiAgICBpZiAoIShleCBpbnN0YW5jZW9mIEV4aXRTdGF0dXMpKSB7XHJcbiAgICAgIHRocm93IGV4O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIEN1cnJlbnRseSBub2RlIHdpbGwgc3dhbGxvdyB1bmhhbmRsZWQgcmVqZWN0aW9ucywgYnV0IHRoaXMgYmVoYXZpb3IgaXNcclxuICAvLyBkZXByZWNhdGVkLCBhbmQgaW4gdGhlIGZ1dHVyZSBpdCB3aWxsIGV4aXQgd2l0aCBlcnJvciBzdGF0dXMuXHJcbiAgcHJvY2Vzc1snb24nXSgndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24ocmVhc29uLCBwKSB7XHJcbiAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ25vZGUuanMgZXhpdGluZyBkdWUgdG8gdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJyk7XHJcbiAgICBwcm9jZXNzWydleGl0J10oMSk7XHJcbiAgfSk7XHJcblxyXG4gIE1vZHVsZVsnaW5zcGVjdCddID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ1tFbXNjcmlwdGVuIE1vZHVsZSBvYmplY3RdJzsgfTtcclxufVxyXG5lbHNlIGlmIChFTlZJUk9OTUVOVF9JU19TSEVMTCkge1xyXG4gIGlmICh0eXBlb2YgcmVhZCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgTW9kdWxlWydyZWFkJ10gPSBmdW5jdGlvbiBzaGVsbF9yZWFkKGYpIHtcclxuICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSShmKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gaW50QXJyYXlUb1N0cmluZyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVhZChmKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBNb2R1bGVbJ3JlYWRCaW5hcnknXSA9IGZ1bmN0aW9uIHJlYWRCaW5hcnkoZikge1xyXG4gICAgdmFyIGRhdGE7XHJcbiAgICBkYXRhID0gdHJ5UGFyc2VBc0RhdGFVUkkoZik7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcmVhZGJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVhZGJ1ZmZlcihmKSk7XHJcbiAgICB9XHJcbiAgICBkYXRhID0gcmVhZChmLCAnYmluYXJ5Jyk7XHJcbiAgICBhc3NlcnQodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIGlmICh0eXBlb2Ygc2NyaXB0QXJncyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgTW9kdWxlWydhcmd1bWVudHMnXSA9IHNjcmlwdEFyZ3M7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICBNb2R1bGVbJ2FyZ3VtZW50cyddID0gYXJndW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBxdWl0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBNb2R1bGVbJ3F1aXQnXSA9IGZ1bmN0aW9uKHN0YXR1cywgdG9UaHJvdykge1xyXG4gICAgICBxdWl0KHN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmVsc2UgaWYgKEVOVklST05NRU5UX0lTX1dFQiB8fCBFTlZJUk9OTUVOVF9JU19XT1JLRVIpIHtcclxuICBNb2R1bGVbJ3JlYWQnXSA9IGZ1bmN0aW9uIHNoZWxsX3JlYWQodXJsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcclxuICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICAgIHJldHVybiB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHZhciBkYXRhID0gdHJ5UGFyc2VBc0RhdGFVUkkodXJsKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gaW50QXJyYXlUb1N0cmluZyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKEVOVklST05NRU5UX0lTX1dPUktFUikge1xyXG4gICAgTW9kdWxlWydyZWFkQmluYXJ5J10gPSBmdW5jdGlvbiByZWFkQmluYXJ5KHVybCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCBmYWxzZSk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHZhciBkYXRhID0gdHJ5UGFyc2VBc0RhdGFVUkkodXJsKTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIE1vZHVsZVsncmVhZEFzeW5jJ10gPSBmdW5jdGlvbiByZWFkQXN5bmModXJsLCBvbmxvYWQsIG9uZXJyb3IpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24geGhyX29ubG9hZCgpIHtcclxuICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwIHx8ICh4aHIuc3RhdHVzID09IDAgJiYgeGhyLnJlc3BvbnNlKSkgeyAvLyBmaWxlIFVSTHMgY2FuIHJldHVybiAwXHJcbiAgICAgICAgb25sb2FkKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBkYXRhID0gdHJ5UGFyc2VBc0RhdGFVUkkodXJsKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBvbmxvYWQoZGF0YS5idWZmZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBvbmVycm9yKCk7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9uZXJyb3IgPSBvbmVycm9yO1xyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBhcmd1bWVudHMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIE1vZHVsZVsnYXJndW1lbnRzJ10gPSBhcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBNb2R1bGVbJ3NldFdpbmRvd1RpdGxlJ10gPSBmdW5jdGlvbih0aXRsZSkgeyBkb2N1bWVudC50aXRsZSA9IHRpdGxlIH07XHJcbn1cclxuZWxzZSB7XHJcbiAgLy8gVW5yZWFjaGFibGUgYmVjYXVzZSBTSEVMTCBpcyBkZXBlbmRlbnQgb24gdGhlIG90aGVyc1xyXG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBydW50aW1lIGVudmlyb25tZW50Jyk7XHJcbn1cclxuXHJcbi8vIGNvbnNvbGUubG9nIGlzIGNoZWNrZWQgZmlyc3QsIGFzICdwcmludCcgb24gdGhlIHdlYiB3aWxsIG9wZW4gYSBwcmludCBkaWFsb2d1ZVxyXG4vLyBwcmludEVyciBpcyBwcmVmZXJhYmxlIHRvIGNvbnNvbGUud2FybiAod29ya3MgYmV0dGVyIGluIHNoZWxscylcclxuTW9kdWxlWydwcmludCddID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnID8gY29uc29sZS5sb2cgOiAodHlwZW9mIHByaW50ICE9PSAndW5kZWZpbmVkJyA/IHByaW50IDogbnVsbCk7XHJcbk1vZHVsZVsncHJpbnRFcnInXSA9IHR5cGVvZiBwcmludEVyciAhPT0gJ3VuZGVmaW5lZCcgPyBwcmludEVyciA6ICgodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybikgfHwgTW9kdWxlWydwcmludCddKTtcclxuXHJcbi8vICoqKiBFbnZpcm9ubWVudCBzZXR1cCBjb2RlICoqKlxyXG5cclxuLy8gQ2xvc3VyZSBoZWxwZXJzXHJcbk1vZHVsZS5wcmludCA9IE1vZHVsZVsncHJpbnQnXTtcclxuTW9kdWxlLnByaW50RXJyID0gTW9kdWxlWydwcmludEVyciddO1xyXG5cclxuLy8gTWVyZ2UgYmFjayBpbiB0aGUgb3ZlcnJpZGVzXHJcbmZvciAoa2V5IGluIG1vZHVsZU92ZXJyaWRlcykge1xyXG4gIGlmIChtb2R1bGVPdmVycmlkZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgTW9kdWxlW2tleV0gPSBtb2R1bGVPdmVycmlkZXNba2V5XTtcclxuICB9XHJcbn1cclxuLy8gRnJlZSB0aGUgb2JqZWN0IGhpZXJhcmNoeSBjb250YWluZWQgaW4gdGhlIG92ZXJyaWRlcywgdGhpcyBsZXRzIHRoZSBHQ1xyXG4vLyByZWNsYWltIGRhdGEgdXNlZCBlLmcuIGluIG1lbW9yeUluaXRpYWxpemVyUmVxdWVzdCwgd2hpY2ggaXMgYSBsYXJnZSB0eXBlZCBhcnJheS5cclxubW9kdWxlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vLyB7e1BSRUFNQkxFX0FERElUSU9OU319XHJcblxyXG52YXIgU1RBQ0tfQUxJR04gPSAxNjtcclxuXHJcbi8vIHN0YWNrIG1hbmFnZW1lbnQsIGFuZCBvdGhlciBmdW5jdGlvbmFsaXR5IHRoYXQgaXMgcHJvdmlkZWQgYnkgdGhlIGNvbXBpbGVkIGNvZGUsXHJcbi8vIHNob3VsZCBub3QgYmUgdXNlZCBiZWZvcmUgaXQgaXMgcmVhZHlcclxuc3RhY2tTYXZlID0gc3RhY2tSZXN0b3JlID0gc3RhY2tBbGxvYyA9IHNldFRlbXBSZXQwID0gZ2V0VGVtcFJldDAgPSBmdW5jdGlvbigpIHtcclxuICBhYm9ydCgnY2Fubm90IHVzZSB0aGUgc3RhY2sgYmVmb3JlIGNvbXBpbGVkIGNvZGUgaXMgcmVhZHkgdG8gcnVuLCBhbmQgaGFzIHByb3ZpZGVkIHN0YWNrIGFjY2VzcycpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RhdGljQWxsb2Moc2l6ZSkge1xyXG4gIGFzc2VydCghc3RhdGljU2VhbGVkKTtcclxuICB2YXIgcmV0ID0gU1RBVElDVE9QO1xyXG4gIFNUQVRJQ1RPUCA9IChTVEFUSUNUT1AgKyBzaXplICsgMTUpICYgLTE2O1xyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR5bmFtaWNBbGxvYyhzaXplKSB7XHJcbiAgYXNzZXJ0KERZTkFNSUNUT1BfUFRSKTtcclxuICB2YXIgcmV0ID0gSEVBUDMyW0RZTkFNSUNUT1BfUFRSPj4yXTtcclxuICB2YXIgZW5kID0gKHJldCArIHNpemUgKyAxNSkgJiAtMTY7XHJcbiAgSEVBUDMyW0RZTkFNSUNUT1BfUFRSPj4yXSA9IGVuZDtcclxuICBpZiAoZW5kID49IFRPVEFMX01FTU9SWSkge1xyXG4gICAgdmFyIHN1Y2Nlc3MgPSBlbmxhcmdlTWVtb3J5KCk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgSEVBUDMyW0RZTkFNSUNUT1BfUFRSPj4yXSA9IHJldDtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsaWduTWVtb3J5KHNpemUsIGZhY3Rvcikge1xyXG4gIGlmICghZmFjdG9yKSBmYWN0b3IgPSBTVEFDS19BTElHTjsgLy8gc3RhY2sgYWxpZ25tZW50ICgxNi1ieXRlKSBieSBkZWZhdWx0XHJcbiAgdmFyIHJldCA9IHNpemUgPSBNYXRoLmNlaWwoc2l6ZSAvIGZhY3RvcikgKiBmYWN0b3I7XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmF0aXZlVHlwZVNpemUodHlwZSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnaTEnOiBjYXNlICdpOCc6IHJldHVybiAxO1xyXG4gICAgY2FzZSAnaTE2JzogcmV0dXJuIDI7XHJcbiAgICBjYXNlICdpMzInOiByZXR1cm4gNDtcclxuICAgIGNhc2UgJ2k2NCc6IHJldHVybiA4O1xyXG4gICAgY2FzZSAnZmxvYXQnOiByZXR1cm4gNDtcclxuICAgIGNhc2UgJ2RvdWJsZSc6IHJldHVybiA4O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBpZiAodHlwZVt0eXBlLmxlbmd0aC0xXSA9PT0gJyonKSB7XHJcbiAgICAgICAgcmV0dXJuIDQ7IC8vIEEgcG9pbnRlclxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVbMF0gPT09ICdpJykge1xyXG4gICAgICAgIHZhciBiaXRzID0gcGFyc2VJbnQodHlwZS5zdWJzdHIoMSkpO1xyXG4gICAgICAgIGFzc2VydChiaXRzICUgOCA9PT0gMCk7XHJcbiAgICAgICAgcmV0dXJuIGJpdHMgLyA4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3YXJuT25jZSh0ZXh0KSB7XHJcbiAgaWYgKCF3YXJuT25jZS5zaG93bikgd2Fybk9uY2Uuc2hvd24gPSB7fTtcclxuICBpZiAoIXdhcm5PbmNlLnNob3duW3RleHRdKSB7XHJcbiAgICB3YXJuT25jZS5zaG93blt0ZXh0XSA9IDE7XHJcbiAgICBNb2R1bGUucHJpbnRFcnIodGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbnZhciBmdW5jdGlvblBvaW50ZXJzID0gbmV3IEFycmF5KDApO1xyXG5cclxuZnVuY3Rpb24gYWRkRnVuY3Rpb24oZnVuYykge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25Qb2ludGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKCFmdW5jdGlvblBvaW50ZXJzW2ldKSB7XHJcbiAgICAgIGZ1bmN0aW9uUG9pbnRlcnNbaV0gPSBmdW5jO1xyXG4gICAgICByZXR1cm4gMSArIGk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRocm93ICdGaW5pc2hlZCB1cCBhbGwgcmVzZXJ2ZWQgZnVuY3Rpb24gcG9pbnRlcnMuIFVzZSBhIGhpZ2hlciB2YWx1ZSBmb3IgUkVTRVJWRURfRlVOQ1RJT05fUE9JTlRFUlMuJztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaW5kZXgpIHtcclxuICBmdW5jdGlvblBvaW50ZXJzW2luZGV4LTFdID0gbnVsbDtcclxufVxyXG5cclxudmFyIGZ1bmNXcmFwcGVycyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0RnVuY1dyYXBwZXIoZnVuYywgc2lnKSB7XHJcbiAgaWYgKCFmdW5jKSByZXR1cm47IC8vIG9uIG51bGwgcG9pbnRlciwgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGFzc2VydChzaWcpO1xyXG4gIGlmICghZnVuY1dyYXBwZXJzW3NpZ10pIHtcclxuICAgIGZ1bmNXcmFwcGVyc1tzaWddID0ge307XHJcbiAgfVxyXG4gIHZhciBzaWdDYWNoZSA9IGZ1bmNXcmFwcGVyc1tzaWddO1xyXG4gIGlmICghc2lnQ2FjaGVbZnVuY10pIHtcclxuICAgIC8vIG9wdGltaXplIGF3YXkgYXJndW1lbnRzIHVzYWdlIGluIGNvbW1vbiBjYXNlc1xyXG4gICAgaWYgKHNpZy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgc2lnQ2FjaGVbZnVuY10gPSBmdW5jdGlvbiBkeW5DYWxsX3dyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGR5bkNhbGwoc2lnLCBmdW5jKTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAoc2lnLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBzaWdDYWNoZVtmdW5jXSA9IGZ1bmN0aW9uIGR5bkNhbGxfd3JhcHBlcihhcmcpIHtcclxuICAgICAgICByZXR1cm4gZHluQ2FsbChzaWcsIGZ1bmMsIFthcmddKTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGdlbmVyYWwgY2FzZVxyXG4gICAgICBzaWdDYWNoZVtmdW5jXSA9IGZ1bmN0aW9uIGR5bkNhbGxfd3JhcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gZHluQ2FsbChzaWcsIGZ1bmMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2lnQ2FjaGVbZnVuY107XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWtlQmlnSW50KGxvdywgaGlnaCwgdW5zaWduZWQpIHtcclxuICByZXR1cm4gdW5zaWduZWQgPyAoKCsoKGxvdz4+PjApKSkrKCgrKChoaWdoPj4+MCkpKSo0Mjk0OTY3Mjk2LjApKSA6ICgoKygobG93Pj4+MCkpKSsoKCsoKGhpZ2h8MCkpKSo0Mjk0OTY3Mjk2LjApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluQ2FsbChzaWcsIHB0ciwgYXJncykge1xyXG4gIGlmIChhcmdzICYmIGFyZ3MubGVuZ3RoKSB7XHJcbiAgICBhc3NlcnQoYXJncy5sZW5ndGggPT0gc2lnLmxlbmd0aC0xKTtcclxuICAgIGFzc2VydCgoJ2R5bkNhbGxfJyArIHNpZykgaW4gTW9kdWxlLCAnYmFkIGZ1bmN0aW9uIHBvaW50ZXIgdHlwZSAtIG5vIHRhYmxlIGZvciBzaWcgXFwnJyArIHNpZyArICdcXCcnKTtcclxuICAgIHJldHVybiBNb2R1bGVbJ2R5bkNhbGxfJyArIHNpZ10uYXBwbHkobnVsbCwgW3B0cl0uY29uY2F0KGFyZ3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXNzZXJ0KHNpZy5sZW5ndGggPT0gMSk7XHJcbiAgICBhc3NlcnQoKCdkeW5DYWxsXycgKyBzaWcpIGluIE1vZHVsZSwgJ2JhZCBmdW5jdGlvbiBwb2ludGVyIHR5cGUgLSBubyB0YWJsZSBmb3Igc2lnIFxcJycgKyBzaWcgKyAnXFwnJyk7XHJcbiAgICByZXR1cm4gTW9kdWxlWydkeW5DYWxsXycgKyBzaWddLmNhbGwobnVsbCwgcHRyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb21waWxlclNldHRpbmcobmFtZSkge1xyXG4gIHRocm93ICdZb3UgbXVzdCBidWlsZCB3aXRoIC1zIFJFVEFJTl9DT01QSUxFUl9TRVRUSU5HUz0xIGZvciBnZXRDb21waWxlclNldHRpbmcgb3IgZW1zY3JpcHRlbl9nZXRfY29tcGlsZXJfc2V0dGluZyB0byB3b3JrJztcclxufVxyXG5cclxudmFyIFJ1bnRpbWUgPSB7XHJcbiAgLy8gRklYTUUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgbGF5ZXIgZm9yIHBvcnRzLiBTdXBwb3J0IHNvbWUgUnVudGltZS4qXHJcbiAgLy8gICAgICAgZm9yIG5vdywgZml4IGl0IHRoZXJlLCB0aGVuIHJlbW92ZSBpdCBmcm9tIGhlcmUuIFRoYXQgd2F5IHdlXHJcbiAgLy8gICAgICAgY2FuIG1pbmltaXplIGFueSBwZXJpb2Qgb2YgYnJlYWthZ2UuXHJcbiAgZHluQ2FsbDogZHluQ2FsbCwgLy8gZm9yIFNETDIgcG9ydFxyXG4gIC8vIGhlbHBmdWwgZXJyb3JzXHJcbiAgZ2V0VGVtcFJldDA6IGZ1bmN0aW9uKCkgeyBhYm9ydCgnZ2V0VGVtcFJldDAoKSBpcyBub3cgYSB0b3AtbGV2ZWwgZnVuY3Rpb24sIGFmdGVyIHJlbW92aW5nIHRoZSBSdW50aW1lIG9iamVjdC4gUmVtb3ZlIFwiUnVudGltZS5cIicpIH0sXHJcbiAgc3RhdGljQWxsb2M6IGZ1bmN0aW9uKCkgeyBhYm9ydCgnc3RhdGljQWxsb2MoKSBpcyBub3cgYSB0b3AtbGV2ZWwgZnVuY3Rpb24sIGFmdGVyIHJlbW92aW5nIHRoZSBSdW50aW1lIG9iamVjdC4gUmVtb3ZlIFwiUnVudGltZS5cIicpIH0sXHJcbiAgc3RhY2tBbGxvYzogZnVuY3Rpb24oKSB7IGFib3J0KCdzdGFja0FsbG9jKCkgaXMgbm93IGEgdG9wLWxldmVsIGZ1bmN0aW9uLCBhZnRlciByZW1vdmluZyB0aGUgUnVudGltZSBvYmplY3QuIFJlbW92ZSBcIlJ1bnRpbWUuXCInKSB9LFxyXG59O1xyXG5cclxuLy8gVGhlIGFkZHJlc3MgZ2xvYmFscyBiZWdpbiBhdC4gVmVyeSBsb3cgaW4gbWVtb3J5LCBmb3IgY29kZSBzaXplIGFuZCBvcHRpbWl6YXRpb24gb3Bwb3J0dW5pdGllcy5cclxuLy8gQWJvdmUgMCBpcyBzdGF0aWMgbWVtb3J5LCBzdGFydGluZyB3aXRoIGdsb2JhbHMuXHJcbi8vIFRoZW4gdGhlIHN0YWNrLlxyXG4vLyBUaGVuICdkeW5hbWljJyBtZW1vcnkgZm9yIHNicmsuXHJcbnZhciBHTE9CQUxfQkFTRSA9IDEwMjQ7XHJcblxyXG5cclxuXHJcbi8vID09PSBQcmVhbWJsZSBsaWJyYXJ5IHN0dWZmID09PVxyXG5cclxuLy8gRG9jdW1lbnRhdGlvbiBmb3IgdGhlIHB1YmxpYyBBUElzIGRlZmluZWQgaW4gdGhpcyBmaWxlIG11c3QgYmUgdXBkYXRlZCBpbjpcclxuLy8gICAgc2l0ZS9zb3VyY2UvZG9jcy9hcGlfcmVmZXJlbmNlL3ByZWFtYmxlLmpzLnJzdFxyXG4vLyBBIHByZWJ1aWx0IGxvY2FsIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0OlxyXG4vLyAgICBzaXRlL2J1aWxkL3RleHQvZG9jcy9hcGlfcmVmZXJlbmNlL3ByZWFtYmxlLmpzLnR4dFxyXG4vLyBZb3UgY2FuIGFsc28gYnVpbGQgZG9jcyBsb2NhbGx5IGFzIEhUTUwgb3Igb3RoZXIgZm9ybWF0cyBpbiBzaXRlL1xyXG4vLyBBbiBvbmxpbmUgSFRNTCB2ZXJzaW9uICh3aGljaCBtYXkgYmUgb2YgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiBFbXNjcmlwdGVuKVxyXG4vLyAgICBpcyB1cCBhdCBodHRwOi8va3JpcGtlbi5naXRodWIuaW8vZW1zY3JpcHRlbi1zaXRlL2RvY3MvYXBpX3JlZmVyZW5jZS9wcmVhbWJsZS5qcy5odG1sXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSdW50aW1lIGVzc2VudGlhbHNcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG52YXIgQUJPUlQgPSAwOyAvLyB3aGV0aGVyIHdlIGFyZSBxdWl0dGluZyB0aGUgYXBwbGljYXRpb24uIG5vIGNvZGUgc2hvdWxkIHJ1biBhZnRlciB0aGlzLiBzZXQgaW4gZXhpdCgpIGFuZCBhYm9ydCgpXHJcbnZhciBFWElUU1RBVFVTID0gMDtcclxuXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24oKiwgc3RyaW5nPSl9ICovXHJcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIHRleHQpIHtcclxuICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgYWJvcnQoJ0Fzc2VydGlvbiBmYWlsZWQ6ICcgKyB0ZXh0KTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBnbG9iYWxTY29wZSA9IHRoaXM7XHJcblxyXG4vLyBSZXR1cm5zIHRoZSBDIGZ1bmN0aW9uIHdpdGggYSBzcGVjaWZpZWQgaWRlbnRpZmllciAoZm9yIEMrKywgeW91IG5lZWQgdG8gZG8gbWFudWFsIG5hbWUgbWFuZ2xpbmcpXHJcbmZ1bmN0aW9uIGdldENGdW5jKGlkZW50KSB7XHJcbiAgdmFyIGZ1bmMgPSBNb2R1bGVbJ18nICsgaWRlbnRdOyAvLyBjbG9zdXJlIGV4cG9ydGVkIGZ1bmN0aW9uXHJcbiAgYXNzZXJ0KGZ1bmMsICdDYW5ub3QgY2FsbCB1bmtub3duIGZ1bmN0aW9uICcgKyBpZGVudCArICcsIG1ha2Ugc3VyZSBpdCBpcyBleHBvcnRlZCcpO1xyXG4gIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG52YXIgSlNmdW5jcyA9IHtcclxuICAvLyBIZWxwZXJzIGZvciBjd3JhcCAtLSBpdCBjYW4ndCByZWZlciB0byBSdW50aW1lIGRpcmVjdGx5IGJlY2F1c2UgaXQgbWlnaHRcclxuICAvLyBiZSByZW5hbWVkIGJ5IGNsb3N1cmUsIGluc3RlYWQgaXQgY2FsbHMgSlNmdW5jc1snc3RhY2tTYXZlJ10uYm9keSB0byBmaW5kXHJcbiAgLy8gb3V0IHdoYXQgdGhlIG1pbmlmaWVkIGZ1bmN0aW9uIG5hbWUgaXMuXHJcbiAgJ3N0YWNrU2F2ZSc6IGZ1bmN0aW9uKCkge1xyXG4gICAgc3RhY2tTYXZlKClcclxuICB9LFxyXG4gICdzdGFja1Jlc3RvcmUnOiBmdW5jdGlvbigpIHtcclxuICAgIHN0YWNrUmVzdG9yZSgpXHJcbiAgfSxcclxuICAvLyB0eXBlIGNvbnZlcnNpb24gZnJvbSBqcyB0byBjXHJcbiAgJ2FycmF5VG9DJyA6IGZ1bmN0aW9uKGFycikge1xyXG4gICAgdmFyIHJldCA9IHN0YWNrQWxsb2MoYXJyLmxlbmd0aCk7XHJcbiAgICB3cml0ZUFycmF5VG9NZW1vcnkoYXJyLCByZXQpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9LFxyXG4gICdzdHJpbmdUb0MnIDogZnVuY3Rpb24oc3RyKSB7XHJcbiAgICB2YXIgcmV0ID0gMDtcclxuICAgIGlmIChzdHIgIT09IG51bGwgJiYgc3RyICE9PSB1bmRlZmluZWQgJiYgc3RyICE9PSAwKSB7IC8vIG51bGwgc3RyaW5nXHJcbiAgICAgIC8vIGF0IG1vc3QgNCBieXRlcyBwZXIgVVRGLTggY29kZSBwb2ludCwgKzEgZm9yIHRoZSB0cmFpbGluZyAnXFwwJ1xyXG4gICAgICB2YXIgbGVuID0gKHN0ci5sZW5ndGggPDwgMikgKyAxO1xyXG4gICAgICByZXQgPSBzdGFja0FsbG9jKGxlbik7XHJcbiAgICAgIHN0cmluZ1RvVVRGOChzdHIsIHJldCwgbGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG59O1xyXG4vLyBGb3IgZmFzdCBsb29rdXAgb2YgY29udmVyc2lvbiBmdW5jdGlvbnNcclxudmFyIHRvQyA9IHsnc3RyaW5nJyA6IEpTZnVuY3NbJ3N0cmluZ1RvQyddLCAnYXJyYXknIDogSlNmdW5jc1snYXJyYXlUb0MnXX07XHJcblxyXG4vLyBDIGNhbGxpbmcgaW50ZXJmYWNlLlxyXG5mdW5jdGlvbiBjY2FsbCAoaWRlbnQsIHJldHVyblR5cGUsIGFyZ1R5cGVzLCBhcmdzLCBvcHRzKSB7XHJcbiAgdmFyIGZ1bmMgPSBnZXRDRnVuYyhpZGVudCk7XHJcbiAgdmFyIGNBcmdzID0gW107XHJcbiAgdmFyIHN0YWNrID0gMDtcclxuICBhc3NlcnQocmV0dXJuVHlwZSAhPT0gJ2FycmF5JywgJ1JldHVybiB0eXBlIHNob3VsZCBub3QgYmUgXCJhcnJheVwiLicpO1xyXG4gIGlmIChhcmdzKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGNvbnZlcnRlciA9IHRvQ1thcmdUeXBlc1tpXV07XHJcbiAgICAgIGlmIChjb252ZXJ0ZXIpIHtcclxuICAgICAgICBpZiAoc3RhY2sgPT09IDApIHN0YWNrID0gc3RhY2tTYXZlKCk7XHJcbiAgICAgICAgY0FyZ3NbaV0gPSBjb252ZXJ0ZXIoYXJnc1tpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY0FyZ3NbaV0gPSBhcmdzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciByZXQgPSBmdW5jLmFwcGx5KG51bGwsIGNBcmdzKTtcclxuICBpZiAocmV0dXJuVHlwZSA9PT0gJ3N0cmluZycpIHJldCA9IFBvaW50ZXJfc3RyaW5naWZ5KHJldCk7XHJcbiAgaWYgKHN0YWNrICE9PSAwKSB7XHJcbiAgICBzdGFja1Jlc3RvcmUoc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjd3JhcCAoaWRlbnQsIHJldHVyblR5cGUsIGFyZ1R5cGVzKSB7XHJcbiAgYXJnVHlwZXMgPSBhcmdUeXBlcyB8fCBbXTtcclxuICB2YXIgY2Z1bmMgPSBnZXRDRnVuYyhpZGVudCk7XHJcbiAgLy8gV2hlbiB0aGUgZnVuY3Rpb24gdGFrZXMgbnVtYmVycyBhbmQgcmV0dXJucyBhIG51bWJlciwgd2UgY2FuIGp1c3QgcmV0dXJuXHJcbiAgLy8gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uXHJcbiAgdmFyIG51bWVyaWNBcmdzID0gYXJnVHlwZXMuZXZlcnkoZnVuY3Rpb24odHlwZSl7IHJldHVybiB0eXBlID09PSAnbnVtYmVyJ30pO1xyXG4gIHZhciBudW1lcmljUmV0ID0gcmV0dXJuVHlwZSAhPT0gJ3N0cmluZyc7XHJcbiAgaWYgKG51bWVyaWNSZXQgJiYgbnVtZXJpY0FyZ3MpIHtcclxuICAgIHJldHVybiBjZnVuYztcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGNjYWxsKGlkZW50LCByZXR1cm5UeXBlLCBhcmdUeXBlcywgYXJndW1lbnRzKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24obnVtYmVyLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbj0pfSAqL1xyXG5mdW5jdGlvbiBzZXRWYWx1ZShwdHIsIHZhbHVlLCB0eXBlLCBub1NhZmUpIHtcclxuICB0eXBlID0gdHlwZSB8fCAnaTgnO1xyXG4gIGlmICh0eXBlLmNoYXJBdCh0eXBlLmxlbmd0aC0xKSA9PT0gJyonKSB0eXBlID0gJ2kzMic7IC8vIHBvaW50ZXJzIGFyZSAzMi1iaXRcclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2kxJzogSEVBUDhbKChwdHIpPj4wKV09dmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdpOCc6IEhFQVA4WygocHRyKT4+MCldPXZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAnaTE2JzogSEVBUDE2WygocHRyKT4+MSldPXZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAnaTMyJzogSEVBUDMyWygocHRyKT4+MildPXZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAnaTY0JzogKHRlbXBJNjQgPSBbdmFsdWU+Pj4wLCh0ZW1wRG91YmxlPXZhbHVlLCgrKE1hdGhfYWJzKHRlbXBEb3VibGUpKSkgPj0gMS4wID8gKHRlbXBEb3VibGUgPiAwLjAgPyAoKE1hdGhfbWluKCgrKE1hdGhfZmxvb3IoKHRlbXBEb3VibGUpLzQyOTQ5NjcyOTYuMCkpKSwgNDI5NDk2NzI5NS4wKSl8MCk+Pj4wIDogKH5+KCgrKE1hdGhfY2VpbCgodGVtcERvdWJsZSAtICsoKCh+fih0ZW1wRG91YmxlKSkpPj4+MCkpLzQyOTQ5NjcyOTYuMCkpKSkpPj4+MCkgOiAwKV0sSEVBUDMyWygocHRyKT4+MildPXRlbXBJNjRbMF0sSEVBUDMyWygoKHB0cikrKDQpKT4+MildPXRlbXBJNjRbMV0pOyBicmVhaztcclxuICAgICAgY2FzZSAnZmxvYXQnOiBIRUFQRjMyWygocHRyKT4+MildPXZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAnZG91YmxlJzogSEVBUEY2NFsoKHB0cik+PjMpXT12YWx1ZTsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IGFib3J0KCdpbnZhbGlkIHR5cGUgZm9yIHNldFZhbHVlOiAnICsgdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24obnVtYmVyLCBzdHJpbmcsIGJvb2xlYW49KX0gKi9cclxuZnVuY3Rpb24gZ2V0VmFsdWUocHRyLCB0eXBlLCBub1NhZmUpIHtcclxuICB0eXBlID0gdHlwZSB8fCAnaTgnO1xyXG4gIGlmICh0eXBlLmNoYXJBdCh0eXBlLmxlbmd0aC0xKSA9PT0gJyonKSB0eXBlID0gJ2kzMic7IC8vIHBvaW50ZXJzIGFyZSAzMi1iaXRcclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2kxJzogcmV0dXJuIEhFQVA4WygocHRyKT4+MCldO1xyXG4gICAgICBjYXNlICdpOCc6IHJldHVybiBIRUFQOFsoKHB0cik+PjApXTtcclxuICAgICAgY2FzZSAnaTE2JzogcmV0dXJuIEhFQVAxNlsoKHB0cik+PjEpXTtcclxuICAgICAgY2FzZSAnaTMyJzogcmV0dXJuIEhFQVAzMlsoKHB0cik+PjIpXTtcclxuICAgICAgY2FzZSAnaTY0JzogcmV0dXJuIEhFQVAzMlsoKHB0cik+PjIpXTtcclxuICAgICAgY2FzZSAnZmxvYXQnOiByZXR1cm4gSEVBUEYzMlsoKHB0cik+PjIpXTtcclxuICAgICAgY2FzZSAnZG91YmxlJzogcmV0dXJuIEhFQVBGNjRbKChwdHIpPj4zKV07XHJcbiAgICAgIGRlZmF1bHQ6IGFib3J0KCdpbnZhbGlkIHR5cGUgZm9yIGdldFZhbHVlOiAnICsgdHlwZSk7XHJcbiAgICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbnZhciBBTExPQ19OT1JNQUwgPSAwOyAvLyBUcmllcyB0byB1c2UgX21hbGxvYygpXHJcbnZhciBBTExPQ19TVEFDSyA9IDE7IC8vIExpdmVzIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgZnVuY3Rpb24gY2FsbFxyXG52YXIgQUxMT0NfU1RBVElDID0gMjsgLy8gQ2Fubm90IGJlIGZyZWVkXHJcbnZhciBBTExPQ19EWU5BTUlDID0gMzsgLy8gQ2Fubm90IGJlIGZyZWVkIGV4Y2VwdCB0aHJvdWdoIHNicmtcclxudmFyIEFMTE9DX05PTkUgPSA0OyAvLyBEbyBub3QgYWxsb2NhdGVcclxuXHJcbi8vIGFsbG9jYXRlKCk6IFRoaXMgaXMgZm9yIGludGVybmFsIHVzZS4gWW91IGNhbiB1c2UgaXQgeW91cnNlbGYgYXMgd2VsbCwgYnV0IHRoZSBpbnRlcmZhY2VcclxuLy8gICAgICAgICAgICAgaXMgYSBsaXR0bGUgdHJpY2t5IChzZWUgZG9jcyByaWdodCBiZWxvdykuIFRoZSByZWFzb24gaXMgdGhhdCBpdCBpcyBvcHRpbWl6ZWRcclxuLy8gICAgICAgICAgICAgZm9yIG11bHRpcGxlIHN5bnRheGVzIHRvIHNhdmUgc3BhY2UgaW4gZ2VuZXJhdGVkIGNvZGUuIFNvIHlvdSBzaG91bGRcclxuLy8gICAgICAgICAgICAgbm9ybWFsbHkgbm90IHVzZSBhbGxvY2F0ZSgpLCBhbmQgaW5zdGVhZCBhbGxvY2F0ZSBtZW1vcnkgdXNpbmcgX21hbGxvYygpLFxyXG4vLyAgICAgICAgICAgICBpbml0aWFsaXplIGl0IHdpdGggc2V0VmFsdWUoKSwgYW5kIHNvIGZvcnRoLlxyXG4vLyBAc2xhYjogQW4gYXJyYXkgb2YgZGF0YSwgb3IgYSBudW1iZXIuIElmIGEgbnVtYmVyLCB0aGVuIHRoZSBzaXplIG9mIHRoZSBibG9jayB0byBhbGxvY2F0ZSxcclxuLy8gICAgICAgIGluICpieXRlcyogKG5vdGUgdGhhdCB0aGlzIGlzIHNvbWV0aW1lcyBjb25mdXNpbmc6IHRoZSBuZXh0IHBhcmFtZXRlciBkb2VzIG5vdFxyXG4vLyAgICAgICAgYWZmZWN0IHRoaXMhKVxyXG4vLyBAdHlwZXM6IEVpdGhlciBhbiBhcnJheSBvZiB0eXBlcywgb25lIGZvciBlYWNoIGJ5dGUgKG9yIDAgaWYgbm8gdHlwZSBhdCB0aGF0IHBvc2l0aW9uKSxcclxuLy8gICAgICAgICBvciBhIHNpbmdsZSB0eXBlIHdoaWNoIGlzIHVzZWQgZm9yIHRoZSBlbnRpcmUgYmxvY2suIFRoaXMgb25seSBtYXR0ZXJzIGlmIHRoZXJlXHJcbi8vICAgICAgICAgaXMgaW5pdGlhbCBkYXRhIC0gaWYgQHNsYWIgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBkb2VzIG5vdCBtYXR0ZXIgYXQgYWxsIGFuZCBpc1xyXG4vLyAgICAgICAgIGlnbm9yZWQuXHJcbi8vIEBhbGxvY2F0b3I6IEhvdyB0byBhbGxvY2F0ZSBtZW1vcnksIHNlZSBBTExPQ18qXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24oKFR5cGVkQXJyYXl8QXJyYXk8bnVtYmVyPnxudW1iZXIpLCBzdHJpbmcsIG51bWJlciwgbnVtYmVyPSl9ICovXHJcbmZ1bmN0aW9uIGFsbG9jYXRlKHNsYWIsIHR5cGVzLCBhbGxvY2F0b3IsIHB0cikge1xyXG4gIHZhciB6ZXJvaW5pdCwgc2l6ZTtcclxuICBpZiAodHlwZW9mIHNsYWIgPT09ICdudW1iZXInKSB7XHJcbiAgICB6ZXJvaW5pdCA9IHRydWU7XHJcbiAgICBzaXplID0gc2xhYjtcclxuICB9IGVsc2Uge1xyXG4gICAgemVyb2luaXQgPSBmYWxzZTtcclxuICAgIHNpemUgPSBzbGFiLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHZhciBzaW5nbGVUeXBlID0gdHlwZW9mIHR5cGVzID09PSAnc3RyaW5nJyA/IHR5cGVzIDogbnVsbDtcclxuXHJcbiAgdmFyIHJldDtcclxuICBpZiAoYWxsb2NhdG9yID09IEFMTE9DX05PTkUpIHtcclxuICAgIHJldCA9IHB0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0ID0gW3R5cGVvZiBfbWFsbG9jID09PSAnZnVuY3Rpb24nID8gX21hbGxvYyA6IHN0YXRpY0FsbG9jLCBzdGFja0FsbG9jLCBzdGF0aWNBbGxvYywgZHluYW1pY0FsbG9jXVthbGxvY2F0b3IgPT09IHVuZGVmaW5lZCA/IEFMTE9DX1NUQVRJQyA6IGFsbG9jYXRvcl0oTWF0aC5tYXgoc2l6ZSwgc2luZ2xlVHlwZSA/IDEgOiB0eXBlcy5sZW5ndGgpKTtcclxuICB9XHJcblxyXG4gIGlmICh6ZXJvaW5pdCkge1xyXG4gICAgdmFyIHN0b3A7XHJcbiAgICBwdHIgPSByZXQ7XHJcbiAgICBhc3NlcnQoKHJldCAmIDMpID09IDApO1xyXG4gICAgc3RvcCA9IHJldCArIChzaXplICYgfjMpO1xyXG4gICAgZm9yICg7IHB0ciA8IHN0b3A7IHB0ciArPSA0KSB7XHJcbiAgICAgIEhFQVAzMlsoKHB0cik+PjIpXT0wO1xyXG4gICAgfVxyXG4gICAgc3RvcCA9IHJldCArIHNpemU7XHJcbiAgICB3aGlsZSAocHRyIDwgc3RvcCkge1xyXG4gICAgICBIRUFQOFsoKHB0cisrKT4+MCldPTA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgaWYgKHNpbmdsZVR5cGUgPT09ICdpOCcpIHtcclxuICAgIGlmIChzbGFiLnN1YmFycmF5IHx8IHNsYWIuc2xpY2UpIHtcclxuICAgICAgSEVBUFU4LnNldCgvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAoc2xhYiksIHJldCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIRUFQVTguc2V0KG5ldyBVaW50OEFycmF5KHNsYWIpLCByZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHZhciBpID0gMCwgdHlwZSwgdHlwZVNpemUsIHByZXZpb3VzVHlwZTtcclxuICB3aGlsZSAoaSA8IHNpemUpIHtcclxuICAgIHZhciBjdXJyID0gc2xhYltpXTtcclxuXHJcbiAgICB0eXBlID0gc2luZ2xlVHlwZSB8fCB0eXBlc1tpXTtcclxuICAgIGlmICh0eXBlID09PSAwKSB7XHJcbiAgICAgIGkrKztcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBhc3NlcnQodHlwZSwgJ011c3Qga25vdyB3aGF0IHR5cGUgdG8gc3RvcmUgaW4gYWxsb2NhdGUhJyk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gJ2k2NCcpIHR5cGUgPSAnaTMyJzsgLy8gc3BlY2lhbCBjYXNlOiB3ZSBoYXZlIG9uZSBpMzIgaGVyZSwgYW5kIG9uZSBpMzIgbGF0ZXJcclxuXHJcbiAgICBzZXRWYWx1ZShyZXQraSwgY3VyciwgdHlwZSk7XHJcblxyXG4gICAgLy8gbm8gbmVlZCB0byBsb29rIHVwIHNpemUgdW5sZXNzIHR5cGUgY2hhbmdlcywgc28gY2FjaGUgaXRcclxuICAgIGlmIChwcmV2aW91c1R5cGUgIT09IHR5cGUpIHtcclxuICAgICAgdHlwZVNpemUgPSBnZXROYXRpdmVUeXBlU2l6ZSh0eXBlKTtcclxuICAgICAgcHJldmlvdXNUeXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIGkgKz0gdHlwZVNpemU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG4vLyBBbGxvY2F0ZSBtZW1vcnkgZHVyaW5nIGFueSBzdGFnZSBvZiBzdGFydHVwIC0gc3RhdGljIG1lbW9yeSBlYXJseSBvbiwgZHluYW1pYyBtZW1vcnkgbGF0ZXIsIG1hbGxvYyB3aGVuIHJlYWR5XHJcbmZ1bmN0aW9uIGdldE1lbW9yeShzaXplKSB7XHJcbiAgaWYgKCFzdGF0aWNTZWFsZWQpIHJldHVybiBzdGF0aWNBbGxvYyhzaXplKTtcclxuICBpZiAoIXJ1bnRpbWVJbml0aWFsaXplZCkgcmV0dXJuIGR5bmFtaWNBbGxvYyhzaXplKTtcclxuICByZXR1cm4gX21hbGxvYyhzaXplKTtcclxufVxyXG5cclxuLyoqIEB0eXBlIHtmdW5jdGlvbihudW1iZXIsIG51bWJlcj0pfSAqL1xyXG5mdW5jdGlvbiBQb2ludGVyX3N0cmluZ2lmeShwdHIsIGxlbmd0aCkge1xyXG4gIGlmIChsZW5ndGggPT09IDAgfHwgIXB0cikgcmV0dXJuICcnO1xyXG4gIC8vIFRPRE86IHVzZSBUZXh0RGVjb2RlclxyXG4gIC8vIEZpbmQgdGhlIGxlbmd0aCwgYW5kIGNoZWNrIGZvciBVVEYgd2hpbGUgZG9pbmcgc29cclxuICB2YXIgaGFzVXRmID0gMDtcclxuICB2YXIgdDtcclxuICB2YXIgaSA9IDA7XHJcbiAgd2hpbGUgKDEpIHtcclxuICAgIGFzc2VydChwdHIgKyBpIDwgVE9UQUxfTUVNT1JZKTtcclxuICAgIHQgPSBIRUFQVThbKCgocHRyKSsoaSkpPj4wKV07XHJcbiAgICBoYXNVdGYgfD0gdDtcclxuICAgIGlmICh0ID09IDAgJiYgIWxlbmd0aCkgYnJlYWs7XHJcbiAgICBpKys7XHJcbiAgICBpZiAobGVuZ3RoICYmIGkgPT0gbGVuZ3RoKSBicmVhaztcclxuICB9XHJcbiAgaWYgKCFsZW5ndGgpIGxlbmd0aCA9IGk7XHJcblxyXG4gIHZhciByZXQgPSAnJztcclxuXHJcbiAgaWYgKGhhc1V0ZiA8IDEyOCkge1xyXG4gICAgdmFyIE1BWF9DSFVOSyA9IDEwMjQ7IC8vIHNwbGl0IHVwIGludG8gY2h1bmtzLCBiZWNhdXNlIC5hcHBseSBvbiBhIGh1Z2Ugc3RyaW5nIGNhbiBvdmVyZmxvdyB0aGUgc3RhY2tcclxuICAgIHZhciBjdXJyO1xyXG4gICAgd2hpbGUgKGxlbmd0aCA+IDApIHtcclxuICAgICAgY3VyciA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBIRUFQVTguc3ViYXJyYXkocHRyLCBwdHIgKyBNYXRoLm1pbihsZW5ndGgsIE1BWF9DSFVOSykpKTtcclxuICAgICAgcmV0ID0gcmV0ID8gcmV0ICsgY3VyciA6IGN1cnI7XHJcbiAgICAgIHB0ciArPSBNQVhfQ0hVTks7XHJcbiAgICAgIGxlbmd0aCAtPSBNQVhfQ0hVTks7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuICByZXR1cm4gVVRGOFRvU3RyaW5nKHB0cik7XHJcbn1cclxuXHJcbi8vIEdpdmVuIGEgcG9pbnRlciAncHRyJyB0byBhIG51bGwtdGVybWluYXRlZCBBU0NJSS1lbmNvZGVkIHN0cmluZyBpbiB0aGUgZW1zY3JpcHRlbiBIRUFQLCByZXR1cm5zXHJcbi8vIGEgY29weSBvZiB0aGF0IHN0cmluZyBhcyBhIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdC5cclxuXHJcbmZ1bmN0aW9uIEFzY2lpVG9TdHJpbmcocHRyKSB7XHJcbiAgdmFyIHN0ciA9ICcnO1xyXG4gIHdoaWxlICgxKSB7XHJcbiAgICB2YXIgY2ggPSBIRUFQOFsoKHB0cisrKT4+MCldO1xyXG4gICAgaWYgKCFjaCkgcmV0dXJuIHN0cjtcclxuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvcGllcyB0aGUgZ2l2ZW4gSmF2YXNjcmlwdCBTdHJpbmcgb2JqZWN0ICdzdHInIHRvIHRoZSBlbXNjcmlwdGVuIEhFQVAgYXQgYWRkcmVzcyAnb3V0UHRyJyxcclxuLy8gbnVsbC10ZXJtaW5hdGVkIGFuZCBlbmNvZGVkIGluIEFTQ0lJIGZvcm0uIFRoZSBjb3B5IHdpbGwgcmVxdWlyZSBhdCBtb3N0IHN0ci5sZW5ndGgrMSBieXRlcyBvZiBzcGFjZSBpbiB0aGUgSEVBUC5cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvQXNjaWkoc3RyLCBvdXRQdHIpIHtcclxuICByZXR1cm4gd3JpdGVBc2NpaVRvTWVtb3J5KHN0ciwgb3V0UHRyLCBmYWxzZSk7XHJcbn1cclxuXHJcbi8vIEdpdmVuIGEgcG9pbnRlciAncHRyJyB0byBhIG51bGwtdGVybWluYXRlZCBVVEY4LWVuY29kZWQgc3RyaW5nIGluIHRoZSBnaXZlbiBhcnJheSB0aGF0IGNvbnRhaW5zIHVpbnQ4IHZhbHVlcywgcmV0dXJuc1xyXG4vLyBhIGNvcHkgb2YgdGhhdCBzdHJpbmcgYXMgYSBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QuXHJcblxyXG52YXIgVVRGOERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgIT09ICd1bmRlZmluZWQnID8gbmV3IFRleHREZWNvZGVyKCd1dGY4JykgOiB1bmRlZmluZWQ7XHJcbmZ1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKHU4QXJyYXksIGlkeCkge1xyXG4gIHZhciBlbmRQdHIgPSBpZHg7XHJcbiAgLy8gVGV4dERlY29kZXIgbmVlZHMgdG8ga25vdyB0aGUgYnl0ZSBsZW5ndGggaW4gYWR2YW5jZSwgaXQgZG9lc24ndCBzdG9wIG9uIG51bGwgdGVybWluYXRvciBieSBpdHNlbGYuXHJcbiAgLy8gQWxzbywgdXNlIHRoZSBsZW5ndGggaW5mbyB0byBhdm9pZCBydW5uaW5nIHRpbnkgc3RyaW5ncyB0aHJvdWdoIFRleHREZWNvZGVyLCBzaW5jZSAuc3ViYXJyYXkoKSBhbGxvY2F0ZXMgZ2FyYmFnZS5cclxuICB3aGlsZSAodThBcnJheVtlbmRQdHJdKSArK2VuZFB0cjtcclxuXHJcbiAgaWYgKGVuZFB0ciAtIGlkeCA+IDE2ICYmIHU4QXJyYXkuc3ViYXJyYXkgJiYgVVRGOERlY29kZXIpIHtcclxuICAgIHJldHVybiBVVEY4RGVjb2Rlci5kZWNvZGUodThBcnJheS5zdWJhcnJheShpZHgsIGVuZFB0cikpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgdTAsIHUxLCB1MiwgdTMsIHU0LCB1NTtcclxuXHJcbiAgICB2YXIgc3RyID0gJyc7XHJcbiAgICB3aGlsZSAoMSkge1xyXG4gICAgICAvLyBGb3IgVVRGOCBieXRlIHN0cnVjdHVyZSwgc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVRGLTgjRGVzY3JpcHRpb24gYW5kIGh0dHBzOi8vd3d3LmlldGYub3JnL3JmYy9yZmMyMjc5LnR4dCBhbmQgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM2MjlcclxuICAgICAgdTAgPSB1OEFycmF5W2lkeCsrXTtcclxuICAgICAgaWYgKCF1MCkgcmV0dXJuIHN0cjtcclxuICAgICAgaWYgKCEodTAgJiAweDgwKSkgeyBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7IGNvbnRpbnVlOyB9XHJcbiAgICAgIHUxID0gdThBcnJheVtpZHgrK10gJiA2MztcclxuICAgICAgaWYgKCh1MCAmIDB4RTApID09IDB4QzApIHsgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKCh1MCAmIDMxKSA8PCA2KSB8IHUxKTsgY29udGludWU7IH1cclxuICAgICAgdTIgPSB1OEFycmF5W2lkeCsrXSAmIDYzO1xyXG4gICAgICBpZiAoKHUwICYgMHhGMCkgPT0gMHhFMCkge1xyXG4gICAgICAgIHUwID0gKCh1MCAmIDE1KSA8PCAxMikgfCAodTEgPDwgNikgfCB1MjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1MyA9IHU4QXJyYXlbaWR4KytdICYgNjM7XHJcbiAgICAgICAgaWYgKCh1MCAmIDB4RjgpID09IDB4RjApIHtcclxuICAgICAgICAgIHUwID0gKCh1MCAmIDcpIDw8IDE4KSB8ICh1MSA8PCAxMikgfCAodTIgPDwgNikgfCB1MztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdTQgPSB1OEFycmF5W2lkeCsrXSAmIDYzO1xyXG4gICAgICAgICAgaWYgKCh1MCAmIDB4RkMpID09IDB4RjgpIHtcclxuICAgICAgICAgICAgdTAgPSAoKHUwICYgMykgPDwgMjQpIHwgKHUxIDw8IDE4KSB8ICh1MiA8PCAxMikgfCAodTMgPDwgNikgfCB1NDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHU1ID0gdThBcnJheVtpZHgrK10gJiA2MztcclxuICAgICAgICAgICAgdTAgPSAoKHUwICYgMSkgPDwgMzApIHwgKHUxIDw8IDI0KSB8ICh1MiA8PCAxOCkgfCAodTMgPDwgMTIpIHwgKHU0IDw8IDYpIHwgdTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh1MCA8IDB4MTAwMDApIHtcclxuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGNoID0gdTAgLSAweDEwMDAwO1xyXG4gICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCB8IChjaCA+PiAxMCksIDB4REMwMCB8IChjaCAmIDB4M0ZGKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdpdmVuIGEgcG9pbnRlciAncHRyJyB0byBhIG51bGwtdGVybWluYXRlZCBVVEY4LWVuY29kZWQgc3RyaW5nIGluIHRoZSBlbXNjcmlwdGVuIEhFQVAsIHJldHVybnNcclxuLy8gYSBjb3B5IG9mIHRoYXQgc3RyaW5nIGFzIGEgSmF2YXNjcmlwdCBTdHJpbmcgb2JqZWN0LlxyXG5cclxuZnVuY3Rpb24gVVRGOFRvU3RyaW5nKHB0cikge1xyXG4gIHJldHVybiBVVEY4QXJyYXlUb1N0cmluZyhIRUFQVTgscHRyKTtcclxufVxyXG5cclxuLy8gQ29waWVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QgJ3N0cicgdG8gdGhlIGdpdmVuIGJ5dGUgYXJyYXkgYXQgYWRkcmVzcyAnb3V0SWR4JyxcclxuLy8gZW5jb2RlZCBpbiBVVEY4IGZvcm0gYW5kIG51bGwtdGVybWluYXRlZC4gVGhlIGNvcHkgd2lsbCByZXF1aXJlIGF0IG1vc3Qgc3RyLmxlbmd0aCo0KzEgYnl0ZXMgb2Ygc3BhY2UgaW4gdGhlIEhFQVAuXHJcbi8vIFVzZSB0aGUgZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEY4IHRvIGNvbXB1dGUgdGhlIGV4YWN0IG51bWJlciBvZiBieXRlcyAoZXhjbHVkaW5nIG51bGwgdGVybWluYXRvcikgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGwgd3JpdGUuXHJcbi8vIFBhcmFtZXRlcnM6XHJcbi8vICAgc3RyOiB0aGUgSmF2YXNjcmlwdCBzdHJpbmcgdG8gY29weS5cclxuLy8gICBvdXRVOEFycmF5OiB0aGUgYXJyYXkgdG8gY29weSB0by4gRWFjaCBpbmRleCBpbiB0aGlzIGFycmF5IGlzIGFzc3VtZWQgdG8gYmUgb25lIDgtYnl0ZSBlbGVtZW50LlxyXG4vLyAgIG91dElkeDogVGhlIHN0YXJ0aW5nIG9mZnNldCBpbiB0aGUgYXJyYXkgdG8gYmVnaW4gdGhlIGNvcHlpbmcuXHJcbi8vICAgbWF4Qnl0ZXNUb1dyaXRlOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgYnl0ZXMgdGhpcyBmdW5jdGlvbiBjYW4gd3JpdGUgdG8gdGhlIGFycmF5LiBUaGlzIGNvdW50IHNob3VsZCBpbmNsdWRlIHRoZSBudWxsXHJcbi8vICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hdG9yLCBpLmUuIGlmIG1heEJ5dGVzVG9Xcml0ZT0xLCBvbmx5IHRoZSBudWxsIHRlcm1pbmF0b3Igd2lsbCBiZSB3cml0dGVuIGFuZCBub3RoaW5nIGVsc2UuXHJcbi8vICAgICAgICAgICAgICAgICAgICBtYXhCeXRlc1RvV3JpdGU9MCBkb2VzIG5vdCB3cml0ZSBhbnkgYnl0ZXMgdG8gdGhlIG91dHB1dCwgbm90IGV2ZW4gdGhlIG51bGwgdGVybWluYXRvci5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4sIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yLlxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLCBvdXRVOEFycmF5LCBvdXRJZHgsIG1heEJ5dGVzVG9Xcml0ZSkge1xyXG4gIGlmICghKG1heEJ5dGVzVG9Xcml0ZSA+IDApKSAvLyBQYXJhbWV0ZXIgbWF4Qnl0ZXNUb1dyaXRlIGlzIG5vdCBvcHRpb25hbC4gTmVnYXRpdmUgdmFsdWVzLCAwLCBudWxsLCB1bmRlZmluZWQgYW5kIGZhbHNlIGVhY2ggZG9uJ3Qgd3JpdGUgb3V0IGFueSBieXRlcy5cclxuICAgIHJldHVybiAwO1xyXG5cclxuICB2YXIgc3RhcnRJZHggPSBvdXRJZHg7XHJcbiAgdmFyIGVuZElkeCA9IG91dElkeCArIG1heEJ5dGVzVG9Xcml0ZSAtIDE7IC8vIC0xIGZvciBzdHJpbmcgbnVsbCB0ZXJtaW5hdG9yLlxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAvLyBHb3RjaGE6IGNoYXJDb2RlQXQgcmV0dXJucyBhIDE2LWJpdCB3b3JkIHRoYXQgaXMgYSBVVEYtMTYgZW5jb2RlZCBjb2RlIHVuaXQsIG5vdCBhIFVuaWNvZGUgY29kZSBwb2ludCBvZiB0aGUgY2hhcmFjdGVyISBTbyBkZWNvZGUgVVRGMTYtPlVURjMyLT5VVEY4LlxyXG4gICAgLy8gU2VlIGh0dHA6Ly91bmljb2RlLm9yZy9mYXEvdXRmX2JvbS5odG1sI3V0ZjE2LTNcclxuICAgIC8vIEZvciBVVEY4IGJ5dGUgc3RydWN0dXJlLCBzZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtOCNEZXNjcmlwdGlvbiBhbmQgaHR0cHM6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzIyNzkudHh0IGFuZCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzYyOVxyXG4gICAgdmFyIHUgPSBzdHIuY2hhckNvZGVBdChpKTsgLy8gcG9zc2libHkgYSBsZWFkIHN1cnJvZ2F0ZVxyXG4gICAgaWYgKHUgPj0gMHhEODAwICYmIHUgPD0gMHhERkZGKSB1ID0gMHgxMDAwMCArICgodSAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4M0ZGKTtcclxuICAgIGlmICh1IDw9IDB4N0YpIHtcclxuICAgICAgaWYgKG91dElkeCA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IHU7XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHg3RkYpIHtcclxuICAgICAgaWYgKG91dElkeCArIDEgPj0gZW5kSWR4KSBicmVhaztcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweEMwIHwgKHUgPj4gNik7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICh1ICYgNjMpO1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4RkZGRikge1xyXG4gICAgICBpZiAob3V0SWR4ICsgMiA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4RTAgfCAodSA+PiAxMik7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiA2KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKHUgJiA2Myk7XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHgxRkZGRkYpIHtcclxuICAgICAgaWYgKG91dElkeCArIDMgPj0gZW5kSWR4KSBicmVhaztcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweEYwIHwgKHUgPj4gMTgpO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4ODAgfCAoKHUgPj4gMTIpICYgNjMpO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4ODAgfCAoKHUgPj4gNikgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICh1ICYgNjMpO1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4M0ZGRkZGRikge1xyXG4gICAgICBpZiAob3V0SWR4ICsgNCA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4RjggfCAodSA+PiAyNCk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAxOCkgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAxMikgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiA2KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKHUgJiA2Myk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAob3V0SWR4ICsgNSA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4RkMgfCAodSA+PiAzMCk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAyNCkgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAxOCkgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAxMikgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiA2KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKHUgJiA2Myk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIE51bGwtdGVybWluYXRlIHRoZSBwb2ludGVyIHRvIHRoZSBidWZmZXIuXHJcbiAgb3V0VThBcnJheVtvdXRJZHhdID0gMDtcclxuICByZXR1cm4gb3V0SWR4IC0gc3RhcnRJZHg7XHJcbn1cclxuXHJcbi8vIENvcGllcyB0aGUgZ2l2ZW4gSmF2YXNjcmlwdCBTdHJpbmcgb2JqZWN0ICdzdHInIHRvIHRoZSBlbXNjcmlwdGVuIEhFQVAgYXQgYWRkcmVzcyAnb3V0UHRyJyxcclxuLy8gbnVsbC10ZXJtaW5hdGVkIGFuZCBlbmNvZGVkIGluIFVURjggZm9ybS4gVGhlIGNvcHkgd2lsbCByZXF1aXJlIGF0IG1vc3Qgc3RyLmxlbmd0aCo0KzEgYnl0ZXMgb2Ygc3BhY2UgaW4gdGhlIEhFQVAuXHJcbi8vIFVzZSB0aGUgZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEY4IHRvIGNvbXB1dGUgdGhlIGV4YWN0IG51bWJlciBvZiBieXRlcyAoZXhjbHVkaW5nIG51bGwgdGVybWluYXRvcikgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGwgd3JpdGUuXHJcbi8vIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyB3cml0dGVuLCBFWENMVURJTkcgdGhlIG51bGwgdGVybWluYXRvci5cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvVVRGOChzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSB7XHJcbiAgYXNzZXJ0KHR5cGVvZiBtYXhCeXRlc1RvV3JpdGUgPT0gJ251bWJlcicsICdzdHJpbmdUb1VURjgoc3RyLCBvdXRQdHIsIG1heEJ5dGVzVG9Xcml0ZSkgaXMgbWlzc2luZyB0aGUgdGhpcmQgcGFyYW1ldGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBsZW5ndGggb2YgdGhlIG91dHB1dCBidWZmZXIhJyk7XHJcbiAgcmV0dXJuIHN0cmluZ1RvVVRGOEFycmF5KHN0ciwgSEVBUFU4LG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IHN0cmluZyB0YWtlcyBpZiBlbmNvZGVkIGFzIGEgVVRGOCBieXRlIGFycmF5LCBFWENMVURJTkcgdGhlIG51bGwgdGVybWluYXRvciBieXRlLlxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEY4KHN0cikge1xyXG4gIHZhciBsZW4gPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAvLyBHb3RjaGE6IGNoYXJDb2RlQXQgcmV0dXJucyBhIDE2LWJpdCB3b3JkIHRoYXQgaXMgYSBVVEYtMTYgZW5jb2RlZCBjb2RlIHVuaXQsIG5vdCBhIFVuaWNvZGUgY29kZSBwb2ludCBvZiB0aGUgY2hhcmFjdGVyISBTbyBkZWNvZGUgVVRGMTYtPlVURjMyLT5VVEY4LlxyXG4gICAgLy8gU2VlIGh0dHA6Ly91bmljb2RlLm9yZy9mYXEvdXRmX2JvbS5odG1sI3V0ZjE2LTNcclxuICAgIHZhciB1ID0gc3RyLmNoYXJDb2RlQXQoaSk7IC8vIHBvc3NpYmx5IGEgbGVhZCBzdXJyb2dhdGVcclxuICAgIGlmICh1ID49IDB4RDgwMCAmJiB1IDw9IDB4REZGRikgdSA9IDB4MTAwMDAgKyAoKHUgJiAweDNGRikgPDwgMTApIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweDNGRik7XHJcbiAgICBpZiAodSA8PSAweDdGKSB7XHJcbiAgICAgICsrbGVuO1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4N0ZGKSB7XHJcbiAgICAgIGxlbiArPSAyO1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4RkZGRikge1xyXG4gICAgICBsZW4gKz0gMztcclxuICAgIH0gZWxzZSBpZiAodSA8PSAweDFGRkZGRikge1xyXG4gICAgICBsZW4gKz0gNDtcclxuICAgIH0gZWxzZSBpZiAodSA8PSAweDNGRkZGRkYpIHtcclxuICAgICAgbGVuICs9IDU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZW4gKz0gNjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGxlbjtcclxufVxyXG5cclxuLy8gR2l2ZW4gYSBwb2ludGVyICdwdHInIHRvIGEgbnVsbC10ZXJtaW5hdGVkIFVURjE2TEUtZW5jb2RlZCBzdHJpbmcgaW4gdGhlIGVtc2NyaXB0ZW4gSEVBUCwgcmV0dXJuc1xyXG4vLyBhIGNvcHkgb2YgdGhhdCBzdHJpbmcgYXMgYSBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QuXHJcblxyXG52YXIgVVRGMTZEZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyICE9PSAndW5kZWZpbmVkJyA/IG5ldyBUZXh0RGVjb2RlcigndXRmLTE2bGUnKSA6IHVuZGVmaW5lZDtcclxuZnVuY3Rpb24gVVRGMTZUb1N0cmluZyhwdHIpIHtcclxuICBhc3NlcnQocHRyICUgMiA9PSAwLCAnUG9pbnRlciBwYXNzZWQgdG8gVVRGMTZUb1N0cmluZyBtdXN0IGJlIGFsaWduZWQgdG8gdHdvIGJ5dGVzIScpO1xyXG4gIHZhciBlbmRQdHIgPSBwdHI7XHJcbiAgLy8gVGV4dERlY29kZXIgbmVlZHMgdG8ga25vdyB0aGUgYnl0ZSBsZW5ndGggaW4gYWR2YW5jZSwgaXQgZG9lc24ndCBzdG9wIG9uIG51bGwgdGVybWluYXRvciBieSBpdHNlbGYuXHJcbiAgLy8gQWxzbywgdXNlIHRoZSBsZW5ndGggaW5mbyB0byBhdm9pZCBydW5uaW5nIHRpbnkgc3RyaW5ncyB0aHJvdWdoIFRleHREZWNvZGVyLCBzaW5jZSAuc3ViYXJyYXkoKSBhbGxvY2F0ZXMgZ2FyYmFnZS5cclxuICB2YXIgaWR4ID0gZW5kUHRyID4+IDE7XHJcbiAgd2hpbGUgKEhFQVAxNltpZHhdKSArK2lkeDtcclxuICBlbmRQdHIgPSBpZHggPDwgMTtcclxuXHJcbiAgaWYgKGVuZFB0ciAtIHB0ciA+IDMyICYmIFVURjE2RGVjb2Rlcikge1xyXG4gICAgcmV0dXJuIFVURjE2RGVjb2Rlci5kZWNvZGUoSEVBUFU4LnN1YmFycmF5KHB0ciwgZW5kUHRyKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBpID0gMDtcclxuXHJcbiAgICB2YXIgc3RyID0gJyc7XHJcbiAgICB3aGlsZSAoMSkge1xyXG4gICAgICB2YXIgY29kZVVuaXQgPSBIRUFQMTZbKCgocHRyKSsoaSoyKSk+PjEpXTtcclxuICAgICAgaWYgKGNvZGVVbml0ID09IDApIHJldHVybiBzdHI7XHJcbiAgICAgICsraTtcclxuICAgICAgLy8gZnJvbUNoYXJDb2RlIGNvbnN0cnVjdHMgYSBjaGFyYWN0ZXIgZnJvbSBhIFVURi0xNiBjb2RlIHVuaXQsIHNvIHdlIGNhbiBwYXNzIHRoZSBVVEYxNiBzdHJpbmcgcmlnaHQgdGhyb3VnaC5cclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVVuaXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ29waWVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QgJ3N0cicgdG8gdGhlIGVtc2NyaXB0ZW4gSEVBUCBhdCBhZGRyZXNzICdvdXRQdHInLFxyXG4vLyBudWxsLXRlcm1pbmF0ZWQgYW5kIGVuY29kZWQgaW4gVVRGMTYgZm9ybS4gVGhlIGNvcHkgd2lsbCByZXF1aXJlIGF0IG1vc3Qgc3RyLmxlbmd0aCo0KzIgYnl0ZXMgb2Ygc3BhY2UgaW4gdGhlIEhFQVAuXHJcbi8vIFVzZSB0aGUgZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYxNigpIHRvIGNvbXB1dGUgdGhlIGV4YWN0IG51bWJlciBvZiBieXRlcyAoZXhjbHVkaW5nIG51bGwgdGVybWluYXRvcikgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGwgd3JpdGUuXHJcbi8vIFBhcmFtZXRlcnM6XHJcbi8vICAgc3RyOiB0aGUgSmF2YXNjcmlwdCBzdHJpbmcgdG8gY29weS5cclxuLy8gICBvdXRQdHI6IEJ5dGUgYWRkcmVzcyBpbiBFbXNjcmlwdGVuIEhFQVAgd2hlcmUgdG8gd3JpdGUgdGhlIHN0cmluZyB0by5cclxuLy8gICBtYXhCeXRlc1RvV3JpdGU6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBieXRlcyB0aGlzIGZ1bmN0aW9uIGNhbiB3cml0ZSB0byB0aGUgYXJyYXkuIFRoaXMgY291bnQgc2hvdWxkIGluY2x1ZGUgdGhlIG51bGxcclxuLy8gICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0b3IsIGkuZS4gaWYgbWF4Qnl0ZXNUb1dyaXRlPTIsIG9ubHkgdGhlIG51bGwgdGVybWluYXRvciB3aWxsIGJlIHdyaXR0ZW4gYW5kIG5vdGhpbmcgZWxzZS5cclxuLy8gICAgICAgICAgICAgICAgICAgIG1heEJ5dGVzVG9Xcml0ZTwyIGRvZXMgbm90IHdyaXRlIGFueSBieXRlcyB0byB0aGUgb3V0cHV0LCBub3QgZXZlbiB0aGUgbnVsbCB0ZXJtaW5hdG9yLlxyXG4vLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgd3JpdHRlbiwgRVhDTFVESU5HIHRoZSBudWxsIHRlcm1pbmF0b3IuXHJcblxyXG5mdW5jdGlvbiBzdHJpbmdUb1VURjE2KHN0ciwgb3V0UHRyLCBtYXhCeXRlc1RvV3JpdGUpIHtcclxuICBhc3NlcnQob3V0UHRyICUgMiA9PSAwLCAnUG9pbnRlciBwYXNzZWQgdG8gc3RyaW5nVG9VVEYxNiBtdXN0IGJlIGFsaWduZWQgdG8gdHdvIGJ5dGVzIScpO1xyXG4gIGFzc2VydCh0eXBlb2YgbWF4Qnl0ZXNUb1dyaXRlID09ICdudW1iZXInLCAnc3RyaW5nVG9VVEYxNihzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSBpcyBtaXNzaW5nIHRoZSB0aGlyZCBwYXJhbWV0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGxlbmd0aCBvZiB0aGUgb3V0cHV0IGJ1ZmZlciEnKTtcclxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaWYgbWF4IGJ5dGVzIGlzIG5vdCBzcGVjaWZpZWQsIGFzc3VtZSB1bnNhZmUgdW5ib3VuZGVkIHdyaXRlIGlzIGFsbG93ZWQuXHJcbiAgaWYgKG1heEJ5dGVzVG9Xcml0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXhCeXRlc1RvV3JpdGUgPSAweDdGRkZGRkZGO1xyXG4gIH1cclxuICBpZiAobWF4Qnl0ZXNUb1dyaXRlIDwgMikgcmV0dXJuIDA7XHJcbiAgbWF4Qnl0ZXNUb1dyaXRlIC09IDI7IC8vIE51bGwgdGVybWluYXRvci5cclxuICB2YXIgc3RhcnRQdHIgPSBvdXRQdHI7XHJcbiAgdmFyIG51bUNoYXJzVG9Xcml0ZSA9IChtYXhCeXRlc1RvV3JpdGUgPCBzdHIubGVuZ3RoKjIpID8gKG1heEJ5dGVzVG9Xcml0ZSAvIDIpIDogc3RyLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYXJzVG9Xcml0ZTsgKytpKSB7XHJcbiAgICAvLyBjaGFyQ29kZUF0IHJldHVybnMgYSBVVEYtMTYgZW5jb2RlZCBjb2RlIHVuaXQsIHNvIGl0IGNhbiBiZSBkaXJlY3RseSB3cml0dGVuIHRvIHRoZSBIRUFQLlxyXG4gICAgdmFyIGNvZGVVbml0ID0gc3RyLmNoYXJDb2RlQXQoaSk7IC8vIHBvc3NpYmx5IGEgbGVhZCBzdXJyb2dhdGVcclxuICAgIEhFQVAxNlsoKG91dFB0cik+PjEpXT1jb2RlVW5pdDtcclxuICAgIG91dFB0ciArPSAyO1xyXG4gIH1cclxuICAvLyBOdWxsLXRlcm1pbmF0ZSB0aGUgcG9pbnRlciB0byB0aGUgSEVBUC5cclxuICBIRUFQMTZbKChvdXRQdHIpPj4xKV09MDtcclxuICByZXR1cm4gb3V0UHRyIC0gc3RhcnRQdHI7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyB0aGUgZ2l2ZW4gSmF2YXNjcmlwdCBzdHJpbmcgdGFrZXMgaWYgZW5jb2RlZCBhcyBhIFVURjE2IGJ5dGUgYXJyYXksIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yIGJ5dGUuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjE2KHN0cikge1xyXG4gIHJldHVybiBzdHIubGVuZ3RoKjI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVURjMyVG9TdHJpbmcocHRyKSB7XHJcbiAgYXNzZXJ0KHB0ciAlIDQgPT0gMCwgJ1BvaW50ZXIgcGFzc2VkIHRvIFVURjMyVG9TdHJpbmcgbXVzdCBiZSBhbGlnbmVkIHRvIGZvdXIgYnl0ZXMhJyk7XHJcbiAgdmFyIGkgPSAwO1xyXG5cclxuICB2YXIgc3RyID0gJyc7XHJcbiAgd2hpbGUgKDEpIHtcclxuICAgIHZhciB1dGYzMiA9IEhFQVAzMlsoKChwdHIpKyhpKjQpKT4+MildO1xyXG4gICAgaWYgKHV0ZjMyID09IDApXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICArK2k7XHJcbiAgICAvLyBHb3RjaGE6IGZyb21DaGFyQ29kZSBjb25zdHJ1Y3RzIGEgY2hhcmFjdGVyIGZyb20gYSBVVEYtMTYgZW5jb2RlZCBjb2RlIChwYWlyKSwgbm90IGZyb20gYSBVbmljb2RlIGNvZGUgcG9pbnQhIFNvIGVuY29kZSB0aGUgY29kZSBwb2ludCB0byBVVEYtMTYgZm9yIGNvbnN0cnVjdGluZy5cclxuICAgIC8vIFNlZSBodHRwOi8vdW5pY29kZS5vcmcvZmFxL3V0Zl9ib20uaHRtbCN1dGYxNi0zXHJcbiAgICBpZiAodXRmMzIgPj0gMHgxMDAwMCkge1xyXG4gICAgICB2YXIgY2ggPSB1dGYzMiAtIDB4MTAwMDA7XHJcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCB8IChjaCA+PiAxMCksIDB4REMwMCB8IChjaCAmIDB4M0ZGKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1dGYzMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb3BpZXMgdGhlIGdpdmVuIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdCAnc3RyJyB0byB0aGUgZW1zY3JpcHRlbiBIRUFQIGF0IGFkZHJlc3MgJ291dFB0cicsXHJcbi8vIG51bGwtdGVybWluYXRlZCBhbmQgZW5jb2RlZCBpbiBVVEYzMiBmb3JtLiBUaGUgY29weSB3aWxsIHJlcXVpcmUgYXQgbW9zdCBzdHIubGVuZ3RoKjQrNCBieXRlcyBvZiBzcGFjZSBpbiB0aGUgSEVBUC5cclxuLy8gVXNlIHRoZSBmdW5jdGlvbiBsZW5ndGhCeXRlc1VURjMyKCkgdG8gY29tcHV0ZSB0aGUgZXhhY3QgbnVtYmVyIG9mIGJ5dGVzIChleGNsdWRpbmcgbnVsbCB0ZXJtaW5hdG9yKSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbCB3cml0ZS5cclxuLy8gUGFyYW1ldGVyczpcclxuLy8gICBzdHI6IHRoZSBKYXZhc2NyaXB0IHN0cmluZyB0byBjb3B5LlxyXG4vLyAgIG91dFB0cjogQnl0ZSBhZGRyZXNzIGluIEVtc2NyaXB0ZW4gSEVBUCB3aGVyZSB0byB3cml0ZSB0aGUgc3RyaW5nIHRvLlxyXG4vLyAgIG1heEJ5dGVzVG9Xcml0ZTogVGhlIG1heGltdW0gbnVtYmVyIG9mIGJ5dGVzIHRoaXMgZnVuY3Rpb24gY2FuIHdyaXRlIHRvIHRoZSBhcnJheS4gVGhpcyBjb3VudCBzaG91bGQgaW5jbHVkZSB0aGUgbnVsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgdGVybWluYXRvciwgaS5lLiBpZiBtYXhCeXRlc1RvV3JpdGU9NCwgb25seSB0aGUgbnVsbCB0ZXJtaW5hdG9yIHdpbGwgYmUgd3JpdHRlbiBhbmQgbm90aGluZyBlbHNlLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgbWF4Qnl0ZXNUb1dyaXRlPDQgZG9lcyBub3Qgd3JpdGUgYW55IGJ5dGVzIHRvIHRoZSBvdXRwdXQsIG5vdCBldmVuIHRoZSBudWxsIHRlcm1pbmF0b3IuXHJcbi8vIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyB3cml0dGVuLCBFWENMVURJTkcgdGhlIG51bGwgdGVybWluYXRvci5cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvVVRGMzIoc3RyLCBvdXRQdHIsIG1heEJ5dGVzVG9Xcml0ZSkge1xyXG4gIGFzc2VydChvdXRQdHIgJSA0ID09IDAsICdQb2ludGVyIHBhc3NlZCB0byBzdHJpbmdUb1VURjMyIG11c3QgYmUgYWxpZ25lZCB0byBmb3VyIGJ5dGVzIScpO1xyXG4gIGFzc2VydCh0eXBlb2YgbWF4Qnl0ZXNUb1dyaXRlID09ICdudW1iZXInLCAnc3RyaW5nVG9VVEYzMihzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSBpcyBtaXNzaW5nIHRoZSB0aGlyZCBwYXJhbWV0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGxlbmd0aCBvZiB0aGUgb3V0cHV0IGJ1ZmZlciEnKTtcclxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaWYgbWF4IGJ5dGVzIGlzIG5vdCBzcGVjaWZpZWQsIGFzc3VtZSB1bnNhZmUgdW5ib3VuZGVkIHdyaXRlIGlzIGFsbG93ZWQuXHJcbiAgaWYgKG1heEJ5dGVzVG9Xcml0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXhCeXRlc1RvV3JpdGUgPSAweDdGRkZGRkZGO1xyXG4gIH1cclxuICBpZiAobWF4Qnl0ZXNUb1dyaXRlIDwgNCkgcmV0dXJuIDA7XHJcbiAgdmFyIHN0YXJ0UHRyID0gb3V0UHRyO1xyXG4gIHZhciBlbmRQdHIgPSBzdGFydFB0ciArIG1heEJ5dGVzVG9Xcml0ZSAtIDQ7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIC8vIEdvdGNoYTogY2hhckNvZGVBdCByZXR1cm5zIGEgMTYtYml0IHdvcmQgdGhhdCBpcyBhIFVURi0xNiBlbmNvZGVkIGNvZGUgdW5pdCwgbm90IGEgVW5pY29kZSBjb2RlIHBvaW50IG9mIHRoZSBjaGFyYWN0ZXIhIFdlIG11c3QgZGVjb2RlIHRoZSBzdHJpbmcgdG8gVVRGLTMyIHRvIHRoZSBoZWFwLlxyXG4gICAgLy8gU2VlIGh0dHA6Ly91bmljb2RlLm9yZy9mYXEvdXRmX2JvbS5odG1sI3V0ZjE2LTNcclxuICAgIHZhciBjb2RlVW5pdCA9IHN0ci5jaGFyQ29kZUF0KGkpOyAvLyBwb3NzaWJseSBhIGxlYWQgc3Vycm9nYXRlXHJcbiAgICBpZiAoY29kZVVuaXQgPj0gMHhEODAwICYmIGNvZGVVbml0IDw9IDB4REZGRikge1xyXG4gICAgICB2YXIgdHJhaWxTdXJyb2dhdGUgPSBzdHIuY2hhckNvZGVBdCgrK2kpO1xyXG4gICAgICBjb2RlVW5pdCA9IDB4MTAwMDAgKyAoKGNvZGVVbml0ICYgMHgzRkYpIDw8IDEwKSB8ICh0cmFpbFN1cnJvZ2F0ZSAmIDB4M0ZGKTtcclxuICAgIH1cclxuICAgIEhFQVAzMlsoKG91dFB0cik+PjIpXT1jb2RlVW5pdDtcclxuICAgIG91dFB0ciArPSA0O1xyXG4gICAgaWYgKG91dFB0ciArIDQgPiBlbmRQdHIpIGJyZWFrO1xyXG4gIH1cclxuICAvLyBOdWxsLXRlcm1pbmF0ZSB0aGUgcG9pbnRlciB0byB0aGUgSEVBUC5cclxuICBIRUFQMzJbKChvdXRQdHIpPj4yKV09MDtcclxuICByZXR1cm4gb3V0UHRyIC0gc3RhcnRQdHI7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyB0aGUgZ2l2ZW4gSmF2YXNjcmlwdCBzdHJpbmcgdGFrZXMgaWYgZW5jb2RlZCBhcyBhIFVURjE2IGJ5dGUgYXJyYXksIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yIGJ5dGUuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjMyKHN0cikge1xyXG4gIHZhciBsZW4gPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAvLyBHb3RjaGE6IGNoYXJDb2RlQXQgcmV0dXJucyBhIDE2LWJpdCB3b3JkIHRoYXQgaXMgYSBVVEYtMTYgZW5jb2RlZCBjb2RlIHVuaXQsIG5vdCBhIFVuaWNvZGUgY29kZSBwb2ludCBvZiB0aGUgY2hhcmFjdGVyISBXZSBtdXN0IGRlY29kZSB0aGUgc3RyaW5nIHRvIFVURi0zMiB0byB0aGUgaGVhcC5cclxuICAgIC8vIFNlZSBodHRwOi8vdW5pY29kZS5vcmcvZmFxL3V0Zl9ib20uaHRtbCN1dGYxNi0zXHJcbiAgICB2YXIgY29kZVVuaXQgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgIGlmIChjb2RlVW5pdCA+PSAweEQ4MDAgJiYgY29kZVVuaXQgPD0gMHhERkZGKSArK2k7IC8vIHBvc3NpYmx5IGEgbGVhZCBzdXJyb2dhdGUsIHNvIHNraXAgb3ZlciB0aGUgdGFpbCBzdXJyb2dhdGUuXHJcbiAgICBsZW4gKz0gNDtcclxuICB9XHJcblxyXG4gIHJldHVybiBsZW47XHJcbn1cclxuXHJcbi8vIEFsbG9jYXRlIGhlYXAgc3BhY2UgZm9yIGEgSlMgc3RyaW5nLCBhbmQgd3JpdGUgaXQgdGhlcmUuXHJcbi8vIEl0IGlzIHRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgY2FsbGVyIHRvIGZyZWUoKSB0aGF0IG1lbW9yeS5cclxuZnVuY3Rpb24gYWxsb2NhdGVVVEY4KHN0cikge1xyXG4gIHZhciBzaXplID0gbGVuZ3RoQnl0ZXNVVEY4KHN0cikgKyAxO1xyXG4gIHZhciByZXQgPSBfbWFsbG9jKHNpemUpO1xyXG4gIGlmIChyZXQpIHN0cmluZ1RvVVRGOEFycmF5KHN0ciwgSEVBUDgsIHJldCwgc2l6ZSk7XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLy8gQWxsb2NhdGUgc3RhY2sgc3BhY2UgZm9yIGEgSlMgc3RyaW5nLCBhbmQgd3JpdGUgaXQgdGhlcmUuXHJcbmZ1bmN0aW9uIGFsbG9jYXRlVVRGOE9uU3RhY2soc3RyKSB7XHJcbiAgdmFyIHNpemUgPSBsZW5ndGhCeXRlc1VURjgoc3RyKSArIDE7XHJcbiAgdmFyIHJldCA9IHN0YWNrQWxsb2Moc2l6ZSk7XHJcbiAgc3RyaW5nVG9VVEY4QXJyYXkoc3RyLCBIRUFQOCwgcmV0LCBzaXplKTtcclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZW1hbmdsZShmdW5jKSB7XHJcbiAgd2Fybk9uY2UoJ3dhcm5pbmc6IGJ1aWxkIHdpdGggIC1zIERFTUFOR0xFX1NVUFBPUlQ9MSAgdG8gbGluayBpbiBsaWJjeHhhYmkgZGVtYW5nbGluZycpO1xyXG4gIHJldHVybiBmdW5jO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZW1hbmdsZUFsbCh0ZXh0KSB7XHJcbiAgdmFyIHJlZ2V4ID1cclxuICAgIC9fX1pbXFx3XFxkX10rL2c7XHJcbiAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCxcclxuICAgIGZ1bmN0aW9uKHgpIHtcclxuICAgICAgdmFyIHkgPSBkZW1hbmdsZSh4KTtcclxuICAgICAgcmV0dXJuIHggPT09IHkgPyB4IDogKHggKyAnIFsnICsgeSArICddJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24ganNTdGFja1RyYWNlKCkge1xyXG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcclxuICBpZiAoIWVyci5zdGFjaykge1xyXG4gICAgLy8gSUUxMCsgc3BlY2lhbCBjYXNlczogSXQgZG9lcyBoYXZlIGNhbGxzdGFjayBpbmZvLCBidXQgaXQgaXMgb25seSBwb3B1bGF0ZWQgaWYgYW4gRXJyb3Igb2JqZWN0IGlzIHRocm93bixcclxuICAgIC8vIHNvIHRyeSB0aGF0IGFzIGEgc3BlY2lhbC1jYXNlLlxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKDApO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGVyciA9IGU7XHJcbiAgICB9XHJcbiAgICBpZiAoIWVyci5zdGFjaykge1xyXG4gICAgICByZXR1cm4gJyhubyBzdGFjayB0cmFjZSBhdmFpbGFibGUpJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVyci5zdGFjay50b1N0cmluZygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFja1RyYWNlKCkge1xyXG4gIHZhciBqcyA9IGpzU3RhY2tUcmFjZSgpO1xyXG4gIGlmIChNb2R1bGVbJ2V4dHJhU3RhY2tUcmFjZSddKSBqcyArPSAnXFxuJyArIE1vZHVsZVsnZXh0cmFTdGFja1RyYWNlJ10oKTtcclxuICByZXR1cm4gZGVtYW5nbGVBbGwoanMpO1xyXG59XHJcblxyXG4vLyBNZW1vcnkgbWFuYWdlbWVudFxyXG5cclxudmFyIFBBR0VfU0laRSA9IDE2Mzg0O1xyXG52YXIgV0FTTV9QQUdFX1NJWkUgPSA2NTUzNjtcclxudmFyIEFTTUpTX1BBR0VfU0laRSA9IDE2Nzc3MjE2O1xyXG52YXIgTUlOX1RPVEFMX01FTU9SWSA9IDE2Nzc3MjE2O1xyXG5cclxuZnVuY3Rpb24gYWxpZ25VcCh4LCBtdWx0aXBsZSkge1xyXG4gIGlmICh4ICUgbXVsdGlwbGUgPiAwKSB7XHJcbiAgICB4ICs9IG11bHRpcGxlIC0gKHggJSBtdWx0aXBsZSk7XHJcbiAgfVxyXG4gIHJldHVybiB4O1xyXG59XHJcblxyXG52YXIgSEVBUCxcclxuLyoqIEB0eXBlIHtBcnJheUJ1ZmZlcn0gKi9cclxuICBidWZmZXIsXHJcbi8qKiBAdHlwZSB7SW50OEFycmF5fSAqL1xyXG4gIEhFQVA4LFxyXG4vKiogQHR5cGUge1VpbnQ4QXJyYXl9ICovXHJcbiAgSEVBUFU4LFxyXG4vKiogQHR5cGUge0ludDE2QXJyYXl9ICovXHJcbiAgSEVBUDE2LFxyXG4vKiogQHR5cGUge1VpbnQxNkFycmF5fSAqL1xyXG4gIEhFQVBVMTYsXHJcbi8qKiBAdHlwZSB7SW50MzJBcnJheX0gKi9cclxuICBIRUFQMzIsXHJcbi8qKiBAdHlwZSB7VWludDMyQXJyYXl9ICovXHJcbiAgSEVBUFUzMixcclxuLyoqIEB0eXBlIHtGbG9hdDMyQXJyYXl9ICovXHJcbiAgSEVBUEYzMixcclxuLyoqIEB0eXBlIHtGbG9hdDY0QXJyYXl9ICovXHJcbiAgSEVBUEY2NDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEJ1ZmZlcihidWYpIHtcclxuICBNb2R1bGVbJ2J1ZmZlciddID0gYnVmZmVyID0gYnVmO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVHbG9iYWxCdWZmZXJWaWV3cygpIHtcclxuICBNb2R1bGVbJ0hFQVA4J10gPSBIRUFQOCA9IG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVAxNiddID0gSEVBUDE2ID0gbmV3IEludDE2QXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVAzMiddID0gSEVBUDMyID0gbmV3IEludDMyQXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVBVOCddID0gSEVBUFU4ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVBVMTYnXSA9IEhFQVBVMTYgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVBVMzInXSA9IEhFQVBVMzIgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVBGMzInXSA9IEhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgTW9kdWxlWydIRUFQRjY0J10gPSBIRUFQRjY0ID0gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xyXG59XHJcblxyXG52YXIgU1RBVElDX0JBU0UsIFNUQVRJQ1RPUCwgc3RhdGljU2VhbGVkOyAvLyBzdGF0aWMgYXJlYVxyXG52YXIgU1RBQ0tfQkFTRSwgU1RBQ0tUT1AsIFNUQUNLX01BWDsgLy8gc3RhY2sgYXJlYVxyXG52YXIgRFlOQU1JQ19CQVNFLCBEWU5BTUlDVE9QX1BUUjsgLy8gZHluYW1pYyBhcmVhIGhhbmRsZWQgYnkgc2Jya1xyXG5cclxuICBTVEFUSUNfQkFTRSA9IFNUQVRJQ1RPUCA9IFNUQUNLX0JBU0UgPSBTVEFDS1RPUCA9IFNUQUNLX01BWCA9IERZTkFNSUNfQkFTRSA9IERZTkFNSUNUT1BfUFRSID0gMDtcclxuICBzdGF0aWNTZWFsZWQgPSBmYWxzZTtcclxuXHJcblxyXG4vLyBJbml0aWFsaXplcyB0aGUgc3RhY2sgY29va2llLiBDYWxsZWQgYXQgdGhlIHN0YXJ0dXAgb2YgbWFpbiBhbmQgYXQgdGhlIHN0YXJ0dXAgb2YgZWFjaCB0aHJlYWQgaW4gcHRocmVhZHMgbW9kZS5cclxuZnVuY3Rpb24gd3JpdGVTdGFja0Nvb2tpZSgpIHtcclxuICBhc3NlcnQoKFNUQUNLX01BWCAmIDMpID09IDApO1xyXG4gIEhFQVBVMzJbKFNUQUNLX01BWCA+PiAyKS0xXSA9IDB4MDIxMzU0Njc7XHJcbiAgSEVBUFUzMlsoU1RBQ0tfTUFYID4+IDIpLTJdID0gMHg4OUJBQ0RGRTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tTdGFja0Nvb2tpZSgpIHtcclxuICBpZiAoSEVBUFUzMlsoU1RBQ0tfTUFYID4+IDIpLTFdICE9IDB4MDIxMzU0NjcgfHwgSEVBUFUzMlsoU1RBQ0tfTUFYID4+IDIpLTJdICE9IDB4ODlCQUNERkUpIHtcclxuICAgIGFib3J0KCdTdGFjayBvdmVyZmxvdyEgU3RhY2sgY29va2llIGhhcyBiZWVuIG92ZXJ3cml0dGVuLCBleHBlY3RlZCBoZXggZHdvcmRzIDB4ODlCQUNERkUgYW5kIDB4MDIxMzU0NjcsIGJ1dCByZWNlaXZlZCAweCcgKyBIRUFQVTMyWyhTVEFDS19NQVggPj4gMiktMl0udG9TdHJpbmcoMTYpICsgJyAnICsgSEVBUFUzMlsoU1RBQ0tfTUFYID4+IDIpLTFdLnRvU3RyaW5nKDE2KSk7XHJcbiAgfVxyXG4gIC8vIEFsc28gdGVzdCB0aGUgZ2xvYmFsIGFkZHJlc3MgMCBmb3IgaW50ZWdyaXR5LiBUaGlzIGNoZWNrIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggU0FGRV9TUExJVF9NRU1PUlkgdGhvdWdoLCBzaW5jZSB0aGF0IG1vZGUgYWxyZWFkeSB0ZXN0cyBhbGwgYWRkcmVzcyAwIGFjY2Vzc2VzIG9uIGl0cyBvd24uXHJcbiAgaWYgKEhFQVAzMlswXSAhPT0gMHg2MzczNmQ2NSAvKiAnZW1zYycgKi8pIHRocm93ICdSdW50aW1lIGVycm9yOiBUaGUgYXBwbGljYXRpb24gaGFzIGNvcnJ1cHRlZCBpdHMgaGVhcCBtZW1vcnkgYXJlYSAoYWRkcmVzcyB6ZXJvKSEnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm9ydFN0YWNrT3ZlcmZsb3coYWxsb2NTaXplKSB7XHJcbiAgYWJvcnQoJ1N0YWNrIG92ZXJmbG93ISBBdHRlbXB0ZWQgdG8gYWxsb2NhdGUgJyArIGFsbG9jU2l6ZSArICcgYnl0ZXMgb24gdGhlIHN0YWNrLCBidXQgc3RhY2sgaGFzIG9ubHkgJyArIChTVEFDS19NQVggLSBzdGFja1NhdmUoKSArIGFsbG9jU2l6ZSkgKyAnIGJ5dGVzIGF2YWlsYWJsZSEnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkoKSB7XHJcbiAgYWJvcnQoJ0Nhbm5vdCBlbmxhcmdlIG1lbW9yeSBhcnJheXMuIEVpdGhlciAoMSkgY29tcGlsZSB3aXRoICAtcyBUT1RBTF9NRU1PUlk9WCAgd2l0aCBYIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHZhbHVlICcgKyBUT1RBTF9NRU1PUlkgKyAnLCAoMikgY29tcGlsZSB3aXRoICAtcyBBTExPV19NRU1PUllfR1JPV1RIPTEgIHdoaWNoIGFsbG93cyBpbmNyZWFzaW5nIHRoZSBzaXplIGF0IHJ1bnRpbWUsIG9yICgzKSBpZiB5b3Ugd2FudCBtYWxsb2MgdG8gcmV0dXJuIE5VTEwgKDApIGluc3RlYWQgb2YgdGhpcyBhYm9ydCwgY29tcGlsZSB3aXRoICAtcyBBQk9SVElOR19NQUxMT0M9MCAnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGVubGFyZ2VNZW1vcnkoKSB7XHJcbiAgYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkoKTtcclxufVxyXG5cclxuXHJcbnZhciBUT1RBTF9TVEFDSyA9IE1vZHVsZVsnVE9UQUxfU1RBQ0snXSB8fCA1MjQyODgwO1xyXG52YXIgVE9UQUxfTUVNT1JZID0gTW9kdWxlWydUT1RBTF9NRU1PUlknXSB8fCAxNjc3NzIxNjtcclxuaWYgKFRPVEFMX01FTU9SWSA8IFRPVEFMX1NUQUNLKSBNb2R1bGUucHJpbnRFcnIoJ1RPVEFMX01FTU9SWSBzaG91bGQgYmUgbGFyZ2VyIHRoYW4gVE9UQUxfU1RBQ0ssIHdhcyAnICsgVE9UQUxfTUVNT1JZICsgJyEgKFRPVEFMX1NUQUNLPScgKyBUT1RBTF9TVEFDSyArICcpJyk7XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBydW50aW1lJ3MgbWVtb3J5XHJcbi8vIGNoZWNrIGZvciBmdWxsIGVuZ2luZSBzdXBwb3J0ICh1c2Ugc3RyaW5nICdzdWJhcnJheScgdG8gYXZvaWQgY2xvc3VyZSBjb21waWxlciBjb25mdXNpb24pXHJcbmFzc2VydCh0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEZsb2F0NjRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgSW50MzJBcnJheS5wcm90b3R5cGUuc3ViYXJyYXkgIT09IHVuZGVmaW5lZCAmJiBJbnQzMkFycmF5LnByb3RvdHlwZS5zZXQgIT09IHVuZGVmaW5lZCxcclxuICAgICAgICdKUyBlbmdpbmUgZG9lcyBub3QgcHJvdmlkZSBmdWxsIHR5cGVkIGFycmF5IHN1cHBvcnQnKTtcclxuXHJcblxyXG5cclxuLy8gVXNlIGEgcHJvdmlkZWQgYnVmZmVyLCBpZiB0aGVyZSBpcyBvbmUsIG9yIGVsc2UgYWxsb2NhdGUgYSBuZXcgb25lXHJcbmlmIChNb2R1bGVbJ2J1ZmZlciddKSB7XHJcbiAgYnVmZmVyID0gTW9kdWxlWydidWZmZXInXTtcclxuICBhc3NlcnQoYnVmZmVyLmJ5dGVMZW5ndGggPT09IFRPVEFMX01FTU9SWSwgJ3Byb3ZpZGVkIGJ1ZmZlciBzaG91bGQgYmUgJyArIFRPVEFMX01FTU9SWSArICcgYnl0ZXMsIGJ1dCBpdCBpcyAnICsgYnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG59IGVsc2Uge1xyXG4gIC8vIFVzZSBhIFdlYkFzc2VtYmx5IG1lbW9yeSB3aGVyZSBhdmFpbGFibGVcclxuICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuTWVtb3J5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBhc3NlcnQoVE9UQUxfTUVNT1JZICUgV0FTTV9QQUdFX1NJWkUgPT09IDApO1xyXG4gICAgTW9kdWxlWyd3YXNtTWVtb3J5J10gPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgJ2luaXRpYWwnOiBUT1RBTF9NRU1PUlkgLyBXQVNNX1BBR0VfU0laRSwgJ21heGltdW0nOiBUT1RBTF9NRU1PUlkgLyBXQVNNX1BBR0VfU0laRSB9KTtcclxuICAgIGJ1ZmZlciA9IE1vZHVsZVsnd2FzbU1lbW9yeSddLmJ1ZmZlcjtcclxuICB9IGVsc2VcclxuICB7XHJcbiAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoVE9UQUxfTUVNT1JZKTtcclxuICB9XHJcbiAgYXNzZXJ0KGJ1ZmZlci5ieXRlTGVuZ3RoID09PSBUT1RBTF9NRU1PUlkpO1xyXG4gIE1vZHVsZVsnYnVmZmVyJ10gPSBidWZmZXI7XHJcbn1cclxudXBkYXRlR2xvYmFsQnVmZmVyVmlld3MoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUb3RhbE1lbW9yeSgpIHtcclxuICByZXR1cm4gVE9UQUxfTUVNT1JZO1xyXG59XHJcblxyXG4vLyBFbmRpYW5uZXNzIGNoZWNrIChub3RlOiBhc3N1bWVzIGNvbXBpbGVyIGFyY2ggd2FzIGxpdHRsZS1lbmRpYW4pXHJcbiAgSEVBUDMyWzBdID0gMHg2MzczNmQ2NTsgLyogJ2Vtc2MnICovXHJcbkhFQVAxNlsxXSA9IDB4NjM3MztcclxuaWYgKEhFQVBVOFsyXSAhPT0gMHg3MyB8fCBIRUFQVThbM10gIT09IDB4NjMpIHRocm93ICdSdW50aW1lIGVycm9yOiBleHBlY3RlZCB0aGUgc3lzdGVtIHRvIGJlIGxpdHRsZS1lbmRpYW4hJztcclxuXHJcbmZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcykge1xyXG4gIHdoaWxlKGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3Muc2hpZnQoKTtcclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIHZhciBmdW5jID0gY2FsbGJhY2suZnVuYztcclxuICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKGNhbGxiYWNrLmFyZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgTW9kdWxlWydkeW5DYWxsX3YnXShmdW5jKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNb2R1bGVbJ2R5bkNhbGxfdmknXShmdW5jLCBjYWxsYmFjay5hcmcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmdW5jKGNhbGxiYWNrLmFyZyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNhbGxiYWNrLmFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgX19BVFBSRVJVTl9fICA9IFtdOyAvLyBmdW5jdGlvbnMgY2FsbGVkIGJlZm9yZSB0aGUgcnVudGltZSBpcyBpbml0aWFsaXplZFxyXG52YXIgX19BVElOSVRfXyAgICA9IFtdOyAvLyBmdW5jdGlvbnMgY2FsbGVkIGR1cmluZyBzdGFydHVwXHJcbnZhciBfX0FUTUFJTl9fICAgID0gW107IC8vIGZ1bmN0aW9ucyBjYWxsZWQgd2hlbiBtYWluKCkgaXMgdG8gYmUgcnVuXHJcbnZhciBfX0FURVhJVF9fICAgID0gW107IC8vIGZ1bmN0aW9ucyBjYWxsZWQgZHVyaW5nIHNodXRkb3duXHJcbnZhciBfX0FUUE9TVFJVTl9fID0gW107IC8vIGZ1bmN0aW9ucyBjYWxsZWQgYWZ0ZXIgdGhlIHJ1bnRpbWUgaGFzIGV4aXRlZFxyXG5cclxudmFyIHJ1bnRpbWVJbml0aWFsaXplZCA9IGZhbHNlO1xyXG52YXIgcnVudGltZUV4aXRlZCA9IGZhbHNlO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHByZVJ1bigpIHtcclxuICAvLyBjb21wYXRpYmlsaXR5IC0gbWVyZ2UgaW4gYW55dGhpbmcgZnJvbSBNb2R1bGVbJ3ByZVJ1biddIGF0IHRoaXMgdGltZVxyXG4gIGlmIChNb2R1bGVbJ3ByZVJ1biddKSB7XHJcbiAgICBpZiAodHlwZW9mIE1vZHVsZVsncHJlUnVuJ10gPT0gJ2Z1bmN0aW9uJykgTW9kdWxlWydwcmVSdW4nXSA9IFtNb2R1bGVbJ3ByZVJ1biddXTtcclxuICAgIHdoaWxlIChNb2R1bGVbJ3ByZVJ1biddLmxlbmd0aCkge1xyXG4gICAgICBhZGRPblByZVJ1bihNb2R1bGVbJ3ByZVJ1biddLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnN1cmVJbml0UnVudGltZSgpIHtcclxuICBjaGVja1N0YWNrQ29va2llKCk7XHJcbiAgaWYgKHJ1bnRpbWVJbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gIHJ1bnRpbWVJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZU1haW4oKSB7XHJcbiAgY2hlY2tTdGFja0Nvb2tpZSgpO1xyXG4gIGNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRNQUlOX18pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleGl0UnVudGltZSgpIHtcclxuICBjaGVja1N0YWNrQ29va2llKCk7XHJcbiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVEVYSVRfXyk7XHJcbiAgcnVudGltZUV4aXRlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RSdW4oKSB7XHJcbiAgY2hlY2tTdGFja0Nvb2tpZSgpO1xyXG4gIC8vIGNvbXBhdGliaWxpdHkgLSBtZXJnZSBpbiBhbnl0aGluZyBmcm9tIE1vZHVsZVsncG9zdFJ1biddIGF0IHRoaXMgdGltZVxyXG4gIGlmIChNb2R1bGVbJ3Bvc3RSdW4nXSkge1xyXG4gICAgaWYgKHR5cGVvZiBNb2R1bGVbJ3Bvc3RSdW4nXSA9PSAnZnVuY3Rpb24nKSBNb2R1bGVbJ3Bvc3RSdW4nXSA9IFtNb2R1bGVbJ3Bvc3RSdW4nXV07XHJcbiAgICB3aGlsZSAoTW9kdWxlWydwb3N0UnVuJ10ubGVuZ3RoKSB7XHJcbiAgICAgIGFkZE9uUG9zdFJ1bihNb2R1bGVbJ3Bvc3RSdW4nXS5zaGlmdCgpKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKSB7XHJcbiAgX19BVFBSRVJVTl9fLnVuc2hpZnQoY2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkluaXQoY2IpIHtcclxuICBfX0FUSU5JVF9fLnVuc2hpZnQoY2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPblByZU1haW4oY2IpIHtcclxuICBfX0FUTUFJTl9fLnVuc2hpZnQoY2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPbkV4aXQoY2IpIHtcclxuICBfX0FURVhJVF9fLnVuc2hpZnQoY2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPblBvc3RSdW4oY2IpIHtcclxuICBfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpO1xyXG59XHJcblxyXG4vLyBEZXByZWNhdGVkOiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBub3QgYmUgY2FsbGVkIGJlY2F1c2UgaXQgaXMgdW5zYWZlIGFuZCBkb2VzIG5vdCBwcm92aWRlXHJcbi8vIGEgbWF4aW11bSBsZW5ndGggbGltaXQgb2YgaG93IG1hbnkgYnl0ZXMgaXQgaXMgYWxsb3dlZCB0byB3cml0ZS4gUHJlZmVyIGNhbGxpbmcgdGhlXHJcbi8vIGZ1bmN0aW9uIHN0cmluZ1RvVVRGOEFycmF5KCkgaW5zdGVhZCwgd2hpY2ggdGFrZXMgaW4gYSBtYXhpbXVtIGxlbmd0aCB0aGF0IGNhbiBiZSB1c2VkXHJcbi8vIHRvIGJlIHNlY3VyZSBmcm9tIG91dCBvZiBib3VuZHMgd3JpdGVzLlxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZnVuY3Rpb24gd3JpdGVTdHJpbmdUb01lbW9yeShzdHJpbmcsIGJ1ZmZlciwgZG9udEFkZE51bGwpIHtcclxuICB3YXJuT25jZSgnd3JpdGVTdHJpbmdUb01lbW9yeSBpcyBkZXByZWNhdGVkIGFuZCBzaG91bGQgbm90IGJlIGNhbGxlZCEgVXNlIHN0cmluZ1RvVVRGOCgpIGluc3RlYWQhJyk7XHJcblxyXG4gIHZhciAvKiogQHR5cGUge251bWJlcn0gKi8gbGFzdENoYXIsIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyBlbmQ7XHJcbiAgaWYgKGRvbnRBZGROdWxsKSB7XHJcbiAgICAvLyBzdHJpbmdUb1VURjhBcnJheSBhbHdheXMgYXBwZW5kcyBudWxsLiBJZiB3ZSBkb24ndCB3YW50IHRvIGRvIHRoYXQsIHJlbWVtYmVyIHRoZVxyXG4gICAgLy8gY2hhcmFjdGVyIHRoYXQgZXhpc3RlZCBhdCB0aGUgbG9jYXRpb24gd2hlcmUgdGhlIG51bGwgd2lsbCBiZSBwbGFjZWQsIGFuZCByZXN0b3JlXHJcbiAgICAvLyB0aGF0IGFmdGVyIHRoZSB3cml0ZSAoYmVsb3cpLlxyXG4gICAgZW5kID0gYnVmZmVyICsgbGVuZ3RoQnl0ZXNVVEY4KHN0cmluZyk7XHJcbiAgICBsYXN0Q2hhciA9IEhFQVA4W2VuZF07XHJcbiAgfVxyXG4gIHN0cmluZ1RvVVRGOChzdHJpbmcsIGJ1ZmZlciwgSW5maW5pdHkpO1xyXG4gIGlmIChkb250QWRkTnVsbCkgSEVBUDhbZW5kXSA9IGxhc3RDaGFyOyAvLyBSZXN0b3JlIHRoZSB2YWx1ZSB1bmRlciB0aGUgbnVsbCBjaGFyYWN0ZXIuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlQXJyYXlUb01lbW9yeShhcnJheSwgYnVmZmVyKSB7XHJcbiAgYXNzZXJ0KGFycmF5Lmxlbmd0aCA+PSAwLCAnd3JpdGVBcnJheVRvTWVtb3J5IGFycmF5IG11c3QgaGF2ZSBhIGxlbmd0aCAoc2hvdWxkIGJlIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5KScpXHJcbiAgSEVBUDguc2V0KGFycmF5LCBidWZmZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZUFzY2lpVG9NZW1vcnkoc3RyLCBidWZmZXIsIGRvbnRBZGROdWxsKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIGFzc2VydChzdHIuY2hhckNvZGVBdChpKSA9PT0gc3RyLmNoYXJDb2RlQXQoaSkmMHhmZik7XHJcbiAgICBIRUFQOFsoKGJ1ZmZlcisrKT4+MCldPXN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gIH1cclxuICAvLyBOdWxsLXRlcm1pbmF0ZSB0aGUgcG9pbnRlciB0byB0aGUgSEVBUC5cclxuICBpZiAoIWRvbnRBZGROdWxsKSBIRUFQOFsoKGJ1ZmZlcik+PjApXT0wO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1blNpZ24odmFsdWUsIGJpdHMsIGlnbm9yZSkge1xyXG4gIGlmICh2YWx1ZSA+PSAwKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBiaXRzIDw9IDMyID8gMipNYXRoLmFicygxIDw8IChiaXRzLTEpKSArIHZhbHVlIC8vIE5lZWQgc29tZSB0cmlja2VyeSwgc2luY2UgaWYgYml0cyA9PSAzMiwgd2UgYXJlIHJpZ2h0IGF0IHRoZSBsaW1pdCBvZiB0aGUgYml0cyBKUyB1c2VzIGluIGJpdHNoaWZ0c1xyXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5wb3coMiwgYml0cykgICAgICAgICArIHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIHJlU2lnbih2YWx1ZSwgYml0cywgaWdub3JlKSB7XHJcbiAgaWYgKHZhbHVlIDw9IDApIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbiAgdmFyIGhhbGYgPSBiaXRzIDw9IDMyID8gTWF0aC5hYnMoMSA8PCAoYml0cy0xKSkgLy8gYWJzIGlzIG5lZWRlZCBpZiBiaXRzID09IDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5wb3coMiwgYml0cy0xKTtcclxuICBpZiAodmFsdWUgPj0gaGFsZiAmJiAoYml0cyA8PSAzMiB8fCB2YWx1ZSA+IGhhbGYpKSB7IC8vIGZvciBodWdlIHZhbHVlcywgd2UgY2FuIGhpdCB0aGUgcHJlY2lzaW9uIGxpbWl0IGFuZCBhbHdheXMgZ2V0IHRydWUgaGVyZS4gc28gZG9uJ3QgZG8gdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0LCBpbiBnZW5lcmFsIHRoZXJlIGlzIG5vIHBlcmZlY3Qgc29sdXRpb24gaGVyZS4gV2l0aCA2NC1iaXQgaW50cywgd2UgZ2V0IHJvdW5kaW5nIGFuZCBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEluIGk2NCBtb2RlIDEsIHJlc2lnbiB0aGUgdHdvIHBhcnRzIHNlcGFyYXRlbHkgYW5kIHNhZmVseVxyXG4gICAgdmFsdWUgPSAtMipoYWxmICsgdmFsdWU7IC8vIENhbm5vdCBiaXRzaGlmdCBoYWxmLCBhcyBpdCBtYXkgYmUgYXQgdGhlIGxpbWl0IG9mIHRoZSBiaXRzIEpTIHVzZXMgaW4gYml0c2hpZnRzXHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuYXNzZXJ0KE1hdGhbJ2ltdWwnXSAmJiBNYXRoWydmcm91bmQnXSAmJiBNYXRoWydjbHozMiddICYmIE1hdGhbJ3RydW5jJ10sICd0aGlzIGlzIGEgbGVnYWN5IGJyb3dzZXIsIGJ1aWxkIHdpdGggTEVHQUNZX1ZNX1NVUFBPUlQnKTtcclxuXHJcbnZhciBNYXRoX2FicyA9IE1hdGguYWJzO1xyXG52YXIgTWF0aF9jb3MgPSBNYXRoLmNvcztcclxudmFyIE1hdGhfc2luID0gTWF0aC5zaW47XHJcbnZhciBNYXRoX3RhbiA9IE1hdGgudGFuO1xyXG52YXIgTWF0aF9hY29zID0gTWF0aC5hY29zO1xyXG52YXIgTWF0aF9hc2luID0gTWF0aC5hc2luO1xyXG52YXIgTWF0aF9hdGFuID0gTWF0aC5hdGFuO1xyXG52YXIgTWF0aF9hdGFuMiA9IE1hdGguYXRhbjI7XHJcbnZhciBNYXRoX2V4cCA9IE1hdGguZXhwO1xyXG52YXIgTWF0aF9sb2cgPSBNYXRoLmxvZztcclxudmFyIE1hdGhfc3FydCA9IE1hdGguc3FydDtcclxudmFyIE1hdGhfY2VpbCA9IE1hdGguY2VpbDtcclxudmFyIE1hdGhfZmxvb3IgPSBNYXRoLmZsb29yO1xyXG52YXIgTWF0aF9wb3cgPSBNYXRoLnBvdztcclxudmFyIE1hdGhfaW11bCA9IE1hdGguaW11bDtcclxudmFyIE1hdGhfZnJvdW5kID0gTWF0aC5mcm91bmQ7XHJcbnZhciBNYXRoX3JvdW5kID0gTWF0aC5yb3VuZDtcclxudmFyIE1hdGhfbWluID0gTWF0aC5taW47XHJcbnZhciBNYXRoX21heCA9IE1hdGgubWF4O1xyXG52YXIgTWF0aF9jbHozMiA9IE1hdGguY2x6MzI7XHJcbnZhciBNYXRoX3RydW5jID0gTWF0aC50cnVuYztcclxuXHJcbi8vIEEgY291bnRlciBvZiBkZXBlbmRlbmNpZXMgZm9yIGNhbGxpbmcgcnVuKCkuIElmIHdlIG5lZWQgdG9cclxuLy8gZG8gYXN5bmNocm9ub3VzIHdvcmsgYmVmb3JlIHJ1bm5pbmcsIGluY3JlbWVudCB0aGlzIGFuZFxyXG4vLyBkZWNyZW1lbnQgaXQuIEluY3JlbWVudGluZyBtdXN0IGhhcHBlbiBpbiBhIHBsYWNlIGxpa2VcclxuLy8gUFJFX1JVTl9BRERJVElPTlMgKHVzZWQgYnkgZW1jYyB0byBhZGQgZmlsZSBwcmVsb2FkaW5nKS5cclxuLy8gTm90ZSB0aGF0IHlvdSBjYW4gYWRkIGRlcGVuZGVuY2llcyBpbiBwcmVSdW4sIGV2ZW4gdGhvdWdoXHJcbi8vIGl0IGhhcHBlbnMgcmlnaHQgYmVmb3JlIHJ1biAtIHJ1biB3aWxsIGJlIHBvc3Rwb25lZCB1bnRpbFxyXG4vLyB0aGUgZGVwZW5kZW5jaWVzIGFyZSBtZXQuXHJcbnZhciBydW5EZXBlbmRlbmNpZXMgPSAwO1xyXG52YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXIgPSBudWxsO1xyXG52YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkID0gbnVsbDsgLy8gb3ZlcnJpZGRlbiB0byB0YWtlIGRpZmZlcmVudCBhY3Rpb25zIHdoZW4gYWxsIHJ1biBkZXBlbmRlbmNpZXMgYXJlIGZ1bGZpbGxlZFxyXG52YXIgcnVuRGVwZW5kZW5jeVRyYWNraW5nID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRVbmlxdWVSdW5EZXBlbmRlbmN5KGlkKSB7XHJcbiAgdmFyIG9yaWcgPSBpZDtcclxuICB3aGlsZSAoMSkge1xyXG4gICAgaWYgKCFydW5EZXBlbmRlbmN5VHJhY2tpbmdbaWRdKSByZXR1cm4gaWQ7XHJcbiAgICBpZCA9IG9yaWcgKyBNYXRoLnJhbmRvbSgpO1xyXG4gIH1cclxuICByZXR1cm4gaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpIHtcclxuICBydW5EZXBlbmRlbmNpZXMrKztcclxuICBpZiAoTW9kdWxlWydtb25pdG9yUnVuRGVwZW5kZW5jaWVzJ10pIHtcclxuICAgIE1vZHVsZVsnbW9uaXRvclJ1bkRlcGVuZGVuY2llcyddKHJ1bkRlcGVuZGVuY2llcyk7XHJcbiAgfVxyXG4gIGlmIChpZCkge1xyXG4gICAgYXNzZXJ0KCFydW5EZXBlbmRlbmN5VHJhY2tpbmdbaWRdKTtcclxuICAgIHJ1bkRlcGVuZGVuY3lUcmFja2luZ1tpZF0gPSAxO1xyXG4gICAgaWYgKHJ1bkRlcGVuZGVuY3lXYXRjaGVyID09PSBudWxsICYmIHR5cGVvZiBzZXRJbnRlcnZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gQ2hlY2sgZm9yIG1pc3NpbmcgZGVwZW5kZW5jaWVzIGV2ZXJ5IGZldyBzZWNvbmRzXHJcbiAgICAgIHJ1bkRlcGVuZGVuY3lXYXRjaGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKEFCT1JUKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtcclxuICAgICAgICAgIHJ1bkRlcGVuZGVuY3lXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNob3duID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgZGVwIGluIHJ1bkRlcGVuZGVuY3lUcmFja2luZykge1xyXG4gICAgICAgICAgaWYgKCFzaG93bikge1xyXG4gICAgICAgICAgICBzaG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIE1vZHVsZS5wcmludEVycignc3RpbGwgd2FpdGluZyBvbiBydW4gZGVwZW5kZW5jaWVzOicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgTW9kdWxlLnByaW50RXJyKCdkZXBlbmRlbmN5OiAnICsgZGVwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3duKSB7XHJcbiAgICAgICAgICBNb2R1bGUucHJpbnRFcnIoJyhlbmQgb2YgbGlzdCknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDAwKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgTW9kdWxlLnByaW50RXJyKCd3YXJuaW5nOiBydW4gZGVwZW5kZW5jeSBhZGRlZCB3aXRob3V0IElEJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKSB7XHJcbiAgcnVuRGVwZW5kZW5jaWVzLS07XHJcbiAgaWYgKE1vZHVsZVsnbW9uaXRvclJ1bkRlcGVuZGVuY2llcyddKSB7XHJcbiAgICBNb2R1bGVbJ21vbml0b3JSdW5EZXBlbmRlbmNpZXMnXShydW5EZXBlbmRlbmNpZXMpO1xyXG4gIH1cclxuICBpZiAoaWQpIHtcclxuICAgIGFzc2VydChydW5EZXBlbmRlbmN5VHJhY2tpbmdbaWRdKTtcclxuICAgIGRlbGV0ZSBydW5EZXBlbmRlbmN5VHJhY2tpbmdbaWRdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBNb2R1bGUucHJpbnRFcnIoJ3dhcm5pbmc6IHJ1biBkZXBlbmRlbmN5IHJlbW92ZWQgd2l0aG91dCBJRCcpO1xyXG4gIH1cclxuICBpZiAocnVuRGVwZW5kZW5jaWVzID09IDApIHtcclxuICAgIGlmIChydW5EZXBlbmRlbmN5V2F0Y2hlciAhPT0gbnVsbCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtcclxuICAgICAgcnVuRGVwZW5kZW5jeVdhdGNoZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCkge1xyXG4gICAgICB2YXIgY2FsbGJhY2sgPSBkZXBlbmRlbmNpZXNGdWxmaWxsZWQ7XHJcbiAgICAgIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCA9IG51bGw7XHJcbiAgICAgIGNhbGxiYWNrKCk7IC8vIGNhbiBhZGQgYW5vdGhlciBkZXBlbmRlbmNpZXNGdWxmaWxsZWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbk1vZHVsZVtcInByZWxvYWRlZEltYWdlc1wiXSA9IHt9OyAvLyBtYXBzIHVybCB0byBpbWFnZSBkYXRhXHJcbk1vZHVsZVtcInByZWxvYWRlZEF1ZGlvc1wiXSA9IHt9OyAvLyBtYXBzIHVybCB0byBhdWRpbyBkYXRhXHJcblxyXG5cclxuXHJcbnZhciBtZW1vcnlJbml0aWFsaXplciA9IG51bGw7XHJcblxyXG5cclxuXHJcbnZhciAvKiBzaG93IGVycm9ycyBvbiBsaWtlbHkgY2FsbHMgdG8gRlMgd2hlbiBpdCB3YXMgbm90IGluY2x1ZGVkICovIEZTID0ge1xyXG4gIGVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgIGFib3J0KCdGaWxlc3lzdGVtIHN1cHBvcnQgKEZTKSB3YXMgbm90IGluY2x1ZGVkLiBUaGUgcHJvYmxlbSBpcyB0aGF0IHlvdSBhcmUgdXNpbmcgZmlsZXMgZnJvbSBKUywgYnV0IGZpbGVzIHdlcmUgbm90IHVzZWQgZnJvbSBDL0MrKywgc28gZmlsZXN5c3RlbSBzdXBwb3J0IHdhcyBub3QgYXV0by1pbmNsdWRlZC4gWW91IGNhbiBmb3JjZS1pbmNsdWRlIGZpbGVzeXN0ZW0gc3VwcG9ydCB3aXRoICAtcyBGT1JDRV9GSUxFU1lTVEVNPTEnKTtcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgY3JlYXRlRGF0YUZpbGU6IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgY3JlYXRlUHJlbG9hZGVkRmlsZTogZnVuY3Rpb24oKSB7IEZTLmVycm9yKCkgfSxcclxuICBjcmVhdGVMYXp5RmlsZTogZnVuY3Rpb24oKSB7IEZTLmVycm9yKCkgfSxcclxuICBvcGVuOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIG1rZGV2OiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIHJlZ2lzdGVyRGV2aWNlOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIGFuYWx5emVQYXRoOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIGxvYWRGaWxlc0Zyb21EQjogZnVuY3Rpb24oKSB7IEZTLmVycm9yKCkgfSxcclxuXHJcbiAgRXJybm9FcnJvcjogZnVuY3Rpb24gRXJybm9FcnJvcigpIHsgRlMuZXJyb3IoKSB9LFxyXG59O1xyXG5Nb2R1bGVbJ0ZTX2NyZWF0ZURhdGFGaWxlJ10gPSBGUy5jcmVhdGVEYXRhRmlsZTtcclxuTW9kdWxlWydGU19jcmVhdGVQcmVsb2FkZWRGaWxlJ10gPSBGUy5jcmVhdGVQcmVsb2FkZWRGaWxlO1xyXG5cclxuXHJcblxyXG4vLyBQcmVmaXggb2YgZGF0YSBVUklzIGVtaXR0ZWQgYnkgU0lOR0xFX0ZJTEUgYW5kIHJlbGF0ZWQgb3B0aW9ucy5cclxudmFyIGRhdGFVUklQcmVmaXggPSAnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCc7XHJcblxyXG4vLyBJbmRpY2F0ZXMgd2hldGhlciBmaWxlbmFtZSBpcyBhIGJhc2U2NCBkYXRhIFVSSS5cclxuZnVuY3Rpb24gaXNEYXRhVVJJKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/XHJcbiAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCkgOlxyXG4gICAgICBmaWxlbmFtZS5pbmRleE9mKGRhdGFVUklQcmVmaXgpID09PSAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbnRlZ3JhdGVXYXNtSlMoKSB7XHJcbiAgLy8gd2FzbS5qcyBoYXMgc2V2ZXJhbCBtZXRob2RzIGZvciBjcmVhdGluZyB0aGUgY29tcGlsZWQgY29kZSBtb2R1bGUgaGVyZTpcclxuICAvLyAgKiAnbmF0aXZlLXdhc20nIDogdXNlIG5hdGl2ZSBXZWJBc3NlbWJseSBzdXBwb3J0IGluIHRoZSBicm93c2VyXHJcbiAgLy8gICogJ2ludGVycHJldC1zLWV4cHInOiBsb2FkIHMtZXhwcmVzc2lvbiBjb2RlIGZyb20gYSAud2FzdCBhbmQgaW50ZXJwcmV0XHJcbiAgLy8gICogJ2ludGVycHJldC1iaW5hcnknOiBsb2FkIGJpbmFyeSB3YXNtIGFuZCBpbnRlcnByZXRcclxuICAvLyAgKiAnaW50ZXJwcmV0LWFzbTJ3YXNtJzogbG9hZCBhc20uanMgY29kZSwgdHJhbnNsYXRlIHRvIHdhc20sIGFuZCBpbnRlcnByZXRcclxuICAvLyAgKiAnYXNtanMnOiBubyB3YXNtLCBqdXN0IGxvYWQgdGhlIGFzbS5qcyBjb2RlIGFuZCB1c2UgdGhhdCAoZ29vZCBmb3IgdGVzdGluZylcclxuICAvLyBUaGUgbWV0aG9kIGlzIHNldCBhdCBjb21waWxlIHRpbWUgKEJJTkFSWUVOX01FVEhPRClcclxuICAvLyBUaGUgbWV0aG9kIGNhbiBiZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0LCBpbiB3aGljaCBjYXNlLCB3ZSB3aWxsIHRyeSB0aGVcclxuICAvLyBvcHRpb25zIG9uZSBieSBvbmUuIFNvbWUgb2YgdGhlbSBjYW4gZmFpbCBncmFjZWZ1bGx5LCBhbmQgdGhlbiB3ZSBjYW4gdHJ5XHJcbiAgLy8gdGhlIG5leHQuXHJcblxyXG4gIC8vIGlucHV0c1xyXG5cclxuICB2YXIgbWV0aG9kID0gJ25hdGl2ZS13YXNtJztcclxuXHJcbiAgdmFyIHdhc21UZXh0RmlsZSA9ICcnO1xyXG4gIHZhciB3YXNtQmluYXJ5RmlsZSA9ICdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUdGemJRRUFBQUFCY2hKZ0EzOS9md0YvWUFGL0FYOWdBQUYvWUFGL0FHQUNmMzhCZjJBRWYzOS9md0YvWUFKL2Z3QmdBMzkvZndCZ0JIOS9mMzhBWUFOL2YzOEJmbUFBQUdBRmYzOS9mMzhCZjJBRGZuOS9BWDlnQW41L0FYOWdCWDkvZjM5L0FHQUdmM3gvZjM5L0FYOWdBWHdCZm1BQ2ZIOEJmQUtYQlNFRFpXNTJCbTFsYlc5eWVRSUJnQUtBQWdObGJuWUZkR0ZpYkdVQmNBRVFFQU5sYm5ZS2JXVnRiM0o1UW1GelpRTi9BQU5sYm5ZSmRHRmliR1ZDWVhObEEzOEFBMlZ1ZGc1RVdVNUJUVWxEVkU5UVgxQlVVZ04vQUFObGJuWU5kR1Z0Y0VSdmRXSnNaVkIwY2dOL0FBTmxibllGUVVKUFVsUURmd0FEWlc1MkNGTlVRVU5MVkU5UUEzOEFBMlZ1ZGdsVFZFRkRTMTlOUVZnRGZ3QURaVzUyQjJOMGRIcGZhVGdEZndBR1oyeHZZbUZzQTA1aFRnTjhBQVpuYkc5aVlXd0lTVzVtYVc1cGRIa0RmQUFEWlc1MkRXVnViR0Z5WjJWTlpXMXZjbmtBQWdObGJuWU9aMlYwVkc5MFlXeE5aVzF2Y25rQUFnTmxibllYWVdKdmNuUlBia05oYm01dmRFZHliM2ROWlcxdmNua0FBZ05sYm5ZU1lXSnZjblJUZEdGamEwOTJaWEptYkc5M0FBTURaVzUyQzI1MWJHeEdkVzVqWDJscEFBTURaVzUyRFc1MWJHeEdkVzVqWDJscGFXa0FBd05sYm5ZSFgxOWZiRzlqYXdBREEyVnVkZ3RmWDE5elpYUkZjbkpPYndBREEyVnVkZzFmWDE5emVYTmpZV3hzTVRRd0FBUURaVzUyRFY5ZlgzTjVjMk5oYkd3eE5EWUFCQU5sYm5ZTVgxOWZjM2x6WTJGc2JEVTBBQVFEWlc1MkMxOWZYM041YzJOaGJHdzJBQVFEWlc1MkNWOWZYM1Z1Ykc5amF3QURBMlZ1ZGlGZlpXMXpZM0pwY0hSbGJsOW9ZWE5mZEdoeVpXRmthVzVuWDNOMWNIQnZjblFBQWdObGJuWVdYMlZ0YzJOeWFYQjBaVzVmYldWdFkzQjVYMkpwWndBQUEyVnVkaEpmYkd4MmJWOXpkR0ZqYTNKbGMzUnZjbVVBQXdObGJuWVBYMnhzZG0xZmMzUmhZMnR6WVhabEFBSURaVzUyRDE5d2RHaHlaV0ZrWDJOeVpXRjBaUUFGQTJWdWRnMWZjSFJvY21WaFpGOXFiMmx1QUFRRFpXNTJFMTl3ZEdoeVpXRmtYMjExZEdWNFgybHVhWFFBQkFObGJuWUlYM041YzJOdmJtWUFBUU5TVVFFQ0F3WUdBd0lFQXdjRENBY0JDQUFJQ1FRQUNnWUJBd0VBQUFFQ0FRQUVBQXNCQXdjQkJ3d05EUUVBRGdRUEVCRVJBQUlDQWdRRUJBQUVBQUVFQVFRRUFnb0JBUUFLQVFBQUFRRUJCQVVCQUFaeUZIOEJJd0lMZndFakF3dC9BU01FQzM4Qkl3VUxmd0VqQmd0L0FTTUhDMzhCUVFBTGZ3RkJBQXQvQVVFQUMzOEJRUUFMZkFFakNBdDhBU01KQzM4QlFRQUxmd0ZCQUF0L0FVRUFDMzhCUVFBTGZBRkVBQUFBQUFBQUFBQUxmd0ZCQUF0OUFVTUFBQUFBQzMwQlF3QUFBQUFMQjZrQ0ZSRmZYMTlsY25KdWIxOXNiMk5oZEdsdmJnQXhDbDlqWTNWeWJGOXdiM2NBSEFkZlptWnNkWE5vQUZnRlgyWnlaV1VBTEE5ZmJHeDJiVjlpYzNkaGNGOXBNeklBWEFkZmJXRnNiRzlqQUNzSFgyMWxiV053ZVFCZEIxOXRaVzF6WlhRQVhoTmZjSFJvY21WaFpGOXRkWFJsZUY5c2IyTnJBRjhWWDNCMGFISmxZV1JmYlhWMFpYaGZkVzVzYjJOckFHQUZYM05pY21zQVlRcGtlVzVEWVd4c1gybHBBR0lNWkhsdVEyRnNiRjlwYVdscEFHTVRaWE4wWVdKc2FYTm9VM1JoWTJ0VGNHRmpaUUFZQzJkbGRGUmxiWEJTWlhRd0FCc0xjblZ1VUc5emRGTmxkSE1BV3d0elpYUlVaVzF3VW1WME1BQWFDSE5sZEZSb2NtVjNBQmtLYzNSaFkydEJiR3h2WXdBVkRITjBZV05yVW1WemRHOXlaUUFYQ1hOMFlXTnJVMkYyWlFBV0NSWUJBQ01CQ3hCa0xXUmtaQ0prWkdWbExpOHpaV1ZsQ3NiMEFsRW9BUUYvSXcwaEFTTU5JQUJxSkEwakRVRVBha0Z3Y1NRTkl3MGpEazRFUUNBQUVBTUxJQUVQQ3dVQUl3MFBDd1lBSUFBa0RRc0tBQ0FBSkEwZ0FTUU9DeElBSXhCQkFFWUVRQ0FBSkJBZ0FTUVJDd3NHQUNBQUpCc0xCUUFqR3c4THpBRUJHSDhqRFNFWkl3MUJvQVpxSkEwakRTTU9UZ1JBUWFBR0VBTUxJQmxCT0dvaEZTQVpJUllnQUNFTUlBRWhFUkFwUVFBaEVpQU1JUmNnRjBIeEZCQlNJUUlnQWlFVElBd2hBeUFUSVFRZ0F5QUVFQ2NoQlNBRklSUWdGUkFkSUJRaEJpQVZJQVpCNER3UUhpQVVJUWNnQjBIZ1BHb2hDQ0FWSUFoQjh3RVFYUm9nRVNFSklCWWdGU0FKUVg4UUlDQVVJUW9nQ2tIZ1BHb2hDeUFMSUJWQjh3RVFYUm9nRkNFTklBMUJBRUhUUGhBb0lRNGdEaUVTSUJRaER5QVBFQ3dnRWlFUUlCa2tEU0FRRHdzeUFRUi9JdzBoQkNNTlFSQnFKQTBqRFNNT1RnUkFRUkFRQXdzZ0FDRUJJQUVoQWlBQ1FRQkIyUVVRWGhvZ0JDUU5Ed3VzQVFFVmZ5TU5JUmNqRFVFUWFpUU5JdzBqRGs0RVFFRVFFQU1MSUFBaER5QUJJUkFnQWlFUlFRQWhFZ05BQWtBZ0R5RVRJQkFoRkNBU0lSVWdGQ0FWYWlFRElCRWhCQ0FFUWZNQlNDRUZJQkVoQmlBRkJIOGdCZ1ZCOHdFTElRY2dCeUVJSUJNZ0F5QUlFRjBhSUE4aENTQUpFQjhnRWlFS0lBcEI4d0ZxSVFzZ0N5RVNJQkVoRENBTVFmTUJheUVOSUEwaEVTQU5RUUJLSVE0Z0RrVUVRQXdCQ3d3QkN3c2dGeVFORHd2QkFnRWxmeU1OSVNVakRVSHdCV29rRFNNTkl3NU9CRUJCOEFVUUF3c2dKVUVNYWlFZUlBQWhBVUVBSVF3RFFBSkFJQXdoSHlBZlFkRUFTQ0VnSUNCRkJFQU1BUXNnQVNFaElCNGdJVUhaQlJCZEdrRUFJUmNEUUFKQUlCY2hJaUFpUWRrRlNDRWpJQ05GQkVBTUFRc2dGeUVDUVlBSUlBSkJBblJxSVFNZ0F5Z0NBQ0VFSUI0Z0JHb2hCU0FGTEFBQUlRWWdCa0VZZEVFWWRTRUhJQmNoQ0NBSVFRRnFJUWxCZ0FnZ0NVRUNkR29oQ2lBS0tBSUFJUXNnSGlBTGFpRU5JQTBzQUFBaERpQU9RUmgwUVJoMUlROGdEMEVDZENFUUlBY2dFR29oRVNBUlFRVnFJUkpCNkI0Z0VrRUNkR29oRXlBVEtBSUFJUlFnRkVIL0FYRWhGU0FCSVJZZ0Z5RVlJQllnR0dvaEdTQVpJQlU2QUFBZ0Z5RWFJQnBCQVdvaEd5QWJJUmNNQVFzTElBd2hIQ0FjUVFGcUlSMGdIU0VNREFFTEN5QWxKQTBQQzlzR0FWVi9JdzBoV0NNTlFmQzJBV29rRFNNTkl3NU9CRUJCOExZQkVBTUxJRmhCb0xZQmFpRldJRmdoQnlCWVFiaTJBV29oQ1NCWVFhUzJBV29oQ2lBQUlTVWdBU0V3SUFJaE95QURJVVlnT3lFTElBdEJBRWdoRENBN0lRMGdEVUh6QVVvaERpQU1JQTV5SVZVZ0pTRVBJRlVFUUNBUFFRVTJBZ0JCbEI4b0FnQWhFQ0E3SVJFZ1ZpQVJOZ0lBSUJCQmlDTWdWaEJhR2lCWUpBMFBDeUFQUVFFMkFnQWdNQ0VTSUFjZ0VrR2lBUkFoRUEwaEV5QWxJUlFnRkVFRWFpRVZJQlVnRXpZQ0FDQWxJUllnRmtFRWFpRVhJQmNvQWdBaEdDQVlRUUJISVJrZ0dVVUVRQ0FLSUFjMkFnQWdNQ0ZMSUFwQkJHb2hUQ0JNSUVzMkFnQWdPeUZOSUFwQkNHb2hUaUJPSUUwMkFnQWdWQ0ZQSUFwQkRHb2hVQ0JRSUU4MkFnQWdKU0ZTSUFwQkVHb2hVeUJUSUZJMkFnQWdDaEFpR2lCWUpBMFBDeUJHSVJvZ0drRUFUQ0ViSUJzRVFFSFVBQkFVSVJ3Z0hFRUJheUVkSUIwaFJpQkdJUjRnSGtFQlNDRWZJQjhFZjBFQkJTQWRDeUVFSUFRaFJnc2dKU0VnSUNCQkNHb2hJU0FoUVFBUUV4b2dSaUVpRUJBaEl5QWpJUWdnSWtFQ2RDRUZJdzBoSkNNTlFRRWdCV3hCRDJwQmNIRnFKQTBqRFNNT1RnUkFRUUVnQld4QkQycEJjSEVRQXdzZ1JpRW1JQ1pCRkd3aEJpTU5JU2NqRFVFQklBWnNRUTlxUVhCeGFpUU5JdzBqRGs0RVFFRUJJQVpzUVE5cVFYQnhFQU1MUVFBaFZBTkFBa0FnVkNFb0lFWWhLU0FvSUNsSUlTb2dLa1VFUUF3QkN5QlVJU3NnSnlBclFSUnNhaUVzSUFrZ0J6WUNBQ0FKUVFScUlTMGdNQ0V1SUMwZ0xqWUNBQ0FKUVFocUlTOGdPeUV4SUM4Z01UWUNBQ0FKUVF4cUlUSWdWQ0V6SURJZ016WUNBQ0FKUVJCcUlUUWdKU0UxSURRZ05UWUNBQ0FzSUFrcEFnQTNBZ0FnTEVFSWFpQUpRUWhxS1FJQU53SUFJQ3hCRUdvZ0NVRVFhaWdDQURZQ0FDQlVJVFlnSkNBMlFRSjBhaUUzSUZRaE9DQW5JRGhCRkd4cUlUa2dOMEVBUVFVZ09SQVJHaUJVSVRvZ09rRUJhaUU4SUR3aFZBd0JDd3RCQUNGUkEwQUNRQ0JSSVQwZ1ZDRStJRDBnUGtnaFB5QS9SUVJBREFFTElGRWhRQ0FrSUVCQkFuUnFJVUVnUVNnQ0FDRkNJRUpCQUVjaFF5QkRCRUFnVVNGRUlDUWdSRUVDZEdvaFJTQkZLQUlBSVVjZ1IwRUFFQklhQ3lCUklVZ2dTRUVCYWlGSklFa2hVUXdCQ3dzZ0NDRktJRW9RRHlCWUpBMFBDNjRGQWtkL0FYNGpEU0ZKSXcxQkVHb2tEU01OSXc1T0JFQkJFQkFEQ3lBQUlSZ2dBU0VqSUFJaExrRUFJVGtEUUFKQUlEa2hSQ0JFUWRrRlNDRkdJRVpGQkVBTUFRc2dJeUZISURraEJDQkhJQVJxSVFVZ0JTd0FBQ0VHSUFaQkdIUkJHSFVoQndKQUFrQUNRQUpBSUFkQkFHc09BZ0FCQWdzQ1FDQVlJUWdnT1NFSklBZ2dDVUVEZEdvaENpQUtRbjgzQXdBZ0dDRUxJQXRCeUMxcUlRd2dPU0VOSUF3Z0RVRURkR29oRGtKL0lVb2dEaUVEREFNQUN3QUxBa0FnR0NFUElEa2hFQ0FQSUJCQkEzUnFJUkVnRVVJQU53TUFJQmdoRWlBU1FjZ3RhaUVUSURraEZDQVRJQlJCQTNScUlSVkNmeUZLSUJVaEF3d0NBQXNBQ3dKQUlCZ2hGaUE1SVJjZ0ZpQVhRUU4wYWlFWklCbENmemNEQUNBWUlSb2dHa0hJTFdvaEd5QTVJUndnR3lBY1FRTjBhaUVkUWdBaFNpQWRJUU1MQ3lBRElFbzNBd0FnT1NFZUlCNUJBV29oSHlBZklUa01BUXNMSUJnaElDQXVJU0VnSUNBaFFRTjBhaUVpSUNKQzdiYmI3YmJiN2JaYk53TUFJQmdoSkNBa1FjZ3RhaUVsSUM0aEppQWxJQ1pCQTNScUlTY2dKMExiN2JiYjdiYmI3YlovTndNQUlCZ2hLQ0F1SVNrZ0tVRUJhaUVxSUNnZ0trRURkR29oS3lBclFzZWYvdmpqajcvOGNUY0RBQ0FZSVN3Z0xFSElMV29oTFNBdUlTOGdMMEVCYWlFd0lDMGdNRUVEZEdvaE1TQXhRci84OGNlZi92ampqMzgzQXdBZ0dDRXlJQzRoTXlBelFRSnFJVFFnTWlBMFFRTjBhaUUxSURWQy80UHcvLytCK1AvL0FEY0RBQ0FZSVRZZ05rSElMV29oTnlBdUlUZ2dPRUVDYWlFNklEY2dPa0VEZEdvaE95QTdRdi8vajhELy80ZGdOd01BSUJnaFBDQXVJVDBnUFVFRGFpRStJRHdnUGtFRGRHb2hQeUEvUXYvLy83K0FnSUJnTndNQUlCZ2hRQ0JBUWNndGFpRkJJQzRoUWlCQ1FRTnFJVU1nUVNCRFFRTjBhaUZGSUVWQy8vLy8vLy8vL3g4M0F3QWdTU1FORHd2ckJnSlNmd3grSXcwaFVpTU5RZUNSQW1va0RTTU5JdzVPQkVCQjRKRUNFQU1MSUZKQitPTUJhaUVvSUZKQnNMWUJhaUV6SUZKQjJJZ0JhaUVESUZKQmtOc0FhaUVFSUZKQnlDMXFJUVVnVWlFR0lBQWhDeUFMSVFnZ0NDRVdJQlloQ1NBSlFSQnFJUW9nQ2lnQ0FDRU1JQXdoSVNBV0lRMGdEVUVFYWlFT0lBNG9BZ0FoRHlBUElRSWdLRUVBUWNndEVGNGFJRE5CQUVISUxSQmVHaUFXSVJBZ0VDZ0NBQ0VSSUNnZ0VVSElMUkJkR2lBV0lSSWdFaWdDQUNFVElCTkJ5QzFxSVJRZ015QVVRY2d0RUYwYUlCWWhGU0FWUVF4cUlSY2dGeWdDQUNFWUlCZ2hPd05BQWtBZ095RVpJQmxCZjJvaEdpQWFJVHNnR1VFQVNpRWJJQnRGQkVBTUFRc2dLQ0F6UWFZQlFjRUJFQ01NQVFzTElBVkJBRUhJTFJCZUdpQUdRUUJCeUMwUVhob2dBMEVBUWNndEVGNGFJQVJCQUVISUxSQmVHa0VBSVFjRFFBSkFJQlloSENBaElSMGdIQ0FkUVFFUUpDRWVJQjVCR0hSQkdIVkJBRWNoSHlBZlJRUkFRUkloVVF3QkN5QW9JRE5Cd1FGQjh3RVFJeUFGSUNoQnlDMFFYUm9nQmlBelFjZ3RFRjBhSUFVZ0JpQURJQVFRSlNBV0lTQWdJRUVJYWlFaUlDSW9BZ0FoSXlBRklBWWdJeEFtSVZRZ1ZDRmVJRlJDQUZFaEpDQWtSUVJBREFFTERBRUxDeUJSUVJKR0JFQkJBQ0VCSUFFaFVDQlNKQTBnVUE4TElGNGhWU0JWZWlGV0lGYW5JU1VnSlNGRElFTWhKa0VCSUNaMElTY2dKNndoVnlCWElWTWdJU0VwSUNsQkJHb2hLaUFxS0FJQUlTc2dLMEVBUnlFc0lDd0VRQ0FXSVMwZ0xVRVFhaUV1SUM0b0FnQWhMeUF2UVFocUlUQWdNQkJmR2dzZ0lTRXhJREVvQWdBaE1pQXlRUU5ISVRRQ1FDQTBCRUFnSVNFMUlEVkJBellDQUVFQUlUc0RRQ0E3SVRZZ05rSHpBVWdoTnlBM1JRUkFEQU1MSURzaE9DQW9JRGhCQTNScUlUa2dPU2tEQUNGWUlGTWhXU0JZSUZtRElWb2dXa0lBVVNFNklEb0VRRUVCSVVFRklEc2hQQ0F6SUR4QkEzUnFJVDBnUFNrREFDRmJJRk1oWENCYklGeURJVjBnWFVJQVVTRStJRDRFZjBGL0JVRUFDeUUvSUQ4aFFRc2dRVUgvQVhFaFFDQUNJVUlnT3lGRUlFSWdSR29oUlNCRklFQTZBQUFnT3lGR0lFWkJBV29oUnlCSElUc01BQXNBQ3dzZ0lTRklJRWhCQkdvaFNTQkpLQUlBSVVvZ1NrRUFSeUZMSUVzRVFDQVdJVXdnVEVFUWFpRk5JRTBvQWdBaFRpQk9RUWhxSVU4Z1R4QmdHZ3RCQUNFQklBRWhVQ0JTSkEwZ1VBOExuQUlDRzM4T2ZpTU5JUjRqRFVFd2FpUU5JdzBqRGs0RVFFRXdFQU1MSUFBaEZpQUJJUmtnQWlFYUlBTWhHMElCSVN3Z0dpRUVJQVFoSEFOQUFrQWdIQ0VGSUJzaEJpQUZJQVpKSVFjZ0xDRWhJQ0ZDQUZJaENDQUhCSDhnQ0FWQkFBc2hDU0FKUlFSQURBRUxJQlloQ2lBY0lRc2dDaUFMUVFOMGFpRU1JQXdwQXdBaElpQWlJUjhnR1NFTklCd2hEaUFOSUE1QkEzUnFJUThnRHlrREFDRWpJQ01oSUNBZ0lTUWdIeUVsSUNRZ0pZVWhKaUFXSVJBZ0hDRVJJQkFnRVVFRGRHb2hFaUFTSUNZM0F3QWdIeUVuSUJraEV5QWNJUlFnRXlBVVFRTjBhaUVWSUJVZ0p6Y0RBQ0FnSVNnZ0h5RXBJQ2xDZjRVaEtpQW9JQ3FESVNzZ0t5RXNJQndoRnlBWFFRRnFJUmdnR0NFY0RBRUxDeUFlSkEwUEMvWUJBU0YvSXcwaEl5TU5RUkJxSkEwakRTTU9UZ1JBUVJBUUF3c2dBQ0VjSUFFaEhTQUNJUjRnSFNFZ0lDQkJCR29oSVNBaEtBSUFJUU1nQTBFQVJ5RUVJQVFFUUNBY0lRVWdCVUVRYWlFR0lBWW9BZ0FoQnlBSFFRaHFJUWdnQ0JCZkdpQWRJUWtnQ1NnQ0FDRUtJQjRoQ3lBS0lBdEdJUXdnREVFQmNTRU5JQTFCL3dGeElRNGdEaUVmSUJ3aER5QVBRUkJxSVJBZ0VDZ0NBQ0VSSUJGQkNHb2hFaUFTRUdBYUlCOGhFeUFUSVJjZ0Z5RWJJQ01rRFNBYkR3VWdIU0VVSUJRb0FnQWhGU0FlSVJZZ0ZTQVdSaUVZSUJoQkFYRWhHU0FaUWY4QmNTRWFJQm9oRnlBWElSc2dJeVFOSUJzUEN3QkJBQThMekFNQ0tuOFdmaU1OSVMwakRVSEFBR29rRFNNTkl3NU9CRUJCd0FBUUF3c2dBQ0ViSUFFaEh5QUNJU01nQXlFcFFRQWhLa0hSQUNFckEwQUNRQ0FySVFVZ0JVRi9haUVHSUFZaEt5QUZRUUJLSVFjZ0IwVUVRQXdCQ3lBaklRZ2dHeUVKSUFnZ0NVSElMUkJkR2lBcElRb2dIeUVMSUFvZ0MwSElMUkJkR2tFQUlRUURRQ0FFSVF3Z0RFSFpCVWdoRFNBTlJRUkFEQU1MSUNNaERpQXFJUThnRGlBUFFRTjBhaUVRSUJBcEF3QWhNaUF5SVM0Z0tTRVJJQ29oRWlBUklCSkJBM1JxSVJNZ0V5a0RBQ0V6SURNaEx5QXBJUlFnS2lFVklCVkI3UUpJSVJZZ0ZnUi9RZXdDQlVHVGZRc2hGeUFxSVJnZ0dDQVhhaUVaSUJraEtpQVVJQmxCQTNScUlSb2dHaWtEQUNFMElEUWhNQ0F1SVRVZ01DRTJJRFpDZjRVaE55QTFJRGVFSVRnZ0l5RWNJQ29oSFNBY0lCMUJBM1JxSVI0Z0hpa0RBQ0U1SUM4aE9pQTVJRHFGSVRzZ09DQTdneUU4SUR3aE1TQXhJVDBnUFVKL2hTRStJQnNoSUNBRUlTRWdJQ0FoUVFOMGFpRWlJQ0lnUGpjREFDQXVJVDhnTUNGQUlEOGdRSVVoUVNBeElVSWdRU0JDaENGRElCOGhKQ0FFSVNVZ0pDQWxRUU4wYWlFbUlDWWdRemNEQUNBRUlTY2dKMEVCYWlFb0lDZ2hCQXdBQ3dBTUFRc0xJQzBrRFE4TGlnSUNFMzhMZmlNTklSVWpEVUVnYWlRTkl3MGpEazRFUUVFZ0VBTUxJQUFoRHlBQklSQWdBaUVSUW44aElDQVJJUk1nRXlFU0EwQUNRQ0FTSVFNZ0EwRi9haUVFSUFRaEVpQURRUUJLSVFVZ0JVVUVRRUVGSVJRTUFRc2dEeUVHSUJJaEIwSHlBU0FIYXlFSUlBWWdDRUVEZEdvaENTQUpLUU1BSVJZZ0VDRUtJQkloQzBIeUFTQUxheUVNSUFvZ0RFRURkR29oRFNBTktRTUFJUmNnRmlBWGhTRVlJQmhDZjRVaEdTQWdJUm9nR2lBWmd5RWJJQnNoSUNBZ0lSd2dIRUlBVVNFT0lBNEVRRUVFSVJRTUFRc01BUXNMSUJSQkJFWUVRRUlBSVI0Z0hpRWZJQlVrRFNBZkR3VWdGRUVGUmdSQUlDQWhIU0FkSVI0Z0hpRWZJQlVrRFNBZkR3c0xRZ0FQQytvQkFSMS9JdzBoSGlNTlFSQnFKQTBqRFNNT1RnUkFRUkFRQXdzZ0FDRU1JQUVoRmlBV0lSa2dHVUVEYkNFYUlCb2hHeUFiRUNzaEhDQWNJUmhCQUNFWEEwQUNRQ0FYSVFJZ0ZpRURJQUlnQTBnaEJDQVlJUVVnQkVVRVFBd0JDeUFYSVFZZ0JrRURiQ0VISUFVZ0Iyb2hDQ0FNSVFrZ0Z5RUtJQWtnQ21vaEN5QUxMQUFBSVEwZ0RVRVlkRUVZZFNFT1FhWWpJQTRRVkNFUElBOGhFRUdtSXlFUklCQWdFV3NoRWtHN3hBQWdFa0VEYkdvaEV5QUlJQk11QUFBN0FBQWdDRUVDYWlBVFFRSnFMQUFBT2dBQUlCY2hGQ0FVUVFGcUlSVWdGU0VYREFFTEN5QWVKQTBnQlE4TDdRTUJSMzhqRFNGSkl3MUJJR29rRFNNTkl3NU9CRUJCSUJBREN5QUFJUmNnQVNFaUlBSWhMU0F0SVFNZ0EwRURhaUVFSUFSQkFXc2hCU0FGUVFOdFFYOXhJUVlnQmlGRElFTWhCeUFIUVFGcUlRZ2dDQ0VKSUFrUUt5RUtJQW9oUmlCR0lRc2dReUVNSUFzZ0RHb2hEU0FOUVFBNkFBQkJBQ0U0QTBBQ1FDQTRJUTRnUXlFUElBNGdEMGdoRUNBUVJRUkFEQUVMSUJjaEVTQWlJUklnT0NFVElCTkJBMndoRkNBU0lCUnFJUlVnRVNBVmFpRVdJQllzQUFBaEdDQVlRUmgwUVJoMUlSa2dGeUVhSUNJaEd5QTRJUndnSEVFRGJDRWRJQnNnSFdvaEhpQWVRUUZxSVI4Z0dpQWZhaUVnSUNBc0FBQWhJU0FoUVJoMFFSaDFJU01nSTBFRGJDRWtJQmtnSkdvaEpTQVhJU1lnSWlFbklEZ2hLQ0FvUVFOc0lTa2dKeUFwYWlFcUlDcEJBbW9oS3lBbUlDdHFJU3dnTEN3QUFDRXVJQzVCR0hSQkdIVWhMeUF2UVFsc0lUQWdKU0F3YWlFeElERkIvd0Z4SVRJZ01pRkhJRWNoTXlBelFSaDBRUmgxSVRRZ05FRUFTQ0UxSURVRVFDQkhJVFlnTmtFWWRFRVlkU0UzSURkQkcyb2hPU0E1UWY4QmNTRTZJRG9oUndzZ1J5RTdJRHRCR0hSQkdIVWhQRUdtSXlBOGFpRTlJRDBzQUFBaFBpQkdJVDhnT0NGQUlEOGdRR29oUVNCQklENDZBQUFnT0NGQ0lFSkJBV29oUkNCRUlUZ01BUXNMSUVZaFJTQkpKQTBnUlE4TDlBRUJFSDhqRFNFUEl3MUJFR29rRFNNTkl3NU9CRUJCRUJBREN5QVBRUVJxSVFFZ0FVRUFOZ0FBSUFGQkJHcEJBRG9BQUVFQUlRQURRQUpBSUFBaEJpQUdRZk1CU0NFSElBZEZCRUFNQVFzZ0FDRUlRZnc2SUFoQkJXeHFJUWtnQ1NBQktBQUFOZ0FBSUFsQkJHb2dBVUVFYWl3QUFEb0FBQ0FCUVFVUUtpQUFJUW9nQ2tFQmFpRUxJQXNoQUF3QkN3dEJBQ0VBQTBBQ1FDQUFJUXdnREVFYlNDRU5JQTFGQkVBTUFRc2dBQ0VDUWJ2RUFDQUNRUU5zYWlFRElBTWdBUzRBQURzQUFDQURRUUpxSUFGQkFtb3NBQUE2QUFBZ0FVRURFQ29nQUNFRUlBUkJBV29oQlNBRklRQU1BUXNMSUE4a0RROEx3d0VCRkg4akRTRVZJdzFCRUdva0RTTU5JdzVPQkVCQkVCQURDeUFBSVF3Z0FTRU5RUUFoRGdOQUFrQWdEaUVQSUEwaEVDQVBJQkJJSVJFZ0VVVUVRRUVGSVJRTUFRc2dEQ0VTSUE0aEV5QVNJQk5xSVFJZ0Fpd0FBQ0VESUFOQkFXcEJHSFJCR0hVaEJDQUNJQVE2QUFBZ0JFRVlkRUVZZFNFRklBVkJBVW9oQmlBR1JRUkFRUVVoRkF3QkN5QU1JUWNnRGlFSUlBY2dDR29oQ1NBSlFYODZBQUFnRGlFS0lBcEJBV29oQ3lBTElRNE1BUXNMSUJSQkJVWUVRQ0FWSkEwUEN3dXRiZ0d6Q0g4akRTR3pDQ01OUVJCcUpBMGpEU01PVGdSQVFSQVFBd3Nnc3dnaFZTQUFRZlVCU1NIRUFRSkFJTVFCQkVBZ0FFRUxTU0d6QWlBQVFRdHFJYUlESUtJRFFYaHhJWkVFSUxNQ0JIOUJFQVVna1FRTElZQUZJSUFGUVFOMkllOEZRYncyS0FJQUlkNEdJTjRHSU84RmRpSE5CeUROQjBFRGNTRldJRlpCQUVZaFlTQmhSUVJBSU0wSFFRRnhJV3dnYkVFQmN5RjNJSGNnN3dWcUlZSUJJSUlCUVFGMElZMEJRZVEySUkwQlFRSjBhaUdZQVNDWUFVRUlhaUdqQVNDakFTZ0NBQ0d1QVNDdUFVRUlhaUc1QVNDNUFTZ0NBQ0hGQVNERkFTQ1lBVVloMEFFZzBBRUVRRUVCSUlJQmRDSGJBU0RiQVVGL2N5SG1BU0RlQmlEbUFYRWg4UUZCdkRZZzhRRTJBZ0FGSU1VQlFReHFJZndCSVB3QklKZ0JOZ0lBSUtNQklNVUJOZ0lBQ3lDQ0FVRURkQ0dIQWlDSEFrRURjaUdTQWlDdUFVRUVhaUdkQWlDZEFpQ1NBallDQUNDdUFTQ0hBbW9ocUFJZ3FBSkJCR29odEFJZ3RBSW9BZ0FodndJZ3Z3SkJBWEloeWdJZ3RBSWd5Z0kyQWdBZ3VRRWhCaUN6Q0NRTklBWVBDMEhFTmlnQ0FDSFZBaUNBQlNEVkFrc2g0QUlnNEFJRVFDRE5CMEVBUmlIckFpRHJBa1VFUUNETkJ5RHZCWFFoOWdKQkFpRHZCWFFoZ1FOQkFDQ0JBMnNoakFNZ2dRTWdqQU55SVpjRElQWUNJSmNEY1NHakEwRUFJS01EYXlHdUF5Q2pBeUN1QTNFaHVRTWd1UU5CZjJvaHhBTWd4QU5CREhZaHp3TWd6d05CRUhFaDJnTWd4QU1nMmdOMkllVURJT1VEUVFWMklmQURJUEFEUVFoeElmc0RJUHNESU5vRGNpR0dCQ0RsQXlEN0EzWWhrZ1Fna2dSQkFuWWhuUVFnblFSQkJIRWhxQVFnaGdRZ3FBUnlJYk1FSUpJRUlLZ0VkaUcrQkNDK0JFRUJkaUhKQkNESkJFRUNjU0hVQkNDekJDRFVCSEloM3dRZ3ZnUWcxQVIySWVvRUlPb0VRUUYySWZVRUlQVUVRUUZ4SVlFRklOOEVJSUVGY2lHTUJTRHFCQ0NCQlhZaGx3VWdqQVVnbHdWcUlhSUZJS0lGUVFGMElhMEZRZVEySUswRlFRSjBhaUc0QlNDNEJVRUlhaUhEQlNEREJTZ0NBQ0hPQlNET0JVRUlhaUhaQlNEWkJTZ0NBQ0hrQlNEa0JTQzRCVVloOEFVZzhBVUVRRUVCSUtJRmRDSDdCU0Q3QlVGL2N5R0dCaURlQmlDR0JuRWhrUVpCdkRZZ2tRWTJBZ0Fna1FZaHpnY0ZJT1FGUVF4cUlad0dJSndHSUxnRk5nSUFJTU1GSU9RRk5nSUFJTjRHSWM0SEN5Q2lCVUVEZENHbkJpQ25CaUNBQldzaHNnWWdnQVZCQTNJaHZRWWd6Z1ZCQkdvaHlBWWd5QVlndlFZMkFnQWd6Z1VnZ0FWcUlkTUdJTElHUVFGeUlkOEdJTk1HUVFScUllb0dJT29HSU44R05nSUFJTTRGSUtjR2FpSDFCaUQxQmlDeUJqWUNBQ0RWQWtFQVJpR0FCeUNBQjBVRVFFSFFOaWdDQUNHTEJ5RFZBa0VEZGlHV0J5Q1dCMEVCZENHaEIwSGtOaUNoQjBFQ2RHb2hyQWRCQVNDV0IzUWh0d2NnemdjZ3R3ZHhJY0lISU1JSFFRQkdJZGtISU5rSEJFQWd6Z2NndHdkeUllUUhRYncySU9RSE5nSUFJS3dIUVFocUlVUWdyQWNoRUNCRUlVNEZJS3dIUVFocUllOEhJTzhIS0FJQUlmb0hJUG9ISVJBZzd3Y2hUZ3NnVGlDTEJ6WUNBQ0FRUVF4cUlZVUlJSVVJSUlzSE5nSUFJSXNIUVFocUlaQUlJSkFJSUJBMkFnQWdpd2RCREdvaG13Z2dtd2dnckFjMkFnQUxRY1EySUxJR05nSUFRZEEySU5NR05nSUFJTmtGSVFZZ3N3Z2tEU0FHRHd0QndEWW9BZ0FobmdnZ25naEJBRVlobndnZ253Z0VRQ0NBQlNFUEJVRUFJSjRJYXlGWElKNElJRmR4SVZnZ1dFRi9haUZaSUZsQkRIWWhXaUJhUVJCeElWc2dXU0JiZGlGY0lGeEJCWFloWFNCZFFRaHhJVjRnWGlCYmNpRmZJRndnWG5ZaFlDQmdRUUoySVdJZ1lrRUVjU0ZqSUY4Z1kzSWhaQ0JnSUdOMklXVWdaVUVCZGlGbUlHWkJBbkVoWnlCa0lHZHlJV2dnWlNCbmRpRnBJR2xCQVhZaGFpQnFRUUZ4SVdzZ2FDQnJjaUZ0SUdrZ2EzWWhiaUJ0SUc1cUlXOUI3RGdnYjBFQ2RHb2hjQ0J3S0FJQUlYRWdjVUVFYWlGeUlISW9BZ0FoY3lCelFYaHhJWFFnZENDQUJXc2hkU0J4UVJCcUlYWWdkaWdDQUNGNElIaEJBRVloZVNCNVFRRnhJVkVnY1VFUWFpQlJRUUowYWlGNklIb29BZ0FoZXlCN1FRQkdJWHdnZkFSQUlIRWhDeUIxSVEwRklIRWhEQ0IxSVE0Z2V5RitBMEFDUUNCK1FRUnFJWDBnZlNnQ0FDRi9JSDlCZUhFaGdBRWdnQUVnZ0FWcklZRUJJSUVCSUE1SklZTUJJSU1CQkg4Z2dRRUZJQTRMSVFJZ2d3RUVmeUIrQlNBTUN5RUJJSDVCRUdvaGhBRWdoQUVvQWdBaGhRRWdoUUZCQUVZaGhnRWdoZ0ZCQVhFaFR5QitRUkJxSUU5QkFuUnFJWWNCSUljQktBSUFJWWdCSUlnQlFRQkdJWWtCSUlrQkJFQWdBU0VMSUFJaERRd0JCU0FCSVF3Z0FpRU9JSWdCSVg0TERBRUxDd3NnQ3lDQUJXb2hpZ0VnaWdFZ0Mwc2hpd0VnaXdFRVFDQUxRUmhxSVl3QklJd0JLQUlBSVk0QklBdEJER29oandFZ2p3RW9BZ0Foa0FFZ2tBRWdDMFloa1FFQ1FDQ1JBUVJBSUF0QkZHb2hsZ0VnbGdFb0FnQWhsd0VnbHdGQkFFWWhtUUVnbVFFRVFDQUxRUkJxSVpvQklKb0JLQUlBSVpzQklKc0JRUUJHSVp3QklKd0JCRUJCQUNFMERBTUZJSnNCSVNZZ21nRWhKd3NGSUpjQklTWWdsZ0VoSndzRFFBSkFJQ1pCRkdvaG5RRWduUUVvQWdBaG5nRWduZ0ZCQUVZaG53RWdud0ZGQkVBZ25nRWhKaUNkQVNFbkRBSUxJQ1pCRUdvaG9BRWdvQUVvQWdBaG9RRWdvUUZCQUVZaG9nRWdvZ0VFUUF3QkJTQ2hBU0VtSUtBQklTY0xEQUVMQ3lBblFRQTJBZ0FnSmlFMEJTQUxRUWhxSVpJQklKSUJLQUlBSVpNQklKTUJRUXhxSVpRQklKUUJJSkFCTmdJQUlKQUJRUWhxSVpVQklKVUJJSk1CTmdJQUlKQUJJVFFMQ3lDT0FVRUFSaUdrQVFKQUlLUUJSUVJBSUF0QkhHb2hwUUVncFFFb0FnQWhwZ0ZCN0RnZ3BnRkJBblJxSWFjQklLY0JLQUlBSWFnQklBc2dxQUZHSWFrQklLa0JCRUFncHdFZ05EWUNBQ0EwUVFCR0lhQUlJS0FJQkVCQkFTQ21BWFFocWdFZ3FnRkJmM01ocXdFZ25nZ2dxd0Z4SWF3QlFjQTJJS3dCTmdJQURBTUxCU0NPQVVFUWFpR3RBU0N0QVNnQ0FDR3ZBU0N2QVNBTFJ5R3dBU0N3QVVFQmNTRlNJSTRCUVJCcUlGSkJBblJxSWJFQklMRUJJRFEyQWdBZ05FRUFSaUd5QVNDeUFRUkFEQU1MQ3lBMFFSaHFJYk1CSUxNQklJNEJOZ0lBSUF0QkVHb2h0QUVndEFFb0FnQWh0UUVndFFGQkFFWWh0Z0VndGdGRkJFQWdORUVRYWlHM0FTQzNBU0MxQVRZQ0FDQzFBVUVZYWlHNEFTQzRBU0EwTmdJQUN5QUxRUlJxSWJvQklMb0JLQUlBSWJzQklMc0JRUUJHSWJ3QklMd0JSUVJBSURSQkZHb2h2UUVndlFFZ3V3RTJBZ0FndXdGQkdHb2h2Z0VndmdFZ05EWUNBQXNMQ3lBTlFSQkpJYjhCSUw4QkJFQWdEU0NBQldvaHdBRWd3QUZCQTNJaHdRRWdDMEVFYWlIQ0FTRENBU0RCQVRZQ0FDQUxJTUFCYWlIREFTRERBVUVFYWlIR0FTREdBU2dDQUNISEFTREhBVUVCY2lISUFTREdBU0RJQVRZQ0FBVWdnQVZCQTNJaHlRRWdDMEVFYWlIS0FTREtBU0RKQVRZQ0FDQU5RUUZ5SWNzQklJb0JRUVJxSWN3QklNd0JJTXNCTmdJQUlJb0JJQTFxSWMwQklNMEJJQTAyQWdBZzFRSkJBRVloemdFZ3pnRkZCRUJCMERZb0FnQWh6d0VnMVFKQkEzWWgwUUVnMFFGQkFYUWgwZ0ZCNURZZzBnRkJBblJxSWRNQlFRRWcwUUYwSWRRQklONEdJTlFCY1NIVkFTRFZBVUVBUmlIV0FTRFdBUVJBSU40R0lOUUJjaUhYQVVHOE5pRFhBVFlDQUNEVEFVRUlhaUZGSU5NQklRY2dSU0ZOQlNEVEFVRUlhaUhZQVNEWUFTZ0NBQ0haQVNEWkFTRUhJTmdCSVUwTElFMGd6d0UyQWdBZ0IwRU1haUhhQVNEYUFTRFBBVFlDQUNEUEFVRUlhaUhjQVNEY0FTQUhOZ0lBSU04QlFReHFJZDBCSU4wQklOTUJOZ0lBQzBIRU5pQU5OZ0lBUWRBMklJb0JOZ0lBQ3lBTFFRaHFJZDRCSU40QklRWWdzd2drRFNBR0R3VWdnQVVoRHdzTEJTQ0FCU0VQQ3dVZ0FFRy9mMHNoM3dFZzN3RUVRRUYvSVE4RklBQkJDMm9oNEFFZzRBRkJlSEVoNFFGQndEWW9BZ0FoNGdFZzRnRkJBRVloNHdFZzR3RUVRQ0RoQVNFUEJVRUFJT0VCYXlIa0FTRGdBVUVJZGlIbEFTRGxBVUVBUmlIbkFTRG5BUVJBUVFBaElBVWc0UUZCLy8vL0Iwc2g2QUVnNkFFRVFFRWZJU0FGSU9VQlFZRCtQMm9oNlFFZzZRRkJFSFloNmdFZzZnRkJDSEVoNndFZzVRRWc2d0YwSWV3QklPd0JRWURnSDJvaDdRRWc3UUZCRUhZaDdnRWc3Z0ZCQkhFaDd3RWc3d0VnNndGeUlmQUJJT3dCSU84QmRDSHlBU0R5QVVHQWdBOXFJZk1CSVBNQlFSQjJJZlFCSVBRQlFRSnhJZlVCSVBBQklQVUJjaUgyQVVFT0lQWUJheUgzQVNEeUFTRDFBWFFoK0FFZytBRkJEM1loK1FFZzl3RWcrUUZxSWZvQklQb0JRUUYwSWZzQklQb0JRUWRxSWYwQklPRUJJUDBCZGlIK0FTRCtBVUVCY1NIL0FTRC9BU0Q3QVhJaGdBSWdnQUloSUFzTFFldzRJQ0JCQW5ScUlZRUNJSUVDS0FJQUlZSUNJSUlDUVFCR0lZTUNBa0FnZ3dJRVFFRUFJVE5CQUNFMklPUUJJVGRCT1NHeUNBVWdJRUVmUmlHRUFpQWdRUUYySVlVQ1FSa2doUUpySVlZQ0lJUUNCSDlCQUFVZ2hnSUxJWWdDSU9FQklJZ0NkQ0dKQWtFQUlSc2c1QUVoSGlDQ0FpRWZJSWtDSVNKQkFDRWtBMEFDUUNBZlFRUnFJWW9DSUlvQ0tBSUFJWXNDSUlzQ1FYaHhJWXdDSUl3Q0lPRUJheUdOQWlDTkFpQWVTU0dPQWlDT0FnUkFJSTBDUVFCR0lZOENJSThDQkVCQkFDRTlJQjhoUUNBZklVRkJQU0d5Q0F3RkJTQWZJU3NnalFJaExBc0ZJQnNoS3lBZUlTd0xJQjlCRkdvaGtBSWdrQUlvQWdBaGtRSWdJa0VmZGlHVEFpQWZRUkJxSUpNQ1FRSjBhaUdVQWlDVUFpZ0NBQ0dWQWlDUkFrRUFSaUdXQWlDUkFpQ1ZBa1lobHdJZ2xnSWdsd0p5SWFnSUlLZ0lCSDhnSkFVZ2tRSUxJUzBnbFFKQkFFWWhtQUlnbUFKQkFYTWhwQWdncEFoQkFYRWhtUUlnSWlDWkFuUWhJU0NZQWdSQUlDMGhNeUFySVRZZ0xDRTNRVGtoc2dnTUFRVWdLeUViSUN3aEhpQ1ZBaUVmSUNFaElpQXRJU1FMREFFTEN3c0xJTElJUVRsR0JFQWdNMEVBUmlHYUFpQTJRUUJHSVpzQ0lKb0NJSnNDY1NHbUNDQ21DQVJBUVFJZ0lIUWhuQUpCQUNDY0Ftc2huZ0lnbkFJZ25nSnlJWjhDSU9JQklKOENjU0dnQWlDZ0FrRUFSaUdoQWlDaEFnUkFJT0VCSVE4TUJndEJBQ0NnQW1zaG9nSWdvQUlnb2dKeElhTUNJS01DUVg5cUlhUUNJS1FDUVF4MklhVUNJS1VDUVJCeElhWUNJS1FDSUtZQ2RpR25BaUNuQWtFRmRpR3BBaUNwQWtFSWNTR3FBaUNxQWlDbUFuSWhxd0lncHdJZ3FnSjJJYXdDSUt3Q1FRSjJJYTBDSUswQ1FRUnhJYTRDSUtzQ0lLNENjaUd2QWlDc0FpQ3VBblloc0FJZ3NBSkJBWFloc1FJZ3NRSkJBbkVoc2dJZ3J3SWdzZ0p5SWJVQ0lMQUNJTElDZGlHMkFpQzJBa0VCZGlHM0FpQzNBa0VCY1NHNEFpQzFBaUM0QW5JaHVRSWd0Z0lndUFKMklib0NJTGtDSUxvQ2FpRzdBa0hzT0NDN0FrRUNkR29odkFJZ3ZBSW9BZ0FodlFKQkFDRTZJTDBDSVQ4RklEWWhPaUF6SVQ4TElEOUJBRVlodmdJZ3ZnSUVRQ0E2SVRrZ055RThCU0EzSVQwZ1B5RkFJRG9oUVVFOUliSUlDd3Nnc2doQlBVWUVRQU5BQWtCQkFDR3lDQ0JBUVFScUljQUNJTUFDS0FJQUljRUNJTUVDUVhoeEljSUNJTUlDSU9FQmF5SERBaUREQWlBOVNTSEVBaURFQWdSL0lNTUNCU0E5Q3lFRUlNUUNCSDhnUUFVZ1FRc2hQaUJBUVJCcUljVUNJTVVDS0FJQUljWUNJTVlDUVFCR0ljY0NJTWNDUVFGeElWTWdRRUVRYWlCVFFRSjBhaUhJQWlESUFpZ0NBQ0hKQWlESkFrRUFSaUhMQWlETEFnUkFJRDRoT1NBRUlUd01BUVVnQkNFOUlNa0NJVUFnUGlGQlFUMGhzZ2dMREFFTEN3c2dPVUVBUmlITUFpRE1BZ1JBSU9FQklROEZRY1EyS0FJQUljMENJTTBDSU9FQmF5SE9BaUE4SU00Q1NTSFBBaURQQWdSQUlEa2c0UUZxSWRBQ0lOQUNJRGxMSWRFQ0lORUNSUVJBUVFBaEJpQ3pDQ1FOSUFZUEN5QTVRUmhxSWRJQ0lOSUNLQUlBSWRNQ0lEbEJER29oMUFJZzFBSW9BZ0FoMWdJZzFnSWdPVVloMXdJQ1FDRFhBZ1JBSURsQkZHb2gzQUlnM0FJb0FnQWgzUUlnM1FKQkFFWWgzZ0lnM2dJRVFDQTVRUkJxSWQ4Q0lOOENLQUlBSWVFQ0lPRUNRUUJHSWVJQ0lPSUNCRUJCQUNFNERBTUZJT0VDSVM0ZzN3SWhMd3NGSU4wQ0lTNGczQUloTHdzRFFBSkFJQzVCRkdvaDR3SWc0d0lvQWdBaDVBSWc1QUpCQUVZaDVRSWc1UUpGQkVBZzVBSWhMaURqQWlFdkRBSUxJQzVCRUdvaDVnSWc1Z0lvQWdBaDV3SWc1d0pCQUVZaDZBSWc2QUlFUUF3QkJTRG5BaUV1SU9ZQ0lTOExEQUVMQ3lBdlFRQTJBZ0FnTGlFNEJTQTVRUWhxSWRnQ0lOZ0NLQUlBSWRrQ0lOa0NRUXhxSWRvQ0lOb0NJTllDTmdJQUlOWUNRUWhxSWRzQ0lOc0NJTmtDTmdJQUlOWUNJVGdMQ3lEVEFrRUFSaUhwQWdKQUlPa0NCRUFnNGdFaHhnTUZJRGxCSEdvaDZnSWc2Z0lvQWdBaDdBSkI3RGdnN0FKQkFuUnFJZTBDSU8wQ0tBSUFJZTRDSURrZzdnSkdJZThDSU84Q0JFQWc3UUlnT0RZQ0FDQTRRUUJHSWFJSUlLSUlCRUJCQVNEc0FuUWg4QUlnOEFKQmYzTWg4UUlnNGdFZzhRSnhJZklDUWNBMklQSUNOZ0lBSVBJQ0ljWUREQU1MQlNEVEFrRVFhaUh6QWlEekFpZ0NBQ0gwQWlEMEFpQTVSeUgxQWlEMUFrRUJjU0ZVSU5NQ1FSQnFJRlJCQW5ScUlmY0NJUGNDSURnMkFnQWdPRUVBUmlINEFpRDRBZ1JBSU9JQkljWUREQU1MQ3lBNFFSaHFJZmtDSVBrQ0lOTUNOZ0lBSURsQkVHb2grZ0lnK2dJb0FnQWgrd0lnK3dKQkFFWWgvQUlnL0FKRkJFQWdPRUVRYWlIOUFpRDlBaUQ3QWpZQ0FDRDdBa0VZYWlIK0FpRCtBaUE0TmdJQUN5QTVRUlJxSWY4Q0lQOENLQUlBSVlBRElJQURRUUJHSVlJRElJSURCRUFnNGdFaHhnTUZJRGhCRkdvaGd3TWdnd01nZ0FNMkFnQWdnQU5CR0dvaGhBTWdoQU1nT0RZQ0FDRGlBU0hHQXdzTEN5QThRUkJKSVlVREFrQWdoUU1FUUNBOElPRUJhaUdHQXlDR0EwRURjaUdIQXlBNVFRUnFJWWdESUlnRElJY0ROZ0lBSURrZ2hnTnFJWWtESUlrRFFRUnFJWW9ESUlvREtBSUFJWXNESUlzRFFRRnlJWTBESUlvRElJMEROZ0lBQlNEaEFVRURjaUdPQXlBNVFRUnFJWThESUk4RElJNEROZ0lBSUR4QkFYSWhrQU1nMEFKQkJHb2hrUU1na1FNZ2tBTTJBZ0FnMEFJZ1BHb2hrZ01na2dNZ1BEWUNBQ0E4UVFOMklaTURJRHhCZ0FKSklaUURJSlFEQkVBZ2t3TkJBWFFobFFOQjVEWWdsUU5CQW5ScUlaWURRYncyS0FJQUlaZ0RRUUVna3dOMElaa0RJSmdESUprRGNTR2FBeUNhQTBFQVJpR2JBeUNiQXdSQUlKZ0RJSmtEY2lHY0EwRzhOaUNjQXpZQ0FDQ1dBMEVJYWlGSklKWURJU1VnU1NGTUJTQ1dBMEVJYWlHZEF5Q2RBeWdDQUNHZUF5Q2VBeUVsSUowRElVd0xJRXdnMEFJMkFnQWdKVUVNYWlHZkF5Q2ZBeURRQWpZQ0FDRFFBa0VJYWlHZ0F5Q2dBeUFsTmdJQUlOQUNRUXhxSWFFRElLRURJSllETmdJQURBSUxJRHhCQ0hZaHBBTWdwQU5CQUVZaHBRTWdwUU1FUUVFQUlTTUZJRHhCLy8vL0Iwc2hwZ01ncGdNRVFFRWZJU01GSUtRRFFZRCtQMm9ocHdNZ3B3TkJFSFlocUFNZ3FBTkJDSEVocVFNZ3BBTWdxUU4wSWFvRElLb0RRWURnSDJvaHF3TWdxd05CRUhZaHJBTWdyQU5CQkhFaHJRTWdyUU1ncVFOeUlhOERJS29ESUswRGRDR3dBeUN3QTBHQWdBOXFJYkVESUxFRFFSQjJJYklESUxJRFFRSnhJYk1ESUs4RElMTURjaUcwQTBFT0lMUURheUcxQXlDd0F5Q3pBM1FodGdNZ3RnTkJEM1lodHdNZ3RRTWd0d05xSWJnRElMZ0RRUUYwSWJvRElMZ0RRUWRxSWJzRElEd2d1d04ySWJ3RElMd0RRUUZ4SWIwRElMMERJTG9EY2lHK0F5QytBeUVqQ3d0QjdEZ2dJMEVDZEdvaHZ3TWcwQUpCSEdvaHdBTWd3QU1nSXpZQ0FDRFFBa0VRYWlIQkF5REJBMEVFYWlIQ0F5RENBMEVBTmdJQUlNRURRUUEyQWdCQkFTQWpkQ0hEQXlER0F5RERBM0VoeFFNZ3hRTkJBRVloeHdNZ3h3TUVRQ0RHQXlEREEzSWh5QU5Cd0RZZ3lBTTJBZ0FndndNZzBBSTJBZ0FnMEFKQkdHb2h5UU1neVFNZ3Z3TTJBZ0FnMEFKQkRHb2h5Z01neWdNZzBBSTJBZ0FnMEFKQkNHb2h5d01neXdNZzBBSTJBZ0FNQWdzZ3Z3TW9BZ0FoekFNZ0kwRWZSaUhOQXlBalFRRjJJYzREUVJrZ3pnTnJJZEFESU0wREJIOUJBQVVnMEFNTElkRURJRHdnMFFOMElkSURJTklESVJ3Z3pBTWhIUU5BQWtBZ0hVRUVhaUhUQXlEVEF5Z0NBQ0hVQXlEVUEwRjRjU0hWQXlEVkF5QThSaUhXQXlEV0F3UkFRZUVBSWJJSURBRUxJQnhCSDNZaDF3TWdIVUVRYWlEWEEwRUNkR29oMkFNZ0hFRUJkQ0haQXlEWUF5Z0NBQ0hiQXlEYkEwRUFSaUhjQXlEY0F3UkFRZUFBSWJJSURBRUZJTmtESVJ3ZzJ3TWhIUXNNQVFzTElMSUlRZUFBUmdSQUlOZ0RJTkFDTmdJQUlOQUNRUmhxSWQwRElOMERJQjAyQWdBZzBBSkJER29oM2dNZzNnTWcwQUkyQWdBZzBBSkJDR29oM3dNZzN3TWcwQUkyQWdBTUFnVWdzZ2hCNFFCR0JFQWdIVUVJYWlIZ0F5RGdBeWdDQUNIaEF5RGhBMEVNYWlIaUF5RGlBeURRQWpZQ0FDRGdBeURRQWpZQ0FDRFFBa0VJYWlIakF5RGpBeURoQXpZQ0FDRFFBa0VNYWlIa0F5RGtBeUFkTmdJQUlOQUNRUmhxSWVZRElPWURRUUEyQWdBTUF3c0xDd3NnT1VFSWFpSG5BeURuQXlFR0lMTUlKQTBnQmc4RklPRUJJUThMQ3dzTEN3dEJ4RFlvQWdBaDZBTWc2QU1nRDBraDZRTWc2UU5GQkVBZzZBTWdEMnNoNmdOQjBEWW9BZ0FoNndNZzZnTkJEMHNoN0FNZzdBTUVRQ0RyQXlBUGFpSHRBMEhRTmlEdEF6WUNBRUhFTmlEcUF6WUNBQ0RxQTBFQmNpSHVBeUR0QTBFRWFpSHZBeUR2QXlEdUF6WUNBQ0RyQXlEb0Eyb2g4UU1nOFFNZzZnTTJBZ0FnRDBFRGNpSHlBeURyQTBFRWFpSHpBeUR6QXlEeUF6WUNBQVZCeERaQkFEWUNBRUhRTmtFQU5nSUFJT2dEUVFOeUlmUURJT3NEUVFScUlmVURJUFVESVBRRE5nSUFJT3NESU9nRGFpSDJBeUQyQTBFRWFpSDNBeUQzQXlnQ0FDSDRBeUQ0QTBFQmNpSDVBeUQzQXlENUF6WUNBQXNnNndOQkNHb2grZ01nK2dNaEJpQ3pDQ1FOSUFZUEMwSElOaWdDQUNIOEF5RDhBeUFQU3lIOUF5RDlBd1JBSVB3RElBOXJJZjREUWNnMklQNEROZ0lBUWRRMktBSUFJZjhESVA4RElBOXFJWUFFUWRRMklJQUVOZ0lBSVA0RFFRRnlJWUVFSUlBRVFRUnFJWUlFSUlJRUlJRUVOZ0lBSUE5QkEzSWhnd1FnL3dOQkJHb2hoQVFnaEFRZ2d3UTJBZ0FnL3dOQkNHb2hoUVFnaFFRaEJpQ3pDQ1FOSUFZUEMwR1VPaWdDQUNHSEJDQ0hCRUVBUmlHSUJDQ0lCQVJBUVp3NlFZQWdOZ0lBUVpnNlFZQWdOZ0lBUWFBNlFYODJBZ0JCcERwQmZ6WUNBRUdvT2tFQU5nSUFRZmc1UVFBMkFnQWdWU0dKQkNDSkJFRndjU0dLQkNDS0JFSFlxdFdxQlhNaGl3UkJsRG9naXdRMkFnQkJnQ0FoandRRlFadzZLQUlBSVVnZ1NDR1BCQXNnRDBFd2FpR01CQ0FQUVM5cUlZMEVJSThFSUkwRWFpR09CRUVBSUk4RWF5R1FCQ0NPQkNDUUJIRWhrd1Fna3dRZ0Qwc2hsQVFnbEFSRkJFQkJBQ0VHSUxNSUpBMGdCZzhMUWZRNUtBSUFJWlVFSUpVRVFRQkdJWllFSUpZRVJRUkFRZXc1S0FJQUlaY0VJSmNFSUpNRWFpR1lCQ0NZQkNDWEJFMGhtUVFnbUFRZ2xRUkxJWm9FSUprRUlKb0VjaUduQ0NDbkNBUkFRUUFoQmlDekNDUU5JQVlQQ3d0QitEa29BZ0FobXdRZ213UkJCSEVobkFRZ25BUkJBRVlobmdRQ1FDQ2VCQVJBUWRRMktBSUFJWjhFSUo4RVFRQkdJYUFFQWtBZ29BUUVRRUgyQUNHeUNBVkIvRGtoQ2dOQUFrQWdDaWdDQUNHaEJDQ2hCQ0NmQkVzaG9nUWdvZ1JGQkVBZ0NrRUVhaUdqQkNDakJDZ0NBQ0drQkNDaEJDQ2tCR29ocFFRZ3BRUWdud1JMSWFZRUlLWUVCRUFNQWdzTElBcEJDR29ocHdRZ3B3UW9BZ0FocVFRZ3FRUkJBRVlocWdRZ3FnUUVRRUgyQUNHeUNBd0VCU0NwQkNFS0N3d0JDd3NnamdRZy9BTnJJY01FSU1NRUlKQUVjU0hFQkNERUJFSC8vLy8vQjBraHhRUWd4UVFFUUNERUJCQmhJY1lFSUFvb0FnQWh4d1Fnb3dRb0FnQWh5QVFneHdRZ3lBUnFJY29FSU1ZRUlNb0VSaUhMQkNETEJBUkFJTVlFUVg5R0ljd0VJTXdFQkVBZ3hBUWhNQVVneEFRaFFpREdCQ0ZEUVljQkliSUlEQVlMQlNER0JDRXhJTVFFSVRKQi9nQWhzZ2dMQlVFQUlUQUxDd3NDUUNDeUNFSDJBRVlFUUVFQUVHRWhxd1FncXdSQmYwWWhyQVFnckFRRVFFRUFJVEFGSUtzRUlhMEVRWmc2S0FJQUlhNEVJSzRFUVg5cUlhOEVJSzhFSUswRWNTR3dCQ0N3QkVFQVJpR3hCQ0N2QkNDdEJHb2hzZ1JCQUNDdUJHc2h0QVFnc2dRZ3RBUnhJYlVFSUxVRUlLMEVheUcyQkNDeEJBUi9RUUFGSUxZRUN5RzNCQ0MzQkNDVEJHb2hCVUhzT1NnQ0FDRzRCQ0FGSUxnRWFpRzVCQ0FGSUE5TElib0VJQVZCLy8vLy93ZEpJYnNFSUxvRUlMc0VjU0dsQ0NDbENBUkFRZlE1S0FJQUlid0VJTHdFUVFCR0liMEVJTDBFUlFSQUlMa0VJTGdFVFNHL0JDQzVCQ0M4QkVzaHdBUWd2d1Fnd0FSeUlhMElJSzBJQkVCQkFDRXdEQVVMQ3lBRkVHRWh3UVFnd1FRZ3F3UkdJY0lFSU1JRUJFQWdCU0ZDSUtzRUlVTkJod0Voc2dnTUJnVWd3UVFoTVNBRklUSkIvZ0Foc2dnTEJVRUFJVEFMQ3dzTEFrQWdzZ2hCL2dCR0JFQkJBQ0F5YXlITkJDQXhRWDlISWM0RUlESkIvLy8vL3dkSkljOEVJTThFSU00RWNTR3hDQ0NNQkNBeVN5SFFCQ0RRQkNDeENIRWhxUWdncVFoRkJFQWdNVUYvUmlIYkJDRGJCQVJBUVFBaE1Bd0RCU0F5SVVJZ01TRkRRWWNCSWJJSURBVUxBQXRCbkRvb0FnQWgwUVFnalFRZ01tc2gwZ1FnMGdRZzBRUnFJZE1FUVFBZzBRUnJJZFVFSU5NRUlOVUVjU0hXQkNEV0JFSC8vLy8vQjBraDF3UWcxd1JGQkVBZ01pRkNJREVoUTBHSEFTR3lDQXdFQ3lEV0JCQmhJZGdFSU5nRVFYOUdJZGtFSU5rRUJFQWd6UVFRWVJwQkFDRXdEQUlGSU5ZRUlESnFJZG9FSU5vRUlVSWdNU0ZEUVljQkliSUlEQVFMQUFzTFFmZzVLQUlBSWR3RUlOd0VRUVJ5SWQwRVFmZzVJTjBFTmdJQUlEQWhPMEdGQVNHeUNBVkJBQ0U3UVlVQkliSUlDd3Nnc2doQmhRRkdCRUFna3dSQi8vLy8vd2RKSWQ0RUlONEVCRUFna3dRUVlTSGdCRUVBRUdFaDRRUWc0QVJCZjBjaDRnUWc0UVJCZjBjaDR3UWc0Z1FnNHdSeElhOElJT0FFSU9FRVNTSGtCQ0RrQkNDdkNIRWhxZ2dnNFFRaDVRUWc0QVFoNWdRZzVRUWc1Z1JySWVjRUlBOUJLR29oNkFRZzV3UWc2QVJMSWVrRUlPa0VCSDhnNXdRRklEc0xJUU1ncWdoQkFYTWhxd2dnNEFSQmYwWWg2d1FnNlFSQkFYTWhvd2dnNndRZ293aHlJZXdFSU93RUlLc0ljaUd1Q0NDdUNFVUVRQ0FESVVJZzRBUWhRMEdIQVNHeUNBc0xDeUN5Q0VHSEFVWUVRRUhzT1NnQ0FDSHRCQ0R0QkNCQ2FpSHVCRUhzT1NEdUJEWUNBRUh3T1NnQ0FDSHZCQ0R1QkNEdkJFc2g4QVFnOEFRRVFFSHdPU0R1QkRZQ0FBdEIxRFlvQWdBaDhRUWc4UVJCQUVZaDhnUUNRQ0R5QkFSQVFjdzJLQUlBSWZNRUlQTUVRUUJHSWZRRUlFTWc4d1JKSWZZRUlQUUVJUFlFY2lHc0NDQ3NDQVJBUWN3MklFTTJBZ0FMUWZ3NUlFTTJBZ0JCZ0RvZ1FqWUNBRUdJT2tFQU5nSUFRWlE2S0FJQUlmY0VRZUEySVBjRU5nSUFRZHcyUVg4MkFnQkI4RFpCNURZMkFnQkI3RFpCNURZMkFnQkIrRFpCN0RZMkFnQkI5RFpCN0RZMkFnQkJnRGRCOURZMkFnQkIvRFpCOURZMkFnQkJpRGRCL0RZMkFnQkJoRGRCL0RZMkFnQkJrRGRCaERjMkFnQkJqRGRCaERjMkFnQkJtRGRCakRjMkFnQkJsRGRCakRjMkFnQkJvRGRCbERjMkFnQkJuRGRCbERjMkFnQkJxRGRCbkRjMkFnQkJwRGRCbkRjMkFnQkJzRGRCcERjMkFnQkJyRGRCcERjMkFnQkJ1RGRCckRjMkFnQkJ0RGRCckRjMkFnQkJ3RGRCdERjMkFnQkJ2RGRCdERjMkFnQkJ5RGRCdkRjMkFnQkJ4RGRCdkRjMkFnQkIwRGRCeERjMkFnQkJ6RGRCeERjMkFnQkIyRGRCekRjMkFnQkIxRGRCekRjMkFnQkI0RGRCMURjMkFnQkIzRGRCMURjMkFnQkI2RGRCM0RjMkFnQkI1RGRCM0RjMkFnQkI4RGRCNURjMkFnQkI3RGRCNURjMkFnQkIrRGRCN0RjMkFnQkI5RGRCN0RjMkFnQkJnRGhCOURjMkFnQkIvRGRCOURjMkFnQkJpRGhCL0RjMkFnQkJoRGhCL0RjMkFnQkJrRGhCaERnMkFnQkJqRGhCaERnMkFnQkJtRGhCakRnMkFnQkJsRGhCakRnMkFnQkJvRGhCbERnMkFnQkJuRGhCbERnMkFnQkJxRGhCbkRnMkFnQkJwRGhCbkRnMkFnQkJzRGhCcERnMkFnQkJyRGhCcERnMkFnQkJ1RGhCckRnMkFnQkJ0RGhCckRnMkFnQkJ3RGhCdERnMkFnQkJ2RGhCdERnMkFnQkJ5RGhCdkRnMkFnQkJ4RGhCdkRnMkFnQkIwRGhCeERnMkFnQkJ6RGhCeERnMkFnQkIyRGhCekRnMkFnQkIxRGhCekRnMkFnQkI0RGhCMURnMkFnQkIzRGhCMURnMkFnQkI2RGhCM0RnMkFnQkI1RGhCM0RnMkFnQWdRa0ZZYWlINEJDQkRRUWhxSWZrRUlQa0VJZm9FSVBvRVFRZHhJZnNFSVBzRVFRQkdJZndFUVFBZytnUnJJZjBFSVAwRVFRZHhJZjRFSVB3RUJIOUJBQVVnL2dRTElmOEVJRU1nL3dScUlZSUZJUGdFSVA4RWF5R0RCVUhVTmlDQ0JUWUNBRUhJTmlDREJUWUNBQ0NEQlVFQmNpR0VCU0NDQlVFRWFpR0ZCU0NGQlNDRUJUWUNBQ0JESVBnRWFpR0dCU0NHQlVFRWFpR0hCU0NIQlVFb05nSUFRYVE2S0FJQUlZZ0ZRZGcySUlnRk5nSUFCVUg4T1NFVkEwQUNRQ0FWS0FJQUlZa0ZJQlZCQkdvaGlnVWdpZ1VvQWdBaGl3VWdpUVVnaXdWcUlZMEZJRU1nalFWR0lZNEZJSTRGQkVCQmp3RWhzZ2dNQVFzZ0ZVRUlhaUdQQlNDUEJTZ0NBQ0dRQlNDUUJVRUFSaUdSQlNDUkJRUkFEQUVGSUpBRklSVUxEQUVMQ3lDeUNFR1BBVVlFUUNBVlFReHFJWklGSUpJRktBSUFJWk1GSUpNRlFRaHhJWlFGSUpRRlFRQkdJWlVGSUpVRkJFQWdpUVVnOFFSTklaWUZJRU1nOFFSTElaZ0ZJSmdGSUpZRmNTR3dDQ0N3Q0FSQUlJc0ZJRUpxSVprRklJb0ZJSmtGTmdJQVFjZzJLQUlBSVpvRklKb0ZJRUpxSVpzRklQRUVRUWhxSVp3RklKd0ZJWjBGSUowRlFRZHhJWjRGSUo0RlFRQkdJWjhGUVFBZ25RVnJJYUFGSUtBRlFRZHhJYUVGSUo4RkJIOUJBQVVnb1FVTElhTUZJUEVFSUtNRmFpR2tCU0NiQlNDakJXc2hwUVZCMURZZ3BBVTJBZ0JCeURZZ3BRVTJBZ0FncFFWQkFYSWhwZ1VncEFWQkJHb2hwd1VncHdVZ3BnVTJBZ0FnOFFRZ213VnFJYWdGSUtnRlFRUnFJYWtGSUtrRlFTZzJBZ0JCcERvb0FnQWhxZ1ZCMkRZZ3FnVTJBZ0FNQkFzTEMwSE1OaWdDQUNHckJTQkRJS3NGU1NHc0JTQ3NCUVJBUWN3MklFTTJBZ0FMSUVNZ1Ftb2hyZ1ZCL0RraEtBTkFBa0FnS0NnQ0FDR3ZCU0N2QlNDdUJVWWhzQVVnc0FVRVFFR1hBU0d5Q0F3QkN5QW9RUWhxSWJFRklMRUZLQUlBSWJJRklMSUZRUUJHSWJNRklMTUZCRUJCL0RraENRd0JCU0N5QlNFb0N3d0JDd3Nnc2doQmx3RkdCRUFnS0VFTWFpRzBCU0MwQlNnQ0FDRzFCU0MxQlVFSWNTRzJCU0MyQlVFQVJpRzNCU0MzQlFSQUlDZ2dRellDQUNBb1FRUnFJYmtGSUxrRktBSUFJYm9GSUxvRklFSnFJYnNGSUxrRklMc0ZOZ0lBSUVOQkNHb2h2QVVndkFVaHZRVWd2UVZCQjNFaHZnVWd2Z1ZCQUVZaHZ3VkJBQ0M5QldzaHdBVWd3QVZCQjNFaHdRVWd2d1VFZjBFQUJTREJCUXNod2dVZ1F5RENCV29oeEFVZ3JnVkJDR29oeFFVZ3hRVWh4Z1VneGdWQkIzRWh4d1VneHdWQkFFWWh5QVZCQUNER0JXc2h5UVVneVFWQkIzRWh5Z1VneUFVRWYwRUFCU0RLQlFzaHl3VWdyZ1VneXdWcUljd0ZJTXdGSWMwRklNUUZJYzhGSU0wRklNOEZheUhRQlNERUJTQVBhaUhSQlNEUUJTQVBheUhTQlNBUFFRTnlJZE1GSU1RRlFRUnFJZFFGSU5RRklOTUZOZ0lBSVBFRUlNd0ZSaUhWQlFKQUlOVUZCRUJCeURZb0FnQWgxZ1VnMWdVZzBnVnFJZGNGUWNnMklOY0ZOZ0lBUWRRMklORUZOZ0lBSU5jRlFRRnlJZGdGSU5FRlFRUnFJZG9GSU5vRklOZ0ZOZ0lBQlVIUU5pZ0NBQ0hiQlNEYkJTRE1CVVloM0FVZzNBVUVRRUhFTmlnQ0FDSGRCU0RkQlNEU0JXb2gzZ1ZCeERZZzNnVTJBZ0JCMERZZzBRVTJBZ0FnM2dWQkFYSWgzd1VnMFFWQkJHb2g0QVVnNEFVZzN3VTJBZ0FnMFFVZzNnVnFJZUVGSU9FRklONEZOZ0lBREFJTElNd0ZRUVJxSWVJRklPSUZLQUlBSWVNRklPTUZRUU54SWVVRklPVUZRUUZHSWVZRklPWUZCRUFnNHdWQmVIRWg1d1VnNHdWQkEzWWg2QVVnNHdWQmdBSkpJZWtGQWtBZzZRVUVRQ0RNQlVFSWFpSHFCU0RxQlNnQ0FDSHJCU0RNQlVFTWFpSHNCU0RzQlNnQ0FDSHRCU0R0QlNEckJVWWg3Z1VnN2dVRVFFRUJJT2dGZENIeEJTRHhCVUYvY3lIeUJVRzhOaWdDQUNIekJTRHpCU0R5QlhFaDlBVkJ2RFlnOUFVMkFnQU1BZ1VnNndWQkRHb2g5UVVnOVFVZzdRVTJBZ0FnN1FWQkNHb2g5Z1VnOWdVZzZ3VTJBZ0FNQWdzQUJTRE1CVUVZYWlIM0JTRDNCU2dDQUNINEJTRE1CVUVNYWlINUJTRDVCU2dDQUNINkJTRDZCU0RNQlVZaC9BVUNRQ0Q4QlFSQUlNd0ZRUkJxSVlFR0lJRUdRUVJxSVlJR0lJSUdLQUlBSVlNR0lJTUdRUUJHSVlRR0lJUUdCRUFnZ1FZb0FnQWhoUVlnaFFaQkFFWWhod1lnaHdZRVFFRUFJVFVNQXdVZ2hRWWhLU0NCQmlFcUN3VWdnd1loS1NDQ0JpRXFDd05BQWtBZ0tVRVVhaUdJQmlDSUJpZ0NBQ0dKQmlDSkJrRUFSaUdLQmlDS0JrVUVRQ0NKQmlFcElJZ0dJU29NQWdzZ0tVRVFhaUdMQmlDTEJpZ0NBQ0dNQmlDTUJrRUFSaUdOQmlDTkJnUkFEQUVGSUl3R0lTa2dpd1loS2dzTUFRc0xJQ3BCQURZQ0FDQXBJVFVGSU13RlFRaHFJZjBGSVAwRktBSUFJZjRGSVA0RlFReHFJZjhGSVA4RklQb0ZOZ0lBSVBvRlFRaHFJWUFHSUlBR0lQNEZOZ0lBSVBvRklUVUxDeUQ0QlVFQVJpR09CaUNPQmdSQURBSUxJTXdGUVJ4cUlZOEdJSThHS0FJQUlaQUdRZXc0SUpBR1FRSjBhaUdTQmlDU0JpZ0NBQ0dUQmlDVEJpRE1CVVlobEFZQ1FDQ1VCZ1JBSUpJR0lEVTJBZ0FnTlVFQVJpR2hDQ0NoQ0VVRVFBd0NDMEVCSUpBR2RDR1ZCaUNWQmtGL2N5R1dCa0hBTmlnQ0FDR1hCaUNYQmlDV0JuRWhtQVpCd0RZZ21BWTJBZ0FNQXdVZytBVkJFR29obVFZZ21RWW9BZ0FobWdZZ21nWWd6QVZISVpzR0lKc0dRUUZ4SVZBZytBVkJFR29nVUVFQ2RHb2huUVlnblFZZ05UWUNBQ0ExUVFCR0laNEdJSjRHQkVBTUJBc0xDeUExUVJocUlaOEdJSjhHSVBnRk5nSUFJTXdGUVJCcUlhQUdJS0FHS0FJQUlhRUdJS0VHUVFCR0lhSUdJS0lHUlFSQUlEVkJFR29ob3dZZ293WWdvUVkyQWdBZ29RWkJHR29ocEFZZ3BBWWdOVFlDQUFzZ29BWkJCR29ocFFZZ3BRWW9BZ0FocGdZZ3BnWkJBRVlocUFZZ3FBWUVRQXdDQ3lBMVFSUnFJYWtHSUtrR0lLWUdOZ0lBSUtZR1FSaHFJYW9HSUtvR0lEVTJBZ0FMQ3lETUJTRG5CV29ocXdZZzV3VWcwZ1ZxSWF3R0lLc0dJUWdnckFZaEZnVWd6QVVoQ0NEU0JTRVdDeUFJUVFScUlhMEdJSzBHS0FJQUlhNEdJSzRHUVg1eElhOEdJSzBHSUs4R05nSUFJQlpCQVhJaHNBWWcwUVZCQkdvaHNRWWdzUVlnc0FZMkFnQWcwUVVnRm1vaHN3WWdzd1lnRmpZQ0FDQVdRUU4ySWJRR0lCWkJnQUpKSWJVR0lMVUdCRUFndEFaQkFYUWh0Z1pCNURZZ3RnWkJBblJxSWJjR1FidzJLQUlBSWJnR1FRRWd0QVowSWJrR0lMZ0dJTGtHY1NHNkJpQzZCa0VBUmlHN0JpQzdCZ1JBSUxnR0lMa0djaUc4QmtHOE5pQzhCallDQUNDM0JrRUlhaUZISUxjR0lSa2dSeUZMQlNDM0JrRUlhaUcrQmlDK0JpZ0NBQ0cvQmlDL0JpRVpJTDRHSVVzTElFc2cwUVUyQWdBZ0dVRU1haUhBQmlEQUJpRFJCVFlDQUNEUkJVRUlhaUhCQmlEQkJpQVpOZ0lBSU5FRlFReHFJY0lHSU1JR0lMY0dOZ0lBREFJTElCWkJDSFlod3dZZ3d3WkJBRVloeEFZQ1FDREVCZ1JBUVFBaEdnVWdGa0gvLy84SFN5SEZCaURGQmdSQVFSOGhHZ3dDQ3lEREJrR0EvajlxSWNZR0lNWUdRUkIySWNjR0lNY0dRUWh4SWNrR0lNTUdJTWtHZENIS0JpREtCa0dBNEI5cUljc0dJTXNHUVJCMkljd0dJTXdHUVFSeEljMEdJTTBHSU1rR2NpSE9CaURLQmlETkJuUWh6d1lnendaQmdJQVBhaUhRQmlEUUJrRVFkaUhSQmlEUkJrRUNjU0hTQmlET0JpRFNCbkloMUFaQkRpRFVCbXNoMVFZZ3p3WWcwZ1owSWRZR0lOWUdRUTkySWRjR0lOVUdJTmNHYWlIWUJpRFlCa0VCZENIWkJpRFlCa0VIYWlIYUJpQVdJTm9HZGlIYkJpRGJCa0VCY1NIY0JpRGNCaURaQm5JaDNRWWczUVloR2dzTFFldzRJQnBCQW5ScUllQUdJTkVGUVJ4cUllRUdJT0VHSUJvMkFnQWcwUVZCRUdvaDRnWWc0Z1pCQkdvaDR3WWc0d1pCQURZQ0FDRGlCa0VBTmdJQVFjQTJLQUlBSWVRR1FRRWdHblFoNVFZZzVBWWc1UVp4SWVZR0lPWUdRUUJHSWVjR0lPY0dCRUFnNUFZZzVRWnlJZWdHUWNBMklPZ0dOZ0lBSU9BR0lORUZOZ0lBSU5FRlFSaHFJZWtHSU9rR0lPQUdOZ0lBSU5FRlFReHFJZXNHSU9zR0lORUZOZ0lBSU5FRlFRaHFJZXdHSU93R0lORUZOZ0lBREFJTElPQUdLQUlBSWUwR0lCcEJIMFloN2dZZ0drRUJkaUh2QmtFWklPOEdheUh3QmlEdUJnUi9RUUFGSVBBR0N5SHhCaUFXSVBFR2RDSHlCaUR5QmlFWElPMEdJUmdEUUFKQUlCaEJCR29oOHdZZzh3WW9BZ0FoOUFZZzlBWkJlSEVoOWdZZzlnWWdGa1loOXdZZzl3WUVRRUhBQVNHeUNBd0JDeUFYUVI5MklmZ0dJQmhCRUdvZytBWkJBblJxSWZrR0lCZEJBWFFoK2dZZytRWW9BZ0FoK3dZZyt3WkJBRVloL0FZZy9BWUVRRUcvQVNHeUNBd0JCU0Q2QmlFWElQc0dJUmdMREFFTEN5Q3lDRUcvQVVZRVFDRDVCaURSQlRZQ0FDRFJCVUVZYWlIOUJpRDlCaUFZTmdJQUlORUZRUXhxSWY0R0lQNEdJTkVGTmdJQUlORUZRUWhxSWY4R0lQOEdJTkVGTmdJQURBSUZJTElJUWNBQlJnUkFJQmhCQ0dvaGdRY2dnUWNvQWdBaGdnY2dnZ2RCREdvaGd3Y2dnd2NnMFFVMkFnQWdnUWNnMFFVMkFnQWcwUVZCQ0dvaGhBY2doQWNnZ2djMkFnQWcwUVZCREdvaGhRY2doUWNnR0RZQ0FDRFJCVUVZYWlHR0J5Q0dCMEVBTmdJQURBTUxDd3NMSU1RRlFRaHFJWkVJSUpFSUlRWWdzd2drRFNBR0R3VkIvRGtoQ1FzTEEwQUNRQ0FKS0FJQUlZY0hJSWNISVBFRVN5R0lCeUNJQjBVRVFDQUpRUVJxSVlrSElJa0hLQUlBSVlvSElJY0hJSW9IYWlHTUJ5Q01CeUR4QkVzaGpRY2dqUWNFUUF3Q0N3c2dDVUVJYWlHT0J5Q09CeWdDQUNHUEJ5Q1BCeUVKREFFTEN5Q01CMEZSYWlHUUJ5Q1FCMEVJYWlHUkJ5Q1JCeUdTQnlDU0IwRUhjU0dUQnlDVEIwRUFSaUdVQjBFQUlKSUhheUdWQnlDVkIwRUhjU0dYQnlDVUJ3Ui9RUUFGSUpjSEN5R1lCeUNRQnlDWUIyb2htUWNnOFFSQkVHb2htZ2NnbVFjZ21nZEpJWnNISUpzSEJIOGc4UVFGSUprSEN5R2NCeUNjQjBFSWFpR2RCeUNjQjBFWWFpR2VCeUJDUVZocUlaOEhJRU5CQ0dvaG9BY2dvQWNob2djZ29nZEJCM0Vob3djZ293ZEJBRVlocEFkQkFDQ2lCMnNocFFjZ3BRZEJCM0VocGdjZ3BBY0VmMEVBQlNDbUJ3c2hwd2NnUXlDbkIyb2hxQWNnbndjZ3B3ZHJJYWtIUWRRMklLZ0hOZ0lBUWNnMklLa0hOZ0lBSUtrSFFRRnlJYW9ISUtnSFFRUnFJYXNISUtzSElLb0hOZ0lBSUVNZ253ZHFJYTBISUswSFFRUnFJYTRISUs0SFFTZzJBZ0JCcERvb0FnQWhyd2RCMkRZZ3J3YzJBZ0FnbkFkQkJHb2hzQWNnc0FkQkd6WUNBQ0NkQjBIOE9Ta0NBRGNDQUNDZEIwRUlha0g4T1VFSWFpa0NBRGNDQUVIOE9TQkROZ0lBUVlBNklFSTJBZ0JCaURwQkFEWUNBRUdFT2lDZEJ6WUNBQ0NlQnlHeUJ3TkFBa0Fnc2dkQkJHb2hzUWNnc1FkQkJ6WUNBQ0N5QjBFSWFpR3pCeUN6QnlDTUIwa2h0QWNndEFjRVFDQ3hCeUd5QndVTUFRc01BUXNMSUp3SElQRUVSaUcxQnlDMUIwVUVRQ0NjQnlHMkJ5RHhCQ0c0QnlDMkJ5QzRCMnNodVFjZ3NBY29BZ0FodWdjZ3VnZEJmbkVodXdjZ3NBY2d1d2MyQWdBZ3VRZEJBWElodkFjZzhRUkJCR29odlFjZ3ZRY2d2QWMyQWdBZ25BY2d1UWMyQWdBZ3VRZEJBM1lodmdjZ3VRZEJnQUpKSWI4SElMOEhCRUFndmdkQkFYUWh3QWRCNURZZ3dBZEJBblJxSWNFSFFidzJLQUlBSWNNSFFRRWd2Z2QwSWNRSElNTUhJTVFIY1NIRkJ5REZCMEVBUmlIR0J5REdCd1JBSU1NSElNUUhjaUhIQjBHOE5pREhCellDQUNEQkIwRUlhaUZHSU1FSElSTWdSaUZLQlNEQkIwRUlhaUhJQnlESUJ5Z0NBQ0hKQnlESkJ5RVRJTWdISVVvTElFb2c4UVEyQWdBZ0UwRU1haUhLQnlES0J5RHhCRFlDQUNEeEJFRUlhaUhMQnlETEJ5QVROZ0lBSVBFRVFReHFJY3dISU13SElNRUhOZ0lBREFNTElMa0hRUWgySWM4SElNOEhRUUJHSWRBSElOQUhCRUJCQUNFVUJTQzVCMEgvLy84SFN5SFJCeURSQndSQVFSOGhGQVVnendkQmdQNC9haUhTQnlEU0IwRVFkaUhUQnlEVEIwRUljU0hVQnlEUEJ5RFVCM1FoMVFjZzFRZEJnT0FmYWlIV0J5RFdCMEVRZGlIWEJ5RFhCMEVFY1NIWUJ5RFlCeURVQjNJaDJnY2cxUWNnMkFkMElkc0hJTnNIUVlDQUQyb2gzQWNnM0FkQkVIWWgzUWNnM1FkQkFuRWgzZ2NnMmdjZzNnZHlJZDhIUVE0ZzN3ZHJJZUFISU5zSElONEhkQ0hoQnlEaEIwRVBkaUhpQnlEZ0J5RGlCMm9oNHdjZzR3ZEJBWFFoNVFjZzR3ZEJCMm9oNWdjZ3VRY2c1Z2QySWVjSElPY0hRUUZ4SWVnSElPZ0hJT1VIY2lIcEJ5RHBCeUVVQ3d0QjdEZ2dGRUVDZEdvaDZnY2c4UVJCSEdvaDZ3Y2c2d2NnRkRZQ0FDRHhCRUVVYWlIc0J5RHNCMEVBTmdJQUlKb0hRUUEyQWdCQndEWW9BZ0FoN1FkQkFTQVVkQ0h1QnlEdEJ5RHVCM0VoOEFjZzhBZEJBRVloOFFjZzhRY0VRQ0R0QnlEdUIzSWg4Z2RCd0RZZzhnYzJBZ0FnNmdjZzhRUTJBZ0FnOFFSQkdHb2g4d2NnOHdjZzZnYzJBZ0FnOFFSQkRHb2g5QWNnOUFjZzhRUTJBZ0FnOFFSQkNHb2g5UWNnOVFjZzhRUTJBZ0FNQXdzZzZnY29BZ0FoOWdjZ0ZFRWZSaUgzQnlBVVFRRjJJZmdIUVJrZytBZHJJZmtISVBjSEJIOUJBQVVnK1FjTElmc0hJTGtISVBzSGRDSDhCeUQ4QnlFUklQWUhJUklEUUFKQUlCSkJCR29oL1FjZy9RY29BZ0FoL2djZy9nZEJlSEVoL3djZy93Y2d1UWRHSVlBSUlJQUlCRUJCMVFFaHNnZ01BUXNnRVVFZmRpR0JDQ0FTUVJCcUlJRUlRUUowYWlHQ0NDQVJRUUYwSVlNSUlJSUlLQUlBSVlRSUlJUUlRUUJHSVlZSUlJWUlCRUJCMUFFaHNnZ01BUVVnZ3dnaEVTQ0VDQ0VTQ3d3QkN3c2dzZ2hCMUFGR0JFQWdnZ2dnOFFRMkFnQWc4UVJCR0dvaGh3Z2dod2dnRWpZQ0FDRHhCRUVNYWlHSUNDQ0lDQ0R4QkRZQ0FDRHhCRUVJYWlHSkNDQ0pDQ0R4QkRZQ0FBd0RCU0N5Q0VIVkFVWUVRQ0FTUVFocUlZb0lJSW9JS0FJQUlZc0lJSXNJUVF4cUlZd0lJSXdJSVBFRU5nSUFJSW9JSVBFRU5nSUFJUEVFUVFocUlZMElJSTBJSUlzSU5nSUFJUEVFUVF4cUlZNElJSTRJSUJJMkFnQWc4UVJCR0dvaGp3Z2dqd2hCQURZQ0FBd0VDd3NMQ3d0QnlEWW9BZ0Foa2dnZ2tnZ2dEMHNoa3dnZ2t3Z0VRQ0NTQ0NBUGF5R1VDRUhJTmlDVUNEWUNBRUhVTmlnQ0FDR1ZDQ0NWQ0NBUGFpR1dDRUhVTmlDV0NEWUNBQ0NVQ0VFQmNpR1hDQ0NXQ0VFRWFpR1lDQ0NZQ0NDWENEWUNBQ0FQUVFOeUlaa0lJSlVJUVFScUlab0lJSm9JSUprSU5nSUFJSlVJUVFocUlad0lJSndJSVFZZ3N3Z2tEU0FHRHdzTEVERWhuUWdnblFoQkREWUNBRUVBSVFZZ3N3Z2tEU0FHRHd1d0d3R2JBbjhqRFNHYkFpQUFRUUJHSVJRZ0ZBUkFEd3NnQUVGNGFpR0RBVUhNTmlnQ0FDSExBU0FBUVh4cUlkWUJJTllCS0FJQUllRUJJT0VCUVhoeElld0JJSU1CSU93QmFpSDNBU0RoQVVFQmNTR0NBaUNDQWtFQVJpR05BZ0pBSUkwQ0JFQWdnd0VvQWdBaEZTRGhBVUVEY1NFZ0lDQkJBRVloS3lBckJFQVBDMEVBSUJWcklUWWdnd0VnTm1vaFFTQVZJT3dCYWlGTUlFRWd5d0ZKSVZjZ1Z3UkFEd3RCMERZb0FnQWhZaUJpSUVGR0lXMGdiUVJBSVBjQlFRUnFJWUVDSUlFQ0tBSUFJWU1DSUlNQ1FRTnhJWVFDSUlRQ1FRTkdJWVVDSUlVQ1JRUkFJRUVoQnlCTUlRZ2dRU0dMQWd3REMwSEVOaUJNTmdJQUlJTUNRWDV4SVlZQ0lJRUNJSVlDTmdJQUlFeEJBWEloaHdJZ1FVRUVhaUdJQWlDSUFpQ0hBallDQUNCQklFeHFJWWtDSUlrQ0lFdzJBZ0FQQ3lBVlFRTjJJWGdnRlVHQUFra2hoQUVnaEFFRVFDQkJRUWhxSVk4QklJOEJLQUlBSVpvQklFRkJER29ocFFFZ3BRRW9BZ0Foc0FFZ3NBRWdtZ0ZHSWJzQklMc0JCRUJCQVNCNGRDSEdBU0RHQVVGL2N5SElBVUc4TmlnQ0FDSEpBU0RKQVNESUFYRWh5Z0ZCdkRZZ3lnRTJBZ0FnUVNFSElFd2hDQ0JCSVlzQ0RBTUZJSm9CUVF4cUljd0JJTXdCSUxBQk5nSUFJTEFCUVFocUljMEJJTTBCSUpvQk5nSUFJRUVoQnlCTUlRZ2dRU0dMQWd3REN3QUxJRUZCR0dvaHpnRWd6Z0VvQWdBaHp3RWdRVUVNYWlIUUFTRFFBU2dDQUNIUkFTRFJBU0JCUmlIU0FRSkFJTklCQkVBZ1FVRVFhaUhZQVNEWUFVRUVhaUhaQVNEWkFTZ0NBQ0hhQVNEYUFVRUFSaUhiQVNEYkFRUkFJTmdCS0FJQUlkd0JJTndCUVFCR0lkMEJJTjBCQkVCQkFDRU9EQU1GSU53QklRa2cyQUVoQ2dzRklOb0JJUWtnMlFFaENnc0RRQUpBSUFsQkZHb2gzZ0VnM2dFb0FnQWgzd0VnM3dGQkFFWWg0QUVnNEFGRkJFQWczd0VoQ1NEZUFTRUtEQUlMSUFsQkVHb2g0Z0VnNGdFb0FnQWg0d0VnNHdGQkFFWWg1QUVnNUFFRVFBd0JCU0RqQVNFSklPSUJJUW9MREFFTEN5QUtRUUEyQWdBZ0NTRU9CU0JCUVFocUlkTUJJTk1CS0FJQUlkUUJJTlFCUVF4cUlkVUJJTlVCSU5FQk5nSUFJTkVCUVFocUlkY0JJTmNCSU5RQk5nSUFJTkVCSVE0TEN5RFBBVUVBUmlIbEFTRGxBUVJBSUVFaEJ5Qk1JUWdnUVNHTEFnVWdRVUVjYWlIbUFTRG1BU2dDQUNIbkFVSHNPQ0RuQVVFQ2RHb2g2QUVnNkFFb0FnQWg2UUVnNlFFZ1FVWWg2Z0VnNmdFRVFDRG9BU0FPTmdJQUlBNUJBRVlobUFJZ21BSUVRRUVCSU9jQmRDSHJBU0RyQVVGL2N5SHRBVUhBTmlnQ0FDSHVBU0R1QVNEdEFYRWg3d0ZCd0RZZzd3RTJBZ0FnUVNFSElFd2hDQ0JCSVlzQ0RBUUxCU0RQQVVFUWFpSHdBU0R3QVNnQ0FDSHhBU0R4QVNCQlJ5SHlBU0R5QVVFQmNTRVNJTThCUVJCcUlCSkJBblJxSWZNQklQTUJJQTQyQWdBZ0RrRUFSaUgwQVNEMEFRUkFJRUVoQnlCTUlRZ2dRU0dMQWd3RUN3c2dEa0VZYWlIMUFTRDFBU0RQQVRZQ0FDQkJRUkJxSWZZQklQWUJLQUlBSWZnQklQZ0JRUUJHSWZrQklQa0JSUVJBSUE1QkVHb2grZ0VnK2dFZytBRTJBZ0FnK0FGQkdHb2grd0VnK3dFZ0RqWUNBQXNnOWdGQkJHb2gvQUVnL0FFb0FnQWgvUUVnL1FGQkFFWWgvZ0VnL2dFRVFDQkJJUWNnVENFSUlFRWhpd0lGSUE1QkZHb2gvd0VnL3dFZy9RRTJBZ0FnL1FGQkdHb2hnQUlnZ0FJZ0RqWUNBQ0JCSVFjZ1RDRUlJRUVoaXdJTEN3VWdnd0VoQnlEc0FTRUlJSU1CSVlzQ0N3c2dpd0lnOXdGSklZb0NJSW9DUlFSQUR3c2c5d0ZCQkdvaGpBSWdqQUlvQWdBaGpnSWdqZ0pCQVhFaGp3SWdqd0pCQUVZaGtBSWdrQUlFUUE4TElJNENRUUp4SVpFQ0lKRUNRUUJHSVpJQ0lKSUNCRUJCMURZb0FnQWhrd0lna3dJZzl3RkdJWlFDSUpRQ0JFQkJ5RFlvQWdBaGxRSWdsUUlnQ0dvaGxnSkJ5RFlnbGdJMkFnQkIxRFlnQnpZQ0FDQ1dBa0VCY2lHWEFpQUhRUVJxSVJZZ0ZpQ1hBallDQUVIUU5pZ0NBQ0VYSUFjZ0YwWWhHQ0FZUlFSQUR3dEIwRFpCQURZQ0FFSEVOa0VBTmdJQUR3dEIwRFlvQWdBaEdTQVpJUGNCUmlFYUlCb0VRRUhFTmlnQ0FDRWJJQnNnQ0dvaEhFSEVOaUFjTmdJQVFkQTJJSXNDTmdJQUlCeEJBWEloSFNBSFFRUnFJUjRnSGlBZE5nSUFJSXNDSUJ4cUlSOGdIeUFjTmdJQUR3c2dqZ0pCZUhFaElTQWhJQWhxSVNJZ2pnSkJBM1loSXlDT0FrR0FBa2toSkFKQUlDUUVRQ0QzQVVFSWFpRWxJQ1VvQWdBaEppRDNBVUVNYWlFbklDY29BZ0FoS0NBb0lDWkdJU2tnS1FSQVFRRWdJM1FoS2lBcVFYOXpJU3hCdkRZb0FnQWhMU0F0SUN4eElTNUJ2RFlnTGpZQ0FBd0NCU0FtUVF4cUlTOGdMeUFvTmdJQUlDaEJDR29oTUNBd0lDWTJBZ0FNQWdzQUJTRDNBVUVZYWlFeElERW9BZ0FoTWlEM0FVRU1haUV6SURNb0FnQWhOQ0EwSVBjQlJpRTFBa0FnTlFSQUlQY0JRUkJxSVRzZ08wRUVhaUU4SUR3b0FnQWhQU0E5UVFCR0lUNGdQZ1JBSURzb0FnQWhQeUEvUVFCR0lVQWdRQVJBUVFBaER3d0RCU0EvSVFzZ095RU1Dd1VnUFNFTElEd2hEQXNEUUFKQUlBdEJGR29oUWlCQ0tBSUFJVU1nUTBFQVJpRkVJRVJGQkVBZ1F5RUxJRUloREF3Q0N5QUxRUkJxSVVVZ1JTZ0NBQ0ZHSUVaQkFFWWhSeUJIQkVBTUFRVWdSaUVMSUVVaERBc01BUXNMSUF4QkFEWUNBQ0FMSVE4RklQY0JRUWhxSVRjZ055Z0NBQ0U0SURoQkRHb2hPU0E1SURRMkFnQWdORUVJYWlFNklEb2dPRFlDQUNBMElROExDeUF5UVFCR0lVZ2dTRVVFUUNEM0FVRWNhaUZKSUVrb0FnQWhTa0hzT0NCS1FRSjBhaUZMSUVzb0FnQWhUU0JOSVBjQlJpRk9JRTRFUUNCTElBODJBZ0FnRDBFQVJpR1pBaUNaQWdSQVFRRWdTblFoVHlCUFFYOXpJVkJCd0RZb0FnQWhVU0JSSUZCeElWSkJ3RFlnVWpZQ0FBd0VDd1VnTWtFUWFpRlRJRk1vQWdBaFZDQlVJUGNCUnlGVklGVkJBWEVoRXlBeVFSQnFJQk5CQW5ScUlWWWdWaUFQTmdJQUlBOUJBRVloV0NCWUJFQU1CQXNMSUE5QkdHb2hXU0JaSURJMkFnQWc5d0ZCRUdvaFdpQmFLQUlBSVZzZ1cwRUFSaUZjSUZ4RkJFQWdEMEVRYWlGZElGMGdXellDQUNCYlFSaHFJVjRnWGlBUE5nSUFDeUJhUVFScUlWOGdYeWdDQUNGZ0lHQkJBRVloWVNCaFJRUkFJQTlCRkdvaFl5QmpJR0EyQWdBZ1lFRVlhaUZrSUdRZ0R6WUNBQXNMQ3dzZ0lrRUJjaUZsSUFkQkJHb2haaUJtSUdVMkFnQWdpd0lnSW1vaFp5Qm5JQ0kyQWdCQjBEWW9BZ0FoYUNBSElHaEdJV2tnYVFSQVFjUTJJQ0kyQWdBUEJTQWlJUTBMQlNDT0FrRitjU0ZxSUl3Q0lHbzJBZ0FnQ0VFQmNpRnJJQWRCQkdvaGJDQnNJR3MyQWdBZ2l3SWdDR29oYmlCdUlBZzJBZ0FnQ0NFTkN5QU5RUU4ySVc4Z0RVR0FBa2toY0NCd0JFQWdiMEVCZENGeFFlUTJJSEZCQW5ScUlYSkJ2RFlvQWdBaGMwRUJJRzkwSVhRZ2N5QjBjU0YxSUhWQkFFWWhkaUIyQkVBZ2N5QjBjaUYzUWJ3MklIYzJBZ0FnY2tFSWFpRVFJSEloQmlBUUlSRUZJSEpCQ0dvaGVTQjVLQUlBSVhvZ2VpRUdJSGtoRVFzZ0VTQUhOZ0lBSUFaQkRHb2hleUI3SUFjMkFnQWdCMEVJYWlGOElId2dCallDQUNBSFFReHFJWDBnZlNCeU5nSUFEd3NnRFVFSWRpRitJSDVCQUVZaGZ5Qi9CRUJCQUNFRkJTQU5RZi8vL3dkTElZQUJJSUFCQkVCQkh5RUZCU0IrUVlEK1Ayb2hnUUVnZ1FGQkVIWWhnZ0VnZ2dGQkNIRWhoUUVnZmlDRkFYUWhoZ0VnaGdGQmdPQWZhaUdIQVNDSEFVRVFkaUdJQVNDSUFVRUVjU0dKQVNDSkFTQ0ZBWEloaWdFZ2hnRWdpUUYwSVlzQklJc0JRWUNBRDJvaGpBRWdqQUZCRUhZaGpRRWdqUUZCQW5FaGpnRWdpZ0VnamdGeUlaQUJRUTRna0FGcklaRUJJSXNCSUk0QmRDR1NBU0NTQVVFUGRpR1RBU0NSQVNDVEFXb2hsQUVnbEFGQkFYUWhsUUVnbEFGQkIyb2hsZ0VnRFNDV0FYWWhsd0VnbHdGQkFYRWhtQUVnbUFFZ2xRRnlJWmtCSUprQklRVUxDMEhzT0NBRlFRSjBhaUdiQVNBSFFSeHFJWndCSUp3QklBVTJBZ0FnQjBFUWFpR2RBU0FIUVJScUlaNEJJSjRCUVFBMkFnQWduUUZCQURZQ0FFSEFOaWdDQUNHZkFVRUJJQVYwSWFBQklKOEJJS0FCY1NHaEFTQ2hBVUVBUmlHaUFRSkFJS0lCQkVBZ253RWdvQUZ5SWFNQlFjQTJJS01CTmdJQUlKc0JJQWMyQWdBZ0IwRVlhaUdrQVNDa0FTQ2JBVFlDQUNBSFFReHFJYVlCSUtZQklBYzJBZ0FnQjBFSWFpR25BU0NuQVNBSE5nSUFCU0NiQVNnQ0FDR29BU0FGUVI5R0lha0JJQVZCQVhZaHFnRkJHU0NxQVdzaHF3RWdxUUVFZjBFQUJTQ3JBUXNockFFZ0RTQ3NBWFFoclFFZ3JRRWhBeUNvQVNFRUEwQUNRQ0FFUVFScUlhNEJJSzRCS0FJQUlhOEJJSzhCUVhoeEliRUJJTEVCSUExR0liSUJJTElCQkVCQnlRQWhtZ0lNQVFzZ0EwRWZkaUd6QVNBRVFSQnFJTE1CUVFKMGFpRzBBU0FEUVFGMEliVUJJTFFCS0FJQUliWUJJTFlCUVFCR0liY0JJTGNCQkVCQnlBQWhtZ0lNQVFVZ3RRRWhBeUMyQVNFRUN3d0JDd3NnbWdKQnlBQkdCRUFndEFFZ0J6WUNBQ0FIUVJocUliZ0JJTGdCSUFRMkFnQWdCMEVNYWlHNUFTQzVBU0FITmdJQUlBZEJDR29odWdFZ3VnRWdCellDQUF3Q0JTQ2FBa0hKQUVZRVFDQUVRUWhxSWJ3QklMd0JLQUlBSWIwQklMMEJRUXhxSWI0QklMNEJJQWMyQWdBZ3ZBRWdCellDQUNBSFFRaHFJYjhCSUw4QklMMEJOZ0lBSUFkQkRHb2h3QUVnd0FFZ0JEWUNBQ0FIUVJocUljRUJJTUVCUVFBMkFnQU1Bd3NMQ3d0QjNEWW9BZ0Fod2dFZ3dnRkJmMm9od3dGQjNEWWd3d0UyQWdBZ3d3RkJBRVloeEFFZ3hBRUVRRUdFT2lFQ0JROExBMEFDUUNBQ0tBSUFJUUVnQVVFQVJpSEZBU0FCUVFocUljY0JJTVVCQkVBTUFRVWd4d0VoQWdzTUFRc0xRZHcyUVg4MkFnQVBDMDhCQ0g4akRTRUlJdzFCRUdva0RTTU5JdzVPQkVCQkVCQURDeUFJSVFZZ0FFRThhaUVCSUFFb0FnQWhBaUFDRURJaEF5QUdJQU0yQWdCQkJpQUdFQXNoQkNBRUVEQWhCU0FJSkEwZ0JROExtd1VCUUg4akRTRkNJdzFCTUdva0RTTU5JdzVPQkVCQk1CQURDeUJDUVJCcUlUd2dRaUU3SUVKQklHb2hIaUFBUVJ4cUlTa2dLU2dDQUNFMElCNGdORFlDQUNBZVFRUnFJVGNnQUVFVWFpRTRJRGdvQWdBaE9TQTVJRFJySVRvZ055QTZOZ0lBSUI1QkNHb2hDaUFLSUFFMkFnQWdIa0VNYWlFTElBc2dBallDQUNBNklBSnFJUXdnQUVFOGFpRU5JQTBvQWdBaERpQWVJUThnT3lBT05nSUFJRHRCQkdvaFBTQTlJQTgyQWdBZ08wRUlhaUUrSUQ1QkFqWUNBRUdTQVNBN0VBa2hFQ0FRRURBaEVTQU1JQkZHSVJJQ1FDQVNCRUJCQXlGQkJVRUNJUVFnRENFRklCNGhCaUFSSVJzRFFBSkFJQnRCQUVnaEdpQWFCRUFNQVFzZ0JTQWJheUVrSUFaQkJHb2hKU0FsS0FJQUlTWWdHeUFtU3lFbklBWkJDR29oS0NBbkJIOGdLQVVnQmdzaENTQW5RUjkwUVI5MUlTb2dCQ0FxYWlFSUlDY0VmeUFtQlVFQUN5RXJJQnNnSzJzaEF5QUpLQUlBSVN3Z0xDQURhaUV0SUFrZ0xUWUNBQ0FKUVFScUlTNGdMaWdDQUNFdklDOGdBMnNoTUNBdUlEQTJBZ0FnRFNnQ0FDRXhJQWtoTWlBOElERTJBZ0FnUEVFRWFpRS9JRDhnTWpZQ0FDQThRUWhxSVVBZ1FDQUlOZ0lBUVpJQklEd1FDU0V6SURNUU1DRTFJQ1FnTlVZaE5pQTJCRUJCQXlGQkRBUUZJQWdoQkNBa0lRVWdDU0VHSURVaEd3c01BUXNMSUFCQkVHb2hIQ0FjUVFBMkFnQWdLVUVBTmdJQUlEaEJBRFlDQUNBQUtBSUFJUjBnSFVFZ2NpRWZJQUFnSHpZQ0FDQUVRUUpHSVNBZ0lBUkFRUUFoQndVZ0JrRUVhaUVoSUNFb0FnQWhJaUFDSUNKcklTTWdJeUVIQ3dzTElFRkJBMFlFUUNBQVFTeHFJUk1nRXlnQ0FDRVVJQUJCTUdvaEZTQVZLQUlBSVJZZ0ZDQVdhaUVYSUFCQkVHb2hHQ0FZSUJjMkFnQWdGQ0VaSUNrZ0dUWUNBQ0E0SUJrMkFnQWdBaUVIQ3lCQ0pBMGdCdzhMc0FFQkVIOGpEU0VTSXcxQklHb2tEU01OSXc1T0JFQkJJQkFEQ3lBU0lRd2dFa0VVYWlFRklBQkJQR29oQmlBR0tBSUFJUWNnQlNFSUlBd2dCellDQUNBTVFRUnFJUTBnRFVFQU5nSUFJQXhCQ0dvaERpQU9JQUUyQWdBZ0RFRU1haUVQSUE4Z0NEWUNBQ0FNUVJCcUlSQWdFQ0FDTmdJQVFZd0JJQXdRQ0NFSklBa1FNQ0VLSUFwQkFFZ2hDeUFMQkVBZ0JVRi9OZ0lBUVg4aEJBVWdCU2dDQUNFRElBTWhCQXNnRWlRTklBUVBDek1CQm44akRTRUdJQUJCZ0dCTElRSWdBZ1JBUVFBZ0FHc2hBeEF4SVFRZ0JDQUROZ0lBUVg4aEFRVWdBQ0VCQ3lBQkR3c01BUUovSXcwaEFVSHNPZzhMQ3dFQ2Z5TU5JUUlnQUE4THV3RUJFWDhqRFNFVEl3MUJJR29rRFNNTkl3NU9CRUJCSUJBREN5QVRJUThnRTBFUWFpRUlJQUJCSkdvaENTQUpRUUkyQWdBZ0FDZ0NBQ0VLSUFwQndBQnhJUXNnQzBFQVJpRU1JQXdFUUNBQVFUeHFJUTBnRFNnQ0FDRU9JQWdoQXlBUElBNDJBZ0FnRDBFRWFpRVFJQkJCazZnQk5nSUFJQTlCQ0dvaEVTQVJJQU0yQWdCQk5pQVBFQW9oQkNBRVFRQkdJUVVnQlVVRVFDQUFRY3NBYWlFR0lBWkJmem9BQUFzTElBQWdBU0FDRUM0aEJ5QVRKQTBnQnc4TDBBRUJGWDhqRFNFV0lBQXNBQUFoQ3lBQkxBQUFJUXdnQzBFWWRFRVlkU0FNUVJoMFFSaDFSeUVOSUF0QkdIUkJHSFZCQUVZaERpQU9JQTF5SVJRZ0ZBUkFJQXdoQkNBTElRVUZJQUVoQWlBQUlRTURRQUpBSUFOQkFXb2hEeUFDUVFGcUlSQWdEeXdBQUNFUklCQXNBQUFoRWlBUlFSaDBRUmgxSUJKQkdIUkJHSFZISVFZZ0VVRVlkRUVZZFVFQVJpRUhJQWNnQm5JaEV5QVRCRUFnRWlFRUlCRWhCUXdCQlNBUUlRSWdEeUVEQ3d3QkN3c0xJQVZCL3dGeElRZ2dCRUgvQVhFaENTQUlJQWxySVFvZ0NnOEx3d1FCTFg4akRTRXZJdzFCNEFGcUpBMGpEU01PVGdSQVFlQUJFQU1MSUM5QitBQnFJUnNnTDBIUUFHb2hKaUF2SVNnZ0wwR0lBV29oS1NBbVFnQTNBZ0FnSmtFSWFrSUFOd0lBSUNaQkVHcENBRGNDQUNBbVFSaHFRZ0EzQWdBZ0prRWdha0lBTndJQUlBSW9BZ0FoTFNBYklDMDJBZ0JCQUNBQklCc2dLQ0FtRURZaEtpQXFRUUJJSVNzZ0t3UkFRWDhoQkFVZ0FFSE1BR29oTENBc0tBSUFJUWNnQjBGL1NpRUlJQWdFUUNBQUVEY2hDU0FKSVNjRlFRQWhKd3NnQUNnQ0FDRUtJQXBCSUhFaEN5QUFRY29BYWlFTUlBd3NBQUFoRFNBTlFSaDBRUmgxUVFGSUlRNGdEZ1JBSUFwQlgzRWhEeUFBSUE4MkFnQUxJQUJCTUdvaEVDQVFLQUlBSVJFZ0VVRUFSaUVTSUJJRVFDQUFRU3hxSVJRZ0ZDZ0NBQ0VWSUJRZ0tUWUNBQ0FBUVJ4cUlSWWdGaUFwTmdJQUlBQkJGR29oRnlBWElDazJBZ0FnRUVIUUFEWUNBQ0FwUWRBQWFpRVlJQUJCRUdvaEdTQVpJQmcyQWdBZ0FDQUJJQnNnS0NBbUVEWWhHaUFWUVFCR0lSd2dIQVJBSUJvaEJRVWdBRUVrYWlFZElCMG9BZ0FoSGlBQVFRQkJBQ0FlUVFkeFFRaHFFUUFBR2lBWEtBSUFJUjhnSDBFQVJpRWdJQ0FFZjBGL0JTQWFDeUVESUJRZ0ZUWUNBQ0FRUVFBMkFnQWdHVUVBTmdJQUlCWkJBRFlDQUNBWFFRQTJBZ0FnQXlFRkN3VWdBQ0FCSUJzZ0tDQW1FRFloRXlBVElRVUxJQUFvQWdBaElTQWhRU0J4SVNJZ0lrRUFSaUVqSUNNRWZ5QUZCVUYvQ3lFR0lDRWdDM0loSkNBQUlDUTJBZ0FnSjBFQVJpRWxJQ1ZGQkVBZ0FCQTRDeUFHSVFRTElDOGtEU0FFRHd2b0tnUG5BbjhPZmdGOEl3MGg2d0lqRFVIQUFHb2tEU01OSXc1T0JFQkJ3QUFRQXdzZzZ3SkJFR29oa2dJZzZ3SWhuUUlnNndKQkdHb2hxQUlnNndKQkNHb2hzd0lnNndKQkZHb2h2UUlna2dJZ0FUWUNBQ0FBUVFCSElVOGdxQUpCS0dvaFdpQmFJV1FncUFKQkoyb2hieUN6QWtFRWFpRjZRUUFoRmtFQUlSZEJBQ0VoSUFFaHZRRURRQUpBSUJkQmYwb2hoQUVDUUNDRUFRUkFRZi8vLy84SElCZHJJWTRCSUJZZ2pnRktJWmNCSUpjQkJFQVFNU0doQVNDaEFVSExBRFlDQUVGL0lTb01BZ1VnRmlBWGFpR3FBU0NxQVNFcURBSUxBQVVnRnlFcUN3c2d2UUVzQUFBaHN3RWdzd0ZCR0hSQkdIVkJBRVloeHdFZ3h3RUVRRUhXQUNIcUFnd0JCU0N6QVNIU0FTQzlBU0huQVFzRFFBSkFBa0FDUUFKQUFrQWcwZ0ZCR0hSQkdIVkJBR3NPSmdFQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQUFnc0NRQ0RuQVNFWklPY0JJZnNCUVFraDZnSU1CQXdEQUFzQUN3SkFJT2NCSVJnZzV3RWhod0lNQXd3Q0FBc0FDd0VMSU9jQlFRRnFJZDBCSUpJQ0lOMEJOZ0lBSU4wQkxBQUFJVW9nU2lIU0FTRGRBU0huQVF3QkN3c0NRQ0RxQWtFSlJnUkFBMEFDUUVFQUllb0NJUHNCUVFGcUlmSUJJUElCTEFBQUlmd0JJUHdCUVJoMFFSaDFRU1ZHSWYwQklQMEJSUVJBSUJraEdDRDdBU0dIQWd3RUN5QVpRUUZxSWY0QklQc0JRUUpxSWY4QklKSUNJUDhCTmdJQUlQOEJMQUFBSVlBQ0lJQUNRUmgwUVJoMVFTVkdJWUVDSUlFQ0JFQWcvZ0VoR1NEL0FTSDdBVUVKSWVvQ0JTRCtBU0VZSVA4QklZY0NEQUVMREFFTEN3c0xJQmdoZ2dJZ3ZRRWhnd0lnZ2dJZ2d3SnJJWVFDSUU4RVFDQUFJTDBCSUlRQ0VEa0xJSVFDUVFCR0lZVUNJSVVDUlFSQUlDRWhJaUNFQWlFV0lDb2hGeUNIQWlHOUFTQWlJU0VNQWdzZ2h3SkJBV29oaGdJZ2hnSXNBQUFoaUFJZ2lBSkJHSFJCR0hVaGlRSWdpUUpCVUdvaDN3SWczd0pCQ2traDNBSWczQUlFUUNDSEFrRUNhaUdLQWlDS0Fpd0FBQ0dMQWlDTEFrRVlkRUVZZFVFa1JpR01BaUNIQWtFRGFpR05BaUNNQWdSL0lJMENCU0NHQWdzaFJDQ01BZ1IvUVFFRklDRUxJUWtnakFJRWZ5RGZBZ1ZCZndzaDRBSWc0QUloR3lBSklUQWdSQ0huQWdWQmZ5RWJJQ0VoTUNDR0FpSG5BZ3Nna2dJZzV3STJBZ0FnNXdJc0FBQWhqZ0lnamdKQkdIUkJHSFVoandJZ2p3SkJZR29oa0FJZ2tBSkJIMHNoa1FKQkFTQ1FBblFoa3dJZ2t3SkJpZEVFY1NHVUFpQ1VBa0VBUmlHVkFpQ1JBaUNWQW5JaHpRSWd6UUlFUUVFQUlSOGdqZ0loU1NEbkFpR25BZ1ZCQUNFZ0lJNENJWmNDSU9jQ0lad0NBMEFDUUNDWEFrRVlkRUVZZFNHV0FpQ1dBa0ZnYWlHWUFrRUJJSmdDZENHWkFpQ1pBaUFnY2lHYUFpQ2NBa0VCYWlHYkFpQ1NBaUNiQWpZQ0FDQ2JBaXdBQUNHZUFpQ2VBa0VZZEVFWWRTR2ZBaUNmQWtGZ2FpR2dBaUNnQWtFZlN5R2hBa0VCSUtBQ2RDR2lBaUNpQWtHSjBRUnhJYU1DSUtNQ1FRQkdJYVFDSUtFQ0lLUUNjaUhNQWlETUFnUkFJSm9DSVI4Z25nSWhTU0NiQWlHbkFnd0JCU0NhQWlFZ0lKNENJWmNDSUpzQ0lad0NDd3dCQ3dzTElFbEJHSFJCR0hWQktrWWhwUUlncFFJRVFDQ25Ba0VCYWlHbUFpQ21BaXdBQUNHcEFpQ3BBa0VZZEVFWWRTR3FBaUNxQWtGUWFpSGlBaURpQWtFS1NTSGVBaURlQWdSQUlLY0NRUUpxSWFzQ0lLc0NMQUFBSWF3Q0lLd0NRUmgwUVJoMVFTUkdJYTBDSUswQ0JFQWdCQ0RpQWtFQ2RHb2hyZ0lncmdKQkNqWUNBQ0NtQWl3QUFDR3ZBaUN2QWtFWWRFRVlkU0d3QWlDd0FrRlFhaUd4QWlBRElMRUNRUU4wYWlHeUFpQ3lBaWtEQUNINUFpRDVBcWNodEFJZ3B3SkJBMm9odFFJZ3RBSWhIa0VCSVR3Z3RRSWg2QUlGUVJZaDZnSUxCVUVXSWVvQ0N5RHFBa0VXUmdSQVFRQWg2Z0lnTUVFQVJpRzJBaUMyQWtVRVFFRi9JUXdNQXdzZ1R3UkFJQUlvQWdBaHlBSWd5QUlodHdKQkFFRUVhaUhYQWlEWEFpSFdBaURXQWtFQmF5SE9BaUMzQWlET0Ftb2h1QUpCQUVFRWFpSGJBaURiQWlIYUFpRGFBa0VCYXlIWkFpRFpBa0YvY3lIWUFpQzRBaURZQW5FaHVRSWd1UUlodWdJZ3VnSW9BZ0FodXdJZ3VnSkJCR29oeWdJZ0FpREtBallDQUNDN0FpRWVRUUFoUENDbUFpSG9BZ1ZCQUNFZVFRQWhQQ0NtQWlIb0Fnc0xJSklDSU9nQ05nSUFJQjVCQUVnaHZBSWdIMEdBd0FCeUliNENRUUFnSG1zaHZ3SWd2QUlFZnlDK0FnVWdId3NoQ0NDOEFnUi9JTDhDQlNBZUN5RUhJQWNoTFNBSUlTNGdQQ0ZDSU9nQ0ljTUNCU0NTQWhBNkljQUNJTUFDUVFCSUljRUNJTUVDQkVCQmZ5RU1EQUlMSUpJQ0tBSUFJVXNnd0FJaExTQWZJUzRnTUNGQ0lFc2h3d0lMSU1NQ0xBQUFJY0lDSU1JQ1FSaDBRUmgxUVM1R0ljUUNBa0FneEFJRVFDRERBa0VCYWlIRkFpREZBaXdBQUNIR0FpREdBa0VZZEVFWWRVRXFSaUhIQWlESEFrVUVRQ0REQWtFQmFpRmxJSklDSUdVMkFnQWdrZ0lRT2lGbUlKSUNLQUlBSVUwZ1ppRWNJRTBoVEF3Q0N5RERBa0VDYWlGUUlGQXNBQUFoVVNCUlFSaDBRUmgxSVZJZ1VrRlFhaUhoQWlEaEFrRUtTU0hkQWlEZEFnUkFJTU1DUVFOcUlWTWdVeXdBQUNGVUlGUkJHSFJCR0hWQkpFWWhWU0JWQkVBZ0JDRGhBa0VDZEdvaFZpQldRUW8yQWdBZ1VDd0FBQ0ZYSUZkQkdIUkJHSFVoV0NCWVFWQnFJVmtnQXlCWlFRTjBhaUZiSUZzcEF3QWg3UUlnN1FLbklWd2d3d0pCQkdvaFhTQ1NBaUJkTmdJQUlGd2hIQ0JkSVV3TUF3c0xJRUpCQUVZaFhpQmVSUVJBUVg4aERBd0RDeUJQQkVBZ0FpZ0NBQ0hKQWlESkFpRmZRUUJCQkdvaDBRSWcwUUloMEFJZzBBSkJBV3NoendJZ1h5RFBBbW9oWUVFQVFRUnFJZFVDSU5VQ0lkUUNJTlFDUVFGcklkTUNJTk1DUVg5eklkSUNJR0FnMGdKeElXRWdZU0ZpSUdJb0FnQWhZeUJpUVFScUljc0NJQUlneXdJMkFnQWdZeUg1QVFWQkFDSDVBUXNna2dJZ1VEWUNBQ0Q1QVNFY0lGQWhUQVZCZnlFY0lNTUNJVXdMQzBFQUlSb2dUQ0ZvQTBBQ1FDQm9MQUFBSVdjZ1owRVlkRUVZZFNGcElHbEJ2MzlxSVdvZ2FrRTVTeUZySUdzRVFFRi9JUXdNQXdzZ2FFRUJhaUZzSUpJQ0lHdzJBZ0FnYUN3QUFDRnRJRzFCR0hSQkdIVWhiaUJ1UWI5L2FpRndRY0lqSUJwQk9teHFJSEJxSVhFZ2NTd0FBQ0Z5SUhKQi93RnhJWE1nYzBGL2FpRjBJSFJCQ0VraGRTQjFCRUFnY3lFYUlHd2hhQVVNQVFzTUFRc0xJSEpCR0hSQkdIVkJBRVloZGlCMkJFQkJmeUVNREFFTElISkJHSFJCR0hWQkUwWWhkeUFiUVg5S0lYZ0NRQ0IzQkVBZ2VBUkFRWDhoREF3REJVRXdJZW9DQ3dVZ2VBUkFJQVFnRzBFQ2RHb2hlU0I1SUhNMkFnQWdBeUFiUVFOMGFpRjdJSHNwQXdBaDdnSWduUUlnN2dJM0F3QkJNQ0hxQWd3Q0N5QlBSUVJBUVFBaERBd0RDeUNkQWlCeklBSVFPd3NMSU9vQ1FUQkdCRUJCQUNIcUFpQlBSUVJBUVFBaEZpQXFJUmNnUWlFaElHd2h2UUVNQXdzTElHZ3NBQUFoZkNCOFFSaDBRUmgxSVgwZ0drRUFSeUYrSUgxQkQzRWhmeUIvUVFOR0lZQUJJSDRnZ0FGeEllUUNJSDFCWDNFaGdRRWc1QUlFZnlDQkFRVWdmUXNoRVNBdVFZREFBSEVoZ2dFZ2dnRkJBRVloZ3dFZ0xrSC8vM3R4SVlVQklJTUJCSDhnTGdVZ2hRRUxJUzhDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBZ0VVSEJBR3NPT0EwVkN4VVFEdzRWRlJVVkZSVVZGUlVWRlF3VkZSVVZBaFVWRlJVVkZSVVZFUlVJQmhRVEVoVUZGUlVWQ1FBRUFSVVZDaFVIRlJVREZRc0NRQ0FhUWY4QmNTSHBBZ0pBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQ0RwQWtFWWRFRVlkVUVBYXc0SUFBRUNBd1FIQlFZSEN3SkFJSjBDS0FJQUlZWUJJSVlCSUNvMkFnQkJBQ0VXSUNvaEZ5QkNJU0VnYkNHOUFRd2lEQWdBQ3dBTEFrQWduUUlvQWdBaGh3RWdod0VnS2pZQ0FFRUFJUllnS2lFWElFSWhJU0JzSWIwQkRDRU1Cd0FMQUFzQ1FDQXFyQ0h2QWlDZEFpZ0NBQ0dJQVNDSUFTRHZBamNEQUVFQUlSWWdLaUVYSUVJaElTQnNJYjBCRENBTUJnQUxBQXNDUUNBcVFmLy9BM0VoaVFFZ25RSW9BZ0FoaWdFZ2lnRWdpUUU3QVFCQkFDRVdJQ29oRnlCQ0lTRWdiQ0c5QVF3ZkRBVUFDd0FMQWtBZ0trSC9BWEVoaXdFZ25RSW9BZ0FoakFFZ2pBRWdpd0U2QUFCQkFDRVdJQ29oRnlCQ0lTRWdiQ0c5QVF3ZURBUUFDd0FMQWtBZ25RSW9BZ0FoalFFZ2pRRWdLallDQUVFQUlSWWdLaUVYSUVJaElTQnNJYjBCREIwTUF3QUxBQXNDUUNBcXJDSHdBaUNkQWlnQ0FDR1BBU0NQQVNEd0FqY0RBRUVBSVJZZ0tpRVhJRUloSVNCc0liMEJEQndNQWdBTEFBc0NRRUVBSVJZZ0tpRVhJRUloSVNCc0liMEJEQnNBQ3dBTERCWUFDd0FMQWtBZ0hFRUlTeUdRQVNDUUFRUi9JQndGUVFnTElaRUJJQzlCQ0hJaGtnRkIrQUFoSmlDUkFTRXNJSklCSVVGQlBDSHFBZ3dWQUFzQUN3RUxBa0FnRVNFbUlCd2hMQ0F2SVVGQlBDSHFBZ3dUQUFzQUN3SkFJSjBDS1FNQUlmSUNJUElDSUZvUVBTR2JBU0F2UVFoeElad0JJSndCUVFCR0laMEJJSnNCSVo0QklHUWduZ0ZySVo4QklCd2dud0ZLSWFBQklKOEJRUUZxSWFJQklKMEJJS0FCY2lHakFTQ2pBUVIvSUJ3RklLSUJDeUVkSUpzQklRMUJBQ0VsUVpJbklTY2dIU0U0SUM4aFJpRHlBaUgyQWtIQ0FDSHFBZ3dTQUFzQUN3RUxBa0FnblFJcEF3QWg4d0lnOHdKQ0FGTWhwQUVncEFFRVFFSUFJUE1DZlNIMEFpQ2RBaUQwQWpjREFFRUJJUkJCa2ljaEVpRDBBaUgxQWtIQkFDSHFBZ3dTQlNBdlFZQVFjU0dsQVNDbEFVRUFSaUdtQVNBdlFRRnhJYWNCSUtjQlFRQkdJYWdCSUtnQkJIOUJraWNGUVpRbkN5RUZJS1lCQkg4Z0JRVkJreWNMSVFZZ0wwR0JFSEVocVFFZ3FRRkJBRWNocXdFZ3F3RkJBWEVoUFNBOUlSQWdCaUVTSVBNQ0lmVUNRY0VBSWVvQ0RCSUxBQXdRQUFzQUN3SkFJSjBDS1FNQUlld0NRUUFoRUVHU0p5RVNJT3dDSWZVQ1FjRUFJZW9DREE4QUN3QUxBa0FnblFJcEF3QWg5d0lnOXdLblFmOEJjU0c0QVNCdklMZ0JPZ0FBSUc4aE1VRUFJVEpCa2ljaE15QmFJVGRCQVNGSElJVUJJVWdNRGdBTEFBc0NRQkF4SWJrQklMa0JLQUlBSWJvQklMb0JFRDhodXdFZ3V3RWhJMEhHQUNIcUFnd05BQXNBQ3dKQUlKMENLQUlBSWJ3QklMd0JRUUJISWI0QklMNEJCSDhndkFFRlFad25DeUcvQVNDL0FTRWpRY1lBSWVvQ0RBd0FDd0FMQWtBZ25RSXBBd0FoK0FJZytBS25JY1lCSUxNQ0lNWUJOZ0lBSUhwQkFEWUNBQ0NkQWlDekFqWUNBRUYvSVVVZ3N3SWgrZ0ZCeWdBaDZnSU1Dd0FMQUFzQ1FDQ2RBaWdDQUNGT0lCeEJBRVloeUFFZ3lBRUVRQ0FBUVNBZ0xVRUFJQzhRUVVFQUlSUkIwd0FoNmdJRklCd2hSU0JPSWZvQlFjb0FJZW9DQ3d3S0FBc0FDd0VMQVFzQkN3RUxBUXNCQ3dFTEFrQWduUUlyQXdBaCtnSWdBQ0Q2QWlBdElCd2dMeUFSRUVNaDRBRWc0QUVoRmlBcUlSY2dRaUVoSUd3aHZRRU1CUXdDQUFzQUN3SkFJTDBCSVRGQkFDRXlRWkluSVRNZ1dpRTNJQndoUnlBdklVZ0xDd3NDUUNEcUFrRThSZ1JBUVFBaDZnSWduUUlwQXdBaDhRSWdKa0VnY1NHVEFTRHhBaUJhSUpNQkVEd2hsQUVnOFFKQ0FGRWhsUUVnUVVFSWNTR1dBU0NXQVVFQVJpR1lBU0NZQVNDVkFYSWg1UUlnSmtFRWRTR1pBVUdTSnlDWkFXb2htZ0VnNVFJRWYwR1NKd1VnbWdFTElUNGc1UUlFZjBFQUJVRUNDeUUvSUpRQklRMGdQeUVsSUQ0aEp5QXNJVGdnUVNGR0lQRUNJZllDUWNJQUllb0NCU0RxQWtIQkFFWUVRRUVBSWVvQ0lQVUNJRm9RUGlHc0FTQ3NBU0VOSUJBaEpTQVNJU2NnSENFNElDOGhSaUQxQWlIMkFrSENBQ0hxQWdVZzZnSkJ4Z0JHQkVCQkFDSHFBaUFqUVFBZ0hCQkFJY0FCSU1BQlFRQkdJY0VCSU1BQkljSUJJQ01od3dFZ3dnRWd3d0ZySWNRQklDTWdIR29oeFFFZ3dRRUVmeUFjQlNERUFRc2hRQ0RCQVFSL0lNVUJCU0RBQVFzaEt5QWpJVEZCQUNFeVFaSW5JVE1nS3lFM0lFQWhSeUNGQVNGSUJTRHFBa0hLQUVZRVFFRUFJZW9DSVBvQklROUJBQ0VWUVFBaEtRTkFBa0FnRHlnQ0FDSEpBU0RKQVVFQVJpSEtBU0RLQVFSQUlCVWhFeUFwSVRZTUFRc2d2UUlneVFFUVFpSExBU0RMQVVFQVNDSE1BU0JGSUJWckljMEJJTXNCSU0wQlN5SE9BU0RNQVNET0FYSWg1Z0lnNWdJRVFDQVZJUk1neXdFaE5nd0JDeUFQUVFScUljOEJJTXNCSUJWcUlkQUJJRVVnMEFGTElkRUJJTkVCQkVBZ3p3RWhEeURRQVNFVklNc0JJU2tGSU5BQklSTWd5d0VoTmd3QkN3d0JDd3NnTmtFQVNDSFRBU0RUQVFSQVFYOGhEQXdHQ3lBQVFTQWdMU0FUSUM4UVFTQVRRUUJHSWRRQklOUUJCRUJCQUNFVVFkTUFJZW9DQlNENkFTRWtRUUFoS0FOQUFrQWdKQ2dDQUNIVkFTRFZBVUVBUmlIV0FTRFdBUVJBSUJNaEZFSFRBQ0hxQWd3SUN5QzlBaURWQVJCQ0lkY0JJTmNCSUNocUlkZ0JJTmdCSUJOS0lka0JJTmtCQkVBZ0V5RVVRZE1BSWVvQ0RBZ0xJQ1JCQkdvaDJnRWdBQ0M5QWlEWEFSQTVJTmdCSUJOSklkc0JJTnNCQkVBZzJnRWhKQ0RZQVNFb0JTQVRJUlJCMHdBaDZnSU1BUXNNQVFzTEN3c0xDd3NMSU9vQ1FjSUFSZ1JBUVFBaDZnSWdPRUYvU2lHdEFTQkdRZi8vZTNFaHJnRWdyUUVFZnlDdUFRVWdSZ3NoQ2lEMkFrSUFVaUd2QVNBNFFRQkhJYkFCSUxBQklLOEJjaUhqQWlBTkliRUJJR1Fnc1FGckliSUJJSzhCUVFGekliUUJJTFFCUVFGeEliVUJJTElCSUxVQmFpRzJBU0E0SUxZQlNpRzNBU0MzQVFSL0lEZ0ZJTFlCQ3lFNUlPTUNCSDhnT1FVZ09Bc2hPaURqQWdSL0lBMEZJRm9MSVE0Z0RpRXhJQ1VoTWlBbklUTWdXaUUzSURvaFJ5QUtJVWdGSU9vQ1FkTUFSZ1JBUVFBaDZnSWdMMEdBd0FCeklkd0JJQUJCSUNBdElCUWczQUVRUVNBdElCUktJZDRCSU40QkJIOGdMUVVnRkFzaDN3RWczd0VoRmlBcUlSY2dRaUVoSUd3aHZRRU1Bd3NMSURjaDRRRWdNU0hpQVNEaEFTRGlBV3NoNHdFZ1J5RGpBVWdoNUFFZzVBRUVmeURqQVFVZ1J3c2hDeUFMSURKcUllVUJJQzBnNVFGSUllWUJJT1lCQkg4ZzVRRUZJQzBMSVRzZ0FFRWdJRHNnNVFFZ1NCQkJJQUFnTXlBeUVEa2dTRUdBZ0FSekllZ0JJQUJCTUNBN0lPVUJJT2dCRUVFZ0FFRXdJQXNnNHdGQkFCQkJJQUFnTVNEakFSQTVJRWhCZ01BQWN5SHBBU0FBUVNBZ095RGxBU0RwQVJCQklEc2hGaUFxSVJjZ1FpRWhJR3dodlFFTUFRc0xBa0FnNmdKQjFnQkdCRUFnQUVFQVJpSHFBU0RxQVFSQUlDRkJBRVloNndFZzZ3RUVRRUVBSVF3RlFRRWhOUU5BQWtBZ0JDQTFRUUowYWlIc0FTRHNBU2dDQUNIdEFTRHRBVUVBUmlIdUFTRHVBUVJBSURVaE5Bd0JDeUFESURWQkEzUnFJZkFCSVBBQklPMEJJQUlRT3lBMVFRRnFJZkVCSURWQkNVZ2g4d0VnOHdFRVFDRHhBU0UxQlNEeEFTRTBEQUVMREFFTEN5QTBRUXBJSWU4QklPOEJCRUFnTkNGREEwQUNRQ0FFSUVOQkFuUnFJZllCSVBZQktBSUFJZmNCSVBjQlFRQkdJZmdCSVBnQlJRUkFRWDhoREF3SEN5QkRRUUZxSWZRQklFTkJDVWdoOVFFZzlRRUVRQ0QwQVNGREJVRUJJUXdNQVFzTUFRc0xCVUVCSVF3TEN3VWdLaUVNQ3dzTElPc0NKQTBnREE4TEN3RUNmeU1OSVFKQkFBOExDUUVDZnlNTklRSVBDeXdCQlg4akRTRUhJQUFvQWdBaEF5QURRU0J4SVFRZ0JFRUFSaUVGSUFVRVFDQUJJQUlnQUJCUUdnc1BDNklCQVJKL0l3MGhFaUFBS0FJQUlRTWdBeXdBQUNFRUlBUkJHSFJCR0hVaEJTQUZRVkJxSVE4Z0QwRUtTU0VOSUEwRVFFRUFJUUlnQXlFSklBOGhFQU5BQWtBZ0FrRUtiQ0VHSUJBZ0Jtb2hCeUFKUVFGcUlRZ2dBQ0FJTmdJQUlBZ3NBQUFoQ2lBS1FSaDBRUmgxSVFzZ0MwRlFhaUVPSUE1QkNra2hEQ0FNQkVBZ0J5RUNJQWdoQ1NBT0lSQUZJQWNoQVF3QkN3d0JDd3NGUVFBaEFRc2dBUThMbVFvRGtBRi9CMzRDZkNNTklaSUJJQUZCRkVzaEZnSkFJQlpGQkVBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FnQVVFSmF3NEtBQUVDQXdRRkJnY0lDUW9MQWtBZ0FpZ0NBQ0UzSURjaEgwRUFRUVJxSVUwZ1RTRk1JRXhCQVdzaFN5QWZJRXRxSVNsQkFFRUVhaUZSSUZFaFVDQlFRUUZySVU4Z1QwRi9jeUZPSUNrZ1RuRWhNaUF5SVRRZ05DZ0NBQ0UxSURSQkJHb2hRU0FDSUVFMkFnQWdBQ0ExTmdJQURBME1Dd0FMQUFzQ1FDQUNLQUlBSVRzZ095RTJRUUJCQkdvaFZDQlVJVk1nVTBFQmF5RlNJRFlnVW1vaEJVRUFRUVJxSVZnZ1dDRlhJRmRCQVdzaFZpQldRWDl6SVZVZ0JTQlZjU0VHSUFZaEJ5QUhLQUlBSVFnZ0IwRUVhaUZJSUFJZ1NEWUNBQ0FJckNHVEFTQUFJSk1CTndNQURBd01DZ0FMQUFzQ1FDQUNLQUlBSVQ4Z1B5RUpRUUJCQkdvaFd5QmJJVm9nV2tFQmF5RlpJQWtnV1dvaENrRUFRUVJxSVY4Z1h5RmVJRjVCQVdzaFhTQmRRWDl6SVZ3Z0NpQmNjU0VMSUFzaERDQU1LQUlBSVEwZ0RFRUVhaUZKSUFJZ1NUWUNBQ0FOclNHVUFTQUFJSlFCTndNQURBc01DUUFMQUFzQ1FDQUNLQUlBSVVBZ1FDRU9RUUJCQ0dvaFlpQmlJV0VnWVVFQmF5RmdJQTRnWUdvaEQwRUFRUWhxSVdZZ1ppRmxJR1ZCQVdzaFpDQmtRWDl6SVdNZ0R5QmpjU0VRSUJBaEVTQVJLUU1BSVpVQklCRkJDR29oU2lBQ0lFbzJBZ0FnQUNDVkFUY0RBQXdLREFnQUN3QUxBa0FnQWlnQ0FDRTRJRGdoRWtFQVFRUnFJV2tnYVNGb0lHaEJBV3NoWnlBU0lHZHFJUk5CQUVFRWFpRnRJRzBoYkNCc1FRRnJJV3NnYTBGL2N5RnFJQk1nYW5FaEZDQVVJUlVnRlNnQ0FDRVhJQlZCQkdvaFFpQUNJRUkyQWdBZ0YwSC8vd054SVJnZ0dFRVFkRUVRZGF3aGxnRWdBQ0NXQVRjREFBd0pEQWNBQ3dBTEFrQWdBaWdDQUNFNUlEa2hHVUVBUVFScUlYQWdjQ0Z2SUc5QkFXc2hiaUFaSUc1cUlScEJBRUVFYWlGMElIUWhjeUJ6UVFGcklYSWdja0YvY3lGeElCb2djWEVoR3lBYklSd2dIQ2dDQUNFZElCeEJCR29oUXlBQ0lFTTJBZ0FnSFVILy93TnhJUVFnQkswaGx3RWdBQ0NYQVRjREFBd0lEQVlBQ3dBTEFrQWdBaWdDQUNFNklEb2hIa0VBUVFScUlYY2dkeUYySUhaQkFXc2hkU0FlSUhWcUlTQkJBRUVFYWlGN0lIc2hlaUI2UVFGcklYa2dlVUYvY3lGNElDQWdlSEVoSVNBaElTSWdJaWdDQUNFaklDSkJCR29oUkNBQ0lFUTJBZ0FnSTBIL0FYRWhKQ0FrUVJoMFFSaDFyQ0dZQVNBQUlKZ0JOd01BREFjTUJRQUxBQXNDUUNBQ0tBSUFJVHdnUENFbFFRQkJCR29oZmlCK0lYMGdmVUVCYXlGOElDVWdmR29oSmtFQVFRUnFJWUlCSUlJQklZRUJJSUVCUVFGcklZQUJJSUFCUVg5eklYOGdKaUIvY1NFbklDY2hLQ0FvS0FJQUlTb2dLRUVFYWlGRklBSWdSVFlDQUNBcVFmOEJjU0VESUFPdElaa0JJQUFnbVFFM0F3QU1CZ3dFQUFzQUN3SkFJQUlvQWdBaFBTQTlJU3RCQUVFSWFpR0ZBU0NGQVNHRUFTQ0VBVUVCYXlHREFTQXJJSU1CYWlFc1FRQkJDR29oaVFFZ2lRRWhpQUVnaUFGQkFXc2hod0VnaHdGQmYzTWhoZ0VnTENDR0FYRWhMU0F0SVM0Z0xpc0RBQ0dhQVNBdVFRaHFJVVlnQWlCR05nSUFJQUFnbWdFNUF3QU1CUXdEQUFzQUN3SkFJQUlvQWdBaFBpQStJUzlCQUVFSWFpR01BU0NNQVNHTEFTQ0xBVUVCYXlHS0FTQXZJSW9CYWlFd1FRQkJDR29oa0FFZ2tBRWhqd0VnandGQkFXc2hqZ0VnamdGQmYzTWhqUUVnTUNDTkFYRWhNU0F4SVRNZ015c0RBQ0diQVNBelFRaHFJVWNnQWlCSE5nSUFJQUFnbXdFNUF3QU1CQXdDQUFzQUN3d0NDd3NMRHd1UUFRSU9md0orSXcwaEVDQUFRZ0JSSVFnZ0NBUkFJQUVoQXdVZ0FTRUVJQUFoRVFOQUFrQWdFYWNoQ1NBSlFROXhJUXBCeGljZ0Ntb2hDeUFMTEFBQUlRd2dERUgvQVhFaERTQU5JQUp5SVE0Z0RrSC9BWEVoQlNBRVFYOXFJUVlnQmlBRk9nQUFJQkZDQklnaEVpQVNRZ0JSSVFjZ0J3UkFJQVloQXd3QkJTQUdJUVFnRWlFUkN3d0JDd3NMSUFNUEMzVUNDbjhDZmlNTklRc2dBRUlBVVNFRUlBUUVRQ0FCSVFJRklBQWhEQ0FCSVFNRFFBSkFJQXluUWY4QmNTRUZJQVZCQjNFaEJpQUdRVEJ5SVFjZ0EwRi9haUVJSUFnZ0J6b0FBQ0FNUWdPSUlRMGdEVUlBVVNFSklBa0VRQ0FJSVFJTUFRVWdEU0VNSUFnaEF3c01BUXNMQ3lBQ0R3djlBUUlXZndOK0l3MGhGeUFBUXYvLy8vOFBWaUVPSUFDbklSUWdEZ1JBSUFBaEdDQUJJUVVEUUFKQUlCaENDb0loR1NBWnAwSC9BWEVoRHlBUFFUQnlJUkFnQlVGL2FpRVJJQkVnRURvQUFDQVlRZ3FBSVJvZ0dFTC8vLy8vbndGV0lSSWdFZ1JBSUJvaEdDQVJJUVVGREFFTERBRUxDeUFhcHlFVklCVWhBaUFSSVFRRklCUWhBaUFCSVFRTElBSkJBRVloRXlBVEJFQWdCQ0VHQlNBQ0lRTWdCQ0VIQTBBQ1FDQURRUXB3UVg5eElRZ2dDRUV3Y2lFSklBbEIvd0Z4SVFvZ0IwRi9haUVMSUFzZ0Nqb0FBQ0FEUVFwdVFYOXhJUXdnQTBFS1NTRU5JQTBFUUNBTElRWU1BUVVnRENFRElBc2hCd3NNQVFzTEN5QUdEd3NtQVFaL0l3MGhCaEJLSVFFZ0FVRzhBV29oQWlBQ0tBSUFJUU1nQUNBREVFc2hCQ0FFRHd1SEJRRTRmeU1OSVRvZ0FVSC9BWEVoSmlBQUlURWdNVUVEY1NFeUlESkJBRWNoTXlBQ1FRQkhJVFFnTkNBemNTRTRBa0FnT0FSQUlBRkIvd0Z4SVRVZ0FDRUdJQUloQ1FOQUFrQWdCaXdBQUNFMklEWkJHSFJCR0hVZ05VRVlkRUVZZFVZaEVpQVNCRUFnQmlFRklBa2hDRUVHSVRrTUJBc2dCa0VCYWlFVElBbEJmMm9oRkNBVElSVWdGVUVEY1NFV0lCWkJBRWNoRnlBVVFRQkhJUmdnR0NBWGNTRTNJRGNFUUNBVElRWWdGQ0VKQlNBVElRUWdGQ0VISUJnaEVVRUZJVGtNQVFzTUFRc0xCU0FBSVFRZ0FpRUhJRFFoRVVFRklUa0xDeUE1UVFWR0JFQWdFUVJBSUFRaEJTQUhJUWhCQmlFNUJTQUVJUTVCQUNFUUN3c0NRQ0E1UVFaR0JFQWdCU3dBQUNFWklBRkIvd0Z4SVJvZ0dVRVlkRUVZZFNBYVFSaDBRUmgxUmlFYklCc0VRQ0FGSVE0Z0NDRVFCU0FtUVlHQ2hBaHNJUndnQ0VFRFN5RWRBa0FnSFFSQUlBVWhDaUFJSVF3RFFBSkFJQW9vQWdBaEhpQWVJQnh6SVI4Z0gwSC8vZnQzYWlFZ0lCOUJnSUdDaEhoeElTRWdJVUdBZ1lLRWVITWhJaUFpSUNCeElTTWdJMEVBUmlFa0lDUkZCRUFNQVFzZ0NrRUVhaUVsSUF4QmZHb2hKeUFuUVFOTElTZ2dLQVJBSUNVaENpQW5JUXdGSUNVaEF5QW5JUXRCQ3lFNURBUUxEQUVMQ3lBS0lRMGdEQ0VQQlNBRklRTWdDQ0VMUVFzaE9Rc0xJRGxCQzBZRVFDQUxRUUJHSVNrZ0tRUkFJQU1oRGtFQUlSQU1CQVVnQXlFTklBc2hEd3NMQTBBQ1FDQU5MQUFBSVNvZ0trRVlkRUVZZFNBYVFSaDBRUmgxUmlFcklDc0VRQ0FOSVE0Z0R5RVFEQVVMSUExQkFXb2hMQ0FQUVg5cUlTMGdMVUVBUmlFdUlDNEVRQ0FzSVE1QkFDRVFEQUVGSUN3aERTQXRJUThMREFFTEN3c0xDeUFRUVFCSElTOGdMd1IvSUE0RlFRQUxJVEFnTUE4THpBRUJFWDhqRFNFVkl3MUJnQUpxSkEwakRTTU9UZ1JBUVlBQ0VBTUxJQlVoRGlBRVFZREFCSEVoRHlBUFFRQkdJUkFnQWlBRFNpRVJJQkVnRUhFaEV5QVRCRUFnQWlBRGF5RVNJQkpCZ0FKSklRY2dCd1IvSUJJRlFZQUNDeUVJSUE0Z0FTQUlFRjRhSUJKQi93RkxJUWtnQ1FSQUlBSWdBMnNoQ2lBU0lRWURRQUpBSUFBZ0RrR0FBaEE1SUFaQmdINXFJUXNnQzBIL0FVc2hEQ0FNQkVBZ0N5RUdCUXdCQ3d3QkN3c2dDa0gvQVhFaERTQU5JUVVGSUJJaEJRc2dBQ0FPSUFVUU9Rc2dGU1FORHdzcUFRVi9JdzBoQmlBQVFRQkdJUU1nQXdSQVFRQWhBZ1VnQUNBQlFRQVFSeUVFSUFRaEFnc2dBZzhMM0RBRDBnTi9EMzRoZkNNTklkY0RJdzFCc0FScUpBMGpEU01PVGdSQVFiQUVFQU1MSU5jRFFRaHFJYVVESU5jRElhOERJTmNEUVl3RWFpRzZBeUM2QXlIQ0F5RFhBMEdBQkdvaGJpQ3ZBMEVBTmdJQUlHNUJER29oZUNBQkVFUWgyQU1nMkFOQ0FGTWhoUUVnaFFFRVFDQUJtaUg0QXlENEF5SHFBMEVCSVJ4Qm95Y2hIUVVnQkVHQUVIRWhtQUVnbUFGQkFFWWhvd0VnQkVFQmNTR3VBU0N1QVVFQVJpRzVBU0M1QVFSL1FhUW5CVUdwSndzaEJpQ2pBUVIvSUFZRlFhWW5DeUVISUFSQmdSQnhJY1FCSU1RQlFRQkhJYzhCSU04QlFRRnhJVW9nQVNIcUF5QktJUndnQnlFZEN5RHFBeEJFSWVBRElPQURRb0NBZ0lDQWdJRDQvd0NESWVFRElPRURRb0NBZ0lDQWdJRDQvd0JSSWUwQkFrQWc3UUVFUUNBRlFTQnhJZllCSVBZQlFRQkhJWUVDSUlFQ0JIOUJ0aWNGUWJvbkN5R01BaURxQXlEcUEySkVBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQmljaUdYQWlDQkFnUi9RYjRuQlVIQ0p3c2hvZ0lnbHdJRWZ5Q2lBZ1VnakFJTElSa2dIRUVEYWlHdEFpQUVRZi8vZTNFaHR3SWdBRUVnSUFJZ3JRSWd0d0lRUVNBQUlCMGdIQkE1SUFBZ0dVRURFRGtnQkVHQXdBQnpJY0lDSUFCQklDQUNJSzBDSU1JQ0VFRWdyUUloYlFVZzZnTWdyd01RUlNIOEF5RDhBMFFBQUFBQUFBQUFRS0loL1FNZy9RTkVBQUFBQUFBQUFBQmlJZUFDSU9BQ0JFQWdyd01vQWdBaDZnSWc2Z0pCZjJvaDlRSWdyd01nOVFJMkFnQUxJQVZCSUhJaC93SWcvd0pCNFFCR0lZb0RJSW9EQkVBZ0JVRWdjU0dWQXlDVkEwRUFSaUdZQXlBZFFRbHFJWmtESUpnREJIOGdIUVVnbVFNTElSNGdIRUVDY2lHYUF5QURRUXRMSVpzRFFRd2dBMnNobkFNZ25BTkJBRVloblFNZ213TWduUU55SVo0REFrQWduZ01FUUNEOUF5SHVBd1ZFQUFBQUFBQUFJRUFoNndNZ25BTWhLZ05BQWtBZ0trRi9haUdmQXlEckEwUUFBQUFBQUFBd1FLSWgvZ01nbndOQkFFWWhvQU1nb0FNRVFBd0JCU0QrQXlIckF5Q2ZBeUVxQ3d3QkN3c2dIaXdBQUNHaEF5Q2hBMEVZZEVFWWRVRXRSaUdpQXlDaUF3UkFJUDBEbWlIL0F5RC9BeUQrQTZFaGdBUWcvZ01nZ0FTZ0lZRUVJSUVFbWlHQ0JDQ0NCQ0h1QXd3Q0JTRDlBeUQrQTZBaGd3UWdnd1FnL2dPaElZUUVJSVFFSWU0RERBSUxBQXNMSUs4REtBSUFJYU1ESUtNRFFRQklJYVFEUVFBZ293TnJJYVlESUtRREJIOGdwZ01GSUtNREN5R25BeUNuQTZ3aDVnTWc1Z01nZUJBK0lhZ0RJS2dESUhoR0lha0RJS2tEQkVBZ2JrRUxhaUdxQXlDcUEwRXdPZ0FBSUtvRElSb0ZJS2dESVJvTElLTURRUjkxSWFzRElLc0RRUUp4SWF3RElLd0RRU3RxSWEwRElLMERRZjhCY1NHdUF5QWFRWDlxSWJBRElMQURJSzRET2dBQUlBVkJEMm9oc1FNZ3NRTkIvd0Z4SWJJRElCcEJmbW9oc3dNZ3N3TWdzZ002QUFBZ0EwRUJTQ0cwQXlBRVFRaHhJYlVESUxVRFFRQkdJYllESUxvRElSOGc3Z01oN3dNRFFBSkFJTzhEcWlHM0EwSEdKeUMzQTJvaHVBTWd1QU1zQUFBaHVRTWd1UU5CL3dGeElic0RJSlVESUxzRGNpRzhBeUM4QTBIL0FYRWh2UU1nSDBFQmFpRytBeUFmSUwwRE9nQUFJTGNEdHlHRkJDRHZBeUNGQktFaGhnUWdoZ1JFQUFBQUFBQUFNRUNpSVljRUlMNERJYjhESUw4RElNSURheUhBQXlEQUEwRUJSaUhCQXlEQkF3UkFJSWNFUkFBQUFBQUFBQUFBWVNIREF5QzBBeUREQTNFaHp3TWd0Z01nendOeEljNERJTTREQkVBZ3ZnTWhMZ1VnSDBFQ2FpSEVBeUMrQTBFdU9nQUFJTVFESVM0TEJTQytBeUV1Q3lDSEJFUUFBQUFBQUFBQUFHSWh4UU1neFFNRVFDQXVJUjhnaHdRaDd3TUZEQUVMREFFTEN5QURRUUJHSWNZRElDNGhhQ0RHQXdSQVFSZ2gxZ01GUVg0Z3dnTnJJY2NESU1jRElHaHFJY2dESU1nRElBTklJY2tESU1rREJFQWdBMEVDYWlIS0F5Qm9JTUlEYXlGbklHY2haU0RLQXlGcUJVRVlJZFlEQ3dzZzFnTkJHRVlFUUNCb0lNSURheUhMQXlETEF5RmxJTXNESVdvTElIZ2h6QU1nc3dNaGJ5RE1BeUJ2YXlGd0lIQWdtZ05xSVhFZ2NTQnFhaUZ5SUFCQklDQUNJSElnQkJCQklBQWdIaUNhQXhBNUlBUkJnSUFFY3lGeklBQkJNQ0FDSUhJZ2N4QkJJQUFndWdNZ1pSQTVJR29nWldzaGRDQUFRVEFnZEVFQVFRQVFRU0FBSUxNRElIQVFPU0FFUVlEQUFITWhkU0FBUVNBZ0FpQnlJSFVRUVNCeUlXME1BZ3NnQTBFQVNDRjJJSFlFZjBFR0JTQURDeUZMSU9BQ0JFQWcvUU5FQUFBQUFBQUFzRUdpSWZRRElLOERLQUlBSVhjZ2QwRmthaUY1SUs4RElIazJBZ0FnOUFNaDhBTWdlU0ZpQlNDdkF5Z0NBQ0ZrSVAwRElmQURJR1FoWWdzZ1lrRUFTQ0Y2SUtVRFFhQUNhaUY3SUhvRWZ5Q2xBd1VnZXdzaFZTQlZJUmdnOEFNaDhRTURRQUpBSVBFRHF5RjhJQmdnZkRZQ0FDQVlRUVJxSVgwZ2ZMZ2g5UU1nOFFNZzlRT2hJZllESVBZRFJBQUFBQUJsemMxQm9pSDNBeUQzQTBRQUFBQUFBQUFBQUdJaGZpQitCRUFnZlNFWUlQY0RJZkVEQlF3QkN3d0JDd3NnWWtFQVNpRi9JSDhFUUNCVklTWWdmU0VwSUdJaGdRRURRQUpBSUlFQlFSMUlJWUFCSUlBQkJIOGdnUUVGUVIwTElZSUJJQ2xCZkdvaEZDQVVJQ1pKSVlNQklJTUJCRUFnSmlFNEJTQ0NBYTBoMlFNZ0ZDRVZRUUFoRndOQUFrQWdGU2dDQUNHRUFTQ0VBYTBoMmdNZzJnTWcyUU9HSWRzRElCZXRJZHdESU5zRElOd0RmQ0hkQXlEZEEwS0FsT3ZjQTRJaDNnTWczZ09uSVlZQklCVWdoZ0UyQWdBZzNRTkNnSlRyM0FPQUlkOERJTjhEcHlHSEFTQVZRWHhxSVJNZ0V5QW1TU0dJQVNDSUFRUkFEQUVGSUJNaEZTQ0hBU0VYQ3d3QkN3c2dod0ZCQUVZaGlRRWdpUUVFUUNBbUlUZ0ZJQ1pCZkdvaGlnRWdpZ0VnaHdFMkFnQWdpZ0VoT0FzTElDa2hPUU5BQWtBZ09TQTRTeUdMQVNDTEFVVUVRQXdCQ3lBNVFYeHFJWXdCSUl3QktBSUFJWTBCSUkwQlFRQkdJWTRCSUk0QkJFQWdqQUVoT1FVTUFRc01BUXNMSUs4REtBSUFJWThCSUk4QklJSUJheUdRQVNDdkF5Q1FBVFlDQUNDUUFVRUFTaUdSQVNDUkFRUkFJRGdoSmlBNUlTa2drQUVoZ1FFRklEZ2hKU0E1SVNnZ2tBRWhZd3dCQ3d3QkN3c0ZJRlVoSlNCOUlTZ2dZaUZqQ3lCalFRQklJWklCSUpJQkJFQWdTMEVaYWlHVEFTQ1RBVUVKYlVGL2NTR1VBU0NVQVVFQmFpR1ZBU0QvQWtIbUFFWWhsZ0VnSlNGQUlDZ2hRaUJqSVprQkEwQUNRRUVBSUprQmF5R1hBU0NYQVVFSlNDR2FBU0NhQVFSL0lKY0JCVUVKQ3lHYkFTQkFJRUpKSVp3QklKd0JCRUJCQVNDYkFYUWhvQUVnb0FGQmYyb2hvUUZCZ0pUcjNBTWdtd0YySWFJQlFRQWhFaUJBSVNjRFFBSkFJQ2NvQWdBaHBBRWdwQUVnb1FGeElhVUJJS1FCSUpzQmRpR21BU0NtQVNBU2FpR25BU0FuSUtjQk5nSUFJS1VCSUtJQmJDR29BU0FuUVFScUlha0JJS2tCSUVKSklhb0JJS29CQkVBZ3FBRWhFaUNwQVNFbkJRd0JDd3dCQ3dzZ1FDZ0NBQ0dyQVNDckFVRUFSaUdzQVNCQVFRUnFJYTBCSUt3QkJIOGdyUUVGSUVBTElRZ2dxQUZCQUVZaHJ3RWdyd0VFUUNBSUlRb2dRaUZIQlNCQ1FRUnFJYkFCSUVJZ3FBRTJBZ0FnQ0NFS0lMQUJJVWNMQlNCQUtBSUFJWjBCSUowQlFRQkdJWjRCSUVCQkJHb2hud0VnbmdFRWZ5Q2ZBUVVnUUFzaENTQUpJUW9nUWlGSEN5Q1dBUVIvSUZVRklBb0xJYkVCSUVjaHNnRWdzUUVoc3dFZ3NnRWdzd0ZySWJRQklMUUJRUUoxSWJVQklMVUJJSlVCU2lHMkFTQ3hBU0NWQVVFQ2RHb2h0d0VndGdFRWZ5QzNBUVVnUndzaERDQ3ZBeWdDQUNHNEFTQzRBU0NiQVdvaHVnRWdyd01ndWdFMkFnQWd1Z0ZCQUVnaHV3RWd1d0VFUUNBS0lVQWdEQ0ZDSUxvQklaa0JCU0FLSVQ4Z0RDRkJEQUVMREFFTEN3VWdKU0UvSUNnaFFRc2dQeUJCU1NHOEFTQlZJYjBCSUx3QkJFQWdQeUcrQVNDOUFTQytBV3NodndFZ3Z3RkJBblVod0FFZ3dBRkJDV3dod1FFZ1B5Z0NBQ0hDQVNEQ0FVRUtTU0hEQVNEREFRUkFJTUVCSVMwRklNRUJJUnRCQ2lFaUEwQUNRQ0FpUVFwc0ljVUJJQnRCQVdvaHhnRWd3Z0VneFFGSkljY0JJTWNCQkVBZ3hnRWhMUXdCQlNER0FTRWJJTVVCSVNJTERBRUxDd3NGUVFBaExRc2cvd0pCNWdCSEljZ0JJTWdCQkg4Z0xRVkJBQXNoeVFFZ1N5REpBV3NoeWdFZy93SkI1d0JHSWNzQklFdEJBRWNoekFFZ3pBRWd5d0Z4SWMwQklNMEJRUjkwUVI5MUlWOGd5Z0VnWDJvaHpnRWdRU0hRQVNEUUFTQzlBV3NoMFFFZzBRRkJBblVoMGdFZzBnRkJDV3doMHdFZzB3RkJkMm9oMUFFZ3pnRWcxQUZJSWRVQklOVUJCRUFnVlVFRWFpSFdBU0RPQVVHQXlBQnFJZGNCSU5jQlFRbHRRWDl4SWRnQklOZ0JRWUI0YWlIWkFTRFdBU0RaQVVFQ2RHb2gyZ0VnMXdGQkNXOUJmM0VoMndFZzJ3RkJDRWdoM0FFZzNBRUVRQ0RiQVNFaFFRb2hNZ05BQWtBZ0lVRUJhaUVnSURKQkNtd2gzUUVnSVVFSFNDSGVBU0RlQVFSQUlDQWhJU0RkQVNFeUJTRGRBU0V4REFFTERBRUxDd1ZCQ2lFeEN5RGFBU2dDQUNIZkFTRGZBU0F4Y0VGL2NTSGdBU0RnQVVFQVJpSGhBU0RhQVVFRWFpSGlBU0RpQVNCQlJpSGpBU0RqQVNEaEFYRWgwQU1nMEFNRVFDRGFBU0ZHSUMwaFNDQS9JVndGSU44QklERnVRWDl4SWVRQklPUUJRUUZ4SWVVQklPVUJRUUJHSWVZQklPWUJCSHhFQUFBQUFBQUFRRU1GUkFFQUFBQUFBRUJEQ3lIeUF5QXhRUUp0UVg5eEllY0JJT0FCSU9jQlNTSG9BU0RnQVNEbkFVWWg2UUVnNHdFZzZRRnhJZEVESU5FREJIeEVBQUFBQUFBQThEOEZSQUFBQUFBQUFQZy9DeUh6QXlEb0FRUjhSQUFBQUFBQUFPQS9CU0R6QXdzaDZRTWdIRUVBUmlIcUFTRHFBUVJBSU9rRElld0RJUElESWUwREJTQWRMQUFBSWVzQklPc0JRUmgwUVJoMVFTMUdJZXdCSVBJRG1pSDVBeURwQTVvaCtnTWc3QUVFZkNENUF3VWc4Z01MSWVnRElPd0JCSHdnK2dNRklPa0RDeUhuQXlEbkF5SHNBeURvQXlIdEF3c2czd0VnNEFGckllNEJJTm9CSU80Qk5nSUFJTzBESU93RG9DSDdBeUQ3QXlEdEEySWg3d0VnN3dFRVFDRHVBU0F4YWlId0FTRGFBU0R3QVRZQ0FDRHdBVUgvayt2Y0Ewc2g4UUVnOFFFRVFDQS9JVThnMmdFaGJBTkFBa0FnYkVGOGFpSHlBU0JzUVFBMkFnQWc4Z0VnVDBraDh3RWc4d0VFUUNCUFFYeHFJZlFCSVBRQlFRQTJBZ0FnOUFFaFZnVWdUeUZXQ3lEeUFTZ0NBQ0gxQVNEMUFVRUJhaUgzQVNEeUFTRDNBVFlDQUNEM0FVSC9rK3ZjQTBzaCtBRWcrQUVFUUNCV0lVOGc4Z0VoYkFVZ1ZpRk9JUElCSVdzTUFRc01BUXNMQlNBL0lVNGcyZ0VoYXdzZ1RpSDVBU0M5QVNENUFXc2grZ0VnK2dGQkFuVWgrd0VnK3dGQkNXd2gvQUVnVGlnQ0FDSDlBU0Q5QVVFS1NTSCtBU0QrQVFSQUlHc2hSaUQ4QVNGSUlFNGhYQVVnL0FFaE8wRUtJVDBEUUFKQUlEMUJDbXdoL3dFZ08wRUJhaUdBQWlEOUFTRC9BVWtoZ2dJZ2dnSUVRQ0JySVVZZ2dBSWhTQ0JPSVZ3TUFRVWdnQUloT3lEL0FTRTlDd3dCQ3dzTEJTRGFBU0ZHSUMwaFNDQS9JVndMQ3lCR1FRUnFJWU1DSUVFZ2d3SkxJWVFDSUlRQ0JIOGdnd0lGSUVFTElRc2dTQ0ZTSUFzaFd5QmNJVjBGSUMwaFVpQkJJVnNnUHlGZEN5QmJJVmtEUUFKQUlGa2dYVXNoaFFJZ2hRSkZCRUJCQUNGZURBRUxJRmxCZkdvaGhnSWdoZ0lvQWdBaGh3SWdod0pCQUVZaGlBSWdpQUlFUUNDR0FpRlpCVUVCSVY0TUFRc01BUXNMUVFBZ1Vtc2hpUUlDUUNETEFRUkFJTXdCUVFGekljMERJTTBEUVFGeElZb0NJRXNnaWdKcUlVd2dUQ0JTU2lHTEFpQlNRWHRLSVkwQ0lJc0NJSTBDY1NIVEF5RFRBd1JBSUFWQmYyb2hqZ0lnVEVGL2FpRmdJR0FnVW1zaGp3SWdqZ0loRVNDUEFpRTFCU0FGUVg1cUlaQUNJRXhCZjJvaGtRSWdrQUloRVNDUkFpRTFDeUFFUVFoeElaSUNJSklDUVFCR0laTUNJSk1DQkVBZ1hnUkFJRmxCZkdvaGxBSWdsQUlvQWdBaGxRSWdsUUpCQUVZaGxnSWdsZ0lFUUVFSklUd0ZJSlVDUVFwd1FYOXhJWmdDSUpnQ1FRQkdJWmtDSUprQ0JFQkJBQ0V3UVFvaFF3TkFBa0FnUTBFS2JDR2FBaUF3UVFGcUlac0NJSlVDSUpvQ2NFRi9jU0djQWlDY0FrRUFSaUdkQWlDZEFnUkFJSnNDSVRBZ21nSWhRd1VnbXdJaFBBd0JDd3dCQ3dzRlFRQWhQQXNMQlVFSklUd0xJQkZCSUhJaG5nSWduZ0pCNWdCR0laOENJRmtob0FJZ29BSWd2UUZySWFFQ0lLRUNRUUoxSWFNQ0lLTUNRUWxzSWFRQ0lLUUNRWGRxSWFVQ0lKOENCRUFncFFJZ1BHc2hwZ0lncGdKQkFFb2hwd0lncHdJRWZ5Q21BZ1ZCQUFzaFRTQTFJRTFJSWFnQ0lLZ0NCSDhnTlFVZ1RRc2hOaUFSSVNRZ05pRStRUUFoWmd3REJTQ2xBaUJTYWlHcEFpQ3BBaUE4YXlHcUFpQ3FBa0VBU2lHckFpQ3JBZ1IvSUtvQ0JVRUFDeUZSSURVZ1VVZ2hyQUlnckFJRWZ5QTFCU0JSQ3lFM0lCRWhKQ0EzSVQ1QkFDRm1EQU1MQUFVZ0VTRWtJRFVoUGlDU0FpRm1Dd1VnQkVFSWNTRnBJQVVoSkNCTElUNGdhU0ZtQ3dzZ1BpQm1jaUd1QWlDdUFrRUFSeUd2QWlDdkFrRUJjU0d3QWlBa1FTQnlJYkVDSUxFQ1FlWUFSaUd5QWlDeUFnUkFJRkpCQUVvaHN3SWdzd0lFZnlCU0JVRUFDeUcwQWtFQUlUb2d0QUloWVFVZ1VrRUFTQ0cxQWlDMUFnUi9JSWtDQlNCU0N5RzJBaUMyQXF3aDRnTWc0Z01nZUJBK0liZ0NJSGdodVFJZ3VBSWh1Z0lndVFJZ3VnSnJJYnNDSUxzQ1FRSklJYndDSUx3Q0JFQWd1QUloTEFOQUFrQWdMRUYvYWlHOUFpQzlBa0V3T2dBQUlMMENJYjRDSUxrQ0lMNENheUcvQWlDL0FrRUNTQ0hBQWlEQUFnUkFJTDBDSVN3RklMMENJU3NNQVFzTUFRc0xCU0M0QWlFckN5QlNRUjkxSWNFQ0lNRUNRUUp4SWNNQ0lNTUNRU3RxSWNRQ0lNUUNRZjhCY1NIRkFpQXJRWDlxSWNZQ0lNWUNJTVVDT2dBQUlDUkIvd0Z4SWNjQ0lDdEJmbW9oeUFJZ3lBSWd4d0k2QUFBZ3lBSWh5UUlndVFJZ3lRSnJJY29DSU1nQ0lUb2d5Z0loWVFzZ0hFRUJhaUhMQWlETEFpQSthaUhNQWlETUFpQ3dBbW9oTHlBdklHRnFJYzBDSUFCQklDQUNJTTBDSUFRUVFTQUFJQjBnSEJBNUlBUkJnSUFFY3lIT0FpQUFRVEFnQWlETkFpRE9BaEJCSUxJQ0JFQWdYU0JWU3lIUEFpRFBBZ1IvSUZVRklGMExJUllndWdOQkNXb2gwQUlnMEFJaDBRSWd1Z05CQ0dvaDBnSWdGaUZRQTBBQ1FDQlFLQUlBSWRNQ0lOTUNyU0hqQXlEakF5RFFBaEErSWRRQ0lGQWdGa1loMVFJZzFRSUVRQ0RVQWlEUUFrWWgyd0lnMndJRVFDRFNBa0V3T2dBQUlOSUNJU01GSU5RQ0lTTUxCU0RVQWlDNkEwc2gxZ0lnMWdJRVFDRFVBaUhYQWlEWEFpRENBMnNoMkFJZ3VnTkJNQ0RZQWhCZUdpRFVBaUVRQTBBQ1FDQVFRWDlxSWRrQ0lOa0NJTG9EU3lIYUFpRGFBZ1JBSU5rQ0lSQUZJTmtDSVNNTUFRc01BUXNMQlNEVUFpRWpDd3NnSXlIY0FpRFJBaURjQW1zaDNRSWdBQ0FqSU4wQ0VEa2dVRUVFYWlIZUFpRGVBaUJWU3lIZkFpRGZBZ1JBREFFRklONENJVkFMREFFTEN5Q3VBa0VBUmlIaEFpRGhBa1VFUUNBQVFkWW5RUUVRT1FzZzNnSWdXVWtoNGdJZ1BrRUFTaUhqQWlEaUFpRGpBbkVoNUFJZzVBSUVRQ0ErSVVVZzNnSWhWd05BQWtBZ1Z5Z0NBQ0hsQWlEbEFxMGg1QU1nNUFNZzBBSVFQaUhtQWlEbUFpQzZBMHNoNXdJZzV3SUVRQ0RtQWlIb0FpRG9BaURDQTJzaDZRSWd1Z05CTUNEcEFoQmVHaURtQWlFUEEwQUNRQ0FQUVg5cUllc0NJT3NDSUxvRFN5SHNBaURzQWdSQUlPc0NJUThGSU9zQ0lRNE1BUXNNQVFzTEJTRG1BaUVPQ3lCRlFRbElJZTBDSU8wQ0JIOGdSUVZCQ1FzaDdnSWdBQ0FPSU80Q0VEa2dWMEVFYWlIdkFpQkZRWGRxSWZBQ0lPOENJRmxKSWZFQ0lFVkJDVW9oOGdJZzhRSWc4Z0p4SWZNQ0lQTUNCRUFnOEFJaFJTRHZBaUZYQlNEd0FpRkVEQUVMREFFTEN3VWdQaUZFQ3lCRVFRbHFJZlFDSUFCQk1DRDBBa0VKUVFBUVFRVWdYVUVFYWlIMkFpQmVCSDhnV1FVZzlnSUxJVm9nUGtGL1NpSDNBaUQzQWdSQUlMb0RRUWxxSWZnQ0lHWkJBRVloK1FJZytBSWgrZ0pCQUNEQ0Eyc2grd0lndWdOQkNHb2gvQUlnUGlGVUlGMGhXQU5BQWtBZ1dDZ0NBQ0g5QWlEOUFxMGg1UU1nNVFNZytBSVFQaUgrQWlEK0FpRDRBa1loZ0FNZ2dBTUVRQ0Q4QWtFd09nQUFJUHdDSVEwRklQNENJUTBMSUZnZ1hVWWhnUU1DUUNDQkF3UkFJQTFCQVdvaGhRTWdBQ0FOUVFFUU9TQlVRUUZJSVlZRElQa0NJSVlEY1NIU0F5RFNBd1JBSUlVRElUUU1BZ3NnQUVIV0owRUJFRGtnaFFNaE5BVWdEU0M2QTBzaGdnTWdnZ05GQkVBZ0RTRTBEQUlMSUEwZyt3SnFJZFFESU5RRElkVURJTG9EUVRBZzFRTVFYaG9nRFNFekEwQUNRQ0F6UVg5cUlZTURJSU1ESUxvRFN5R0VBeUNFQXdSQUlJTURJVE1GSUlNRElUUU1BUXNNQVFzTEN3c2dOQ0dIQXlENkFpQ0hBMnNoaUFNZ1ZDQ0lBMG9oaVFNZ2lRTUVmeUNJQXdVZ1ZBc2hpd01nQUNBMElJc0RFRGtnVkNDSUEyc2hqQU1nV0VFRWFpR05BeUNOQXlCYVNTR09BeUNNQTBGL1NpR1BBeUNPQXlDUEEzRWhrQU1na0FNRVFDQ01BeUZVSUkwRElWZ0ZJSXdESVVrTUFRc01BUXNMQlNBK0lVa0xJRWxCRW1vaGtRTWdBRUV3SUpFRFFSSkJBQkJCSUhnaGtnTWdPaUdUQXlDU0F5Q1RBMnNobEFNZ0FDQTZJSlFERURrTElBUkJnTUFBY3lHV0F5QUFRU0FnQWlETkFpQ1dBeEJCSU0wQ0lXMExDeUJ0SUFKSUlaY0RJSmNEQkg4Z0FnVWdiUXNoVXlEWEF5UU5JRk1QQ3hJQ0FuOEJmaU1OSVFJZ0FMMGhBeUFERHdzVkFnSi9BWHdqRFNFRElBQWdBUkJHSVFRZ0JBOEw5QkVEQzM4RWZnVjhJdzBoRENBQXZTRVBJQTlDTklnaEVDQVFwMEgvL3dOeElRa2dDVUgvRDNFaENnSkFBa0FDUUFKQUlBcEJFSFJCRUhWQkFHc09nQkFBQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FRSUxBa0FnQUVRQUFBQUFBQUFBQUdJaEJDQUVCRUFnQUVRQUFBQUFBQUR3UTZJaEZDQVVJQUVRUmlFVklBRW9BZ0FoQlNBRlFVQnFJUVlnRlNFU0lBWWhDQVVnQUNFU1FRQWhDQXNnQVNBSU5nSUFJQkloRVF3REFBc0FDd0pBSUFBaEVRd0NBQXNBQ3dKQUlCQ25JUWNnQjBIL0QzRWhBaUFDUVlKNGFpRURJQUVnQXpZQ0FDQVBRdi8vLy8vLy8vK0hnSCtESVEwZ0RVS0FnSUNBZ0lDQThEK0VJUTRnRHI4aEV5QVRJUkVMQ3lBUkR3dmtCQUU3ZnlNTklUMGdBRUVBUmlFWUFrQWdHQVJBUVFFaEF3VWdBVUdBQVVraEl5QWpCRUFnQVVIL0FYRWhMaUFBSUM0NkFBQkJBU0VEREFJTEVFZ2hOeUEzUWJ3QmFpRTRJRGdvQWdBaE9TQTVLQUlBSVRvZ09rRUFSaUVFSUFRRVFDQUJRWUIvY1NFRklBVkJnTDhEUmlFR0lBWUVRQ0FCUWY4QmNTRUlJQUFnQ0RvQUFFRUJJUU1NQXdVUU1TRUhJQWRCMUFBMkFnQkJmeUVEREFNTEFBc2dBVUdBRUVraENTQUpCRUFnQVVFR2RpRUtJQXBCd0FGeUlRc2dDMEgvQVhFaERDQUFRUUZxSVEwZ0FDQU1PZ0FBSUFGQlAzRWhEaUFPUVlBQmNpRVBJQTlCL3dGeElSQWdEU0FRT2dBQVFRSWhBd3dDQ3lBQlFZQ3dBMGtoRVNBQlFZQkFjU0VTSUJKQmdNQURSaUVUSUJFZ0UzSWhPeUE3QkVBZ0FVRU1kaUVVSUJSQjRBRnlJUlVnRlVIL0FYRWhGaUFBUVFGcUlSY2dBQ0FXT2dBQUlBRkJCblloR1NBWlFUOXhJUm9nR2tHQUFYSWhHeUFiUWY4QmNTRWNJQUJCQW1vaEhTQVhJQnc2QUFBZ0FVRS9jU0VlSUI1QmdBRnlJUjhnSDBIL0FYRWhJQ0FkSUNBNkFBQkJBeUVEREFJTElBRkJnSUI4YWlFaElDRkJnSURBQUVraElpQWlCRUFnQVVFU2RpRWtJQ1JCOEFGeUlTVWdKVUgvQVhFaEppQUFRUUZxSVNjZ0FDQW1PZ0FBSUFGQkRIWWhLQ0FvUVQ5eElTa2dLVUdBQVhJaEtpQXFRZjhCY1NFcklBQkJBbW9oTENBbklDczZBQUFnQVVFR2RpRXRJQzFCUDNFaEx5QXZRWUFCY2lFd0lEQkIvd0Z4SVRFZ0FFRURhaUV5SUN3Z01Ub0FBQ0FCUVQ5eElUTWdNMEdBQVhJaE5DQTBRZjhCY1NFMUlESWdOVG9BQUVFRUlRTU1BZ1VRTVNFMklEWkIxQUEyQWdCQmZ5RUREQUlMQUFzTElBTVBDdzhCQTM4akRTRUNFRWtoQUNBQUR3c01BUUovSXcwaEFVR1VJUThMRHdFRGZ5TU5JUUlRU1NFQUlBQVBDNU1DQVJaL0l3MGhGMEVBSVFRRFFBSkFRZGduSUFScUlROGdEeXdBQUNFUUlCQkIvd0Z4SVJFZ0VTQUFSaUVTSUJJRVFFRUNJUllNQVFzZ0JFRUJhaUVUSUJOQjF3QkdJUlFnRkFSQVFiQW9JUU5CMXdBaEJrRUZJUllNQVFVZ0V5RUVDd3dCQ3dzZ0ZrRUNSZ1JBSUFSQkFFWWhEaUFPQkVCQnNDZ2hBZ1ZCc0NnaEF5QUVJUVpCQlNFV0N3c2dGa0VGUmdSQUEwQUNRRUVBSVJZZ0F5RUZBMEFDUUNBRkxBQUFJUlVnRlVFWWRFRVlkVUVBUmlFSElBVkJBV29oQ0NBSEJFQU1BUVVnQ0NFRkN3d0JDd3NnQmtGL2FpRUpJQWxCQUVZaENpQUtCRUFnQ0NFQ0RBRUZJQWdoQXlBSklRWkJCU0VXQ3d3QkN3c0xJQUZCRkdvaEN5QUxLQUlBSVF3Z0FpQU1FRXdoRFNBTkR3c1RBUU4vSXcwaEJDQUFJQUVRVFNFQ0lBSVBDMUlCQ244akRTRUxJQUZCQUVZaEF5QURCRUJCQUNFQ0JTQUJLQUlBSVFRZ0FVRUVhaUVGSUFVb0FnQWhCaUFFSUFZZ0FCQk9JUWNnQnlFQ0N5QUNRUUJISVFnZ0NBUi9JQUlGSUFBTElRa2dDUThMakFVQlNYOGpEU0ZMSUFBb0FnQWhIU0FkUWFMYTc5Y0dhaUVvSUFCQkNHb2hNeUF6S0FJQUlUNGdQaUFvRUU4aFJDQUFRUXhxSVVVZ1JTZ0NBQ0ZHSUVZZ0tCQlBJUWtnQUVFUWFpRUtJQW9vQWdBaEN5QUxJQ2dRVHlFTUlBRkJBblloRFNCRUlBMUpJUTRDUUNBT0JFQWdSRUVDZENFUElBRWdEMnNoRUNBSklCQkpJUkVnRENBUVNTRVNJQkVnRW5FaFJ5QkhCRUFnRENBSmNpRVRJQk5CQTNFaEZDQVVRUUJHSVJVZ0ZRUkFJQWxCQW5ZaEZpQU1RUUoySVJkQkFDRUVJRVFoQlFOQUFrQWdCVUVCZGlFWUlBUWdHR29oR1NBWlFRRjBJUm9nR2lBV2FpRWJJQUFnRzBFQ2RHb2hIQ0FjS0FJQUlSNGdIaUFvRUU4aEh5QWJRUUZxSVNBZ0FDQWdRUUowYWlFaElDRW9BZ0FoSWlBaUlDZ1FUeUVqSUNNZ0FVa2hKQ0FCSUNOcklTVWdIeUFsU1NFbUlDUWdKbkVoU0NCSVJRUkFRUUFoQ0F3R0N5QWpJQjlxSVNjZ0FDQW5haUVwSUNrc0FBQWhLaUFxUVJoMFFSaDFRUUJHSVNzZ0swVUVRRUVBSVFnTUJnc2dBQ0FqYWlFc0lBSWdMQkEwSVMwZ0xVRUFSaUV1SUM0RVFBd0JDeUFGUVFGR0lVRWdMVUVBU0NGQ0lBVWdHR3NoUXlCQ0JIOGdHQVVnUXdzaEJ5QkNCSDhnQkFVZ0dRc2hCaUJCQkVCQkFDRUlEQVlGSUFZaEJDQUhJUVVMREFFTEN5QWFJQmRxSVM4Z0FDQXZRUUowYWlFd0lEQW9BZ0FoTVNBeElDZ1FUeUV5SUM5QkFXb2hOQ0FBSURSQkFuUnFJVFVnTlNnQ0FDRTJJRFlnS0JCUElUY2dOeUFCU1NFNElBRWdOMnNoT1NBeUlEbEpJVG9nT0NBNmNTRkpJRWtFUUNBQUlEZHFJVHNnTnlBeWFpRThJQUFnUEdvaFBTQTlMQUFBSVQ4Z1AwRVlkRUVZZFVFQVJpRkFJRUFFZnlBN0JVRUFDeUVESUFNaENBVkJBQ0VJQ3dWQkFDRUlDd1ZCQUNFSUN3VkJBQ0VJQ3dzZ0NBOExKQUVGZnlNTklRWWdBVUVBUmlFRElBQVFYQ0VFSUFNRWZ5QUFCU0FFQ3lFQ0lBSVBDNzBEQVNwL0l3MGhMQ0FDUVJCcUlSOGdIeWdDQUNFbElDVkJBRVloSmlBbUJFQWdBaEJSSVNnZ0tFRUFSaUVwSUNrRVFDQWZLQUlBSVFrZ0NTRU5RUVVoS3dWQkFDRUZDd1VnSlNFbklDY2hEVUVGSVNzTEFrQWdLMEVGUmdSQUlBSkJGR29oS2lBcUtBSUFJUXNnRFNBTGF5RU1JQXdnQVVraERpQUxJUThnRGdSQUlBSkJKR29oRUNBUUtBSUFJUkVnQWlBQUlBRWdFVUVIY1VFSWFoRUFBQ0VTSUJJaEJRd0NDeUFDUWNzQWFpRVRJQk1zQUFBaEZDQVVRUmgwUVJoMVFYOUtJUlVDUUNBVkJFQWdBU0VEQTBBQ1FDQURRUUJHSVJZZ0ZnUkFRUUFoQmlBQUlRY2dBU0VJSUE4aElRd0VDeUFEUVg5cUlSY2dBQ0FYYWlFWUlCZ3NBQUFoR1NBWlFSaDBRUmgxUVFwR0lSb2dHZ1JBREFFRklCY2hBd3NNQVFzTElBSkJKR29oR3lBYktBSUFJUndnQWlBQUlBTWdIRUVIY1VFSWFoRUFBQ0VkSUIwZ0Ewa2hIaUFlQkVBZ0hTRUZEQVFMSUFBZ0Eyb2hJQ0FCSUFOcklRUWdLaWdDQUNFS0lBTWhCaUFnSVFjZ0JDRUlJQW9oSVFWQkFDRUdJQUFoQnlBQklRZ2dEeUVoQ3dzZ0lTQUhJQWdRWFJvZ0tpZ0NBQ0VpSUNJZ0NHb2hJeUFxSUNNMkFnQWdCaUFJYWlFa0lDUWhCUXNMSUFVUEMrQUJBUmgvSXcwaEdDQUFRY29BYWlFQ0lBSXNBQUFoRFNBTlFSaDBRUmgxSVJBZ0VFSC9BV29oRVNBUklCQnlJUklnRWtIL0FYRWhFeUFDSUJNNkFBQWdBQ2dDQUNFVUlCUkJDSEVoRlNBVlFRQkdJUllnRmdSQUlBQkJDR29oQkNBRVFRQTJBZ0FnQUVFRWFpRUZJQVZCQURZQ0FDQUFRU3hxSVFZZ0JpZ0NBQ0VISUFCQkhHb2hDQ0FJSUFjMkFnQWdBRUVVYWlFSklBa2dCellDQUNBSElRb2dBRUV3YWlFTElBc29BZ0FoRENBS0lBeHFJUTRnQUVFUWFpRVBJQThnRGpZQ0FFRUFJUUVGSUJSQklISWhBeUFBSUFNMkFnQkJmeUVCQ3lBQkR3czNBUWgvSXcwaENTQUFRUUFnQVJCQUlRSWdBa0VBUmlFRElBSWhCQ0FBSVFVZ0JDQUZheUVHSUFNRWZ5QUJCU0FHQ3lFSElBY1BDODhDQVNCL0l3MGhJQ0FBSVFnZ0NFRURjU0VUSUJOQkFFWWhHQUpBSUJnRVFDQUFJUUpCQkNFZkJTQUFJUU1nQ0NFWEEwQUNRQ0FETEFBQUlSa2dHVUVZZEVFWWRVRUFSaUVhSUJvRVFDQVhJUWNNQkFzZ0EwRUJhaUViSUJzaEhDQWNRUU54SVIwZ0hVRUFSaUVlSUI0RVFDQWJJUUpCQkNFZkRBRUZJQnNoQXlBY0lSY0xEQUVMQ3dzTElCOUJCRVlFUUNBQ0lRRURRQUpBSUFFb0FnQWhDU0FKUWYvOSszZHFJUW9nQ1VHQWdZS0VlSEVoQ3lBTFFZQ0Jnb1I0Y3lFTUlBd2dDbkVoRFNBTlFRQkdJUTRnQVVFRWFpRVBJQTRFUUNBUElRRUZEQUVMREFFTEN5QUpRZjhCY1NFUUlCQkJHSFJCR0hWQkFFWWhFU0FSQkVBZ0FTRUVCU0FCSVFVRFFBSkFJQVZCQVdvaEVpQVNMQUFBSVFZZ0JrRVlkRUVZZFVFQVJpRVVJQlFFUUNBU0lRUU1BUVVnRWlFRkN3d0JDd3NMSUFRaEZTQVZJUWNMSUFjZ0NHc2hGaUFXRHd0QkFRZC9JdzBoQ0NBQUlBRVFWU0VDSUFJc0FBQWhBeUFCUWY4QmNTRUVJQU5CR0hSQkdIVWdCRUVZZEVFWWRVWWhCU0FGQkg4Z0FnVkJBQXNoQmlBR0R3dU1CQUV6ZnlNTklUUWdBVUgvQVhFaEVpQVNRUUJHSVIwQ1FDQWRCRUFnQUJCVElTOGdBQ0F2YWlFd0lEQWhBZ1VnQUNFb0lDaEJBM0VoTENBc1FRQkdJUzBnTFFSQUlBQWhCUVVnQVVIL0FYRWhMaUFBSVFZRFFBSkFJQVlzQUFBaENDQUlRUmgwUVJoMVFRQkdJUWtnQ0VFWWRFRVlkU0F1UVJoMFFSaDFSaUVLSUFrZ0NuSWhNU0F4QkVBZ0JpRUNEQVVMSUFaQkFXb2hDeUFMSVF3Z0RFRURjU0VOSUExQkFFWWhEaUFPQkVBZ0N5RUZEQUVGSUFzaEJnc01BUXNMQ3lBU1FZR0NoQWhzSVE4Z0JTZ0NBQ0VRSUJCQi8vMzdkMm9oRVNBUVFZQ0Jnb1I0Y1NFVElCTkJnSUdDaEhoeklSUWdGQ0FSY1NFVklCVkJBRVloRmdKQUlCWUVRQ0FGSVFRZ0VDRVlBMEFDUUNBWUlBOXpJUmNnRjBILy9mdDNhaUVaSUJkQmdJR0NoSGh4SVJvZ0drR0FnWUtFZUhNaEd5QWJJQmx4SVJ3Z0hFRUFSaUVlSUI1RkJFQWdCQ0VEREFRTElBUkJCR29oSHlBZktBSUFJU0FnSUVILy9mdDNhaUVoSUNCQmdJR0NoSGh4SVNJZ0lrR0FnWUtFZUhNaEl5QWpJQ0Z4SVNRZ0pFRUFSaUVsSUNVRVFDQWZJUVFnSUNFWUJTQWZJUU1NQVFzTUFRc0xCU0FGSVFNTEN5QUJRZjhCY1NFbUlBTWhCd05BQWtBZ0J5d0FBQ0VuSUNkQkdIUkJHSFZCQUVZaEtTQW5RUmgwUVJoMUlDWkJHSFJCR0hWR0lTb2dLU0FxY2lFeUlBZEJBV29oS3lBeUJFQWdCeUVDREFFRklDc2hCd3NNQVFzTEN3c2dBZzhMRVFFQ2Z5TU5JUUZCOERvUUJrSDRPZzhMRGdFQ2Z5TU5JUUZCOERvUURBOEw1d0lCSjM4akRTRW5JQUJCQUVZaENBSkFJQWdFUUVHUUlTZ0NBQ0VqSUNOQkFFWWhKQ0FrQkVCQkFDRWRCVUdRSVNnQ0FDRUpJQWtRV0NFS0lBb2hIUXNRVmlFTElBc29BZ0FoQXlBRFFRQkdJUXdnREFSQUlCMGhCUVVnQXlFRUlCMGhCZ05BQWtBZ0JFSE1BR29oRFNBTktBSUFJUTRnRGtGL1NpRVBJQThFUUNBRUVEY2hFQ0FRSVJvRlFRQWhHZ3NnQkVFVWFpRVJJQkVvQWdBaEVpQUVRUnhxSVJRZ0ZDZ0NBQ0VWSUJJZ0ZVc2hGaUFXQkVBZ0JCQlpJUmNnRnlBR2NpRVlJQmdoQndVZ0JpRUhDeUFhUVFCR0lSa2dHVVVFUUNBRUVEZ0xJQVJCT0dvaEd5QWJLQUlBSVFJZ0FrRUFSaUVjSUJ3RVFDQUhJUVVNQVFVZ0FpRUVJQWNoQmdzTUFRc0xDeEJYSUFVaEFRVWdBRUhNQUdvaEV5QVRLQUlBSVI0Z0hrRi9TaUVmSUI5RkJFQWdBQkJaSVNBZ0lDRUJEQUlMSUFBUU55RWhJQ0ZCQUVZaEpTQUFFRmtoSWlBbEJFQWdJaUVCQlNBQUVEZ2dJaUVCQ3dzTElBRVBDNEVDQVJkL0l3MGhGeUFBUVJScUlRSWdBaWdDQUNFTklBQkJIR29oRHlBUEtBSUFJUkFnRFNBUVN5RVJJQkVFUUNBQVFTUnFJUklnRWlnQ0FDRVRJQUJCQUVFQUlCTkJCM0ZCQ0dvUkFBQWFJQUlvQWdBaEZDQVVRUUJHSVJVZ0ZRUkFRWDhoQVFWQkF5RVdDd1ZCQXlFV0N5QVdRUU5HQkVBZ0FFRUVhaUVESUFNb0FnQWhCQ0FBUVFocUlRVWdCU2dDQUNFR0lBUWdCa2toQnlBSEJFQWdCQ0VJSUFZaENTQUlJQWxySVFvZ0FFRW9haUVMSUFzb0FnQWhEQ0FBSUFwQkFTQU1RUWR4UVFocUVRQUFHZ3NnQUVFUWFpRU9JQTVCQURZQ0FDQVBRUUEyQWdBZ0FrRUFOZ0lBSUFWQkFEWUNBQ0FEUVFBMkFnQkJBQ0VCQ3lBQkR3czNBUVIvSXcwaEJpTU5RUkJxSkEwakRTTU9UZ1JBUVJBUUF3c2dCaUVESUFNZ0FqWUNBQ0FBSUFFZ0F4QTFJUVFnQmlRTklBUVBDd01BQVFzc0FDQUFRZjhCY1VFWWRDQUFRUWgxUWY4QmNVRVFkSElnQUVFUWRVSC9BWEZCQ0hSeUlBQkJHSFp5RHd2a0JBRUVmeUFDUVlEQUFFNEVRQ0FBSUFFZ0FoQU9Ed3NnQUNFRElBQWdBbW9oQmlBQVFRTnhJQUZCQTNGR0JFQURRQUpBSUFCQkEzRkZCRUFNQVFzQ1FDQUNRUUJHQkVBZ0F3OExJQUFnQVN3QUFEb0FBQ0FBUVFGcUlRQWdBVUVCYWlFQklBSkJBV3NoQWdzTUFRc0xJQVpCZkhFaEJDQUVRY0FBYXlFRkEwQUNRQ0FBSUFWTVJRUkFEQUVMQWtBZ0FDQUJLQUlBTmdJQUlBQkJCR29nQVVFRWFpZ0NBRFlDQUNBQVFRaHFJQUZCQ0dvb0FnQTJBZ0FnQUVFTWFpQUJRUXhxS0FJQU5nSUFJQUJCRUdvZ0FVRVFhaWdDQURZQ0FDQUFRUlJxSUFGQkZHb29BZ0EyQWdBZ0FFRVlhaUFCUVJocUtBSUFOZ0lBSUFCQkhHb2dBVUVjYWlnQ0FEWUNBQ0FBUVNCcUlBRkJJR29vQWdBMkFnQWdBRUVrYWlBQlFTUnFLQUlBTmdJQUlBQkJLR29nQVVFb2FpZ0NBRFlDQUNBQVFTeHFJQUZCTEdvb0FnQTJBZ0FnQUVFd2FpQUJRVEJxS0FJQU5nSUFJQUJCTkdvZ0FVRTBhaWdDQURZQ0FDQUFRVGhxSUFGQk9Hb29BZ0EyQWdBZ0FFRThhaUFCUVR4cUtBSUFOZ0lBSUFCQndBQnFJUUFnQVVIQUFHb2hBUXNNQVFzTEEwQUNRQ0FBSUFSSVJRUkFEQUVMQWtBZ0FDQUJLQUlBTmdJQUlBQkJCR29oQUNBQlFRUnFJUUVMREFFTEN3VWdCa0VFYXlFRUEwQUNRQ0FBSUFSSVJRUkFEQUVMQWtBZ0FDQUJMQUFBT2dBQUlBQkJBV29nQVVFQmFpd0FBRG9BQUNBQVFRSnFJQUZCQW1vc0FBQTZBQUFnQUVFRGFpQUJRUU5xTEFBQU9nQUFJQUJCQkdvaEFDQUJRUVJxSVFFTERBRUxDd3NEUUFKQUlBQWdCa2hGQkVBTUFRc0NRQ0FBSUFFc0FBQTZBQUFnQUVFQmFpRUFJQUZCQVdvaEFRc01BUXNMSUFNUEMvRUNBUVIvSUFBZ0Ftb2hBeUFCUWY4QmNTRUJJQUpCd3dCT0JFQURRQUpBSUFCQkEzRkJBRWRGQkVBTUFRc0NRQ0FBSUFFNkFBQWdBRUVCYWlFQUN3d0JDd3NnQTBGOGNTRUVJQVJCd0FCcklRVWdBU0FCUVFoMGNpQUJRUkIwY2lBQlFSaDBjaUVHQTBBQ1FDQUFJQVZNUlFSQURBRUxBa0FnQUNBR05nSUFJQUJCQkdvZ0JqWUNBQ0FBUVFocUlBWTJBZ0FnQUVFTWFpQUdOZ0lBSUFCQkVHb2dCallDQUNBQVFSUnFJQVkyQWdBZ0FFRVlhaUFHTmdJQUlBQkJIR29nQmpZQ0FDQUFRU0JxSUFZMkFnQWdBRUVrYWlBR05nSUFJQUJCS0dvZ0JqWUNBQ0FBUVN4cUlBWTJBZ0FnQUVFd2FpQUdOZ0lBSUFCQk5Hb2dCallDQUNBQVFUaHFJQVkyQWdBZ0FFRThhaUFHTmdJQUlBQkJ3QUJxSVFBTERBRUxDd05BQWtBZ0FDQUVTRVVFUUF3QkN3SkFJQUFnQmpZQ0FDQUFRUVJxSVFBTERBRUxDd3NEUUFKQUlBQWdBMGhGQkVBTUFRc0NRQ0FBSUFFNkFBQWdBRUVCYWlFQUN3d0JDd3NnQXlBQ2F3OExCUUJCQUE4TEJRQkJBQThMWmdFRWZ5QUFRUTlxUVhCeElRQWpDaWdDQUNFQklBRWdBR29oQXlBQVFRQktJQU1nQVVoeElBTkJBRWh5QkVBUUFocEJEQkFIUVg4UEN5TUtJQU0yQWdBUUFTRUVJQU1nQkVvRVFCQUFRUUJHQkVBakNpQUJOZ0lBUVF3UUIwRi9Ed3NMSUFFUEN4QUFJQUVnQUVFSGNVRUFhaEVCQUE4TEZBQWdBU0FDSUFNZ0FFRUhjVUVJYWhFQUFBOExDUUJCQUJBRVFRQVBDd2tBUVFFUUJVRUFEd3NMd2k0QkFFR0FDQXU2TGdBQUFBQnNBUUFBMkFJQUFHc0JBQURYQWdBQWFnRUFBTllDQUFCcEFRQUExUUlBQUdnQkFBRFVBZ0FBWndFQUFOTUNBQUJtQVFBQTBnSUFBR1VCQUFEUkFnQUFaQUVBQU5BQ0FBQmpBUUFBendJQUFHSUJBQURPQWdBQVlRRUFBTTBDQUFCZ0FRQUF6QUlBQUY4QkFBRExBZ0FBWGdFQUFNb0NBQUJkQVFBQXlRSUFBRndCQUFESUFnQUFXd0VBQU1jQ0FBQmFBUUFBeGdJQUFGa0JBQURGQWdBQVdBRUFBTVFDQUFCWEFRQUF3d0lBQUZZQkFBRENBZ0FBVlFFQUFNRUNBQUJVQVFBQXdBSUFBRk1CQUFDL0FnQUFVZ0VBQUw0Q0FBQlJBUUFBdlFJQUFGQUJBQUM4QWdBQVR3RUFBTHNDQUFCT0FRQUF1Z0lBQUUwQkFBQzVBZ0FBVEFFQUFMZ0NBQUJMQVFBQXR3SUFBRW9CQUFDMkFnQUFTUUVBQUxVQ0FBQklBUUFBdEFJQUFFY0JBQUN6QWdBQVJnRUFBTElDQUFCRkFRQUFzUUlBQUVRQkFBQ3dBZ0FBUXdFQUFLOENBQUJDQVFBQXJnSUFBRUVCQUFDdEFnQUFRQUVBQUt3Q0FBQS9BUUFBcXdJQUFENEJBQUNxQWdBQVBRRUFBS2tDQUFBOEFRQUFxQUlBQURzQkFBQ25BZ0FBT2dFQUFLWUNBQUE1QVFBQXBRSUFBRGdCQUFDa0FnQUFOd0VBQUtNQ0FBQTJBUUFBb2dJQUFEVUJBQUNoQWdBQU5BRUFBS0FDQUFBekFRQUFud0lBQURJQkFBQ2VBZ0FBTVFFQUFKMENBQUF3QVFBQW5BSUFBQzhCQUFDYkFnQUFMZ0VBQUpvQ0FBQXRBUUFBbVFJQUFDd0JBQUNZQWdBQUt3RUFBSmNDQUFBcUFRQUFsZ0lBQUNrQkFBQ1ZBZ0FBS0FFQUFKUUNBQUFuQVFBQWt3SUFBQ1lCQUFDU0FnQUFKUUVBQUpFQ0FBQWtBUUFBa0FJQUFDTUJBQUNQQWdBQUlnRUFBSTRDQUFBaEFRQUFqUUlBQUNBQkFBQ01BZ0FBSHdFQUFJc0NBQUFlQVFBQWlnSUFBQjBCQUFDSkFnQUFIQUVBQUlnQ0FBQWJBUUFBaHdJQUFCb0JBQUNHQWdBQUdRRUFBSVVDQUFBWUFRQUFoQUlBQUJjQkFBQ0RBZ0FBRmdFQUFJSUNBQUFWQVFBQWdRSUFBQlFCQUFDQUFnQUFFd0VBQUg4Q0FBQVNBUUFBZmdJQUFCRUJBQUI5QWdBQUVBRUFBSHdDQUFBUEFRQUFld0lBQUE0QkFBQjZBZ0FBRFFFQUFIa0NBQUFNQVFBQWVBSUFBQXNCQUFCM0FnQUFDZ0VBQUhZQ0FBQUpBUUFBZFFJQUFBZ0JBQUIwQWdBQUJ3RUFBSE1DQUFBR0FRQUFjZ0lBQUFVQkFBQnhBZ0FBQkFFQUFIQUNBQUFEQVFBQWJ3SUFBQUlCQUFCdUFnQUFBUUVBQUcwQ0FBQUFBUUFBYkFJQUFQOEFBQUJyQWdBQS9nQUFBR29DQUFEOUFBQUFhUUlBQVB3QUFBQm9BZ0FBK3dBQUFHY0NBQUQ2QUFBQVpnSUFBUGtBQUFCbEFnQUErQUFBQUdRQ0FBRDNBQUFBWXdJQUFQWUFBQUJpQWdBQTlRQUFBR0VDQUFEMEFBQUFZQUlBQVBNQUFBQmZBZ0FBOGdBQUFGNENBQUR4QUFBQVhRSUFBUEFBQUFCY0FnQUE3d0FBQUZzQ0FBRHVBQUFBV2dJQUFPMEFBQUJaQWdBQTdBQUFBRmdDQUFEckFBQUFWd0lBQU9vQUFBQldBZ0FBNlFBQUFGVUNBQURvQUFBQVZBSUFBT2NBQUFCVEFnQUE1Z0FBQUZJQ0FBRGxBQUFBVVFJQUFPUUFBQUJRQWdBQTR3QUFBRThDQUFEaUFBQUFUZ0lBQU9FQUFBQk5BZ0FBNEFBQUFFd0NBQURmQUFBQVN3SUFBTjRBQUFCS0FnQUEzUUFBQUVrQ0FBRGNBQUFBU0FJQUFOc0FBQUJIQWdBQTJnQUFBRVlDQUFEWkFBQUFSUUlBQU5nQUFBQkVBZ0FBMXdBQUFFTUNBQURXQUFBQVFnSUFBTlVBQUFCQkFnQUExQUFBQUVBQ0FBRFRBQUFBUHdJQUFOSUFBQUErQWdBQTBRQUFBRDBDQUFEUUFBQUFQQUlBQU04QUFBQTdBZ0FBemdBQUFEb0NBQUROQUFBQU9RSUFBTXdBQUFBNEFnQUF5d0FBQURjQ0FBREtBQUFBTmdJQUFNa0FBQUExQWdBQXlBQUFBRFFDQUFESEFBQUFNd0lBQU1ZQUFBQXlBZ0FBeFFBQUFERUNBQURFQUFBQU1BSUFBTU1BQUFBdkFnQUF3Z0FBQUM0Q0FBREJBQUFBTFFJQUFNQUFBQUFzQWdBQXZ3QUFBQ3NDQUFDK0FBQUFLZ0lBQUwwQUFBQXBBZ0FBdkFBQUFDZ0NBQUM3QUFBQUp3SUFBTG9BQUFBbUFnQUF1UUFBQUNVQ0FBQzRBQUFBSkFJQUFMY0FBQUFqQWdBQXRnQUFBQ0lDQUFDMUFBQUFJUUlBQUxRQUFBQWdBZ0FBc3dBQUFCOENBQUN5QUFBQUhnSUFBTEVBQUFBZEFnQUFzQUFBQUJ3Q0FBQ3ZBQUFBR3dJQUFLNEFBQUFhQWdBQXJRQUFBQmtDQUFDc0FBQUFHQUlBQUtzQUFBQVhBZ0FBcWdBQUFCWUNBQUNwQUFBQUZRSUFBS2dBQUFBVUFnQUFwd0FBQUJNQ0FBQ21BQUFBRWdJQUFLVUFBQUFSQWdBQXBBQUFBQkFDQUFDakFBQUFEd0lBQUtJQUFBQU9BZ0FBb1FBQUFBMENBQUNnQUFBQURBSUFBSjhBQUFBTEFnQUFuZ0FBQUFvQ0FBQ2RBQUFBQ1FJQUFKd0FBQUFJQWdBQW13QUFBQWNDQUFDYUFBQUFCZ0lBQUprQUFBQUZBZ0FBbUFBQUFBUUNBQUNYQUFBQUF3SUFBSllBQUFBQ0FnQUFsUUFBQUFFQ0FBQ1VBQUFBQUFJQUFKTUFBQUQvQVFBQWtnQUFBUDRCQUFDUkFBQUEvUUVBQUpBQUFBRDhBUUFBandBQUFQc0JBQUNPQUFBQStnRUFBSTBBQUFENUFRQUFqQUFBQVBnQkFBQ0xBQUFBOXdFQUFJb0FBQUQyQVFBQWlRQUFBUFVCQUFDSUFBQUE5QUVBQUljQUFBRHpBUUFBaGdBQUFQSUJBQUNGQUFBQThRRUFBSVFBQUFEd0FRQUFnd0FBQU84QkFBQ0NBQUFBN2dFQUFJRUFBQUR0QVFBQWdBQUFBT3dCQUFCL0FBQUE2d0VBQUg0QUFBRHFBUUFBZlFBQUFPa0JBQUI4QUFBQTZBRUFBSHNBQUFEbkFRQUFlZ0FBQU9ZQkFBQjVBQUFBNVFFQUFIZ0FBQURrQVFBQWR3QUFBT01CQUFCMkFBQUE0Z0VBQUhVQUFBRGhBUUFBZEFBQUFPQUJBQUJ6QUFBQTN3RUFBSElBQUFEZUFRQUFjUUFBQU4wQkFBQndBQUFBM0FFQUFHOEFBQURiQVFBQWJnQUFBTm9CQUFCdEFBQUEyUUVBQUd3QUFBRFlBUUFBYXdBQUFOY0JBQUJxQUFBQTFnRUFBR2tBQUFEVkFRQUFhQUFBQU5RQkFBQm5BQUFBMHdFQUFHWUFBQURTQVFBQVpRQUFBTkVCQUFCa0FBQUEwQUVBQUdNQUFBRFBBUUFBWWdBQUFNNEJBQUJoQUFBQXpRRUFBR0FBQUFETUFRQUFYd0FBQU1zQkFBQmVBQUFBeWdFQUFGMEFBQURKQVFBQVhBQUFBTWdCQUFCYkFBQUF4d0VBQUZvQUFBREdBUUFBV1FBQUFNVUJBQUJZQUFBQXhBRUFBRmNBQUFEREFRQUFWZ0FBQU1JQkFBQlZBQUFBd1FFQUFGUUFBQURBQVFBQVV3QUFBTDhCQUFCU0FBQUF2Z0VBQUZFQUFBQzlBUUFBVUFBQUFMd0JBQUJQQUFBQXV3RUFBRTRBQUFDNkFRQUFUUUFBQUxrQkFBQk1BQUFBdUFFQUFFc0FBQUMzQVFBQVNnQUFBTFlCQUFCSkFBQUF0UUVBQUVnQUFBQzBBUUFBUndBQUFMTUJBQUJHQUFBQXNnRUFBRVVBQUFDeEFRQUFSQUFBQUxBQkFBQkRBQUFBcndFQUFFSUFBQUN1QVFBQVFRQUFBSzBCQUFCQUFBQUFyQUVBQUQ4QUFBQ3JBUUFBUGdBQUFLb0JBQUE5QUFBQXFRRUFBRHdBQUFDb0FRQUFPd0FBQUtjQkFBQTZBQUFBcGdFQUFEa0FBQUNsQVFBQU9BQUFBS1FCQUFBM0FBQUFvd0VBQURZQUFBQ2lBUUFBTlFBQUFLRUJBQUEwQUFBQW9BRUFBRE1BQUFDZkFRQUFNZ0FBQUo0QkFBQXhBQUFBblFFQUFEQUFBQUNjQVFBQUx3QUFBSnNCQUFBdUFBQUFtZ0VBQUMwQUFBQ1pBUUFBTEFBQUFKZ0JBQUFyQUFBQWx3RUFBQ29BQUFDV0FRQUFLUUFBQUpVQkFBQW9BQUFBbEFFQUFDY0FBQUNUQVFBQUpnQUFBSklCQUFBbEFBQUFrUUVBQUNRQUFBQ1FBUUFBSXdBQUFJOEJBQUFpQUFBQWpnRUFBQ0VBQUFDTkFRQUFJQUFBQUl3QkFBQWZBQUFBaXdFQUFCNEFBQUNLQVFBQUhRQUFBSWtCQUFBY0FBQUFpQUVBQUJzQUFBQ0hBUUFBR2dBQUFJWUJBQUFaQUFBQWhRRUFBQmdBQUFDRUFRQUFGd0FBQUlNQkFBQVdBQUFBZ2dFQUFCVUFBQUNCQVFBQUZBQUFBSUFCQUFBVEFBQUFmd0VBQUJJQUFBQitBUUFBRVFBQUFIMEJBQUFRQUFBQWZBRUFBQThBQUFCN0FRQUFEZ0FBQUhvQkFBQU5BQUFBZVFFQUFBd0FBQUI0QVFBQUN3QUFBSGNCQUFBS0FBQUFkZ0VBQUFrQUFBQjFBUUFBQ0FBQUFIUUJBQUFIQUFBQWN3RUFBQVlBQUFCeUFRQUFCUUFBQUhFQkFBQUVBQUFBY0FFQUFBTUFBQUJ2QVFBQUFnQUFBRzRCQUFBQkFBQUFiUUVBQUFBQUFBQUJBQUFBQUFBQUFQLy8vLzhDQUFBQUFRQUFBUC8vLy84QUFBQUFBZ0FBQVAvLy8vOEJBQUFBQUFBQUFKZ1BBQUFGQUFBQUFBQUFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDQUFBQUF3QUFBSlFpQUFBQUFBQUFBQUFBQUFBQUFBQUNBQUFBQUFBQUFBQUFBQUFBQUFELy8vLy8vd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUUFBQUFBQUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFNQUFBQ2NJZ0FBQUFRQUFBQUFBQUFBQUFBQUFRQUFBQUFBQUFBQUFBQUFBQUFBQ3YvLy8vOEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCUVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRlFkQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBU1c1MllXeHBaQ0J0YVc1WFpXbG5hSFJOWVdkdWFYUjFaR1VnSldRQU9VRkNRMFJGUmtkSVNVcExURTFPVDFCUlVsTlVWVlpYV0ZsYUFCRUFDZ0FSRVJFQUFBQUFCUUFBQUFBQUFBa0FBQUFBQ3dBQUFBQUFBQUFBRVFBUENoRVJFUU1LQndBQkV3a0xDd0FBQ1FZTEFBQUxBQVlSQUFBQUVSRVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBc0FBQUFBQUFBQUFCRUFDZ29SRVJFQUNnQUFBZ0FKQ3dBQUFBa0FDd0FBQ3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFNQUFBQUFBQUFBQUFBQUFBTUFBQUFBQXdBQUFBQUNRd0FBQUFBQUF3QUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnQUFBQUFBQUFBQUFBQUFEUUFBQUFRTkFBQUFBQWtPQUFBQUFBQU9BQUFPQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBQUE4QUFBQUFEd0FBQUFBSkVBQUFBQUFBRUFBQUVBQUFFZ0FBQUJJU0VnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBU0FBQUFFaElTQUFBQUFBQUFDUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDd0FBQUFBQUFBQUFBQUFBQ2dBQUFBQUtBQUFBQUFrTEFBQUFBQUFMQUFBTEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBQUFBQUFBQUFBd0FBQUFBREFBQUFBQUpEQUFBQUFBQURBQUFEQUFBTFNzZ0lDQXdXREI0QUNodWRXeHNLUUF0TUZnck1GZ2dNRmd0TUhnck1IZ2dNSGdBYVc1bUFFbE9SZ0J1WVc0QVRrRk9BREF4TWpNME5UWTNPRGxCUWtORVJVWXVBRlFoSWhrTkFRSURFVXNjREJBRUN4MFNIaWRvYm05d2NXSWdCUVlQRXhRVkdnZ1dCeWdrRnhnSkNnNGJIeVVqZzRKOUppb3JQRDArUDBOSFNrMVlXVnBiWEYxZVgyQmhZMlJsWm1kcGFtdHNjbk4wZVhwN2ZBQkpiR3hsWjJGc0lHSjVkR1VnYzJWeGRXVnVZMlVBUkc5dFlXbHVJR1Z5Y205eUFGSmxjM1ZzZENCdWIzUWdjbVZ3Y21WelpXNTBZV0pzWlFCT2IzUWdZU0IwZEhrQVVHVnliV2x6YzJsdmJpQmtaVzVwWldRQVQzQmxjbUYwYVc5dUlHNXZkQ0J3WlhKdGFYUjBaV1FBVG04Z2MzVmphQ0JtYVd4bElHOXlJR1JwY21WamRHOXllUUJPYnlCemRXTm9JSEJ5YjJObGMzTUFSbWxzWlNCbGVHbHpkSE1BVm1Gc2RXVWdkRzl2SUd4aGNtZGxJR1p2Y2lCa1lYUmhJSFI1Y0dVQVRtOGdjM0JoWTJVZ2JHVm1kQ0J2YmlCa1pYWnBZMlVBVDNWMElHOW1JRzFsYlc5eWVRQlNaWE52ZFhKalpTQmlkWE41QUVsdWRHVnljblZ3ZEdWa0lITjVjM1JsYlNCallXeHNBRkpsYzI5MWNtTmxJSFJsYlhCdmNtRnlhV3g1SUhWdVlYWmhhV3hoWW14bEFFbHVkbUZzYVdRZ2MyVmxhd0JEY205emN5MWtaWFpwWTJVZ2JHbHVhd0JTWldGa0xXOXViSGtnWm1sc1pTQnplWE4wWlcwQVJHbHlaV04wYjNKNUlHNXZkQ0JsYlhCMGVRQkRiMjV1WldOMGFXOXVJSEpsYzJWMElHSjVJSEJsWlhJQVQzQmxjbUYwYVc5dUlIUnBiV1ZrSUc5MWRBQkRiMjV1WldOMGFXOXVJSEpsWm5WelpXUUFTRzl6ZENCcGN5QmtiM2R1QUVodmMzUWdhWE1nZFc1eVpXRmphR0ZpYkdVQVFXUmtjbVZ6Y3lCcGJpQjFjMlVBUW5KdmEyVnVJSEJwY0dVQVNTOVBJR1Z5Y205eUFFNXZJSE4xWTJnZ1pHVjJhV05sSUc5eUlHRmtaSEpsYzNNQVFteHZZMnNnWkdWMmFXTmxJSEpsY1hWcGNtVmtBRTV2SUhOMVkyZ2daR1YyYVdObEFFNXZkQ0JoSUdScGNtVmpkRzl5ZVFCSmN5QmhJR1JwY21WamRHOXllUUJVWlhoMElHWnBiR1VnWW5WemVRQkZlR1ZqSUdadmNtMWhkQ0JsY25KdmNnQkpiblpoYkdsa0lHRnlaM1Z0Wlc1MEFFRnlaM1Z0Wlc1MElHeHBjM1FnZEc5dklHeHZibWNBVTNsdFltOXNhV01nYkdsdWF5QnNiMjl3QUVacGJHVnVZVzFsSUhSdmJ5QnNiMjVuQUZSdmJ5QnRZVzU1SUc5d1pXNGdabWxzWlhNZ2FXNGdjM2x6ZEdWdEFFNXZJR1pwYkdVZ1pHVnpZM0pwY0hSdmNuTWdZWFpoYVd4aFlteGxBRUpoWkNCbWFXeGxJR1JsYzJOeWFYQjBiM0lBVG04Z1kyaHBiR1FnY0hKdlkyVnpjd0JDWVdRZ1lXUmtjbVZ6Y3dCR2FXeGxJSFJ2YnlCc1lYSm5aUUJVYjI4Z2JXRnVlU0JzYVc1cmN3Qk9ieUJzYjJOcmN5QmhkbUZwYkdGaWJHVUFVbVZ6YjNWeVkyVWdaR1ZoWkd4dlkyc2dkMjkxYkdRZ2IyTmpkWElBVTNSaGRHVWdibTkwSUhKbFkyOTJaWEpoWW14bEFGQnlaWFpwYjNWeklHOTNibVZ5SUdScFpXUUFUM0JsY21GMGFXOXVJR05oYm1ObGJHVmtBRVoxYm1OMGFXOXVJRzV2ZENCcGJYQnNaVzFsYm5SbFpBQk9ieUJ0WlhOellXZGxJRzltSUdSbGMybHlaV1FnZEhsd1pRQkpaR1Z1ZEdsbWFXVnlJSEpsYlc5MlpXUUFSR1YyYVdObElHNXZkQ0JoSUhOMGNtVmhiUUJPYnlCa1lYUmhJR0YyWVdsc1lXSnNaUUJFWlhacFkyVWdkR2x0Wlc5MWRBQlBkWFFnYjJZZ2MzUnlaV0Z0Y3lCeVpYTnZkWEpqWlhNQVRHbHVheUJvWVhNZ1ltVmxiaUJ6WlhabGNtVmtBRkJ5YjNSdlkyOXNJR1Z5Y205eUFFSmhaQ0J0WlhOellXZGxBRVpwYkdVZ1pHVnpZM0pwY0hSdmNpQnBiaUJpWVdRZ2MzUmhkR1VBVG05MElHRWdjMjlqYTJWMEFFUmxjM1JwYm1GMGFXOXVJR0ZrWkhKbGMzTWdjbVZ4ZFdseVpXUUFUV1Z6YzJGblpTQjBiMjhnYkdGeVoyVUFVSEp2ZEc5amIyd2dkM0p2Ym1jZ2RIbHdaU0JtYjNJZ2MyOWphMlYwQUZCeWIzUnZZMjlzSUc1dmRDQmhkbUZwYkdGaWJHVUFVSEp2ZEc5amIyd2dibTkwSUhOMWNIQnZjblJsWkFCVGIyTnJaWFFnZEhsd1pTQnViM1FnYzNWd2NHOXlkR1ZrQUU1dmRDQnpkWEJ3YjNKMFpXUUFVSEp2ZEc5amIyd2dabUZ0YVd4NUlHNXZkQ0J6ZFhCd2IzSjBaV1FBUVdSa2NtVnpjeUJtWVcxcGJIa2dibTkwSUhOMWNIQnZjblJsWkNCaWVTQndjbTkwYjJOdmJBQkJaR1J5WlhOeklHNXZkQ0JoZG1GcGJHRmliR1VBVG1WMGQyOXlheUJwY3lCa2IzZHVBRTVsZEhkdmNtc2dkVzV5WldGamFHRmliR1VBUTI5dWJtVmpkR2x2YmlCeVpYTmxkQ0JpZVNCdVpYUjNiM0pyQUVOdmJtNWxZM1JwYjI0Z1lXSnZjblJsWkFCT2J5QmlkV1ptWlhJZ2MzQmhZMlVnWVhaaGFXeGhZbXhsQUZOdlkydGxkQ0JwY3lCamIyNXVaV04wWldRQVUyOWphMlYwSUc1dmRDQmpiMjV1WldOMFpXUUFRMkZ1Ym05MElITmxibVFnWVdaMFpYSWdjMjlqYTJWMElITm9kWFJrYjNkdUFFOXdaWEpoZEdsdmJpQmhiSEpsWVdSNUlHbHVJSEJ5YjJkeVpYTnpBRTl3WlhKaGRHbHZiaUJwYmlCd2NtOW5jbVZ6Y3dCVGRHRnNaU0JtYVd4bElHaGhibVJzWlFCU1pXMXZkR1VnU1M5UElHVnljbTl5QUZGMWIzUmhJR1Y0WTJWbFpHVmtBRTV2SUcxbFpHbDFiU0JtYjNWdVpBQlhjbTl1WnlCdFpXUnBkVzBnZEhsd1pRQk9ieUJsY25KdmNpQnBibVp2Y20xaGRHbHZiZz09JztcclxuICB2YXIgYXNtanNDb2RlRmlsZSA9ICcnO1xyXG5cclxuICBpZiAodHlwZW9mIE1vZHVsZVsnbG9jYXRlRmlsZSddID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBpZiAoIWlzRGF0YVVSSSh3YXNtVGV4dEZpbGUpKSB7XHJcbiAgICAgIHdhc21UZXh0RmlsZSA9IE1vZHVsZVsnbG9jYXRlRmlsZSddKHdhc21UZXh0RmlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpIHtcclxuICAgICAgd2FzbUJpbmFyeUZpbGUgPSBNb2R1bGVbJ2xvY2F0ZUZpbGUnXSh3YXNtQmluYXJ5RmlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzRGF0YVVSSShhc21qc0NvZGVGaWxlKSkge1xyXG4gICAgICBhc21qc0NvZGVGaWxlID0gTW9kdWxlWydsb2NhdGVGaWxlJ10oYXNtanNDb2RlRmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB1dGlsaXRpZXNcclxuXHJcbiAgdmFyIHdhc21QYWdlU2l6ZSA9IDY0KjEwMjQ7XHJcblxyXG4gIHZhciBpbmZvID0ge1xyXG4gICAgJ2dsb2JhbCc6IG51bGwsXHJcbiAgICAnZW52JzogbnVsbCxcclxuICAgICdhc20yd2FzbSc6IHsgLy8gc3BlY2lhbCBhc20yd2FzbSBpbXBvcnRzXHJcbiAgICAgIFwiZjY0LXJlbVwiOiBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHggJSB5O1xyXG4gICAgICB9LFxyXG4gICAgICBcImRlYnVnZ2VyXCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ3BhcmVudCc6IE1vZHVsZSAvLyBNb2R1bGUgaW5zaWRlIHdhc20tanMuY3BwIHJlZmVycyB0byB3YXNtLWpzLmNwcDsgdGhpcyBhbGxvd3MgYWNjZXNzIHRvIHRoZSBvdXRzaWRlIHByb2dyYW0uXHJcbiAgfTtcclxuXHJcbiAgdmFyIGV4cG9ydHMgPSBudWxsO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gbWVyZ2VNZW1vcnkobmV3QnVmZmVyKSB7XHJcbiAgICAvLyBUaGUgd2FzbSBpbnN0YW5jZSBjcmVhdGVzIGl0cyBtZW1vcnkuIEJ1dCBzdGF0aWMgaW5pdCBjb2RlIG1pZ2h0IGhhdmUgd3JpdHRlbiB0b1xyXG4gICAgLy8gYnVmZmVyIGFscmVhZHksIGluY2x1ZGluZyB0aGUgbWVtIGluaXQgZmlsZSwgYW5kIHdlIG11c3QgY29weSBpdCBvdmVyIGluIGEgcHJvcGVyIG1lcmdlLlxyXG4gICAgLy8gVE9ETzogYXZvaWQgdGhpcyBjb3B5LCBieSBhdm9pZGluZyBzdWNoIHN0YXRpYyBpbml0IHdyaXRlc1xyXG4gICAgLy8gVE9ETzogaW4gc2hvcnRlciB0ZXJtLCBqdXN0IGNvcHkgdXAgdG8gdGhlIGxhc3Qgc3RhdGljIGluaXQgd3JpdGVcclxuICAgIHZhciBvbGRCdWZmZXIgPSBNb2R1bGVbJ2J1ZmZlciddO1xyXG4gICAgaWYgKG5ld0J1ZmZlci5ieXRlTGVuZ3RoIDwgb2xkQnVmZmVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgTW9kdWxlWydwcmludEVyciddKCd0aGUgbmV3IGJ1ZmZlciBpbiBtZXJnZU1lbW9yeSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzIG9uZS4gaW4gbmF0aXZlIHdhc20sIHdlIHNob3VsZCBncm93IG1lbW9yeSBoZXJlJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgb2xkVmlldyA9IG5ldyBJbnQ4QXJyYXkob2xkQnVmZmVyKTtcclxuICAgIHZhciBuZXdWaWV3ID0gbmV3IEludDhBcnJheShuZXdCdWZmZXIpO1xyXG5cclxuXHJcbiAgICBuZXdWaWV3LnNldChvbGRWaWV3KTtcclxuICAgIHVwZGF0ZUdsb2JhbEJ1ZmZlcihuZXdCdWZmZXIpO1xyXG4gICAgdXBkYXRlR2xvYmFsQnVmZmVyVmlld3MoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpeEltcG9ydHMoaW1wb3J0cykge1xyXG4gICAgcmV0dXJuIGltcG9ydHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRCaW5hcnkoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoTW9kdWxlWyd3YXNtQmluYXJ5J10pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoTW9kdWxlWyd3YXNtQmluYXJ5J10pO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBiaW5hcnkgPSB0cnlQYXJzZUFzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSk7XHJcbiAgICAgIGlmIChiaW5hcnkpIHtcclxuICAgICAgICByZXR1cm4gYmluYXJ5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNb2R1bGVbJ3JlYWRCaW5hcnknXSkge1xyXG4gICAgICAgIHJldHVybiBNb2R1bGVbJ3JlYWRCaW5hcnknXSh3YXNtQmluYXJ5RmlsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgXCJvbiB0aGUgd2ViLCB3ZSBuZWVkIHRoZSB3YXNtIGJpbmFyeSB0byBiZSBwcmVsb2FkZWQgYW5kIHNldCBvbiBNb2R1bGVbJ3dhc21CaW5hcnknXS4gZW1jYy5weSB3aWxsIGRvIHRoYXQgZm9yIHlvdSB3aGVuIGdlbmVyYXRpbmcgSFRNTCAoYnV0IG5vdCBKUylcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICBhYm9ydChlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZSgpIHtcclxuICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgdGhlIGJpbmFyeSB5ZXQsIGFuZCBoYXZlIHRoZSBGZXRjaCBhcGksIHVzZSB0aGF0XHJcbiAgICAvLyBpbiBzb21lIGVudmlyb25tZW50cywgbGlrZSBFbGVjdHJvbidzIHJlbmRlciBwcm9jZXNzLCBGZXRjaCBhcGkgbWF5IGJlIHByZXNlbnQsIGJ1dCBoYXZlIGEgZGlmZmVyZW50IGNvbnRleHQgdGhhbiBleHBlY3RlZCwgbGV0J3Mgb25seSB1c2UgaXQgb24gdGhlIFdlYlxyXG4gICAgaWYgKCFNb2R1bGVbJ3dhc21CaW5hcnknXSAmJiAoRU5WSVJPTk1FTlRfSVNfV0VCIHx8IEVOVklST05NRU5UX0lTX1dPUktFUikgJiYgdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh3YXNtQmluYXJ5RmlsZSwgeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZVsnb2snXSkge1xyXG4gICAgICAgICAgdGhyb3cgXCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIiArIHdhc21CaW5hcnlGaWxlICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVsnYXJyYXlCdWZmZXInXSgpO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldEJpbmFyeSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIE90aGVyd2lzZSwgZ2V0QmluYXJ5IHNob3VsZCBiZSBhYmxlIHRvIGdldCBpdCBzeW5jaHJvbm91c2x5XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHJlc29sdmUoZ2V0QmluYXJ5KCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBkby1tZXRob2QgZnVuY3Rpb25zXHJcblxyXG5cclxuICBmdW5jdGlvbiBkb05hdGl2ZVdhc20oZ2xvYmFsLCBlbnYsIHByb3ZpZGVkQnVmZmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ25vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcHJlcGFyZSBtZW1vcnkgaW1wb3J0XHJcbiAgICBpZiAoIShNb2R1bGVbJ3dhc21NZW1vcnknXSBpbnN0YW5jZW9mIFdlYkFzc2VtYmx5Lk1lbW9yeSkpIHtcclxuICAgICAgTW9kdWxlWydwcmludEVyciddKCdubyBuYXRpdmUgd2FzbSBNZW1vcnkgaW4gdXNlJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVudlsnbWVtb3J5J10gPSBNb2R1bGVbJ3dhc21NZW1vcnknXTtcclxuICAgIC8vIExvYWQgdGhlIHdhc20gbW9kdWxlIGFuZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdXNpbmcgbmF0aXZlIHN1cHBvcnQgaW4gdGhlIEpTIGVuZ2luZS5cclxuICAgIGluZm9bJ2dsb2JhbCddID0ge1xyXG4gICAgICAnTmFOJzogTmFOLFxyXG4gICAgICAnSW5maW5pdHknOiBJbmZpbml0eVxyXG4gICAgfTtcclxuICAgIGluZm9bJ2dsb2JhbC5NYXRoJ10gPSBNYXRoO1xyXG4gICAgaW5mb1snZW52J10gPSBlbnY7XHJcbiAgICAvLyBoYW5kbGUgYSBnZW5lcmF0ZWQgd2FzbSBpbnN0YW5jZSwgcmVjZWl2aW5nIGl0cyBleHBvcnRzIGFuZFxyXG4gICAgLy8gcGVyZm9ybWluZyBvdGhlciBuZWNlc3Nhcnkgc2V0dXBcclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSwgbW9kdWxlKSB7XHJcbiAgICAgIGV4cG9ydHMgPSBpbnN0YW5jZS5leHBvcnRzO1xyXG4gICAgICBpZiAoZXhwb3J0cy5tZW1vcnkpIG1lcmdlTWVtb3J5KGV4cG9ydHMubWVtb3J5KTtcclxuICAgICAgTW9kdWxlWydhc20nXSA9IGV4cG9ydHM7XHJcbiAgICAgIE1vZHVsZVtcInVzaW5nV2FzbVwiXSA9IHRydWU7XHJcbiAgICAgIHJlbW92ZVJ1bkRlcGVuZGVuY3koJ3dhc20taW5zdGFudGlhdGUnKTtcclxuICAgIH1cclxuICAgIGFkZFJ1bkRlcGVuZGVuY3koJ3dhc20taW5zdGFudGlhdGUnKTtcclxuXHJcbiAgICAvLyBVc2VyIHNoZWxsIHBhZ2VzIGNhbiB3cml0ZSB0aGVpciBvd24gTW9kdWxlLmluc3RhbnRpYXRlV2FzbSA9IGZ1bmN0aW9uKGltcG9ydHMsIHN1Y2Nlc3NDYWxsYmFjaykgY2FsbGJhY2tcclxuICAgIC8vIHRvIG1hbnVhbGx5IGluc3RhbnRpYXRlIHRoZSBXYXNtIG1vZHVsZSB0aGVtc2VsdmVzLiBUaGlzIGFsbG93cyBwYWdlcyB0byBydW4gdGhlIGluc3RhbnRpYXRpb24gcGFyYWxsZWxcclxuICAgIC8vIHRvIGFueSBvdGhlciBhc3luYyBzdGFydHVwIGFjdGlvbnMgdGhleSBhcmUgcGVyZm9ybWluZy5cclxuICAgIGlmIChNb2R1bGVbJ2luc3RhbnRpYXRlV2FzbSddKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZHVsZVsnaW5zdGFudGlhdGVXYXNtJ10oaW5mbywgcmVjZWl2ZUluc3RhbmNlKTtcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgTW9kdWxlWydwcmludEVyciddKCdNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAnICsgZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXN5bmMgY29tcGlsYXRpb24gY2FuIGJlIGNvbmZ1c2luZyB3aGVuIGFuIGVycm9yIG9uIHRoZSBwYWdlIG92ZXJ3cml0ZXMgTW9kdWxlXHJcbiAgICAvLyAoZm9yIGV4YW1wbGUsIGlmIHRoZSBvcmRlciBvZiBlbGVtZW50cyBpcyB3cm9uZywgYW5kIHRoZSBvbmUgZGVmaW5pbmcgTW9kdWxlIGlzXHJcbiAgICAvLyBsYXRlciksIHNvIHdlIHNhdmUgTW9kdWxlIGFuZCBjaGVjayBpdCBsYXRlci5cclxuICAgIHZhciB0cnVlTW9kdWxlID0gTW9kdWxlO1xyXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRlZFNvdXJjZShvdXRwdXQpIHtcclxuICAgICAgLy8gJ291dHB1dCcgaXMgYSBXZWJBc3NlbWJseUluc3RhbnRpYXRlZFNvdXJjZSBvYmplY3Qgd2hpY2ggaGFzIGJvdGggdGhlIG1vZHVsZSBhbmQgaW5zdGFuY2UuXHJcbiAgICAgIC8vIHJlY2VpdmVJbnN0YW5jZSgpIHdpbGwgc3dhcCBpbiB0aGUgZXhwb3J0cyAodG8gTW9kdWxlLmFzbSkgc28gdGhleSBjYW4gYmUgY2FsbGVkXHJcbiAgICAgIGFzc2VydChNb2R1bGUgPT09IHRydWVNb2R1bGUsICd0aGUgTW9kdWxlIG9iamVjdCBzaG91bGQgbm90IGJlIHJlcGxhY2VkIGR1cmluZyBhc3luYyBjb21waWxhdGlvbiAtIHBlcmhhcHMgdGhlIG9yZGVyIG9mIEhUTUwgZWxlbWVudHMgaXMgd3Jvbmc/Jyk7XHJcbiAgICAgIHRydWVNb2R1bGUgPSBudWxsO1xyXG4gICAgICByZWNlaXZlSW5zdGFuY2Uob3V0cHV0WydpbnN0YW5jZSddLCBvdXRwdXRbJ21vZHVsZSddKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZXIpIHtcclxuICAgICAgZ2V0QmluYXJ5UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24oYmluYXJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSwgaW5mbyk7XHJcbiAgICAgIH0pLnRoZW4ocmVjZWl2ZXIpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgIE1vZHVsZVsncHJpbnRFcnInXSgnZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogJyArIHJlYXNvbik7XHJcbiAgICAgICAgYWJvcnQocmVhc29uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBQcmVmZXIgc3RyZWFtaW5nIGluc3RhbnRpYXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKCFNb2R1bGVbJ3dhc21CaW5hcnknXSAmJlxyXG4gICAgICAgIHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICAgICFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpICYmXHJcbiAgICAgICAgdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKGZldGNoKHdhc21CaW5hcnlGaWxlLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pLCBpbmZvKVxyXG4gICAgICAgIC50aGVuKHJlY2VpdmVJbnN0YW50aWF0ZWRTb3VyY2UpXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgLy8gV2UgZXhwZWN0IHRoZSBtb3N0IGNvbW1vbiBmYWlsdXJlIGNhdXNlIHRvIGJlIGEgYmFkIE1JTUUgdHlwZSBmb3IgdGhlIGJpbmFyeSxcclxuICAgICAgICAgIC8vIGluIHdoaWNoIGNhc2UgZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24gc2hvdWxkIHdvcmsuXHJcbiAgICAgICAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ3dhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAnICsgcmVhc29uKTtcclxuICAgICAgICAgIE1vZHVsZVsncHJpbnRFcnInXSgnZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24nKTtcclxuICAgICAgICAgIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRlZFNvdXJjZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKHJlY2VpdmVJbnN0YW50aWF0ZWRTb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt9OyAvLyBubyBleHBvcnRzIHlldDsgd2UnbGwgZmlsbCB0aGVtIGluIGxhdGVyXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gV2UgbWF5IGhhdmUgYSBwcmVsb2FkZWQgdmFsdWUgaW4gTW9kdWxlLmFzbSwgc2F2ZSBpdFxyXG4gIE1vZHVsZVsnYXNtUHJlbG9hZCddID0gTW9kdWxlWydhc20nXTtcclxuXHJcbiAgLy8gTWVtb3J5IGdyb3d0aCBpbnRlZ3JhdGlvbiBjb2RlXHJcblxyXG4gIHZhciBhc21qc1JlYWxsb2NCdWZmZXIgPSBNb2R1bGVbJ3JlYWxsb2NCdWZmZXInXTtcclxuXHJcbiAgdmFyIHdhc21SZWFsbG9jQnVmZmVyID0gZnVuY3Rpb24oc2l6ZSkge1xyXG4gICAgdmFyIFBBR0VfTVVMVElQTEUgPSBNb2R1bGVbXCJ1c2luZ1dhc21cIl0gPyBXQVNNX1BBR0VfU0laRSA6IEFTTUpTX1BBR0VfU0laRTsgLy8gSW4gd2FzbSwgaGVhcCBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NEtCLiBJbiBhc20uanMsIHRoZXkgbmVlZCB0byBiZSBtdWx0aXBsZXMgb2YgMTZNQi5cclxuICAgIHNpemUgPSBhbGlnblVwKHNpemUsIFBBR0VfTVVMVElQTEUpOyAvLyByb3VuZCB1cCB0byB3YXNtIHBhZ2Ugc2l6ZVxyXG4gICAgdmFyIG9sZCA9IE1vZHVsZVsnYnVmZmVyJ107XHJcbiAgICB2YXIgb2xkU2l6ZSA9IG9sZC5ieXRlTGVuZ3RoO1xyXG4gICAgaWYgKE1vZHVsZVtcInVzaW5nV2FzbVwiXSkge1xyXG4gICAgICAvLyBuYXRpdmUgd2FzbSBzdXBwb3J0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE1vZHVsZVsnd2FzbU1lbW9yeSddLmdyb3coKHNpemUgLSBvbGRTaXplKSAvIHdhc21QYWdlU2l6ZSk7IC8vIC5ncm93KCkgdGFrZXMgYSBkZWx0YSBjb21wYXJlZCB0byB0aGUgcHJldmlvdXMgc2l6ZVxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09ICgtMSB8IDApKSB7XHJcbiAgICAgICAgICAvLyBzdWNjZXNzIGluIG5hdGl2ZSB3YXNtIG1lbW9yeSBncm93dGgsIGdldCB0aGUgYnVmZmVyIGZyb20gdGhlIG1lbW9yeVxyXG4gICAgICAgICAgcmV0dXJuIE1vZHVsZVsnYnVmZmVyJ10gPSBNb2R1bGVbJ3dhc21NZW1vcnknXS5idWZmZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTW9kdWxlLnJlYWxsb2NCdWZmZXI6IEF0dGVtcHRlZCB0byBncm93IGZyb20gJyArIG9sZFNpemUgICsgJyBieXRlcyB0byAnICsgc2l6ZSArICcgYnl0ZXMsIGJ1dCBnb3QgZXJyb3I6ICcgKyBlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIE1vZHVsZVsncmVhbGxvY0J1ZmZlciddID0gZnVuY3Rpb24oc2l6ZSkge1xyXG4gICAgaWYgKGZpbmFsTWV0aG9kID09PSAnYXNtanMnKSB7XHJcbiAgICAgIHJldHVybiBhc21qc1JlYWxsb2NCdWZmZXIoc2l6ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gd2FzbVJlYWxsb2NCdWZmZXIoc2l6ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gd2UgbWF5IHRyeSBtb3JlIHRoYW4gb25lOyB0aGlzIGlzIHRoZSBmaW5hbCBvbmUsIHRoYXQgd29ya2VkIGFuZCB3ZSBhcmUgdXNpbmdcclxuICB2YXIgZmluYWxNZXRob2QgPSAnJztcclxuXHJcbiAgLy8gUHJvdmlkZSBhbiBcImFzbS5qcyBmdW5jdGlvblwiIGZvciB0aGUgYXBwbGljYXRpb24sIGNhbGxlZCB0byBcImxpbmtcIiB0aGUgYXNtLmpzIG1vZHVsZS4gV2UgaW5zdGFudGlhdGVcclxuICAvLyB0aGUgd2FzbSBtb2R1bGUgYXQgdGhhdCB0aW1lLCBhbmQgaXQgcmVjZWl2ZXMgaW1wb3J0cyBhbmQgcHJvdmlkZXMgZXhwb3J0cyBhbmQgc28gZm9ydGgsIHRoZSBhcHBcclxuICAvLyBkb2Vzbid0IG5lZWQgdG8gY2FyZSB0aGF0IGl0IGlzIHdhc20gb3Igb2x5ZmlsbGVkIHdhc20gb3IgYXNtLmpzLlxyXG5cclxuICBNb2R1bGVbJ2FzbSddID0gZnVuY3Rpb24oZ2xvYmFsLCBlbnYsIHByb3ZpZGVkQnVmZmVyKSB7XHJcbiAgICBlbnYgPSBmaXhJbXBvcnRzKGVudik7XHJcblxyXG4gICAgLy8gaW1wb3J0IHRhYmxlXHJcbiAgICBpZiAoIWVudlsndGFibGUnXSkge1xyXG4gICAgICB2YXIgVEFCTEVfU0laRSA9IE1vZHVsZVsnd2FzbVRhYmxlU2l6ZSddO1xyXG4gICAgICBpZiAoVEFCTEVfU0laRSA9PT0gdW5kZWZpbmVkKSBUQUJMRV9TSVpFID0gMTAyNDsgLy8gd29ya3MgaW4gYmluYXJ5ZW4gaW50ZXJwcmV0ZXIgYXQgbGVhc3RcclxuICAgICAgdmFyIE1BWF9UQUJMRV9TSVpFID0gTW9kdWxlWyd3YXNtTWF4VGFibGVTaXplJ107XHJcbiAgICAgIGlmICh0eXBlb2YgV2ViQXNzZW1ibHkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBXZWJBc3NlbWJseS5UYWJsZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlmIChNQVhfVEFCTEVfU0laRSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBlbnZbJ3RhYmxlJ10gPSBuZXcgV2ViQXNzZW1ibHkuVGFibGUoeyAnaW5pdGlhbCc6IFRBQkxFX1NJWkUsICdtYXhpbXVtJzogTUFYX1RBQkxFX1NJWkUsICdlbGVtZW50JzogJ2FueWZ1bmMnIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbnZbJ3RhYmxlJ10gPSBuZXcgV2ViQXNzZW1ibHkuVGFibGUoeyAnaW5pdGlhbCc6IFRBQkxFX1NJWkUsIGVsZW1lbnQ6ICdhbnlmdW5jJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW52Wyd0YWJsZSddID0gbmV3IEFycmF5KFRBQkxFX1NJWkUpOyAvLyB3b3JrcyBpbiBiaW5hcnllbiBpbnRlcnByZXRlciBhdCBsZWFzdFxyXG4gICAgICB9XHJcbiAgICAgIE1vZHVsZVsnd2FzbVRhYmxlJ10gPSBlbnZbJ3RhYmxlJ107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbnZbJ21lbW9yeUJhc2UnXSkge1xyXG4gICAgICBlbnZbJ21lbW9yeUJhc2UnXSA9IE1vZHVsZVsnU1RBVElDX0JBU0UnXTsgLy8gdGVsbCB0aGUgbWVtb3J5IHNlZ21lbnRzIHdoZXJlIHRvIHBsYWNlIHRoZW1zZWx2ZXNcclxuICAgIH1cclxuICAgIGlmICghZW52Wyd0YWJsZUJhc2UnXSkge1xyXG4gICAgICBlbnZbJ3RhYmxlQmFzZSddID0gMDsgLy8gdGFibGUgc3RhcnRzIGF0IDAgYnkgZGVmYXVsdCwgaW4gZHluYW1pYyBsaW5raW5nIHRoaXMgd2lsbCBjaGFuZ2VcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cnkgdGhlIG1ldGhvZHMuIGVhY2ggc2hvdWxkIHJldHVybiB0aGUgZXhwb3J0cyBpZiBpdCBzdWNjZWVkZWRcclxuXHJcbiAgICB2YXIgZXhwb3J0cztcclxuICAgIGV4cG9ydHMgPSBkb05hdGl2ZVdhc20oZ2xvYmFsLCBlbnYsIHByb3ZpZGVkQnVmZmVyKTtcclxuXHJcbiAgICBpZiAoIWV4cG9ydHMpIGFib3J0KCdubyBiaW5hcnllbiBtZXRob2Qgc3VjY2VlZGVkLiBjb25zaWRlciBlbmFibGluZyBtb3JlIG9wdGlvbnMsIGxpa2UgaW50ZXJwcmV0aW5nLCBpZiB5b3Ugd2FudCB0aGF0OiBodHRwczovL2dpdGh1Yi5jb20va3JpcGtlbi9lbXNjcmlwdGVuL3dpa2kvV2ViQXNzZW1ibHkjYmluYXJ5ZW4tbWV0aG9kcycpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cztcclxuICB9O1xyXG5cclxuICB2YXIgbWV0aG9kSGFuZGxlciA9IE1vZHVsZVsnYXNtJ107IC8vIG5vdGUgb3VyIG1ldGhvZCBoYW5kbGVyLCBhcyB3ZSBtYXkgbW9kaWZ5IE1vZHVsZVsnYXNtJ10gbGF0ZXJcclxufVxyXG5cclxuaW50ZWdyYXRlV2FzbUpTKCk7XHJcblxyXG4vLyA9PT0gQm9keSA9PT1cclxuXHJcbnZhciBBU01fQ09OU1RTID0gW107XHJcblxyXG5cclxuXHJcblxyXG5TVEFUSUNfQkFTRSA9IEdMT0JBTF9CQVNFO1xyXG5cclxuU1RBVElDVE9QID0gU1RBVElDX0JBU0UgKyA5ODg4O1xyXG4vKiBnbG9iYWwgaW5pdGlhbGl6ZXJzICovICBfX0FUSU5JVF9fLnB1c2goKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBTVEFUSUNfQlVNUCA9IDk4ODg7XHJcbk1vZHVsZVtcIlNUQVRJQ19CQVNFXCJdID0gU1RBVElDX0JBU0U7XHJcbk1vZHVsZVtcIlNUQVRJQ19CVU1QXCJdID0gU1RBVElDX0JVTVA7XHJcblxyXG4vKiBubyBtZW1vcnkgaW5pdGlhbGl6ZXIgKi9cclxudmFyIHRlbXBEb3VibGVQdHIgPSBTVEFUSUNUT1A7IFNUQVRJQ1RPUCArPSAxNjtcclxuXHJcbmFzc2VydCh0ZW1wRG91YmxlUHRyICUgOCA9PSAwKTtcclxuXHJcbmZ1bmN0aW9uIGNvcHlUZW1wRmxvYXQocHRyKSB7IC8vIGZ1bmN0aW9ucywgYmVjYXVzZSBpbmxpbmluZyB0aGlzIGNvZGUgaW5jcmVhc2VzIGNvZGUgc2l6ZSB0b28gbXVjaFxyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyXSA9IEhFQVA4W3B0cl07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrMV0gPSBIRUFQOFtwdHIrMV07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrMl0gPSBIRUFQOFtwdHIrMl07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrM10gPSBIRUFQOFtwdHIrM107XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VGVtcERvdWJsZShwdHIpIHtcclxuXHJcbiAgSEVBUDhbdGVtcERvdWJsZVB0cl0gPSBIRUFQOFtwdHJdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzFdID0gSEVBUDhbcHRyKzFdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzJdID0gSEVBUDhbcHRyKzJdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzNdID0gSEVBUDhbcHRyKzNdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzRdID0gSEVBUDhbcHRyKzRdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzVdID0gSEVBUDhbcHRyKzVdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzZdID0gSEVBUDhbcHRyKzZdO1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyKzddID0gSEVBUDhbcHRyKzddO1xyXG5cclxufVxyXG5cclxuLy8ge3tQUkVfTElCUkFSWX19XHJcblxyXG5cclxuICBmdW5jdGlvbiBfX19sb2NrKCkge31cclxuXHJcbiAgXHJcbiAgdmFyIFNZU0NBTExTPXt2YXJhcmdzOjAsZ2V0OmZ1bmN0aW9uICh2YXJhcmdzKSB7XHJcbiAgICAgICAgU1lTQ0FMTFMudmFyYXJncyArPSA0O1xyXG4gICAgICAgIHZhciByZXQgPSBIRUFQMzJbKCgoU1lTQ0FMTFMudmFyYXJncyktKDQpKT4+MildO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgIH0sZ2V0U3RyOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmV0ID0gUG9pbnRlcl9zdHJpbmdpZnkoU1lTQ0FMTFMuZ2V0KCkpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgIH0sZ2V0NjQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsb3cgPSBTWVNDQUxMUy5nZXQoKSwgaGlnaCA9IFNZU0NBTExTLmdldCgpO1xyXG4gICAgICAgIGlmIChsb3cgPj0gMCkgYXNzZXJ0KGhpZ2ggPT09IDApO1xyXG4gICAgICAgIGVsc2UgYXNzZXJ0KGhpZ2ggPT09IC0xKTtcclxuICAgICAgICByZXR1cm4gbG93O1xyXG4gICAgICB9LGdldFplcm86ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFzc2VydChTWVNDQUxMUy5nZXQoKSA9PT0gMCk7XHJcbiAgICAgIH19O2Z1bmN0aW9uIF9fX3N5c2NhbGwxNDAod2hpY2gsIHZhcmFyZ3MpIHtTWVNDQUxMUy52YXJhcmdzID0gdmFyYXJncztcclxuICB0cnkge1xyXG4gICAvLyBsbHNlZWtcclxuICAgICAgdmFyIHN0cmVhbSA9IFNZU0NBTExTLmdldFN0cmVhbUZyb21GRCgpLCBvZmZzZXRfaGlnaCA9IFNZU0NBTExTLmdldCgpLCBvZmZzZXRfbG93ID0gU1lTQ0FMTFMuZ2V0KCksIHJlc3VsdCA9IFNZU0NBTExTLmdldCgpLCB3aGVuY2UgPSBTWVNDQUxMUy5nZXQoKTtcclxuICAgICAgLy8gTk9URTogb2Zmc2V0X2hpZ2ggaXMgdW51c2VkIC0gRW1zY3JpcHRlbidzIG9mZl90IGlzIDMyLWJpdFxyXG4gICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0X2xvdztcclxuICAgICAgRlMubGxzZWVrKHN0cmVhbSwgb2Zmc2V0LCB3aGVuY2UpO1xyXG4gICAgICBIRUFQMzJbKChyZXN1bHQpPj4yKV09c3RyZWFtLnBvc2l0aW9uO1xyXG4gICAgICBpZiAoc3RyZWFtLmdldGRlbnRzICYmIG9mZnNldCA9PT0gMCAmJiB3aGVuY2UgPT09IDApIHN0cmVhbS5nZXRkZW50cyA9IG51bGw7IC8vIHJlc2V0IHJlYWRkaXIgc3RhdGVcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAodHlwZW9mIEZTID09PSAndW5kZWZpbmVkJyB8fCAhKGUgaW5zdGFuY2VvZiBGUy5FcnJub0Vycm9yKSkgYWJvcnQoZSk7XHJcbiAgICByZXR1cm4gLWUuZXJybm87XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gZmx1c2hfTk9fRklMRVNZU1RFTSgpIHtcclxuICAgICAgLy8gZmx1c2ggYW55dGhpbmcgcmVtYWluaW5nIGluIHRoZSBidWZmZXJzIGR1cmluZyBzaHV0ZG93blxyXG4gICAgICB2YXIgZmZsdXNoID0gTW9kdWxlW1wiX2ZmbHVzaFwiXTtcclxuICAgICAgaWYgKGZmbHVzaCkgZmZsdXNoKDApO1xyXG4gICAgICB2YXIgcHJpbnRDaGFyID0gX19fc3lzY2FsbDE0Ni5wcmludENoYXI7XHJcbiAgICAgIGlmICghcHJpbnRDaGFyKSByZXR1cm47XHJcbiAgICAgIHZhciBidWZmZXJzID0gX19fc3lzY2FsbDE0Ni5idWZmZXJzO1xyXG4gICAgICBpZiAoYnVmZmVyc1sxXS5sZW5ndGgpIHByaW50Q2hhcigxLCAxMCk7XHJcbiAgICAgIGlmIChidWZmZXJzWzJdLmxlbmd0aCkgcHJpbnRDaGFyKDIsIDEwKTtcclxuICAgIH1mdW5jdGlvbiBfX19zeXNjYWxsMTQ2KHdoaWNoLCB2YXJhcmdzKSB7U1lTQ0FMTFMudmFyYXJncyA9IHZhcmFyZ3M7XHJcbiAgdHJ5IHtcclxuICAgLy8gd3JpdGV2XHJcbiAgICAgIC8vIGhhY2sgdG8gc3VwcG9ydCBwcmludGYgaW4gTk9fRklMRVNZU1RFTVxyXG4gICAgICB2YXIgc3RyZWFtID0gU1lTQ0FMTFMuZ2V0KCksIGlvdiA9IFNZU0NBTExTLmdldCgpLCBpb3ZjbnQgPSBTWVNDQUxMUy5nZXQoKTtcclxuICAgICAgdmFyIHJldCA9IDA7XHJcbiAgICAgIGlmICghX19fc3lzY2FsbDE0Ni5idWZmZXJzKSB7XHJcbiAgICAgICAgX19fc3lzY2FsbDE0Ni5idWZmZXJzID0gW251bGwsIFtdLCBbXV07IC8vIDEgPT4gc3Rkb3V0LCAyID0+IHN0ZGVyclxyXG4gICAgICAgIF9fX3N5c2NhbGwxNDYucHJpbnRDaGFyID0gZnVuY3Rpb24oc3RyZWFtLCBjdXJyKSB7XHJcbiAgICAgICAgICB2YXIgYnVmZmVyID0gX19fc3lzY2FsbDE0Ni5idWZmZXJzW3N0cmVhbV07XHJcbiAgICAgICAgICBhc3NlcnQoYnVmZmVyKTtcclxuICAgICAgICAgIGlmIChjdXJyID09PSAwIHx8IGN1cnIgPT09IDEwKSB7XHJcbiAgICAgICAgICAgIChzdHJlYW0gPT09IDEgPyBNb2R1bGVbJ3ByaW50J10gOiBNb2R1bGVbJ3ByaW50RXJyJ10pKFVURjhBcnJheVRvU3RyaW5nKGJ1ZmZlciwgMCkpO1xyXG4gICAgICAgICAgICBidWZmZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGN1cnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpb3ZjbnQ7IGkrKykge1xyXG4gICAgICAgIHZhciBwdHIgPSBIRUFQMzJbKCgoaW92KSsoaSo4KSk+PjIpXTtcclxuICAgICAgICB2YXIgbGVuID0gSEVBUDMyWygoKGlvdikrKGkqOCArIDQpKT4+MildO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyBqKyspIHtcclxuICAgICAgICAgIF9fX3N5c2NhbGwxNDYucHJpbnRDaGFyKHN0cmVhbSwgSEVBUFU4W3B0citqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldCArPSBsZW47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmICh0eXBlb2YgRlMgPT09ICd1bmRlZmluZWQnIHx8ICEoZSBpbnN0YW5jZW9mIEZTLkVycm5vRXJyb3IpKSBhYm9ydChlKTtcclxuICAgIHJldHVybiAtZS5lcnJubztcclxuICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfX19zeXNjYWxsNTQod2hpY2gsIHZhcmFyZ3MpIHtTWVNDQUxMUy52YXJhcmdzID0gdmFyYXJncztcclxuICB0cnkge1xyXG4gICAvLyBpb2N0bFxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmICh0eXBlb2YgRlMgPT09ICd1bmRlZmluZWQnIHx8ICEoZSBpbnN0YW5jZW9mIEZTLkVycm5vRXJyb3IpKSBhYm9ydChlKTtcclxuICAgIHJldHVybiAtZS5lcnJubztcclxuICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfX19zeXNjYWxsNih3aGljaCwgdmFyYXJncykge1NZU0NBTExTLnZhcmFyZ3MgPSB2YXJhcmdzO1xyXG4gIHRyeSB7XHJcbiAgIC8vIGNsb3NlXHJcbiAgICAgIHZhciBzdHJlYW0gPSBTWVNDQUxMUy5nZXRTdHJlYW1Gcm9tRkQoKTtcclxuICAgICAgRlMuY2xvc2Uoc3RyZWFtKTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAodHlwZW9mIEZTID09PSAndW5kZWZpbmVkJyB8fCAhKGUgaW5zdGFuY2VvZiBGUy5FcnJub0Vycm9yKSkgYWJvcnQoZSk7XHJcbiAgICByZXR1cm4gLWUuZXJybm87XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX19fdW5sb2NrKCkge31cclxuXHJcbiAgZnVuY3Rpb24gX2Vtc2NyaXB0ZW5faGFzX3RocmVhZGluZ19zdXBwb3J0KCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICBcclxuICB2YXIgY3R0el9pOCA9IGFsbG9jYXRlKFs4LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNSwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw0LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDYsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNCwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw1LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNywwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw0LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDUsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNCwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw2LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNSwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw0LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwXSwgXCJpOFwiLCBBTExPQ19TVEFUSUMpO2Z1bmN0aW9uIF9sbHZtX2N0dHpfaTMyKHgpIHtcclxuICAgICAgeCA9IHh8MDtcclxuICAgICAgdmFyIHJldCA9IDA7XHJcbiAgICAgIHJldCA9ICgoSEVBUDhbKCgoY3R0el9pOCkrKHggJiAweGZmKSk+PjApXSl8MCk7XHJcbiAgICAgIGlmICgocmV0fDApIDwgOCkgcmV0dXJuIHJldHwwO1xyXG4gICAgICByZXQgPSAoKEhFQVA4WygoKGN0dHpfaTgpKygoeCA+PiA4KSYweGZmKSk+PjApXSl8MCk7XHJcbiAgICAgIGlmICgocmV0fDApIDwgOCkgcmV0dXJuIChyZXQgKyA4KXwwO1xyXG4gICAgICByZXQgPSAoKEhFQVA4WygoKGN0dHpfaTgpKygoeCA+PiAxNikmMHhmZikpPj4wKV0pfDApO1xyXG4gICAgICBpZiAoKHJldHwwKSA8IDgpIHJldHVybiAocmV0ICsgMTYpfDA7XHJcbiAgICAgIHJldHVybiAoKChIRUFQOFsoKChjdHR6X2k4KSsoeCA+Pj4gMjQpKT4+MCldKXwwKSArIDI0KXwwO1xyXG4gICAgfWZ1bmN0aW9uIF9sbHZtX2N0dHpfaTY0KGwsIGgpIHtcclxuICAgICAgdmFyIHJldCA9IF9sbHZtX2N0dHpfaTMyKGwpO1xyXG4gICAgICBpZiAocmV0ID09IDMyKSByZXQgKz0gX2xsdm1fY3R0el9pMzIoaCk7XHJcbiAgICAgIHJldHVybiAoKHNldFRlbXBSZXQwKDApLHJldCl8MCk7XHJcbiAgICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9sbHZtX3N0YWNrcmVzdG9yZShwKSB7XHJcbiAgICAgIHZhciBzZWxmID0gX2xsdm1fc3RhY2tzYXZlO1xyXG4gICAgICB2YXIgcmV0ID0gc2VsZi5MTFZNX1NBVkVEU1RBQ0tTW3BdO1xyXG4gICAgICBzZWxmLkxMVk1fU0FWRURTVEFDS1Muc3BsaWNlKHAsIDEpO1xyXG4gICAgICBzdGFja1Jlc3RvcmUocmV0KTtcclxuICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gX2xsdm1fc3RhY2tzYXZlKCkge1xyXG4gICAgICB2YXIgc2VsZiA9IF9sbHZtX3N0YWNrc2F2ZTtcclxuICAgICAgaWYgKCFzZWxmLkxMVk1fU0FWRURTVEFDS1MpIHtcclxuICAgICAgICBzZWxmLkxMVk1fU0FWRURTVEFDS1MgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLkxMVk1fU0FWRURTVEFDS1MucHVzaChzdGFja1NhdmUoKSk7XHJcbiAgICAgIHJldHVybiBzZWxmLkxMVk1fU0FWRURTVEFDS1MubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCwgc3JjLCBudW0pIHtcclxuICAgICAgSEVBUFU4LnNldChIRUFQVTguc3ViYXJyYXkoc3JjLCBzcmMrbnVtKSwgZGVzdCk7XHJcbiAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfSBcclxuXHJcbiAgIFxyXG5cclxuICBmdW5jdGlvbiBfcHRocmVhZF9jcmVhdGUoKSB7XHJcbiAgICAgIHJldHVybiAxMTtcclxuICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gX3B0aHJlYWRfam9pbigpIHt9XHJcblxyXG4gIGZ1bmN0aW9uIF9wdGhyZWFkX211dGV4X2luaXQoKSB7fVxyXG5cclxuICAgXHJcblxyXG4gICBcclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gX19fc2V0RXJyTm8odmFsdWUpIHtcclxuICAgICAgaWYgKE1vZHVsZVsnX19fZXJybm9fbG9jYXRpb24nXSkgSEVBUDMyWygoTW9kdWxlWydfX19lcnJub19sb2NhdGlvbiddKCkpPj4yKV09dmFsdWU7XHJcbiAgICAgIGVsc2UgTW9kdWxlLnByaW50RXJyKCdmYWlsZWQgdG8gc2V0IGVycm5vIGZyb20gSlMnKTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSBcclxuXHJcbiAgXHJcbiAgdmFyIEVSUk5PX0NPREVTPXtFUEVSTToxLEVOT0VOVDoyLEVTUkNIOjMsRUlOVFI6NCxFSU86NSxFTlhJTzo2LEUyQklHOjcsRU5PRVhFQzo4LEVCQURGOjksRUNISUxEOjEwLEVBR0FJTjoxMSxFV09VTERCTE9DSzoxMSxFTk9NRU06MTIsRUFDQ0VTOjEzLEVGQVVMVDoxNCxFTk9UQkxLOjE1LEVCVVNZOjE2LEVFWElTVDoxNyxFWERFVjoxOCxFTk9ERVY6MTksRU5PVERJUjoyMCxFSVNESVI6MjEsRUlOVkFMOjIyLEVORklMRToyMyxFTUZJTEU6MjQsRU5PVFRZOjI1LEVUWFRCU1k6MjYsRUZCSUc6MjcsRU5PU1BDOjI4LEVTUElQRToyOSxFUk9GUzozMCxFTUxJTks6MzEsRVBJUEU6MzIsRURPTTozMyxFUkFOR0U6MzQsRU5PTVNHOjQyLEVJRFJNOjQzLEVDSFJORzo0NCxFTDJOU1lOQzo0NSxFTDNITFQ6NDYsRUwzUlNUOjQ3LEVMTlJORzo0OCxFVU5BVENIOjQ5LEVOT0NTSTo1MCxFTDJITFQ6NTEsRURFQURMSzozNSxFTk9MQ0s6MzcsRUJBREU6NTIsRUJBRFI6NTMsRVhGVUxMOjU0LEVOT0FOTzo1NSxFQkFEUlFDOjU2LEVCQURTTFQ6NTcsRURFQURMT0NLOjM1LEVCRk9OVDo1OSxFTk9TVFI6NjAsRU5PREFUQTo2MSxFVElNRTo2MixFTk9TUjo2MyxFTk9ORVQ6NjQsRU5PUEtHOjY1LEVSRU1PVEU6NjYsRU5PTElOSzo2NyxFQURWOjY4LEVTUk1OVDo2OSxFQ09NTTo3MCxFUFJPVE86NzEsRU1VTFRJSE9QOjcyLEVET1RET1Q6NzMsRUJBRE1TRzo3NCxFTk9UVU5JUTo3NixFQkFERkQ6NzcsRVJFTUNIRzo3OCxFTElCQUNDOjc5LEVMSUJCQUQ6ODAsRUxJQlNDTjo4MSxFTElCTUFYOjgyLEVMSUJFWEVDOjgzLEVOT1NZUzozOCxFTk9URU1QVFk6MzksRU5BTUVUT09MT05HOjM2LEVMT09QOjQwLEVPUE5PVFNVUFA6OTUsRVBGTk9TVVBQT1JUOjk2LEVDT05OUkVTRVQ6MTA0LEVOT0JVRlM6MTA1LEVBRk5PU1VQUE9SVDo5NyxFUFJPVE9UWVBFOjkxLEVOT1RTT0NLOjg4LEVOT1BST1RPT1BUOjkyLEVTSFVURE9XTjoxMDgsRUNPTk5SRUZVU0VEOjExMSxFQUREUklOVVNFOjk4LEVDT05OQUJPUlRFRDoxMDMsRU5FVFVOUkVBQ0g6MTAxLEVORVRET1dOOjEwMCxFVElNRURPVVQ6MTEwLEVIT1NURE9XTjoxMTIsRUhPU1RVTlJFQUNIOjExMyxFSU5QUk9HUkVTUzoxMTUsRUFMUkVBRFk6MTE0LEVERVNUQUREUlJFUTo4OSxFTVNHU0laRTo5MCxFUFJPVE9OT1NVUFBPUlQ6OTMsRVNPQ0tUTk9TVVBQT1JUOjk0LEVBRERSTk9UQVZBSUw6OTksRU5FVFJFU0VUOjEwMixFSVNDT05OOjEwNixFTk9UQ09OTjoxMDcsRVRPT01BTllSRUZTOjEwOSxFVVNFUlM6ODcsRURRVU9UOjEyMixFU1RBTEU6MTE2LEVOT1RTVVA6OTUsRU5PTUVESVVNOjEyMyxFSUxTRVE6ODQsRU9WRVJGTE9XOjc1LEVDQU5DRUxFRDoxMjUsRU5PVFJFQ09WRVJBQkxFOjEzMSxFT1dORVJERUFEOjEzMCxFU1RSUElQRTo4Nn07ZnVuY3Rpb24gX3N5c2NvbmYobmFtZSkge1xyXG4gICAgICAvLyBsb25nIHN5c2NvbmYoaW50IG5hbWUpO1xyXG4gICAgICAvLyBodHRwOi8vcHVicy5vcGVuZ3JvdXAub3JnL29ubGluZXB1YnMvMDA5Njk1Mzk5L2Z1bmN0aW9ucy9zeXNjb25mLmh0bWxcclxuICAgICAgc3dpdGNoKG5hbWUpIHtcclxuICAgICAgICBjYXNlIDMwOiByZXR1cm4gUEFHRV9TSVpFO1xyXG4gICAgICAgIGNhc2UgODU6XHJcbiAgICAgICAgICB2YXIgbWF4SGVhcFNpemUgPSAyKjEwMjQqMTAyNCoxMDI0IC0gNjU1MzY7XHJcbiAgICAgICAgICBtYXhIZWFwU2l6ZSA9IEhFQVBVOC5sZW5ndGg7XHJcbiAgICAgICAgICByZXR1cm4gbWF4SGVhcFNpemUgLyBQQUdFX1NJWkU7XHJcbiAgICAgICAgY2FzZSAxMzI6XHJcbiAgICAgICAgY2FzZSAxMzM6XHJcbiAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICBjYXNlIDEzNzpcclxuICAgICAgICBjYXNlIDEzODpcclxuICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgIGNhc2UgMjM1OlxyXG4gICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgIGNhc2UgMTk6XHJcbiAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICBjYXNlIDE0OTpcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgY2FzZSAyMzY6XHJcbiAgICAgICAgY2FzZSAxNTM6XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgY2FzZSAyMjpcclxuICAgICAgICBjYXNlIDE1OTpcclxuICAgICAgICBjYXNlIDE1NDpcclxuICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgIGNhc2UgNzc6XHJcbiAgICAgICAgY2FzZSA3ODpcclxuICAgICAgICBjYXNlIDEzOTpcclxuICAgICAgICBjYXNlIDgwOlxyXG4gICAgICAgIGNhc2UgODE6XHJcbiAgICAgICAgY2FzZSA4MjpcclxuICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgIGNhc2UgNjc6XHJcbiAgICAgICAgY2FzZSAxNjQ6XHJcbiAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICBjYXNlIDI5OlxyXG4gICAgICAgIGNhc2UgNDc6XHJcbiAgICAgICAgY2FzZSA0ODpcclxuICAgICAgICBjYXNlIDk1OlxyXG4gICAgICAgIGNhc2UgNTI6XHJcbiAgICAgICAgY2FzZSA1MTpcclxuICAgICAgICBjYXNlIDQ2OlxyXG4gICAgICAgICAgcmV0dXJuIDIwMDgwOTtcclxuICAgICAgICBjYXNlIDc5OlxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICBjYXNlIDI0NjpcclxuICAgICAgICBjYXNlIDEyNzpcclxuICAgICAgICBjYXNlIDEyODpcclxuICAgICAgICBjYXNlIDIzOlxyXG4gICAgICAgIGNhc2UgMjQ6XHJcbiAgICAgICAgY2FzZSAxNjA6XHJcbiAgICAgICAgY2FzZSAxNjE6XHJcbiAgICAgICAgY2FzZSAxODE6XHJcbiAgICAgICAgY2FzZSAxODI6XHJcbiAgICAgICAgY2FzZSAyNDI6XHJcbiAgICAgICAgY2FzZSAxODM6XHJcbiAgICAgICAgY2FzZSAxODQ6XHJcbiAgICAgICAgY2FzZSAyNDM6XHJcbiAgICAgICAgY2FzZSAyNDQ6XHJcbiAgICAgICAgY2FzZSAyNDU6XHJcbiAgICAgICAgY2FzZSAxNjU6XHJcbiAgICAgICAgY2FzZSAxNzg6XHJcbiAgICAgICAgY2FzZSAxNzk6XHJcbiAgICAgICAgY2FzZSA0OTpcclxuICAgICAgICBjYXNlIDUwOlxyXG4gICAgICAgIGNhc2UgMTY4OlxyXG4gICAgICAgIGNhc2UgMTY5OlxyXG4gICAgICAgIGNhc2UgMTc1OlxyXG4gICAgICAgIGNhc2UgMTcwOlxyXG4gICAgICAgIGNhc2UgMTcxOlxyXG4gICAgICAgIGNhc2UgMTcyOlxyXG4gICAgICAgIGNhc2UgOTc6XHJcbiAgICAgICAgY2FzZSA3NjpcclxuICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgIGNhc2UgMTczOlxyXG4gICAgICAgIGNhc2UgMzU6XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgY2FzZSAxNzY6XHJcbiAgICAgICAgY2FzZSAxNzc6XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgIGNhc2UgMTU1OlxyXG4gICAgICAgIGNhc2UgODpcclxuICAgICAgICBjYXNlIDE1NzpcclxuICAgICAgICBjYXNlIDEyNTpcclxuICAgICAgICBjYXNlIDEyNjpcclxuICAgICAgICBjYXNlIDkyOlxyXG4gICAgICAgIGNhc2UgOTM6XHJcbiAgICAgICAgY2FzZSAxMjk6XHJcbiAgICAgICAgY2FzZSAxMzA6XHJcbiAgICAgICAgY2FzZSAxMzE6XHJcbiAgICAgICAgY2FzZSA5NDpcclxuICAgICAgICBjYXNlIDkxOlxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgY2FzZSA3NDpcclxuICAgICAgICBjYXNlIDYwOlxyXG4gICAgICAgIGNhc2UgNjk6XHJcbiAgICAgICAgY2FzZSA3MDpcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4gMTAyNDtcclxuICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgIGNhc2UgNDI6XHJcbiAgICAgICAgY2FzZSA3MjpcclxuICAgICAgICAgIHJldHVybiAzMjtcclxuICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgIGNhc2UgMjY6XHJcbiAgICAgICAgY2FzZSAzMzpcclxuICAgICAgICAgIHJldHVybiAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGNhc2UgMzQ6XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgcmV0dXJuIDQ3ODM5O1xyXG4gICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgY2FzZSAzNjpcclxuICAgICAgICAgIHJldHVybiA5OTtcclxuICAgICAgICBjYXNlIDQzOlxyXG4gICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICByZXR1cm4gMjA0ODtcclxuICAgICAgICBjYXNlIDA6IHJldHVybiAyMDk3MTUyO1xyXG4gICAgICAgIGNhc2UgMzogcmV0dXJuIDY1NTM2O1xyXG4gICAgICAgIGNhc2UgMjg6IHJldHVybiAzMjc2ODtcclxuICAgICAgICBjYXNlIDQ0OiByZXR1cm4gMzI3Njc7XHJcbiAgICAgICAgY2FzZSA3NTogcmV0dXJuIDE2Mzg0O1xyXG4gICAgICAgIGNhc2UgMzk6IHJldHVybiAxMDAwO1xyXG4gICAgICAgIGNhc2UgODk6IHJldHVybiA3MDA7XHJcbiAgICAgICAgY2FzZSA3MTogcmV0dXJuIDI1NjtcclxuICAgICAgICBjYXNlIDQwOiByZXR1cm4gMjU1O1xyXG4gICAgICAgIGNhc2UgMjogcmV0dXJuIDEwMDtcclxuICAgICAgICBjYXNlIDE4MDogcmV0dXJuIDY0O1xyXG4gICAgICAgIGNhc2UgMjU6IHJldHVybiAyMDtcclxuICAgICAgICBjYXNlIDU6IHJldHVybiAxNjtcclxuICAgICAgICBjYXNlIDY6IHJldHVybiA2O1xyXG4gICAgICAgIGNhc2UgNzM6IHJldHVybiA0O1xyXG4gICAgICAgIGNhc2UgODQ6IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JykgcmV0dXJuIG5hdmlnYXRvclsnaGFyZHdhcmVDb25jdXJyZW5jeSddIHx8IDE7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgX19fc2V0RXJyTm8oRVJSTk9fQ09ERVMuRUlOVkFMKTtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5EWU5BTUlDVE9QX1BUUiA9IHN0YXRpY0FsbG9jKDQpO1xyXG5cclxuU1RBQ0tfQkFTRSA9IFNUQUNLVE9QID0gYWxpZ25NZW1vcnkoU1RBVElDVE9QKTtcclxuXHJcblNUQUNLX01BWCA9IFNUQUNLX0JBU0UgKyBUT1RBTF9TVEFDSztcclxuXHJcbkRZTkFNSUNfQkFTRSA9IGFsaWduTWVtb3J5KFNUQUNLX01BWCk7XHJcblxyXG5IRUFQMzJbRFlOQU1JQ1RPUF9QVFI+PjJdID0gRFlOQU1JQ19CQVNFO1xyXG5cclxuc3RhdGljU2VhbGVkID0gdHJ1ZTsgLy8gc2VhbCB0aGUgc3RhdGljIHBvcnRpb24gb2YgbWVtb3J5XHJcblxyXG5hc3NlcnQoRFlOQU1JQ19CQVNFIDwgVE9UQUxfTUVNT1JZLCBcIlRPVEFMX01FTU9SWSBub3QgYmlnIGVub3VnaCBmb3Igc3RhY2tcIik7XHJcblxyXG52YXIgQVNTRVJUSU9OUyA9IHRydWU7XHJcblxyXG4vKiogQHR5cGUge2Z1bmN0aW9uKHN0cmluZywgYm9vbGVhbj0sIG51bWJlcj0pfSAqL1xyXG5mdW5jdGlvbiBpbnRBcnJheUZyb21TdHJpbmcoc3RyaW5neSwgZG9udEFkZE51bGwsIGxlbmd0aCkge1xyXG4gIHZhciBsZW4gPSBsZW5ndGggPiAwID8gbGVuZ3RoIDogbGVuZ3RoQnl0ZXNVVEY4KHN0cmluZ3kpKzE7XHJcbiAgdmFyIHU4YXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcclxuICB2YXIgbnVtQnl0ZXNXcml0dGVuID0gc3RyaW5nVG9VVEY4QXJyYXkoc3RyaW5neSwgdThhcnJheSwgMCwgdThhcnJheS5sZW5ndGgpO1xyXG4gIGlmIChkb250QWRkTnVsbCkgdThhcnJheS5sZW5ndGggPSBudW1CeXRlc1dyaXR0ZW47XHJcbiAgcmV0dXJuIHU4YXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludEFycmF5VG9TdHJpbmcoYXJyYXkpIHtcclxuICB2YXIgcmV0ID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGNociA9IGFycmF5W2ldO1xyXG4gICAgaWYgKGNociA+IDB4RkYpIHtcclxuICAgICAgaWYgKEFTU0VSVElPTlMpIHtcclxuICAgICAgICBhc3NlcnQoZmFsc2UsICdDaGFyYWN0ZXIgY29kZSAnICsgY2hyICsgJyAoJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKSArICcpICBhdCBvZmZzZXQgJyArIGkgKyAnIG5vdCBpbiAweDAwLTB4RkYuJyk7XHJcbiAgICAgIH1cclxuICAgICAgY2hyICY9IDB4RkY7XHJcbiAgICB9XHJcbiAgICByZXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocikpO1xyXG4gIH1cclxuICByZXR1cm4gcmV0LmpvaW4oJycpO1xyXG59XHJcblxyXG5cclxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3N0cm9waGUvc3Ryb3BoZWpzL2Jsb2IvZTA2ZDAyNy9zcmMvcG9seWZpbGxzLmpzI0wxNDlcclxuXHJcbi8vIFRoaXMgY29kZSB3YXMgd3JpdHRlbiBieSBUeWxlciBBa2lucyBhbmQgaGFzIGJlZW4gcGxhY2VkIGluIHRoZVxyXG4vLyBwdWJsaWMgZG9tYWluLiAgSXQgd291bGQgYmUgbmljZSBpZiB5b3UgbGVmdCB0aGlzIGhlYWRlciBpbnRhY3QuXHJcbi8vIEJhc2U2NCBjb2RlIGZyb20gVHlsZXIgQWtpbnMgLS0gaHR0cDovL3J1bWtpbi5jb21cclxuXHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgYmFzZTY0IHN0cmluZy5cclxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdG8gZGVjb2RlLlxyXG4gKi9cclxudmFyIGRlY29kZUJhc2U2NCA9IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nID8gYXRvYiA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gIHZhciBrZXlTdHIgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG5cclxuICB2YXIgb3V0cHV0ID0gJyc7XHJcbiAgdmFyIGNocjEsIGNocjIsIGNocjM7XHJcbiAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcbiAgdmFyIGkgPSAwO1xyXG4gIC8vIHJlbW92ZSBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgQS1aLCBhLXosIDAtOSwgKywgLywgb3IgPVxyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csICcnKTtcclxuICBkbyB7XHJcbiAgICBlbmMxID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgZW5jMiA9IGtleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgIGVuYzMgPSBrZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICBlbmM0ID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cclxuICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xyXG4gICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG4gICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcclxuXHJcbiAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xyXG5cclxuICAgIGlmIChlbmMzICE9PSA2NCkge1xyXG4gICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYzQgIT09IDY0KSB7XHJcbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCk7XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufTtcclxuXHJcbi8vIENvbnZlcnRzIGEgc3RyaW5nIG9mIGJhc2U2NCBpbnRvIGEgYnl0ZSBhcnJheS5cclxuLy8gVGhyb3dzIGVycm9yIG9uIGludmFsaWQgaW5wdXQuXHJcbmZ1bmN0aW9uIGludEFycmF5RnJvbUJhc2U2NChzKSB7XHJcbiAgaWYgKHR5cGVvZiBFTlZJUk9OTUVOVF9JU19OT0RFID09PSAnYm9vbGVhbicgJiYgRU5WSVJPTk1FTlRfSVNfTk9ERSkge1xyXG4gICAgdmFyIGJ1ZjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGJ1ZiA9IEJ1ZmZlci5mcm9tKHMsICdiYXNlNjQnKTtcclxuICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgYnVmID0gbmV3IEJ1ZmZlcihzLCAnYmFzZTY0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB2YXIgZGVjb2RlZCA9IGRlY29kZUJhc2U2NChzKTtcclxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRlY29kZWQubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IGRlY29kZWQubGVuZ3RoIDsgKytpKSB7XHJcbiAgICAgIGJ5dGVzW2ldID0gZGVjb2RlZC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ5dGVzO1xyXG4gIH0gY2F0Y2ggKF8pIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ29udmVydGluZyBiYXNlNjQgc3RyaW5nIHRvIGJ5dGVzIGZhaWxlZC4nKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIElmIGZpbGVuYW1lIGlzIGEgYmFzZTY0IGRhdGEgVVJJLCBwYXJzZXMgYW5kIHJldHVybnMgZGF0YSAoQnVmZmVyIG9uIG5vZGUsXHJcbi8vIFVpbnQ4QXJyYXkgb3RoZXJ3aXNlKS4gSWYgZmlsZW5hbWUgaXMgbm90IGEgYmFzZTY0IGRhdGEgVVJJLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gdHJ5UGFyc2VBc0RhdGFVUkkoZmlsZW5hbWUpIHtcclxuICBpZiAoIWlzRGF0YVVSSShmaWxlbmFtZSkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnRBcnJheUZyb21CYXNlNjQoZmlsZW5hbWUuc2xpY2UoZGF0YVVSSVByZWZpeC5sZW5ndGgpKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBudWxsRnVuY19paSh4KSB7IE1vZHVsZVtcInByaW50RXJyXCJdKFwiSW52YWxpZCBmdW5jdGlvbiBwb2ludGVyIGNhbGxlZCB3aXRoIHNpZ25hdHVyZSAnaWknLiBQZXJoYXBzIHRoaXMgaXMgYW4gaW52YWxpZCB2YWx1ZSAoZS5nLiBjYXVzZWQgYnkgY2FsbGluZyBhIHZpcnR1YWwgbWV0aG9kIG9uIGEgTlVMTCBwb2ludGVyKT8gT3IgY2FsbGluZyBhIGZ1bmN0aW9uIHdpdGggYW4gaW5jb3JyZWN0IHR5cGUsIHdoaWNoIHdpbGwgZmFpbD8gKGl0IGlzIHdvcnRoIGJ1aWxkaW5nIHlvdXIgc291cmNlIGZpbGVzIHdpdGggLVdlcnJvciAod2FybmluZ3MgYXJlIGVycm9ycyksIGFzIHdhcm5pbmdzIGNhbiBpbmRpY2F0ZSB1bmRlZmluZWQgYmVoYXZpb3Igd2hpY2ggY2FuIGNhdXNlIHRoaXMpXCIpOyAgTW9kdWxlW1wicHJpbnRFcnJcIl0oXCJCdWlsZCB3aXRoIEFTU0VSVElPTlM9MiBmb3IgbW9yZSBpbmZvLlwiKTthYm9ydCh4KSB9XHJcblxyXG5mdW5jdGlvbiBudWxsRnVuY19paWlpKHgpIHsgTW9kdWxlW1wicHJpbnRFcnJcIl0oXCJJbnZhbGlkIGZ1bmN0aW9uIHBvaW50ZXIgY2FsbGVkIHdpdGggc2lnbmF0dXJlICdpaWlpJy4gUGVyaGFwcyB0aGlzIGlzIGFuIGludmFsaWQgdmFsdWUgKGUuZy4gY2F1c2VkIGJ5IGNhbGxpbmcgYSB2aXJ0dWFsIG1ldGhvZCBvbiBhIE5VTEwgcG9pbnRlcik/IE9yIGNhbGxpbmcgYSBmdW5jdGlvbiB3aXRoIGFuIGluY29ycmVjdCB0eXBlLCB3aGljaCB3aWxsIGZhaWw/IChpdCBpcyB3b3J0aCBidWlsZGluZyB5b3VyIHNvdXJjZSBmaWxlcyB3aXRoIC1XZXJyb3IgKHdhcm5pbmdzIGFyZSBlcnJvcnMpLCBhcyB3YXJuaW5ncyBjYW4gaW5kaWNhdGUgdW5kZWZpbmVkIGJlaGF2aW9yIHdoaWNoIGNhbiBjYXVzZSB0aGlzKVwiKTsgIE1vZHVsZVtcInByaW50RXJyXCJdKFwiQnVpbGQgd2l0aCBBU1NFUlRJT05TPTIgZm9yIG1vcmUgaW5mby5cIik7YWJvcnQoeCkgfVxyXG5cclxuTW9kdWxlWyd3YXNtVGFibGVTaXplJ10gPSAxNjtcclxuXHJcbk1vZHVsZVsnd2FzbU1heFRhYmxlU2l6ZSddID0gMTY7XHJcblxyXG5mdW5jdGlvbiBpbnZva2VfaWkoaW5kZXgsYTEpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIE1vZHVsZVtcImR5bkNhbGxfaWlcIl0oaW5kZXgsYTEpO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSAnbnVtYmVyJyAmJiBlICE9PSAnbG9uZ2ptcCcpIHRocm93IGU7XHJcbiAgICBNb2R1bGVbXCJzZXRUaHJld1wiXSgxLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZV9paWlpKGluZGV4LGExLGEyLGEzKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBNb2R1bGVbXCJkeW5DYWxsX2lpaWlcIl0oaW5kZXgsYTEsYTIsYTMpO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgaWYgKHR5cGVvZiBlICE9PSAnbnVtYmVyJyAmJiBlICE9PSAnbG9uZ2ptcCcpIHRocm93IGU7XHJcbiAgICBNb2R1bGVbXCJzZXRUaHJld1wiXSgxLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbk1vZHVsZS5hc21HbG9iYWxBcmcgPSB7fTtcclxuXHJcbk1vZHVsZS5hc21MaWJyYXJ5QXJnID0geyBcImFib3J0XCI6IGFib3J0LCBcImFzc2VydFwiOiBhc3NlcnQsIFwiZW5sYXJnZU1lbW9yeVwiOiBlbmxhcmdlTWVtb3J5LCBcImdldFRvdGFsTWVtb3J5XCI6IGdldFRvdGFsTWVtb3J5LCBcImFib3J0T25DYW5ub3RHcm93TWVtb3J5XCI6IGFib3J0T25DYW5ub3RHcm93TWVtb3J5LCBcImFib3J0U3RhY2tPdmVyZmxvd1wiOiBhYm9ydFN0YWNrT3ZlcmZsb3csIFwibnVsbEZ1bmNfaWlcIjogbnVsbEZ1bmNfaWksIFwibnVsbEZ1bmNfaWlpaVwiOiBudWxsRnVuY19paWlpLCBcImludm9rZV9paVwiOiBpbnZva2VfaWksIFwiaW52b2tlX2lpaWlcIjogaW52b2tlX2lpaWksIFwiX19fbG9ja1wiOiBfX19sb2NrLCBcIl9fX3NldEVyck5vXCI6IF9fX3NldEVyck5vLCBcIl9fX3N5c2NhbGwxNDBcIjogX19fc3lzY2FsbDE0MCwgXCJfX19zeXNjYWxsMTQ2XCI6IF9fX3N5c2NhbGwxNDYsIFwiX19fc3lzY2FsbDU0XCI6IF9fX3N5c2NhbGw1NCwgXCJfX19zeXNjYWxsNlwiOiBfX19zeXNjYWxsNiwgXCJfX191bmxvY2tcIjogX19fdW5sb2NrLCBcIl9lbXNjcmlwdGVuX2hhc190aHJlYWRpbmdfc3VwcG9ydFwiOiBfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQsIFwiX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZ1wiOiBfZW1zY3JpcHRlbl9tZW1jcHlfYmlnLCBcIl9sbHZtX2N0dHpfaTMyXCI6IF9sbHZtX2N0dHpfaTMyLCBcIl9sbHZtX2N0dHpfaTY0XCI6IF9sbHZtX2N0dHpfaTY0LCBcIl9sbHZtX3N0YWNrcmVzdG9yZVwiOiBfbGx2bV9zdGFja3Jlc3RvcmUsIFwiX2xsdm1fc3RhY2tzYXZlXCI6IF9sbHZtX3N0YWNrc2F2ZSwgXCJfcHRocmVhZF9jcmVhdGVcIjogX3B0aHJlYWRfY3JlYXRlLCBcIl9wdGhyZWFkX2pvaW5cIjogX3B0aHJlYWRfam9pbiwgXCJfcHRocmVhZF9tdXRleF9pbml0XCI6IF9wdGhyZWFkX211dGV4X2luaXQsIFwiX3N5c2NvbmZcIjogX3N5c2NvbmYsIFwiZmx1c2hfTk9fRklMRVNZU1RFTVwiOiBmbHVzaF9OT19GSUxFU1lTVEVNLCBcIkRZTkFNSUNUT1BfUFRSXCI6IERZTkFNSUNUT1BfUFRSLCBcInRlbXBEb3VibGVQdHJcIjogdGVtcERvdWJsZVB0ciwgXCJBQk9SVFwiOiBBQk9SVCwgXCJTVEFDS1RPUFwiOiBTVEFDS1RPUCwgXCJTVEFDS19NQVhcIjogU1RBQ0tfTUFYLCBcImN0dHpfaThcIjogY3R0el9pOCB9O1xyXG4vLyBFTVNDUklQVEVOX1NUQVJUX0FTTVxyXG52YXIgYXNtID1Nb2R1bGVbXCJhc21cIl0vLyBFTVNDUklQVEVOX0VORF9BU01cclxuKE1vZHVsZS5hc21HbG9iYWxBcmcsIE1vZHVsZS5hc21MaWJyYXJ5QXJnLCBidWZmZXIpO1xyXG5cclxudmFyIHJlYWxfX19fZXJybm9fbG9jYXRpb24gPSBhc21bXCJfX19lcnJub19sb2NhdGlvblwiXTsgYXNtW1wiX19fZXJybm9fbG9jYXRpb25cIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19fX2Vycm5vX2xvY2F0aW9uLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fY2N1cmxfcG93ID0gYXNtW1wiX2NjdXJsX3Bvd1wiXTsgYXNtW1wiX2NjdXJsX3Bvd1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX2NjdXJsX3Bvdy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfX2ZmbHVzaCA9IGFzbVtcIl9mZmx1c2hcIl07IGFzbVtcIl9mZmx1c2hcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19mZmx1c2guYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX19mcmVlID0gYXNtW1wiX2ZyZWVcIl07IGFzbVtcIl9mcmVlXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9fZnJlZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfX2xsdm1fYnN3YXBfaTMyID0gYXNtW1wiX2xsdm1fYnN3YXBfaTMyXCJdOyBhc21bXCJfbGx2bV9ic3dhcF9pMzJcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19sbHZtX2Jzd2FwX2kzMi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfX21hbGxvYyA9IGFzbVtcIl9tYWxsb2NcIl07IGFzbVtcIl9tYWxsb2NcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19tYWxsb2MuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX19wdGhyZWFkX211dGV4X2xvY2sgPSBhc21bXCJfcHRocmVhZF9tdXRleF9sb2NrXCJdOyBhc21bXCJfcHRocmVhZF9tdXRleF9sb2NrXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9fcHRocmVhZF9tdXRleF9sb2NrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fcHRocmVhZF9tdXRleF91bmxvY2sgPSBhc21bXCJfcHRocmVhZF9tdXRleF91bmxvY2tcIl07IGFzbVtcIl9wdGhyZWFkX211dGV4X3VubG9ja1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX3B0aHJlYWRfbXV0ZXhfdW5sb2NrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fc2JyayA9IGFzbVtcIl9zYnJrXCJdOyBhc21bXCJfc2Jya1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX3NicmsuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX2VzdGFibGlzaFN0YWNrU3BhY2UgPSBhc21bXCJlc3RhYmxpc2hTdGFja1NwYWNlXCJdOyBhc21bXCJlc3RhYmxpc2hTdGFja1NwYWNlXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9lc3RhYmxpc2hTdGFja1NwYWNlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9nZXRUZW1wUmV0MCA9IGFzbVtcImdldFRlbXBSZXQwXCJdOyBhc21bXCJnZXRUZW1wUmV0MFwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfZ2V0VGVtcFJldDAuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX3NldFRlbXBSZXQwID0gYXNtW1wic2V0VGVtcFJldDBcIl07IGFzbVtcInNldFRlbXBSZXQwXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9zZXRUZW1wUmV0MC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfc2V0VGhyZXcgPSBhc21bXCJzZXRUaHJld1wiXTsgYXNtW1wic2V0VGhyZXdcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX3NldFRocmV3LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9zdGFja0FsbG9jID0gYXNtW1wic3RhY2tBbGxvY1wiXTsgYXNtW1wic3RhY2tBbGxvY1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfc3RhY2tBbGxvYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfc3RhY2tSZXN0b3JlID0gYXNtW1wic3RhY2tSZXN0b3JlXCJdOyBhc21bXCJzdGFja1Jlc3RvcmVcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX3N0YWNrUmVzdG9yZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfc3RhY2tTYXZlID0gYXNtW1wic3RhY2tTYXZlXCJdOyBhc21bXCJzdGFja1NhdmVcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX3N0YWNrU2F2ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5Nb2R1bGVbXCJhc21cIl0gPSBhc207XHJcbnZhciBfX19lcnJub19sb2NhdGlvbiA9IE1vZHVsZVtcIl9fX2Vycm5vX2xvY2F0aW9uXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX19fZXJybm9fbG9jYXRpb25cIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX2NjdXJsX3BvdyA9IE1vZHVsZVtcIl9jY3VybF9wb3dcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfY2N1cmxfcG93XCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9mZmx1c2ggPSBNb2R1bGVbXCJfZmZsdXNoXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX2ZmbHVzaFwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfZnJlZSA9IE1vZHVsZVtcIl9mcmVlXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX2ZyZWVcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX2xsdm1fYnN3YXBfaTMyID0gTW9kdWxlW1wiX2xsdm1fYnN3YXBfaTMyXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX2xsdm1fYnN3YXBfaTMyXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9tYWxsb2MgPSBNb2R1bGVbXCJfbWFsbG9jXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX21hbGxvY1wiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfbWVtY3B5ID0gTW9kdWxlW1wiX21lbWNweVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcIl9tZW1jcHlcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX21lbXNldCA9IE1vZHVsZVtcIl9tZW1zZXRcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfbWVtc2V0XCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9wdGhyZWFkX211dGV4X2xvY2sgPSBNb2R1bGVbXCJfcHRocmVhZF9tdXRleF9sb2NrXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX3B0aHJlYWRfbXV0ZXhfbG9ja1wiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfcHRocmVhZF9tdXRleF91bmxvY2sgPSBNb2R1bGVbXCJfcHRocmVhZF9tdXRleF91bmxvY2tcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfcHRocmVhZF9tdXRleF91bmxvY2tcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX3NicmsgPSBNb2R1bGVbXCJfc2Jya1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcIl9zYnJrXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIGVzdGFibGlzaFN0YWNrU3BhY2UgPSBNb2R1bGVbXCJlc3RhYmxpc2hTdGFja1NwYWNlXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiZXN0YWJsaXNoU3RhY2tTcGFjZVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBnZXRUZW1wUmV0MCA9IE1vZHVsZVtcImdldFRlbXBSZXQwXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiZ2V0VGVtcFJldDBcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgcnVuUG9zdFNldHMgPSBNb2R1bGVbXCJydW5Qb3N0U2V0c1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcInJ1blBvc3RTZXRzXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIHNldFRlbXBSZXQwID0gTW9kdWxlW1wic2V0VGVtcFJldDBcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJzZXRUZW1wUmV0MFwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBzZXRUaHJldyA9IE1vZHVsZVtcInNldFRocmV3XCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wic2V0VGhyZXdcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgc3RhY2tBbGxvYyA9IE1vZHVsZVtcInN0YWNrQWxsb2NcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJzdGFja0FsbG9jXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIHN0YWNrUmVzdG9yZSA9IE1vZHVsZVtcInN0YWNrUmVzdG9yZVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcInN0YWNrUmVzdG9yZVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBzdGFja1NhdmUgPSBNb2R1bGVbXCJzdGFja1NhdmVcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJzdGFja1NhdmVcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgZHluQ2FsbF9paSA9IE1vZHVsZVtcImR5bkNhbGxfaWlcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJkeW5DYWxsX2lpXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIGR5bkNhbGxfaWlpaSA9IE1vZHVsZVtcImR5bkNhbGxfaWlpaVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcImR5bkNhbGxfaWlpaVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbjtcclxuXHJcblxyXG5cclxuLy8gPT09IEF1dG8tZ2VuZXJhdGVkIHBvc3RhbWJsZSBzZXR1cCBlbnRyeSBzdHVmZiA9PT1cclxuXHJcbk1vZHVsZVsnYXNtJ10gPSBhc207XHJcblxyXG5pZiAoIU1vZHVsZVtcImludEFycmF5RnJvbVN0cmluZ1wiXSkgTW9kdWxlW1wiaW50QXJyYXlGcm9tU3RyaW5nXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2ludEFycmF5RnJvbVN0cmluZycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiaW50QXJyYXlUb1N0cmluZ1wiXSkgTW9kdWxlW1wiaW50QXJyYXlUb1N0cmluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidpbnRBcnJheVRvU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuTW9kdWxlW1wiY2NhbGxcIl0gPSBjY2FsbDtcclxuTW9kdWxlW1wiY3dyYXBcIl0gPSBjd3JhcDtcclxuaWYgKCFNb2R1bGVbXCJzZXRWYWx1ZVwiXSkgTW9kdWxlW1wic2V0VmFsdWVcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc2V0VmFsdWUnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImdldFZhbHVlXCJdKSBNb2R1bGVbXCJnZXRWYWx1ZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidnZXRWYWx1ZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWxsb2NhdGVcIl0pIE1vZHVsZVtcImFsbG9jYXRlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FsbG9jYXRlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJnZXRNZW1vcnlcIl0pIE1vZHVsZVtcImdldE1lbW9yeVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidnZXRNZW1vcnknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKS4gQWx0ZXJuYXRpdmVseSwgZm9yY2luZyBmaWxlc3lzdGVtIHN1cHBvcnQgKC1zIEZPUkNFX0ZJTEVTWVNURU09MSkgY2FuIGV4cG9ydCB0aGlzIGZvciB5b3VcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJQb2ludGVyX3N0cmluZ2lmeVwiXSkgTW9kdWxlW1wiUG9pbnRlcl9zdHJpbmdpZnlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInUG9pbnRlcl9zdHJpbmdpZnknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkFzY2lpVG9TdHJpbmdcIl0pIE1vZHVsZVtcIkFzY2lpVG9TdHJpbmdcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInQXNjaWlUb1N0cmluZycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wic3RyaW5nVG9Bc2NpaVwiXSkgTW9kdWxlW1wic3RyaW5nVG9Bc2NpaVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidzdHJpbmdUb0FzY2lpJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJVVEY4QXJyYXlUb1N0cmluZ1wiXSkgTW9kdWxlW1wiVVRGOEFycmF5VG9TdHJpbmdcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInVVRGOEFycmF5VG9TdHJpbmcnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIlVURjhUb1N0cmluZ1wiXSkgTW9kdWxlW1wiVVRGOFRvU3RyaW5nXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ1VURjhUb1N0cmluZycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wic3RyaW5nVG9VVEY4QXJyYXlcIl0pIE1vZHVsZVtcInN0cmluZ1RvVVRGOEFycmF5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0cmluZ1RvVVRGOEFycmF5JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdHJpbmdUb1VURjhcIl0pIE1vZHVsZVtcInN0cmluZ1RvVVRGOFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidzdHJpbmdUb1VURjgnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImxlbmd0aEJ5dGVzVVRGOFwiXSkgTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEY4XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2xlbmd0aEJ5dGVzVVRGOCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiVVRGMTZUb1N0cmluZ1wiXSkgTW9kdWxlW1wiVVRGMTZUb1N0cmluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidVVEYxNlRvU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdHJpbmdUb1VURjE2XCJdKSBNb2R1bGVbXCJzdHJpbmdUb1VURjE2XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0cmluZ1RvVVRGMTYnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImxlbmd0aEJ5dGVzVVRGMTZcIl0pIE1vZHVsZVtcImxlbmd0aEJ5dGVzVVRGMTZcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInbGVuZ3RoQnl0ZXNVVEYxNicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiVVRGMzJUb1N0cmluZ1wiXSkgTW9kdWxlW1wiVVRGMzJUb1N0cmluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidVVEYzMlRvU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdHJpbmdUb1VURjMyXCJdKSBNb2R1bGVbXCJzdHJpbmdUb1VURjMyXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0cmluZ1RvVVRGMzInIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImxlbmd0aEJ5dGVzVVRGMzJcIl0pIE1vZHVsZVtcImxlbmd0aEJ5dGVzVVRGMzJcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInbGVuZ3RoQnl0ZXNVVEYzMicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWxsb2NhdGVVVEY4XCJdKSBNb2R1bGVbXCJhbGxvY2F0ZVVURjhcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWxsb2NhdGVVVEY4JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdGFja1RyYWNlXCJdKSBNb2R1bGVbXCJzdGFja1RyYWNlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0YWNrVHJhY2UnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImFkZE9uUHJlUnVuXCJdKSBNb2R1bGVbXCJhZGRPblByZVJ1blwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidhZGRPblByZVJ1bicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWRkT25Jbml0XCJdKSBNb2R1bGVbXCJhZGRPbkluaXRcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWRkT25Jbml0JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhZGRPblByZU1haW5cIl0pIE1vZHVsZVtcImFkZE9uUHJlTWFpblwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidhZGRPblByZU1haW4nIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImFkZE9uRXhpdFwiXSkgTW9kdWxlW1wiYWRkT25FeGl0XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FkZE9uRXhpdCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWRkT25Qb3N0UnVuXCJdKSBNb2R1bGVbXCJhZGRPblBvc3RSdW5cIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWRkT25Qb3N0UnVuJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJ3cml0ZVN0cmluZ1RvTWVtb3J5XCJdKSBNb2R1bGVbXCJ3cml0ZVN0cmluZ1RvTWVtb3J5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3dyaXRlU3RyaW5nVG9NZW1vcnknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIndyaXRlQXJyYXlUb01lbW9yeVwiXSkgTW9kdWxlW1wid3JpdGVBcnJheVRvTWVtb3J5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3dyaXRlQXJyYXlUb01lbW9yeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wid3JpdGVBc2NpaVRvTWVtb3J5XCJdKSBNb2R1bGVbXCJ3cml0ZUFzY2lpVG9NZW1vcnlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInd3JpdGVBc2NpaVRvTWVtb3J5JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhZGRSdW5EZXBlbmRlbmN5XCJdKSBNb2R1bGVbXCJhZGRSdW5EZXBlbmRlbmN5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FkZFJ1bkRlcGVuZGVuY3knIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKS4gQWx0ZXJuYXRpdmVseSwgZm9yY2luZyBmaWxlc3lzdGVtIHN1cHBvcnQgKC1zIEZPUkNFX0ZJTEVTWVNURU09MSkgY2FuIGV4cG9ydCB0aGlzIGZvciB5b3VcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJyZW1vdmVSdW5EZXBlbmRlbmN5XCJdKSBNb2R1bGVbXCJyZW1vdmVSdW5EZXBlbmRlbmN5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3JlbW92ZVJ1bkRlcGVuZGVuY3knIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKS4gQWx0ZXJuYXRpdmVseSwgZm9yY2luZyBmaWxlc3lzdGVtIHN1cHBvcnQgKC1zIEZPUkNFX0ZJTEVTWVNURU09MSkgY2FuIGV4cG9ydCB0aGlzIGZvciB5b3VcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJGU1wiXSkgTW9kdWxlW1wiRlNcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlMnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZUZvbGRlclwiXSkgTW9kdWxlW1wiRlNfY3JlYXRlRm9sZGVyXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0ZTX2NyZWF0ZUZvbGRlcicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZVBhdGhcIl0pIE1vZHVsZVtcIkZTX2NyZWF0ZVBhdGhcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfY3JlYXRlUGF0aCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZURhdGFGaWxlXCJdKSBNb2R1bGVbXCJGU19jcmVhdGVEYXRhRmlsZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGU19jcmVhdGVEYXRhRmlsZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZVByZWxvYWRlZEZpbGVcIl0pIE1vZHVsZVtcIkZTX2NyZWF0ZVByZWxvYWRlZEZpbGVcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfY3JlYXRlUHJlbG9hZGVkRmlsZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZUxhenlGaWxlXCJdKSBNb2R1bGVbXCJGU19jcmVhdGVMYXp5RmlsZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGU19jcmVhdGVMYXp5RmlsZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZUxpbmtcIl0pIE1vZHVsZVtcIkZTX2NyZWF0ZUxpbmtcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfY3JlYXRlTGluaycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX2NyZWF0ZURldmljZVwiXSkgTW9kdWxlW1wiRlNfY3JlYXRlRGV2aWNlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0ZTX2NyZWF0ZURldmljZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTX3VubGlua1wiXSkgTW9kdWxlW1wiRlNfdW5saW5rXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0ZTX3VubGluaycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkdMXCJdKSBNb2R1bGVbXCJHTFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidHTCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wic3RhdGljQWxsb2NcIl0pIE1vZHVsZVtcInN0YXRpY0FsbG9jXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0YXRpY0FsbG9jJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJkeW5hbWljQWxsb2NcIl0pIE1vZHVsZVtcImR5bmFtaWNBbGxvY1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidkeW5hbWljQWxsb2MnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIndhcm5PbmNlXCJdKSBNb2R1bGVbXCJ3YXJuT25jZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIid3YXJuT25jZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wibG9hZER5bmFtaWNMaWJyYXJ5XCJdKSBNb2R1bGVbXCJsb2FkRHluYW1pY0xpYnJhcnlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInbG9hZER5bmFtaWNMaWJyYXJ5JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJsb2FkV2ViQXNzZW1ibHlNb2R1bGVcIl0pIE1vZHVsZVtcImxvYWRXZWJBc3NlbWJseU1vZHVsZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidsb2FkV2ViQXNzZW1ibHlNb2R1bGUnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImdldExFQlwiXSkgTW9kdWxlW1wiZ2V0TEVCXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2dldExFQicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZ2V0RnVuY3Rpb25UYWJsZXNcIl0pIE1vZHVsZVtcImdldEZ1bmN0aW9uVGFibGVzXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2dldEZ1bmN0aW9uVGFibGVzJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhbGlnbkZ1bmN0aW9uVGFibGVzXCJdKSBNb2R1bGVbXCJhbGlnbkZ1bmN0aW9uVGFibGVzXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FsaWduRnVuY3Rpb25UYWJsZXMnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInJlZ2lzdGVyRnVuY3Rpb25zXCJdKSBNb2R1bGVbXCJyZWdpc3RlckZ1bmN0aW9uc1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidyZWdpc3RlckZ1bmN0aW9ucycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWRkRnVuY3Rpb25cIl0pIE1vZHVsZVtcImFkZEZ1bmN0aW9uXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FkZEZ1bmN0aW9uJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJyZW1vdmVGdW5jdGlvblwiXSkgTW9kdWxlW1wicmVtb3ZlRnVuY3Rpb25cIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCIncmVtb3ZlRnVuY3Rpb24nIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImdldEZ1bmNXcmFwcGVyXCJdKSBNb2R1bGVbXCJnZXRGdW5jV3JhcHBlclwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidnZXRGdW5jV3JhcHBlcicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wicHJldHR5UHJpbnRcIl0pIE1vZHVsZVtcInByZXR0eVByaW50XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3ByZXR0eVByaW50JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJtYWtlQmlnSW50XCJdKSBNb2R1bGVbXCJtYWtlQmlnSW50XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ21ha2VCaWdJbnQnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImR5bkNhbGxcIl0pIE1vZHVsZVtcImR5bkNhbGxcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInZHluQ2FsbCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZ2V0Q29tcGlsZXJTZXR0aW5nXCJdKSBNb2R1bGVbXCJnZXRDb21waWxlclNldHRpbmdcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInZ2V0Q29tcGlsZXJTZXR0aW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJpbnRBcnJheUZyb21CYXNlNjRcIl0pIE1vZHVsZVtcImludEFycmF5RnJvbUJhc2U2NFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidpbnRBcnJheUZyb21CYXNlNjQnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInRyeVBhcnNlQXNEYXRhVVJJXCJdKSBNb2R1bGVbXCJ0cnlQYXJzZUFzRGF0YVVSSVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIid0cnlQYXJzZUFzRGF0YVVSSScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07aWYgKCFNb2R1bGVbXCJBTExPQ19OT1JNQUxcIl0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2R1bGUsIFwiQUxMT0NfTk9STUFMXCIsIHsgZ2V0OiBmdW5jdGlvbigpIHsgYWJvcnQoXCInQUxMT0NfTk9STUFMJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfSB9KTtcclxuaWYgKCFNb2R1bGVbXCJBTExPQ19TVEFDS1wiXSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZSwgXCJBTExPQ19TVEFDS1wiLCB7IGdldDogZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0FMTE9DX1NUQUNLJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfSB9KTtcclxuaWYgKCFNb2R1bGVbXCJBTExPQ19TVEFUSUNcIl0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2R1bGUsIFwiQUxMT0NfU1RBVElDXCIsIHsgZ2V0OiBmdW5jdGlvbigpIHsgYWJvcnQoXCInQUxMT0NfU1RBVElDJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfSB9KTtcclxuaWYgKCFNb2R1bGVbXCJBTExPQ19EWU5BTUlDXCJdKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kdWxlLCBcIkFMTE9DX0RZTkFNSUNcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidBTExPQ19EWU5BTUlDJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfSB9KTtcclxuaWYgKCFNb2R1bGVbXCJBTExPQ19OT05FXCJdKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kdWxlLCBcIkFMTE9DX05PTkVcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidBTExPQ19OT05FJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfSB9KTtcclxuXHJcblxyXG5cclxuLy8gTW9kdWxhcml6ZSBtb2RlIHJldHVybnMgYSBmdW5jdGlvbiwgd2hpY2ggY2FuIGJlIGNhbGxlZCB0b1xyXG4vLyBjcmVhdGUgaW5zdGFuY2VzLiBUaGUgaW5zdGFuY2VzIHByb3ZpZGUgYSB0aGVuKCkgbWV0aG9kLFxyXG4vLyBtdXN0IGxpa2UgYSBQcm9taXNlLCB0aGF0IHJlY2VpdmVzIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFja1xyXG4vLyBpcyBjYWxsZWQgd2hlbiB0aGUgbW9kdWxlIGlzIHJlYWR5IHRvIHJ1biwgd2l0aCB0aGUgbW9kdWxlXHJcbi8vIGFzIGEgcGFyYW1ldGVyLiAoTGlrZSBhIFByb21pc2UsIGl0IGFsc28gcmV0dXJucyB0aGUgbW9kdWxlXHJcbi8vIHNvIHlvdSBjYW4gdXNlIHRoZSBvdXRwdXQgb2YgLnRoZW4oLi4pKS5cclxuTW9kdWxlWyd0aGVuJ10gPSBmdW5jdGlvbihmdW5jKSB7XHJcbiAgLy8gV2UgbWF5IGFscmVhZHkgYmUgcmVhZHkgdG8gcnVuIGNvZGUgYXQgdGhpcyB0aW1lLiBpZlxyXG4gIC8vIHNvLCBqdXN0IHF1ZXVlIGEgY2FsbCB0byB0aGUgY2FsbGJhY2suXHJcbiAgaWYgKE1vZHVsZVsnY2FsbGVkUnVuJ10pIHtcclxuICAgIGZ1bmMoTW9kdWxlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gd2UgYXJlIG5vdCByZWFkeSB0byBjYWxsIHRoZW4oKSB5ZXQuIHdlIG11c3QgY2FsbCBpdFxyXG4gICAgLy8gYXQgdGhlIHNhbWUgdGltZSB3ZSB3b3VsZCBjYWxsIG9uUnVudGltZUluaXRpYWxpemVkLlxyXG4gICAgdmFyIG9sZCA9IE1vZHVsZVsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXTtcclxuICAgIE1vZHVsZVsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAob2xkKSBvbGQoKTtcclxuICAgICAgZnVuYyhNb2R1bGUpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIE1vZHVsZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVuZHMge0Vycm9yfVxyXG4gKiBAdGhpcyB7RXhpdFN0YXR1c31cclxuICovXHJcbmZ1bmN0aW9uIEV4aXRTdGF0dXMoc3RhdHVzKSB7XHJcbiAgdGhpcy5uYW1lID0gXCJFeGl0U3RhdHVzXCI7XHJcbiAgdGhpcy5tZXNzYWdlID0gXCJQcm9ncmFtIHRlcm1pbmF0ZWQgd2l0aCBleGl0KFwiICsgc3RhdHVzICsgXCIpXCI7XHJcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbn07XHJcbkV4aXRTdGF0dXMucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XHJcbkV4aXRTdGF0dXMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXhpdFN0YXR1cztcclxuXHJcbnZhciBpbml0aWFsU3RhY2tUb3A7XHJcbnZhciBjYWxsZWRNYWluID0gZmFsc2U7XHJcblxyXG5kZXBlbmRlbmNpZXNGdWxmaWxsZWQgPSBmdW5jdGlvbiBydW5DYWxsZXIoKSB7XHJcbiAgLy8gSWYgcnVuIGhhcyBuZXZlciBiZWVuIGNhbGxlZCwgYW5kIHdlIHNob3VsZCBjYWxsIHJ1biAoSU5WT0tFX1JVTiBpcyB0cnVlLCBhbmQgTW9kdWxlLm5vSW5pdGlhbFJ1biBpcyBub3QgZmFsc2UpXHJcbiAgaWYgKCFNb2R1bGVbJ2NhbGxlZFJ1biddKSBydW4oKTtcclxuICBpZiAoIU1vZHVsZVsnY2FsbGVkUnVuJ10pIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCA9IHJ1bkNhbGxlcjsgLy8gdHJ5IHRoaXMgYWdhaW4gbGF0ZXIsIGFmdGVyIG5ldyBkZXBzIGFyZSBmdWxmaWxsZWRcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24oQXJyYXk9KX0gKi9cclxuZnVuY3Rpb24gcnVuKGFyZ3MpIHtcclxuICBhcmdzID0gYXJncyB8fCBNb2R1bGVbJ2FyZ3VtZW50cyddO1xyXG5cclxuICBpZiAocnVuRGVwZW5kZW5jaWVzID4gMCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVTdGFja0Nvb2tpZSgpO1xyXG5cclxuICBwcmVSdW4oKTtcclxuXHJcbiAgaWYgKHJ1bkRlcGVuZGVuY2llcyA+IDApIHJldHVybjsgLy8gYSBwcmVSdW4gYWRkZWQgYSBkZXBlbmRlbmN5LCBydW4gd2lsbCBiZSBjYWxsZWQgbGF0ZXJcclxuICBpZiAoTW9kdWxlWydjYWxsZWRSdW4nXSkgcmV0dXJuOyAvLyBydW4gbWF5IGhhdmUganVzdCBiZWVuIGNhbGxlZCB0aHJvdWdoIGRlcGVuZGVuY2llcyBiZWluZyBmdWxmaWxsZWQganVzdCBpbiB0aGlzIHZlcnkgZnJhbWVcclxuXHJcbiAgZnVuY3Rpb24gZG9SdW4oKSB7XHJcbiAgICBpZiAoTW9kdWxlWydjYWxsZWRSdW4nXSkgcmV0dXJuOyAvLyBydW4gbWF5IGhhdmUganVzdCBiZWVuIGNhbGxlZCB3aGlsZSB0aGUgYXN5bmMgc2V0U3RhdHVzIHRpbWUgYmVsb3cgd2FzIGhhcHBlbmluZ1xyXG4gICAgTW9kdWxlWydjYWxsZWRSdW4nXSA9IHRydWU7XHJcblxyXG4gICAgaWYgKEFCT1JUKSByZXR1cm47XHJcblxyXG4gICAgZW5zdXJlSW5pdFJ1bnRpbWUoKTtcclxuXHJcbiAgICBwcmVNYWluKCk7XHJcblxyXG4gICAgaWYgKE1vZHVsZVsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXSkgTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddKCk7XHJcblxyXG4gICAgYXNzZXJ0KCFNb2R1bGVbJ19tYWluJ10sICdjb21waWxlZCB3aXRob3V0IGEgbWFpbiwgYnV0IG9uZSBpcyBwcmVzZW50LiBpZiB5b3UgYWRkZWQgaXQgZnJvbSBKUywgdXNlIE1vZHVsZVtcIm9uUnVudGltZUluaXRpYWxpemVkXCJdJyk7XHJcblxyXG4gICAgcG9zdFJ1bigpO1xyXG4gIH1cclxuXHJcbiAgaWYgKE1vZHVsZVsnc2V0U3RhdHVzJ10pIHtcclxuICAgIE1vZHVsZVsnc2V0U3RhdHVzJ10oJ1J1bm5pbmcuLi4nKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgTW9kdWxlWydzZXRTdGF0dXMnXSgnJyk7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgICBkb1J1bigpO1xyXG4gICAgfSwgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvUnVuKCk7XHJcbiAgfVxyXG4gIGNoZWNrU3RhY2tDb29raWUoKTtcclxufVxyXG5Nb2R1bGVbJ3J1biddID0gcnVuO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tVbmZsdXNoZWRDb250ZW50KCkge1xyXG4gIC8vIENvbXBpbGVyIHNldHRpbmdzIGRvIG5vdCBhbGxvdyBleGl0aW5nIHRoZSBydW50aW1lLCBzbyBmbHVzaGluZ1xyXG4gIC8vIHRoZSBzdHJlYW1zIGlzIG5vdCBwb3NzaWJsZS4gYnV0IGluIEFTU0VSVElPTlMgbW9kZSB3ZSBjaGVja1xyXG4gIC8vIGlmIHRoZXJlIHdhcyBzb21ldGhpbmcgdG8gZmx1c2gsIGFuZCBpZiBzbyB0ZWxsIHRoZSB1c2VyIHRoZXlcclxuICAvLyBzaG91bGQgcmVxdWVzdCB0aGF0IHRoZSBydW50aW1lIGJlIGV4aXRhYmxlLlxyXG4gIC8vIE5vcm1hbGx5IHdlIHdvdWxkIG5vdCBldmVuIGluY2x1ZGUgZmx1c2goKSBhdCBhbGwsIGJ1dCBpbiBBU1NFUlRJT05TXHJcbiAgLy8gYnVpbGRzIHdlIGRvIHNvIGp1c3QgZm9yIHRoaXMgY2hlY2ssIGFuZCBoZXJlIHdlIHNlZSBpZiB0aGVyZSBpcyBhbnlcclxuICAvLyBjb250ZW50IHRvIGZsdXNoLCB0aGF0IGlzLCB3ZSBjaGVjayBpZiB0aGVyZSB3b3VsZCBoYXZlIGJlZW5cclxuICAvLyBzb21ldGhpbmcgYSBub24tQVNTRVJUSU9OUyBidWlsZCB3b3VsZCBoYXZlIG5vdCBzZWVuLlxyXG4gIC8vIEhvdyB3ZSBmbHVzaCB0aGUgc3RyZWFtcyBkZXBlbmRzIG9uIHdoZXRoZXIgd2UgYXJlIGluIE5PX0ZJTEVTWVNURU1cclxuICAvLyBtb2RlICh3aGljaCBoYXMgaXRzIG93biBzcGVjaWFsIGZ1bmN0aW9uIGZvciB0aGlzOyBvdGhlcndpc2UsIGFsbFxyXG4gIC8vIHRoZSBjb2RlIGlzIGluc2lkZSBsaWJjKVxyXG4gIHZhciBwcmludCA9IE1vZHVsZVsncHJpbnQnXTtcclxuICB2YXIgcHJpbnRFcnIgPSBNb2R1bGVbJ3ByaW50RXJyJ107XHJcbiAgdmFyIGhhcyA9IGZhbHNlO1xyXG4gIE1vZHVsZVsncHJpbnQnXSA9IE1vZHVsZVsncHJpbnRFcnInXSA9IGZ1bmN0aW9uKHgpIHtcclxuICAgIGhhcyA9IHRydWU7XHJcbiAgfVxyXG4gIHRyeSB7IC8vIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGl0IGZhaWxzXHJcbiAgICB2YXIgZmx1c2ggPSBmbHVzaF9OT19GSUxFU1lTVEVNO1xyXG4gICAgaWYgKGZsdXNoKSBmbHVzaCgwKTtcclxuICB9IGNhdGNoKGUpIHt9XHJcbiAgTW9kdWxlWydwcmludCddID0gcHJpbnQ7XHJcbiAgTW9kdWxlWydwcmludEVyciddID0gcHJpbnRFcnI7XHJcbiAgaWYgKGhhcykge1xyXG4gICAgd2Fybk9uY2UoJ3N0ZGlvIHN0cmVhbXMgaGFkIGNvbnRlbnQgaW4gdGhlbSB0aGF0IHdhcyBub3QgZmx1c2hlZC4geW91IHNob3VsZCBzZXQgTk9fRVhJVF9SVU5USU1FIHRvIDAgKHNlZSB0aGUgRkFRKSwgb3IgbWFrZSBzdXJlIHRvIGVtaXQgYSBuZXdsaW5lIHdoZW4geW91IHByaW50ZiBldGMuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGl0KHN0YXR1cywgaW1wbGljaXQpIHtcclxuICBjaGVja1VuZmx1c2hlZENvbnRlbnQoKTtcclxuXHJcbiAgLy8gaWYgdGhpcyBpcyBqdXN0IG1haW4gZXhpdC1pbmcgaW1wbGljaXRseSwgYW5kIHRoZSBzdGF0dXMgaXMgMCwgdGhlbiB3ZVxyXG4gIC8vIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcgaGVyZSBhbmQgY2FuIGp1c3QgbGVhdmUuIGlmIHRoZSBzdGF0dXMgaXNcclxuICAvLyBub24temVybywgdGhvdWdoLCB0aGVuIHdlIG5lZWQgdG8gcmVwb3J0IGl0LlxyXG4gIC8vICh3ZSBtYXkgaGF2ZSB3YXJuZWQgYWJvdXQgdGhpcyBlYXJsaWVyLCBpZiBhIHNpdHVhdGlvbiBqdXN0aWZpZXMgZG9pbmcgc28pXHJcbiAgaWYgKGltcGxpY2l0ICYmIE1vZHVsZVsnbm9FeGl0UnVudGltZSddICYmIHN0YXR1cyA9PT0gMCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKE1vZHVsZVsnbm9FeGl0UnVudGltZSddKSB7XHJcbiAgICAvLyBpZiBleGl0KCkgd2FzIGNhbGxlZCwgd2UgbWF5IHdhcm4gdGhlIHVzZXIgaWYgdGhlIHJ1bnRpbWUgaXNuJ3QgYWN0dWFsbHkgYmVpbmcgc2h1dCBkb3duXHJcbiAgICBpZiAoIWltcGxpY2l0KSB7XHJcbiAgICAgIE1vZHVsZS5wcmludEVycignZXhpdCgnICsgc3RhdHVzICsgJykgY2FsbGVkLCBidXQgTk9fRVhJVF9SVU5USU1FIGlzIHNldCwgc28gaGFsdGluZyBleGVjdXRpb24gYnV0IG5vdCBleGl0aW5nIHRoZSBydW50aW1lIG9yIHByZXZlbnRpbmcgZnVydGhlciBhc3luYyBleGVjdXRpb24gKGJ1aWxkIHdpdGggTk9fRVhJVF9SVU5USU1FPTAsIGlmIHlvdSB3YW50IGEgdHJ1ZSBzaHV0ZG93biknKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIEFCT1JUID0gdHJ1ZTtcclxuICAgIEVYSVRTVEFUVVMgPSBzdGF0dXM7XHJcbiAgICBTVEFDS1RPUCA9IGluaXRpYWxTdGFja1RvcDtcclxuXHJcbiAgICBleGl0UnVudGltZSgpO1xyXG5cclxuICAgIGlmIChNb2R1bGVbJ29uRXhpdCddKSBNb2R1bGVbJ29uRXhpdCddKHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBpZiAoRU5WSVJPTk1FTlRfSVNfTk9ERSkge1xyXG4gICAgcHJvY2Vzc1snZXhpdCddKHN0YXR1cyk7XHJcbiAgfVxyXG4gIE1vZHVsZVsncXVpdCddKHN0YXR1cywgbmV3IEV4aXRTdGF0dXMoc3RhdHVzKSk7XHJcbn1cclxuTW9kdWxlWydleGl0J10gPSBleGl0O1xyXG5cclxudmFyIGFib3J0RGVjb3JhdG9ycyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gYWJvcnQod2hhdCkge1xyXG4gIGlmIChNb2R1bGVbJ29uQWJvcnQnXSkge1xyXG4gICAgTW9kdWxlWydvbkFib3J0J10od2hhdCk7XHJcbiAgfVxyXG5cclxuICBpZiAod2hhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBNb2R1bGUucHJpbnQod2hhdCk7XHJcbiAgICBNb2R1bGUucHJpbnRFcnIod2hhdCk7XHJcbiAgICB3aGF0ID0gSlNPTi5zdHJpbmdpZnkod2hhdClcclxuICB9IGVsc2Uge1xyXG4gICAgd2hhdCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgQUJPUlQgPSB0cnVlO1xyXG4gIEVYSVRTVEFUVVMgPSAxO1xyXG5cclxuICB2YXIgZXh0cmEgPSAnJztcclxuICB2YXIgb3V0cHV0ID0gJ2Fib3J0KCcgKyB3aGF0ICsgJykgYXQgJyArIHN0YWNrVHJhY2UoKSArIGV4dHJhO1xyXG4gIGlmIChhYm9ydERlY29yYXRvcnMpIHtcclxuICAgIGFib3J0RGVjb3JhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGRlY29yYXRvcikge1xyXG4gICAgICBvdXRwdXQgPSBkZWNvcmF0b3Iob3V0cHV0LCB3aGF0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aHJvdyBvdXRwdXQ7XHJcbn1cclxuTW9kdWxlWydhYm9ydCddID0gYWJvcnQ7XHJcblxyXG4vLyB7e1BSRV9SVU5fQURESVRJT05TfX1cclxuXHJcbmlmIChNb2R1bGVbJ3ByZUluaXQnXSkge1xyXG4gIGlmICh0eXBlb2YgTW9kdWxlWydwcmVJbml0J10gPT0gJ2Z1bmN0aW9uJykgTW9kdWxlWydwcmVJbml0J10gPSBbTW9kdWxlWydwcmVJbml0J11dO1xyXG4gIHdoaWxlIChNb2R1bGVbJ3ByZUluaXQnXS5sZW5ndGggPiAwKSB7XHJcbiAgICBNb2R1bGVbJ3ByZUluaXQnXS5wb3AoKSgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbk1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl0gPSB0cnVlO1xyXG5cclxucnVuKCk7XHJcblxyXG4vLyB7e1BPU1RfUlVOX0FERElUSU9OU319XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8ge3tNT0RVTEVfQURESVRJT05TfX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiBNb2R1bGU7XHJcbn07XHJcbmlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XHJcbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSlcclxuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gTW9kdWxlOyB9KTtcclxuZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxyXG4gIGV4cG9ydHNbXCJNb2R1bGVcIl0gPSBNb2R1bGU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2Vycm9yX2NyeXB0b0Vycm9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJ5dGVzX187Il0sInNvdXJjZVJvb3QiOiIifQ==