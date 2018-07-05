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

/***/ "./node_modules/.registry.npmjs.org/webpack/4.15.0/node_modules/webpack/buildin/module.js":
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
    var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABchJgA39/fwF/YAF/AX9gAAF/YAF/AGACf38Bf2AEf39/fwF/YAJ/fwBgA39/fwBgBH9/f38AYAN/f38BfmAAAGAFf39/f38Bf2ADfn9/AX9gAn5/AX9gBX9/f39/AGAGf3x/f39/AX9gAXwBfmACfH8BfAKXBSEDZW52Bm1lbW9yeQIBgAKAAgNlbnYFdGFibGUBcAEQEANlbnYKbWVtb3J5QmFzZQN/AANlbnYJdGFibGVCYXNlA38AA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYNdGVtcERvdWJsZVB0cgN/AANlbnYFQUJPUlQDfwADZW52CFNUQUNLVE9QA38AA2VudglTVEFDS19NQVgDfwADZW52B2N0dHpfaTgDfwAGZ2xvYmFsA05hTgN8AAZnbG9iYWwISW5maW5pdHkDfAADZW52DWVubGFyZ2VNZW1vcnkAAgNlbnYOZ2V0VG90YWxNZW1vcnkAAgNlbnYXYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkAAgNlbnYSYWJvcnRTdGFja092ZXJmbG93AAMDZW52C251bGxGdW5jX2lpAAMDZW52DW51bGxGdW5jX2lpaWkAAwNlbnYHX19fbG9jawADA2VudgtfX19zZXRFcnJObwADA2Vudg1fX19zeXNjYWxsMTQwAAQDZW52DV9fX3N5c2NhbGwxNDYABANlbnYMX19fc3lzY2FsbDU0AAQDZW52C19fX3N5c2NhbGw2AAQDZW52CV9fX3VubG9jawADA2VudiFfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQAAgNlbnYWX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZwAAA2VudhJfbGx2bV9zdGFja3Jlc3RvcmUAAwNlbnYPX2xsdm1fc3RhY2tzYXZlAAIDZW52D19wdGhyZWFkX2NyZWF0ZQAFA2Vudg1fcHRocmVhZF9qb2luAAQDZW52E19wdGhyZWFkX211dGV4X2luaXQABANlbnYIX3N5c2NvbmYAAQNSUQECAwYGAwIEAwcDCAcBCAAICQQACgYBAwEAAAECAQAEAAsBAwcBBwwNDQEADgQPEBERAAICAgQEBAAEAAEEAQQEAgoBAQAKAQAAAQEBBAUBAAZyFH8BIwILfwEjAwt/ASMEC38BIwULfwEj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IQQgBA8L9BEDC38EfgV8Iw0hDCAAvSEPIA9CNIghECAQp0H//wNxIQkgCUH/D3EhCgJAAkACQAJAIApBEHRBEHVBAGsOgBAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAQILAkAgAEQAAAAAAAAAAGIhBCAEBEAgAEQAAAAAAADwQ6IhFCAUIAEQRiEVIAEoAgAhBSAFQUBqIQYgFSESIAYhCAUgACESQQAhCAsgASAINgIAIBIhEQwDAAsACwJAIAAhEQwCAAsACwJAIBCnIQcgB0H/D3EhAiACQYJ4aiEDIAEgAzYCACAPQv////////+HgH+DIQ0gDUKAgICAgICA8D+EIQ4gDr8hEyATIRELCyARDwvkBAE7fyMNIT0gAEEARiEYAkAgGARAQQEhAwUgAUGAAUkhIyAjBEAgAUH/AXEhLiAAIC46AABBASEDDAILEEghNyA3QbwBaiE4IDgoAgAhOSA5KAIAITogOkEARiEEIAQEQCABQYB/cSEFIAVBgL8DRiEGIAYEQCABQf8BcSEIIAAgCDoAAEEBIQMMAwUQMSEHIAdB1AA2AgBBfyEDDAMLAAsgAUGAEEkhCSAJBEAgAUEGdiEKIApBwAFyIQsgC0H/AXEhDCAAQQFqIQ0gACAMOgAAIAFBP3EhDiAOQYABciEPIA9B/wFxIRAgDSAQOgAAQQIhAwwCCyABQYCwA0khESABQYBAcSESIBJBgMADRiETIBEgE3IhOyA7BEAgAUEMdiEUIBRB4AFyIRUgFUH/AXEhFiAAQQFqIRcgACAWOgAAIAFBBnYhGSAZQT9xIRogGkGAAXIhGyAbQf8BcSEcIABBAmohHSAXIBw6AAAgAUE/cSEeIB5BgAFyIR8gH0H/AXEhICAdICA6AABBAyED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ADYCACAPQQA2AgAgAkEANgIAIAVBADYCACADQQA2AgBBACEBCyABDws3AQR/Iw0hBiMNQRBqJA0jDSMOTgRAQRAQAwsgBiEDIAMgAjYCACAAIAEgAxA1IQQgBiQNIAQPCwMAAQssACAAQf8BcUEYdCAAQQh1Qf8BcUEQdHIgAEEQdUH/AXFBCHRyIABBGHZyDwvkBAEEfyACQYDAAE4EQCAAIAEgAhAODwsgACEDIAAgAmohBiAAQQNxIAFBA3FGBEADQAJAIABBA3FFBEAMAQsCQCACQQBGBEAgAw8LIAAgASwAADoAACAAQQFqIQAgAUEBaiEBIAJBAWshAgsMAQsLIAZBfHEhBCAEQcAAayEFA0ACQCAAIAVMRQRADAELAkAgACABKAIANgIAIABBBGogAUEEaigCADYCACAAQQhqIAFBCGooAgA2AgAgAEEMaiABQQxqKAIANgIAIABBEGogAUEQaigCADYCACAAQRRqIAFBFGooAgA2AgAgAEEYaiABQRhqKAIANgIAIABBHGogAUEcaigCADYCACAAQSBqIAFBIGooAgA2AgAgAEEkaiABQSRqKAIANgIAIABBKGogAUEoaigCADYCACAAQSxqIAFBLGooAgA2AgAgAEEwaiABQTBqKAIANgIAIABBNGogAUE0aigCADYCACAAQThqIAFBOGooAgA2AgAgAEE8aiABQTxqKAIANgIAIABBwABqIQAgAUHAAGohAQsMAQsLA0ACQCAAIARIRQRADAELAkAgACABKAIANgIAIABBBGohACABQQRqIQELDAELCwUgBkEEayEEA0ACQCAAIARIRQRADAELAkAgACABLAAAOgAAIABBAWogAUEBaiwAADoAACAAQQJqIAFBAmosAAA6AAAgAEEDaiABQQNqLAAAOgAAIABBBGohACABQQRqIQELDAELCwsDQAJAIAAgBkhFBEAMAQsCQCAAIAEsAAA6AAAgAEEBaiEAIAFBAWohAQsMAQsLIAMPC/ECAQR/IAAgAmohAyABQf8BcSEBIAJBwwBOBEADQAJAIABBA3FBAEdFBEAMAQsCQCAAIAE6AAAgAEEBaiEACwwBCwsgA0F8cSEEIARBwABrIQUgASABQQh0ciABQRB0ciABQRh0ciEGA0ACQCAAIAVMRQRADAELAkAgACAGNgIAIABBBGogBjYCACAA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ExQVGggWBygkFxgJCg4bHyUjg4J9JiorPD0+P0NHSk1YWVpbXF1eX2BhY2RlZmdpamtscnN0eXp7fABJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBlcnJvciBpbmZvcm1hdGlvbg==';
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/.registry.npmjs.org/webpack/4.15.0/node_modules/webpack/buildin/module.js */ "./node_modules/.registry.npmjs.org/webpack/4.15.0/node_modules/webpack/buildin/module.js")(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uLi9zcmMvcHJvb2ZPZldvcmtXYXNtLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vLi93YXNtL2lvdGEtcGljby1wb3ctd2FzbS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dhc20vZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2FzbS9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXYXNtL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIiJdLCJuYW1lcyI6WyJNb2R1bGUiLCJtb2R1bGVPdmVycmlkZXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInN0YXR1cyIsInRvVGhyb3ciLCJFTlZJUk9OTUVOVF9JU19XRUIiLCJFTlZJUk9OTUVOVF9JU19XT1JLRVIiLCJFTlZJUk9OTUVOVF9JU19OT0RFIiwiRU5WSVJPTk1FTlRfSVNfU0hFTEwiLCJFcnJvciIsIndpbmRvdyIsImltcG9ydFNjcmlwdHMiLCJwcm9jZXNzIiwibm9kZUZTIiwibm9kZVBhdGgiLCJzaGVsbF9yZWFkIiwiZmlsZW5hbWUiLCJiaW5hcnkiLCJyZXQiLCJ0cnlQYXJzZUFzRGF0YVVSSSIsInJlcXVpcmUiLCJ0b1N0cmluZyIsInJlYWRCaW5hcnkiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiYXNzZXJ0IiwibGVuZ3RoIiwicmVwbGFjZSIsInNsaWNlIiwiZXgiLCJFeGl0U3RhdHVzIiwicmVhc29uIiwicCIsInJlYWQiLCJmIiwiZGF0YSIsImludEFycmF5VG9TdHJpbmciLCJyZWFkYnVmZmVyIiwic2NyaXB0QXJncyIsImFyZ3VtZW50cyIsInF1aXQiLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwicmVzcG9uc2VUZXh0IiwiZXJyIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2UiLCJyZWFkQXN5bmMiLCJvbmxvYWQiLCJvbmVycm9yIiwieGhyX29ubG9hZCIsInRpdGxlIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwicHJpbnQiLCJwcmludEVyciIsIndhcm4iLCJ1bmRlZmluZWQiLCJTVEFDS19BTElHTiIsInN0YWNrU2F2ZSIsInN0YWNrUmVzdG9yZSIsInN0YWNrQWxsb2MiLCJzZXRUZW1wUmV0MCIsImdldFRlbXBSZXQwIiwiYWJvcnQiLCJzdGF0aWNBbGxvYyIsInNpemUiLCJzdGF0aWNTZWFsZWQiLCJTVEFUSUNUT1AiLCJkeW5hbWljQWxsb2MiLCJEWU5BTUlDVE9QX1BUUiIsIkhFQVAzMiIsImVuZCIsIlRPVEFMX01FTU9SWSIsInN1Y2Nlc3MiLCJlbmxhcmdlTWVtb3J5IiwiYWxpZ25NZW1vcnkiLCJmYWN0b3IiLCJNYXRoIiwiY2VpbCIsImdldE5hdGl2ZVR5cGVTaXplIiwidHlwZSIsImJpdHMiLCJwYXJzZUludCIsInN1YnN0ciIsIndhcm5PbmNlIiwidGV4dCIsInNob3duIiwiZnVuY3Rpb25Qb2ludGVycyIsIkFycmF5IiwiYWRkRnVuY3Rpb24iLCJmdW5jIiwiaSIsInJlbW92ZUZ1bmN0aW9uIiwiaW5kZXgiLCJmdW5jV3JhcHBlcnMiLCJnZXRGdW5jV3JhcHBlciIsInNpZyIsInNpZ0NhY2hlIiwiZHluQ2FsbF93cmFwcGVyIiwiZHluQ2FsbCIsImFyZyIsInByb3RvdHlwZSIsImNhbGwiLCJtYWtlQmlnSW50IiwibG93IiwiaGlnaCIsInVuc2lnbmVkIiwicHRyIiwiYXJncyIsImFwcGx5IiwiY29uY2F0IiwiZ2V0Q29tcGlsZXJTZXR0aW5nIiwibmFtZSIsIlJ1bnRpbWUiLCJHTE9CQUxfQkFTRSIsIkFCT1JUIiwiRVhJVFNUQVRVUyIsImNvbmRpdGlvbiIsImdsb2JhbFNjb3BlIiwiZ2V0Q0Z1bmMiLCJpZGVudCIsIkpTZnVuY3MiLCJhcnIiLCJ3cml0ZUFycmF5VG9NZW1vcnkiLCJzdHIiLCJsZW4iLCJzdHJpbmdUb1VURjgiLCJ0b0MiLCJjY2FsbCIsInJldHVyblR5cGUiLCJhcmdUeXBlcyIsIm9wdHMiLCJjQXJncyIsInN0YWNrIiwiY29udmVydGVyIiwiUG9pbnRlcl9zdHJpbmdpZnkiLCJjd3JhcCIsImNmdW5jIiwibnVtZXJpY0FyZ3MiLCJldmVyeSIsIm51bWVyaWNSZXQiLCJzZXRWYWx1ZSIsInZhbHVlIiwibm9TYWZlIiwiY2hhckF0IiwiSEVBUDgiLCJIRUFQMTYiLCJ0ZW1wSTY0IiwidGVtcERvdWJsZSIsIk1hdGhfYWJzIiwiTWF0aF9taW4iLCJNYXRoX2Zsb29yIiwiTWF0aF9jZWlsIiwiSEVBUEYzMiIsIkhFQVBGNjQiLCJnZXRWYWx1ZSIsIkFMTE9DX05PUk1BTCIsIkFMTE9DX1NUQUNLIiwiQUxMT0NfU1RBVElDIiwiQUxMT0NfRFlOQU1JQyIsIkFMTE9DX05PTkUiLCJhbGxvY2F0ZSIsInNsYWIiLCJ0eXBlcyIsImFsbG9jYXRvciIsInplcm9pbml0Iiwic2luZ2xlVHlwZSIsIl9tYWxsb2MiLCJtYXgiLCJzdG9wIiwic3ViYXJyYXkiLCJIRUFQVTgiLCJzZXQiLCJ0eXBlU2l6ZSIsInByZXZpb3VzVHlwZSIsImN1cnIiLCJnZXRNZW1vcnkiLCJydW50aW1lSW5pdGlhbGl6ZWQiLCJoYXNVdGYiLCJ0IiwiTUFYX0NIVU5LIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluIiwiVVRGOFRvU3RyaW5nIiwiQXNjaWlUb1N0cmluZyIsImNoIiwic3RyaW5nVG9Bc2NpaSIsIm91dFB0ciIsIndyaXRlQXNjaWlUb01lbW9yeSIsIlVURjhEZWNvZGVyIiwiVGV4dERlY29kZXIiLCJVVEY4QXJyYXlUb1N0cmluZyIsInU4QXJyYXkiLCJpZHgiLCJlbmRQdHIiLCJkZWNvZGUiLCJ1MCIsInUxIiwidTIiLCJ1MyIsInU0IiwidTUiLCJzdHJpbmdUb1VURjhBcnJheSIsIm91dFU4QXJyYXkiLCJvdXRJZHgiLCJtYXhCeXRlc1RvV3JpdGUiLCJzdGFydElkeCIsImVuZElkeCIsInUiLCJjaGFyQ29kZUF0IiwibGVuZ3RoQnl0ZXNVVEY4IiwiVVRGMTZEZWNvZGVyIiwiVVRGMTZUb1N0cmluZyIsImNvZGVVbml0Iiwic3RyaW5nVG9VVEYxNiIsInN0YXJ0UHRyIiwibnVtQ2hhcnNUb1dyaXRlIiwibGVuZ3RoQnl0ZXNVVEYxNiIsIlVURjMyVG9TdHJpbmciLCJ1dGYzMiIsInN0cmluZ1RvVVRGMzIiLCJ0cmFpbFN1cnJvZ2F0ZSIsImxlbmd0aEJ5dGVzVVRGMzIiLCJhbGxvY2F0ZVVURjgiLCJhbGxvY2F0ZVVURjhPblN0YWNrIiwiZGVtYW5nbGUiLCJkZW1hbmdsZUFsbCIsInJlZ2V4IiwieCIsInkiLCJqc1N0YWNrVHJhY2UiLCJlIiwic3RhY2tUcmFjZSIsImpzIiwiUEFHRV9TSVpFIiwiV0FTTV9QQUdFX1NJWkUiLCJBU01KU19QQUdFX1NJWkUiLCJNSU5fVE9UQUxfTUVNT1JZIiwiYWxpZ25VcCIsIm11bHRpcGxlIiwiSEVBUCIsIkhFQVBVMTYiLCJIRUFQVTMyIiwidXBkYXRlR2xvYmFsQnVmZmVyIiwiYnVmIiwidXBkYXRlR2xvYmFsQnVmZmVyVmlld3MiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJTVEFUSUNfQkFTRSIsIlNUQUNLX0JBU0UiLCJTVEFDS1RPUCIsIlNUQUNLX01BWCIsIkRZTkFNSUNfQkFTRSIsIndyaXRlU3RhY2tDb29raWUiLCJjaGVja1N0YWNrQ29va2llIiwiYWJvcnRTdGFja092ZXJmbG93IiwiYWxsb2NTaXplIiwiYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkiLCJUT1RBTF9TVEFDSyIsImJ5dGVMZW5ndGgiLCJXZWJBc3NlbWJseSIsIk1lbW9yeSIsIkFycmF5QnVmZmVyIiwiZ2V0VG90YWxNZW1vcnkiLCJjYWxsUnVudGltZUNhbGxiYWNrcyIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwic2hpZnQiLCJfX0FUUFJFUlVOX18iLCJfX0FUSU5JVF9fIiwiX19BVE1BSU5fXyIsIl9fQVRFWElUX18iLCJfX0FUUE9TVFJVTl9fIiwicnVudGltZUV4aXRlZCIsInByZVJ1biIsImFkZE9uUHJlUnVuIiwiZW5zdXJlSW5pdFJ1bnRpbWUiLCJwcmVNYWluIiwiZXhpdFJ1bnRpbWUiLCJwb3N0UnVuIiwiYWRkT25Qb3N0UnVuIiwiY2IiLCJ1bnNoaWZ0IiwiYWRkT25Jbml0IiwiYWRkT25QcmVNYWluIiwiYWRkT25FeGl0Iiwid3JpdGVTdHJpbmdUb01lbW9yeSIsInN0cmluZyIsImRvbnRBZGROdWxsIiwibGFzdENoYXIiLCJJbmZpbml0eSIsImFycmF5IiwidW5TaWduIiwiaWdub3JlIiwiYWJzIiwicG93IiwicmVTaWduIiwiaGFsZiIsIk1hdGhfY29zIiwiY29zIiwiTWF0aF9zaW4iLCJzaW4iLCJNYXRoX3RhbiIsInRhbiIsIk1hdGhfYWNvcyIsImFjb3MiLCJNYXRoX2FzaW4iLCJhc2luIiwiTWF0aF9hdGFuIiwiYXRhbiIsIk1hdGhfYXRhbjIiLCJhdGFuMiIsIk1hdGhfZXhwIiwiZXhwIiwiTWF0aF9sb2ciLCJNYXRoX3NxcnQiLCJzcXJ0IiwiZmxvb3IiLCJNYXRoX3BvdyIsIk1hdGhfaW11bCIsImltdWwiLCJNYXRoX2Zyb3VuZCIsImZyb3VuZCIsIk1hdGhfcm91bmQiLCJyb3VuZCIsIk1hdGhfbWF4IiwiTWF0aF9jbHozMiIsImNsejMyIiwiTWF0aF90cnVuYyIsInRydW5jIiwicnVuRGVwZW5kZW5jaWVzIiwicnVuRGVwZW5kZW5jeVdhdGNoZXIiLCJkZXBlbmRlbmNpZXNGdWxmaWxsZWQiLCJydW5EZXBlbmRlbmN5VHJhY2tpbmciLCJnZXRVbmlxdWVSdW5EZXBlbmRlbmN5IiwiaWQiLCJvcmlnIiwicmFuZG9tIiwiYWRkUnVuRGVwZW5kZW5jeSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRlcCIsInJlbW92ZVJ1bkRlcGVuZGVuY3kiLCJtZW1vcnlJbml0aWFsaXplciIsIkZTIiwiZXJyb3IiLCJpbml0IiwiY3JlYXRlRGF0YUZpbGUiLCJjcmVhdGVQcmVsb2FkZWRGaWxlIiwiY3JlYXRlTGF6eUZpbGUiLCJta2RldiIsInJlZ2lzdGVyRGV2aWNlIiwiYW5hbHl6ZVBhdGgiLCJsb2FkRmlsZXNGcm9tREIiLCJFcnJub0Vycm9yIiwiZGF0YVVSSVByZWZpeCIsImlzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJpbmRleE9mIiwiaW50ZWdyYXRlV2FzbUpTIiwibWV0aG9kIiwid2FzbVRleHRGaWxlIiwid2FzbUJpbmFyeUZpbGUiLCJhc21qc0NvZGVGaWxlIiwid2FzbVBhZ2VTaXplIiwiaW5mbyIsImV4cG9ydHMiLCJtZXJnZU1lbW9yeSIsIm5ld0J1ZmZlciIsIm9sZEJ1ZmZlciIsIm9sZFZpZXciLCJuZXdWaWV3IiwiZml4SW1wb3J0cyIsImltcG9ydHMiLCJnZXRCaW5hcnkiLCJnZXRCaW5hcnlQcm9taXNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJjYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZG9OYXRpdmVXYXNtIiwiZ2xvYmFsIiwiZW52IiwicHJvdmlkZWRCdWZmZXIiLCJOYU4iLCJyZWNlaXZlSW5zdGFuY2UiLCJpbnN0YW5jZSIsIm1vZHVsZSIsIm1lbW9yeSIsInRydWVNb2R1bGUiLCJyZWNlaXZlSW5zdGFudGlhdGVkU291cmNlIiwib3V0cHV0IiwiaW5zdGFudGlhdGVBcnJheUJ1ZmZlciIsInJlY2VpdmVyIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0cmVhbWluZyIsImFzbWpzUmVhbGxvY0J1ZmZlciIsIndhc21SZWFsbG9jQnVmZmVyIiwiUEFHRV9NVUxUSVBMRSIsIm9sZCIsIm9sZFNpemUiLCJyZXN1bHQiLCJncm93IiwiZmluYWxNZXRob2QiLCJUQUJMRV9TSVpFIiwiTUFYX1RBQkxFX1NJWkUiLCJUYWJsZSIsImVsZW1lbnQiLCJtZXRob2RIYW5kbGVyIiwiQVNNX0NPTlNUUyIsInB1c2giLCJTVEFUSUNfQlVNUCIsInRlbXBEb3VibGVQdHIiLCJjb3B5VGVtcEZsb2F0IiwiY29weVRlbXBEb3VibGUiLCJfX19sb2NrIiwiU1lTQ0FMTFMiLCJ2YXJhcmdzIiwiZ2V0IiwiZ2V0U3RyIiwiZ2V0NjQiLCJnZXRaZXJvIiwiX19fc3lzY2FsbDE0MCIsIndoaWNoIiwic3RyZWFtIiwiZ2V0U3RyZWFtRnJvbUZEIiwib2Zmc2V0X2hpZ2giLCJvZmZzZXRfbG93Iiwid2hlbmNlIiwib2Zmc2V0IiwibGxzZWVrIiwicG9zaXRpb24iLCJnZXRkZW50cyIsImVycm5vIiwiZmx1c2hfTk9fRklMRVNZU1RFTSIsImZmbHVzaCIsInByaW50Q2hhciIsIl9fX3N5c2NhbGwxNDYiLCJidWZmZXJzIiwiaW92IiwiaW92Y250IiwiaiIsIl9fX3N5c2NhbGw1NCIsIl9fX3N5c2NhbGw2IiwiY2xvc2UiLCJfX191bmxvY2siLCJfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQiLCJjdHR6X2k4IiwiX2xsdm1fY3R0el9pMzIiLCJfbGx2bV9jdHR6X2k2NCIsImwiLCJoIiwiX2xsdm1fc3RhY2tyZXN0b3JlIiwic2VsZiIsIl9sbHZtX3N0YWNrc2F2ZSIsIkxMVk1fU0FWRURTVEFDS1MiLCJzcGxpY2UiLCJfZW1zY3JpcHRlbl9tZW1jcHlfYmlnIiwiZGVzdCIsInNyYyIsIm51bSIsIl9wdGhyZWFkX2NyZWF0ZSIsIl9wdGhyZWFkX2pvaW4iLCJfcHRocmVhZF9tdXRleF9pbml0IiwiX19fc2V0RXJyTm8iLCJFUlJOT19DT0RFUyIsIkVQRVJNIiwiRU5PRU5UIiwiRVNSQ0giLCJFSU5UUiIsIkVJTyIsIkVOWElPIiwiRTJCSUciLCJFTk9FWEVDIiwiRUJBREYiLCJFQ0hJTEQiLCJFQUdBSU4iLCJFV09VTERCTE9DSyIsIkVOT01FTSIsIkVBQ0NFUyIsIkVGQVVMVCIsIkVOT1RCTEsiLCJFQlVTWSIsIkVFWElTVCIsIkVYREVWIiwiRU5PREVWIiwiRU5PVERJUiIsIkVJU0RJUiIsIkVJTlZBTCIsIkVORklMRSIsIkVNRklMRSIsIkVOT1RUWSIsIkVUWFRCU1kiLCJFRkJJRyIsIkVOT1NQQyIsIkVTUElQRSIsIkVST0ZTIiwiRU1MSU5LIiwiRVBJUEUiLCJFRE9NIiwiRVJBTkdFIiwiRU5PTVNHIiwiRUlEUk0iLCJFQ0hSTkciLCJFTDJOU1lOQyIsIkVMM0hMVCIsIkVMM1JTVCIsIkVMTlJORyIsIkVVTkFUQ0giLCJFTk9DU0kiLCJFTDJITFQiLCJFREVBRExLIiwiRU5PTENLIiwiRUJBREUiLCJFQkFEUiIsIkVYRlVMTCIsIkVOT0FOTyIsIkVCQURSUUMiLCJFQkFEU0xUIiwiRURFQURMT0NLIiwiRUJGT05UIiwiRU5PU1RSIiwiRU5PREFUQSIsIkVUSU1FIiwiRU5PU1IiLCJFTk9ORVQiLCJFTk9QS0ciLCJFUkVNT1RFIiwiRU5PTElOSyIsIkVBRFYiLCJFU1JNTlQiLCJFQ09NTSIsIkVQUk9UTyIsIkVNVUxUSUhPUCIsIkVET1RET1QiLCJFQkFETVNHIiwiRU5PVFVOSVEiLCJFQkFERkQiLCJFUkVNQ0hHIiwiRUxJQkFDQyIsIkVMSUJCQUQiLCJFTElCU0NOIiwiRUxJQk1BWCIsIkVMSUJFWEVDIiwiRU5PU1lTIiwiRU5PVEVNUFRZIiwiRU5BTUVUT09MT05HIiwiRUxPT1AiLCJFT1BOT1RTVVBQIiwiRVBGTk9TVVBQT1JUIiwiRUNPTk5SRVNFVCIsIkVOT0JVRlMiLCJFQUZOT1NVUFBPUlQiLCJFUFJPVE9UWVBFIiwiRU5PVFNPQ0siLCJFTk9QUk9UT09QVCIsIkVTSFVURE9XTiIsIkVDT05OUkVGVVNFRCIsIkVBRERSSU5VU0UiLCJFQ09OTkFCT1JURUQiLCJFTkVUVU5SRUFDSCIsIkVORVRET1dOIiwiRVRJTUVET1VUIiwiRUhPU1RET1dOIiwiRUhPU1RVTlJFQUNIIiwiRUlOUFJPR1JFU1MiLCJFQUxSRUFEWSIsIkVERVNUQUREUlJFUSIsIkVNU0dTSVpFIiwiRVBST1RPTk9TVVBQT1JUIiwiRVNPQ0tUTk9TVVBQT1JUIiwiRUFERFJOT1RBVkFJTCIsIkVORVRSRVNFVCIsIkVJU0NPTk4iLCJFTk9UQ09OTiIsIkVUT09NQU5ZUkVGUyIsIkVVU0VSUyIsIkVEUVVPVCIsIkVTVEFMRSIsIkVOT1RTVVAiLCJFTk9NRURJVU0iLCJFSUxTRVEiLCJFT1ZFUkZMT1ciLCJFQ0FOQ0VMRUQiLCJFTk9UUkVDT1ZFUkFCTEUiLCJFT1dORVJERUFEIiwiRVNUUlBJUEUiLCJfc3lzY29uZiIsIm1heEhlYXBTaXplIiwibmF2aWdhdG9yIiwiQVNTRVJUSU9OUyIsImludEFycmF5RnJvbVN0cmluZyIsInN0cmluZ3kiLCJ1OGFycmF5IiwibnVtQnl0ZXNXcml0dGVuIiwiY2hyIiwiam9pbiIsImRlY29kZUJhc2U2NCIsImF0b2IiLCJpbnB1dCIsImtleVN0ciIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpbnRBcnJheUZyb21CYXNlNjQiLCJzIiwiQnVmZmVyIiwiZnJvbSIsIl8iLCJieXRlT2Zmc2V0IiwiZGVjb2RlZCIsImJ5dGVzIiwibnVsbEZ1bmNfaWkiLCJudWxsRnVuY19paWlpIiwiaW52b2tlX2lpIiwiYTEiLCJpbnZva2VfaWlpaSIsImEyIiwiYTMiLCJhc21HbG9iYWxBcmciLCJhc21MaWJyYXJ5QXJnIiwiYXNtIiwicmVhbF9fX19lcnJub19sb2NhdGlvbiIsInJlYWxfX2NjdXJsX3BvdyIsInJlYWxfX2ZmbHVzaCIsInJlYWxfX2ZyZWUiLCJyZWFsX19sbHZtX2Jzd2FwX2kzMiIsInJlYWxfX21hbGxvYyIsInJlYWxfX3B0aHJlYWRfbXV0ZXhfbG9jayIsInJlYWxfX3B0aHJlYWRfbXV0ZXhfdW5sb2NrIiwicmVhbF9fc2JyayIsInJlYWxfZXN0YWJsaXNoU3RhY2tTcGFjZSIsInJlYWxfZ2V0VGVtcFJldDAiLCJyZWFsX3NldFRlbXBSZXQwIiwicmVhbF9zZXRUaHJldyIsInJlYWxfc3RhY2tBbGxvYyIsInJlYWxfc3RhY2tSZXN0b3JlIiwicmVhbF9zdGFja1NhdmUiLCJfX19lcnJub19sb2NhdGlvbiIsIl9jY3VybF9wb3ciLCJfZmZsdXNoIiwiX2ZyZWUiLCJfbGx2bV9ic3dhcF9pMzIiLCJfbWVtY3B5IiwiX21lbXNldCIsIl9wdGhyZWFkX211dGV4X2xvY2siLCJfcHRocmVhZF9tdXRleF91bmxvY2siLCJfc2JyayIsImVzdGFibGlzaFN0YWNrU3BhY2UiLCJydW5Qb3N0U2V0cyIsInNldFRocmV3IiwiZHluQ2FsbF9paSIsImR5bkNhbGxfaWlpaSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwibWVzc2FnZSIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFN0YWNrVG9wIiwiY2FsbGVkTWFpbiIsInJ1bkNhbGxlciIsInJ1biIsImRvUnVuIiwic2V0VGltZW91dCIsImNoZWNrVW5mbHVzaGVkQ29udGVudCIsImhhcyIsImZsdXNoIiwiZXhpdCIsImltcGxpY2l0IiwiYWJvcnREZWNvcmF0b3JzIiwid2hhdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHRyYSIsImZvckVhY2giLCJkZWNvcmF0b3IiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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LEVBQTZJLENBQTdJLEVBQStJLENBQS9JLEVBQWlKLENBQWpKLEVBQW1KLENBQW5KLEVBQXFKLENBQXJKLEVBQXVKLENBQXZKLEVBQXlKLENBQXpKLEVBQTJKLENBQTNKLEVBQTZKLENBQTdKLEVBQStKLENBQS9KLEVBQWlLLENBQWpLLEVBQW1LLENBQW5LLEVBQXFLLENBQXJLLEVBQXVLLENBQXZLLEVBQXlLLENBQXpLLEVBQTJLLENBQTNLLEVBQTZLLENBQTdLLEVBQStLLENBQS9LLEVBQWlMLENBQWpMLEVBQW1MLENBQW5MLEVBQXFMLENBQXJMLEVBQXVMLENBQXZMLEVBQXlMLENBQXpMLEVBQTJMLENBQTNMLEVBQTZMLENBQTdMLEVBQStMLENBQS9MLEVBQWlNLENBQWpNLEVBQW1NLENBQW5NLEVBQXFNLENBQXJNLEVBQXVNLENBQXZNLEVBQXlNLENBQXpNLEVBQTJNLENBQTNNLEVBQTZNLENBQTdNLEVBQStNLENBQS9NLEVBQWlOLENBQWpOLEVBQW1OLENBQW5OLEVBQXFOLENBQXJOLEVBQXVOLENBQXZOLEVBQXlOLENBQXpOLEVBQTJOLENBQTNOLEVBQTZOLENBQTdOLEVBQStOLENBQS9OLEVBQWlPLENBQWpPLEVBQW1PLENBQW5PLEVBQXFPLENBQXJPLEVBQXVPLENBQXZPLEVBQXlPLENBQXpPLEVBQTJPLENBQTNPLEVBQTZPLENBQTdPLEVBQStPLENBQS9PLEVBQWlQLENBQWpQLEVBQW1QLENBQW5QLEVBQXFQLENBQXJQLEVBQXVQLENBQXZQLEVBQXlQLENBQXpQLEVBQTJQLENBQTNQLEVBQTZQLENBQTdQLEVBQStQLENBQS9QLEVBQWlRLENBQWpRLEVBQW1RLENBQW5RLEVBQXFRLENBQXJRLEVBQXVRLENBQXZRLEVBQXlRLENBQXpRLEVBQTJRLENBQTNRLEVBQTZRLENBQTdRLEVBQStRLENBQS9RLEVBQWlSLENBQWpSLEVBQW1SLENBQW5SLEVBQXFSLENBQXJSLEVBQXVSLENBQXZSLEVBQXlSLENBQXpSLEVBQTJSLENBQTNSLEVBQTZSLENBQTdSLEVBQStSLENBQS9SLEVBQWlTLENBQWpTLEVBQW1TLENBQW5TLEVBQXFTLENBQXJTLEVBQXVTLENBQXZTLEVBQXlTLENBQXpTLEVBQTJTLENBQTNTLEVBQTZTLENBQTdTLEVBQStTLENBQS9TLEVBQWlULENBQWpULEVBQW1ULENBQW5ULEVBQXFULENBQXJULEVBQXVULENBQXZULEVBQXlULENBQXpULEVBQTJULENBQTNULEVBQTZULENBQTdULEVBQStULENBQS9ULEVBQWlVLENBQWpVLEVBQW1VLENBQW5VLEVBQXFVLENBQXJVLEVBQXVVLENBQXZVLEVBQXlVLENBQXpVLEVBQTJVLENBQTNVLEVBQTZVLENBQTdVLEVBQStVLENBQS9VLEVBQWlWLENBQWpWLEVBQW1WLENBQW5WLEVBQXFWLENBQXJWLEVBQXVWLENBQXZWLEVBQXlWLENBQXpWLEVBQTJWLENBQTNWLEVBQTZWLENBQTdWLEVBQStWLENBQS9WLEVBQWlXLENBQWpXLEVBQW1XLENBQW5XLEVBQXFXLENBQXJXLEVBQXVXLENBQXZXLEVBQXlXLENBQXpXLEVBQTJXLENBQTNXLEVBQTZXLENBQTdXLEVBQStXLENBQS9XLEVBQWlYLENBQWpYLEVBQW1YLENBQW5YLEVBQXFYLENBQXJYLEVBQXVYLENBQXZYLEVBQXlYLENBQXpYLEVBQTJYLENBQTNYLEVBQTZYLENBQTdYLEVBQStYLENBQS9YLEVBQWlZLENBQWpZLEVBQW1ZLENBQW5ZLEVBQXFZLENBQXJZLEVBQXVZLENBQXZZLEVBQXlZLENBQXpZLEVBQTJZLENBQTNZLEVBQTZZLENBQTdZLEVBQStZLENBQS9ZLEVBQWlaLENBQWpaLEVBQW1aLENBQW5aLEVBQXFaLENBQXJaLEVBQXVaLENBQXZaLEVBQXlaLENBQXpaLEVBQTJaLENBQTNaLEVBQTZaLENBQTdaLEVBQStaLENBQS9aLEVBQWlhLENBQWphLEVBQW1hLENBQW5hLEVBQXFhLENBQXJhLEVBQXVhLENBQXZhLEVBQXlhLENBQXphLEVBQTJhLENBQTNhLEVBQTZhLENBQTdhLEVBQSthLENBQS9hLEVBQWliLENBQWpiLEVBQW1iLENBQW5iLEVBQXFiLENBQXJiLEVBQXViLENBQXZi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QUFLLEVBQUw7QUFDRSxlQUFPLENBQVA7O0FBQ0YsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxDQUFDLENBQVI7O0FBQ0YsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxDQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxDQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxHQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0UsZUFBTyxDQUFQOztBQUNGLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssQ0FBTDtBQUNFLGVBQU8sSUFBUDs7QUFDRixXQUFLLEVBQUw7QUFDQSxXQUFLLEVBQUw7QUFDQSxXQUFLLEVB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QUFXLFlBQVc7QUFBRSxTQUFPQSxNQUFQO0FBQWdCLENBQXhDO0FBQUEscUdBREcsS0FFQSxFOzs7Ozs7Ozs7Ozs7QUNwc0ZMLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLDhFIiwiZmlsZSI6ImlvdGEtcGljby1wb3ctd2FzbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vcG93LXdhc21cIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vcG93LXdhc21cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUG93V2FzbVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZXNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29ya1dhc21cIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NkVU5CUVd0REluMD0iLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZW1zY3JpcHRlblwiIC8+XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0Jhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgaW90YV9waWNvX3Bvd193YXNtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3dhc20vaW90YS1waWNvLXBvdy13YXNtXCIpKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIFdlYkFzc2VtYmx5LlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtXYXNtIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHdlYlBsYXRmb3JtIFByb3ZpZGVzIHBsYXRmb3JtIHNwZWNpZmljIGZ1bmN0aW9ucywgb3B0aW9uYWwgbW9zdGx5IHVzZWQgZm9yIHRlc3RpbmcuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIHRpbWUgZm9yIGF0dGFjaG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJQbGF0Zm9ybSwgdGltZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0aW1lU2VydmljZSk7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHdlYlBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJQbGF0Zm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIHdlYkFzc2VtYmx5VHlwZTogdHlwZW9mIFdlYkFzc2VtYmx5LFxyXG4gICAgICAgICAgICAgICAgd2FzbU1vZHVsZUxvYWRlcjogaW90YV9waWNvX3Bvd193YXNtXzEuZGVmYXVsdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViUGxhdGZvcm0gPSB3ZWJQbGF0Zm9ybTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGF3YWl0IHN1cGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fd2ViUGxhdGZvcm0ud2ViQXNzZW1ibHlUeXBlKSB8fCB0aGlzLl93ZWJQbGF0Zm9ybS53ZWJBc3NlbWJseVR5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk5vIFdlYkFzc2VtYmx5IHN1cHBvcnQgZGV0ZWN0ZWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHt9O1xyXG4gICAgICAgICAgICBtb2R1bGUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jY3VybFBvdyA9IG1vZHVsZS5jd3JhcChcImNjdXJsX3Bvd1wiLCBcInN0cmluZ1wiLCBbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2ViUGxhdGZvcm0ud2FzbU1vZHVsZUxvYWRlcihtb2R1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW50aWFsaXppbmcgdGhlIFdlYkFzc2VtYmx5IE1vZHVsZVwiLCB1bmRlZmluZWQsIGVycikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NjdXJsUG93KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXZWJBc3NlbWJseSBub3QgbG9hZGVkLCBoYXZlIHlvdSBjYWxsZWQgaW5pdGlhbGl6ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY2N1cmxQb3codHJ5dGVzLnRvU3RyaW5nKCksIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya1dhc20gPSBQcm9vZk9mV29ya1dhc207XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdFhZWE50TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwzQnliMjltVDJaWGIzSnJWMkZ6YlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFc2IwTkJRVzlETzBGQlEzQkRMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNNRVZCUVhWRk8wRkJRM1pGTEhkR1FVRnhSanRCUVVOeVJpdzJSRUZCTUVRN1FVRkRNVVFzWVVGQllUdEJRVU5pTEc5R1FVRjVSRHRCUVVkNlJEczdSMEZGUnp0QlFVTklMSEZDUVVFMlFpeFRRVUZSTEdsRFFVRmxPMGxCVDJoRU96czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxGZEJRVEJDTEVWQlFVVXNWMEZCTUVJN1VVRkRPVVFzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlc1Q0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3V1VGRGJrTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSenRuUWtGRGFFSXNaVUZCWlN4RlFVRkZMRTlCUVU4c1YwRkJWenRuUWtGRGJrTXNaMEpCUVdkQ0xFVkJRVVVzTkVKQlFXVTdZVUZEY0VNc1EwRkJRenRUUVVOTU8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1EwRkJRenRUUVVOdVF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVN1VVRkRia0lzVFVGQlRTeExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRla0lzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCVHl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlF5OURMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR1ZCUVdVc1MwRkJTeXhYUVVGWExFVkJRVVU3WjBKQlF6bEhMRTFCUVUwc1EwRkJReXhKUVVGSkxIbENRVUZYTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6bEVPMWxCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVkVzUlVGQlJTeERRVUZETzFsQlJYWkNMRTFCUVUwc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SFFVRkhMRVZCUVVVN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpORkxFOUJRVThzUlVGQlJTeERRVUZETzFsQlEyUXNRMEZCUXl4RFFVRkRPMWxCUlVZc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUXpsRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdaMEpCUTFZc1RVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4M1JFRkJkMFFzUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOeVJ6dFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRmpMRVZCUVVVc2EwSkJRVEJDTzFGQlF6ZEVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRNME1zU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlFUVVGdlJDeERRVUZETEVOQlFVTTdZVUZETDBVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzJkQ1FVTjBReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzJGQlEzaEZPMWxCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTjRSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzJGQlF5OUVPMWxCUlVRc1NVRkJTVHRuUWtGRFFTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4clFrRkJhMElzUTBGQlF5eERRVUZETzJkQ1FVVnlSU3hQUVVGUExFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM1JETzFsQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1owSkJRMVlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTJZN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdRMEZEU2p0QlFTOUZSQ3d3UTBFclJVTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiIsInZhciBNb2R1bGUgPSBmdW5jdGlvbihNb2R1bGUpIHtcclxuICBNb2R1bGUgPSBNb2R1bGUgfHwge307XHJcblxyXG4vLyBUaGUgTW9kdWxlIG9iamVjdDogT3VyIGludGVyZmFjZSB0byB0aGUgb3V0c2lkZSB3b3JsZC4gV2UgaW1wb3J0XHJcbi8vIGFuZCBleHBvcnQgdmFsdWVzIG9uIGl0LiBUaGVyZSBhcmUgdmFyaW91cyB3YXlzIE1vZHVsZSBjYW4gYmUgdXNlZDpcclxuLy8gMS4gTm90IGRlZmluZWQuIFdlIGNyZWF0ZSBpdCBoZXJlXHJcbi8vIDIuIEEgZnVuY3Rpb24gcGFyYW1ldGVyLCBmdW5jdGlvbihNb2R1bGUpIHsgLi5nZW5lcmF0ZWQgY29kZS4uIH1cclxuLy8gMy4gcHJlLXJ1biBhcHBlbmRlZCBpdCwgdmFyIE1vZHVsZSA9IHt9OyAuLmdlbmVyYXRlZCBjb2RlLi5cclxuLy8gNC4gRXh0ZXJuYWwgc2NyaXB0IHRhZyBkZWZpbmVzIHZhciBNb2R1bGUuXHJcbi8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgTW9kdWxlIGFscmVhZHkgZXhpc3RzIChlLmcuIGNhc2UgMyBhYm92ZSkuXHJcbi8vIFN1YnN0aXR1dGlvbiB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYWN0dWFsIGNvZGUgb24gbGF0ZXIgc3RhZ2Ugb2YgdGhlIGJ1aWxkLFxyXG4vLyB0aGlzIHdheSBDbG9zdXJlIENvbXBpbGVyIHdpbGwgbm90IG1hbmdsZSBpdCAoZS5nLiBjYXNlIDQuIGFib3ZlKS5cclxuLy8gTm90ZSB0aGF0IGlmIHlvdSB3YW50IHRvIHJ1biBjbG9zdXJlLCBhbmQgYWxzbyB0byB1c2UgTW9kdWxlXHJcbi8vIGFmdGVyIHRoZSBnZW5lcmF0ZWQgY29kZSwgeW91IHdpbGwgbmVlZCB0byBkZWZpbmUgICB2YXIgTW9kdWxlID0ge307XHJcbi8vIGJlZm9yZSB0aGUgY29kZS4gVGhlbiB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGNvZGUsIGFuZCB5b3VcclxuLy8gY2FuIGNvbnRpbnVlIHRvIHVzZSBNb2R1bGUgYWZ0ZXJ3YXJkcyBhcyB3ZWxsLlxyXG52YXIgTW9kdWxlID0gdHlwZW9mIE1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBNb2R1bGUgOiB7fTtcclxuXHJcbi8vIC0tcHJlLWpzZXMgYXJlIGVtaXR0ZWQgYWZ0ZXIgdGhlIE1vZHVsZSBpbnRlZ3JhdGlvbiBjb2RlLCBzbyB0aGF0IHRoZXkgY2FuXHJcbi8vIHJlZmVyIHRvIE1vZHVsZSAoaWYgdGhleSBjaG9vc2U7IHRoZXkgY2FuIGFsc28gZGVmaW5lIE1vZHVsZSlcclxuLy8ge3tQUkVfSlNFU319XHJcblxyXG4vLyBTb21ldGltZXMgYW4gZXhpc3RpbmcgTW9kdWxlIG9iamVjdCBleGlzdHMgd2l0aCBwcm9wZXJ0aWVzXHJcbi8vIG1lYW50IHRvIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBtb2R1bGUgZnVuY3Rpb25hbGl0eS4gSGVyZVxyXG4vLyB3ZSBjb2xsZWN0IHRob3NlIHByb3BlcnRpZXMgYW5kIHJlYXBwbHkgX2FmdGVyXyB3ZSBjb25maWd1cmVcclxuLy8gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQncyBkZWZhdWx0cyB0byBhdm9pZCBoYXZpbmcgdG8gYmUgc29cclxuLy8gZGVmZW5zaXZlIGR1cmluZyBpbml0aWFsaXphdGlvbi5cclxudmFyIG1vZHVsZU92ZXJyaWRlcyA9IHt9O1xyXG52YXIga2V5O1xyXG5mb3IgKGtleSBpbiBNb2R1bGUpIHtcclxuICBpZiAoTW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIG1vZHVsZU92ZXJyaWRlc1trZXldID0gTW9kdWxlW2tleV07XHJcbiAgfVxyXG59XHJcblxyXG5Nb2R1bGVbJ2FyZ3VtZW50cyddID0gW107XHJcbk1vZHVsZVsndGhpc1Byb2dyYW0nXSA9ICcuL3RoaXMucHJvZ3JhbSc7XHJcbk1vZHVsZVsncXVpdCddID0gZnVuY3Rpb24oc3RhdHVzLCB0b1Rocm93KSB7XHJcbiAgdGhyb3cgdG9UaHJvdztcclxufTtcclxuTW9kdWxlWydwcmVSdW4nXSA9IFtdO1xyXG5Nb2R1bGVbJ3Bvc3RSdW4nXSA9IFtdO1xyXG5cclxuLy8gVGhlIGVudmlyb25tZW50IHNldHVwIGNvZGUgYmVsb3cgaXMgY3VzdG9taXplZCB0byB1c2UgTW9kdWxlLlxyXG4vLyAqKiogRW52aXJvbm1lbnQgc2V0dXAgY29kZSAqKipcclxudmFyIEVOVklST05NRU5UX0lTX1dFQiA9IGZhbHNlO1xyXG52YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSID0gZmFsc2U7XHJcbnZhciBFTlZJUk9OTUVOVF9JU19OT0RFID0gZmFsc2U7XHJcbnZhciBFTlZJUk9OTUVOVF9JU19TSEVMTCA9IGZhbHNlO1xyXG5cclxuLy8gVGhyZWUgY29uZmlndXJhdGlvbnMgd2UgY2FuIGJlIHJ1bm5pbmcgaW46XHJcbi8vIDEpIFdlIGNvdWxkIGJlIHRoZSBhcHBsaWNhdGlvbiBtYWluKCkgdGhyZWFkIHJ1bm5pbmcgaW4gdGhlIG1haW4gSlMgVUkgdGhyZWFkLiAoRU5WSVJPTk1FTlRfSVNfV09SS0VSID09IGZhbHNlIGFuZCBFTlZJUk9OTUVOVF9JU19QVEhSRUFEID09IGZhbHNlKVxyXG4vLyAyKSBXZSBjb3VsZCBiZSB0aGUgYXBwbGljYXRpb24gbWFpbigpIHRocmVhZCBwcm94aWVkIHRvIHdvcmtlci4gKHdpdGggRW1zY3JpcHRlbiAtcyBQUk9YWV9UT19XT1JLRVI9MSkgKEVOVklST05NRU5UX0lTX1dPUktFUiA9PSB0cnVlLCBFTlZJUk9OTUVOVF9JU19QVEhSRUFEID09IGZhbHNlKVxyXG4vLyAzKSBXZSBjb3VsZCBiZSBhbiBhcHBsaWNhdGlvbiBwdGhyZWFkIHJ1bm5pbmcgaW4gYSB3b3JrZXIuIChFTlZJUk9OTUVOVF9JU19XT1JLRVIgPT0gdHJ1ZSBhbmQgRU5WSVJPTk1FTlRfSVNfUFRIUkVBRCA9PSB0cnVlKVxyXG5cclxuaWYgKE1vZHVsZVsnRU5WSVJPTk1FTlQnXSkge1xyXG4gIGlmIChNb2R1bGVbJ0VOVklST05NRU5UJ10gPT09ICdXRUInKSB7XHJcbiAgICBFTlZJUk9OTUVOVF9JU19XRUIgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoTW9kdWxlWydFTlZJUk9OTUVOVCddID09PSAnV09SS0VSJykge1xyXG4gICAgRU5WSVJPTk1FTlRfSVNfV09SS0VSID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKE1vZHVsZVsnRU5WSVJPTk1FTlQnXSA9PT0gJ05PREUnKSB7XHJcbiAgICBFTlZJUk9OTUVOVF9JU19OT0RFID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKE1vZHVsZVsnRU5WSVJPTk1FTlQnXSA9PT0gJ1NIRUxMJykge1xyXG4gICAgRU5WSVJPTk1FTlRfSVNfU0hFTEwgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZVtcXCdFTlZJUk9OTUVOVFxcJ10gdmFsdWUgaXMgbm90IHZhbGlkLiBtdXN0IGJlIG9uZSBvZjogV0VCfFdPUktFUnxOT0RFfFNIRUxMLicpO1xyXG4gIH1cclxufSBlbHNlIHtcclxuICBFTlZJUk9OTUVOVF9JU19XRUIgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcclxuICBFTlZJUk9OTUVOVF9JU19XT1JLRVIgPSB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJztcclxuICBFTlZJUk9OTUVOVF9JU19OT0RFID0gdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nICYmICFFTlZJUk9OTUVOVF9JU19XRUIgJiYgIUVOVklST05NRU5UX0lTX1dPUktFUjtcclxuICBFTlZJUk9OTUVOVF9JU19TSEVMTCA9ICFFTlZJUk9OTUVOVF9JU19XRUIgJiYgIUVOVklST05NRU5UX0lTX05PREUgJiYgIUVOVklST05NRU5UX0lTX1dPUktFUjtcclxufVxyXG5cclxuXHJcbmlmIChFTlZJUk9OTUVOVF9JU19OT0RFKSB7XHJcbiAgLy8gRXhwb3NlIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIHNhbWUgc2ltcGxlIHdheSB0aGF0IHRoZSBzaGVsbHMgd29ya1xyXG4gIC8vIE5vdGUgdGhhdCB3ZSBwb2xsdXRlIHRoZSBnbG9iYWwgbmFtZXNwYWNlIGhlcmUsIG90aGVyd2lzZSB3ZSBicmVhayBpbiBub2RlXHJcbiAgdmFyIG5vZGVGUztcclxuICB2YXIgbm9kZVBhdGg7XHJcblxyXG4gIE1vZHVsZVsncmVhZCddID0gZnVuY3Rpb24gc2hlbGxfcmVhZChmaWxlbmFtZSwgYmluYXJ5KSB7XHJcbiAgICB2YXIgcmV0O1xyXG4gICAgcmV0ID0gdHJ5UGFyc2VBc0RhdGFVUkkoZmlsZW5hbWUpO1xyXG4gICAgaWYgKCFyZXQpIHtcclxuICAgICAgaWYgKCFub2RlRlMpIG5vZGVGUyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbiAgICAgIGlmICghbm9kZVBhdGgpIG5vZGVQYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG4gICAgICBmaWxlbmFtZSA9IG5vZGVQYXRoWydub3JtYWxpemUnXShmaWxlbmFtZSk7XHJcbiAgICAgIHJldCA9IG5vZGVGU1sncmVhZEZpbGVTeW5jJ10oZmlsZW5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJpbmFyeSA/IHJldCA6IHJldC50b1N0cmluZygpO1xyXG4gIH07XHJcblxyXG4gIE1vZHVsZVsncmVhZEJpbmFyeSddID0gZnVuY3Rpb24gcmVhZEJpbmFyeShmaWxlbmFtZSkge1xyXG4gICAgdmFyIHJldCA9IE1vZHVsZVsncmVhZCddKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgIGlmICghcmV0LmJ1ZmZlcikge1xyXG4gICAgICByZXQgPSBuZXcgVWludDhBcnJheShyZXQpO1xyXG4gICAgfVxyXG4gICAgYXNzZXJ0KHJldC5idWZmZXIpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9O1xyXG5cclxuICBpZiAocHJvY2Vzc1snYXJndiddLmxlbmd0aCA+IDEpIHtcclxuICAgIE1vZHVsZVsndGhpc1Byb2dyYW0nXSA9IHByb2Nlc3NbJ2FyZ3YnXVsxXS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcbiAgfVxyXG5cclxuICBNb2R1bGVbJ2FyZ3VtZW50cyddID0gcHJvY2Vzc1snYXJndiddLnNsaWNlKDIpO1xyXG5cclxuICAvLyBNT0RVTEFSSVpFIHdpbGwgZXhwb3J0IHRoZSBtb2R1bGUgaW4gdGhlIHByb3BlciBwbGFjZSBvdXRzaWRlLCB3ZSBkb24ndCBuZWVkIHRvIGV4cG9ydCBoZXJlXHJcblxyXG4gIHByb2Nlc3NbJ29uJ10oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZnVuY3Rpb24oZXgpIHtcclxuICAgIC8vIHN1cHByZXNzIEV4aXRTdGF0dXMgZXhjZXB0aW9ucyBmcm9tIHNob3dpbmcgYW4gZXJyb3JcclxuICAgIGlmICghKGV4IGluc3RhbmNlb2YgRXhpdFN0YXR1cykpIHtcclxuICAgICAgdGhyb3cgZXg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gQ3VycmVudGx5IG5vZGUgd2lsbCBzd2FsbG93IHVuaGFuZGxlZCByZWplY3Rpb25zLCBidXQgdGhpcyBiZWhhdmlvciBpc1xyXG4gIC8vIGRlcHJlY2F0ZWQsIGFuZCBpbiB0aGUgZnV0dXJlIGl0IHdpbGwgZXhpdCB3aXRoIGVycm9yIHN0YXR1cy5cclxuICBwcm9jZXNzWydvbiddKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBmdW5jdGlvbihyZWFzb24sIHApIHtcclxuICAgIE1vZHVsZVsncHJpbnRFcnInXSgnbm9kZS5qcyBleGl0aW5nIGR1ZSB0byB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nKTtcclxuICAgIHByb2Nlc3NbJ2V4aXQnXSgxKTtcclxuICB9KTtcclxuXHJcbiAgTW9kdWxlWydpbnNwZWN0J10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnW0Vtc2NyaXB0ZW4gTW9kdWxlIG9iamVjdF0nOyB9O1xyXG59XHJcbmVsc2UgaWYgKEVOVklST05NRU5UX0lTX1NIRUxMKSB7XHJcbiAgaWYgKHR5cGVvZiByZWFkICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICBNb2R1bGVbJ3JlYWQnXSA9IGZ1bmN0aW9uIHNoZWxsX3JlYWQoZikge1xyXG4gICAgICB2YXIgZGF0YSA9IHRyeVBhcnNlQXNEYXRhVVJJKGYpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBpbnRBcnJheVRvU3RyaW5nKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZWFkKGYpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIE1vZHVsZVsncmVhZEJpbmFyeSddID0gZnVuY3Rpb24gcmVhZEJpbmFyeShmKSB7XHJcbiAgICB2YXIgZGF0YTtcclxuICAgIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSShmKTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiByZWFkYnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShyZWFkYnVmZmVyKGYpKTtcclxuICAgIH1cclxuICAgIGRhdGEgPSByZWFkKGYsICdiaW5hcnknKTtcclxuICAgIGFzc2VydCh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBzY3JpcHRBcmdzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICBNb2R1bGVbJ2FyZ3VtZW50cyddID0gc2NyaXB0QXJncztcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIE1vZHVsZVsnYXJndW1lbnRzJ10gPSBhcmd1bWVudHM7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHF1aXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIE1vZHVsZVsncXVpdCddID0gZnVuY3Rpb24oc3RhdHVzLCB0b1Rocm93KSB7XHJcbiAgICAgIHF1aXQoc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZWxzZSBpZiAoRU5WSVJPTk1FTlRfSVNfV0VCIHx8IEVOVklST05NRU5UX0lTX1dPUktFUikge1xyXG4gIE1vZHVsZVsncmVhZCddID0gZnVuY3Rpb24gc2hlbGxfcmVhZCh1cmwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xyXG4gICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSSh1cmwpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBpbnRBcnJheVRvU3RyaW5nKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoRU5WSVJPTk1FTlRfSVNfV09SS0VSKSB7XHJcbiAgICBNb2R1bGVbJ3JlYWRCaW5hcnknXSA9IGZ1bmN0aW9uIHJlYWRCaW5hcnkodXJsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB4aHIuc2VuZChudWxsKTtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSSh1cmwpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgTW9kdWxlWydyZWFkQXN5bmMnXSA9IGZ1bmN0aW9uIHJlYWRBc3luYyh1cmwsIG9ubG9hZCwgb25lcnJvcikge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiB4aHJfb25sb2FkKCkge1xyXG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDAgfHwgKHhoci5zdGF0dXMgPT0gMCAmJiB4aHIucmVzcG9uc2UpKSB7IC8vIGZpbGUgVVJMcyBjYW4gcmV0dXJuIDBcclxuICAgICAgICBvbmxvYWQoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGRhdGEgPSB0cnlQYXJzZUFzRGF0YVVSSSh1cmwpO1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIG9ubG9hZChkYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIG9uZXJyb3IoKTtcclxuICAgIH07XHJcbiAgICB4aHIub25lcnJvciA9IG9uZXJyb3I7XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIGFyZ3VtZW50cyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgTW9kdWxlWydhcmd1bWVudHMnXSA9IGFyZ3VtZW50cztcclxuICB9XHJcblxyXG4gIE1vZHVsZVsnc2V0V2luZG93VGl0bGUnXSA9IGZ1bmN0aW9uKHRpdGxlKSB7IGRvY3VtZW50LnRpdGxlID0gdGl0bGUgfTtcclxufVxyXG5lbHNlIHtcclxuICAvLyBVbnJlYWNoYWJsZSBiZWNhdXNlIFNIRUxMIGlzIGRlcGVuZGVudCBvbiB0aGUgb3RoZXJzXHJcbiAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIHJ1bnRpbWUgZW52aXJvbm1lbnQnKTtcclxufVxyXG5cclxuLy8gY29uc29sZS5sb2cgaXMgY2hlY2tlZCBmaXJzdCwgYXMgJ3ByaW50JyBvbiB0aGUgd2ViIHdpbGwgb3BlbiBhIHByaW50IGRpYWxvZ3VlXHJcbi8vIHByaW50RXJyIGlzIHByZWZlcmFibGUgdG8gY29uc29sZS53YXJuICh3b3JrcyBiZXR0ZXIgaW4gc2hlbGxzKVxyXG5Nb2R1bGVbJ3ByaW50J10gPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgPyBjb25zb2xlLmxvZyA6ICh0eXBlb2YgcHJpbnQgIT09ICd1bmRlZmluZWQnID8gcHJpbnQgOiBudWxsKTtcclxuTW9kdWxlWydwcmludEVyciddID0gdHlwZW9mIHByaW50RXJyICE9PSAndW5kZWZpbmVkJyA/IHByaW50RXJyIDogKCh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB8fCBNb2R1bGVbJ3ByaW50J10pO1xyXG5cclxuLy8gKioqIEVudmlyb25tZW50IHNldHVwIGNvZGUgKioqXHJcblxyXG4vLyBDbG9zdXJlIGhlbHBlcnNcclxuTW9kdWxlLnByaW50ID0gTW9kdWxlWydwcmludCddO1xyXG5Nb2R1bGUucHJpbnRFcnIgPSBNb2R1bGVbJ3ByaW50RXJyJ107XHJcblxyXG4vLyBNZXJnZSBiYWNrIGluIHRoZSBvdmVycmlkZXNcclxuZm9yIChrZXkgaW4gbW9kdWxlT3ZlcnJpZGVzKSB7XHJcbiAgaWYgKG1vZHVsZU92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICBNb2R1bGVba2V5XSA9IG1vZHVsZU92ZXJyaWRlc1trZXldO1xyXG4gIH1cclxufVxyXG4vLyBGcmVlIHRoZSBvYmplY3QgaGllcmFyY2h5IGNvbnRhaW5lZCBpbiB0aGUgb3ZlcnJpZGVzLCB0aGlzIGxldHMgdGhlIEdDXHJcbi8vIHJlY2xhaW0gZGF0YSB1c2VkIGUuZy4gaW4gbWVtb3J5SW5pdGlhbGl6ZXJSZXF1ZXN0LCB3aGljaCBpcyBhIGxhcmdlIHR5cGVkIGFycmF5LlxyXG5tb2R1bGVPdmVycmlkZXMgPSB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8vIHt7UFJFQU1CTEVfQURESVRJT05TfX1cclxuXHJcbnZhciBTVEFDS19BTElHTiA9IDE2O1xyXG5cclxuLy8gc3RhY2sgbWFuYWdlbWVudCwgYW5kIG90aGVyIGZ1bmN0aW9uYWxpdHkgdGhhdCBpcyBwcm92aWRlZCBieSB0aGUgY29tcGlsZWQgY29kZSxcclxuLy8gc2hvdWxkIG5vdCBiZSB1c2VkIGJlZm9yZSBpdCBpcyByZWFkeVxyXG5zdGFja1NhdmUgPSBzdGFja1Jlc3RvcmUgPSBzdGFja0FsbG9jID0gc2V0VGVtcFJldDAgPSBnZXRUZW1wUmV0MCA9IGZ1bmN0aW9uKCkge1xyXG4gIGFib3J0KCdjYW5ub3QgdXNlIHRoZSBzdGFjayBiZWZvcmUgY29tcGlsZWQgY29kZSBpcyByZWFkeSB0byBydW4sIGFuZCBoYXMgcHJvdmlkZWQgc3RhY2sgYWNjZXNzJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdGF0aWNBbGxvYyhzaXplKSB7XHJcbiAgYXNzZXJ0KCFzdGF0aWNTZWFsZWQpO1xyXG4gIHZhciByZXQgPSBTVEFUSUNUT1A7XHJcbiAgU1RBVElDVE9QID0gKFNUQVRJQ1RPUCArIHNpemUgKyAxNSkgJiAtMTY7XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pY0FsbG9jKHNpemUpIHtcclxuICBhc3NlcnQoRFlOQU1JQ1RPUF9QVFIpO1xyXG4gIHZhciByZXQgPSBIRUFQMzJbRFlOQU1JQ1RPUF9QVFI+PjJdO1xyXG4gIHZhciBlbmQgPSAocmV0ICsgc2l6ZSArIDE1KSAmIC0xNjtcclxuICBIRUFQMzJbRFlOQU1JQ1RPUF9QVFI+PjJdID0gZW5kO1xyXG4gIGlmIChlbmQgPj0gVE9UQUxfTUVNT1JZKSB7XHJcbiAgICB2YXIgc3VjY2VzcyA9IGVubGFyZ2VNZW1vcnkoKTtcclxuICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICBIRUFQMzJbRFlOQU1JQ1RPUF9QVFI+PjJdID0gcmV0O1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxpZ25NZW1vcnkoc2l6ZSwgZmFjdG9yKSB7XHJcbiAgaWYgKCFmYWN0b3IpIGZhY3RvciA9IFNUQUNLX0FMSUdOOyAvLyBzdGFjayBhbGlnbm1lbnQgKDE2LWJ5dGUpIGJ5IGRlZmF1bHRcclxuICB2YXIgcmV0ID0gc2l6ZSA9IE1hdGguY2VpbChzaXplIC8gZmFjdG9yKSAqIGZhY3RvcjtcclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROYXRpdmVUeXBlU2l6ZSh0eXBlKSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdpMSc6IGNhc2UgJ2k4JzogcmV0dXJuIDE7XHJcbiAgICBjYXNlICdpMTYnOiByZXR1cm4gMjtcclxuICAgIGNhc2UgJ2kzMic6IHJldHVybiA0O1xyXG4gICAgY2FzZSAnaTY0JzogcmV0dXJuIDg7XHJcbiAgICBjYXNlICdmbG9hdCc6IHJldHVybiA0O1xyXG4gICAgY2FzZSAnZG91YmxlJzogcmV0dXJuIDg7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGlmICh0eXBlW3R5cGUubGVuZ3RoLTFdID09PSAnKicpIHtcclxuICAgICAgICByZXR1cm4gNDsgLy8gQSBwb2ludGVyXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZVswXSA9PT0gJ2knKSB7XHJcbiAgICAgICAgdmFyIGJpdHMgPSBwYXJzZUludCh0eXBlLnN1YnN0cigxKSk7XHJcbiAgICAgICAgYXNzZXJ0KGJpdHMgJSA4ID09PSAwKTtcclxuICAgICAgICByZXR1cm4gYml0cyAvIDg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhcm5PbmNlKHRleHQpIHtcclxuICBpZiAoIXdhcm5PbmNlLnNob3duKSB3YXJuT25jZS5zaG93biA9IHt9O1xyXG4gIGlmICghd2Fybk9uY2Uuc2hvd25bdGV4dF0pIHtcclxuICAgIHdhcm5PbmNlLnNob3duW3RleHRdID0gMTtcclxuICAgIE1vZHVsZS5wcmludEVycih0ZXh0KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxudmFyIGZ1bmN0aW9uUG9pbnRlcnMgPSBuZXcgQXJyYXkoMCk7XHJcblxyXG5mdW5jdGlvbiBhZGRGdW5jdGlvbihmdW5jKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvblBvaW50ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoIWZ1bmN0aW9uUG9pbnRlcnNbaV0pIHtcclxuICAgICAgZnVuY3Rpb25Qb2ludGVyc1tpXSA9IGZ1bmM7XHJcbiAgICAgIHJldHVybiAxICsgaTtcclxuICAgIH1cclxuICB9XHJcbiAgdGhyb3cgJ0ZpbmlzaGVkIHVwIGFsbCByZXNlcnZlZCBmdW5jdGlvbiBwb2ludGVycy4gVXNlIGEgaGlnaGVyIHZhbHVlIGZvciBSRVNFUlZFRF9GVU5DVElPTl9QT0lOVEVSUy4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGdW5jdGlvbihpbmRleCkge1xyXG4gIGZ1bmN0aW9uUG9pbnRlcnNbaW5kZXgtMV0gPSBudWxsO1xyXG59XHJcblxyXG52YXIgZnVuY1dyYXBwZXJzID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRGdW5jV3JhcHBlcihmdW5jLCBzaWcpIHtcclxuICBpZiAoIWZ1bmMpIHJldHVybjsgLy8gb24gbnVsbCBwb2ludGVyLCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgYXNzZXJ0KHNpZyk7XHJcbiAgaWYgKCFmdW5jV3JhcHBlcnNbc2lnXSkge1xyXG4gICAgZnVuY1dyYXBwZXJzW3NpZ10gPSB7fTtcclxuICB9XHJcbiAgdmFyIHNpZ0NhY2hlID0gZnVuY1dyYXBwZXJzW3NpZ107XHJcbiAgaWYgKCFzaWdDYWNoZVtmdW5jXSkge1xyXG4gICAgLy8gb3B0aW1pemUgYXdheSBhcmd1bWVudHMgdXNhZ2UgaW4gY29tbW9uIGNhc2VzXHJcbiAgICBpZiAoc2lnLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBzaWdDYWNoZVtmdW5jXSA9IGZ1bmN0aW9uIGR5bkNhbGxfd3JhcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gZHluQ2FsbChzaWcsIGZ1bmMpO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIGlmIChzaWcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHNpZ0NhY2hlW2Z1bmNdID0gZnVuY3Rpb24gZHluQ2FsbF93cmFwcGVyKGFyZykge1xyXG4gICAgICAgIHJldHVybiBkeW5DYWxsKHNpZywgZnVuYywgW2FyZ10pO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZ2VuZXJhbCBjYXNlXHJcbiAgICAgIHNpZ0NhY2hlW2Z1bmNdID0gZnVuY3Rpb24gZHluQ2FsbF93cmFwcGVyKCkge1xyXG4gICAgICAgIHJldHVybiBkeW5DYWxsKHNpZywgZnVuYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzaWdDYWNoZVtmdW5jXTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1ha2VCaWdJbnQobG93LCBoaWdoLCB1bnNpZ25lZCkge1xyXG4gIHJldHVybiB1bnNpZ25lZCA/ICgoKygobG93Pj4+MCkpKSsoKCsoKGhpZ2g+Pj4wKSkpKjQyOTQ5NjcyOTYuMCkpIDogKCgrKChsb3c+Pj4wKSkpKygoKygoaGlnaHwwKSkpKjQyOTQ5NjcyOTYuMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkeW5DYWxsKHNpZywgcHRyLCBhcmdzKSB7XHJcbiAgaWYgKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHtcclxuICAgIGFzc2VydChhcmdzLmxlbmd0aCA9PSBzaWcubGVuZ3RoLTEpO1xyXG4gICAgYXNzZXJ0KCgnZHluQ2FsbF8nICsgc2lnKSBpbiBNb2R1bGUsICdiYWQgZnVuY3Rpb24gcG9pbnRlciB0eXBlIC0gbm8gdGFibGUgZm9yIHNpZyBcXCcnICsgc2lnICsgJ1xcJycpO1xyXG4gICAgcmV0dXJuIE1vZHVsZVsnZHluQ2FsbF8nICsgc2lnXS5hcHBseShudWxsLCBbcHRyXS5jb25jYXQoYXJncykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhc3NlcnQoc2lnLmxlbmd0aCA9PSAxKTtcclxuICAgIGFzc2VydCgoJ2R5bkNhbGxfJyArIHNpZykgaW4gTW9kdWxlLCAnYmFkIGZ1bmN0aW9uIHBvaW50ZXIgdHlwZSAtIG5vIHRhYmxlIGZvciBzaWcgXFwnJyArIHNpZyArICdcXCcnKTtcclxuICAgIHJldHVybiBNb2R1bGVbJ2R5bkNhbGxfJyArIHNpZ10uY2FsbChudWxsLCBwdHIpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBpbGVyU2V0dGluZyhuYW1lKSB7XHJcbiAgdGhyb3cgJ1lvdSBtdXN0IGJ1aWxkIHdpdGggLXMgUkVUQUlOX0NPTVBJTEVSX1NFVFRJTkdTPTEgZm9yIGdldENvbXBpbGVyU2V0dGluZyBvciBlbXNjcmlwdGVuX2dldF9jb21waWxlcl9zZXR0aW5nIHRvIHdvcmsnO1xyXG59XHJcblxyXG52YXIgUnVudGltZSA9IHtcclxuICAvLyBGSVhNRSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBsYXllciBmb3IgcG9ydHMuIFN1cHBvcnQgc29tZSBSdW50aW1lLipcclxuICAvLyAgICAgICBmb3Igbm93LCBmaXggaXQgdGhlcmUsIHRoZW4gcmVtb3ZlIGl0IGZyb20gaGVyZS4gVGhhdCB3YXkgd2VcclxuICAvLyAgICAgICBjYW4gbWluaW1pemUgYW55IHBlcmlvZCBvZiBicmVha2FnZS5cclxuICBkeW5DYWxsOiBkeW5DYWxsLCAvLyBmb3IgU0RMMiBwb3J0XHJcbiAgLy8gaGVscGZ1bCBlcnJvcnNcclxuICBnZXRUZW1wUmV0MDogZnVuY3Rpb24oKSB7IGFib3J0KCdnZXRUZW1wUmV0MCgpIGlzIG5vdyBhIHRvcC1sZXZlbCBmdW5jdGlvbiwgYWZ0ZXIgcmVtb3ZpbmcgdGhlIFJ1bnRpbWUgb2JqZWN0LiBSZW1vdmUgXCJSdW50aW1lLlwiJykgfSxcclxuICBzdGF0aWNBbGxvYzogZnVuY3Rpb24oKSB7IGFib3J0KCdzdGF0aWNBbGxvYygpIGlzIG5vdyBhIHRvcC1sZXZlbCBmdW5jdGlvbiwgYWZ0ZXIgcmVtb3ZpbmcgdGhlIFJ1bnRpbWUgb2JqZWN0LiBSZW1vdmUgXCJSdW50aW1lLlwiJykgfSxcclxuICBzdGFja0FsbG9jOiBmdW5jdGlvbigpIHsgYWJvcnQoJ3N0YWNrQWxsb2MoKSBpcyBub3cgYSB0b3AtbGV2ZWwgZnVuY3Rpb24sIGFmdGVyIHJlbW92aW5nIHRoZSBSdW50aW1lIG9iamVjdC4gUmVtb3ZlIFwiUnVudGltZS5cIicpIH0sXHJcbn07XHJcblxyXG4vLyBUaGUgYWRkcmVzcyBnbG9iYWxzIGJlZ2luIGF0LiBWZXJ5IGxvdyBpbiBtZW1vcnksIGZvciBjb2RlIHNpemUgYW5kIG9wdGltaXphdGlvbiBvcHBvcnR1bml0aWVzLlxyXG4vLyBBYm92ZSAwIGlzIHN0YXRpYyBtZW1vcnksIHN0YXJ0aW5nIHdpdGggZ2xvYmFscy5cclxuLy8gVGhlbiB0aGUgc3RhY2suXHJcbi8vIFRoZW4gJ2R5bmFtaWMnIG1lbW9yeSBmb3Igc2Jyay5cclxudmFyIEdMT0JBTF9CQVNFID0gMTAyNDtcclxuXHJcblxyXG5cclxuLy8gPT09IFByZWFtYmxlIGxpYnJhcnkgc3R1ZmYgPT09XHJcblxyXG4vLyBEb2N1bWVudGF0aW9uIGZvciB0aGUgcHVibGljIEFQSXMgZGVmaW5lZCBpbiB0aGlzIGZpbGUgbXVzdCBiZSB1cGRhdGVkIGluOlxyXG4vLyAgICBzaXRlL3NvdXJjZS9kb2NzL2FwaV9yZWZlcmVuY2UvcHJlYW1ibGUuanMucnN0XHJcbi8vIEEgcHJlYnVpbHQgbG9jYWwgdmVyc2lvbiBvZiB0aGUgZG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQ6XHJcbi8vICAgIHNpdGUvYnVpbGQvdGV4dC9kb2NzL2FwaV9yZWZlcmVuY2UvcHJlYW1ibGUuanMudHh0XHJcbi8vIFlvdSBjYW4gYWxzbyBidWlsZCBkb2NzIGxvY2FsbHkgYXMgSFRNTCBvciBvdGhlciBmb3JtYXRzIGluIHNpdGUvXHJcbi8vIEFuIG9ubGluZSBIVE1MIHZlcnNpb24gKHdoaWNoIG1heSBiZSBvZiBhIGRpZmZlcmVudCB2ZXJzaW9uIG9mIEVtc2NyaXB0ZW4pXHJcbi8vICAgIGlzIHVwIGF0IGh0dHA6Ly9rcmlwa2VuLmdpdGh1Yi5pby9lbXNjcmlwdGVuLXNpdGUvZG9jcy9hcGlfcmVmZXJlbmNlL3ByZWFtYmxlLmpzLmh0bWxcclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJ1bnRpbWUgZXNzZW50aWFsc1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnZhciBBQk9SVCA9IDA7IC8vIHdoZXRoZXIgd2UgYXJlIHF1aXR0aW5nIHRoZSBhcHBsaWNhdGlvbi4gbm8gY29kZSBzaG91bGQgcnVuIGFmdGVyIHRoaXMuIHNldCBpbiBleGl0KCkgYW5kIGFib3J0KClcclxudmFyIEVYSVRTVEFUVVMgPSAwO1xyXG5cclxuLyoqIEB0eXBlIHtmdW5jdGlvbigqLCBzdHJpbmc9KX0gKi9cclxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgdGV4dCkge1xyXG4gIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICBhYm9ydCgnQXNzZXJ0aW9uIGZhaWxlZDogJyArIHRleHQpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGdsb2JhbFNjb3BlID0gdGhpcztcclxuXHJcbi8vIFJldHVybnMgdGhlIEMgZnVuY3Rpb24gd2l0aCBhIHNwZWNpZmllZCBpZGVudGlmaWVyIChmb3IgQysrLCB5b3UgbmVlZCB0byBkbyBtYW51YWwgbmFtZSBtYW5nbGluZylcclxuZnVuY3Rpb24gZ2V0Q0Z1bmMoaWRlbnQpIHtcclxuICB2YXIgZnVuYyA9IE1vZHVsZVsnXycgKyBpZGVudF07IC8vIGNsb3N1cmUgZXhwb3J0ZWQgZnVuY3Rpb25cclxuICBhc3NlcnQoZnVuYywgJ0Nhbm5vdCBjYWxsIHVua25vd24gZnVuY3Rpb24gJyArIGlkZW50ICsgJywgbWFrZSBzdXJlIGl0IGlzIGV4cG9ydGVkJyk7XHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbnZhciBKU2Z1bmNzID0ge1xyXG4gIC8vIEhlbHBlcnMgZm9yIGN3cmFwIC0tIGl0IGNhbid0IHJlZmVyIHRvIFJ1bnRpbWUgZGlyZWN0bHkgYmVjYXVzZSBpdCBtaWdodFxyXG4gIC8vIGJlIHJlbmFtZWQgYnkgY2xvc3VyZSwgaW5zdGVhZCBpdCBjYWxscyBKU2Z1bmNzWydzdGFja1NhdmUnXS5ib2R5IHRvIGZpbmRcclxuICAvLyBvdXQgd2hhdCB0aGUgbWluaWZpZWQgZnVuY3Rpb24gbmFtZSBpcy5cclxuICAnc3RhY2tTYXZlJzogZnVuY3Rpb24oKSB7XHJcbiAgICBzdGFja1NhdmUoKVxyXG4gIH0sXHJcbiAgJ3N0YWNrUmVzdG9yZSc6IGZ1bmN0aW9uKCkge1xyXG4gICAgc3RhY2tSZXN0b3JlKClcclxuICB9LFxyXG4gIC8vIHR5cGUgY29udmVyc2lvbiBmcm9tIGpzIHRvIGNcclxuICAnYXJyYXlUb0MnIDogZnVuY3Rpb24oYXJyKSB7XHJcbiAgICB2YXIgcmV0ID0gc3RhY2tBbGxvYyhhcnIubGVuZ3RoKTtcclxuICAgIHdyaXRlQXJyYXlUb01lbW9yeShhcnIsIHJldCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH0sXHJcbiAgJ3N0cmluZ1RvQycgOiBmdW5jdGlvbihzdHIpIHtcclxuICAgIHZhciByZXQgPSAwO1xyXG4gICAgaWYgKHN0ciAhPT0gbnVsbCAmJiBzdHIgIT09IHVuZGVmaW5lZCAmJiBzdHIgIT09IDApIHsgLy8gbnVsbCBzdHJpbmdcclxuICAgICAgLy8gYXQgbW9zdCA0IGJ5dGVzIHBlciBVVEYtOCBjb2RlIHBvaW50LCArMSBmb3IgdGhlIHRyYWlsaW5nICdcXDAnXHJcbiAgICAgIHZhciBsZW4gPSAoc3RyLmxlbmd0aCA8PCAyKSArIDE7XHJcbiAgICAgIHJldCA9IHN0YWNrQWxsb2MobGVuKTtcclxuICAgICAgc3RyaW5nVG9VVEY4KHN0ciwgcmV0LCBsZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbn07XHJcbi8vIEZvciBmYXN0IGxvb2t1cCBvZiBjb252ZXJzaW9uIGZ1bmN0aW9uc1xyXG52YXIgdG9DID0geydzdHJpbmcnIDogSlNmdW5jc1snc3RyaW5nVG9DJ10sICdhcnJheScgOiBKU2Z1bmNzWydhcnJheVRvQyddfTtcclxuXHJcbi8vIEMgY2FsbGluZyBpbnRlcmZhY2UuXHJcbmZ1bmN0aW9uIGNjYWxsIChpZGVudCwgcmV0dXJuVHlwZSwgYXJnVHlwZXMsIGFyZ3MsIG9wdHMpIHtcclxuICB2YXIgZnVuYyA9IGdldENGdW5jKGlkZW50KTtcclxuICB2YXIgY0FyZ3MgPSBbXTtcclxuICB2YXIgc3RhY2sgPSAwO1xyXG4gIGFzc2VydChyZXR1cm5UeXBlICE9PSAnYXJyYXknLCAnUmV0dXJuIHR5cGUgc2hvdWxkIG5vdCBiZSBcImFycmF5XCIuJyk7XHJcbiAgaWYgKGFyZ3MpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY29udmVydGVyID0gdG9DW2FyZ1R5cGVzW2ldXTtcclxuICAgICAgaWYgKGNvbnZlcnRlcikge1xyXG4gICAgICAgIGlmIChzdGFjayA9PT0gMCkgc3RhY2sgPSBzdGFja1NhdmUoKTtcclxuICAgICAgICBjQXJnc1tpXSA9IGNvbnZlcnRlcihhcmdzW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjQXJnc1tpXSA9IGFyZ3NbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdmFyIHJldCA9IGZ1bmMuYXBwbHkobnVsbCwgY0FyZ3MpO1xyXG4gIGlmIChyZXR1cm5UeXBlID09PSAnc3RyaW5nJykgcmV0ID0gUG9pbnRlcl9zdHJpbmdpZnkocmV0KTtcclxuICBpZiAoc3RhY2sgIT09IDApIHtcclxuICAgIHN0YWNrUmVzdG9yZShzdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGN3cmFwIChpZGVudCwgcmV0dXJuVHlwZSwgYXJnVHlwZXMpIHtcclxuICBhcmdUeXBlcyA9IGFyZ1R5cGVzIHx8IFtdO1xyXG4gIHZhciBjZnVuYyA9IGdldENGdW5jKGlkZW50KTtcclxuICAvLyBXaGVuIHRoZSBmdW5jdGlvbiB0YWtlcyBudW1iZXJzIGFuZCByZXR1cm5zIGEgbnVtYmVyLCB3ZSBjYW4ganVzdCByZXR1cm5cclxuICAvLyB0aGUgb3JpZ2luYWwgZnVuY3Rpb25cclxuICB2YXIgbnVtZXJpY0FyZ3MgPSBhcmdUeXBlcy5ldmVyeShmdW5jdGlvbih0eXBlKXsgcmV0dXJuIHR5cGUgPT09ICdudW1iZXInfSk7XHJcbiAgdmFyIG51bWVyaWNSZXQgPSByZXR1cm5UeXBlICE9PSAnc3RyaW5nJztcclxuICBpZiAobnVtZXJpY1JldCAmJiBudW1lcmljQXJncykge1xyXG4gICAgcmV0dXJuIGNmdW5jO1xyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gY2NhbGwoaWRlbnQsIHJldHVyblR5cGUsIGFyZ1R5cGVzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIEB0eXBlIHtmdW5jdGlvbihudW1iZXIsIG51bWJlciwgc3RyaW5nLCBib29sZWFuPSl9ICovXHJcbmZ1bmN0aW9uIHNldFZhbHVlKHB0ciwgdmFsdWUsIHR5cGUsIG5vU2FmZSkge1xyXG4gIHR5cGUgPSB0eXBlIHx8ICdpOCc7XHJcbiAgaWYgKHR5cGUuY2hhckF0KHR5cGUubGVuZ3RoLTEpID09PSAnKicpIHR5cGUgPSAnaTMyJzsgLy8gcG9pbnRlcnMgYXJlIDMyLWJpdFxyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSAnaTEnOiBIRUFQOFsoKHB0cik+PjApXT12YWx1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2k4JzogSEVBUDhbKChwdHIpPj4wKV09dmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdpMTYnOiBIRUFQMTZbKChwdHIpPj4xKV09dmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdpMzInOiBIRUFQMzJbKChwdHIpPj4yKV09dmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdpNjQnOiAodGVtcEk2NCA9IFt2YWx1ZT4+PjAsKHRlbXBEb3VibGU9dmFsdWUsKCsoTWF0aF9hYnModGVtcERvdWJsZSkpKSA+PSAxLjAgPyAodGVtcERvdWJsZSA+IDAuMCA/ICgoTWF0aF9taW4oKCsoTWF0aF9mbG9vcigodGVtcERvdWJsZSkvNDI5NDk2NzI5Ni4wKSkpLCA0Mjk0OTY3Mjk1LjApKXwwKT4+PjAgOiAofn4oKCsoTWF0aF9jZWlsKCh0ZW1wRG91YmxlIC0gKygoKH5+KHRlbXBEb3VibGUpKSk+Pj4wKSkvNDI5NDk2NzI5Ni4wKSkpKSk+Pj4wKSA6IDApXSxIRUFQMzJbKChwdHIpPj4yKV09dGVtcEk2NFswXSxIRUFQMzJbKCgocHRyKSsoNCkpPj4yKV09dGVtcEk2NFsxXSk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmbG9hdCc6IEhFQVBGMzJbKChwdHIpPj4yKV09dmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdkb3VibGUnOiBIRUFQRjY0WygocHRyKT4+MyldPXZhbHVlOyBicmVhaztcclxuICAgICAgZGVmYXVsdDogYWJvcnQoJ2ludmFsaWQgdHlwZSBmb3Igc2V0VmFsdWU6ICcgKyB0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEB0eXBlIHtmdW5jdGlvbihudW1iZXIsIHN0cmluZywgYm9vbGVhbj0pfSAqL1xyXG5mdW5jdGlvbiBnZXRWYWx1ZShwdHIsIHR5cGUsIG5vU2FmZSkge1xyXG4gIHR5cGUgPSB0eXBlIHx8ICdpOCc7XHJcbiAgaWYgKHR5cGUuY2hhckF0KHR5cGUubGVuZ3RoLTEpID09PSAnKicpIHR5cGUgPSAnaTMyJzsgLy8gcG9pbnRlcnMgYXJlIDMyLWJpdFxyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSAnaTEnOiByZXR1cm4gSEVBUDhbKChwdHIpPj4wKV07XHJcbiAgICAgIGNhc2UgJ2k4JzogcmV0dXJuIEhFQVA4WygocHRyKT4+MCldO1xyXG4gICAgICBjYXNlICdpMTYnOiByZXR1cm4gSEVBUDE2WygocHRyKT4+MSldO1xyXG4gICAgICBjYXNlICdpMzInOiByZXR1cm4gSEVBUDMyWygocHRyKT4+MildO1xyXG4gICAgICBjYXNlICdpNjQnOiByZXR1cm4gSEVBUDMyWygocHRyKT4+MildO1xyXG4gICAgICBjYXNlICdmbG9hdCc6IHJldHVybiBIRUFQRjMyWygocHRyKT4+MildO1xyXG4gICAgICBjYXNlICdkb3VibGUnOiByZXR1cm4gSEVBUEY2NFsoKHB0cik+PjMpXTtcclxuICAgICAgZGVmYXVsdDogYWJvcnQoJ2ludmFsaWQgdHlwZSBmb3IgZ2V0VmFsdWU6ICcgKyB0eXBlKTtcclxuICAgIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxudmFyIEFMTE9DX05PUk1BTCA9IDA7IC8vIFRyaWVzIHRvIHVzZSBfbWFsbG9jKClcclxudmFyIEFMTE9DX1NUQUNLID0gMTsgLy8gTGl2ZXMgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgY3VycmVudCBmdW5jdGlvbiBjYWxsXHJcbnZhciBBTExPQ19TVEFUSUMgPSAyOyAvLyBDYW5ub3QgYmUgZnJlZWRcclxudmFyIEFMTE9DX0RZTkFNSUMgPSAzOyAvLyBDYW5ub3QgYmUgZnJlZWQgZXhjZXB0IHRocm91Z2ggc2Jya1xyXG52YXIgQUxMT0NfTk9ORSA9IDQ7IC8vIERvIG5vdCBhbGxvY2F0ZVxyXG5cclxuLy8gYWxsb2NhdGUoKTogVGhpcyBpcyBmb3IgaW50ZXJuYWwgdXNlLiBZb3UgY2FuIHVzZSBpdCB5b3Vyc2VsZiBhcyB3ZWxsLCBidXQgdGhlIGludGVyZmFjZVxyXG4vLyAgICAgICAgICAgICBpcyBhIGxpdHRsZSB0cmlja3kgKHNlZSBkb2NzIHJpZ2h0IGJlbG93KS4gVGhlIHJlYXNvbiBpcyB0aGF0IGl0IGlzIG9wdGltaXplZFxyXG4vLyAgICAgICAgICAgICBmb3IgbXVsdGlwbGUgc3ludGF4ZXMgdG8gc2F2ZSBzcGFjZSBpbiBnZW5lcmF0ZWQgY29kZS4gU28geW91IHNob3VsZFxyXG4vLyAgICAgICAgICAgICBub3JtYWxseSBub3QgdXNlIGFsbG9jYXRlKCksIGFuZCBpbnN0ZWFkIGFsbG9jYXRlIG1lbW9yeSB1c2luZyBfbWFsbG9jKCksXHJcbi8vICAgICAgICAgICAgIGluaXRpYWxpemUgaXQgd2l0aCBzZXRWYWx1ZSgpLCBhbmQgc28gZm9ydGguXHJcbi8vIEBzbGFiOiBBbiBhcnJheSBvZiBkYXRhLCBvciBhIG51bWJlci4gSWYgYSBudW1iZXIsIHRoZW4gdGhlIHNpemUgb2YgdGhlIGJsb2NrIHRvIGFsbG9jYXRlLFxyXG4vLyAgICAgICAgaW4gKmJ5dGVzKiAobm90ZSB0aGF0IHRoaXMgaXMgc29tZXRpbWVzIGNvbmZ1c2luZzogdGhlIG5leHQgcGFyYW1ldGVyIGRvZXMgbm90XHJcbi8vICAgICAgICBhZmZlY3QgdGhpcyEpXHJcbi8vIEB0eXBlczogRWl0aGVyIGFuIGFycmF5IG9mIHR5cGVzLCBvbmUgZm9yIGVhY2ggYnl0ZSAob3IgMCBpZiBubyB0eXBlIGF0IHRoYXQgcG9zaXRpb24pLFxyXG4vLyAgICAgICAgIG9yIGEgc2luZ2xlIHR5cGUgd2hpY2ggaXMgdXNlZCBmb3IgdGhlIGVudGlyZSBibG9jay4gVGhpcyBvbmx5IG1hdHRlcnMgaWYgdGhlcmVcclxuLy8gICAgICAgICBpcyBpbml0aWFsIGRhdGEgLSBpZiBAc2xhYiBpcyBhIG51bWJlciwgdGhlbiB0aGlzIGRvZXMgbm90IG1hdHRlciBhdCBhbGwgYW5kIGlzXHJcbi8vICAgICAgICAgaWdub3JlZC5cclxuLy8gQGFsbG9jYXRvcjogSG93IHRvIGFsbG9jYXRlIG1lbW9yeSwgc2VlIEFMTE9DXypcclxuLyoqIEB0eXBlIHtmdW5jdGlvbigoVHlwZWRBcnJheXxBcnJheTxudW1iZXI+fG51bWJlciksIHN0cmluZywgbnVtYmVyLCBudW1iZXI9KX0gKi9cclxuZnVuY3Rpb24gYWxsb2NhdGUoc2xhYiwgdHlwZXMsIGFsbG9jYXRvciwgcHRyKSB7XHJcbiAgdmFyIHplcm9pbml0LCBzaXplO1xyXG4gIGlmICh0eXBlb2Ygc2xhYiA9PT0gJ251bWJlcicpIHtcclxuICAgIHplcm9pbml0ID0gdHJ1ZTtcclxuICAgIHNpemUgPSBzbGFiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB6ZXJvaW5pdCA9IGZhbHNlO1xyXG4gICAgc2l6ZSA9IHNsYWIubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNpbmdsZVR5cGUgPSB0eXBlb2YgdHlwZXMgPT09ICdzdHJpbmcnID8gdHlwZXMgOiBudWxsO1xyXG5cclxuICB2YXIgcmV0O1xyXG4gIGlmIChhbGxvY2F0b3IgPT0gQUxMT0NfTk9ORSkge1xyXG4gICAgcmV0ID0gcHRyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXQgPSBbdHlwZW9mIF9tYWxsb2MgPT09ICdmdW5jdGlvbicgPyBfbWFsbG9jIDogc3RhdGljQWxsb2MsIHN0YWNrQWxsb2MsIHN0YXRpY0FsbG9jLCBkeW5hbWljQWxsb2NdW2FsbG9jYXRvciA9PT0gdW5kZWZpbmVkID8gQUxMT0NfU1RBVElDIDogYWxsb2NhdG9yXShNYXRoLm1heChzaXplLCBzaW5nbGVUeXBlID8gMSA6IHR5cGVzLmxlbmd0aCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHplcm9pbml0KSB7XHJcbiAgICB2YXIgc3RvcDtcclxuICAgIHB0ciA9IHJldDtcclxuICAgIGFzc2VydCgocmV0ICYgMykgPT0gMCk7XHJcbiAgICBzdG9wID0gcmV0ICsgKHNpemUgJiB+Myk7XHJcbiAgICBmb3IgKDsgcHRyIDwgc3RvcDsgcHRyICs9IDQpIHtcclxuICAgICAgSEVBUDMyWygocHRyKT4+MildPTA7XHJcbiAgICB9XHJcbiAgICBzdG9wID0gcmV0ICsgc2l6ZTtcclxuICAgIHdoaWxlIChwdHIgPCBzdG9wKSB7XHJcbiAgICAgIEhFQVA4WygocHRyKyspPj4wKV09MDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBpZiAoc2luZ2xlVHlwZSA9PT0gJ2k4Jykge1xyXG4gICAgaWYgKHNsYWIuc3ViYXJyYXkgfHwgc2xhYi5zbGljZSkge1xyXG4gICAgICBIRUFQVTguc2V0KC8qKiBAdHlwZSB7IVVpbnQ4QXJyYXl9ICovIChzbGFiKSwgcmV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhFQVBVOC5zZXQobmV3IFVpbnQ4QXJyYXkoc2xhYiksIHJldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgdmFyIGkgPSAwLCB0eXBlLCB0eXBlU2l6ZSwgcHJldmlvdXNUeXBlO1xyXG4gIHdoaWxlIChpIDwgc2l6ZSkge1xyXG4gICAgdmFyIGN1cnIgPSBzbGFiW2ldO1xyXG5cclxuICAgIHR5cGUgPSBzaW5nbGVUeXBlIHx8IHR5cGVzW2ldO1xyXG4gICAgaWYgKHR5cGUgPT09IDApIHtcclxuICAgICAgaSsrO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIGFzc2VydCh0eXBlLCAnTXVzdCBrbm93IHdoYXQgdHlwZSB0byBzdG9yZSBpbiBhbGxvY2F0ZSEnKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PSAnaTY0JykgdHlwZSA9ICdpMzInOyAvLyBzcGVjaWFsIGNhc2U6IHdlIGhhdmUgb25lIGkzMiBoZXJlLCBhbmQgb25lIGkzMiBsYXRlclxyXG5cclxuICAgIHNldFZhbHVlKHJldCtpLCBjdXJyLCB0eXBlKTtcclxuXHJcbiAgICAvLyBubyBuZWVkIHRvIGxvb2sgdXAgc2l6ZSB1bmxlc3MgdHlwZSBjaGFuZ2VzLCBzbyBjYWNoZSBpdFxyXG4gICAgaWYgKHByZXZpb3VzVHlwZSAhPT0gdHlwZSkge1xyXG4gICAgICB0eXBlU2l6ZSA9IGdldE5hdGl2ZVR5cGVTaXplKHR5cGUpO1xyXG4gICAgICBwcmV2aW91c1R5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgaSArPSB0eXBlU2l6ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbi8vIEFsbG9jYXRlIG1lbW9yeSBkdXJpbmcgYW55IHN0YWdlIG9mIHN0YXJ0dXAgLSBzdGF0aWMgbWVtb3J5IGVhcmx5IG9uLCBkeW5hbWljIG1lbW9yeSBsYXRlciwgbWFsbG9jIHdoZW4gcmVhZHlcclxuZnVuY3Rpb24gZ2V0TWVtb3J5KHNpemUpIHtcclxuICBpZiAoIXN0YXRpY1NlYWxlZCkgcmV0dXJuIHN0YXRpY0FsbG9jKHNpemUpO1xyXG4gIGlmICghcnVudGltZUluaXRpYWxpemVkKSByZXR1cm4gZHluYW1pY0FsbG9jKHNpemUpO1xyXG4gIHJldHVybiBfbWFsbG9jKHNpemUpO1xyXG59XHJcblxyXG4vKiogQHR5cGUge2Z1bmN0aW9uKG51bWJlciwgbnVtYmVyPSl9ICovXHJcbmZ1bmN0aW9uIFBvaW50ZXJfc3RyaW5naWZ5KHB0ciwgbGVuZ3RoKSB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gMCB8fCAhcHRyKSByZXR1cm4gJyc7XHJcbiAgLy8gVE9ETzogdXNlIFRleHREZWNvZGVyXHJcbiAgLy8gRmluZCB0aGUgbGVuZ3RoLCBhbmQgY2hlY2sgZm9yIFVURiB3aGlsZSBkb2luZyBzb1xyXG4gIHZhciBoYXNVdGYgPSAwO1xyXG4gIHZhciB0O1xyXG4gIHZhciBpID0gMDtcclxuICB3aGlsZSAoMSkge1xyXG4gICAgYXNzZXJ0KHB0ciArIGkgPCBUT1RBTF9NRU1PUlkpO1xyXG4gICAgdCA9IEhFQVBVOFsoKChwdHIpKyhpKSk+PjApXTtcclxuICAgIGhhc1V0ZiB8PSB0O1xyXG4gICAgaWYgKHQgPT0gMCAmJiAhbGVuZ3RoKSBicmVhaztcclxuICAgIGkrKztcclxuICAgIGlmIChsZW5ndGggJiYgaSA9PSBsZW5ndGgpIGJyZWFrO1xyXG4gIH1cclxuICBpZiAoIWxlbmd0aCkgbGVuZ3RoID0gaTtcclxuXHJcbiAgdmFyIHJldCA9ICcnO1xyXG5cclxuICBpZiAoaGFzVXRmIDwgMTI4KSB7XHJcbiAgICB2YXIgTUFYX0NIVU5LID0gMTAyNDsgLy8gc3BsaXQgdXAgaW50byBjaHVua3MsIGJlY2F1c2UgLmFwcGx5IG9uIGEgaHVnZSBzdHJpbmcgY2FuIG92ZXJmbG93IHRoZSBzdGFja1xyXG4gICAgdmFyIGN1cnI7XHJcbiAgICB3aGlsZSAobGVuZ3RoID4gMCkge1xyXG4gICAgICBjdXJyID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIEhFQVBVOC5zdWJhcnJheShwdHIsIHB0ciArIE1hdGgubWluKGxlbmd0aCwgTUFYX0NIVU5LKSkpO1xyXG4gICAgICByZXQgPSByZXQgPyByZXQgKyBjdXJyIDogY3VycjtcclxuICAgICAgcHRyICs9IE1BWF9DSFVOSztcclxuICAgICAgbGVuZ3RoIC09IE1BWF9DSFVOSztcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBVVEY4VG9TdHJpbmcocHRyKTtcclxufVxyXG5cclxuLy8gR2l2ZW4gYSBwb2ludGVyICdwdHInIHRvIGEgbnVsbC10ZXJtaW5hdGVkIEFTQ0lJLWVuY29kZWQgc3RyaW5nIGluIHRoZSBlbXNjcmlwdGVuIEhFQVAsIHJldHVybnNcclxuLy8gYSBjb3B5IG9mIHRoYXQgc3RyaW5nIGFzIGEgSmF2YXNjcmlwdCBTdHJpbmcgb2JqZWN0LlxyXG5cclxuZnVuY3Rpb24gQXNjaWlUb1N0cmluZyhwdHIpIHtcclxuICB2YXIgc3RyID0gJyc7XHJcbiAgd2hpbGUgKDEpIHtcclxuICAgIHZhciBjaCA9IEhFQVA4WygocHRyKyspPj4wKV07XHJcbiAgICBpZiAoIWNoKSByZXR1cm4gc3RyO1xyXG4gICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY2gpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29waWVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QgJ3N0cicgdG8gdGhlIGVtc2NyaXB0ZW4gSEVBUCBhdCBhZGRyZXNzICdvdXRQdHInLFxyXG4vLyBudWxsLXRlcm1pbmF0ZWQgYW5kIGVuY29kZWQgaW4gQVNDSUkgZm9ybS4gVGhlIGNvcHkgd2lsbCByZXF1aXJlIGF0IG1vc3Qgc3RyLmxlbmd0aCsxIGJ5dGVzIG9mIHNwYWNlIGluIHRoZSBIRUFQLlxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9Bc2NpaShzdHIsIG91dFB0cikge1xyXG4gIHJldHVybiB3cml0ZUFzY2lpVG9NZW1vcnkoc3RyLCBvdXRQdHIsIGZhbHNlKTtcclxufVxyXG5cclxuLy8gR2l2ZW4gYSBwb2ludGVyICdwdHInIHRvIGEgbnVsbC10ZXJtaW5hdGVkIFVURjgtZW5jb2RlZCBzdHJpbmcgaW4gdGhlIGdpdmVuIGFycmF5IHRoYXQgY29udGFpbnMgdWludDggdmFsdWVzLCByZXR1cm5zXHJcbi8vIGEgY29weSBvZiB0aGF0IHN0cmluZyBhcyBhIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdC5cclxuXHJcbnZhciBVVEY4RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKSA6IHVuZGVmaW5lZDtcclxuZnVuY3Rpb24gVVRGOEFycmF5VG9TdHJpbmcodThBcnJheSwgaWR4KSB7XHJcbiAgdmFyIGVuZFB0ciA9IGlkeDtcclxuICAvLyBUZXh0RGVjb2RlciBuZWVkcyB0byBrbm93IHRoZSBieXRlIGxlbmd0aCBpbiBhZHZhbmNlLCBpdCBkb2Vzbid0IHN0b3Agb24gbnVsbCB0ZXJtaW5hdG9yIGJ5IGl0c2VsZi5cclxuICAvLyBBbHNvLCB1c2UgdGhlIGxlbmd0aCBpbmZvIHRvIGF2b2lkIHJ1bm5pbmcgdGlueSBzdHJpbmdzIHRocm91Z2ggVGV4dERlY29kZXIsIHNpbmNlIC5zdWJhcnJheSgpIGFsbG9jYXRlcyBnYXJiYWdlLlxyXG4gIHdoaWxlICh1OEFycmF5W2VuZFB0cl0pICsrZW5kUHRyO1xyXG5cclxuICBpZiAoZW5kUHRyIC0gaWR4ID4gMTYgJiYgdThBcnJheS5zdWJhcnJheSAmJiBVVEY4RGVjb2Rlcikge1xyXG4gICAgcmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZSh1OEFycmF5LnN1YmFycmF5KGlkeCwgZW5kUHRyKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciB1MCwgdTEsIHUyLCB1MywgdTQsIHU1O1xyXG5cclxuICAgIHZhciBzdHIgPSAnJztcclxuICAgIHdoaWxlICgxKSB7XHJcbiAgICAgIC8vIEZvciBVVEY4IGJ5dGUgc3RydWN0dXJlLCBzZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtOCNEZXNjcmlwdGlvbiBhbmQgaHR0cHM6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzIyNzkudHh0IGFuZCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzYyOVxyXG4gICAgICB1MCA9IHU4QXJyYXlbaWR4KytdO1xyXG4gICAgICBpZiAoIXUwKSByZXR1cm4gc3RyO1xyXG4gICAgICBpZiAoISh1MCAmIDB4ODApKSB7IHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTsgY29udGludWU7IH1cclxuICAgICAgdTEgPSB1OEFycmF5W2lkeCsrXSAmIDYzO1xyXG4gICAgICBpZiAoKHUwICYgMHhFMCkgPT0gMHhDMCkgeyBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKHUwICYgMzEpIDw8IDYpIHwgdTEpOyBjb250aW51ZTsgfVxyXG4gICAgICB1MiA9IHU4QXJyYXlbaWR4KytdICYgNjM7XHJcbiAgICAgIGlmICgodTAgJiAweEYwKSA9PSAweEUwKSB7XHJcbiAgICAgICAgdTAgPSAoKHUwICYgMTUpIDw8IDEyKSB8ICh1MSA8PCA2KSB8IHUyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHUzID0gdThBcnJheVtpZHgrK10gJiA2MztcclxuICAgICAgICBpZiAoKHUwICYgMHhGOCkgPT0gMHhGMCkge1xyXG4gICAgICAgICAgdTAgPSAoKHUwICYgNykgPDwgMTgpIHwgKHUxIDw8IDEyKSB8ICh1MiA8PCA2KSB8IHUzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1NCA9IHU4QXJyYXlbaWR4KytdICYgNjM7XHJcbiAgICAgICAgICBpZiAoKHUwICYgMHhGQykgPT0gMHhGOCkge1xyXG4gICAgICAgICAgICB1MCA9ICgodTAgJiAzKSA8PCAyNCkgfCAodTEgPDwgMTgpIHwgKHUyIDw8IDEyKSB8ICh1MyA8PCA2KSB8IHU0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdTUgPSB1OEFycmF5W2lkeCsrXSAmIDYzO1xyXG4gICAgICAgICAgICB1MCA9ICgodTAgJiAxKSA8PCAzMCkgfCAodTEgPDwgMjQpIHwgKHUyIDw8IDE4KSB8ICh1MyA8PCAxMikgfCAodTQgPDwgNikgfCB1NTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHUwIDwgMHgxMDAwMCkge1xyXG4gICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgY2ggPSB1MCAtIDB4MTAwMDA7XHJcbiAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwIHwgKGNoID4+IDEwKSwgMHhEQzAwIHwgKGNoICYgMHgzRkYpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gR2l2ZW4gYSBwb2ludGVyICdwdHInIHRvIGEgbnVsbC10ZXJtaW5hdGVkIFVURjgtZW5jb2RlZCBzdHJpbmcgaW4gdGhlIGVtc2NyaXB0ZW4gSEVBUCwgcmV0dXJuc1xyXG4vLyBhIGNvcHkgb2YgdGhhdCBzdHJpbmcgYXMgYSBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QuXHJcblxyXG5mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyKSB7XHJcbiAgcmV0dXJuIFVURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIpO1xyXG59XHJcblxyXG4vLyBDb3BpZXMgdGhlIGdpdmVuIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdCAnc3RyJyB0byB0aGUgZ2l2ZW4gYnl0ZSBhcnJheSBhdCBhZGRyZXNzICdvdXRJZHgnLFxyXG4vLyBlbmNvZGVkIGluIFVURjggZm9ybSBhbmQgbnVsbC10ZXJtaW5hdGVkLiBUaGUgY29weSB3aWxsIHJlcXVpcmUgYXQgbW9zdCBzdHIubGVuZ3RoKjQrMSBieXRlcyBvZiBzcGFjZSBpbiB0aGUgSEVBUC5cclxuLy8gVXNlIHRoZSBmdW5jdGlvbiBsZW5ndGhCeXRlc1VURjggdG8gY29tcHV0ZSB0aGUgZXhhY3QgbnVtYmVyIG9mIGJ5dGVzIChleGNsdWRpbmcgbnVsbCB0ZXJtaW5hdG9yKSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbCB3cml0ZS5cclxuLy8gUGFyYW1ldGVyczpcclxuLy8gICBzdHI6IHRoZSBKYXZhc2NyaXB0IHN0cmluZyB0byBjb3B5LlxyXG4vLyAgIG91dFU4QXJyYXk6IHRoZSBhcnJheSB0byBjb3B5IHRvLiBFYWNoIGluZGV4IGluIHRoaXMgYXJyYXkgaXMgYXNzdW1lZCB0byBiZSBvbmUgOC1ieXRlIGVsZW1lbnQuXHJcbi8vICAgb3V0SWR4OiBUaGUgc3RhcnRpbmcgb2Zmc2V0IGluIHRoZSBhcnJheSB0byBiZWdpbiB0aGUgY29weWluZy5cclxuLy8gICBtYXhCeXRlc1RvV3JpdGU6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBieXRlcyB0aGlzIGZ1bmN0aW9uIGNhbiB3cml0ZSB0byB0aGUgYXJyYXkuIFRoaXMgY291bnQgc2hvdWxkIGluY2x1ZGUgdGhlIG51bGxcclxuLy8gICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0b3IsIGkuZS4gaWYgbWF4Qnl0ZXNUb1dyaXRlPTEsIG9ubHkgdGhlIG51bGwgdGVybWluYXRvciB3aWxsIGJlIHdyaXR0ZW4gYW5kIG5vdGhpbmcgZWxzZS5cclxuLy8gICAgICAgICAgICAgICAgICAgIG1heEJ5dGVzVG9Xcml0ZT0wIGRvZXMgbm90IHdyaXRlIGFueSBieXRlcyB0byB0aGUgb3V0cHV0LCBub3QgZXZlbiB0aGUgbnVsbCB0ZXJtaW5hdG9yLlxyXG4vLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgd3JpdHRlbiwgRVhDTFVESU5HIHRoZSBudWxsIHRlcm1pbmF0b3IuXHJcblxyXG5mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsIG91dFU4QXJyYXksIG91dElkeCwgbWF4Qnl0ZXNUb1dyaXRlKSB7XHJcbiAgaWYgKCEobWF4Qnl0ZXNUb1dyaXRlID4gMCkpIC8vIFBhcmFtZXRlciBtYXhCeXRlc1RvV3JpdGUgaXMgbm90IG9wdGlvbmFsLiBOZWdhdGl2ZSB2YWx1ZXMsIDAsIG51bGwsIHVuZGVmaW5lZCBhbmQgZmFsc2UgZWFjaCBkb24ndCB3cml0ZSBvdXQgYW55IGJ5dGVzLlxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG4gIHZhciBzdGFydElkeCA9IG91dElkeDtcclxuICB2YXIgZW5kSWR4ID0gb3V0SWR4ICsgbWF4Qnl0ZXNUb1dyaXRlIC0gMTsgLy8gLTEgZm9yIHN0cmluZyBudWxsIHRlcm1pbmF0b3IuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIC8vIEdvdGNoYTogY2hhckNvZGVBdCByZXR1cm5zIGEgMTYtYml0IHdvcmQgdGhhdCBpcyBhIFVURi0xNiBlbmNvZGVkIGNvZGUgdW5pdCwgbm90IGEgVW5pY29kZSBjb2RlIHBvaW50IG9mIHRoZSBjaGFyYWN0ZXIhIFNvIGRlY29kZSBVVEYxNi0+VVRGMzItPlVURjguXHJcbiAgICAvLyBTZWUgaHR0cDovL3VuaWNvZGUub3JnL2ZhcS91dGZfYm9tLmh0bWwjdXRmMTYtM1xyXG4gICAgLy8gRm9yIFVURjggYnl0ZSBzdHJ1Y3R1cmUsIHNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VURi04I0Rlc2NyaXB0aW9uIGFuZCBodHRwczovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMjI3OS50eHQgYW5kIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNjI5XHJcbiAgICB2YXIgdSA9IHN0ci5jaGFyQ29kZUF0KGkpOyAvLyBwb3NzaWJseSBhIGxlYWQgc3Vycm9nYXRlXHJcbiAgICBpZiAodSA+PSAweEQ4MDAgJiYgdSA8PSAweERGRkYpIHUgPSAweDEwMDAwICsgKCh1ICYgMHgzRkYpIDw8IDEwKSB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgzRkYpO1xyXG4gICAgaWYgKHUgPD0gMHg3Rikge1xyXG4gICAgICBpZiAob3V0SWR4ID49IGVuZElkeCkgYnJlYWs7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gdTtcclxuICAgIH0gZWxzZSBpZiAodSA8PSAweDdGRikge1xyXG4gICAgICBpZiAob3V0SWR4ICsgMSA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4QzAgfCAodSA+PiA2KTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKHUgJiA2Myk7XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHhGRkZGKSB7XHJcbiAgICAgIGlmIChvdXRJZHggKyAyID49IGVuZElkeCkgYnJlYWs7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHhFMCB8ICh1ID4+IDEyKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDYpICYgNjMpO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4ODAgfCAodSAmIDYzKTtcclxuICAgIH0gZWxzZSBpZiAodSA8PSAweDFGRkZGRikge1xyXG4gICAgICBpZiAob3V0SWR4ICsgMyA+PSBlbmRJZHgpIGJyZWFrO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4RjAgfCAodSA+PiAxOCk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiAxMikgJiA2Myk7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHg4MCB8ICgodSA+PiA2KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKHUgJiA2Myk7XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHgzRkZGRkZGKSB7XHJcbiAgICAgIGlmIChvdXRJZHggKyA0ID49IGVuZElkeCkgYnJlYWs7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHhGOCB8ICh1ID4+IDI0KTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDE4KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDEyKSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDYpICYgNjMpO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4ODAgfCAodSAmIDYzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChvdXRJZHggKyA1ID49IGVuZElkeCkgYnJlYWs7XHJcbiAgICAgIG91dFU4QXJyYXlbb3V0SWR4KytdID0gMHhGQyB8ICh1ID4+IDMwKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDI0KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDE4KSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDEyKSAmIDYzKTtcclxuICAgICAgb3V0VThBcnJheVtvdXRJZHgrK10gPSAweDgwIHwgKCh1ID4+IDYpICYgNjMpO1xyXG4gICAgICBvdXRVOEFycmF5W291dElkeCsrXSA9IDB4ODAgfCAodSAmIDYzKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTnVsbC10ZXJtaW5hdGUgdGhlIHBvaW50ZXIgdG8gdGhlIGJ1ZmZlci5cclxuICBvdXRVOEFycmF5W291dElkeF0gPSAwO1xyXG4gIHJldHVybiBvdXRJZHggLSBzdGFydElkeDtcclxufVxyXG5cclxuLy8gQ29waWVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IFN0cmluZyBvYmplY3QgJ3N0cicgdG8gdGhlIGVtc2NyaXB0ZW4gSEVBUCBhdCBhZGRyZXNzICdvdXRQdHInLFxyXG4vLyBudWxsLXRlcm1pbmF0ZWQgYW5kIGVuY29kZWQgaW4gVVRGOCBmb3JtLiBUaGUgY29weSB3aWxsIHJlcXVpcmUgYXQgbW9zdCBzdHIubGVuZ3RoKjQrMSBieXRlcyBvZiBzcGFjZSBpbiB0aGUgSEVBUC5cclxuLy8gVXNlIHRoZSBmdW5jdGlvbiBsZW5ndGhCeXRlc1VURjggdG8gY29tcHV0ZSB0aGUgZXhhY3QgbnVtYmVyIG9mIGJ5dGVzIChleGNsdWRpbmcgbnVsbCB0ZXJtaW5hdG9yKSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbCB3cml0ZS5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4sIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yLlxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0ciwgb3V0UHRyLCBtYXhCeXRlc1RvV3JpdGUpIHtcclxuICBhc3NlcnQodHlwZW9mIG1heEJ5dGVzVG9Xcml0ZSA9PSAnbnVtYmVyJywgJ3N0cmluZ1RvVVRGOChzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSBpcyBtaXNzaW5nIHRoZSB0aGlyZCBwYXJhbWV0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGxlbmd0aCBvZiB0aGUgb3V0cHV0IGJ1ZmZlciEnKTtcclxuICByZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLCBIRUFQVTgsb3V0UHRyLCBtYXhCeXRlc1RvV3JpdGUpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgdGhlIGdpdmVuIEphdmFzY3JpcHQgc3RyaW5nIHRha2VzIGlmIGVuY29kZWQgYXMgYSBVVEY4IGJ5dGUgYXJyYXksIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yIGJ5dGUuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjgoc3RyKSB7XHJcbiAgdmFyIGxlbiA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIC8vIEdvdGNoYTogY2hhckNvZGVBdCByZXR1cm5zIGEgMTYtYml0IHdvcmQgdGhhdCBpcyBhIFVURi0xNiBlbmNvZGVkIGNvZGUgdW5pdCwgbm90IGEgVW5pY29kZSBjb2RlIHBvaW50IG9mIHRoZSBjaGFyYWN0ZXIhIFNvIGRlY29kZSBVVEYxNi0+VVRGMzItPlVURjguXHJcbiAgICAvLyBTZWUgaHR0cDovL3VuaWNvZGUub3JnL2ZhcS91dGZfYm9tLmh0bWwjdXRmMTYtM1xyXG4gICAgdmFyIHUgPSBzdHIuY2hhckNvZGVBdChpKTsgLy8gcG9zc2libHkgYSBsZWFkIHN1cnJvZ2F0ZVxyXG4gICAgaWYgKHUgPj0gMHhEODAwICYmIHUgPD0gMHhERkZGKSB1ID0gMHgxMDAwMCArICgodSAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4M0ZGKTtcclxuICAgIGlmICh1IDw9IDB4N0YpIHtcclxuICAgICAgKytsZW47XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHg3RkYpIHtcclxuICAgICAgbGVuICs9IDI7XHJcbiAgICB9IGVsc2UgaWYgKHUgPD0gMHhGRkZGKSB7XHJcbiAgICAgIGxlbiArPSAzO1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4MUZGRkZGKSB7XHJcbiAgICAgIGxlbiArPSA0O1xyXG4gICAgfSBlbHNlIGlmICh1IDw9IDB4M0ZGRkZGRikge1xyXG4gICAgICBsZW4gKz0gNTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxlbiArPSA2O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbGVuO1xyXG59XHJcblxyXG4vLyBHaXZlbiBhIHBvaW50ZXIgJ3B0cicgdG8gYSBudWxsLXRlcm1pbmF0ZWQgVVRGMTZMRS1lbmNvZGVkIHN0cmluZyBpbiB0aGUgZW1zY3JpcHRlbiBIRUFQLCByZXR1cm5zXHJcbi8vIGEgY29weSBvZiB0aGF0IHN0cmluZyBhcyBhIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdC5cclxuXHJcbnZhciBVVEYxNkRlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgIT09ICd1bmRlZmluZWQnID8gbmV3IFRleHREZWNvZGVyKCd1dGYtMTZsZScpIDogdW5kZWZpbmVkO1xyXG5mdW5jdGlvbiBVVEYxNlRvU3RyaW5nKHB0cikge1xyXG4gIGFzc2VydChwdHIgJSAyID09IDAsICdQb2ludGVyIHBhc3NlZCB0byBVVEYxNlRvU3RyaW5nIG11c3QgYmUgYWxpZ25lZCB0byB0d28gYnl0ZXMhJyk7XHJcbiAgdmFyIGVuZFB0ciA9IHB0cjtcclxuICAvLyBUZXh0RGVjb2RlciBuZWVkcyB0byBrbm93IHRoZSBieXRlIGxlbmd0aCBpbiBhZHZhbmNlLCBpdCBkb2Vzbid0IHN0b3Agb24gbnVsbCB0ZXJtaW5hdG9yIGJ5IGl0c2VsZi5cclxuICAvLyBBbHNvLCB1c2UgdGhlIGxlbmd0aCBpbmZvIHRvIGF2b2lkIHJ1bm5pbmcgdGlueSBzdHJpbmdzIHRocm91Z2ggVGV4dERlY29kZXIsIHNpbmNlIC5zdWJhcnJheSgpIGFsbG9jYXRlcyBnYXJiYWdlLlxyXG4gIHZhciBpZHggPSBlbmRQdHIgPj4gMTtcclxuICB3aGlsZSAoSEVBUDE2W2lkeF0pICsraWR4O1xyXG4gIGVuZFB0ciA9IGlkeCA8PCAxO1xyXG5cclxuICBpZiAoZW5kUHRyIC0gcHRyID4gMzIgJiYgVVRGMTZEZWNvZGVyKSB7XHJcbiAgICByZXR1cm4gVVRGMTZEZWNvZGVyLmRlY29kZShIRUFQVTguc3ViYXJyYXkocHRyLCBlbmRQdHIpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIHZhciBzdHIgPSAnJztcclxuICAgIHdoaWxlICgxKSB7XHJcbiAgICAgIHZhciBjb2RlVW5pdCA9IEhFQVAxNlsoKChwdHIpKyhpKjIpKT4+MSldO1xyXG4gICAgICBpZiAoY29kZVVuaXQgPT0gMCkgcmV0dXJuIHN0cjtcclxuICAgICAgKytpO1xyXG4gICAgICAvLyBmcm9tQ2hhckNvZGUgY29uc3RydWN0cyBhIGNoYXJhY3RlciBmcm9tIGEgVVRGLTE2IGNvZGUgdW5pdCwgc28gd2UgY2FuIHBhc3MgdGhlIFVURjE2IHN0cmluZyByaWdodCB0aHJvdWdoLlxyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb3BpZXMgdGhlIGdpdmVuIEphdmFzY3JpcHQgU3RyaW5nIG9iamVjdCAnc3RyJyB0byB0aGUgZW1zY3JpcHRlbiBIRUFQIGF0IGFkZHJlc3MgJ291dFB0cicsXHJcbi8vIG51bGwtdGVybWluYXRlZCBhbmQgZW5jb2RlZCBpbiBVVEYxNiBmb3JtLiBUaGUgY29weSB3aWxsIHJlcXVpcmUgYXQgbW9zdCBzdHIubGVuZ3RoKjQrMiBieXRlcyBvZiBzcGFjZSBpbiB0aGUgSEVBUC5cclxuLy8gVXNlIHRoZSBmdW5jdGlvbiBsZW5ndGhCeXRlc1VURjE2KCkgdG8gY29tcHV0ZSB0aGUgZXhhY3QgbnVtYmVyIG9mIGJ5dGVzIChleGNsdWRpbmcgbnVsbCB0ZXJtaW5hdG9yKSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbCB3cml0ZS5cclxuLy8gUGFyYW1ldGVyczpcclxuLy8gICBzdHI6IHRoZSBKYXZhc2NyaXB0IHN0cmluZyB0byBjb3B5LlxyXG4vLyAgIG91dFB0cjogQnl0ZSBhZGRyZXNzIGluIEVtc2NyaXB0ZW4gSEVBUCB3aGVyZSB0byB3cml0ZSB0aGUgc3RyaW5nIHRvLlxyXG4vLyAgIG1heEJ5dGVzVG9Xcml0ZTogVGhlIG1heGltdW0gbnVtYmVyIG9mIGJ5dGVzIHRoaXMgZnVuY3Rpb24gY2FuIHdyaXRlIHRvIHRoZSBhcnJheS4gVGhpcyBjb3VudCBzaG91bGQgaW5jbHVkZSB0aGUgbnVsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgdGVybWluYXRvciwgaS5lLiBpZiBtYXhCeXRlc1RvV3JpdGU9Miwgb25seSB0aGUgbnVsbCB0ZXJtaW5hdG9yIHdpbGwgYmUgd3JpdHRlbiBhbmQgbm90aGluZyBlbHNlLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgbWF4Qnl0ZXNUb1dyaXRlPDIgZG9lcyBub3Qgd3JpdGUgYW55IGJ5dGVzIHRvIHRoZSBvdXRwdXQsIG5vdCBldmVuIHRoZSBudWxsIHRlcm1pbmF0b3IuXHJcbi8vIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyB3cml0dGVuLCBFWENMVURJTkcgdGhlIG51bGwgdGVybWluYXRvci5cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvVVRGMTYoc3RyLCBvdXRQdHIsIG1heEJ5dGVzVG9Xcml0ZSkge1xyXG4gIGFzc2VydChvdXRQdHIgJSAyID09IDAsICdQb2ludGVyIHBhc3NlZCB0byBzdHJpbmdUb1VURjE2IG11c3QgYmUgYWxpZ25lZCB0byB0d28gYnl0ZXMhJyk7XHJcbiAgYXNzZXJ0KHR5cGVvZiBtYXhCeXRlc1RvV3JpdGUgPT0gJ251bWJlcicsICdzdHJpbmdUb1VURjE2KHN0ciwgb3V0UHRyLCBtYXhCeXRlc1RvV3JpdGUpIGlzIG1pc3NpbmcgdGhlIHRoaXJkIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgbGVuZ3RoIG9mIHRoZSBvdXRwdXQgYnVmZmVyIScpO1xyXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpZiBtYXggYnl0ZXMgaXMgbm90IHNwZWNpZmllZCwgYXNzdW1lIHVuc2FmZSB1bmJvdW5kZWQgd3JpdGUgaXMgYWxsb3dlZC5cclxuICBpZiAobWF4Qnl0ZXNUb1dyaXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heEJ5dGVzVG9Xcml0ZSA9IDB4N0ZGRkZGRkY7XHJcbiAgfVxyXG4gIGlmIChtYXhCeXRlc1RvV3JpdGUgPCAyKSByZXR1cm4gMDtcclxuICBtYXhCeXRlc1RvV3JpdGUgLT0gMjsgLy8gTnVsbCB0ZXJtaW5hdG9yLlxyXG4gIHZhciBzdGFydFB0ciA9IG91dFB0cjtcclxuICB2YXIgbnVtQ2hhcnNUb1dyaXRlID0gKG1heEJ5dGVzVG9Xcml0ZSA8IHN0ci5sZW5ndGgqMikgPyAobWF4Qnl0ZXNUb1dyaXRlIC8gMikgOiBzdHIubGVuZ3RoO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhcnNUb1dyaXRlOyArK2kpIHtcclxuICAgIC8vIGNoYXJDb2RlQXQgcmV0dXJucyBhIFVURi0xNiBlbmNvZGVkIGNvZGUgdW5pdCwgc28gaXQgY2FuIGJlIGRpcmVjdGx5IHdyaXR0ZW4gdG8gdGhlIEhFQVAuXHJcbiAgICB2YXIgY29kZVVuaXQgPSBzdHIuY2hhckNvZGVBdChpKTsgLy8gcG9zc2libHkgYSBsZWFkIHN1cnJvZ2F0ZVxyXG4gICAgSEVBUDE2Wygob3V0UHRyKT4+MSldPWNvZGVVbml0O1xyXG4gICAgb3V0UHRyICs9IDI7XHJcbiAgfVxyXG4gIC8vIE51bGwtdGVybWluYXRlIHRoZSBwb2ludGVyIHRvIHRoZSBIRUFQLlxyXG4gIEhFQVAxNlsoKG91dFB0cik+PjEpXT0wO1xyXG4gIHJldHVybiBvdXRQdHIgLSBzdGFydFB0cjtcclxufVxyXG5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IHN0cmluZyB0YWtlcyBpZiBlbmNvZGVkIGFzIGEgVVRGMTYgYnl0ZSBhcnJheSwgRVhDTFVESU5HIHRoZSBudWxsIHRlcm1pbmF0b3IgYnl0ZS5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMTYoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5sZW5ndGgqMjtcclxufVxyXG5cclxuZnVuY3Rpb24gVVRGMzJUb1N0cmluZyhwdHIpIHtcclxuICBhc3NlcnQocHRyICUgNCA9PSAwLCAnUG9pbnRlciBwYXNzZWQgdG8gVVRGMzJUb1N0cmluZyBtdXN0IGJlIGFsaWduZWQgdG8gZm91ciBieXRlcyEnKTtcclxuICB2YXIgaSA9IDA7XHJcblxyXG4gIHZhciBzdHIgPSAnJztcclxuICB3aGlsZSAoMSkge1xyXG4gICAgdmFyIHV0ZjMyID0gSEVBUDMyWygoKHB0cikrKGkqNCkpPj4yKV07XHJcbiAgICBpZiAodXRmMzIgPT0gMClcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgICsraTtcclxuICAgIC8vIEdvdGNoYTogZnJvbUNoYXJDb2RlIGNvbnN0cnVjdHMgYSBjaGFyYWN0ZXIgZnJvbSBhIFVURi0xNiBlbmNvZGVkIGNvZGUgKHBhaXIpLCBub3QgZnJvbSBhIFVuaWNvZGUgY29kZSBwb2ludCEgU28gZW5jb2RlIHRoZSBjb2RlIHBvaW50IHRvIFVURi0xNiBmb3IgY29uc3RydWN0aW5nLlxyXG4gICAgLy8gU2VlIGh0dHA6Ly91bmljb2RlLm9yZy9mYXEvdXRmX2JvbS5odG1sI3V0ZjE2LTNcclxuICAgIGlmICh1dGYzMiA+PSAweDEwMDAwKSB7XHJcbiAgICAgIHZhciBjaCA9IHV0ZjMyIC0gMHgxMDAwMDtcclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwIHwgKGNoID4+IDEwKSwgMHhEQzAwIHwgKGNoICYgMHgzRkYpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHV0ZjMyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENvcGllcyB0aGUgZ2l2ZW4gSmF2YXNjcmlwdCBTdHJpbmcgb2JqZWN0ICdzdHInIHRvIHRoZSBlbXNjcmlwdGVuIEhFQVAgYXQgYWRkcmVzcyAnb3V0UHRyJyxcclxuLy8gbnVsbC10ZXJtaW5hdGVkIGFuZCBlbmNvZGVkIGluIFVURjMyIGZvcm0uIFRoZSBjb3B5IHdpbGwgcmVxdWlyZSBhdCBtb3N0IHN0ci5sZW5ndGgqNCs0IGJ5dGVzIG9mIHNwYWNlIGluIHRoZSBIRUFQLlxyXG4vLyBVc2UgdGhlIGZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMzIoKSB0byBjb21wdXRlIHRoZSBleGFjdCBudW1iZXIgb2YgYnl0ZXMgKGV4Y2x1ZGluZyBudWxsIHRlcm1pbmF0b3IpIHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsIHdyaXRlLlxyXG4vLyBQYXJhbWV0ZXJzOlxyXG4vLyAgIHN0cjogdGhlIEphdmFzY3JpcHQgc3RyaW5nIHRvIGNvcHkuXHJcbi8vICAgb3V0UHRyOiBCeXRlIGFkZHJlc3MgaW4gRW1zY3JpcHRlbiBIRUFQIHdoZXJlIHRvIHdyaXRlIHRoZSBzdHJpbmcgdG8uXHJcbi8vICAgbWF4Qnl0ZXNUb1dyaXRlOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgYnl0ZXMgdGhpcyBmdW5jdGlvbiBjYW4gd3JpdGUgdG8gdGhlIGFycmF5LiBUaGlzIGNvdW50IHNob3VsZCBpbmNsdWRlIHRoZSBudWxsXHJcbi8vICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hdG9yLCBpLmUuIGlmIG1heEJ5dGVzVG9Xcml0ZT00LCBvbmx5IHRoZSBudWxsIHRlcm1pbmF0b3Igd2lsbCBiZSB3cml0dGVuIGFuZCBub3RoaW5nIGVsc2UuXHJcbi8vICAgICAgICAgICAgICAgICAgICBtYXhCeXRlc1RvV3JpdGU8NCBkb2VzIG5vdCB3cml0ZSBhbnkgYnl0ZXMgdG8gdGhlIG91dHB1dCwgbm90IGV2ZW4gdGhlIG51bGwgdGVybWluYXRvci5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHdyaXR0ZW4sIEVYQ0xVRElORyB0aGUgbnVsbCB0ZXJtaW5hdG9yLlxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9VVEYzMihzdHIsIG91dFB0ciwgbWF4Qnl0ZXNUb1dyaXRlKSB7XHJcbiAgYXNzZXJ0KG91dFB0ciAlIDQgPT0gMCwgJ1BvaW50ZXIgcGFzc2VkIHRvIHN0cmluZ1RvVVRGMzIgbXVzdCBiZSBhbGlnbmVkIHRvIGZvdXIgYnl0ZXMhJyk7XHJcbiAgYXNzZXJ0KHR5cGVvZiBtYXhCeXRlc1RvV3JpdGUgPT0gJ251bWJlcicsICdzdHJpbmdUb1VURjMyKHN0ciwgb3V0UHRyLCBtYXhCeXRlc1RvV3JpdGUpIGlzIG1pc3NpbmcgdGhlIHRoaXJkIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgbGVuZ3RoIG9mIHRoZSBvdXRwdXQgYnVmZmVyIScpO1xyXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpZiBtYXggYnl0ZXMgaXMgbm90IHNwZWNpZmllZCwgYXNzdW1lIHVuc2FmZSB1bmJvdW5kZWQgd3JpdGUgaXMgYWxsb3dlZC5cclxuICBpZiAobWF4Qnl0ZXNUb1dyaXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heEJ5dGVzVG9Xcml0ZSA9IDB4N0ZGRkZGRkY7XHJcbiAgfVxyXG4gIGlmIChtYXhCeXRlc1RvV3JpdGUgPCA0KSByZXR1cm4gMDtcclxuICB2YXIgc3RhcnRQdHIgPSBvdXRQdHI7XHJcbiAgdmFyIGVuZFB0ciA9IHN0YXJ0UHRyICsgbWF4Qnl0ZXNUb1dyaXRlIC0gNDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xyXG4gICAgLy8gR290Y2hhOiBjaGFyQ29kZUF0IHJldHVybnMgYSAxNi1iaXQgd29yZCB0aGF0IGlzIGEgVVRGLTE2IGVuY29kZWQgY29kZSB1bml0LCBub3QgYSBVbmljb2RlIGNvZGUgcG9pbnQgb2YgdGhlIGNoYXJhY3RlciEgV2UgbXVzdCBkZWNvZGUgdGhlIHN0cmluZyB0byBVVEYtMzIgdG8gdGhlIGhlYXAuXHJcbiAgICAvLyBTZWUgaHR0cDovL3VuaWNvZGUub3JnL2ZhcS91dGZfYm9tLmh0bWwjdXRmMTYtM1xyXG4gICAgdmFyIGNvZGVVbml0ID0gc3RyLmNoYXJDb2RlQXQoaSk7IC8vIHBvc3NpYmx5IGEgbGVhZCBzdXJyb2dhdGVcclxuICAgIGlmIChjb2RlVW5pdCA+PSAweEQ4MDAgJiYgY29kZVVuaXQgPD0gMHhERkZGKSB7XHJcbiAgICAgIHZhciB0cmFpbFN1cnJvZ2F0ZSA9IHN0ci5jaGFyQ29kZUF0KCsraSk7XHJcbiAgICAgIGNvZGVVbml0ID0gMHgxMDAwMCArICgoY29kZVVuaXQgJiAweDNGRikgPDwgMTApIHwgKHRyYWlsU3Vycm9nYXRlICYgMHgzRkYpO1xyXG4gICAgfVxyXG4gICAgSEVBUDMyWygob3V0UHRyKT4+MildPWNvZGVVbml0O1xyXG4gICAgb3V0UHRyICs9IDQ7XHJcbiAgICBpZiAob3V0UHRyICsgNCA+IGVuZFB0cikgYnJlYWs7XHJcbiAgfVxyXG4gIC8vIE51bGwtdGVybWluYXRlIHRoZSBwb2ludGVyIHRvIHRoZSBIRUFQLlxyXG4gIEhFQVAzMlsoKG91dFB0cik+PjIpXT0wO1xyXG4gIHJldHVybiBvdXRQdHIgLSBzdGFydFB0cjtcclxufVxyXG5cclxuLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHRoZSBnaXZlbiBKYXZhc2NyaXB0IHN0cmluZyB0YWtlcyBpZiBlbmNvZGVkIGFzIGEgVVRGMTYgYnl0ZSBhcnJheSwgRVhDTFVESU5HIHRoZSBudWxsIHRlcm1pbmF0b3IgYnl0ZS5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMzIoc3RyKSB7XHJcbiAgdmFyIGxlbiA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcclxuICAgIC8vIEdvdGNoYTogY2hhckNvZGVBdCByZXR1cm5zIGEgMTYtYml0IHdvcmQgdGhhdCBpcyBhIFVURi0xNiBlbmNvZGVkIGNvZGUgdW5pdCwgbm90IGEgVW5pY29kZSBjb2RlIHBvaW50IG9mIHRoZSBjaGFyYWN0ZXIhIFdlIG11c3QgZGVjb2RlIHRoZSBzdHJpbmcgdG8gVVRGLTMyIHRvIHRoZSBoZWFwLlxyXG4gICAgLy8gU2VlIGh0dHA6Ly91bmljb2RlLm9yZy9mYXEvdXRmX2JvbS5odG1sI3V0ZjE2LTNcclxuICAgIHZhciBjb2RlVW5pdCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgaWYgKGNvZGVVbml0ID49IDB4RDgwMCAmJiBjb2RlVW5pdCA8PSAweERGRkYpICsraTsgLy8gcG9zc2libHkgYSBsZWFkIHN1cnJvZ2F0ZSwgc28gc2tpcCBvdmVyIHRoZSB0YWlsIHN1cnJvZ2F0ZS5cclxuICAgIGxlbiArPSA0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxlbjtcclxufVxyXG5cclxuLy8gQWxsb2NhdGUgaGVhcCBzcGFjZSBmb3IgYSBKUyBzdHJpbmcsIGFuZCB3cml0ZSBpdCB0aGVyZS5cclxuLy8gSXQgaXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBjYWxsZXIgdG8gZnJlZSgpIHRoYXQgbWVtb3J5LlxyXG5mdW5jdGlvbiBhbGxvY2F0ZVVURjgoc3RyKSB7XHJcbiAgdmFyIHNpemUgPSBsZW5ndGhCeXRlc1VURjgoc3RyKSArIDE7XHJcbiAgdmFyIHJldCA9IF9tYWxsb2Moc2l6ZSk7XHJcbiAgaWYgKHJldCkgc3RyaW5nVG9VVEY4QXJyYXkoc3RyLCBIRUFQOCwgcmV0LCBzaXplKTtcclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG4vLyBBbGxvY2F0ZSBzdGFjayBzcGFjZSBmb3IgYSBKUyBzdHJpbmcsIGFuZCB3cml0ZSBpdCB0aGVyZS5cclxuZnVuY3Rpb24gYWxsb2NhdGVVVEY4T25TdGFjayhzdHIpIHtcclxuICB2YXIgc2l6ZSA9IGxlbmd0aEJ5dGVzVVRGOChzdHIpICsgMTtcclxuICB2YXIgcmV0ID0gc3RhY2tBbGxvYyhzaXplKTtcclxuICBzdHJpbmdUb1VURjhBcnJheShzdHIsIEhFQVA4LCByZXQsIHNpemUpO1xyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbWFuZ2xlKGZ1bmMpIHtcclxuICB3YXJuT25jZSgnd2FybmluZzogYnVpbGQgd2l0aCAgLXMgREVNQU5HTEVfU1VQUE9SVD0xICB0byBsaW5rIGluIGxpYmN4eGFiaSBkZW1hbmdsaW5nJyk7XHJcbiAgcmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbWFuZ2xlQWxsKHRleHQpIHtcclxuICB2YXIgcmVnZXggPVxyXG4gICAgL19fWltcXHdcXGRfXSsvZztcclxuICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LFxyXG4gICAgZnVuY3Rpb24oeCkge1xyXG4gICAgICB2YXIgeSA9IGRlbWFuZ2xlKHgpO1xyXG4gICAgICByZXR1cm4geCA9PT0geSA/IHggOiAoeCArICcgWycgKyB5ICsgJ10nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBqc1N0YWNrVHJhY2UoKSB7XHJcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xyXG4gIGlmICghZXJyLnN0YWNrKSB7XHJcbiAgICAvLyBJRTEwKyBzcGVjaWFsIGNhc2VzOiBJdCBkb2VzIGhhdmUgY2FsbHN0YWNrIGluZm8sIGJ1dCBpdCBpcyBvbmx5IHBvcHVsYXRlZCBpZiBhbiBFcnJvciBvYmplY3QgaXMgdGhyb3duLFxyXG4gICAgLy8gc28gdHJ5IHRoYXQgYXMgYSBzcGVjaWFsLWNhc2UuXHJcbiAgICB0cnkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoMCk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgZXJyID0gZTtcclxuICAgIH1cclxuICAgIGlmICghZXJyLnN0YWNrKSB7XHJcbiAgICAgIHJldHVybiAnKG5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSknO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyLnN0YWNrLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YWNrVHJhY2UoKSB7XHJcbiAgdmFyIGpzID0ganNTdGFja1RyYWNlKCk7XHJcbiAgaWYgKE1vZHVsZVsnZXh0cmFTdGFja1RyYWNlJ10pIGpzICs9ICdcXG4nICsgTW9kdWxlWydleHRyYVN0YWNrVHJhY2UnXSgpO1xyXG4gIHJldHVybiBkZW1hbmdsZUFsbChqcyk7XHJcbn1cclxuXHJcbi8vIE1lbW9yeSBtYW5hZ2VtZW50XHJcblxyXG52YXIgUEFHRV9TSVpFID0gMTYzODQ7XHJcbnZhciBXQVNNX1BBR0VfU0laRSA9IDY1NTM2O1xyXG52YXIgQVNNSlNfUEFHRV9TSVpFID0gMTY3NzcyMTY7XHJcbnZhciBNSU5fVE9UQUxfTUVNT1JZID0gMTY3NzcyMTY7XHJcblxyXG5mdW5jdGlvbiBhbGlnblVwKHgsIG11bHRpcGxlKSB7XHJcbiAgaWYgKHggJSBtdWx0aXBsZSA+IDApIHtcclxuICAgIHggKz0gbXVsdGlwbGUgLSAoeCAlIG11bHRpcGxlKTtcclxuICB9XHJcbiAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbnZhciBIRUFQLFxyXG4vKiogQHR5cGUge0FycmF5QnVmZmVyfSAqL1xyXG4gIGJ1ZmZlcixcclxuLyoqIEB0eXBlIHtJbnQ4QXJyYXl9ICovXHJcbiAgSEVBUDgsXHJcbi8qKiBAdHlwZSB7VWludDhBcnJheX0gKi9cclxuICBIRUFQVTgsXHJcbi8qKiBAdHlwZSB7SW50MTZBcnJheX0gKi9cclxuICBIRUFQMTYsXHJcbi8qKiBAdHlwZSB7VWludDE2QXJyYXl9ICovXHJcbiAgSEVBUFUxNixcclxuLyoqIEB0eXBlIHtJbnQzMkFycmF5fSAqL1xyXG4gIEhFQVAzMixcclxuLyoqIEB0eXBlIHtVaW50MzJBcnJheX0gKi9cclxuICBIRUFQVTMyLFxyXG4vKiogQHR5cGUge0Zsb2F0MzJBcnJheX0gKi9cclxuICBIRUFQRjMyLFxyXG4vKiogQHR5cGUge0Zsb2F0NjRBcnJheX0gKi9cclxuICBIRUFQRjY0O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlR2xvYmFsQnVmZmVyKGJ1Zikge1xyXG4gIE1vZHVsZVsnYnVmZmVyJ10gPSBidWZmZXIgPSBidWY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEJ1ZmZlclZpZXdzKCkge1xyXG4gIE1vZHVsZVsnSEVBUDgnXSA9IEhFQVA4ID0gbmV3IEludDhBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUDE2J10gPSBIRUFQMTYgPSBuZXcgSW50MTZBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUDMyJ10gPSBIRUFQMzIgPSBuZXcgSW50MzJBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUFU4J10gPSBIRUFQVTggPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUFUxNiddID0gSEVBUFUxNiA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUFUzMiddID0gSEVBUFUzMiA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gIE1vZHVsZVsnSEVBUEYzMiddID0gSEVBUEYzMiA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICBNb2R1bGVbJ0hFQVBGNjQnXSA9IEhFQVBGNjQgPSBuZXcgRmxvYXQ2NEFycmF5KGJ1ZmZlcik7XHJcbn1cclxuXHJcbnZhciBTVEFUSUNfQkFTRSwgU1RBVElDVE9QLCBzdGF0aWNTZWFsZWQ7IC8vIHN0YXRpYyBhcmVhXHJcbnZhciBTVEFDS19CQVNFLCBTVEFDS1RPUCwgU1RBQ0tfTUFYOyAvLyBzdGFjayBhcmVhXHJcbnZhciBEWU5BTUlDX0JBU0UsIERZTkFNSUNUT1BfUFRSOyAvLyBkeW5hbWljIGFyZWEgaGFuZGxlZCBieSBzYnJrXHJcblxyXG4gIFNUQVRJQ19CQVNFID0gU1RBVElDVE9QID0gU1RBQ0tfQkFTRSA9IFNUQUNLVE9QID0gU1RBQ0tfTUFYID0gRFlOQU1JQ19CQVNFID0gRFlOQU1JQ1RPUF9QVFIgPSAwO1xyXG4gIHN0YXRpY1NlYWxlZCA9IGZhbHNlO1xyXG5cclxuXHJcbi8vIEluaXRpYWxpemVzIHRoZSBzdGFjayBjb29raWUuIENhbGxlZCBhdCB0aGUgc3RhcnR1cCBvZiBtYWluIGFuZCBhdCB0aGUgc3RhcnR1cCBvZiBlYWNoIHRocmVhZCBpbiBwdGhyZWFkcyBtb2RlLlxyXG5mdW5jdGlvbiB3cml0ZVN0YWNrQ29va2llKCkge1xyXG4gIGFzc2VydCgoU1RBQ0tfTUFYICYgMykgPT0gMCk7XHJcbiAgSEVBUFUzMlsoU1RBQ0tfTUFYID4+IDIpLTFdID0gMHgwMjEzNTQ2NztcclxuICBIRUFQVTMyWyhTVEFDS19NQVggPj4gMiktMl0gPSAweDg5QkFDREZFO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1N0YWNrQ29va2llKCkge1xyXG4gIGlmIChIRUFQVTMyWyhTVEFDS19NQVggPj4gMiktMV0gIT0gMHgwMjEzNTQ2NyB8fCBIRUFQVTMyWyhTVEFDS19NQVggPj4gMiktMl0gIT0gMHg4OUJBQ0RGRSkge1xyXG4gICAgYWJvcnQoJ1N0YWNrIG92ZXJmbG93ISBTdGFjayBjb29raWUgaGFzIGJlZW4gb3ZlcndyaXR0ZW4sIGV4cGVjdGVkIGhleCBkd29yZHMgMHg4OUJBQ0RGRSBhbmQgMHgwMjEzNTQ2NywgYnV0IHJlY2VpdmVkIDB4JyArIEhFQVBVMzJbKFNUQUNLX01BWCA+PiAyKS0yXS50b1N0cmluZygxNikgKyAnICcgKyBIRUFQVTMyWyhTVEFDS19NQVggPj4gMiktMV0udG9TdHJpbmcoMTYpKTtcclxuICB9XHJcbiAgLy8gQWxzbyB0ZXN0IHRoZSBnbG9iYWwgYWRkcmVzcyAwIGZvciBpbnRlZ3JpdHkuIFRoaXMgY2hlY2sgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBTQUZFX1NQTElUX01FTU9SWSB0aG91Z2gsIHNpbmNlIHRoYXQgbW9kZSBhbHJlYWR5IHRlc3RzIGFsbCBhZGRyZXNzIDAgYWNjZXNzZXMgb24gaXRzIG93bi5cclxuICBpZiAoSEVBUDMyWzBdICE9PSAweDYzNzM2ZDY1IC8qICdlbXNjJyAqLykgdGhyb3cgJ1J1bnRpbWUgZXJyb3I6IFRoZSBhcHBsaWNhdGlvbiBoYXMgY29ycnVwdGVkIGl0cyBoZWFwIG1lbW9yeSBhcmVhIChhZGRyZXNzIHplcm8pISc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3J0U3RhY2tPdmVyZmxvdyhhbGxvY1NpemUpIHtcclxuICBhYm9ydCgnU3RhY2sgb3ZlcmZsb3chIEF0dGVtcHRlZCB0byBhbGxvY2F0ZSAnICsgYWxsb2NTaXplICsgJyBieXRlcyBvbiB0aGUgc3RhY2ssIGJ1dCBzdGFjayBoYXMgb25seSAnICsgKFNUQUNLX01BWCAtIHN0YWNrU2F2ZSgpICsgYWxsb2NTaXplKSArICcgYnl0ZXMgYXZhaWxhYmxlIScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm9ydE9uQ2Fubm90R3Jvd01lbW9yeSgpIHtcclxuICBhYm9ydCgnQ2Fubm90IGVubGFyZ2UgbWVtb3J5IGFycmF5cy4gRWl0aGVyICgxKSBjb21waWxlIHdpdGggIC1zIFRPVEFMX01FTU9SWT1YICB3aXRoIFggaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUgJyArIFRPVEFMX01FTU9SWSArICcsICgyKSBjb21waWxlIHdpdGggIC1zIEFMTE9XX01FTU9SWV9HUk9XVEg9MSAgd2hpY2ggYWxsb3dzIGluY3JlYXNpbmcgdGhlIHNpemUgYXQgcnVudGltZSwgb3IgKDMpIGlmIHlvdSB3YW50IG1hbGxvYyB0byByZXR1cm4gTlVMTCAoMCkgaW5zdGVhZCBvZiB0aGlzIGFib3J0LCBjb21waWxlIHdpdGggIC1zIEFCT1JUSU5HX01BTExPQz0wICcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZW5sYXJnZU1lbW9yeSgpIHtcclxuICBhYm9ydE9uQ2Fubm90R3Jvd01lbW9yeSgpO1xyXG59XHJcblxyXG5cclxudmFyIFRPVEFMX1NUQUNLID0gTW9kdWxlWydUT1RBTF9TVEFDSyddIHx8IDUyNDI4ODA7XHJcbnZhciBUT1RBTF9NRU1PUlkgPSBNb2R1bGVbJ1RPVEFMX01FTU9SWSddIHx8IDE2Nzc3MjE2O1xyXG5pZiAoVE9UQUxfTUVNT1JZIDwgVE9UQUxfU1RBQ0spIE1vZHVsZS5wcmludEVycignVE9UQUxfTUVNT1JZIHNob3VsZCBiZSBsYXJnZXIgdGhhbiBUT1RBTF9TVEFDSywgd2FzICcgKyBUT1RBTF9NRU1PUlkgKyAnISAoVE9UQUxfU1RBQ0s9JyArIFRPVEFMX1NUQUNLICsgJyknKTtcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIHJ1bnRpbWUncyBtZW1vcnlcclxuLy8gY2hlY2sgZm9yIGZ1bGwgZW5naW5lIHN1cHBvcnQgKHVzZSBzdHJpbmcgJ3N1YmFycmF5JyB0byBhdm9pZCBjbG9zdXJlIGNvbXBpbGVyIGNvbmZ1c2lvbilcclxuYXNzZXJ0KHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRmxvYXQ2NEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBJbnQzMkFycmF5LnByb3RvdHlwZS5zdWJhcnJheSAhPT0gdW5kZWZpbmVkICYmIEludDMyQXJyYXkucHJvdG90eXBlLnNldCAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgJ0pTIGVuZ2luZSBkb2VzIG5vdCBwcm92aWRlIGZ1bGwgdHlwZWQgYXJyYXkgc3VwcG9ydCcpO1xyXG5cclxuXHJcblxyXG4vLyBVc2UgYSBwcm92aWRlZCBidWZmZXIsIGlmIHRoZXJlIGlzIG9uZSwgb3IgZWxzZSBhbGxvY2F0ZSBhIG5ldyBvbmVcclxuaWYgKE1vZHVsZVsnYnVmZmVyJ10pIHtcclxuICBidWZmZXIgPSBNb2R1bGVbJ2J1ZmZlciddO1xyXG4gIGFzc2VydChidWZmZXIuYnl0ZUxlbmd0aCA9PT0gVE9UQUxfTUVNT1JZLCAncHJvdmlkZWQgYnVmZmVyIHNob3VsZCBiZSAnICsgVE9UQUxfTUVNT1JZICsgJyBieXRlcywgYnV0IGl0IGlzICcgKyBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbn0gZWxzZSB7XHJcbiAgLy8gVXNlIGEgV2ViQXNzZW1ibHkgbWVtb3J5IHdoZXJlIGF2YWlsYWJsZVxyXG4gIGlmICh0eXBlb2YgV2ViQXNzZW1ibHkgPT09ICdvYmplY3QnICYmIHR5cGVvZiBXZWJBc3NlbWJseS5NZW1vcnkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGFzc2VydChUT1RBTF9NRU1PUlkgJSBXQVNNX1BBR0VfU0laRSA9PT0gMCk7XHJcbiAgICBNb2R1bGVbJ3dhc21NZW1vcnknXSA9IG5ldyBXZWJBc3NlbWJseS5NZW1vcnkoeyAnaW5pdGlhbCc6IFRPVEFMX01FTU9SWSAvIFdBU01fUEFHRV9TSVpFLCAnbWF4aW11bSc6IFRPVEFMX01FTU9SWSAvIFdBU01fUEFHRV9TSVpFIH0pO1xyXG4gICAgYnVmZmVyID0gTW9kdWxlWyd3YXNtTWVtb3J5J10uYnVmZmVyO1xyXG4gIH0gZWxzZVxyXG4gIHtcclxuICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihUT1RBTF9NRU1PUlkpO1xyXG4gIH1cclxuICBhc3NlcnQoYnVmZmVyLmJ5dGVMZW5ndGggPT09IFRPVEFMX01FTU9SWSk7XHJcbiAgTW9kdWxlWydidWZmZXInXSA9IGJ1ZmZlcjtcclxufVxyXG51cGRhdGVHbG9iYWxCdWZmZXJWaWV3cygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRvdGFsTWVtb3J5KCkge1xyXG4gIHJldHVybiBUT1RBTF9NRU1PUlk7XHJcbn1cclxuXHJcbi8vIEVuZGlhbm5lc3MgY2hlY2sgKG5vdGU6IGFzc3VtZXMgY29tcGlsZXIgYXJjaCB3YXMgbGl0dGxlLWVuZGlhbilcclxuICBIRUFQMzJbMF0gPSAweDYzNzM2ZDY1OyAvKiAnZW1zYycgKi9cclxuSEVBUDE2WzFdID0gMHg2MzczO1xyXG5pZiAoSEVBUFU4WzJdICE9PSAweDczIHx8IEhFQVBVOFszXSAhPT0gMHg2MykgdGhyb3cgJ1J1bnRpbWUgZXJyb3I6IGV4cGVjdGVkIHRoZSBzeXN0ZW0gdG8gYmUgbGl0dGxlLWVuZGlhbiEnO1xyXG5cclxuZnVuY3Rpb24gY2FsbFJ1bnRpbWVDYWxsYmFja3MoY2FsbGJhY2tzKSB7XHJcbiAgd2hpbGUoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrcy5zaGlmdCgpO1xyXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGZ1bmMgPSBjYWxsYmFjay5mdW5jO1xyXG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSAnbnVtYmVyJykge1xyXG4gICAgICBpZiAoY2FsbGJhY2suYXJnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBNb2R1bGVbJ2R5bkNhbGxfdiddKGZ1bmMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1vZHVsZVsnZHluQ2FsbF92aSddKGZ1bmMsIGNhbGxiYWNrLmFyZyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZ1bmMoY2FsbGJhY2suYXJnID09PSB1bmRlZmluZWQgPyBudWxsIDogY2FsbGJhY2suYXJnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBfX0FUUFJFUlVOX18gID0gW107IC8vIGZ1bmN0aW9ucyBjYWxsZWQgYmVmb3JlIHRoZSBydW50aW1lIGlzIGluaXRpYWxpemVkXHJcbnZhciBfX0FUSU5JVF9fICAgID0gW107IC8vIGZ1bmN0aW9ucyBjYWxsZWQgZHVyaW5nIHN0YXJ0dXBcclxudmFyIF9fQVRNQUlOX18gICAgPSBbXTsgLy8gZnVuY3Rpb25zIGNhbGxlZCB3aGVuIG1haW4oKSBpcyB0byBiZSBydW5cclxudmFyIF9fQVRFWElUX18gICAgPSBbXTsgLy8gZnVuY3Rpb25zIGNhbGxlZCBkdXJpbmcgc2h1dGRvd25cclxudmFyIF9fQVRQT1NUUlVOX18gPSBbXTsgLy8gZnVuY3Rpb25zIGNhbGxlZCBhZnRlciB0aGUgcnVudGltZSBoYXMgZXhpdGVkXHJcblxyXG52YXIgcnVudGltZUluaXRpYWxpemVkID0gZmFsc2U7XHJcbnZhciBydW50aW1lRXhpdGVkID0gZmFsc2U7XHJcblxyXG5cclxuZnVuY3Rpb24gcHJlUnVuKCkge1xyXG4gIC8vIGNvbXBhdGliaWxpdHkgLSBtZXJnZSBpbiBhbnl0aGluZyBmcm9tIE1vZHVsZVsncHJlUnVuJ10gYXQgdGhpcyB0aW1lXHJcbiAgaWYgKE1vZHVsZVsncHJlUnVuJ10pIHtcclxuICAgIGlmICh0eXBlb2YgTW9kdWxlWydwcmVSdW4nXSA9PSAnZnVuY3Rpb24nKSBNb2R1bGVbJ3ByZVJ1biddID0gW01vZHVsZVsncHJlUnVuJ11dO1xyXG4gICAgd2hpbGUgKE1vZHVsZVsncHJlUnVuJ10ubGVuZ3RoKSB7XHJcbiAgICAgIGFkZE9uUHJlUnVuKE1vZHVsZVsncHJlUnVuJ10uc2hpZnQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQUkVSVU5fXyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuc3VyZUluaXRSdW50aW1lKCkge1xyXG4gIGNoZWNrU3RhY2tDb29raWUoKTtcclxuICBpZiAocnVudGltZUluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgcnVudGltZUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICBjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUSU5JVF9fKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlTWFpbigpIHtcclxuICBjaGVja1N0YWNrQ29va2llKCk7XHJcbiAgY2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVE1BSU5fXyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4aXRSdW50aW1lKCkge1xyXG4gIGNoZWNrU3RhY2tDb29raWUoKTtcclxuICBjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FURVhJVF9fKTtcclxuICBydW50aW1lRXhpdGVkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdFJ1bigpIHtcclxuICBjaGVja1N0YWNrQ29va2llKCk7XHJcbiAgLy8gY29tcGF0aWJpbGl0eSAtIG1lcmdlIGluIGFueXRoaW5nIGZyb20gTW9kdWxlWydwb3N0UnVuJ10gYXQgdGhpcyB0aW1lXHJcbiAgaWYgKE1vZHVsZVsncG9zdFJ1biddKSB7XHJcbiAgICBpZiAodHlwZW9mIE1vZHVsZVsncG9zdFJ1biddID09ICdmdW5jdGlvbicpIE1vZHVsZVsncG9zdFJ1biddID0gW01vZHVsZVsncG9zdFJ1biddXTtcclxuICAgIHdoaWxlIChNb2R1bGVbJ3Bvc3RSdW4nXS5sZW5ndGgpIHtcclxuICAgICAgYWRkT25Qb3N0UnVuKE1vZHVsZVsncG9zdFJ1biddLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUE9TVFJVTl9fKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT25QcmVSdW4oY2IpIHtcclxuICBfX0FUUFJFUlVOX18udW5zaGlmdChjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uSW5pdChjYikge1xyXG4gIF9fQVRJTklUX18udW5zaGlmdChjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uUHJlTWFpbihjYikge1xyXG4gIF9fQVRNQUlOX18udW5zaGlmdChjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uRXhpdChjYikge1xyXG4gIF9fQVRFWElUX18udW5zaGlmdChjYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYikge1xyXG4gIF9fQVRQT1NUUlVOX18udW5zaGlmdChjYik7XHJcbn1cclxuXHJcbi8vIERlcHJlY2F0ZWQ6IFRoaXMgZnVuY3Rpb24gc2hvdWxkIG5vdCBiZSBjYWxsZWQgYmVjYXVzZSBpdCBpcyB1bnNhZmUgYW5kIGRvZXMgbm90IHByb3ZpZGVcclxuLy8gYSBtYXhpbXVtIGxlbmd0aCBsaW1pdCBvZiBob3cgbWFueSBieXRlcyBpdCBpcyBhbGxvd2VkIHRvIHdyaXRlLiBQcmVmZXIgY2FsbGluZyB0aGVcclxuLy8gZnVuY3Rpb24gc3RyaW5nVG9VVEY4QXJyYXkoKSBpbnN0ZWFkLCB3aGljaCB0YWtlcyBpbiBhIG1heGltdW0gbGVuZ3RoIHRoYXQgY2FuIGJlIHVzZWRcclxuLy8gdG8gYmUgc2VjdXJlIGZyb20gb3V0IG9mIGJvdW5kcyB3cml0ZXMuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5mdW5jdGlvbiB3cml0ZVN0cmluZ1RvTWVtb3J5KHN0cmluZywgYnVmZmVyLCBkb250QWRkTnVsbCkge1xyXG4gIHdhcm5PbmNlKCd3cml0ZVN0cmluZ1RvTWVtb3J5IGlzIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBub3QgYmUgY2FsbGVkISBVc2Ugc3RyaW5nVG9VVEY4KCkgaW5zdGVhZCEnKTtcclxuXHJcbiAgdmFyIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyBsYXN0Q2hhciwgLyoqIEB0eXBlIHtudW1iZXJ9ICovIGVuZDtcclxuICBpZiAoZG9udEFkZE51bGwpIHtcclxuICAgIC8vIHN0cmluZ1RvVVRGOEFycmF5IGFsd2F5cyBhcHBlbmRzIG51bGwuIElmIHdlIGRvbid0IHdhbnQgdG8gZG8gdGhhdCwgcmVtZW1iZXIgdGhlXHJcbiAgICAvLyBjaGFyYWN0ZXIgdGhhdCBleGlzdGVkIGF0IHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgbnVsbCB3aWxsIGJlIHBsYWNlZCwgYW5kIHJlc3RvcmVcclxuICAgIC8vIHRoYXQgYWZ0ZXIgdGhlIHdyaXRlIChiZWxvdykuXHJcbiAgICBlbmQgPSBidWZmZXIgKyBsZW5ndGhCeXRlc1VURjgoc3RyaW5nKTtcclxuICAgIGxhc3RDaGFyID0gSEVBUDhbZW5kXTtcclxuICB9XHJcbiAgc3RyaW5nVG9VVEY4KHN0cmluZywgYnVmZmVyLCBJbmZpbml0eSk7XHJcbiAgaWYgKGRvbnRBZGROdWxsKSBIRUFQOFtlbmRdID0gbGFzdENoYXI7IC8vIFJlc3RvcmUgdGhlIHZhbHVlIHVuZGVyIHRoZSBudWxsIGNoYXJhY3Rlci5cclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVBcnJheVRvTWVtb3J5KGFycmF5LCBidWZmZXIpIHtcclxuICBhc3NlcnQoYXJyYXkubGVuZ3RoID49IDAsICd3cml0ZUFycmF5VG9NZW1vcnkgYXJyYXkgbXVzdCBoYXZlIGEgbGVuZ3RoIChzaG91bGQgYmUgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkpJylcclxuICBIRUFQOC5zZXQoYXJyYXksIGJ1ZmZlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlQXNjaWlUb01lbW9yeShzdHIsIGJ1ZmZlciwgZG9udEFkZE51bGwpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xyXG4gICAgYXNzZXJ0KHN0ci5jaGFyQ29kZUF0KGkpID09PSBzdHIuY2hhckNvZGVBdChpKSYweGZmKTtcclxuICAgIEhFQVA4WygoYnVmZmVyKyspPj4wKV09c3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgfVxyXG4gIC8vIE51bGwtdGVybWluYXRlIHRoZSBwb2ludGVyIHRvIHRoZSBIRUFQLlxyXG4gIGlmICghZG9udEFkZE51bGwpIEhFQVA4WygoYnVmZmVyKT4+MCldPTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuU2lnbih2YWx1ZSwgYml0cywgaWdub3JlKSB7XHJcbiAgaWYgKHZhbHVlID49IDApIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGJpdHMgPD0gMzIgPyAyKk1hdGguYWJzKDEgPDwgKGJpdHMtMSkpICsgdmFsdWUgLy8gTmVlZCBzb21lIHRyaWNrZXJ5LCBzaW5jZSBpZiBiaXRzID09IDMyLCB3ZSBhcmUgcmlnaHQgYXQgdGhlIGxpbWl0IG9mIHRoZSBiaXRzIEpTIHVzZXMgaW4gYml0c2hpZnRzXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnBvdygyLCBiaXRzKSAgICAgICAgICsgdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gcmVTaWduKHZhbHVlLCBiaXRzLCBpZ25vcmUpIHtcclxuICBpZiAodmFsdWUgPD0gMCkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuICB2YXIgaGFsZiA9IGJpdHMgPD0gMzIgPyBNYXRoLmFicygxIDw8IChiaXRzLTEpKSAvLyBhYnMgaXMgbmVlZGVkIGlmIGJpdHMgPT0gMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnBvdygyLCBiaXRzLTEpO1xyXG4gIGlmICh2YWx1ZSA+PSBoYWxmICYmIChiaXRzIDw9IDMyIHx8IHZhbHVlID4gaGFsZikpIHsgLy8gZm9yIGh1Z2UgdmFsdWVzLCB3ZSBjYW4gaGl0IHRoZSBwcmVjaXNpb24gbGltaXQgYW5kIGFsd2F5cyBnZXQgdHJ1ZSBoZXJlLiBzbyBkb24ndCBkbyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQsIGluIGdlbmVyYWwgdGhlcmUgaXMgbm8gcGVyZmVjdCBzb2x1dGlvbiBoZXJlLiBXaXRoIDY0LWJpdCBpbnRzLCB3ZSBnZXQgcm91bmRpbmcgYW5kIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSW4gaTY0IG1vZGUgMSwgcmVzaWduIHRoZSB0d28gcGFydHMgc2VwYXJhdGVseSBhbmQgc2FmZWx5XHJcbiAgICB2YWx1ZSA9IC0yKmhhbGYgKyB2YWx1ZTsgLy8gQ2Fubm90IGJpdHNoaWZ0IGhhbGYsIGFzIGl0IG1heSBiZSBhdCB0aGUgbGltaXQgb2YgdGhlIGJpdHMgSlMgdXNlcyBpbiBiaXRzaGlmdHNcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5hc3NlcnQoTWF0aFsnaW11bCddICYmIE1hdGhbJ2Zyb3VuZCddICYmIE1hdGhbJ2NsejMyJ10gJiYgTWF0aFsndHJ1bmMnXSwgJ3RoaXMgaXMgYSBsZWdhY3kgYnJvd3NlciwgYnVpbGQgd2l0aCBMRUdBQ1lfVk1fU1VQUE9SVCcpO1xyXG5cclxudmFyIE1hdGhfYWJzID0gTWF0aC5hYnM7XHJcbnZhciBNYXRoX2NvcyA9IE1hdGguY29zO1xyXG52YXIgTWF0aF9zaW4gPSBNYXRoLnNpbjtcclxudmFyIE1hdGhfdGFuID0gTWF0aC50YW47XHJcbnZhciBNYXRoX2Fjb3MgPSBNYXRoLmFjb3M7XHJcbnZhciBNYXRoX2FzaW4gPSBNYXRoLmFzaW47XHJcbnZhciBNYXRoX2F0YW4gPSBNYXRoLmF0YW47XHJcbnZhciBNYXRoX2F0YW4yID0gTWF0aC5hdGFuMjtcclxudmFyIE1hdGhfZXhwID0gTWF0aC5leHA7XHJcbnZhciBNYXRoX2xvZyA9IE1hdGgubG9nO1xyXG52YXIgTWF0aF9zcXJ0ID0gTWF0aC5zcXJ0O1xyXG52YXIgTWF0aF9jZWlsID0gTWF0aC5jZWlsO1xyXG52YXIgTWF0aF9mbG9vciA9IE1hdGguZmxvb3I7XHJcbnZhciBNYXRoX3BvdyA9IE1hdGgucG93O1xyXG52YXIgTWF0aF9pbXVsID0gTWF0aC5pbXVsO1xyXG52YXIgTWF0aF9mcm91bmQgPSBNYXRoLmZyb3VuZDtcclxudmFyIE1hdGhfcm91bmQgPSBNYXRoLnJvdW5kO1xyXG52YXIgTWF0aF9taW4gPSBNYXRoLm1pbjtcclxudmFyIE1hdGhfbWF4ID0gTWF0aC5tYXg7XHJcbnZhciBNYXRoX2NsejMyID0gTWF0aC5jbHozMjtcclxudmFyIE1hdGhfdHJ1bmMgPSBNYXRoLnRydW5jO1xyXG5cclxuLy8gQSBjb3VudGVyIG9mIGRlcGVuZGVuY2llcyBmb3IgY2FsbGluZyBydW4oKS4gSWYgd2UgbmVlZCB0b1xyXG4vLyBkbyBhc3luY2hyb25vdXMgd29yayBiZWZvcmUgcnVubmluZywgaW5jcmVtZW50IHRoaXMgYW5kXHJcbi8vIGRlY3JlbWVudCBpdC4gSW5jcmVtZW50aW5nIG11c3QgaGFwcGVuIGluIGEgcGxhY2UgbGlrZVxyXG4vLyBQUkVfUlVOX0FERElUSU9OUyAodXNlZCBieSBlbWNjIHRvIGFkZCBmaWxlIHByZWxvYWRpbmcpLlxyXG4vLyBOb3RlIHRoYXQgeW91IGNhbiBhZGQgZGVwZW5kZW5jaWVzIGluIHByZVJ1biwgZXZlbiB0aG91Z2hcclxuLy8gaXQgaGFwcGVucyByaWdodCBiZWZvcmUgcnVuIC0gcnVuIHdpbGwgYmUgcG9zdHBvbmVkIHVudGlsXHJcbi8vIHRoZSBkZXBlbmRlbmNpZXMgYXJlIG1ldC5cclxudmFyIHJ1bkRlcGVuZGVuY2llcyA9IDA7XHJcbnZhciBydW5EZXBlbmRlbmN5V2F0Y2hlciA9IG51bGw7XHJcbnZhciBkZXBlbmRlbmNpZXNGdWxmaWxsZWQgPSBudWxsOyAvLyBvdmVycmlkZGVuIHRvIHRha2UgZGlmZmVyZW50IGFjdGlvbnMgd2hlbiBhbGwgcnVuIGRlcGVuZGVuY2llcyBhcmUgZnVsZmlsbGVkXHJcbnZhciBydW5EZXBlbmRlbmN5VHJhY2tpbmcgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdldFVuaXF1ZVJ1bkRlcGVuZGVuY3koaWQpIHtcclxuICB2YXIgb3JpZyA9IGlkO1xyXG4gIHdoaWxlICgxKSB7XHJcbiAgICBpZiAoIXJ1bkRlcGVuZGVuY3lUcmFja2luZ1tpZF0pIHJldHVybiBpZDtcclxuICAgIGlkID0gb3JpZyArIE1hdGgucmFuZG9tKCk7XHJcbiAgfVxyXG4gIHJldHVybiBpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCkge1xyXG4gIHJ1bkRlcGVuZGVuY2llcysrO1xyXG4gIGlmIChNb2R1bGVbJ21vbml0b3JSdW5EZXBlbmRlbmNpZXMnXSkge1xyXG4gICAgTW9kdWxlWydtb25pdG9yUnVuRGVwZW5kZW5jaWVzJ10ocnVuRGVwZW5kZW5jaWVzKTtcclxuICB9XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBhc3NlcnQoIXJ1bkRlcGVuZGVuY3lUcmFja2luZ1tpZF0pO1xyXG4gICAgcnVuRGVwZW5kZW5jeVRyYWNraW5nW2lkXSA9IDE7XHJcbiAgICBpZiAocnVuRGVwZW5kZW5jeVdhdGNoZXIgPT09IG51bGwgJiYgdHlwZW9mIHNldEludGVydmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBDaGVjayBmb3IgbWlzc2luZyBkZXBlbmRlbmNpZXMgZXZlcnkgZmV3IHNlY29uZHNcclxuICAgICAgcnVuRGVwZW5kZW5jeVdhdGNoZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoQUJPUlQpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO1xyXG4gICAgICAgICAgcnVuRGVwZW5kZW5jeVdhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2hvd24gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBkZXAgaW4gcnVuRGVwZW5kZW5jeVRyYWNraW5nKSB7XHJcbiAgICAgICAgICBpZiAoIXNob3duKSB7XHJcbiAgICAgICAgICAgIHNob3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgTW9kdWxlLnByaW50RXJyKCdzdGlsbCB3YWl0aW5nIG9uIHJ1biBkZXBlbmRlbmNpZXM6Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBNb2R1bGUucHJpbnRFcnIoJ2RlcGVuZGVuY3k6ICcgKyBkZXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvd24pIHtcclxuICAgICAgICAgIE1vZHVsZS5wcmludEVycignKGVuZCBvZiBsaXN0KScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMDApO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBNb2R1bGUucHJpbnRFcnIoJ3dhcm5pbmc6IHJ1biBkZXBlbmRlbmN5IGFkZGVkIHdpdGhvdXQgSUQnKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJ1bkRlcGVuZGVuY3koaWQpIHtcclxuICBydW5EZXBlbmRlbmNpZXMtLTtcclxuICBpZiAoTW9kdWxlWydtb25pdG9yUnVuRGVwZW5kZW5jaWVzJ10pIHtcclxuICAgIE1vZHVsZVsnbW9uaXRvclJ1bkRlcGVuZGVuY2llcyddKHJ1bkRlcGVuZGVuY2llcyk7XHJcbiAgfVxyXG4gIGlmIChpZCkge1xyXG4gICAgYXNzZXJ0KHJ1bkRlcGVuZGVuY3lUcmFja2luZ1tpZF0pO1xyXG4gICAgZGVsZXRlIHJ1bkRlcGVuZGVuY3lUcmFja2luZ1tpZF07XHJcbiAgfSBlbHNlIHtcclxuICAgIE1vZHVsZS5wcmludEVycignd2FybmluZzogcnVuIGRlcGVuZGVuY3kgcmVtb3ZlZCB3aXRob3V0IElEJyk7XHJcbiAgfVxyXG4gIGlmIChydW5EZXBlbmRlbmNpZXMgPT0gMCkge1xyXG4gICAgaWYgKHJ1bkRlcGVuZGVuY3lXYXRjaGVyICE9PSBudWxsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO1xyXG4gICAgICBydW5EZXBlbmRlbmN5V2F0Y2hlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKSB7XHJcbiAgICAgIHZhciBjYWxsYmFjayA9IGRlcGVuZGVuY2llc0Z1bGZpbGxlZDtcclxuICAgICAgZGVwZW5kZW5jaWVzRnVsZmlsbGVkID0gbnVsbDtcclxuICAgICAgY2FsbGJhY2soKTsgLy8gY2FuIGFkZCBhbm90aGVyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuTW9kdWxlW1wicHJlbG9hZGVkSW1hZ2VzXCJdID0ge307IC8vIG1hcHMgdXJsIHRvIGltYWdlIGRhdGFcclxuTW9kdWxlW1wicHJlbG9hZGVkQXVkaW9zXCJdID0ge307IC8vIG1hcHMgdXJsIHRvIGF1ZGlvIGRhdGFcclxuXHJcblxyXG5cclxudmFyIG1lbW9yeUluaXRpYWxpemVyID0gbnVsbDtcclxuXHJcblxyXG5cclxudmFyIC8qIHNob3cgZXJyb3JzIG9uIGxpa2VseSBjYWxscyB0byBGUyB3aGVuIGl0IHdhcyBub3QgaW5jbHVkZWQgKi8gRlMgPSB7XHJcbiAgZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgYWJvcnQoJ0ZpbGVzeXN0ZW0gc3VwcG9ydCAoRlMpIHdhcyBub3QgaW5jbHVkZWQuIFRoZSBwcm9ibGVtIGlzIHRoYXQgeW91IGFyZSB1c2luZyBmaWxlcyBmcm9tIEpTLCBidXQgZmlsZXMgd2VyZSBub3QgdXNlZCBmcm9tIEMvQysrLCBzbyBmaWxlc3lzdGVtIHN1cHBvcnQgd2FzIG5vdCBhdXRvLWluY2x1ZGVkLiBZb3UgY2FuIGZvcmNlLWluY2x1ZGUgZmlsZXN5c3RlbSBzdXBwb3J0IHdpdGggIC1zIEZPUkNFX0ZJTEVTWVNURU09MScpO1xyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24oKSB7IEZTLmVycm9yKCkgfSxcclxuICBjcmVhdGVEYXRhRmlsZTogZnVuY3Rpb24oKSB7IEZTLmVycm9yKCkgfSxcclxuICBjcmVhdGVQcmVsb2FkZWRGaWxlOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIGNyZWF0ZUxhenlGaWxlOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG4gIG9wZW46IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgbWtkZXY6IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgcmVnaXN0ZXJEZXZpY2U6IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgYW5hbHl6ZVBhdGg6IGZ1bmN0aW9uKCkgeyBGUy5lcnJvcigpIH0sXHJcbiAgbG9hZEZpbGVzRnJvbURCOiBmdW5jdGlvbigpIHsgRlMuZXJyb3IoKSB9LFxyXG5cclxuICBFcnJub0Vycm9yOiBmdW5jdGlvbiBFcnJub0Vycm9yKCkgeyBGUy5lcnJvcigpIH0sXHJcbn07XHJcbk1vZHVsZVsnRlNfY3JlYXRlRGF0YUZpbGUnXSA9IEZTLmNyZWF0ZURhdGFGaWxlO1xyXG5Nb2R1bGVbJ0ZTX2NyZWF0ZVByZWxvYWRlZEZpbGUnXSA9IEZTLmNyZWF0ZVByZWxvYWRlZEZpbGU7XHJcblxyXG5cclxuXHJcbi8vIFByZWZpeCBvZiBkYXRhIFVSSXMgZW1pdHRlZCBieSBTSU5HTEVfRklMRSBhbmQgcmVsYXRlZCBvcHRpb25zLlxyXG52YXIgZGF0YVVSSVByZWZpeCA9ICdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsJztcclxuXHJcbi8vIEluZGljYXRlcyB3aGV0aGVyIGZpbGVuYW1lIGlzIGEgYmFzZTY0IGRhdGEgVVJJLlxyXG5mdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpIHtcclxuICByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID9cclxuICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChkYXRhVVJJUHJlZml4KSA6XHJcbiAgICAgIGZpbGVuYW1lLmluZGV4T2YoZGF0YVVSSVByZWZpeCkgPT09IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGludGVncmF0ZVdhc21KUygpIHtcclxuICAvLyB3YXNtLmpzIGhhcyBzZXZlcmFsIG1ldGhvZHMgZm9yIGNyZWF0aW5nIHRoZSBjb21waWxlZCBjb2RlIG1vZHVsZSBoZXJlOlxyXG4gIC8vICAqICduYXRpdmUtd2FzbScgOiB1c2UgbmF0aXZlIFdlYkFzc2VtYmx5IHN1cHBvcnQgaW4gdGhlIGJyb3dzZXJcclxuICAvLyAgKiAnaW50ZXJwcmV0LXMtZXhwcic6IGxvYWQgcy1leHByZXNzaW9uIGNvZGUgZnJvbSBhIC53YXN0IGFuZCBpbnRlcnByZXRcclxuICAvLyAgKiAnaW50ZXJwcmV0LWJpbmFyeSc6IGxvYWQgYmluYXJ5IHdhc20gYW5kIGludGVycHJldFxyXG4gIC8vICAqICdpbnRlcnByZXQtYXNtMndhc20nOiBsb2FkIGFzbS5qcyBjb2RlLCB0cmFuc2xhdGUgdG8gd2FzbSwgYW5kIGludGVycHJldFxyXG4gIC8vICAqICdhc21qcyc6IG5vIHdhc20sIGp1c3QgbG9hZCB0aGUgYXNtLmpzIGNvZGUgYW5kIHVzZSB0aGF0IChnb29kIGZvciB0ZXN0aW5nKVxyXG4gIC8vIFRoZSBtZXRob2QgaXMgc2V0IGF0IGNvbXBpbGUgdGltZSAoQklOQVJZRU5fTUVUSE9EKVxyXG4gIC8vIFRoZSBtZXRob2QgY2FuIGJlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3QsIGluIHdoaWNoIGNhc2UsIHdlIHdpbGwgdHJ5IHRoZVxyXG4gIC8vIG9wdGlvbnMgb25lIGJ5IG9uZS4gU29tZSBvZiB0aGVtIGNhbiBmYWlsIGdyYWNlZnVsbHksIGFuZCB0aGVuIHdlIGNhbiB0cnlcclxuICAvLyB0aGUgbmV4dC5cclxuXHJcbiAgLy8gaW5wdXRzXHJcblxyXG4gIHZhciBtZXRob2QgPSAnbmF0aXZlLXdhc20nO1xyXG5cclxuICB2YXIgd2FzbVRleHRGaWxlID0gJyc7XHJcbiAgdmFyIHdhc21CaW5hcnlGaWxlID0gJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxBR0Z6YlFFQUFBQUJjaEpnQTM5L2Z3Ri9ZQUYvQVg5Z0FBRi9ZQUYvQUdBQ2YzOEJmMkFFZjM5L2Z3Ri9ZQUovZndCZ0EzOS9md0JnQkg5L2YzOEFZQU4vZjM4QmZtQUFBR0FGZjM5L2YzOEJmMkFEZm45L0FYOWdBbjUvQVg5Z0JYOS9mMzkvQUdBR2YzeC9mMzkvQVg5Z0FYd0JmbUFDZkg4QmZBS1hCU0VEWlc1MkJtMWxiVzl5ZVFJQmdBS0FBZ05sYm5ZRmRHRmliR1VCY0FFUUVBTmxibllLYldWdGIzSjVRbUZ6WlFOL0FBTmxibllKZEdGaWJHVkNZWE5sQTM4QUEyVnVkZzVFV1U1QlRVbERWRTlRWDFCVVVnTi9BQU5sYm5ZTmRHVnRjRVJ2ZFdKc1pWQjBjZ04vQUFObGJuWUZRVUpQVWxRRGZ3QURaVzUyQ0ZOVVFVTkxWRTlRQTM4QUEyVnVkZ2xUVkVGRFMxOU5RVmdEZndBRFpXNTJCMk4wZEhwZmFUZ0Rmd0FHWjJ4dlltRnNBMDVoVGdOOEFBWm5iRzlpWVd3SVNXNW1hVzVwZEhrRGZBQURaVzUyRFdWdWJHRnlaMlZOWlcxdmNua0FBZ05sYm5ZT1oyVjBWRzkwWVd4TlpXMXZjbmtBQWdObGJuWVhZV0p2Y25SUGJrTmhibTV2ZEVkeWIzZE5aVzF2Y25rQUFnTmxibllTWVdKdmNuUlRkR0ZqYTA5MlpYSm1iRzkzQUFNRFpXNTJDMjUxYkd4R2RXNWpYMmxwQUFNRFpXNTJEVzUxYkd4R2RXNWpYMmxwYVdrQUF3TmxibllIWDE5ZmJHOWphd0FEQTJWdWRndGZYMTl6WlhSRmNuSk9id0FEQTJWdWRnMWZYMTl6ZVhOallXeHNNVFF3QUFRRFpXNTJEVjlmWDNONWMyTmhiR3d4TkRZQUJBTmxibllNWDE5ZmMzbHpZMkZzYkRVMEFBUURaVzUyQzE5ZlgzTjVjMk5oYkd3MkFBUURaVzUyQ1Y5ZlgzVnViRzlqYXdBREEyVnVkaUZmWlcxelkzSnBjSFJsYmw5b1lYTmZkR2h5WldGa2FXNW5YM04xY0hCdmNuUUFBZ05sYm5ZV1gyVnRjMk55YVhCMFpXNWZiV1Z0WTNCNVgySnBad0FBQTJWdWRoSmZiR3gyYlY5emRHRmphM0psYzNSdmNtVUFBd05sYm5ZUFgyeHNkbTFmYzNSaFkydHpZWFpsQUFJRFpXNTJEMTl3ZEdoeVpXRmtYMk55WldGMFpRQUZBMlZ1ZGcxZmNIUm9jbVZoWkY5cWIybHVBQVFEWlc1MkUxOXdkR2h5WldGa1gyMTFkR1Y0WDJsdWFYUUFCQU5sYm5ZSVgzTjVjMk52Ym1ZQUFRTlNVUUVDQXdZR0F3SUVBd2NEQ0FjQkNBQUlDUVFBQ2dZQkF3RUFBQUVDQVFBRUFBc0JBd2NCQnd3TkRRRUFEZ1FQRUJFUkFBSUNBZ1FFQkFBRUFBRUVBUVFFQWdvQkFRQUtBUUFBQVFFQkJBVUJBQVp5Rkg4Qkl3SUxmd0VqQXd0L0FTTUVDMzhCSXdVTGZ3RWpCZ3QvQVNNSEMzOEJRUUFMZndGQkFBdC9BVUVBQzM4QlFRQUxmQUVqQ0F0OEFTTUpDMzhCUVFBTGZ3RkJBQXQvQVVFQUMzOEJRUUFMZkFGRUFBQUFBQUFBQUFBTGZ3RkJBQXQ5QVVNQUFBQUFDMzBCUXdBQUFBQUxCNmtDRlJGZlgxOWxjbkp1YjE5c2IyTmhkR2x2YmdBeENsOWpZM1Z5YkY5d2IzY0FIQWRmWm1ac2RYTm9BRmdGWDJaeVpXVUFMQTlmYkd4MmJWOWljM2RoY0Y5cE16SUFYQWRmYldGc2JHOWpBQ3NIWDIxbGJXTndlUUJkQjE5dFpXMXpaWFFBWGhOZmNIUm9jbVZoWkY5dGRYUmxlRjlzYjJOckFGOFZYM0IwYUhKbFlXUmZiWFYwWlhoZmRXNXNiMk5yQUdBRlgzTmljbXNBWVFwa2VXNURZV3hzWDJscEFHSU1aSGx1UTJGc2JGOXBhV2xwQUdNVFpYTjBZV0pzYVhOb1UzUmhZMnRUY0dGalpRQVlDMmRsZEZSbGJYQlNaWFF3QUJzTGNuVnVVRzl6ZEZObGRITUFXd3R6WlhSVVpXMXdVbVYwTUFBYUNITmxkRlJvY21WM0FCa0tjM1JoWTJ0QmJHeHZZd0FWREhOMFlXTnJVbVZ6ZEc5eVpRQVhDWE4wWVdOclUyRjJaUUFXQ1JZQkFDTUJDeEJrTFdSa1pDSmtaR1ZsTGk4elpXVmxDc2IwQWxFb0FRRi9JdzBoQVNNTklBQnFKQTBqRFVFUGFrRndjU1FOSXcwakRrNEVRQ0FBRUFNTElBRVBDd1VBSXcwUEN3WUFJQUFrRFFzS0FDQUFKQTBnQVNRT0N4SUFJeEJCQUVZRVFDQUFKQkFnQVNRUkN3c0dBQ0FBSkJzTEJRQWpHdzhMekFFQkdIOGpEU0VaSXcxQm9BWnFKQTBqRFNNT1RnUkFRYUFHRUFNTElCbEJPR29oRlNBWklSWWdBQ0VNSUFFaEVSQXBRUUFoRWlBTUlSY2dGMEh4RkJCU0lRSWdBaUVUSUF3aEF5QVRJUVFnQXlBRUVDY2hCU0FGSVJRZ0ZSQWRJQlFoQmlBVklBWkI0RHdRSGlBVUlRY2dCMEhnUEdvaENDQVZJQWhCOHdFUVhSb2dFU0VKSUJZZ0ZTQUpRWDhRSUNBVUlRb2dDa0hnUEdvaEN5QUxJQlZCOHdFUVhSb2dGQ0VOSUExQkFFSFRQaEFvSVE0Z0RpRVNJQlFoRHlBUEVDd2dFaUVRSUJra0RTQVFEd3N5QVFSL0l3MGhCQ01OUVJCcUpBMGpEU01PVGdSQVFSQVFBd3NnQUNFQklBRWhBaUFDUVFCQjJRVVFYaG9nQkNRTkR3dXNBUUVWZnlNTklSY2pEVUVRYWlRTkl3MGpEazRFUUVFUUVBTUxJQUFoRHlBQklSQWdBaUVSUVFBaEVnTkFBa0FnRHlFVElCQWhGQ0FTSVJVZ0ZDQVZhaUVESUJFaEJDQUVRZk1CU0NFRklCRWhCaUFGQkg4Z0JnVkI4d0VMSVFjZ0J5RUlJQk1nQXlBSUVGMGFJQThoQ1NBSkVCOGdFaUVLSUFwQjh3RnFJUXNnQ3lFU0lCRWhEQ0FNUWZNQmF5RU5JQTBoRVNBTlFRQktJUTRnRGtVRVFBd0JDd3dCQ3dzZ0Z5UU5Ed3ZCQWdFbGZ5TU5JU1VqRFVId0JXb2tEU01OSXc1T0JFQkI4QVVRQXdzZ0pVRU1haUVlSUFBaEFVRUFJUXdEUUFKQUlBd2hIeUFmUWRFQVNDRWdJQ0JGQkVBTUFRc2dBU0VoSUI0Z0lVSFpCUkJkR2tFQUlSY0RRQUpBSUJjaElpQWlRZGtGU0NFaklDTkZCRUFNQVFzZ0Z5RUNRWUFJSUFKQkFuUnFJUU1nQXlnQ0FDRUVJQjRnQkdvaEJTQUZMQUFBSVFZZ0JrRVlkRUVZZFNFSElCY2hDQ0FJUVFGcUlRbEJnQWdnQ1VFQ2RHb2hDaUFLS0FJQUlRc2dIaUFMYWlFTklBMHNBQUFoRGlBT1FSaDBRUmgxSVE4Z0QwRUNkQ0VRSUFjZ0VHb2hFU0FSUVFWcUlSSkI2QjRnRWtFQ2RHb2hFeUFUS0FJQUlSUWdGRUgvQVhFaEZTQUJJUllnRnlFWUlCWWdHR29oR1NBWklCVTZBQUFnRnlFYUlCcEJBV29oR3lBYklSY01BUXNMSUF3aEhDQWNRUUZxSVIwZ0hTRU1EQUVMQ3lBbEpBMFBDOXNHQVZWL0l3MGhXQ01OUWZDMkFXb2tEU01OSXc1T0JFQkI4TFlCRUFNTElGaEJvTFlCYWlGV0lGZ2hCeUJZUWJpMkFXb2hDU0JZUWFTMkFXb2hDaUFBSVNVZ0FTRXdJQUloT3lBRElVWWdPeUVMSUF0QkFFZ2hEQ0E3SVEwZ0RVSHpBVW9oRGlBTUlBNXlJVlVnSlNFUElGVUVRQ0FQUVFVMkFnQkJsQjhvQWdBaEVDQTdJUkVnVmlBUk5nSUFJQkJCaUNNZ1ZoQmFHaUJZSkEwUEN5QVBRUUUyQWdBZ01DRVNJQWNnRWtHaUFSQWhFQTBoRXlBbElSUWdGRUVFYWlFVklCVWdFellDQUNBbElSWWdGa0VFYWlFWElCY29BZ0FoR0NBWVFRQkhJUmtnR1VVRVFDQUtJQWMyQWdBZ01DRkxJQXBCQkdvaFRDQk1JRXMyQWdBZ095Rk5JQXBCQ0dvaFRpQk9JRTAyQWdBZ1ZDRlBJQXBCREdvaFVDQlFJRTgyQWdBZ0pTRlNJQXBCRUdvaFV5QlRJRkkyQWdBZ0NoQWlHaUJZSkEwUEN5QkdJUm9nR2tFQVRDRWJJQnNFUUVIVUFCQVVJUndnSEVFQmF5RWRJQjBoUmlCR0lSNGdIa0VCU0NFZklCOEVmMEVCQlNBZEN5RUVJQVFoUmdzZ0pTRWdJQ0JCQ0dvaElTQWhRUUFRRXhvZ1JpRWlFQkFoSXlBaklRZ2dJa0VDZENFRkl3MGhKQ01OUVFFZ0JXeEJEMnBCY0hGcUpBMGpEU01PVGdSQVFRRWdCV3hCRDJwQmNIRVFBd3NnUmlFbUlDWkJGR3doQmlNTklTY2pEVUVCSUFac1FROXFRWEJ4YWlRTkl3MGpEazRFUUVFQklBWnNRUTlxUVhCeEVBTUxRUUFoVkFOQUFrQWdWQ0VvSUVZaEtTQW9JQ2xJSVNvZ0trVUVRQXdCQ3lCVUlTc2dKeUFyUVJSc2FpRXNJQWtnQnpZQ0FDQUpRUVJxSVMwZ01DRXVJQzBnTGpZQ0FDQUpRUWhxSVM4Z095RXhJQzhnTVRZQ0FDQUpRUXhxSVRJZ1ZDRXpJRElnTXpZQ0FDQUpRUkJxSVRRZ0pTRTFJRFFnTlRZQ0FDQXNJQWtwQWdBM0FnQWdMRUVJYWlBSlFRaHFLUUlBTndJQUlDeEJFR29nQ1VFUWFpZ0NBRFlDQUNCVUlUWWdKQ0EyUVFKMGFpRTNJRlFoT0NBbklEaEJGR3hxSVRrZ04wRUFRUVVnT1JBUkdpQlVJVG9nT2tFQmFpRThJRHdoVkF3QkN3dEJBQ0ZSQTBBQ1FDQlJJVDBnVkNFK0lEMGdQa2doUHlBL1JRUkFEQUVMSUZFaFFDQWtJRUJCQW5ScUlVRWdRU2dDQUNGQ0lFSkJBRWNoUXlCREJFQWdVU0ZFSUNRZ1JFRUNkR29oUlNCRktBSUFJVWNnUjBFQUVCSWFDeUJSSVVnZ1NFRUJhaUZKSUVraFVRd0JDd3NnQ0NGS0lFb1FEeUJZSkEwUEM2NEZBa2QvQVg0akRTRkpJdzFCRUdva0RTTU5JdzVPQkVCQkVCQURDeUFBSVJnZ0FTRWpJQUloTGtFQUlUa0RRQUpBSURraFJDQkVRZGtGU0NGR0lFWkZCRUFNQVFzZ0l5RkhJRGtoQkNCSElBUnFJUVVnQlN3QUFDRUdJQVpCR0hSQkdIVWhCd0pBQWtBQ1FBSkFJQWRCQUdzT0FnQUJBZ3NDUUNBWUlRZ2dPU0VKSUFnZ0NVRURkR29oQ2lBS1FuODNBd0FnR0NFTElBdEJ5QzFxSVF3Z09TRU5JQXdnRFVFRGRHb2hEa0ovSVVvZ0RpRUREQU1BQ3dBTEFrQWdHQ0VQSURraEVDQVBJQkJCQTNScUlSRWdFVUlBTndNQUlCZ2hFaUFTUWNndGFpRVRJRGtoRkNBVElCUkJBM1JxSVJWQ2Z5RktJQlVoQXd3Q0FBc0FDd0pBSUJnaEZpQTVJUmNnRmlBWFFRTjBhaUVaSUJsQ2Z6Y0RBQ0FZSVJvZ0drSElMV29oR3lBNUlSd2dHeUFjUVFOMGFpRWRRZ0FoU2lBZElRTUxDeUFESUVvM0F3QWdPU0VlSUI1QkFXb2hIeUFmSVRrTUFRc0xJQmdoSUNBdUlTRWdJQ0FoUVFOMGFpRWlJQ0pDN2JiYjdiYmI3YlpiTndNQUlCZ2hKQ0FrUWNndGFpRWxJQzRoSmlBbElDWkJBM1JxSVNjZ0owTGI3YmJiN2JiYjdiWi9Od01BSUJnaEtDQXVJU2tnS1VFQmFpRXFJQ2dnS2tFRGRHb2hLeUFyUXNlZi92ampqNy84Y1RjREFDQVlJU3dnTEVISUxXb2hMU0F1SVM4Z0wwRUJhaUV3SUMwZ01FRURkR29oTVNBeFFyLzg4Y2VmL3ZqamozODNBd0FnR0NFeUlDNGhNeUF6UVFKcUlUUWdNaUEwUVFOMGFpRTFJRFZDLzRQdy8vK0IrUC8vQURjREFDQVlJVFlnTmtISUxXb2hOeUF1SVRnZ09FRUNhaUU2SURjZ09rRURkR29oT3lBN1F2Ly9qOEQvLzRkZ053TUFJQmdoUENBdUlUMGdQVUVEYWlFK0lEd2dQa0VEZEdvaFB5QS9Rdi8vLzcrQWdJQmdOd01BSUJnaFFDQkFRY2d0YWlGQklDNGhRaUJDUVFOcUlVTWdRU0JEUVFOMGFpRkZJRVZDLy8vLy8vLy8veDgzQXdBZ1NTUU5Ed3ZyQmdKU2Z3eCtJdzBoVWlNTlFlQ1JBbW9rRFNNTkl3NU9CRUJCNEpFQ0VBTUxJRkpCK09NQmFpRW9JRkpCc0xZQmFpRXpJRkpCMklnQmFpRURJRkpCa05zQWFpRUVJRkpCeUMxcUlRVWdVaUVHSUFBaEN5QUxJUWdnQ0NFV0lCWWhDU0FKUVJCcUlRb2dDaWdDQUNFTUlBd2hJU0FXSVEwZ0RVRUVhaUVPSUE0b0FnQWhEeUFQSVFJZ0tFRUFRY2d0RUY0YUlETkJBRUhJTFJCZUdpQVdJUkFnRUNnQ0FDRVJJQ2dnRVVISUxSQmRHaUFXSVJJZ0VpZ0NBQ0VUSUJOQnlDMXFJUlFnTXlBVVFjZ3RFRjBhSUJZaEZTQVZRUXhxSVJjZ0Z5Z0NBQ0VZSUJnaE93TkFBa0FnT3lFWklCbEJmMm9oR2lBYUlUc2dHVUVBU2lFYklCdEZCRUFNQVFzZ0tDQXpRYVlCUWNFQkVDTU1BUXNMSUFWQkFFSElMUkJlR2lBR1FRQkJ5QzBRWGhvZ0EwRUFRY2d0RUY0YUlBUkJBRUhJTFJCZUdrRUFJUWNEUUFKQUlCWWhIQ0FoSVIwZ0hDQWRRUUVRSkNFZUlCNUJHSFJCR0hWQkFFY2hIeUFmUlFSQVFSSWhVUXdCQ3lBb0lETkJ3UUZCOHdFUUl5QUZJQ2hCeUMwUVhSb2dCaUF6UWNndEVGMGFJQVVnQmlBRElBUVFKU0FXSVNBZ0lFRUlhaUVpSUNJb0FnQWhJeUFGSUFZZ0l4QW1JVlFnVkNGZUlGUkNBRkVoSkNBa1JRUkFEQUVMREFFTEN5QlJRUkpHQkVCQkFDRUJJQUVoVUNCU0pBMGdVQThMSUY0aFZTQlZlaUZXSUZhbklTVWdKU0ZESUVNaEprRUJJQ1owSVNjZ0o2d2hWeUJYSVZNZ0lTRXBJQ2xCQkdvaEtpQXFLQUlBSVNzZ0swRUFSeUVzSUN3RVFDQVdJUzBnTFVFUWFpRXVJQzRvQWdBaEx5QXZRUWhxSVRBZ01CQmZHZ3NnSVNFeElERW9BZ0FoTWlBeVFRTkhJVFFDUUNBMEJFQWdJU0UxSURWQkF6WUNBRUVBSVRzRFFDQTdJVFlnTmtIekFVZ2hOeUEzUlFSQURBTUxJRHNoT0NBb0lEaEJBM1JxSVRrZ09Ta0RBQ0ZZSUZNaFdTQllJRm1ESVZvZ1drSUFVU0U2SURvRVFFRUJJVUVGSURzaFBDQXpJRHhCQTNScUlUMGdQU2tEQUNGYklGTWhYQ0JiSUZ5RElWMGdYVUlBVVNFK0lENEVmMEYvQlVFQUN5RS9JRDhoUVFzZ1FVSC9BWEVoUUNBQ0lVSWdPeUZFSUVJZ1JHb2hSU0JGSUVBNkFBQWdPeUZHSUVaQkFXb2hSeUJISVRzTUFBc0FDd3NnSVNGSUlFaEJCR29oU1NCSktBSUFJVW9nU2tFQVJ5RkxJRXNFUUNBV0lVd2dURUVRYWlGTklFMG9BZ0FoVGlCT1FRaHFJVThnVHhCZ0dndEJBQ0VCSUFFaFVDQlNKQTBnVUE4TG5BSUNHMzhPZmlNTklSNGpEVUV3YWlRTkl3MGpEazRFUUVFd0VBTUxJQUFoRmlBQklSa2dBaUVhSUFNaEcwSUJJU3dnR2lFRUlBUWhIQU5BQWtBZ0hDRUZJQnNoQmlBRklBWkpJUWNnTENFaElDRkNBRkloQ0NBSEJIOGdDQVZCQUFzaENTQUpSUVJBREFFTElCWWhDaUFjSVFzZ0NpQUxRUU4wYWlFTUlBd3BBd0FoSWlBaUlSOGdHU0VOSUJ3aERpQU5JQTVCQTNScUlROGdEeWtEQUNFaklDTWhJQ0FnSVNRZ0h5RWxJQ1FnSllVaEppQVdJUkFnSENFUklCQWdFVUVEZEdvaEVpQVNJQ1kzQXdBZ0h5RW5JQmtoRXlBY0lSUWdFeUFVUVFOMGFpRVZJQlVnSnpjREFDQWdJU2dnSHlFcElDbENmNFVoS2lBb0lDcURJU3NnS3lFc0lCd2hGeUFYUVFGcUlSZ2dHQ0VjREFFTEN5QWVKQTBQQy9ZQkFTRi9JdzBoSXlNTlFSQnFKQTBqRFNNT1RnUkFRUkFRQXdzZ0FDRWNJQUVoSFNBQ0lSNGdIU0VnSUNCQkJHb2hJU0FoS0FJQUlRTWdBMEVBUnlFRUlBUUVRQ0FjSVFVZ0JVRVFhaUVHSUFZb0FnQWhCeUFIUVFocUlRZ2dDQkJmR2lBZElRa2dDU2dDQUNFS0lCNGhDeUFLSUF0R0lRd2dERUVCY1NFTklBMUIvd0Z4SVE0Z0RpRWZJQndoRHlBUFFSQnFJUkFnRUNnQ0FDRVJJQkZCQ0dvaEVpQVNFR0FhSUI4aEV5QVRJUmNnRnlFYklDTWtEU0FiRHdVZ0hTRVVJQlFvQWdBaEZTQWVJUllnRlNBV1JpRVlJQmhCQVhFaEdTQVpRZjhCY1NFYUlCb2hGeUFYSVJzZ0l5UU5JQnNQQ3dCQkFBOEx6QU1DS244V2ZpTU5JUzBqRFVIQUFHb2tEU01OSXc1T0JFQkJ3QUFRQXdzZ0FDRWJJQUVoSHlBQ0lTTWdBeUVwUVFBaEtrSFJBQ0VyQTBBQ1FDQXJJUVVnQlVGL2FpRUdJQVloS3lBRlFRQktJUWNnQjBVRVFBd0JDeUFqSVFnZ0d5RUpJQWdnQ1VISUxSQmRHaUFwSVFvZ0h5RUxJQW9nQzBISUxSQmRHa0VBSVFRRFFDQUVJUXdnREVIWkJVZ2hEU0FOUlFSQURBTUxJQ01oRGlBcUlROGdEaUFQUVFOMGFpRVFJQkFwQXdBaE1pQXlJUzRnS1NFUklDb2hFaUFSSUJKQkEzUnFJUk1nRXlrREFDRXpJRE1oTHlBcElSUWdLaUVWSUJWQjdRSklJUllnRmdSL1Fld0NCVUdUZlFzaEZ5QXFJUmdnR0NBWGFpRVpJQmtoS2lBVUlCbEJBM1JxSVJvZ0dpa0RBQ0UwSURRaE1DQXVJVFVnTUNFMklEWkNmNFVoTnlBMUlEZUVJVGdnSXlFY0lDb2hIU0FjSUIxQkEzUnFJUjRnSGlrREFDRTVJQzhoT2lBNUlEcUZJVHNnT0NBN2d5RThJRHdoTVNBeElUMGdQVUovaFNFK0lCc2hJQ0FFSVNFZ0lDQWhRUU4wYWlFaUlDSWdQamNEQUNBdUlUOGdNQ0ZBSUQ4Z1FJVWhRU0F4SVVJZ1FTQkNoQ0ZESUI4aEpDQUVJU1VnSkNBbFFRTjBhaUVtSUNZZ1F6Y0RBQ0FFSVNjZ0owRUJhaUVvSUNnaEJBd0FDd0FNQVFzTElDMGtEUThMaWdJQ0UzOExmaU1OSVJVakRVRWdhaVFOSXcwakRrNEVRRUVnRUFNTElBQWhEeUFCSVJBZ0FpRVJRbjhoSUNBUklSTWdFeUVTQTBBQ1FDQVNJUU1nQTBGL2FpRUVJQVFoRWlBRFFRQktJUVVnQlVVRVFFRUZJUlFNQVFzZ0R5RUdJQkloQjBIeUFTQUhheUVJSUFZZ0NFRURkR29oQ1NBSktRTUFJUllnRUNFS0lCSWhDMEh5QVNBTGF5RU1JQW9nREVFRGRHb2hEU0FOS1FNQUlSY2dGaUFYaFNFWUlCaENmNFVoR1NBZ0lSb2dHaUFaZ3lFYklCc2hJQ0FnSVJ3Z0hFSUFVU0VPSUE0RVFFRUVJUlFNQVFzTUFRc0xJQlJCQkVZRVFFSUFJUjRnSGlFZklCVWtEU0FmRHdVZ0ZFRUZSZ1JBSUNBaEhTQWRJUjRnSGlFZklCVWtEU0FmRHdzTFFnQVBDK29CQVIxL0l3MGhIaU1OUVJCcUpBMGpEU01PVGdSQVFSQVFBd3NnQUNFTUlBRWhGaUFXSVJrZ0dVRURiQ0VhSUJvaEd5QWJFQ3NoSENBY0lSaEJBQ0VYQTBBQ1FDQVhJUUlnRmlFRElBSWdBMGdoQkNBWUlRVWdCRVVFUUF3QkN5QVhJUVlnQmtFRGJDRUhJQVVnQjJvaENDQU1JUWtnRnlFS0lBa2dDbW9oQ3lBTExBQUFJUTBnRFVFWWRFRVlkU0VPUWFZaklBNFFWQ0VQSUE4aEVFR21JeUVSSUJBZ0VXc2hFa0c3eEFBZ0VrRURiR29oRXlBSUlCTXVBQUE3QUFBZ0NFRUNhaUFUUVFKcUxBQUFPZ0FBSUJjaEZDQVVRUUZxSVJVZ0ZTRVhEQUVMQ3lBZUpBMGdCUThMN1FNQlIzOGpEU0ZKSXcxQklHb2tEU01OSXc1T0JFQkJJQkFEQ3lBQUlSY2dBU0VpSUFJaExTQXRJUU1nQTBFRGFpRUVJQVJCQVdzaEJTQUZRUU50UVg5eElRWWdCaUZESUVNaEJ5QUhRUUZxSVFnZ0NDRUpJQWtRS3lFS0lBb2hSaUJHSVFzZ1F5RU1JQXNnREdvaERTQU5RUUE2QUFCQkFDRTRBMEFDUUNBNElRNGdReUVQSUE0Z0QwZ2hFQ0FRUlFSQURBRUxJQmNoRVNBaUlSSWdPQ0VUSUJOQkEyd2hGQ0FTSUJScUlSVWdFU0FWYWlFV0lCWXNBQUFoR0NBWVFSaDBRUmgxSVJrZ0Z5RWFJQ0loR3lBNElSd2dIRUVEYkNFZElCc2dIV29oSGlBZVFRRnFJUjhnR2lBZmFpRWdJQ0FzQUFBaElTQWhRUmgwUVJoMUlTTWdJMEVEYkNFa0lCa2dKR29oSlNBWElTWWdJaUVuSURnaEtDQW9RUU5zSVNrZ0p5QXBhaUVxSUNwQkFtb2hLeUFtSUN0cUlTd2dMQ3dBQUNFdUlDNUJHSFJCR0hVaEx5QXZRUWxzSVRBZ0pTQXdhaUV4SURGQi93RnhJVElnTWlGSElFY2hNeUF6UVJoMFFSaDFJVFFnTkVFQVNDRTFJRFVFUUNCSElUWWdOa0VZZEVFWWRTRTNJRGRCRzJvaE9TQTVRZjhCY1NFNklEb2hSd3NnUnlFN0lEdEJHSFJCR0hVaFBFR21JeUE4YWlFOUlEMHNBQUFoUGlCR0lUOGdPQ0ZBSUQ4Z1FHb2hRU0JCSUQ0NkFBQWdPQ0ZDSUVKQkFXb2hSQ0JFSVRnTUFRc0xJRVloUlNCSkpBMGdSUThMOUFFQkVIOGpEU0VQSXcxQkVHb2tEU01OSXc1T0JFQkJFQkFEQ3lBUFFRUnFJUUVnQVVFQU5nQUFJQUZCQkdwQkFEb0FBRUVBSVFBRFFBSkFJQUFoQmlBR1FmTUJTQ0VISUFkRkJFQU1BUXNnQUNFSVFmdzZJQWhCQld4cUlRa2dDU0FCS0FBQU5nQUFJQWxCQkdvZ0FVRUVhaXdBQURvQUFDQUJRUVVRS2lBQUlRb2dDa0VCYWlFTElBc2hBQXdCQ3d0QkFDRUFBMEFDUUNBQUlRd2dERUViU0NFTklBMUZCRUFNQVFzZ0FDRUNRYnZFQUNBQ1FRTnNhaUVESUFNZ0FTNEFBRHNBQUNBRFFRSnFJQUZCQW1vc0FBQTZBQUFnQVVFREVDb2dBQ0VFSUFSQkFXb2hCU0FGSVFBTUFRc0xJQThrRFE4THd3RUJGSDhqRFNFVkl3MUJFR29rRFNNTkl3NU9CRUJCRUJBREN5QUFJUXdnQVNFTlFRQWhEZ05BQWtBZ0RpRVBJQTBoRUNBUElCQklJUkVnRVVVRVFFRUZJUlFNQVFzZ0RDRVNJQTRoRXlBU0lCTnFJUUlnQWl3QUFDRURJQU5CQVdwQkdIUkJHSFVoQkNBQ0lBUTZBQUFnQkVFWWRFRVlkU0VGSUFWQkFVb2hCaUFHUlFSQVFRVWhGQXdCQ3lBTUlRY2dEaUVJSUFjZ0NHb2hDU0FKUVg4NkFBQWdEaUVLSUFwQkFXb2hDeUFMSVE0TUFRc0xJQlJCQlVZRVFDQVZKQTBQQ3d1dGJnR3pDSDhqRFNHekNDTU5RUkJxSkEwakRTTU9UZ1JBUVJBUUF3c2dzd2doVlNBQVFmVUJTU0hFQVFKQUlNUUJCRUFnQUVFTFNTR3pBaUFBUVF0cUlhSURJS0lEUVhoeElaRUVJTE1DQkg5QkVBVWdrUVFMSVlBRklJQUZRUU4ySWU4RlFidzJLQUlBSWQ0R0lONEdJTzhGZGlITkJ5RE5CMEVEY1NGV0lGWkJBRVloWVNCaFJRUkFJTTBIUVFGeElXd2diRUVCY3lGM0lIY2c3d1ZxSVlJQklJSUJRUUYwSVkwQlFlUTJJSTBCUVFKMGFpR1lBU0NZQVVFSWFpR2pBU0NqQVNnQ0FDR3VBU0N1QVVFSWFpRzVBU0M1QVNnQ0FDSEZBU0RGQVNDWUFVWWgwQUVnMEFFRVFFRUJJSUlCZENIYkFTRGJBVUYvY3lIbUFTRGVCaURtQVhFaDhRRkJ2RFlnOFFFMkFnQUZJTVVCUVF4cUlmd0JJUHdCSUpnQk5nSUFJS01CSU1VQk5nSUFDeUNDQVVFRGRDR0hBaUNIQWtFRGNpR1NBaUN1QVVFRWFpR2RBaUNkQWlDU0FqWUNBQ0N1QVNDSEFtb2hxQUlncUFKQkJHb2h0QUlndEFJb0FnQWh2d0lndndKQkFYSWh5Z0lndEFJZ3lnSTJBZ0FndVFFaEJpQ3pDQ1FOSUFZUEMwSEVOaWdDQUNIVkFpQ0FCU0RWQWtzaDRBSWc0QUlFUUNETkIwRUFSaUhyQWlEckFrVUVRQ0ROQnlEdkJYUWg5Z0pCQWlEdkJYUWhnUU5CQUNDQkEyc2hqQU1nZ1FNZ2pBTnlJWmNESVBZQ0lKY0RjU0dqQTBFQUlLTURheUd1QXlDakF5Q3VBM0VodVFNZ3VRTkJmMm9oeEFNZ3hBTkJESFloendNZ3p3TkJFSEVoMmdNZ3hBTWcyZ04ySWVVRElPVURRUVYySWZBRElQQURRUWh4SWZzRElQc0RJTm9EY2lHR0JDRGxBeUQ3QTNZaGtnUWdrZ1JCQW5ZaG5RUWduUVJCQkhFaHFBUWdoZ1FncUFSeUliTUVJSklFSUtnRWRpRytCQ0MrQkVFQmRpSEpCQ0RKQkVFQ2NTSFVCQ0N6QkNEVUJISWgzd1FndmdRZzFBUjJJZW9FSU9vRVFRRjJJZlVFSVBVRVFRRnhJWUVGSU44RUlJRUZjaUdNQlNEcUJDQ0JCWFlobHdVZ2pBVWdsd1ZxSWFJRklLSUZRUUYwSWEwRlFlUTJJSzBGUVFKMGFpRzRCU0M0QlVFSWFpSERCU0REQlNnQ0FDSE9CU0RPQlVFSWFpSFpCU0RaQlNnQ0FDSGtCU0RrQlNDNEJVWWg4QVVnOEFVRVFFRUJJS0lGZENIN0JTRDdCVUYvY3lHR0JpRGVCaUNHQm5FaGtRWkJ2RFlna1FZMkFnQWdrUVloemdjRklPUUZRUXhxSVp3R0lKd0dJTGdGTmdJQUlNTUZJT1FGTmdJQUlONEdJYzRIQ3lDaUJVRURkQ0duQmlDbkJpQ0FCV3Noc2dZZ2dBVkJBM0lodlFZZ3pnVkJCR29oeUFZZ3lBWWd2UVkyQWdBZ3pnVWdnQVZxSWRNR0lMSUdRUUZ5SWQ4R0lOTUdRUVJxSWVvR0lPb0dJTjhHTmdJQUlNNEZJS2NHYWlIMUJpRDFCaUN5QmpZQ0FDRFZBa0VBUmlHQUJ5Q0FCMFVFUUVIUU5pZ0NBQ0dMQnlEVkFrRURkaUdXQnlDV0IwRUJkQ0doQjBIa05pQ2hCMEVDZEdvaHJBZEJBU0NXQjNRaHR3Y2d6Z2NndHdkeEljSUhJTUlIUVFCR0lka0hJTmtIQkVBZ3pnY2d0d2R5SWVRSFFidzJJT1FITmdJQUlLd0hRUWhxSVVRZ3JBY2hFQ0JFSVU0RklLd0hRUWhxSWU4SElPOEhLQUlBSWZvSElQb0hJUkFnN3djaFRnc2dUaUNMQnpZQ0FDQVFRUXhxSVlVSUlJVUlJSXNITmdJQUlJc0hRUWhxSVpBSUlKQUlJQkEyQWdBZ2l3ZEJER29obXdnZ213Z2dyQWMyQWdBTFFjUTJJTElHTmdJQVFkQTJJTk1HTmdJQUlOa0ZJUVlnc3dna0RTQUdEd3RCd0RZb0FnQWhuZ2dnbmdoQkFFWWhud2dnbndnRVFDQ0FCU0VQQlVFQUlKNElheUZYSUo0SUlGZHhJVmdnV0VGL2FpRlpJRmxCREhZaFdpQmFRUkJ4SVZzZ1dTQmJkaUZjSUZ4QkJYWWhYU0JkUVFoeElWNGdYaUJiY2lGZklGd2dYblloWUNCZ1FRSjJJV0lnWWtFRWNTRmpJRjhnWTNJaFpDQmdJR04ySVdVZ1pVRUJkaUZtSUdaQkFuRWhaeUJrSUdkeUlXZ2daU0JuZGlGcElHbEJBWFloYWlCcVFRRnhJV3NnYUNCcmNpRnRJR2tnYTNZaGJpQnRJRzVxSVc5QjdEZ2diMEVDZEdvaGNDQndLQUlBSVhFZ2NVRUVhaUZ5SUhJb0FnQWhjeUJ6UVhoeElYUWdkQ0NBQldzaGRTQnhRUkJxSVhZZ2RpZ0NBQ0Y0SUhoQkFFWWhlU0I1UVFGeElWRWdjVUVRYWlCUlFRSjBhaUY2SUhvb0FnQWhleUI3UVFCR0lYd2dmQVJBSUhFaEN5QjFJUTBGSUhFaERDQjFJUTRnZXlGK0EwQUNRQ0IrUVFScUlYMGdmU2dDQUNGL0lIOUJlSEVoZ0FFZ2dBRWdnQVZySVlFQklJRUJJQTVKSVlNQklJTUJCSDhnZ1FFRklBNExJUUlnZ3dFRWZ5QitCU0FNQ3lFQklINUJFR29oaEFFZ2hBRW9BZ0FoaFFFZ2hRRkJBRVloaGdFZ2hnRkJBWEVoVHlCK1FSQnFJRTlCQW5ScUlZY0JJSWNCS0FJQUlZZ0JJSWdCUVFCR0lZa0JJSWtCQkVBZ0FTRUxJQUloRFF3QkJTQUJJUXdnQWlFT0lJZ0JJWDRMREFFTEN3c2dDeUNBQldvaGlnRWdpZ0VnQzBzaGl3RWdpd0VFUUNBTFFSaHFJWXdCSUl3QktBSUFJWTRCSUF0QkRHb2hqd0VnandFb0FnQWhrQUVna0FFZ0MwWWhrUUVDUUNDUkFRUkFJQXRCRkdvaGxnRWdsZ0VvQWdBaGx3RWdsd0ZCQUVZaG1RRWdtUUVFUUNBTFFSQnFJWm9CSUpvQktBSUFJWnNCSUpzQlFRQkdJWndCSUp3QkJFQkJBQ0UwREFNRklKc0JJU1lnbWdFaEp3c0ZJSmNCSVNZZ2xnRWhKd3NEUUFKQUlDWkJGR29oblFFZ25RRW9BZ0FobmdFZ25nRkJBRVlobndFZ253RkZCRUFnbmdFaEppQ2RBU0VuREFJTElDWkJFR29ob0FFZ29BRW9BZ0Fob1FFZ29RRkJBRVlob2dFZ29nRUVRQXdCQlNDaEFTRW1JS0FCSVNjTERBRUxDeUFuUVFBMkFnQWdKaUUwQlNBTFFRaHFJWklCSUpJQktBSUFJWk1CSUpNQlFReHFJWlFCSUpRQklKQUJOZ0lBSUpBQlFRaHFJWlVCSUpVQklKTUJOZ0lBSUpBQklUUUxDeUNPQVVFQVJpR2tBUUpBSUtRQlJRUkFJQXRCSEdvaHBRRWdwUUVvQWdBaHBnRkI3RGdncGdGQkFuUnFJYWNCSUtjQktBSUFJYWdCSUFzZ3FBRkdJYWtCSUtrQkJFQWdwd0VnTkRZQ0FDQTBRUUJHSWFBSUlLQUlCRUJCQVNDbUFYUWhxZ0VncWdGQmYzTWhxd0VnbmdnZ3F3RnhJYXdCUWNBMklLd0JOZ0lBREFNTEJTQ09BVUVRYWlHdEFTQ3RBU2dDQUNHdkFTQ3ZBU0FMUnlHd0FTQ3dBVUVCY1NGU0lJNEJRUkJxSUZKQkFuUnFJYkVCSUxFQklEUTJBZ0FnTkVFQVJpR3lBU0N5QVFSQURBTUxDeUEwUVJocUliTUJJTE1CSUk0Qk5nSUFJQXRCRUdvaHRBRWd0QUVvQWdBaHRRRWd0UUZCQUVZaHRnRWd0Z0ZGQkVBZ05FRVFhaUczQVNDM0FTQzFBVFlDQUNDMUFVRVlhaUc0QVNDNEFTQTBOZ0lBQ3lBTFFSUnFJYm9CSUxvQktBSUFJYnNCSUxzQlFRQkdJYndCSUx3QlJRUkFJRFJCRkdvaHZRRWd2UUVndXdFMkFnQWd1d0ZCR0dvaHZnRWd2Z0VnTkRZQ0FBc0xDeUFOUVJCSkliOEJJTDhCQkVBZ0RTQ0FCV29od0FFZ3dBRkJBM0lod1FFZ0MwRUVhaUhDQVNEQ0FTREJBVFlDQUNBTElNQUJhaUhEQVNEREFVRUVhaUhHQVNER0FTZ0NBQ0hIQVNESEFVRUJjaUhJQVNER0FTRElBVFlDQUFVZ2dBVkJBM0loeVFFZ0MwRUVhaUhLQVNES0FTREpBVFlDQUNBTlFRRnlJY3NCSUlvQlFRUnFJY3dCSU13QklNc0JOZ0lBSUlvQklBMXFJYzBCSU0wQklBMDJBZ0FnMVFKQkFFWWh6Z0VnemdGRkJFQkIwRFlvQWdBaHp3RWcxUUpCQTNZaDBRRWcwUUZCQVhRaDBnRkI1RFlnMGdGQkFuUnFJZE1CUVFFZzBRRjBJZFFCSU40R0lOUUJjU0hWQVNEVkFVRUFSaUhXQVNEV0FRUkFJTjRHSU5RQmNpSFhBVUc4TmlEWEFUWUNBQ0RUQVVFSWFpRkZJTk1CSVFjZ1JTRk5CU0RUQVVFSWFpSFlBU0RZQVNnQ0FDSFpBU0RaQVNFSElOZ0JJVTBMSUUwZ3p3RTJBZ0FnQjBFTWFpSGFBU0RhQVNEUEFUWUNBQ0RQQVVFSWFpSGNBU0RjQVNBSE5nSUFJTThCUVF4cUlkMEJJTjBCSU5NQk5nSUFDMEhFTmlBTk5nSUFRZEEySUlvQk5nSUFDeUFMUVFocUlkNEJJTjRCSVFZZ3N3Z2tEU0FHRHdVZ2dBVWhEd3NMQlNDQUJTRVBDd1VnQUVHL2Ywc2gzd0VnM3dFRVFFRi9JUThGSUFCQkMyb2g0QUVnNEFGQmVIRWg0UUZCd0RZb0FnQWg0Z0VnNGdGQkFFWWg0d0VnNHdFRVFDRGhBU0VQQlVFQUlPRUJheUhrQVNEZ0FVRUlkaUhsQVNEbEFVRUFSaUhuQVNEbkFRUkFRUUFoSUFVZzRRRkIvLy8vQjBzaDZBRWc2QUVFUUVFZklTQUZJT1VCUVlEK1Ayb2g2UUVnNlFGQkVIWWg2Z0VnNmdGQkNIRWg2d0VnNVFFZzZ3RjBJZXdCSU93QlFZRGdIMm9oN1FFZzdRRkJFSFloN2dFZzdnRkJCSEVoN3dFZzd3RWc2d0Z5SWZBQklPd0JJTzhCZENIeUFTRHlBVUdBZ0E5cUlmTUJJUE1CUVJCMklmUUJJUFFCUVFKeElmVUJJUEFCSVBVQmNpSDJBVUVPSVBZQmF5SDNBU0R5QVNEMUFYUWgrQUVnK0FGQkQzWWgrUUVnOXdFZytRRnFJZm9CSVBvQlFRRjBJZnNCSVBvQlFRZHFJZjBCSU9FQklQMEJkaUgrQVNEK0FVRUJjU0gvQVNEL0FTRDdBWEloZ0FJZ2dBSWhJQXNMUWV3NElDQkJBblJxSVlFQ0lJRUNLQUlBSVlJQ0lJSUNRUUJHSVlNQ0FrQWdnd0lFUUVFQUlUTkJBQ0UySU9RQklUZEJPU0d5Q0FVZ0lFRWZSaUdFQWlBZ1FRRjJJWVVDUVJrZ2hRSnJJWVlDSUlRQ0JIOUJBQVVnaGdJTElZZ0NJT0VCSUlnQ2RDR0pBa0VBSVJzZzVBRWhIaUNDQWlFZklJa0NJU0pCQUNFa0EwQUNRQ0FmUVFScUlZb0NJSW9DS0FJQUlZc0NJSXNDUVhoeElZd0NJSXdDSU9FQmF5R05BaUNOQWlBZVNTR09BaUNPQWdSQUlJMENRUUJHSVk4Q0lJOENCRUJCQUNFOUlCOGhRQ0FmSVVGQlBTR3lDQXdGQlNBZklTc2dqUUloTEFzRklCc2hLeUFlSVN3TElCOUJGR29oa0FJZ2tBSW9BZ0Foa1FJZ0lrRWZkaUdUQWlBZlFSQnFJSk1DUVFKMGFpR1VBaUNVQWlnQ0FDR1ZBaUNSQWtFQVJpR1dBaUNSQWlDVkFrWWhsd0lnbGdJZ2x3SnlJYWdJSUtnSUJIOGdKQVVna1FJTElTMGdsUUpCQUVZaG1BSWdtQUpCQVhNaHBBZ2dwQWhCQVhFaG1RSWdJaUNaQW5RaElTQ1lBZ1JBSUMwaE15QXJJVFlnTENFM1FUa2hzZ2dNQVFVZ0t5RWJJQ3doSGlDVkFpRWZJQ0VoSWlBdElTUUxEQUVMQ3dzTElMSUlRVGxHQkVBZ00wRUFSaUdhQWlBMlFRQkdJWnNDSUpvQ0lKc0NjU0dtQ0NDbUNBUkFRUUlnSUhRaG5BSkJBQ0NjQW1zaG5nSWduQUlnbmdKeUlaOENJT0lCSUo4Q2NTR2dBaUNnQWtFQVJpR2hBaUNoQWdSQUlPRUJJUThNQmd0QkFDQ2dBbXNob2dJZ29BSWdvZ0p4SWFNQ0lLTUNRWDlxSWFRQ0lLUUNRUXgySWFVQ0lLVUNRUkJ4SWFZQ0lLUUNJS1lDZGlHbkFpQ25Ba0VGZGlHcEFpQ3BBa0VJY1NHcUFpQ3FBaUNtQW5JaHF3SWdwd0lncWdKMklhd0NJS3dDUVFKMklhMENJSzBDUVFSeElhNENJS3NDSUs0Q2NpR3ZBaUNzQWlDdUFuWWhzQUlnc0FKQkFYWWhzUUlnc1FKQkFuRWhzZ0lncndJZ3NnSnlJYlVDSUxBQ0lMSUNkaUcyQWlDMkFrRUJkaUczQWlDM0FrRUJjU0c0QWlDMUFpQzRBbklodVFJZ3RnSWd1QUoySWJvQ0lMa0NJTG9DYWlHN0FrSHNPQ0M3QWtFQ2RHb2h2QUlndkFJb0FnQWh2UUpCQUNFNklMMENJVDhGSURZaE9pQXpJVDhMSUQ5QkFFWWh2Z0lndmdJRVFDQTZJVGtnTnlFOEJTQTNJVDBnUHlGQUlEb2hRVUU5SWJJSUN3c2dzZ2hCUFVZRVFBTkFBa0JCQUNHeUNDQkFRUVJxSWNBQ0lNQUNLQUlBSWNFQ0lNRUNRWGh4SWNJQ0lNSUNJT0VCYXlIREFpRERBaUE5U1NIRUFpREVBZ1IvSU1NQ0JTQTlDeUVFSU1RQ0JIOGdRQVVnUVFzaFBpQkFRUkJxSWNVQ0lNVUNLQUlBSWNZQ0lNWUNRUUJHSWNjQ0lNY0NRUUZ4SVZNZ1FFRVFhaUJUUVFKMGFpSElBaURJQWlnQ0FDSEpBaURKQWtFQVJpSExBaURMQWdSQUlENGhPU0FFSVR3TUFRVWdCQ0U5SU1rQ0lVQWdQaUZCUVQwaHNnZ0xEQUVMQ3dzZ09VRUFSaUhNQWlETUFnUkFJT0VCSVE4RlFjUTJLQUlBSWMwQ0lNMENJT0VCYXlIT0FpQThJTTRDU1NIUEFpRFBBZ1JBSURrZzRRRnFJZEFDSU5BQ0lEbExJZEVDSU5FQ1JRUkFRUUFoQmlDekNDUU5JQVlQQ3lBNVFSaHFJZElDSU5JQ0tBSUFJZE1DSURsQkRHb2gxQUlnMUFJb0FnQWgxZ0lnMWdJZ09VWWgxd0lDUUNEWEFnUkFJRGxCRkdvaDNBSWczQUlvQWdBaDNRSWczUUpCQUVZaDNnSWczZ0lFUUNBNVFSQnFJZDhDSU44Q0tBSUFJZUVDSU9FQ1FRQkdJZUlDSU9JQ0JFQkJBQ0U0REFNRklPRUNJUzRnM3dJaEx3c0ZJTjBDSVM0ZzNBSWhMd3NEUUFKQUlDNUJGR29oNHdJZzR3SW9BZ0FoNUFJZzVBSkJBRVloNVFJZzVRSkZCRUFnNUFJaExpRGpBaUV2REFJTElDNUJFR29oNWdJZzVnSW9BZ0FoNXdJZzV3SkJBRVloNkFJZzZBSUVRQXdCQlNEbkFpRXVJT1lDSVM4TERBRUxDeUF2UVFBMkFnQWdMaUU0QlNBNVFRaHFJZGdDSU5nQ0tBSUFJZGtDSU5rQ1FReHFJZG9DSU5vQ0lOWUNOZ0lBSU5ZQ1FRaHFJZHNDSU5zQ0lOa0NOZ0lBSU5ZQ0lUZ0xDeURUQWtFQVJpSHBBZ0pBSU9rQ0JFQWc0Z0VoeGdNRklEbEJIR29oNmdJZzZnSW9BZ0FoN0FKQjdEZ2c3QUpCQW5ScUllMENJTzBDS0FJQUllNENJRGtnN2dKR0llOENJTzhDQkVBZzdRSWdPRFlDQUNBNFFRQkdJYUlJSUtJSUJFQkJBU0RzQW5RaDhBSWc4QUpCZjNNaDhRSWc0Z0VnOFFKeElmSUNRY0EySVBJQ05nSUFJUElDSWNZRERBTUxCU0RUQWtFUWFpSHpBaUR6QWlnQ0FDSDBBaUQwQWlBNVJ5SDFBaUQxQWtFQmNTRlVJTk1DUVJCcUlGUkJBblJxSWZjQ0lQY0NJRGcyQWdBZ09FRUFSaUg0QWlENEFnUkFJT0lCSWNZRERBTUxDeUE0UVJocUlma0NJUGtDSU5NQ05nSUFJRGxCRUdvaCtnSWcrZ0lvQWdBaCt3SWcrd0pCQUVZaC9BSWcvQUpGQkVBZ09FRVFhaUg5QWlEOUFpRDdBallDQUNEN0FrRVlhaUgrQWlEK0FpQTROZ0lBQ3lBNVFSUnFJZjhDSVA4Q0tBSUFJWUFESUlBRFFRQkdJWUlESUlJREJFQWc0Z0VoeGdNRklEaEJGR29oZ3dNZ2d3TWdnQU0yQWdBZ2dBTkJHR29oaEFNZ2hBTWdPRFlDQUNEaUFTSEdBd3NMQ3lBOFFSQkpJWVVEQWtBZ2hRTUVRQ0E4SU9FQmFpR0dBeUNHQTBFRGNpR0hBeUE1UVFScUlZZ0RJSWdESUljRE5nSUFJRGtnaGdOcUlZa0RJSWtEUVFScUlZb0RJSW9ES0FJQUlZc0RJSXNEUVFGeUlZMERJSW9ESUkwRE5nSUFCU0RoQVVFRGNpR09BeUE1UVFScUlZOERJSThESUk0RE5nSUFJRHhCQVhJaGtBTWcwQUpCQkdvaGtRTWdrUU1na0FNMkFnQWcwQUlnUEdvaGtnTWdrZ01nUERZQ0FDQThRUU4ySVpNRElEeEJnQUpKSVpRRElKUURCRUFna3dOQkFYUWhsUU5CNURZZ2xRTkJBblJxSVpZRFFidzJLQUlBSVpnRFFRRWdrd04wSVprRElKZ0RJSmtEY1NHYUF5Q2FBMEVBUmlHYkF5Q2JBd1JBSUpnRElKa0RjaUdjQTBHOE5pQ2NBellDQUNDV0EwRUlhaUZKSUpZRElTVWdTU0ZNQlNDV0EwRUlhaUdkQXlDZEF5Z0NBQ0dlQXlDZUF5RWxJSjBESVV3TElFd2cwQUkyQWdBZ0pVRU1haUdmQXlDZkF5RFFBallDQUNEUUFrRUlhaUdnQXlDZ0F5QWxOZ0lBSU5BQ1FReHFJYUVESUtFRElKWUROZ0lBREFJTElEeEJDSFlocEFNZ3BBTkJBRVlocFFNZ3BRTUVRRUVBSVNNRklEeEIvLy8vQjBzaHBnTWdwZ01FUUVFZklTTUZJS1FEUVlEK1Ayb2hwd01ncHdOQkVIWWhxQU1ncUFOQkNIRWhxUU1ncEFNZ3FRTjBJYW9ESUtvRFFZRGdIMm9ocXdNZ3F3TkJFSFlockFNZ3JBTkJCSEVoclFNZ3JRTWdxUU55SWE4RElLb0RJSzBEZENHd0F5Q3dBMEdBZ0E5cUliRURJTEVEUVJCMkliSURJTElEUVFKeEliTURJSzhESUxNRGNpRzBBMEVPSUxRRGF5RzFBeUN3QXlDekEzUWh0Z01ndGdOQkQzWWh0d01ndFFNZ3R3TnFJYmdESUxnRFFRRjBJYm9ESUxnRFFRZHFJYnNESUR3Z3V3TjJJYndESUx3RFFRRnhJYjBESUwwRElMb0RjaUcrQXlDK0F5RWpDd3RCN0RnZ0kwRUNkR29odndNZzBBSkJIR29od0FNZ3dBTWdJellDQUNEUUFrRVFhaUhCQXlEQkEwRUVhaUhDQXlEQ0EwRUFOZ0lBSU1FRFFRQTJBZ0JCQVNBamRDSERBeURHQXlEREEzRWh4UU1neFFOQkFFWWh4d01neHdNRVFDREdBeUREQTNJaHlBTkJ3RFlneUFNMkFnQWd2d01nMEFJMkFnQWcwQUpCR0dvaHlRTWd5UU1ndndNMkFnQWcwQUpCREdvaHlnTWd5Z01nMEFJMkFnQWcwQUpCQ0dvaHl3TWd5d01nMEFJMkFnQU1BZ3NndndNb0FnQWh6QU1nSTBFZlJpSE5BeUFqUVFGMkljNERRUmtnemdOcklkQURJTTBEQkg5QkFBVWcwQU1MSWRFRElEd2cwUU4wSWRJRElOSURJUndnekFNaEhRTkFBa0FnSFVFRWFpSFRBeURUQXlnQ0FDSFVBeURVQTBGNGNTSFZBeURWQXlBOFJpSFdBeURXQXdSQVFlRUFJYklJREFFTElCeEJIM1loMXdNZ0hVRVFhaURYQTBFQ2RHb2gyQU1nSEVFQmRDSFpBeURZQXlnQ0FDSGJBeURiQTBFQVJpSGNBeURjQXdSQVFlQUFJYklJREFFRklOa0RJUndnMndNaEhRc01BUXNMSUxJSVFlQUFSZ1JBSU5nRElOQUNOZ0lBSU5BQ1FSaHFJZDBESU4wRElCMDJBZ0FnMEFKQkRHb2gzZ01nM2dNZzBBSTJBZ0FnMEFKQkNHb2gzd01nM3dNZzBBSTJBZ0FNQWdVZ3NnaEI0UUJHQkVBZ0hVRUlhaUhnQXlEZ0F5Z0NBQ0hoQXlEaEEwRU1haUhpQXlEaUF5RFFBallDQUNEZ0F5RFFBallDQUNEUUFrRUlhaUhqQXlEakF5RGhBellDQUNEUUFrRU1haUhrQXlEa0F5QWROZ0lBSU5BQ1FSaHFJZVlESU9ZRFFRQTJBZ0FNQXdzTEN3c2dPVUVJYWlIbkF5RG5BeUVHSUxNSUpBMGdCZzhGSU9FQklROExDd3NMQ3d0QnhEWW9BZ0FoNkFNZzZBTWdEMGtoNlFNZzZRTkZCRUFnNkFNZ0Qyc2g2Z05CMERZb0FnQWg2d01nNmdOQkQwc2g3QU1nN0FNRVFDRHJBeUFQYWlIdEEwSFFOaUR0QXpZQ0FFSEVOaURxQXpZQ0FDRHFBMEVCY2lIdUF5RHRBMEVFYWlIdkF5RHZBeUR1QXpZQ0FDRHJBeURvQTJvaDhRTWc4UU1nNmdNMkFnQWdEMEVEY2lIeUF5RHJBMEVFYWlIekF5RHpBeUR5QXpZQ0FBVkJ4RFpCQURZQ0FFSFFOa0VBTmdJQUlPZ0RRUU55SWZRRElPc0RRUVJxSWZVRElQVURJUFFETmdJQUlPc0RJT2dEYWlIMkF5RDJBMEVFYWlIM0F5RDNBeWdDQUNINEF5RDRBMEVCY2lINUF5RDNBeUQ1QXpZQ0FBc2c2d05CQ0dvaCtnTWcrZ01oQmlDekNDUU5JQVlQQzBISU5pZ0NBQ0g4QXlEOEF5QVBTeUg5QXlEOUF3UkFJUHdESUE5cklmNERRY2cySVA0RE5nSUFRZFEyS0FJQUlmOERJUDhESUE5cUlZQUVRZFEySUlBRU5nSUFJUDREUVFGeUlZRUVJSUFFUVFScUlZSUVJSUlFSUlFRU5nSUFJQTlCQTNJaGd3UWcvd05CQkdvaGhBUWdoQVFnZ3dRMkFnQWcvd05CQ0dvaGhRUWdoUVFoQmlDekNDUU5JQVlQQzBHVU9pZ0NBQ0dIQkNDSEJFRUFSaUdJQkNDSUJBUkFRWnc2UVlBZ05nSUFRWmc2UVlBZ05nSUFRYUE2UVg4MkFnQkJwRHBCZnpZQ0FFR29Pa0VBTmdJQVFmZzVRUUEyQWdBZ1ZTR0pCQ0NKQkVGd2NTR0tCQ0NLQkVIWXF0V3FCWE1oaXdSQmxEb2dpd1EyQWdCQmdDQWhqd1FGUVp3NktBSUFJVWdnU0NHUEJBc2dEMEV3YWlHTUJDQVBRUzlxSVkwRUlJOEVJSTBFYWlHT0JFRUFJSThFYXlHUUJDQ09CQ0NRQkhFaGt3UWdrd1FnRDBzaGxBUWdsQVJGQkVCQkFDRUdJTE1JSkEwZ0JnOExRZlE1S0FJQUlaVUVJSlVFUVFCR0laWUVJSllFUlFSQVFldzVLQUlBSVpjRUlKY0VJSk1FYWlHWUJDQ1lCQ0NYQkUwaG1RUWdtQVFnbFFSTElab0VJSmtFSUpvRWNpR25DQ0NuQ0FSQVFRQWhCaUN6Q0NRTklBWVBDd3RCK0Rrb0FnQWhtd1FnbXdSQkJIRWhuQVFnbkFSQkFFWWhuZ1FDUUNDZUJBUkFRZFEyS0FJQUlaOEVJSjhFUVFCR0lhQUVBa0Fnb0FRRVFFSDJBQ0d5Q0FWQi9Ea2hDZ05BQWtBZ0NpZ0NBQ0doQkNDaEJDQ2ZCRXNob2dRZ29nUkZCRUFnQ2tFRWFpR2pCQ0NqQkNnQ0FDR2tCQ0NoQkNDa0JHb2hwUVFncFFRZ253UkxJYVlFSUtZRUJFQU1BZ3NMSUFwQkNHb2hwd1FncHdRb0FnQWhxUVFncVFSQkFFWWhxZ1FncWdRRVFFSDJBQ0d5Q0F3RUJTQ3BCQ0VLQ3d3QkN3c2dqZ1FnL0FOckljTUVJTU1FSUpBRWNTSEVCQ0RFQkVILy8vLy9CMGtoeFFRZ3hRUUVRQ0RFQkJCaEljWUVJQW9vQWdBaHh3UWdvd1FvQWdBaHlBUWd4d1FneUFScUljb0VJTVlFSU1vRVJpSExCQ0RMQkFSQUlNWUVRWDlHSWN3RUlNd0VCRUFneEFRaE1BVWd4QVFoUWlER0JDRkRRWWNCSWJJSURBWUxCU0RHQkNFeElNUUVJVEpCL2dBaHNnZ0xCVUVBSVRBTEN3c0NRQ0N5Q0VIMkFFWUVRRUVBRUdFaHF3UWdxd1JCZjBZaHJBUWdyQVFFUUVFQUlUQUZJS3NFSWEwRVFaZzZLQUlBSWE0RUlLNEVRWDlxSWE4RUlLOEVJSzBFY1NHd0JDQ3dCRUVBUmlHeEJDQ3ZCQ0N0QkdvaHNnUkJBQ0N1QkdzaHRBUWdzZ1FndEFSeEliVUVJTFVFSUswRWF5RzJCQ0N4QkFSL1FRQUZJTFlFQ3lHM0JDQzNCQ0NUQkdvaEJVSHNPU2dDQUNHNEJDQUZJTGdFYWlHNUJDQUZJQTlMSWJvRUlBVkIvLy8vL3dkSklic0VJTG9FSUxzRWNTR2xDQ0NsQ0FSQVFmUTVLQUlBSWJ3RUlMd0VRUUJHSWIwRUlMMEVSUVJBSUxrRUlMZ0VUU0cvQkNDNUJDQzhCRXNod0FRZ3Z3UWd3QVJ5SWEwSUlLMElCRUJCQUNFd0RBVUxDeUFGRUdFaHdRUWd3UVFncXdSR0ljSUVJTUlFQkVBZ0JTRkNJS3NFSVVOQmh3RWhzZ2dNQmdVZ3dRUWhNU0FGSVRKQi9nQWhzZ2dMQlVFQUlUQUxDd3NMQWtBZ3NnaEIvZ0JHQkVCQkFDQXlheUhOQkNBeFFYOUhJYzRFSURKQi8vLy8vd2RKSWM4RUlNOEVJTTRFY1NHeENDQ01CQ0F5U3lIUUJDRFFCQ0N4Q0hFaHFRZ2dxUWhGQkVBZ01VRi9SaUhiQkNEYkJBUkFRUUFoTUF3REJTQXlJVUlnTVNGRFFZY0JJYklJREFVTEFBdEJuRG9vQWdBaDBRUWdqUVFnTW1zaDBnUWcwZ1FnMFFScUlkTUVRUUFnMFFScklkVUVJTk1FSU5VRWNTSFdCQ0RXQkVILy8vLy9CMGtoMXdRZzF3UkZCRUFnTWlGQ0lERWhRMEdIQVNHeUNBd0VDeURXQkJCaElkZ0VJTmdFUVg5R0lka0VJTmtFQkVBZ3pRUVFZUnBCQUNFd0RBSUZJTllFSURKcUlkb0VJTm9FSVVJZ01TRkRRWWNCSWJJSURBUUxBQXNMUWZnNUtBSUFJZHdFSU53RVFRUnlJZDBFUWZnNUlOMEVOZ0lBSURBaE8wR0ZBU0d5Q0FWQkFDRTdRWVVCSWJJSUN3c2dzZ2hCaFFGR0JFQWdrd1JCLy8vLy93ZEpJZDRFSU40RUJFQWdrd1FRWVNIZ0JFRUFFR0VoNFFRZzRBUkJmMGNoNGdRZzRRUkJmMGNoNHdRZzRnUWc0d1J4SWE4SUlPQUVJT0VFU1NIa0JDRGtCQ0N2Q0hFaHFnZ2c0UVFoNVFRZzRBUWg1Z1FnNVFRZzVnUnJJZWNFSUE5QktHb2g2QVFnNXdRZzZBUkxJZWtFSU9rRUJIOGc1d1FGSURzTElRTWdxZ2hCQVhNaHF3Z2c0QVJCZjBZaDZ3UWc2UVJCQVhNaG93Z2c2d1Fnb3doeUlld0VJT3dFSUtzSWNpR3VDQ0N1Q0VVRVFDQURJVUlnNEFRaFEwR0hBU0d5Q0FzTEN5Q3lDRUdIQVVZRVFFSHNPU2dDQUNIdEJDRHRCQ0JDYWlIdUJFSHNPU0R1QkRZQ0FFSHdPU2dDQUNIdkJDRHVCQ0R2QkVzaDhBUWc4QVFFUUVId09TRHVCRFlDQUF0QjFEWW9BZ0FoOFFRZzhRUkJBRVloOGdRQ1FDRHlCQVJBUWN3MktBSUFJZk1FSVBNRVFRQkdJZlFFSUVNZzh3UkpJZllFSVBRRUlQWUVjaUdzQ0NDc0NBUkFRY3cySUVNMkFnQUxRZnc1SUVNMkFnQkJnRG9nUWpZQ0FFR0lPa0VBTmdJQVFaUTZLQUlBSWZjRVFlQTJJUGNFTmdJQVFkdzJRWDgyQWdCQjhEWkI1RFkyQWdCQjdEWkI1RFkyQWdCQitEWkI3RFkyQWdCQjlEWkI3RFkyQWdCQmdEZEI5RFkyQWdCQi9EWkI5RFkyQWdCQmlEZEIvRFkyQWdCQmhEZEIvRFkyQWdCQmtEZEJoRGMyQWdCQmpEZEJoRGMyQWdCQm1EZEJqRGMyQWdCQmxEZEJqRGMyQWdCQm9EZEJsRGMyQWdCQm5EZEJsRGMyQWdCQnFEZEJuRGMyQWdCQnBEZEJuRGMyQWdCQnNEZEJwRGMyQWdCQnJEZEJwRGMyQWdCQnVEZEJyRGMyQWdCQnREZEJyRGMyQWdCQndEZEJ0RGMyQWdCQnZEZEJ0RGMyQWdCQnlEZEJ2RGMyQWdCQnhEZEJ2RGMyQWdCQjBEZEJ4RGMyQWdCQnpEZEJ4RGMyQWdCQjJEZEJ6RGMyQWdCQjFEZEJ6RGMyQWdCQjREZEIxRGMyQWdCQjNEZEIxRGMyQWdCQjZEZEIzRGMyQWdCQjVEZEIzRGMyQWdCQjhEZEI1RGMyQWdCQjdEZEI1RGMyQWdCQitEZEI3RGMyQWdCQjlEZEI3RGMyQWdCQmdEaEI5RGMyQWdCQi9EZEI5RGMyQWdCQmlEaEIvRGMyQWdCQmhEaEIvRGMyQWdCQmtEaEJoRGcyQWdCQmpEaEJoRGcyQWdCQm1EaEJqRGcyQWdCQmxEaEJqRGcyQWdCQm9EaEJsRGcyQWdCQm5EaEJsRGcyQWdCQnFEaEJuRGcyQWdCQnBEaEJuRGcyQWdCQnNEaEJwRGcyQWdCQnJEaEJwRGcyQWdCQnVEaEJyRGcyQWdCQnREaEJyRGcyQWdCQndEaEJ0RGcyQWdCQnZEaEJ0RGcyQWdCQnlEaEJ2RGcyQWdCQnhEaEJ2RGcyQWdCQjBEaEJ4RGcyQWdCQnpEaEJ4RGcyQWdCQjJEaEJ6RGcyQWdCQjFEaEJ6RGcyQWdCQjREaEIxRGcyQWdCQjNEaEIxRGcyQWdCQjZEaEIzRGcyQWdCQjVEaEIzRGcyQWdBZ1FrRllhaUg0QkNCRFFRaHFJZmtFSVBrRUlmb0VJUG9FUVFkeElmc0VJUHNFUVFCR0lmd0VRUUFnK2dScklmMEVJUDBFUVFkeElmNEVJUHdFQkg5QkFBVWcvZ1FMSWY4RUlFTWcvd1JxSVlJRklQZ0VJUDhFYXlHREJVSFVOaUNDQlRZQ0FFSElOaUNEQlRZQ0FDQ0RCVUVCY2lHRUJTQ0NCVUVFYWlHRkJTQ0ZCU0NFQlRZQ0FDQkRJUGdFYWlHR0JTQ0dCVUVFYWlHSEJTQ0hCVUVvTmdJQVFhUTZLQUlBSVlnRlFkZzJJSWdGTmdJQUJVSDhPU0VWQTBBQ1FDQVZLQUlBSVlrRklCVkJCR29oaWdVZ2lnVW9BZ0FoaXdVZ2lRVWdpd1ZxSVkwRklFTWdqUVZHSVk0RklJNEZCRUJCandFaHNnZ01BUXNnRlVFSWFpR1BCU0NQQlNnQ0FDR1FCU0NRQlVFQVJpR1JCU0NSQlFSQURBRUZJSkFGSVJVTERBRUxDeUN5Q0VHUEFVWUVRQ0FWUVF4cUlaSUZJSklGS0FJQUlaTUZJSk1GUVFoeElaUUZJSlFGUVFCR0laVUZJSlVGQkVBZ2lRVWc4UVJOSVpZRklFTWc4UVJMSVpnRklKZ0ZJSllGY1NHd0NDQ3dDQVJBSUlzRklFSnFJWmtGSUlvRklKa0ZOZ0lBUWNnMktBSUFJWm9GSUpvRklFSnFJWnNGSVBFRVFRaHFJWndGSUp3RklaMEZJSjBGUVFkeElaNEZJSjRGUVFCR0laOEZRUUFnblFWcklhQUZJS0FGUVFkeElhRUZJSjhGQkg5QkFBVWdvUVVMSWFNRklQRUVJS01GYWlHa0JTQ2JCU0NqQldzaHBRVkIxRFlncEFVMkFnQkJ5RFlncFFVMkFnQWdwUVZCQVhJaHBnVWdwQVZCQkdvaHB3VWdwd1VncGdVMkFnQWc4UVFnbXdWcUlhZ0ZJS2dGUVFScUlha0ZJS2tGUVNnMkFnQkJwRG9vQWdBaHFnVkIyRFlncWdVMkFnQU1CQXNMQzBITU5pZ0NBQ0dyQlNCRElLc0ZTU0dzQlNDc0JRUkFRY3cySUVNMkFnQUxJRU1nUW1vaHJnVkIvRGtoS0FOQUFrQWdLQ2dDQUNHdkJTQ3ZCU0N1QlVZaHNBVWdzQVVFUUVHWEFTR3lDQXdCQ3lBb1FRaHFJYkVGSUxFRktBSUFJYklGSUxJRlFRQkdJYk1GSUxNRkJFQkIvRGtoQ1F3QkJTQ3lCU0VvQ3d3QkN3c2dzZ2hCbHdGR0JFQWdLRUVNYWlHMEJTQzBCU2dDQUNHMUJTQzFCVUVJY1NHMkJTQzJCVUVBUmlHM0JTQzNCUVJBSUNnZ1F6WUNBQ0FvUVFScUlia0ZJTGtGS0FJQUlib0ZJTG9GSUVKcUlic0ZJTGtGSUxzRk5nSUFJRU5CQ0dvaHZBVWd2QVVodlFVZ3ZRVkJCM0VodmdVZ3ZnVkJBRVlodndWQkFDQzlCV3Nod0FVZ3dBVkJCM0Vod1FVZ3Z3VUVmMEVBQlNEQkJRc2h3Z1VnUXlEQ0JXb2h4QVVncmdWQkNHb2h4UVVneFFVaHhnVWd4Z1ZCQjNFaHh3VWd4d1ZCQUVZaHlBVkJBQ0RHQldzaHlRVWd5UVZCQjNFaHlnVWd5QVVFZjBFQUJTREtCUXNoeXdVZ3JnVWd5d1ZxSWN3RklNd0ZJYzBGSU1RRkljOEZJTTBGSU04RmF5SFFCU0RFQlNBUGFpSFJCU0RRQlNBUGF5SFNCU0FQUVFOeUlkTUZJTVFGUVFScUlkUUZJTlFGSU5NRk5nSUFJUEVFSU13RlJpSFZCUUpBSU5VRkJFQkJ5RFlvQWdBaDFnVWcxZ1VnMGdWcUlkY0ZRY2cySU5jRk5nSUFRZFEySU5FRk5nSUFJTmNGUVFGeUlkZ0ZJTkVGUVFScUlkb0ZJTm9GSU5nRk5nSUFCVUhRTmlnQ0FDSGJCU0RiQlNETUJVWWgzQVVnM0FVRVFFSEVOaWdDQUNIZEJTRGRCU0RTQldvaDNnVkJ4RFlnM2dVMkFnQkIwRFlnMFFVMkFnQWczZ1ZCQVhJaDN3VWcwUVZCQkdvaDRBVWc0QVVnM3dVMkFnQWcwUVVnM2dWcUllRUZJT0VGSU40Rk5nSUFEQUlMSU13RlFRUnFJZUlGSU9JRktBSUFJZU1GSU9NRlFRTnhJZVVGSU9VRlFRRkdJZVlGSU9ZRkJFQWc0d1ZCZUhFaDV3VWc0d1ZCQTNZaDZBVWc0d1ZCZ0FKSklla0ZBa0FnNlFVRVFDRE1CVUVJYWlIcUJTRHFCU2dDQUNIckJTRE1CVUVNYWlIc0JTRHNCU2dDQUNIdEJTRHRCU0RyQlVZaDdnVWc3Z1VFUUVFQklPZ0ZkQ0h4QlNEeEJVRi9jeUh5QlVHOE5pZ0NBQ0h6QlNEekJTRHlCWEVoOUFWQnZEWWc5QVUyQWdBTUFnVWc2d1ZCREdvaDlRVWc5UVVnN1FVMkFnQWc3UVZCQ0dvaDlnVWc5Z1VnNndVMkFnQU1BZ3NBQlNETUJVRVlhaUgzQlNEM0JTZ0NBQ0g0QlNETUJVRU1haUg1QlNENUJTZ0NBQ0g2QlNENkJTRE1CVVloL0FVQ1FDRDhCUVJBSU13RlFSQnFJWUVHSUlFR1FRUnFJWUlHSUlJR0tBSUFJWU1HSUlNR1FRQkdJWVFHSUlRR0JFQWdnUVlvQWdBaGhRWWdoUVpCQUVZaGh3WWdod1lFUUVFQUlUVU1Bd1VnaFFZaEtTQ0JCaUVxQ3dVZ2d3WWhLU0NDQmlFcUN3TkFBa0FnS1VFVWFpR0lCaUNJQmlnQ0FDR0pCaUNKQmtFQVJpR0tCaUNLQmtVRVFDQ0pCaUVwSUlnR0lTb01BZ3NnS1VFUWFpR0xCaUNMQmlnQ0FDR01CaUNNQmtFQVJpR05CaUNOQmdSQURBRUZJSXdHSVNrZ2l3WWhLZ3NNQVFzTElDcEJBRFlDQUNBcElUVUZJTXdGUVFocUlmMEZJUDBGS0FJQUlmNEZJUDRGUVF4cUlmOEZJUDhGSVBvRk5nSUFJUG9GUVFocUlZQUdJSUFHSVA0Rk5nSUFJUG9GSVRVTEN5RDRCVUVBUmlHT0JpQ09CZ1JBREFJTElNd0ZRUnhxSVk4R0lJOEdLQUlBSVpBR1FldzRJSkFHUVFKMGFpR1NCaUNTQmlnQ0FDR1RCaUNUQmlETUJVWWhsQVlDUUNDVUJnUkFJSklHSURVMkFnQWdOVUVBUmlHaENDQ2hDRVVFUUF3Q0MwRUJJSkFHZENHVkJpQ1ZCa0YvY3lHV0JrSEFOaWdDQUNHWEJpQ1hCaUNXQm5FaG1BWkJ3RFlnbUFZMkFnQU1Bd1VnK0FWQkVHb2htUVlnbVFZb0FnQWhtZ1lnbWdZZ3pBVkhJWnNHSUpzR1FRRnhJVkFnK0FWQkVHb2dVRUVDZEdvaG5RWWduUVlnTlRZQ0FDQTFRUUJHSVo0R0lKNEdCRUFNQkFzTEN5QTFRUmhxSVo4R0lKOEdJUGdGTmdJQUlNd0ZRUkJxSWFBR0lLQUdLQUlBSWFFR0lLRUdRUUJHSWFJR0lLSUdSUVJBSURWQkVHb2hvd1lnb3dZZ29RWTJBZ0Fnb1FaQkdHb2hwQVlncEFZZ05UWUNBQXNnb0FaQkJHb2hwUVlncFFZb0FnQWhwZ1lncGdaQkFFWWhxQVlncUFZRVFBd0NDeUExUVJScUlha0dJS2tHSUtZR05nSUFJS1lHUVJocUlhb0dJS29HSURVMkFnQUxDeURNQlNEbkJXb2hxd1lnNXdVZzBnVnFJYXdHSUtzR0lRZ2dyQVloRmdVZ3pBVWhDQ0RTQlNFV0N5QUlRUVJxSWEwR0lLMEdLQUlBSWE0R0lLNEdRWDV4SWE4R0lLMEdJSzhHTmdJQUlCWkJBWEloc0FZZzBRVkJCR29oc1FZZ3NRWWdzQVkyQWdBZzBRVWdGbW9oc3dZZ3N3WWdGallDQUNBV1FRTjJJYlFHSUJaQmdBSkpJYlVHSUxVR0JFQWd0QVpCQVhRaHRnWkI1RFlndGdaQkFuUnFJYmNHUWJ3MktBSUFJYmdHUVFFZ3RBWjBJYmtHSUxnR0lMa0djU0c2QmlDNkJrRUFSaUc3QmlDN0JnUkFJTGdHSUxrR2NpRzhCa0c4TmlDOEJqWUNBQ0MzQmtFSWFpRkhJTGNHSVJrZ1J5RkxCU0MzQmtFSWFpRytCaUMrQmlnQ0FDRy9CaUMvQmlFWklMNEdJVXNMSUVzZzBRVTJBZ0FnR1VFTWFpSEFCaURBQmlEUkJUWUNBQ0RSQlVFSWFpSEJCaURCQmlBWk5nSUFJTkVGUVF4cUljSUdJTUlHSUxjR05nSUFEQUlMSUJaQkNIWWh3d1lnd3daQkFFWWh4QVlDUUNERUJnUkFRUUFoR2dVZ0ZrSC8vLzhIU3lIRkJpREZCZ1JBUVI4aEdnd0NDeUREQmtHQS9qOXFJY1lHSU1ZR1FSQjJJY2NHSU1jR1FRaHhJY2tHSU1NR0lNa0dkQ0hLQmlES0JrR0E0QjlxSWNzR0lNc0dRUkIySWN3R0lNd0dRUVJ4SWMwR0lNMEdJTWtHY2lIT0JpREtCaUROQm5RaHp3WWd6d1pCZ0lBUGFpSFFCaURRQmtFUWRpSFJCaURSQmtFQ2NTSFNCaURPQmlEU0JuSWgxQVpCRGlEVUJtc2gxUVlnendZZzBnWjBJZFlHSU5ZR1FROTJJZGNHSU5VR0lOY0dhaUhZQmlEWUJrRUJkQ0haQmlEWUJrRUhhaUhhQmlBV0lOb0dkaUhiQmlEYkJrRUJjU0hjQmlEY0JpRFpCbkloM1FZZzNRWWhHZ3NMUWV3NElCcEJBblJxSWVBR0lORUZRUnhxSWVFR0lPRUdJQm8yQWdBZzBRVkJFR29oNGdZZzRnWkJCR29oNHdZZzR3WkJBRFlDQUNEaUJrRUFOZ0lBUWNBMktBSUFJZVFHUVFFZ0duUWg1UVlnNUFZZzVRWnhJZVlHSU9ZR1FRQkdJZWNHSU9jR0JFQWc1QVlnNVFaeUllZ0dRY0EySU9nR05nSUFJT0FHSU5FRk5nSUFJTkVGUVJocUlla0dJT2tHSU9BR05nSUFJTkVGUVF4cUllc0dJT3NHSU5FRk5nSUFJTkVGUVFocUlld0dJT3dHSU5FRk5nSUFEQUlMSU9BR0tBSUFJZTBHSUJwQkgwWWg3Z1lnR2tFQmRpSHZCa0VaSU84R2F5SHdCaUR1QmdSL1FRQUZJUEFHQ3lIeEJpQVdJUEVHZENIeUJpRHlCaUVYSU8wR0lSZ0RRQUpBSUJoQkJHb2g4d1lnOHdZb0FnQWg5QVlnOUFaQmVIRWg5Z1lnOWdZZ0ZrWWg5d1lnOXdZRVFFSEFBU0d5Q0F3QkN5QVhRUjkySWZnR0lCaEJFR29nK0FaQkFuUnFJZmtHSUJkQkFYUWgrZ1lnK1FZb0FnQWgrd1lnK3daQkFFWWgvQVlnL0FZRVFFRy9BU0d5Q0F3QkJTRDZCaUVYSVBzR0lSZ0xEQUVMQ3lDeUNFRy9BVVlFUUNENUJpRFJCVFlDQUNEUkJVRVlhaUg5QmlEOUJpQVlOZ0lBSU5FRlFReHFJZjRHSVA0R0lORUZOZ0lBSU5FRlFRaHFJZjhHSVA4R0lORUZOZ0lBREFJRklMSUlRY0FCUmdSQUlCaEJDR29oZ1FjZ2dRY29BZ0FoZ2djZ2dnZEJER29oZ3djZ2d3Y2cwUVUyQWdBZ2dRY2cwUVUyQWdBZzBRVkJDR29oaEFjZ2hBY2dnZ2MyQWdBZzBRVkJER29oaFFjZ2hRY2dHRFlDQUNEUkJVRVlhaUdHQnlDR0IwRUFOZ0lBREFNTEN3c0xJTVFGUVFocUlaRUlJSkVJSVFZZ3N3Z2tEU0FHRHdWQi9Ea2hDUXNMQTBBQ1FDQUpLQUlBSVljSElJY0hJUEVFU3lHSUJ5Q0lCMFVFUUNBSlFRUnFJWWtISUlrSEtBSUFJWW9ISUljSElJb0hhaUdNQnlDTUJ5RHhCRXNoalFjZ2pRY0VRQXdDQ3dzZ0NVRUlhaUdPQnlDT0J5Z0NBQ0dQQnlDUEJ5RUpEQUVMQ3lDTUIwRlJhaUdRQnlDUUIwRUlhaUdSQnlDUkJ5R1NCeUNTQjBFSGNTR1RCeUNUQjBFQVJpR1VCMEVBSUpJSGF5R1ZCeUNWQjBFSGNTR1hCeUNVQndSL1FRQUZJSmNIQ3lHWUJ5Q1FCeUNZQjJvaG1RY2c4UVJCRUdvaG1nY2dtUWNnbWdkSklac0hJSnNIQkg4ZzhRUUZJSmtIQ3lHY0J5Q2NCMEVJYWlHZEJ5Q2NCMEVZYWlHZUJ5QkNRVmhxSVo4SElFTkJDR29ob0FjZ29BY2hvZ2Nnb2dkQkIzRWhvd2Nnb3dkQkFFWWhwQWRCQUNDaUIyc2hwUWNncFFkQkIzRWhwZ2NncEFjRWYwRUFCU0NtQndzaHB3Y2dReUNuQjJvaHFBY2dud2NncHdkcklha0hRZFEySUtnSE5nSUFRY2cySUtrSE5nSUFJS2tIUVFGeUlhb0hJS2dIUVFScUlhc0hJS3NISUtvSE5nSUFJRU1nbndkcUlhMEhJSzBIUVFScUlhNEhJSzRIUVNnMkFnQkJwRG9vQWdBaHJ3ZEIyRFlncndjMkFnQWduQWRCQkdvaHNBY2dzQWRCR3pZQ0FDQ2RCMEg4T1NrQ0FEY0NBQ0NkQjBFSWFrSDhPVUVJYWlrQ0FEY0NBRUg4T1NCRE5nSUFRWUE2SUVJMkFnQkJpRHBCQURZQ0FFR0VPaUNkQnpZQ0FDQ2VCeUd5QndOQUFrQWdzZ2RCQkdvaHNRY2dzUWRCQnpZQ0FDQ3lCMEVJYWlHekJ5Q3pCeUNNQjBraHRBY2d0QWNFUUNDeEJ5R3lCd1VNQVFzTUFRc0xJSndISVBFRVJpRzFCeUMxQjBVRVFDQ2NCeUcyQnlEeEJDRzRCeUMyQnlDNEIyc2h1UWNnc0Fjb0FnQWh1Z2NndWdkQmZuRWh1d2Nnc0FjZ3V3YzJBZ0FndVFkQkFYSWh2QWNnOFFSQkJHb2h2UWNndlFjZ3ZBYzJBZ0FnbkFjZ3VRYzJBZ0FndVFkQkEzWWh2Z2NndVFkQmdBSkpJYjhISUw4SEJFQWd2Z2RCQVhRaHdBZEI1RFlnd0FkQkFuUnFJY0VIUWJ3MktBSUFJY01IUVFFZ3ZnZDBJY1FISU1NSElNUUhjU0hGQnlERkIwRUFSaUhHQnlER0J3UkFJTU1ISU1RSGNpSEhCMEc4TmlESEJ6WUNBQ0RCQjBFSWFpRkdJTUVISVJNZ1JpRktCU0RCQjBFSWFpSElCeURJQnlnQ0FDSEpCeURKQnlFVElNZ0hJVW9MSUVvZzhRUTJBZ0FnRTBFTWFpSEtCeURLQnlEeEJEWUNBQ0R4QkVFSWFpSExCeURMQnlBVE5nSUFJUEVFUVF4cUljd0hJTXdISU1FSE5nSUFEQU1MSUxrSFFRaDJJYzhISU04SFFRQkdJZEFISU5BSEJFQkJBQ0VVQlNDNUIwSC8vLzhIU3lIUkJ5RFJCd1JBUVI4aEZBVWd6d2RCZ1A0L2FpSFNCeURTQjBFUWRpSFRCeURUQjBFSWNTSFVCeURQQnlEVUIzUWgxUWNnMVFkQmdPQWZhaUhXQnlEV0IwRVFkaUhYQnlEWEIwRUVjU0hZQnlEWUJ5RFVCM0loMmdjZzFRY2cyQWQwSWRzSElOc0hRWUNBRDJvaDNBY2czQWRCRUhZaDNRY2czUWRCQW5FaDNnY2cyZ2NnM2dkeUlkOEhRUTRnM3dkckllQUhJTnNISU40SGRDSGhCeURoQjBFUGRpSGlCeURnQnlEaUIyb2g0d2NnNHdkQkFYUWg1UWNnNHdkQkIyb2g1Z2NndVFjZzVnZDJJZWNISU9jSFFRRnhJZWdISU9nSElPVUhjaUhwQnlEcEJ5RVVDd3RCN0RnZ0ZFRUNkR29oNmdjZzhRUkJIR29oNndjZzZ3Y2dGRFlDQUNEeEJFRVVhaUhzQnlEc0IwRUFOZ0lBSUpvSFFRQTJBZ0JCd0RZb0FnQWg3UWRCQVNBVWRDSHVCeUR0QnlEdUIzRWg4QWNnOEFkQkFFWWg4UWNnOFFjRVFDRHRCeUR1QjNJaDhnZEJ3RFlnOGdjMkFnQWc2Z2NnOFFRMkFnQWc4UVJCR0dvaDh3Y2c4d2NnNmdjMkFnQWc4UVJCREdvaDlBY2c5QWNnOFFRMkFnQWc4UVJCQ0dvaDlRY2c5UWNnOFFRMkFnQU1Bd3NnNmdjb0FnQWg5Z2NnRkVFZlJpSDNCeUFVUVFGMklmZ0hRUmtnK0Fkcklma0hJUGNIQkg5QkFBVWcrUWNMSWZzSElMa0hJUHNIZENIOEJ5RDhCeUVSSVBZSElSSURRQUpBSUJKQkJHb2gvUWNnL1Fjb0FnQWgvZ2NnL2dkQmVIRWgvd2NnL3djZ3VRZEdJWUFJSUlBSUJFQkIxUUVoc2dnTUFRc2dFVUVmZGlHQkNDQVNRUkJxSUlFSVFRSjBhaUdDQ0NBUlFRRjBJWU1JSUlJSUtBSUFJWVFJSUlRSVFRQkdJWVlJSUlZSUJFQkIxQUVoc2dnTUFRVWdnd2doRVNDRUNDRVNDd3dCQ3dzZ3NnaEIxQUZHQkVBZ2dnZ2c4UVEyQWdBZzhRUkJHR29oaHdnZ2h3Z2dFallDQUNEeEJFRU1haUdJQ0NDSUNDRHhCRFlDQUNEeEJFRUlhaUdKQ0NDSkNDRHhCRFlDQUF3REJTQ3lDRUhWQVVZRVFDQVNRUWhxSVlvSUlJb0lLQUlBSVlzSUlJc0lRUXhxSVl3SUlJd0lJUEVFTmdJQUlJb0lJUEVFTmdJQUlQRUVRUWhxSVkwSUlJMElJSXNJTmdJQUlQRUVRUXhxSVk0SUlJNElJQkkyQWdBZzhRUkJHR29oandnZ2p3aEJBRFlDQUF3RUN3c0xDd3RCeURZb0FnQWhrZ2dna2dnZ0Qwc2hrd2dna3dnRVFDQ1NDQ0FQYXlHVUNFSElOaUNVQ0RZQ0FFSFVOaWdDQUNHVkNDQ1ZDQ0FQYWlHV0NFSFVOaUNXQ0RZQ0FDQ1VDRUVCY2lHWENDQ1dDRUVFYWlHWUNDQ1lDQ0NYQ0RZQ0FDQVBRUU55SVprSUlKVUlRUVJxSVpvSUlKb0lJSmtJTmdJQUlKVUlRUWhxSVp3SUlKd0lJUVlnc3dna0RTQUdEd3NMRURFaG5RZ2duUWhCRERZQ0FFRUFJUVlnc3dna0RTQUdEd3V3R3dHYkFuOGpEU0diQWlBQVFRQkdJUlFnRkFSQUR3c2dBRUY0YWlHREFVSE1OaWdDQUNITEFTQUFRWHhxSWRZQklOWUJLQUlBSWVFQklPRUJRWGh4SWV3QklJTUJJT3dCYWlIM0FTRGhBVUVCY1NHQ0FpQ0NBa0VBUmlHTkFnSkFJSTBDQkVBZ2d3RW9BZ0FoRlNEaEFVRURjU0VnSUNCQkFFWWhLeUFyQkVBUEMwRUFJQlZySVRZZ2d3RWdObW9oUVNBVklPd0JhaUZNSUVFZ3l3RkpJVmNnVndSQUR3dEIwRFlvQWdBaFlpQmlJRUZHSVcwZ2JRUkFJUGNCUVFScUlZRUNJSUVDS0FJQUlZTUNJSU1DUVFOeElZUUNJSVFDUVFOR0lZVUNJSVVDUlFSQUlFRWhCeUJNSVFnZ1FTR0xBZ3dEQzBIRU5pQk1OZ0lBSUlNQ1FYNXhJWVlDSUlFQ0lJWUNOZ0lBSUV4QkFYSWhod0lnUVVFRWFpR0lBaUNJQWlDSEFqWUNBQ0JCSUV4cUlZa0NJSWtDSUV3MkFnQVBDeUFWUVFOMklYZ2dGVUdBQWtraGhBRWdoQUVFUUNCQlFRaHFJWThCSUk4QktBSUFJWm9CSUVGQkRHb2hwUUVncFFFb0FnQWhzQUVnc0FFZ21nRkdJYnNCSUxzQkJFQkJBU0I0ZENIR0FTREdBVUYvY3lISUFVRzhOaWdDQUNISkFTREpBU0RJQVhFaHlnRkJ2RFlneWdFMkFnQWdRU0VISUV3aENDQkJJWXNDREFNRklKb0JRUXhxSWN3QklNd0JJTEFCTmdJQUlMQUJRUWhxSWMwQklNMEJJSm9CTmdJQUlFRWhCeUJNSVFnZ1FTR0xBZ3dEQ3dBTElFRkJHR29oemdFZ3pnRW9BZ0FoendFZ1FVRU1haUhRQVNEUUFTZ0NBQ0hSQVNEUkFTQkJSaUhTQVFKQUlOSUJCRUFnUVVFUWFpSFlBU0RZQVVFRWFpSFpBU0RaQVNnQ0FDSGFBU0RhQVVFQVJpSGJBU0RiQVFSQUlOZ0JLQUlBSWR3QklOd0JRUUJHSWQwQklOMEJCRUJCQUNFT0RBTUZJTndCSVFrZzJBRWhDZ3NGSU5vQklRa2cyUUVoQ2dzRFFBSkFJQWxCRkdvaDNnRWczZ0VvQWdBaDN3RWczd0ZCQUVZaDRBRWc0QUZGQkVBZzN3RWhDU0RlQVNFS0RBSUxJQWxCRUdvaDRnRWc0Z0VvQWdBaDR3RWc0d0ZCQUVZaDVBRWc1QUVFUUF3QkJTRGpBU0VKSU9JQklRb0xEQUVMQ3lBS1FRQTJBZ0FnQ1NFT0JTQkJRUWhxSWRNQklOTUJLQUlBSWRRQklOUUJRUXhxSWRVQklOVUJJTkVCTmdJQUlORUJRUWhxSWRjQklOY0JJTlFCTmdJQUlORUJJUTRMQ3lEUEFVRUFSaUhsQVNEbEFRUkFJRUVoQnlCTUlRZ2dRU0dMQWdVZ1FVRWNhaUhtQVNEbUFTZ0NBQ0huQVVIc09DRG5BVUVDZEdvaDZBRWc2QUVvQWdBaDZRRWc2UUVnUVVZaDZnRWc2Z0VFUUNEb0FTQU9OZ0lBSUE1QkFFWWhtQUlnbUFJRVFFRUJJT2NCZENIckFTRHJBVUYvY3lIdEFVSEFOaWdDQUNIdUFTRHVBU0R0QVhFaDd3RkJ3RFlnN3dFMkFnQWdRU0VISUV3aENDQkJJWXNDREFRTEJTRFBBVUVRYWlId0FTRHdBU2dDQUNIeEFTRHhBU0JCUnlIeUFTRHlBVUVCY1NFU0lNOEJRUkJxSUJKQkFuUnFJZk1CSVBNQklBNDJBZ0FnRGtFQVJpSDBBU0QwQVFSQUlFRWhCeUJNSVFnZ1FTR0xBZ3dFQ3dzZ0RrRVlhaUgxQVNEMUFTRFBBVFlDQUNCQlFSQnFJZllCSVBZQktBSUFJZmdCSVBnQlFRQkdJZmtCSVBrQlJRUkFJQTVCRUdvaCtnRWcrZ0VnK0FFMkFnQWcrQUZCR0dvaCt3RWcrd0VnRGpZQ0FBc2c5Z0ZCQkdvaC9BRWcvQUVvQWdBaC9RRWcvUUZCQUVZaC9nRWcvZ0VFUUNCQklRY2dUQ0VJSUVFaGl3SUZJQTVCRkdvaC93RWcvd0VnL1FFMkFnQWcvUUZCR0dvaGdBSWdnQUlnRGpZQ0FDQkJJUWNnVENFSUlFRWhpd0lMQ3dVZ2d3RWhCeURzQVNFSUlJTUJJWXNDQ3dzZ2l3SWc5d0ZKSVlvQ0lJb0NSUVJBRHdzZzl3RkJCR29oakFJZ2pBSW9BZ0FoamdJZ2pnSkJBWEVoandJZ2p3SkJBRVloa0FJZ2tBSUVRQThMSUk0Q1FRSnhJWkVDSUpFQ1FRQkdJWklDSUpJQ0JFQkIxRFlvQWdBaGt3SWdrd0lnOXdGR0laUUNJSlFDQkVCQnlEWW9BZ0FobFFJZ2xRSWdDR29obGdKQnlEWWdsZ0kyQWdCQjFEWWdCellDQUNDV0FrRUJjaUdYQWlBSFFRUnFJUllnRmlDWEFqWUNBRUhRTmlnQ0FDRVhJQWNnRjBZaEdDQVlSUVJBRHd0QjBEWkJBRFlDQUVIRU5rRUFOZ0lBRHd0QjBEWW9BZ0FoR1NBWklQY0JSaUVhSUJvRVFFSEVOaWdDQUNFYklCc2dDR29oSEVIRU5pQWNOZ0lBUWRBMklJc0NOZ0lBSUJ4QkFYSWhIU0FIUVFScUlSNGdIaUFkTmdJQUlJc0NJQnhxSVI4Z0h5QWNOZ0lBRHdzZ2pnSkJlSEVoSVNBaElBaHFJU0lnamdKQkEzWWhJeUNPQWtHQUFra2hKQUpBSUNRRVFDRDNBVUVJYWlFbElDVW9BZ0FoSmlEM0FVRU1haUVuSUNjb0FnQWhLQ0FvSUNaR0lTa2dLUVJBUVFFZ0kzUWhLaUFxUVg5eklTeEJ2RFlvQWdBaExTQXRJQ3h4SVM1QnZEWWdMallDQUF3Q0JTQW1RUXhxSVM4Z0x5QW9OZ0lBSUNoQkNHb2hNQ0F3SUNZMkFnQU1BZ3NBQlNEM0FVRVlhaUV4SURFb0FnQWhNaUQzQVVFTWFpRXpJRE1vQWdBaE5DQTBJUGNCUmlFMUFrQWdOUVJBSVBjQlFSQnFJVHNnTzBFRWFpRThJRHdvQWdBaFBTQTlRUUJHSVQ0Z1BnUkFJRHNvQWdBaFB5QS9RUUJHSVVBZ1FBUkFRUUFoRHd3REJTQS9JUXNnT3lFTUN3VWdQU0VMSUR3aERBc0RRQUpBSUF0QkZHb2hRaUJDS0FJQUlVTWdRMEVBUmlGRUlFUkZCRUFnUXlFTElFSWhEQXdDQ3lBTFFSQnFJVVVnUlNnQ0FDRkdJRVpCQUVZaFJ5QkhCRUFNQVFVZ1JpRUxJRVVoREFzTUFRc0xJQXhCQURZQ0FDQUxJUThGSVBjQlFRaHFJVGNnTnlnQ0FDRTRJRGhCREdvaE9TQTVJRFEyQWdBZ05FRUlhaUU2SURvZ09EWUNBQ0EwSVE4TEN5QXlRUUJHSVVnZ1NFVUVRQ0QzQVVFY2FpRkpJRWtvQWdBaFNrSHNPQ0JLUVFKMGFpRkxJRXNvQWdBaFRTQk5JUGNCUmlGT0lFNEVRQ0JMSUE4MkFnQWdEMEVBUmlHWkFpQ1pBZ1JBUVFFZ1NuUWhUeUJQUVg5eklWQkJ3RFlvQWdBaFVTQlJJRkJ4SVZKQndEWWdVallDQUF3RUN3VWdNa0VRYWlGVElGTW9BZ0FoVkNCVUlQY0JSeUZWSUZWQkFYRWhFeUF5UVJCcUlCTkJBblJxSVZZZ1ZpQVBOZ0lBSUE5QkFFWWhXQ0JZQkVBTUJBc0xJQTlCR0dvaFdTQlpJREkyQWdBZzl3RkJFR29oV2lCYUtBSUFJVnNnVzBFQVJpRmNJRnhGQkVBZ0QwRVFhaUZkSUYwZ1d6WUNBQ0JiUVJocUlWNGdYaUFQTmdJQUN5QmFRUVJxSVY4Z1h5Z0NBQ0ZnSUdCQkFFWWhZU0JoUlFSQUlBOUJGR29oWXlCaklHQTJBZ0FnWUVFWWFpRmtJR1FnRHpZQ0FBc0xDd3NnSWtFQmNpRmxJQWRCQkdvaFppQm1JR1UyQWdBZ2l3SWdJbW9oWnlCbklDSTJBZ0JCMERZb0FnQWhhQ0FISUdoR0lXa2dhUVJBUWNRMklDSTJBZ0FQQlNBaUlRMExCU0NPQWtGK2NTRnFJSXdDSUdvMkFnQWdDRUVCY2lGcklBZEJCR29oYkNCc0lHczJBZ0FnaXdJZ0NHb2hiaUJ1SUFnMkFnQWdDQ0VOQ3lBTlFRTjJJVzhnRFVHQUFra2hjQ0J3QkVBZ2IwRUJkQ0Z4UWVRMklIRkJBblJxSVhKQnZEWW9BZ0FoYzBFQklHOTBJWFFnY3lCMGNTRjFJSFZCQUVZaGRpQjJCRUFnY3lCMGNpRjNRYncySUhjMkFnQWdja0VJYWlFUUlISWhCaUFRSVJFRklISkJDR29oZVNCNUtBSUFJWG9nZWlFR0lIa2hFUXNnRVNBSE5nSUFJQVpCREdvaGV5QjdJQWMyQWdBZ0IwRUlhaUY4SUh3Z0JqWUNBQ0FIUVF4cUlYMGdmU0J5TmdJQUR3c2dEVUVJZGlGK0lINUJBRVloZnlCL0JFQkJBQ0VGQlNBTlFmLy8vd2RMSVlBQklJQUJCRUJCSHlFRkJTQitRWUQrUDJvaGdRRWdnUUZCRUhZaGdnRWdnZ0ZCQ0hFaGhRRWdmaUNGQVhRaGhnRWdoZ0ZCZ09BZmFpR0hBU0NIQVVFUWRpR0lBU0NJQVVFRWNTR0pBU0NKQVNDRkFYSWhpZ0VnaGdFZ2lRRjBJWXNCSUlzQlFZQ0FEMm9oakFFZ2pBRkJFSFloalFFZ2pRRkJBbkVoamdFZ2lnRWdqZ0Z5SVpBQlFRNGdrQUZySVpFQklJc0JJSTRCZENHU0FTQ1NBVUVQZGlHVEFTQ1JBU0NUQVdvaGxBRWdsQUZCQVhRaGxRRWdsQUZCQjJvaGxnRWdEU0NXQVhZaGx3RWdsd0ZCQVhFaG1BRWdtQUVnbFFGeUlaa0JJSmtCSVFVTEMwSHNPQ0FGUVFKMGFpR2JBU0FIUVJ4cUlad0JJSndCSUFVMkFnQWdCMEVRYWlHZEFTQUhRUlJxSVo0QklKNEJRUUEyQWdBZ25RRkJBRFlDQUVIQU5pZ0NBQ0dmQVVFQklBVjBJYUFCSUo4QklLQUJjU0doQVNDaEFVRUFSaUdpQVFKQUlLSUJCRUFnbndFZ29BRnlJYU1CUWNBMklLTUJOZ0lBSUpzQklBYzJBZ0FnQjBFWWFpR2tBU0NrQVNDYkFUWUNBQ0FIUVF4cUlhWUJJS1lCSUFjMkFnQWdCMEVJYWlHbkFTQ25BU0FITmdJQUJTQ2JBU2dDQUNHb0FTQUZRUjlHSWFrQklBVkJBWFlocWdGQkdTQ3FBV3NocXdFZ3FRRUVmMEVBQlNDckFRc2hyQUVnRFNDc0FYUWhyUUVnclFFaEF5Q29BU0VFQTBBQ1FDQUVRUVJxSWE0QklLNEJLQUlBSWE4QklLOEJRWGh4SWJFQklMRUJJQTFHSWJJQklMSUJCRUJCeVFBaG1nSU1BUXNnQTBFZmRpR3pBU0FFUVJCcUlMTUJRUUowYWlHMEFTQURRUUYwSWJVQklMUUJLQUlBSWJZQklMWUJRUUJHSWJjQklMY0JCRUJCeUFBaG1nSU1BUVVndFFFaEF5QzJBU0VFQ3d3QkN3c2dtZ0pCeUFCR0JFQWd0QUVnQnpZQ0FDQUhRUmhxSWJnQklMZ0JJQVEyQWdBZ0IwRU1haUc1QVNDNUFTQUhOZ0lBSUFkQkNHb2h1Z0VndWdFZ0J6WUNBQXdDQlNDYUFrSEpBRVlFUUNBRVFRaHFJYndCSUx3QktBSUFJYjBCSUwwQlFReHFJYjRCSUw0QklBYzJBZ0FndkFFZ0J6WUNBQ0FIUVFocUliOEJJTDhCSUwwQk5nSUFJQWRCREdvaHdBRWd3QUVnQkRZQ0FDQUhRUmhxSWNFQklNRUJRUUEyQWdBTUF3c0xDd3RCM0RZb0FnQWh3Z0Vnd2dGQmYyb2h3d0ZCM0RZZ3d3RTJBZ0Fnd3dGQkFFWWh4QUVneEFFRVFFR0VPaUVDQlE4TEEwQUNRQ0FDS0FJQUlRRWdBVUVBUmlIRkFTQUJRUWhxSWNjQklNVUJCRUFNQVFVZ3h3RWhBZ3NNQVFzTFFkdzJRWDgyQWdBUEMwOEJDSDhqRFNFSUl3MUJFR29rRFNNTkl3NU9CRUJCRUJBREN5QUlJUVlnQUVFOGFpRUJJQUVvQWdBaEFpQUNFREloQXlBR0lBTTJBZ0JCQmlBR0VBc2hCQ0FFRURBaEJTQUlKQTBnQlE4TG13VUJRSDhqRFNGQ0l3MUJNR29rRFNNTkl3NU9CRUJCTUJBREN5QkNRUkJxSVR3Z1FpRTdJRUpCSUdvaEhpQUFRUnhxSVNrZ0tTZ0NBQ0UwSUI0Z05EWUNBQ0FlUVFScUlUY2dBRUVVYWlFNElEZ29BZ0FoT1NBNUlEUnJJVG9nTnlBNk5nSUFJQjVCQ0dvaENpQUtJQUUyQWdBZ0hrRU1haUVMSUFzZ0FqWUNBQ0E2SUFKcUlRd2dBRUU4YWlFTklBMG9BZ0FoRGlBZUlROGdPeUFPTmdJQUlEdEJCR29oUFNBOUlBODJBZ0FnTzBFSWFpRStJRDVCQWpZQ0FFR1NBU0E3RUFraEVDQVFFREFoRVNBTUlCRkdJUklDUUNBU0JFQkJBeUZCQlVFQ0lRUWdEQ0VGSUI0aEJpQVJJUnNEUUFKQUlCdEJBRWdoR2lBYUJFQU1BUXNnQlNBYmF5RWtJQVpCQkdvaEpTQWxLQUlBSVNZZ0d5QW1TeUVuSUFaQkNHb2hLQ0FuQkg4Z0tBVWdCZ3NoQ1NBblFSOTBRUjkxSVNvZ0JDQXFhaUVJSUNjRWZ5QW1CVUVBQ3lFcklCc2dLMnNoQXlBSktBSUFJU3dnTENBRGFpRXRJQWtnTFRZQ0FDQUpRUVJxSVM0Z0xpZ0NBQ0V2SUM4Z0Eyc2hNQ0F1SURBMkFnQWdEU2dDQUNFeElBa2hNaUE4SURFMkFnQWdQRUVFYWlFL0lEOGdNallDQUNBOFFRaHFJVUFnUUNBSU5nSUFRWklCSUR3UUNTRXpJRE1RTUNFMUlDUWdOVVloTmlBMkJFQkJBeUZCREFRRklBZ2hCQ0FrSVFVZ0NTRUdJRFVoR3dzTUFRc0xJQUJCRUdvaEhDQWNRUUEyQWdBZ0tVRUFOZ0lBSURoQkFEWUNBQ0FBS0FJQUlSMGdIVUVnY2lFZklBQWdIellDQUNBRVFRSkdJU0FnSUFSQVFRQWhCd1VnQmtFRWFpRWhJQ0VvQWdBaElpQUNJQ0pySVNNZ0l5RUhDd3NMSUVGQkEwWUVRQ0FBUVN4cUlSTWdFeWdDQUNFVUlBQkJNR29oRlNBVktBSUFJUllnRkNBV2FpRVhJQUJCRUdvaEdDQVlJQmMyQWdBZ0ZDRVpJQ2tnR1RZQ0FDQTRJQmsyQWdBZ0FpRUhDeUJDSkEwZ0J3OExzQUVCRUg4akRTRVNJdzFCSUdva0RTTU5JdzVPQkVCQklCQURDeUFTSVF3Z0VrRVVhaUVGSUFCQlBHb2hCaUFHS0FJQUlRY2dCU0VJSUF3Z0J6WUNBQ0FNUVFScUlRMGdEVUVBTmdJQUlBeEJDR29oRGlBT0lBRTJBZ0FnREVFTWFpRVBJQThnQ0RZQ0FDQU1RUkJxSVJBZ0VDQUNOZ0lBUVl3QklBd1FDQ0VKSUFrUU1DRUtJQXBCQUVnaEN5QUxCRUFnQlVGL05nSUFRWDhoQkFVZ0JTZ0NBQ0VESUFNaEJBc2dFaVFOSUFRUEN6TUJCbjhqRFNFR0lBQkJnR0JMSVFJZ0FnUkFRUUFnQUdzaEF4QXhJUVFnQkNBRE5nSUFRWDhoQVFVZ0FDRUJDeUFCRHdzTUFRSi9JdzBoQVVIc09nOExDd0VDZnlNTklRSWdBQThMdXdFQkVYOGpEU0VUSXcxQklHb2tEU01OSXc1T0JFQkJJQkFEQ3lBVElROGdFMEVRYWlFSUlBQkJKR29oQ1NBSlFRSTJBZ0FnQUNnQ0FDRUtJQXBCd0FCeElRc2dDMEVBUmlFTUlBd0VRQ0FBUVR4cUlRMGdEU2dDQUNFT0lBZ2hBeUFQSUE0MkFnQWdEMEVFYWlFUUlCQkJrNmdCTmdJQUlBOUJDR29oRVNBUklBTTJBZ0JCTmlBUEVBb2hCQ0FFUVFCR0lRVWdCVVVFUUNBQVFjc0FhaUVHSUFaQmZ6b0FBQXNMSUFBZ0FTQUNFQzRoQnlBVEpBMGdCdzhMMEFFQkZYOGpEU0VXSUFBc0FBQWhDeUFCTEFBQUlRd2dDMEVZZEVFWWRTQU1RUmgwUVJoMVJ5RU5JQXRCR0hSQkdIVkJBRVloRGlBT0lBMXlJUlFnRkFSQUlBd2hCQ0FMSVFVRklBRWhBaUFBSVFNRFFBSkFJQU5CQVdvaER5QUNRUUZxSVJBZ0R5d0FBQ0VSSUJBc0FBQWhFaUFSUVJoMFFSaDFJQkpCR0hSQkdIVkhJUVlnRVVFWWRFRVlkVUVBUmlFSElBY2dCbkloRXlBVEJFQWdFaUVFSUJFaEJRd0JCU0FRSVFJZ0R5RURDd3dCQ3dzTElBVkIvd0Z4SVFnZ0JFSC9BWEVoQ1NBSUlBbHJJUW9nQ2c4THd3UUJMWDhqRFNFdkl3MUI0QUZxSkEwakRTTU9UZ1JBUWVBQkVBTUxJQzlCK0FCcUlSc2dMMEhRQUdvaEppQXZJU2dnTDBHSUFXb2hLU0FtUWdBM0FnQWdKa0VJYWtJQU53SUFJQ1pCRUdwQ0FEY0NBQ0FtUVJocVFnQTNBZ0FnSmtFZ2FrSUFOd0lBSUFJb0FnQWhMU0FiSUMwMkFnQkJBQ0FCSUJzZ0tDQW1FRFloS2lBcVFRQklJU3NnS3dSQVFYOGhCQVVnQUVITUFHb2hMQ0FzS0FJQUlRY2dCMEYvU2lFSUlBZ0VRQ0FBRURjaENTQUpJU2NGUVFBaEp3c2dBQ2dDQUNFS0lBcEJJSEVoQ3lBQVFjb0FhaUVNSUF3c0FBQWhEU0FOUVJoMFFSaDFRUUZJSVE0Z0RnUkFJQXBCWDNFaER5QUFJQTgyQWdBTElBQkJNR29oRUNBUUtBSUFJUkVnRVVFQVJpRVNJQklFUUNBQVFTeHFJUlFnRkNnQ0FDRVZJQlFnS1RZQ0FDQUFRUnhxSVJZZ0ZpQXBOZ0lBSUFCQkZHb2hGeUFYSUNrMkFnQWdFRUhRQURZQ0FDQXBRZEFBYWlFWUlBQkJFR29oR1NBWklCZzJBZ0FnQUNBQklCc2dLQ0FtRURZaEdpQVZRUUJHSVJ3Z0hBUkFJQm9oQlFVZ0FFRWthaUVkSUIwb0FnQWhIaUFBUVFCQkFDQWVRUWR4UVFocUVRQUFHaUFYS0FJQUlSOGdIMEVBUmlFZ0lDQUVmMEYvQlNBYUN5RURJQlFnRlRZQ0FDQVFRUUEyQWdBZ0dVRUFOZ0lBSUJaQkFEWUNBQ0FYUVFBMkFnQWdBeUVGQ3dVZ0FDQUJJQnNnS0NBbUVEWWhFeUFUSVFVTElBQW9BZ0FoSVNBaFFTQnhJU0lnSWtFQVJpRWpJQ01FZnlBRkJVRi9DeUVHSUNFZ0MzSWhKQ0FBSUNRMkFnQWdKMEVBUmlFbElDVkZCRUFnQUJBNEN5QUdJUVFMSUM4a0RTQUVEd3ZvS2dQbkFuOE9mZ0Y4SXcwaDZ3SWpEVUhBQUdva0RTTU5JdzVPQkVCQndBQVFBd3NnNndKQkVHb2hrZ0lnNndJaG5RSWc2d0pCR0dvaHFBSWc2d0pCQ0dvaHN3SWc2d0pCRkdvaHZRSWdrZ0lnQVRZQ0FDQUFRUUJISVU4Z3FBSkJLR29oV2lCYUlXUWdxQUpCSjJvaGJ5Q3pBa0VFYWlGNlFRQWhGa0VBSVJkQkFDRWhJQUVodlFFRFFBSkFJQmRCZjBvaGhBRUNRQ0NFQVFSQVFmLy8vLzhISUJkcklZNEJJQllnamdGS0laY0JJSmNCQkVBUU1TR2hBU0NoQVVITEFEWUNBRUYvSVNvTUFnVWdGaUFYYWlHcUFTQ3FBU0VxREFJTEFBVWdGeUVxQ3dzZ3ZRRXNBQUFoc3dFZ3N3RkJHSFJCR0hWQkFFWWh4d0VneHdFRVFFSFdBQ0hxQWd3QkJTQ3pBU0hTQVNDOUFTSG5BUXNEUUFKQUFrQUNRQUpBQWtBZzBnRkJHSFJCR0hWQkFHc09KZ0VDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBQWdzQ1FDRG5BU0VaSU9jQklmc0JRUWtoNmdJTUJBd0RBQXNBQ3dKQUlPY0JJUmdnNXdFaGh3SU1Bd3dDQUFzQUN3RUxJT2NCUVFGcUlkMEJJSklDSU4wQk5nSUFJTjBCTEFBQUlVb2dTaUhTQVNEZEFTSG5BUXdCQ3dzQ1FDRHFBa0VKUmdSQUEwQUNRRUVBSWVvQ0lQc0JRUUZxSWZJQklQSUJMQUFBSWZ3QklQd0JRUmgwUVJoMVFTVkdJZjBCSVAwQlJRUkFJQmtoR0NEN0FTR0hBZ3dFQ3lBWlFRRnFJZjRCSVBzQlFRSnFJZjhCSUpJQ0lQOEJOZ0lBSVA4QkxBQUFJWUFDSUlBQ1FSaDBRUmgxUVNWR0lZRUNJSUVDQkVBZy9nRWhHU0QvQVNIN0FVRUpJZW9DQlNEK0FTRVlJUDhCSVljQ0RBRUxEQUVMQ3dzTElCZ2hnZ0lndlFFaGd3SWdnZ0lnZ3dKcklZUUNJRThFUUNBQUlMMEJJSVFDRURrTElJUUNRUUJHSVlVQ0lJVUNSUVJBSUNFaElpQ0VBaUVXSUNvaEZ5Q0hBaUc5QVNBaUlTRU1BZ3NnaHdKQkFXb2hoZ0lnaGdJc0FBQWhpQUlnaUFKQkdIUkJHSFVoaVFJZ2lRSkJVR29oM3dJZzN3SkJDa2toM0FJZzNBSUVRQ0NIQWtFQ2FpR0tBaUNLQWl3QUFDR0xBaUNMQWtFWWRFRVlkVUVrUmlHTUFpQ0hBa0VEYWlHTkFpQ01BZ1IvSUkwQ0JTQ0dBZ3NoUkNDTUFnUi9RUUVGSUNFTElRa2dqQUlFZnlEZkFnVkJmd3NoNEFJZzRBSWhHeUFKSVRBZ1JDSG5BZ1ZCZnlFYklDRWhNQ0NHQWlIbkFnc2drZ0lnNXdJMkFnQWc1d0lzQUFBaGpnSWdqZ0pCR0hSQkdIVWhqd0lnandKQllHb2hrQUlna0FKQkgwc2hrUUpCQVNDUUFuUWhrd0lna3dKQmlkRUVjU0dVQWlDVUFrRUFSaUdWQWlDUkFpQ1ZBbkloelFJZ3pRSUVRRUVBSVI4Z2pnSWhTU0RuQWlHbkFnVkJBQ0VnSUk0Q0laY0NJT2NDSVp3Q0EwQUNRQ0NYQWtFWWRFRVlkU0dXQWlDV0FrRmdhaUdZQWtFQklKZ0NkQ0daQWlDWkFpQWdjaUdhQWlDY0FrRUJhaUdiQWlDU0FpQ2JBallDQUNDYkFpd0FBQ0dlQWlDZUFrRVlkRUVZZFNHZkFpQ2ZBa0ZnYWlHZ0FpQ2dBa0VmU3lHaEFrRUJJS0FDZENHaUFpQ2lBa0dKMFFSeElhTUNJS01DUVFCR0lhUUNJS0VDSUtRQ2NpSE1BaURNQWdSQUlKb0NJUjhnbmdJaFNTQ2JBaUduQWd3QkJTQ2FBaUVnSUo0Q0laY0NJSnNDSVp3Q0N3d0JDd3NMSUVsQkdIUkJHSFZCS2tZaHBRSWdwUUlFUUNDbkFrRUJhaUdtQWlDbUFpd0FBQ0dwQWlDcEFrRVlkRUVZZFNHcUFpQ3FBa0ZRYWlIaUFpRGlBa0VLU1NIZUFpRGVBZ1JBSUtjQ1FRSnFJYXNDSUtzQ0xBQUFJYXdDSUt3Q1FSaDBRUmgxUVNSR0lhMENJSzBDQkVBZ0JDRGlBa0VDZEdvaHJnSWdyZ0pCQ2pZQ0FDQ21BaXdBQUNHdkFpQ3ZBa0VZZEVFWWRTR3dBaUN3QWtGUWFpR3hBaUFESUxFQ1FRTjBhaUd5QWlDeUFpa0RBQ0g1QWlENUFxY2h0QUlncHdKQkEyb2h0UUlndEFJaEhrRUJJVHdndFFJaDZBSUZRUlloNmdJTEJVRVdJZW9DQ3lEcUFrRVdSZ1JBUVFBaDZnSWdNRUVBUmlHMkFpQzJBa1VFUUVGL0lRd01Bd3NnVHdSQUlBSW9BZ0FoeUFJZ3lBSWh0d0pCQUVFRWFpSFhBaURYQWlIV0FpRFdBa0VCYXlIT0FpQzNBaURPQW1vaHVBSkJBRUVFYWlIYkFpRGJBaUhhQWlEYUFrRUJheUhaQWlEWkFrRi9jeUhZQWlDNEFpRFlBbkVodVFJZ3VRSWh1Z0lndWdJb0FnQWh1d0lndWdKQkJHb2h5Z0lnQWlES0FqWUNBQ0M3QWlFZVFRQWhQQ0NtQWlIb0FnVkJBQ0VlUVFBaFBDQ21BaUhvQWdzTElKSUNJT2dDTmdJQUlCNUJBRWdodkFJZ0gwR0F3QUJ5SWI0Q1FRQWdIbXNodndJZ3ZBSUVmeUMrQWdVZ0h3c2hDQ0M4QWdSL0lMOENCU0FlQ3lFSElBY2hMU0FJSVM0Z1BDRkNJT2dDSWNNQ0JTQ1NBaEE2SWNBQ0lNQUNRUUJJSWNFQ0lNRUNCRUJCZnlFTURBSUxJSklDS0FJQUlVc2d3QUloTFNBZklTNGdNQ0ZDSUVzaHd3SUxJTU1DTEFBQUljSUNJTUlDUVJoMFFSaDFRUzVHSWNRQ0FrQWd4QUlFUUNEREFrRUJhaUhGQWlERkFpd0FBQ0hHQWlER0FrRVlkRUVZZFVFcVJpSEhBaURIQWtVRVFDRERBa0VCYWlGbElKSUNJR1UyQWdBZ2tnSVFPaUZtSUpJQ0tBSUFJVTBnWmlFY0lFMGhUQXdDQ3lEREFrRUNhaUZRSUZBc0FBQWhVU0JSUVJoMFFSaDFJVklnVWtGUWFpSGhBaURoQWtFS1NTSGRBaURkQWdSQUlNTUNRUU5xSVZNZ1V5d0FBQ0ZVSUZSQkdIUkJHSFZCSkVZaFZTQlZCRUFnQkNEaEFrRUNkR29oVmlCV1FRbzJBZ0FnVUN3QUFDRlhJRmRCR0hSQkdIVWhXQ0JZUVZCcUlWa2dBeUJaUVFOMGFpRmJJRnNwQXdBaDdRSWc3UUtuSVZ3Z3d3SkJCR29oWFNDU0FpQmROZ0lBSUZ3aEhDQmRJVXdNQXdzTElFSkJBRVloWGlCZVJRUkFRWDhoREF3REN5QlBCRUFnQWlnQ0FDSEpBaURKQWlGZlFRQkJCR29oMFFJZzBRSWgwQUlnMEFKQkFXc2h6d0lnWHlEUEFtb2hZRUVBUVFScUlkVUNJTlVDSWRRQ0lOUUNRUUZySWRNQ0lOTUNRWDl6SWRJQ0lHQWcwZ0p4SVdFZ1lTRmlJR0lvQWdBaFl5QmlRUVJxSWNzQ0lBSWd5d0kyQWdBZ1l5SDVBUVZCQUNINUFRc2drZ0lnVURZQ0FDRDVBU0VjSUZBaFRBVkJmeUVjSU1NQ0lVd0xDMEVBSVJvZ1RDRm9BMEFDUUNCb0xBQUFJV2NnWjBFWWRFRVlkU0ZwSUdsQnYzOXFJV29nYWtFNVN5RnJJR3NFUUVGL0lRd01Bd3NnYUVFQmFpRnNJSklDSUd3MkFnQWdhQ3dBQUNGdElHMUJHSFJCR0hVaGJpQnVRYjkvYWlGd1FjSWpJQnBCT214cUlIQnFJWEVnY1N3QUFDRnlJSEpCL3dGeElYTWdjMEYvYWlGMElIUkJDRWtoZFNCMUJFQWdjeUVhSUd3aGFBVU1BUXNNQVFzTElISkJHSFJCR0hWQkFFWWhkaUIyQkVCQmZ5RU1EQUVMSUhKQkdIUkJHSFZCRTBZaGR5QWJRWDlLSVhnQ1FDQjNCRUFnZUFSQVFYOGhEQXdEQlVFd0llb0NDd1VnZUFSQUlBUWdHMEVDZEdvaGVTQjVJSE0yQWdBZ0F5QWJRUU4wYWlGN0lIc3BBd0FoN2dJZ25RSWc3Z0kzQXdCQk1DSHFBZ3dDQ3lCUFJRUkFRUUFoREF3REN5Q2RBaUJ6SUFJUU93c0xJT29DUVRCR0JFQkJBQ0hxQWlCUFJRUkFRUUFoRmlBcUlSY2dRaUVoSUd3aHZRRU1Bd3NMSUdnc0FBQWhmQ0I4UVJoMFFSaDFJWDBnR2tFQVJ5RitJSDFCRDNFaGZ5Qi9RUU5HSVlBQklINGdnQUZ4SWVRQ0lIMUJYM0VoZ1FFZzVBSUVmeUNCQVFVZ2ZRc2hFU0F1UVlEQUFIRWhnZ0VnZ2dGQkFFWWhnd0VnTGtILy8zdHhJWVVCSUlNQkJIOGdMZ1VnaFFFTElTOENRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FnRVVIQkFHc09PQTBWQ3hVUUR3NFZGUlVWRlJVVkZSVVZGUXdWRlJVVkFoVVZGUlVWRlJVVkVSVUlCaFFURWhVRkZSVVZDUUFFQVJVVkNoVUhGUlVERlFzQ1FDQWFRZjhCY1NIcEFnSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FDRHBBa0VZZEVFWWRVRUFhdzRJQUFFQ0F3UUhCUVlIQ3dKQUlKMENLQUlBSVlZQklJWUJJQ28yQWdCQkFDRVdJQ29oRnlCQ0lTRWdiQ0c5QVF3aURBZ0FDd0FMQWtBZ25RSW9BZ0FoaHdFZ2h3RWdLallDQUVFQUlSWWdLaUVYSUVJaElTQnNJYjBCRENFTUJ3QUxBQXNDUUNBcXJDSHZBaUNkQWlnQ0FDR0lBU0NJQVNEdkFqY0RBRUVBSVJZZ0tpRVhJRUloSVNCc0liMEJEQ0FNQmdBTEFBc0NRQ0FxUWYvL0EzRWhpUUVnblFJb0FnQWhpZ0VnaWdFZ2lRRTdBUUJCQUNFV0lDb2hGeUJDSVNFZ2JDRzlBUXdmREFVQUN3QUxBa0FnS2tIL0FYRWhpd0VnblFJb0FnQWhqQUVnakFFZ2l3RTZBQUJCQUNFV0lDb2hGeUJDSVNFZ2JDRzlBUXdlREFRQUN3QUxBa0FnblFJb0FnQWhqUUVnalFFZ0tqWUNBRUVBSVJZZ0tpRVhJRUloSVNCc0liMEJEQjBNQXdBTEFBc0NRQ0FxckNId0FpQ2RBaWdDQUNHUEFTQ1BBU0R3QWpjREFFRUFJUllnS2lFWElFSWhJU0JzSWIwQkRCd01BZ0FMQUFzQ1FFRUFJUllnS2lFWElFSWhJU0JzSWIwQkRCc0FDd0FMREJZQUN3QUxBa0FnSEVFSVN5R1FBU0NRQVFSL0lCd0ZRUWdMSVpFQklDOUJDSEloa2dGQitBQWhKaUNSQVNFc0lKSUJJVUZCUENIcUFnd1ZBQXNBQ3dFTEFrQWdFU0VtSUJ3aExDQXZJVUZCUENIcUFnd1RBQXNBQ3dKQUlKMENLUU1BSWZJQ0lQSUNJRm9RUFNHYkFTQXZRUWh4SVp3QklKd0JRUUJHSVowQklKc0JJWjRCSUdRZ25nRnJJWjhCSUJ3Z253RktJYUFCSUo4QlFRRnFJYUlCSUowQklLQUJjaUdqQVNDakFRUi9JQndGSUtJQkN5RWRJSnNCSVExQkFDRWxRWkluSVNjZ0hTRTRJQzhoUmlEeUFpSDJBa0hDQUNIcUFnd1NBQXNBQ3dFTEFrQWduUUlwQXdBaDh3SWc4d0pDQUZNaHBBRWdwQUVFUUVJQUlQTUNmU0gwQWlDZEFpRDBBamNEQUVFQklSQkJraWNoRWlEMEFpSDFBa0hCQUNIcUFnd1NCU0F2UVlBUWNTR2xBU0NsQVVFQVJpR21BU0F2UVFGeElhY0JJS2NCUVFCR0lhZ0JJS2dCQkg5QmtpY0ZRWlFuQ3lFRklLWUJCSDhnQlFWQmt5Y0xJUVlnTDBHQkVIRWhxUUVncVFGQkFFY2hxd0VncXdGQkFYRWhQU0E5SVJBZ0JpRVNJUE1DSWZVQ1FjRUFJZW9DREJJTEFBd1FBQXNBQ3dKQUlKMENLUU1BSWV3Q1FRQWhFRUdTSnlFU0lPd0NJZlVDUWNFQUllb0NEQThBQ3dBTEFrQWduUUlwQXdBaDl3SWc5d0tuUWY4QmNTRzRBU0J2SUxnQk9nQUFJRzhoTVVFQUlUSkJraWNoTXlCYUlUZEJBU0ZISUlVQklVZ01EZ0FMQUFzQ1FCQXhJYmtCSUxrQktBSUFJYm9CSUxvQkVEOGh1d0VndXdFaEkwSEdBQ0hxQWd3TkFBc0FDd0pBSUowQ0tBSUFJYndCSUx3QlFRQkhJYjRCSUw0QkJIOGd2QUVGUVp3bkN5Ry9BU0MvQVNFalFjWUFJZW9DREF3QUN3QUxBa0FnblFJcEF3QWgrQUlnK0FLbkljWUJJTE1DSU1ZQk5nSUFJSHBCQURZQ0FDQ2RBaUN6QWpZQ0FFRi9JVVVnc3dJaCtnRkJ5Z0FoNmdJTUN3QUxBQXNDUUNDZEFpZ0NBQ0ZPSUJ4QkFFWWh5QUVneUFFRVFDQUFRU0FnTFVFQUlDOFFRVUVBSVJSQjB3QWg2Z0lGSUJ3aFJTQk9JZm9CUWNvQUllb0NDd3dLQUFzQUN3RUxBUXNCQ3dFTEFRc0JDd0VMQWtBZ25RSXJBd0FoK2dJZ0FDRDZBaUF0SUJ3Z0x5QVJFRU1oNEFFZzRBRWhGaUFxSVJjZ1FpRWhJR3dodlFFTUJRd0NBQXNBQ3dKQUlMMEJJVEZCQUNFeVFaSW5JVE1nV2lFM0lCd2hSeUF2SVVnTEN3c0NRQ0RxQWtFOFJnUkFRUUFoNmdJZ25RSXBBd0FoOFFJZ0prRWdjU0dUQVNEeEFpQmFJSk1CRUR3aGxBRWc4UUpDQUZFaGxRRWdRVUVJY1NHV0FTQ1dBVUVBUmlHWUFTQ1lBU0NWQVhJaDVRSWdKa0VFZFNHWkFVR1NKeUNaQVdvaG1nRWc1UUlFZjBHU0p3VWdtZ0VMSVQ0ZzVRSUVmMEVBQlVFQ0N5RS9JSlFCSVEwZ1B5RWxJRDRoSnlBc0lUZ2dRU0ZHSVBFQ0lmWUNRY0lBSWVvQ0JTRHFBa0hCQUVZRVFFRUFJZW9DSVBVQ0lGb1FQaUdzQVNDc0FTRU5JQkFoSlNBU0lTY2dIQ0U0SUM4aFJpRDFBaUgyQWtIQ0FDSHFBZ1VnNmdKQnhnQkdCRUJCQUNIcUFpQWpRUUFnSEJCQUljQUJJTUFCUVFCR0ljRUJJTUFCSWNJQklDTWh3d0Vnd2dFZ3d3RnJJY1FCSUNNZ0hHb2h4UUVnd1FFRWZ5QWNCU0RFQVFzaFFDREJBUVIvSU1VQkJTREFBUXNoS3lBaklURkJBQ0V5UVpJbklUTWdLeUUzSUVBaFJ5Q0ZBU0ZJQlNEcUFrSEtBRVlFUUVFQUllb0NJUG9CSVE5QkFDRVZRUUFoS1FOQUFrQWdEeWdDQUNISkFTREpBVUVBUmlIS0FTREtBUVJBSUJVaEV5QXBJVFlNQVFzZ3ZRSWd5UUVRUWlITEFTRExBVUVBU0NITUFTQkZJQlZySWMwQklNc0JJTTBCU3lIT0FTRE1BU0RPQVhJaDVnSWc1Z0lFUUNBVklSTWd5d0VoTmd3QkN5QVBRUVJxSWM4QklNc0JJQlZxSWRBQklFVWcwQUZMSWRFQklORUJCRUFnendFaER5RFFBU0VWSU1zQklTa0ZJTkFCSVJNZ3l3RWhOZ3dCQ3d3QkN3c2dOa0VBU0NIVEFTRFRBUVJBUVg4aERBd0dDeUFBUVNBZ0xTQVRJQzhRUVNBVFFRQkdJZFFCSU5RQkJFQkJBQ0VVUWRNQUllb0NCU0Q2QVNFa1FRQWhLQU5BQWtBZ0pDZ0NBQ0hWQVNEVkFVRUFSaUhXQVNEV0FRUkFJQk1oRkVIVEFDSHFBZ3dJQ3lDOUFpRFZBUkJDSWRjQklOY0JJQ2hxSWRnQklOZ0JJQk5LSWRrQklOa0JCRUFnRXlFVVFkTUFJZW9DREFnTElDUkJCR29oMmdFZ0FDQzlBaURYQVJBNUlOZ0JJQk5KSWRzQklOc0JCRUFnMmdFaEpDRFlBU0VvQlNBVElSUkIwd0FoNmdJTUFRc01BUXNMQ3dzTEN3c0xJT29DUWNJQVJnUkFRUUFoNmdJZ09FRi9TaUd0QVNCR1FmLy9lM0VocmdFZ3JRRUVmeUN1QVFVZ1Jnc2hDaUQyQWtJQVVpR3ZBU0E0UVFCSEliQUJJTEFCSUs4QmNpSGpBaUFOSWJFQklHUWdzUUZySWJJQklLOEJRUUZ6SWJRQklMUUJRUUZ4SWJVQklMSUJJTFVCYWlHMkFTQTRJTFlCU2lHM0FTQzNBUVIvSURnRklMWUJDeUU1SU9NQ0JIOGdPUVVnT0FzaE9pRGpBZ1IvSUEwRklGb0xJUTRnRGlFeElDVWhNaUFuSVRNZ1dpRTNJRG9oUnlBS0lVZ0ZJT29DUWRNQVJnUkFRUUFoNmdJZ0wwR0F3QUJ6SWR3QklBQkJJQ0F0SUJRZzNBRVFRU0F0SUJSS0lkNEJJTjRCQkg4Z0xRVWdGQXNoM3dFZzN3RWhGaUFxSVJjZ1FpRWhJR3dodlFFTUF3c0xJRGNoNFFFZ01TSGlBU0RoQVNEaUFXc2g0d0VnUnlEakFVZ2g1QUVnNUFFRWZ5RGpBUVVnUndzaEN5QUxJREpxSWVVQklDMGc1UUZJSWVZQklPWUJCSDhnNVFFRklDMExJVHNnQUVFZ0lEc2c1UUVnU0JCQklBQWdNeUF5RURrZ1NFR0FnQVJ6SWVnQklBQkJNQ0E3SU9VQklPZ0JFRUVnQUVFd0lBc2c0d0ZCQUJCQklBQWdNU0RqQVJBNUlFaEJnTUFBY3lIcEFTQUFRU0FnT3lEbEFTRHBBUkJCSURzaEZpQXFJUmNnUWlFaElHd2h2UUVNQVFzTEFrQWc2Z0pCMWdCR0JFQWdBRUVBUmlIcUFTRHFBUVJBSUNGQkFFWWg2d0VnNndFRVFFRUFJUXdGUVFFaE5RTkFBa0FnQkNBMVFRSjBhaUhzQVNEc0FTZ0NBQ0h0QVNEdEFVRUFSaUh1QVNEdUFRUkFJRFVoTkF3QkN5QURJRFZCQTNScUlmQUJJUEFCSU8wQklBSVFPeUExUVFGcUlmRUJJRFZCQ1VnaDh3RWc4d0VFUUNEeEFTRTFCU0R4QVNFMERBRUxEQUVMQ3lBMFFRcElJZThCSU84QkJFQWdOQ0ZEQTBBQ1FDQUVJRU5CQW5ScUlmWUJJUFlCS0FJQUlmY0JJUGNCUVFCR0lmZ0JJUGdCUlFSQVFYOGhEQXdIQ3lCRFFRRnFJZlFCSUVOQkNVZ2g5UUVnOVFFRVFDRDBBU0ZEQlVFQklRd01BUXNNQVFzTEJVRUJJUXdMQ3dVZ0tpRU1Dd3NMSU9zQ0pBMGdEQThMQ3dFQ2Z5TU5JUUpCQUE4TENRRUNmeU1OSVFJUEN5d0JCWDhqRFNFSElBQW9BZ0FoQXlBRFFTQnhJUVFnQkVFQVJpRUZJQVVFUUNBQklBSWdBQkJRR2dzUEM2SUJBUkovSXcwaEVpQUFLQUlBSVFNZ0F5d0FBQ0VFSUFSQkdIUkJHSFVoQlNBRlFWQnFJUThnRDBFS1NTRU5JQTBFUUVFQUlRSWdBeUVKSUE4aEVBTkFBa0FnQWtFS2JDRUdJQkFnQm1vaEJ5QUpRUUZxSVFnZ0FDQUlOZ0lBSUFnc0FBQWhDaUFLUVJoMFFSaDFJUXNnQzBGUWFpRU9JQTVCQ2traERDQU1CRUFnQnlFQ0lBZ2hDU0FPSVJBRklBY2hBUXdCQ3d3QkN3c0ZRUUFoQVFzZ0FROExtUW9Ea0FGL0IzNENmQ01OSVpJQklBRkJGRXNoRmdKQUlCWkZCRUFDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQWdBVUVKYXc0S0FBRUNBd1FGQmdjSUNRb0xBa0FnQWlnQ0FDRTNJRGNoSDBFQVFRUnFJVTBnVFNGTUlFeEJBV3NoU3lBZklFdHFJU2xCQUVFRWFpRlJJRkVoVUNCUVFRRnJJVThnVDBGL2N5Rk9JQ2tnVG5FaE1pQXlJVFFnTkNnQ0FDRTFJRFJCQkdvaFFTQUNJRUUyQWdBZ0FDQTFOZ0lBREEwTUN3QUxBQXNDUUNBQ0tBSUFJVHNnT3lFMlFRQkJCR29oVkNCVUlWTWdVMEVCYXlGU0lEWWdVbW9oQlVFQVFRUnFJVmdnV0NGWElGZEJBV3NoVmlCV1FYOXpJVlVnQlNCVmNTRUdJQVloQnlBSEtBSUFJUWdnQjBFRWFpRklJQUlnU0RZQ0FDQUlyQ0dUQVNBQUlKTUJOd01BREF3TUNnQUxBQXNDUUNBQ0tBSUFJVDhnUHlFSlFRQkJCR29oV3lCYklWb2dXa0VCYXlGWklBa2dXV29oQ2tFQVFRUnFJVjhnWHlGZUlGNUJBV3NoWFNCZFFYOXpJVndnQ2lCY2NTRUxJQXNoRENBTUtBSUFJUTBnREVFRWFpRkpJQUlnU1RZQ0FDQU5yU0dVQVNBQUlKUUJOd01BREFzTUNRQUxBQXNDUUNBQ0tBSUFJVUFnUUNFT1FRQkJDR29oWWlCaUlXRWdZVUVCYXlGZ0lBNGdZR29oRDBFQVFRaHFJV1lnWmlGbElHVkJBV3NoWkNCa1FYOXpJV01nRHlCamNTRVFJQkFoRVNBUktRTUFJWlVCSUJGQkNHb2hTaUFDSUVvMkFnQWdBQ0NWQVRjREFBd0tEQWdBQ3dBTEFrQWdBaWdDQUNFNElEZ2hFa0VBUVFScUlXa2dhU0ZvSUdoQkFXc2haeUFTSUdkcUlSTkJBRUVFYWlGdElHMGhiQ0JzUVFGcklXc2dhMEYvY3lGcUlCTWdhbkVoRkNBVUlSVWdGU2dDQUNFWElCVkJCR29oUWlBQ0lFSTJBZ0FnRjBILy93TnhJUmdnR0VFUWRFRVFkYXdobGdFZ0FDQ1dBVGNEQUF3SkRBY0FDd0FMQWtBZ0FpZ0NBQ0U1SURraEdVRUFRUVJxSVhBZ2NDRnZJRzlCQVdzaGJpQVpJRzVxSVJwQkFFRUVhaUYwSUhRaGN5QnpRUUZySVhJZ2NrRi9jeUZ4SUJvZ2NYRWhHeUFiSVJ3Z0hDZ0NBQ0VkSUJ4QkJHb2hReUFDSUVNMkFnQWdIVUgvL3dOeElRUWdCSzBobHdFZ0FDQ1hBVGNEQUF3SURBWUFDd0FMQWtBZ0FpZ0NBQ0U2SURvaEhrRUFRUVJxSVhjZ2R5RjJJSFpCQVdzaGRTQWVJSFZxSVNCQkFFRUVhaUY3SUhzaGVpQjZRUUZySVhrZ2VVRi9jeUY0SUNBZ2VIRWhJU0FoSVNJZ0lpZ0NBQ0VqSUNKQkJHb2hSQ0FDSUVRMkFnQWdJMEgvQVhFaEpDQWtRUmgwUVJoMXJDR1lBU0FBSUpnQk53TUFEQWNNQlFBTEFBc0NRQ0FDS0FJQUlUd2dQQ0VsUVFCQkJHb2hmaUIrSVgwZ2ZVRUJheUY4SUNVZ2ZHb2hKa0VBUVFScUlZSUJJSUlCSVlFQklJRUJRUUZySVlBQklJQUJRWDl6SVg4Z0ppQi9jU0VuSUNjaEtDQW9LQUlBSVNvZ0tFRUVhaUZGSUFJZ1JUWUNBQ0FxUWY4QmNTRURJQU90SVprQklBQWdtUUUzQXdBTUJnd0VBQXNBQ3dKQUlBSW9BZ0FoUFNBOUlTdEJBRUVJYWlHRkFTQ0ZBU0dFQVNDRUFVRUJheUdEQVNBcklJTUJhaUVzUVFCQkNHb2hpUUVnaVFFaGlBRWdpQUZCQVdzaGh3RWdod0ZCZjNNaGhnRWdMQ0NHQVhFaExTQXRJUzRnTGlzREFDR2FBU0F1UVFocUlVWWdBaUJHTmdJQUlBQWdtZ0U1QXdBTUJRd0RBQXNBQ3dKQUlBSW9BZ0FoUGlBK0lTOUJBRUVJYWlHTUFTQ01BU0dMQVNDTEFVRUJheUdLQVNBdklJb0JhaUV3UVFCQkNHb2hrQUVna0FFaGp3RWdqd0ZCQVdzaGpnRWdqZ0ZCZjNNaGpRRWdNQ0NOQVhFaE1TQXhJVE1nTXlzREFDR2JBU0F6UVFocUlVY2dBaUJITmdJQUlBQWdtd0U1QXdBTUJBd0NBQXNBQ3d3Q0N3c0xEd3VRQVFJT2Z3SitJdzBoRUNBQVFnQlJJUWdnQ0FSQUlBRWhBd1VnQVNFRUlBQWhFUU5BQWtBZ0VhY2hDU0FKUVE5eElRcEJ4aWNnQ21vaEN5QUxMQUFBSVF3Z0RFSC9BWEVoRFNBTklBSnlJUTRnRGtIL0FYRWhCU0FFUVg5cUlRWWdCaUFGT2dBQUlCRkNCSWdoRWlBU1FnQlJJUWNnQndSQUlBWWhBd3dCQlNBR0lRUWdFaUVSQ3d3QkN3c0xJQU1QQzNVQ0NuOENmaU1OSVFzZ0FFSUFVU0VFSUFRRVFDQUJJUUlGSUFBaERDQUJJUU1EUUFKQUlBeW5RZjhCY1NFRklBVkJCM0VoQmlBR1FUQnlJUWNnQTBGL2FpRUlJQWdnQnpvQUFDQU1RZ09JSVEwZ0RVSUFVU0VKSUFrRVFDQUlJUUlNQVFVZ0RTRU1JQWdoQXdzTUFRc0xDeUFDRHd2OUFRSVdmd04rSXcwaEZ5QUFRdi8vLy84UFZpRU9JQUNuSVJRZ0RnUkFJQUFoR0NBQklRVURRQUpBSUJoQ0NvSWhHU0FacDBIL0FYRWhEeUFQUVRCeUlSQWdCVUYvYWlFUklCRWdFRG9BQUNBWVFncUFJUm9nR0VMLy8vLy9ud0ZXSVJJZ0VnUkFJQm9oR0NBUklRVUZEQUVMREFFTEN5QWFweUVWSUJVaEFpQVJJUVFGSUJRaEFpQUJJUVFMSUFKQkFFWWhFeUFUQkVBZ0JDRUdCU0FDSVFNZ0JDRUhBMEFDUUNBRFFRcHdRWDl4SVFnZ0NFRXdjaUVKSUFsQi93RnhJUW9nQjBGL2FpRUxJQXNnQ2pvQUFDQURRUXB1UVg5eElRd2dBMEVLU1NFTklBMEVRQ0FMSVFZTUFRVWdEQ0VESUFzaEJ3c01BUXNMQ3lBR0R3c21BUVovSXcwaEJoQktJUUVnQVVHOEFXb2hBaUFDS0FJQUlRTWdBQ0FERUVzaEJDQUVEd3VIQlFFNGZ5TU5JVG9nQVVIL0FYRWhKaUFBSVRFZ01VRURjU0V5SURKQkFFY2hNeUFDUVFCSElUUWdOQ0F6Y1NFNEFrQWdPQVJBSUFGQi93RnhJVFVnQUNFR0lBSWhDUU5BQWtBZ0Jpd0FBQ0UySURaQkdIUkJHSFVnTlVFWWRFRVlkVVloRWlBU0JFQWdCaUVGSUFraENFRUdJVGtNQkFzZ0JrRUJhaUVUSUFsQmYyb2hGQ0FUSVJVZ0ZVRURjU0VXSUJaQkFFY2hGeUFVUVFCSElSZ2dHQ0FYY1NFM0lEY0VRQ0FUSVFZZ0ZDRUpCU0FUSVFRZ0ZDRUhJQmdoRVVFRklUa01BUXNNQVFzTEJTQUFJUVFnQWlFSElEUWhFVUVGSVRrTEN5QTVRUVZHQkVBZ0VRUkFJQVFoQlNBSElRaEJCaUU1QlNBRUlRNUJBQ0VRQ3dzQ1FDQTVRUVpHQkVBZ0JTd0FBQ0VaSUFGQi93RnhJUm9nR1VFWWRFRVlkU0FhUVJoMFFSaDFSaUViSUJzRVFDQUZJUTRnQ0NFUUJTQW1RWUdDaEFoc0lSd2dDRUVEU3lFZEFrQWdIUVJBSUFVaENpQUlJUXdEUUFKQUlBb29BZ0FoSGlBZUlCeHpJUjhnSDBILy9mdDNhaUVnSUI5QmdJR0NoSGh4SVNFZ0lVR0FnWUtFZUhNaElpQWlJQ0J4SVNNZ0kwRUFSaUVrSUNSRkJFQU1BUXNnQ2tFRWFpRWxJQXhCZkdvaEp5QW5RUU5MSVNnZ0tBUkFJQ1VoQ2lBbklRd0ZJQ1VoQXlBbklRdEJDeUU1REFRTERBRUxDeUFLSVEwZ0RDRVBCU0FGSVFNZ0NDRUxRUXNoT1FzTElEbEJDMFlFUUNBTFFRQkdJU2tnS1FSQUlBTWhEa0VBSVJBTUJBVWdBeUVOSUFzaER3c0xBMEFDUUNBTkxBQUFJU29nS2tFWWRFRVlkU0FhUVJoMFFSaDFSaUVySUNzRVFDQU5JUTRnRHlFUURBVUxJQTFCQVdvaExDQVBRWDlxSVMwZ0xVRUFSaUV1SUM0RVFDQXNJUTVCQUNFUURBRUZJQ3doRFNBdElROExEQUVMQ3dzTEN5QVFRUUJISVM4Z0x3Ui9JQTRGUVFBTElUQWdNQThMekFFQkVYOGpEU0VWSXcxQmdBSnFKQTBqRFNNT1RnUkFRWUFDRUFNTElCVWhEaUFFUVlEQUJIRWhEeUFQUVFCR0lSQWdBaUFEU2lFUklCRWdFSEVoRXlBVEJFQWdBaUFEYXlFU0lCSkJnQUpKSVFjZ0J3Ui9JQklGUVlBQ0N5RUlJQTRnQVNBSUVGNGFJQkpCL3dGTElRa2dDUVJBSUFJZ0Eyc2hDaUFTSVFZRFFBSkFJQUFnRGtHQUFoQTVJQVpCZ0g1cUlRc2dDMEgvQVVzaERDQU1CRUFnQ3lFR0JRd0JDd3dCQ3dzZ0NrSC9BWEVoRFNBTklRVUZJQkloQlFzZ0FDQU9JQVVRT1FzZ0ZTUU5Ed3NxQVFWL0l3MGhCaUFBUVFCR0lRTWdBd1JBUVFBaEFnVWdBQ0FCUVFBUVJ5RUVJQVFoQWdzZ0FnOEwzREFEMGdOL0QzNGhmQ01OSWRjREl3MUJzQVJxSkEwakRTTU9UZ1JBUWJBRUVBTUxJTmNEUVFocUlhVURJTmNESWE4RElOY0RRWXdFYWlHNkF5QzZBeUhDQXlEWEEwR0FCR29oYmlDdkEwRUFOZ0lBSUc1QkRHb2hlQ0FCRUVRaDJBTWcyQU5DQUZNaGhRRWdoUUVFUUNBQm1pSDRBeUQ0QXlIcUEwRUJJUnhCb3ljaEhRVWdCRUdBRUhFaG1BRWdtQUZCQUVZaG93RWdCRUVCY1NHdUFTQ3VBVUVBUmlHNUFTQzVBUVIvUWFRbkJVR3BKd3NoQmlDakFRUi9JQVlGUWFZbkN5RUhJQVJCZ1JCeEljUUJJTVFCUVFCSEljOEJJTThCUVFGeElVb2dBU0hxQXlCS0lSd2dCeUVkQ3lEcUF4QkVJZUFESU9BRFFvQ0FnSUNBZ0lENC93Q0RJZUVESU9FRFFvQ0FnSUNBZ0lENC93QlJJZTBCQWtBZzdRRUVRQ0FGUVNCeElmWUJJUFlCUVFCSElZRUNJSUVDQkg5QnRpY0ZRYm9uQ3lHTUFpRHFBeURxQTJKRUFBQUFBQUFBQUFCRUFBQUFBQUFBQUFCaWNpR1hBaUNCQWdSL1FiNG5CVUhDSndzaG9nSWdsd0lFZnlDaUFnVWdqQUlMSVJrZ0hFRURhaUd0QWlBRVFmLy9lM0VodHdJZ0FFRWdJQUlnclFJZ3R3SVFRU0FBSUIwZ0hCQTVJQUFnR1VFREVEa2dCRUdBd0FCekljSUNJQUJCSUNBQ0lLMENJTUlDRUVFZ3JRSWhiUVVnNmdNZ3J3TVFSU0g4QXlEOEEwUUFBQUFBQUFBQVFLSWgvUU1nL1FORUFBQUFBQUFBQUFCaUllQUNJT0FDQkVBZ3J3TW9BZ0FoNmdJZzZnSkJmMm9oOVFJZ3J3TWc5UUkyQWdBTElBVkJJSEloL3dJZy93SkI0UUJHSVlvRElJb0RCRUFnQlVFZ2NTR1ZBeUNWQTBFQVJpR1lBeUFkUVFscUlaa0RJSmdEQkg4Z0hRVWdtUU1MSVI0Z0hFRUNjaUdhQXlBRFFRdExJWnNEUVF3Z0Eyc2huQU1nbkFOQkFFWWhuUU1nbXdNZ25RTnlJWjREQWtBZ25nTUVRQ0Q5QXlIdUF3VkVBQUFBQUFBQUlFQWg2d01nbkFNaEtnTkFBa0FnS2tGL2FpR2ZBeURyQTBRQUFBQUFBQUF3UUtJaC9nTWdud05CQUVZaG9BTWdvQU1FUUF3QkJTRCtBeUhyQXlDZkF5RXFDd3dCQ3dzZ0hpd0FBQ0doQXlDaEEwRVlkRUVZZFVFdFJpR2lBeUNpQXdSQUlQMERtaUgvQXlEL0F5RCtBNkVoZ0FRZy9nTWdnQVNnSVlFRUlJRUVtaUdDQkNDQ0JDSHVBd3dDQlNEOUF5RCtBNkFoZ3dRZ2d3UWcvZ09oSVlRRUlJUUVJZTREREFJTEFBc0xJSzhES0FJQUlhTURJS01EUVFCSUlhUURRUUFnb3dOcklhWURJS1FEQkg4Z3BnTUZJS01EQ3lHbkF5Q25BNndoNWdNZzVnTWdlQkErSWFnRElLZ0RJSGhHSWFrRElLa0RCRUFnYmtFTGFpR3FBeUNxQTBFd09nQUFJS29ESVJvRklLZ0RJUm9MSUtNRFFSOTFJYXNESUtzRFFRSnhJYXdESUt3RFFTdHFJYTBESUswRFFmOEJjU0d1QXlBYVFYOXFJYkFESUxBRElLNERPZ0FBSUFWQkQyb2hzUU1nc1FOQi93RnhJYklESUJwQmZtb2hzd01nc3dNZ3NnTTZBQUFnQTBFQlNDRzBBeUFFUVFoeEliVURJTFVEUVFCR0liWURJTG9ESVI4ZzdnTWg3d01EUUFKQUlPOERxaUczQTBIR0p5QzNBMm9odUFNZ3VBTXNBQUFodVFNZ3VRTkIvd0Z4SWJzRElKVURJTHNEY2lHOEF5QzhBMEgvQVhFaHZRTWdIMEVCYWlHK0F5QWZJTDBET2dBQUlMY0R0eUdGQkNEdkF5Q0ZCS0VoaGdRZ2hnUkVBQUFBQUFBQU1FQ2lJWWNFSUw0REliOERJTDhESU1JRGF5SEFBeURBQTBFQlJpSEJBeURCQXdSQUlJY0VSQUFBQUFBQUFBQUFZU0hEQXlDMEF5RERBM0VoendNZ3RnTWd6d054SWM0RElNNERCRUFndmdNaExnVWdIMEVDYWlIRUF5QytBMEV1T2dBQUlNUURJUzRMQlNDK0F5RXVDeUNIQkVRQUFBQUFBQUFBQUdJaHhRTWd4UU1FUUNBdUlSOGdod1FoN3dNRkRBRUxEQUVMQ3lBRFFRQkdJY1lESUM0aGFDREdBd1JBUVJnaDFnTUZRWDRnd2dOckljY0RJTWNESUdocUljZ0RJTWdESUFOSUlja0RJTWtEQkVBZ0EwRUNhaUhLQXlCb0lNSURheUZuSUdjaFpTREtBeUZxQlVFWUlkWURDd3NnMWdOQkdFWUVRQ0JvSU1JRGF5SExBeURMQXlGbElNc0RJV29MSUhnaHpBTWdzd01oYnlETUF5QnZheUZ3SUhBZ21nTnFJWEVnY1NCcWFpRnlJQUJCSUNBQ0lISWdCQkJCSUFBZ0hpQ2FBeEE1SUFSQmdJQUVjeUZ6SUFCQk1DQUNJSElnY3hCQklBQWd1Z01nWlJBNUlHb2daV3NoZENBQVFUQWdkRUVBUVFBUVFTQUFJTE1ESUhBUU9TQUVRWURBQUhNaGRTQUFRU0FnQWlCeUlIVVFRU0J5SVcwTUFnc2dBMEVBU0NGMklIWUVmMEVHQlNBREN5RkxJT0FDQkVBZy9RTkVBQUFBQUFBQXNFR2lJZlFESUs4REtBSUFJWGNnZDBGa2FpRjVJSzhESUhrMkFnQWc5QU1oOEFNZ2VTRmlCU0N2QXlnQ0FDRmtJUDBESWZBRElHUWhZZ3NnWWtFQVNDRjZJS1VEUWFBQ2FpRjdJSG9FZnlDbEF3VWdld3NoVlNCVklSZ2c4QU1oOFFNRFFBSkFJUEVEcXlGOElCZ2dmRFlDQUNBWVFRUnFJWDBnZkxnaDlRTWc4UU1nOVFPaElmWURJUFlEUkFBQUFBQmx6YzFCb2lIM0F5RDNBMFFBQUFBQUFBQUFBR0loZmlCK0JFQWdmU0VZSVBjRElmRURCUXdCQ3d3QkN3c2dZa0VBU2lGL0lIOEVRQ0JWSVNZZ2ZTRXBJR0loZ1FFRFFBSkFJSUVCUVIxSUlZQUJJSUFCQkg4Z2dRRUZRUjBMSVlJQklDbEJmR29oRkNBVUlDWkpJWU1CSUlNQkJFQWdKaUU0QlNDQ0FhMGgyUU1nRkNFVlFRQWhGd05BQWtBZ0ZTZ0NBQ0dFQVNDRUFhMGgyZ01nMmdNZzJRT0dJZHNESUJldElkd0RJTnNESU53RGZDSGRBeURkQTBLQWxPdmNBNEloM2dNZzNnT25JWVlCSUJVZ2hnRTJBZ0FnM1FOQ2dKVHIzQU9BSWQ4RElOOERweUdIQVNBVlFYeHFJUk1nRXlBbVNTR0lBU0NJQVFSQURBRUZJQk1oRlNDSEFTRVhDd3dCQ3dzZ2h3RkJBRVloaVFFZ2lRRUVRQ0FtSVRnRklDWkJmR29oaWdFZ2lnRWdod0UyQWdBZ2lnRWhPQXNMSUNraE9RTkFBa0FnT1NBNFN5R0xBU0NMQVVVRVFBd0JDeUE1UVh4cUlZd0JJSXdCS0FJQUlZMEJJSTBCUVFCR0lZNEJJSTRCQkVBZ2pBRWhPUVVNQVFzTUFRc0xJSzhES0FJQUlZOEJJSThCSUlJQmF5R1FBU0N2QXlDUUFUWUNBQ0NRQVVFQVNpR1JBU0NSQVFSQUlEZ2hKaUE1SVNrZ2tBRWhnUUVGSURnaEpTQTVJU2dna0FFaFl3d0JDd3dCQ3dzRklGVWhKU0I5SVNnZ1lpRmpDeUJqUVFCSUlaSUJJSklCQkVBZ1MwRVphaUdUQVNDVEFVRUpiVUYvY1NHVUFTQ1VBVUVCYWlHVkFTRC9Ba0htQUVZaGxnRWdKU0ZBSUNnaFFpQmpJWmtCQTBBQ1FFRUFJSmtCYXlHWEFTQ1hBVUVKU0NHYUFTQ2FBUVIvSUpjQkJVRUpDeUdiQVNCQUlFSkpJWndCSUp3QkJFQkJBU0NiQVhRaG9BRWdvQUZCZjJvaG9RRkJnSlRyM0FNZ213RjJJYUlCUVFBaEVpQkFJU2NEUUFKQUlDY29BZ0FocEFFZ3BBRWdvUUZ4SWFVQklLUUJJSnNCZGlHbUFTQ21BU0FTYWlHbkFTQW5JS2NCTmdJQUlLVUJJS0lCYkNHb0FTQW5RUVJxSWFrQklLa0JJRUpKSWFvQklLb0JCRUFncUFFaEVpQ3BBU0VuQlF3QkN3d0JDd3NnUUNnQ0FDR3JBU0NyQVVFQVJpR3NBU0JBUVFScUlhMEJJS3dCQkg4Z3JRRUZJRUFMSVFnZ3FBRkJBRVlocndFZ3J3RUVRQ0FJSVFvZ1FpRkhCU0JDUVFScUliQUJJRUlncUFFMkFnQWdDQ0VLSUxBQklVY0xCU0JBS0FJQUlaMEJJSjBCUVFCR0laNEJJRUJCQkdvaG53RWduZ0VFZnlDZkFRVWdRQXNoQ1NBSklRb2dRaUZIQ3lDV0FRUi9JRlVGSUFvTEliRUJJRWNoc2dFZ3NRRWhzd0Vnc2dFZ3N3RnJJYlFCSUxRQlFRSjFJYlVCSUxVQklKVUJTaUcyQVNDeEFTQ1ZBVUVDZEdvaHR3RWd0Z0VFZnlDM0FRVWdSd3NoRENDdkF5Z0NBQ0c0QVNDNEFTQ2JBV29odWdFZ3J3TWd1Z0UyQWdBZ3VnRkJBRWdodXdFZ3V3RUVRQ0FLSVVBZ0RDRkNJTG9CSVprQkJTQUtJVDhnRENGQkRBRUxEQUVMQ3dVZ0pTRS9JQ2doUVFzZ1B5QkJTU0c4QVNCVkliMEJJTHdCQkVBZ1B5RytBU0M5QVNDK0FXc2h2d0VndndGQkFuVWh3QUVnd0FGQkNXd2h3UUVnUHlnQ0FDSENBU0RDQVVFS1NTSERBU0REQVFSQUlNRUJJUzBGSU1FQklSdEJDaUVpQTBBQ1FDQWlRUXBzSWNVQklCdEJBV29oeGdFZ3dnRWd4UUZKSWNjQklNY0JCRUFneGdFaExRd0JCU0RHQVNFYklNVUJJU0lMREFFTEN3c0ZRUUFoTFFzZy93SkI1Z0JISWNnQklNZ0JCSDhnTFFWQkFBc2h5UUVnU3lESkFXc2h5Z0VnL3dKQjV3QkdJY3NCSUV0QkFFY2h6QUVnekFFZ3l3RnhJYzBCSU0wQlFSOTBRUjkxSVY4Z3lnRWdYMm9oemdFZ1FTSFFBU0RRQVNDOUFXc2gwUUVnMFFGQkFuVWgwZ0VnMGdGQkNXd2gwd0VnMHdGQmQyb2gxQUVnemdFZzFBRklJZFVCSU5VQkJFQWdWVUVFYWlIV0FTRE9BVUdBeUFCcUlkY0JJTmNCUVFsdFFYOXhJZGdCSU5nQlFZQjRhaUhaQVNEV0FTRFpBVUVDZEdvaDJnRWcxd0ZCQ1c5QmYzRWgyd0VnMndGQkNFZ2gzQUVnM0FFRVFDRGJBU0VoUVFvaE1nTkFBa0FnSVVFQmFpRWdJREpCQ213aDNRRWdJVUVIU0NIZUFTRGVBUVJBSUNBaElTRGRBU0V5QlNEZEFTRXhEQUVMREFFTEN3VkJDaUV4Q3lEYUFTZ0NBQ0hmQVNEZkFTQXhjRUYvY1NIZ0FTRGdBVUVBUmlIaEFTRGFBVUVFYWlIaUFTRGlBU0JCUmlIakFTRGpBU0RoQVhFaDBBTWcwQU1FUUNEYUFTRkdJQzBoU0NBL0lWd0ZJTjhCSURGdVFYOXhJZVFCSU9RQlFRRnhJZVVCSU9VQlFRQkdJZVlCSU9ZQkJIeEVBQUFBQUFBQVFFTUZSQUVBQUFBQUFFQkRDeUh5QXlBeFFRSnRRWDl4SWVjQklPQUJJT2NCU1NIb0FTRGdBU0RuQVVZaDZRRWc0d0VnNlFGeElkRURJTkVEQkh4RUFBQUFBQUFBOEQ4RlJBQUFBQUFBQVBnL0N5SHpBeURvQVFSOFJBQUFBQUFBQU9BL0JTRHpBd3NoNlFNZ0hFRUFSaUhxQVNEcUFRUkFJT2tESWV3RElQSURJZTBEQlNBZExBQUFJZXNCSU9zQlFSaDBRUmgxUVMxR0lld0JJUElEbWlINUF5RHBBNW9oK2dNZzdBRUVmQ0Q1QXdVZzhnTUxJZWdESU93QkJId2crZ01GSU9rREN5SG5BeURuQXlIc0F5RG9BeUh0QXdzZzN3RWc0QUZySWU0QklOb0JJTzRCTmdJQUlPMERJT3dEb0NIN0F5RDdBeUR0QTJJaDd3RWc3d0VFUUNEdUFTQXhhaUh3QVNEYUFTRHdBVFlDQUNEd0FVSC9rK3ZjQTBzaDhRRWc4UUVFUUNBL0lVOGcyZ0VoYkFOQUFrQWdiRUY4YWlIeUFTQnNRUUEyQWdBZzhnRWdUMGtoOHdFZzh3RUVRQ0JQUVh4cUlmUUJJUFFCUVFBMkFnQWc5QUVoVmdVZ1R5RldDeUR5QVNnQ0FDSDFBU0QxQVVFQmFpSDNBU0R5QVNEM0FUWUNBQ0QzQVVIL2srdmNBMHNoK0FFZytBRUVRQ0JXSVU4ZzhnRWhiQVVnVmlGT0lQSUJJV3NNQVFzTUFRc0xCU0EvSVU0ZzJnRWhhd3NnVGlINUFTQzlBU0Q1QVdzaCtnRWcrZ0ZCQW5VaCt3RWcrd0ZCQ1d3aC9BRWdUaWdDQUNIOUFTRDlBVUVLU1NIK0FTRCtBUVJBSUdzaFJpRDhBU0ZJSUU0aFhBVWcvQUVoTzBFS0lUMERRQUpBSUQxQkNtd2gvd0VnTzBFQmFpR0FBaUQ5QVNEL0FVa2hnZ0lnZ2dJRVFDQnJJVVlnZ0FJaFNDQk9JVndNQVFVZ2dBSWhPeUQvQVNFOUN3d0JDd3NMQlNEYUFTRkdJQzBoU0NBL0lWd0xDeUJHUVFScUlZTUNJRUVnZ3dKTElZUUNJSVFDQkg4Z2d3SUZJRUVMSVFzZ1NDRlNJQXNoV3lCY0lWMEZJQzBoVWlCQklWc2dQeUZkQ3lCYklWa0RRQUpBSUZrZ1hVc2hoUUlnaFFKRkJFQkJBQ0ZlREFFTElGbEJmR29oaGdJZ2hnSW9BZ0FoaHdJZ2h3SkJBRVloaUFJZ2lBSUVRQ0NHQWlGWkJVRUJJVjRNQVFzTUFRc0xRUUFnVW1zaGlRSUNRQ0RMQVFSQUlNd0JRUUZ6SWMwRElNMERRUUZ4SVlvQ0lFc2dpZ0pxSVV3Z1RDQlNTaUdMQWlCU1FYdEtJWTBDSUlzQ0lJMENjU0hUQXlEVEF3UkFJQVZCZjJvaGpnSWdURUYvYWlGZ0lHQWdVbXNoandJZ2pnSWhFU0NQQWlFMUJTQUZRWDVxSVpBQ0lFeEJmMm9oa1FJZ2tBSWhFU0NSQWlFMUN5QUVRUWh4SVpJQ0lKSUNRUUJHSVpNQ0lKTUNCRUFnWGdSQUlGbEJmR29obEFJZ2xBSW9BZ0FobFFJZ2xRSkJBRVlobGdJZ2xnSUVRRUVKSVR3RklKVUNRUXB3UVg5eElaZ0NJSmdDUVFCR0laa0NJSmtDQkVCQkFDRXdRUW9oUXdOQUFrQWdRMEVLYkNHYUFpQXdRUUZxSVpzQ0lKVUNJSm9DY0VGL2NTR2NBaUNjQWtFQVJpR2RBaUNkQWdSQUlKc0NJVEFnbWdJaFF3VWdtd0loUEF3QkN3d0JDd3NGUVFBaFBBc0xCVUVKSVR3TElCRkJJSElobmdJZ25nSkI1Z0JHSVo4Q0lGa2hvQUlnb0FJZ3ZRRnJJYUVDSUtFQ1FRSjFJYU1DSUtNQ1FRbHNJYVFDSUtRQ1FYZHFJYVVDSUo4Q0JFQWdwUUlnUEdzaHBnSWdwZ0pCQUVvaHB3SWdwd0lFZnlDbUFnVkJBQXNoVFNBMUlFMUlJYWdDSUtnQ0JIOGdOUVVnVFFzaE5pQVJJU1FnTmlFK1FRQWhaZ3dEQlNDbEFpQlNhaUdwQWlDcEFpQThheUdxQWlDcUFrRUFTaUdyQWlDckFnUi9JS29DQlVFQUN5RlJJRFVnVVVnaHJBSWdyQUlFZnlBMUJTQlJDeUUzSUJFaEpDQTNJVDVCQUNGbURBTUxBQVVnRVNFa0lEVWhQaUNTQWlGbUN3VWdCRUVJY1NGcElBVWhKQ0JMSVQ0Z2FTRm1Dd3NnUGlCbWNpR3VBaUN1QWtFQVJ5R3ZBaUN2QWtFQmNTR3dBaUFrUVNCeUliRUNJTEVDUWVZQVJpR3lBaUN5QWdSQUlGSkJBRW9oc3dJZ3N3SUVmeUJTQlVFQUN5RzBBa0VBSVRvZ3RBSWhZUVVnVWtFQVNDRzFBaUMxQWdSL0lJa0NCU0JTQ3lHMkFpQzJBcXdoNGdNZzRnTWdlQkErSWJnQ0lIZ2h1UUlndUFJaHVnSWd1UUlndWdKcklic0NJTHNDUVFKSUlid0NJTHdDQkVBZ3VBSWhMQU5BQWtBZ0xFRi9haUc5QWlDOUFrRXdPZ0FBSUwwQ0liNENJTGtDSUw0Q2F5Ry9BaUMvQWtFQ1NDSEFBaURBQWdSQUlMMENJU3dGSUwwQ0lTc01BUXNNQVFzTEJTQzRBaUVyQ3lCU1FSOTFJY0VDSU1FQ1FRSnhJY01DSU1NQ1FTdHFJY1FDSU1RQ1FmOEJjU0hGQWlBclFYOXFJY1lDSU1ZQ0lNVUNPZ0FBSUNSQi93RnhJY2NDSUN0QmZtb2h5QUlneUFJZ3h3STZBQUFneUFJaHlRSWd1UUlneVFKckljb0NJTWdDSVRvZ3lnSWhZUXNnSEVFQmFpSExBaURMQWlBK2FpSE1BaURNQWlDd0Ftb2hMeUF2SUdGcUljMENJQUJCSUNBQ0lNMENJQVFRUVNBQUlCMGdIQkE1SUFSQmdJQUVjeUhPQWlBQVFUQWdBaUROQWlET0FoQkJJTElDQkVBZ1hTQlZTeUhQQWlEUEFnUi9JRlVGSUYwTElSWWd1Z05CQ1dvaDBBSWcwQUloMFFJZ3VnTkJDR29oMGdJZ0ZpRlFBMEFDUUNCUUtBSUFJZE1DSU5NQ3JTSGpBeURqQXlEUUFoQStJZFFDSUZBZ0ZrWWgxUUlnMVFJRVFDRFVBaURRQWtZaDJ3SWcyd0lFUUNEU0FrRXdPZ0FBSU5JQ0lTTUZJTlFDSVNNTEJTRFVBaUM2QTBzaDFnSWcxZ0lFUUNEVUFpSFhBaURYQWlEQ0Eyc2gyQUlndWdOQk1DRFlBaEJlR2lEVUFpRVFBMEFDUUNBUVFYOXFJZGtDSU5rQ0lMb0RTeUhhQWlEYUFnUkFJTmtDSVJBRklOa0NJU01NQVFzTUFRc0xCU0RVQWlFakN3c2dJeUhjQWlEUkFpRGNBbXNoM1FJZ0FDQWpJTjBDRURrZ1VFRUVhaUhlQWlEZUFpQlZTeUhmQWlEZkFnUkFEQUVGSU40Q0lWQUxEQUVMQ3lDdUFrRUFSaUhoQWlEaEFrVUVRQ0FBUWRZblFRRVFPUXNnM2dJZ1dVa2g0Z0lnUGtFQVNpSGpBaURpQWlEakFuRWg1QUlnNUFJRVFDQStJVVVnM2dJaFZ3TkFBa0FnVnlnQ0FDSGxBaURsQXEwaDVBTWc1QU1nMEFJUVBpSG1BaURtQWlDNkEwc2g1d0lnNXdJRVFDRG1BaUhvQWlEb0FpRENBMnNoNlFJZ3VnTkJNQ0RwQWhCZUdpRG1BaUVQQTBBQ1FDQVBRWDlxSWVzQ0lPc0NJTG9EU3lIc0FpRHNBZ1JBSU9zQ0lROEZJT3NDSVE0TUFRc01BUXNMQlNEbUFpRU9DeUJGUVFsSUllMENJTzBDQkg4Z1JRVkJDUXNoN2dJZ0FDQU9JTzRDRURrZ1YwRUVhaUh2QWlCRlFYZHFJZkFDSU84Q0lGbEpJZkVDSUVWQkNVb2g4Z0lnOFFJZzhnSnhJZk1DSVBNQ0JFQWc4QUloUlNEdkFpRlhCU0R3QWlGRURBRUxEQUVMQ3dVZ1BpRkVDeUJFUVFscUlmUUNJQUJCTUNEMEFrRUpRUUFRUVFVZ1hVRUVhaUgyQWlCZUJIOGdXUVVnOWdJTElWb2dQa0YvU2lIM0FpRDNBZ1JBSUxvRFFRbHFJZmdDSUdaQkFFWWgrUUlnK0FJaCtnSkJBQ0RDQTJzaCt3SWd1Z05CQ0dvaC9BSWdQaUZVSUYwaFdBTkFBa0FnV0NnQ0FDSDlBaUQ5QXEwaDVRTWc1UU1nK0FJUVBpSCtBaUQrQWlENEFrWWhnQU1nZ0FNRVFDRDhBa0V3T2dBQUlQd0NJUTBGSVA0Q0lRMExJRmdnWFVZaGdRTUNRQ0NCQXdSQUlBMUJBV29oaFFNZ0FDQU5RUUVRT1NCVVFRRklJWVlESVBrQ0lJWURjU0hTQXlEU0F3UkFJSVVESVRRTUFnc2dBRUhXSjBFQkVEa2doUU1oTkFVZ0RTQzZBMHNoZ2dNZ2dnTkZCRUFnRFNFMERBSUxJQTBnK3dKcUlkUURJTlFESWRVRElMb0RRVEFnMVFNUVhob2dEU0V6QTBBQ1FDQXpRWDlxSVlNRElJTURJTG9EU3lHRUF5Q0VBd1JBSUlNRElUTUZJSU1ESVRRTUFRc01BUXNMQ3dzZ05DR0hBeUQ2QWlDSEEyc2hpQU1nVkNDSUEwb2hpUU1naVFNRWZ5Q0lBd1VnVkFzaGl3TWdBQ0EwSUlzREVEa2dWQ0NJQTJzaGpBTWdXRUVFYWlHTkF5Q05BeUJhU1NHT0F5Q01BMEYvU2lHUEF5Q09BeUNQQTNFaGtBTWdrQU1FUUNDTUF5RlVJSTBESVZnRklJd0RJVWtNQVFzTUFRc0xCU0ErSVVrTElFbEJFbW9oa1FNZ0FFRXdJSkVEUVJKQkFCQkJJSGdoa2dNZ09pR1RBeUNTQXlDVEEyc2hsQU1nQUNBNklKUURFRGtMSUFSQmdNQUFjeUdXQXlBQVFTQWdBaUROQWlDV0F4QkJJTTBDSVcwTEN5QnRJQUpJSVpjRElKY0RCSDhnQWdVZ2JRc2hVeURYQXlRTklGTVBDeElDQW44QmZpTU5JUUlnQUwwaEF5QUREd3NWQWdKL0FYd2pEU0VESUFBZ0FSQkdJUVFnQkE4TDlCRURDMzhFZmdWOEl3MGhEQ0FBdlNFUElBOUNOSWdoRUNBUXAwSC8vd054SVFrZ0NVSC9EM0VoQ2dKQUFrQUNRQUpBSUFwQkVIUkJFSFZCQUdzT2dCQUFBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQVFJTEFrQWdBRVFBQUFBQUFBQUFBR0loQkNBRUJFQWdBRVFBQUFBQUFBRHdRNkloRkNBVUlBRVFSaUVWSUFFb0FnQWhCU0FGUVVCcUlRWWdGU0VTSUFZaENBVWdBQ0VTUVFBaENBc2dBU0FJTmdJQUlCSWhFUXdEQUFzQUN3SkFJQUFoRVF3Q0FBc0FDd0pBSUJDbklRY2dCMEgvRDNFaEFpQUNRWUo0YWlFRElBRWdBellDQUNBUFF2Ly8vLy8vLy8rSGdIK0RJUTBnRFVLQWdJQ0FnSUNBOEQrRUlRNGdEcjhoRXlBVElSRUxDeUFSRHd2a0JBRTdmeU1OSVQwZ0FFRUFSaUVZQWtBZ0dBUkFRUUVoQXdVZ0FVR0FBVWtoSXlBakJFQWdBVUgvQVhFaExpQUFJQzQ2QUFCQkFTRUREQUlMRUVnaE55QTNRYndCYWlFNElEZ29BZ0FoT1NBNUtBSUFJVG9nT2tFQVJpRUVJQVFFUUNBQlFZQi9jU0VGSUFWQmdMOERSaUVHSUFZRVFDQUJRZjhCY1NFSUlBQWdDRG9BQUVFQklRTU1Bd1VRTVNFSElBZEIxQUEyQWdCQmZ5RUREQU1MQUFzZ0FVR0FFRWtoQ1NBSkJFQWdBVUVHZGlFS0lBcEJ3QUZ5SVFzZ0MwSC9BWEVoRENBQVFRRnFJUTBnQUNBTU9nQUFJQUZCUDNFaERpQU9RWUFCY2lFUElBOUIvd0Z4SVJBZ0RTQVFPZ0FBUVFJaEF3d0NDeUFCUVlDd0Ewa2hFU0FCUVlCQWNTRVNJQkpCZ01BRFJpRVRJQkVnRTNJaE95QTdCRUFnQVVFTWRpRVVJQlJCNEFGeUlSVWdGVUgvQVhFaEZpQUFRUUZxSVJjZ0FDQVdPZ0FBSUFGQkJuWWhHU0FaUVQ5eElSb2dHa0dBQVhJaEd5QWJRZjhCY1NFY0lBQkJBbW9oSFNBWElCdzZBQUFnQVVFL2NTRWVJQjVCZ0FGeUlSOGdIMEgvQVhFaElDQWRJQ0E2QUFCQkF5RUREQUlMSUFGQmdJQjhhaUVoSUNGQmdJREFBRWtoSWlBaUJFQWdBVUVTZGlFa0lDUkI4QUZ5SVNVZ0pVSC9BWEVoSmlBQVFRRnFJU2NnQUNBbU9nQUFJQUZCREhZaEtDQW9RVDl4SVNrZ0tVR0FBWEloS2lBcVFmOEJjU0VySUFCQkFtb2hMQ0FuSUNzNkFBQWdBVUVHZGlFdElDMUJQM0VoTHlBdlFZQUJjaUV3SURCQi93RnhJVEVnQUVFRGFpRXlJQ3dnTVRvQUFDQUJRVDl4SVRNZ00wR0FBWEloTkNBMFFmOEJjU0UxSURJZ05Ub0FBRUVFSVFNTUFnVVFNU0UySURaQjFBQTJBZ0JCZnlFRERBSUxBQXNMSUFNUEN3OEJBMzhqRFNFQ0VFa2hBQ0FBRHdzTUFRSi9JdzBoQVVHVUlROExEd0VEZnlNTklRSVFTU0VBSUFBUEM1TUNBUlovSXcwaEYwRUFJUVFEUUFKQVFkZ25JQVJxSVE4Z0R5d0FBQ0VRSUJCQi93RnhJUkVnRVNBQVJpRVNJQklFUUVFQ0lSWU1BUXNnQkVFQmFpRVRJQk5CMXdCR0lSUWdGQVJBUWJBb0lRTkIxd0FoQmtFRklSWU1BUVVnRXlFRUN3d0JDd3NnRmtFQ1JnUkFJQVJCQUVZaERpQU9CRUJCc0NnaEFnVkJzQ2doQXlBRUlRWkJCU0VXQ3dzZ0ZrRUZSZ1JBQTBBQ1FFRUFJUllnQXlFRkEwQUNRQ0FGTEFBQUlSVWdGVUVZZEVFWWRVRUFSaUVISUFWQkFXb2hDQ0FIQkVBTUFRVWdDQ0VGQ3d3QkN3c2dCa0YvYWlFSklBbEJBRVloQ2lBS0JFQWdDQ0VDREFFRklBZ2hBeUFKSVFaQkJTRVdDd3dCQ3dzTElBRkJGR29oQ3lBTEtBSUFJUXdnQWlBTUVFd2hEU0FORHdzVEFRTi9JdzBoQkNBQUlBRVFUU0VDSUFJUEMxSUJDbjhqRFNFTElBRkJBRVloQXlBREJFQkJBQ0VDQlNBQktBSUFJUVFnQVVFRWFpRUZJQVVvQWdBaEJpQUVJQVlnQUJCT0lRY2dCeUVDQ3lBQ1FRQkhJUWdnQ0FSL0lBSUZJQUFMSVFrZ0NROExqQVVCU1g4akRTRkxJQUFvQWdBaEhTQWRRYUxhNzljR2FpRW9JQUJCQ0dvaE15QXpLQUlBSVQ0Z1BpQW9FRThoUkNBQVFReHFJVVVnUlNnQ0FDRkdJRVlnS0JCUElRa2dBRUVRYWlFS0lBb29BZ0FoQ3lBTElDZ1FUeUVNSUFGQkFuWWhEU0JFSUExSklRNENRQ0FPQkVBZ1JFRUNkQ0VQSUFFZ0Qyc2hFQ0FKSUJCSklSRWdEQ0FRU1NFU0lCRWdFbkVoUnlCSEJFQWdEQ0FKY2lFVElCTkJBM0VoRkNBVVFRQkdJUlVnRlFSQUlBbEJBblloRmlBTVFRSjJJUmRCQUNFRUlFUWhCUU5BQWtBZ0JVRUJkaUVZSUFRZ0dHb2hHU0FaUVFGMElSb2dHaUFXYWlFYklBQWdHMEVDZEdvaEhDQWNLQUlBSVI0Z0hpQW9FRThoSHlBYlFRRnFJU0FnQUNBZ1FRSjBhaUVoSUNFb0FnQWhJaUFpSUNnUVR5RWpJQ01nQVVraEpDQUJJQ05ySVNVZ0h5QWxTU0VtSUNRZ0puRWhTQ0JJUlFSQVFRQWhDQXdHQ3lBaklCOXFJU2NnQUNBbmFpRXBJQ2tzQUFBaEtpQXFRUmgwUVJoMVFRQkdJU3NnSzBVRVFFRUFJUWdNQmdzZ0FDQWphaUVzSUFJZ0xCQTBJUzBnTFVFQVJpRXVJQzRFUUF3QkN5QUZRUUZHSVVFZ0xVRUFTQ0ZDSUFVZ0dHc2hReUJDQkg4Z0dBVWdRd3NoQnlCQ0JIOGdCQVVnR1FzaEJpQkJCRUJCQUNFSURBWUZJQVloQkNBSElRVUxEQUVMQ3lBYUlCZHFJUzhnQUNBdlFRSjBhaUV3SURBb0FnQWhNU0F4SUNnUVR5RXlJQzlCQVdvaE5DQUFJRFJCQW5ScUlUVWdOU2dDQUNFMklEWWdLQkJQSVRjZ055QUJTU0U0SUFFZ04yc2hPU0F5SURsSklUb2dPQ0E2Y1NGSklFa0VRQ0FBSURkcUlUc2dOeUF5YWlFOElBQWdQR29oUFNBOUxBQUFJVDhnUDBFWWRFRVlkVUVBUmlGQUlFQUVmeUE3QlVFQUN5RURJQU1oQ0FWQkFDRUlDd1ZCQUNFSUN3VkJBQ0VJQ3dWQkFDRUlDd3NnQ0E4TEpBRUZmeU1OSVFZZ0FVRUFSaUVESUFBUVhDRUVJQU1FZnlBQUJTQUVDeUVDSUFJUEM3MERBU3AvSXcwaExDQUNRUkJxSVI4Z0h5Z0NBQ0VsSUNWQkFFWWhKaUFtQkVBZ0FoQlJJU2dnS0VFQVJpRXBJQ2tFUUNBZktBSUFJUWtnQ1NFTlFRVWhLd1ZCQUNFRkN3VWdKU0VuSUNjaERVRUZJU3NMQWtBZ0swRUZSZ1JBSUFKQkZHb2hLaUFxS0FJQUlRc2dEU0FMYXlFTUlBd2dBVWtoRGlBTElROGdEZ1JBSUFKQkpHb2hFQ0FRS0FJQUlSRWdBaUFBSUFFZ0VVRUhjVUVJYWhFQUFDRVNJQkloQlF3Q0N5QUNRY3NBYWlFVElCTXNBQUFoRkNBVVFSaDBRUmgxUVg5S0lSVUNRQ0FWQkVBZ0FTRURBMEFDUUNBRFFRQkdJUllnRmdSQVFRQWhCaUFBSVFjZ0FTRUlJQThoSVF3RUN5QURRWDlxSVJjZ0FDQVhhaUVZSUJnc0FBQWhHU0FaUVJoMFFSaDFRUXBHSVJvZ0dnUkFEQUVGSUJjaEF3c01BUXNMSUFKQkpHb2hHeUFiS0FJQUlSd2dBaUFBSUFNZ0hFRUhjVUVJYWhFQUFDRWRJQjBnQTBraEhpQWVCRUFnSFNFRkRBUUxJQUFnQTJvaElDQUJJQU5ySVFRZ0tpZ0NBQ0VLSUFNaEJpQWdJUWNnQkNFSUlBb2hJUVZCQUNFR0lBQWhCeUFCSVFnZ0R5RWhDd3NnSVNBSElBZ1FYUm9nS2lnQ0FDRWlJQ0lnQ0dvaEl5QXFJQ00yQWdBZ0JpQUlhaUVrSUNRaEJRc0xJQVVQQytBQkFSaC9JdzBoR0NBQVFjb0FhaUVDSUFJc0FBQWhEU0FOUVJoMFFSaDFJUkFnRUVIL0FXb2hFU0FSSUJCeUlSSWdFa0gvQVhFaEV5QUNJQk02QUFBZ0FDZ0NBQ0VVSUJSQkNIRWhGU0FWUVFCR0lSWWdGZ1JBSUFCQkNHb2hCQ0FFUVFBMkFnQWdBRUVFYWlFRklBVkJBRFlDQUNBQVFTeHFJUVlnQmlnQ0FDRUhJQUJCSEdvaENDQUlJQWMyQWdBZ0FFRVVhaUVKSUFrZ0J6WUNBQ0FISVFvZ0FFRXdhaUVMSUFzb0FnQWhEQ0FLSUF4cUlRNGdBRUVRYWlFUElBOGdEallDQUVFQUlRRUZJQlJCSUhJaEF5QUFJQU0yQWdCQmZ5RUJDeUFCRHdzM0FRaC9JdzBoQ1NBQVFRQWdBUkJBSVFJZ0FrRUFSaUVESUFJaEJDQUFJUVVnQkNBRmF5RUdJQU1FZnlBQkJTQUdDeUVISUFjUEM4OENBU0IvSXcwaElDQUFJUWdnQ0VFRGNTRVRJQk5CQUVZaEdBSkFJQmdFUUNBQUlRSkJCQ0VmQlNBQUlRTWdDQ0VYQTBBQ1FDQURMQUFBSVJrZ0dVRVlkRUVZZFVFQVJpRWFJQm9FUUNBWElRY01CQXNnQTBFQmFpRWJJQnNoSENBY1FRTnhJUjBnSFVFQVJpRWVJQjRFUUNBYklRSkJCQ0VmREFFRklCc2hBeUFjSVJjTERBRUxDd3NMSUI5QkJFWUVRQ0FDSVFFRFFBSkFJQUVvQWdBaENTQUpRZi85KzNkcUlRb2dDVUdBZ1lLRWVIRWhDeUFMUVlDQmdvUjRjeUVNSUF3Z0NuRWhEU0FOUVFCR0lRNGdBVUVFYWlFUElBNEVRQ0FQSVFFRkRBRUxEQUVMQ3lBSlFmOEJjU0VRSUJCQkdIUkJHSFZCQUVZaEVTQVJCRUFnQVNFRUJTQUJJUVVEUUFKQUlBVkJBV29oRWlBU0xBQUFJUVlnQmtFWWRFRVlkVUVBUmlFVUlCUUVRQ0FTSVFRTUFRVWdFaUVGQ3d3QkN3c0xJQVFoRlNBVklRY0xJQWNnQ0dzaEZpQVdEd3RCQVFkL0l3MGhDQ0FBSUFFUVZTRUNJQUlzQUFBaEF5QUJRZjhCY1NFRUlBTkJHSFJCR0hVZ0JFRVlkRUVZZFVZaEJTQUZCSDhnQWdWQkFBc2hCaUFHRHd1TUJBRXpmeU1OSVRRZ0FVSC9BWEVoRWlBU1FRQkdJUjBDUUNBZEJFQWdBQkJUSVM4Z0FDQXZhaUV3SURBaEFnVWdBQ0VvSUNoQkEzRWhMQ0FzUVFCR0lTMGdMUVJBSUFBaEJRVWdBVUgvQVhFaExpQUFJUVlEUUFKQUlBWXNBQUFoQ0NBSVFSaDBRUmgxUVFCR0lRa2dDRUVZZEVFWWRTQXVRUmgwUVJoMVJpRUtJQWtnQ25JaE1TQXhCRUFnQmlFQ0RBVUxJQVpCQVdvaEN5QUxJUXdnREVFRGNTRU5JQTFCQUVZaERpQU9CRUFnQ3lFRkRBRUZJQXNoQmdzTUFRc0xDeUFTUVlHQ2hBaHNJUThnQlNnQ0FDRVFJQkJCLy8zN2Qyb2hFU0FRUVlDQmdvUjRjU0VUSUJOQmdJR0NoSGh6SVJRZ0ZDQVJjU0VWSUJWQkFFWWhGZ0pBSUJZRVFDQUZJUVFnRUNFWUEwQUNRQ0FZSUE5eklSY2dGMEgvL2Z0M2FpRVpJQmRCZ0lHQ2hIaHhJUm9nR2tHQWdZS0VlSE1oR3lBYklCbHhJUndnSEVFQVJpRWVJQjVGQkVBZ0JDRUREQVFMSUFSQkJHb2hIeUFmS0FJQUlTQWdJRUgvL2Z0M2FpRWhJQ0JCZ0lHQ2hIaHhJU0lnSWtHQWdZS0VlSE1oSXlBaklDRnhJU1FnSkVFQVJpRWxJQ1VFUUNBZklRUWdJQ0VZQlNBZklRTU1BUXNNQVFzTEJTQUZJUU1MQ3lBQlFmOEJjU0VtSUFNaEJ3TkFBa0FnQnl3QUFDRW5JQ2RCR0hSQkdIVkJBRVloS1NBblFSaDBRUmgxSUNaQkdIUkJHSFZHSVNvZ0tTQXFjaUV5SUFkQkFXb2hLeUF5QkVBZ0J5RUNEQUVGSUNzaEJ3c01BUXNMQ3dzZ0FnOExFUUVDZnlNTklRRkI4RG9RQmtINE9nOExEZ0VDZnlNTklRRkI4RG9RREE4TDV3SUJKMzhqRFNFbklBQkJBRVloQ0FKQUlBZ0VRRUdRSVNnQ0FDRWpJQ05CQUVZaEpDQWtCRUJCQUNFZEJVR1FJU2dDQUNFSklBa1FXQ0VLSUFvaEhRc1FWaUVMSUFzb0FnQWhBeUFEUVFCR0lRd2dEQVJBSUIwaEJRVWdBeUVFSUIwaEJnTkFBa0FnQkVITUFHb2hEU0FOS0FJQUlRNGdEa0YvU2lFUElBOEVRQ0FFRURjaEVDQVFJUm9GUVFBaEdnc2dCRUVVYWlFUklCRW9BZ0FoRWlBRVFSeHFJUlFnRkNnQ0FDRVZJQklnRlVzaEZpQVdCRUFnQkJCWklSY2dGeUFHY2lFWUlCZ2hCd1VnQmlFSEN5QWFRUUJHSVJrZ0dVVUVRQ0FFRURnTElBUkJPR29oR3lBYktBSUFJUUlnQWtFQVJpRWNJQndFUUNBSElRVU1BUVVnQWlFRUlBY2hCZ3NNQVFzTEN4QlhJQVVoQVFVZ0FFSE1BR29oRXlBVEtBSUFJUjRnSGtGL1NpRWZJQjlGQkVBZ0FCQlpJU0FnSUNFQkRBSUxJQUFRTnlFaElDRkJBRVloSlNBQUVGa2hJaUFsQkVBZ0lpRUJCU0FBRURnZ0lpRUJDd3NMSUFFUEM0RUNBUmQvSXcwaEZ5QUFRUlJxSVFJZ0FpZ0NBQ0VOSUFCQkhHb2hEeUFQS0FJQUlSQWdEU0FRU3lFUklCRUVRQ0FBUVNScUlSSWdFaWdDQUNFVElBQkJBRUVBSUJOQkIzRkJDR29SQUFBYUlBSW9BZ0FoRkNBVVFRQkdJUlVnRlFSQVFYOGhBUVZCQXlFV0N3VkJBeUVXQ3lBV1FRTkdCRUFnQUVFRWFpRURJQU1vQWdBaEJDQUFRUWhxSVFVZ0JTZ0NBQ0VHSUFRZ0Jra2hCeUFIQkVBZ0JDRUlJQVloQ1NBSUlBbHJJUW9nQUVFb2FpRUxJQXNvQWdBaERDQUFJQXBCQVNBTVFRZHhRUWhxRVFBQUdnc2dBRUVRYWlFT0lBNUJBRFlDQUNBUFFRQTJBZ0FnQWtFQU5nSUFJQVZCQURZQ0FDQURRUUEyQWdCQkFDRUJDeUFCRHdzM0FRUi9JdzBoQmlNTlFSQnFKQTBqRFNNT1RnUkFRUkFRQXdzZ0JpRURJQU1nQWpZQ0FDQUFJQUVnQXhBMUlRUWdCaVFOSUFRUEN3TUFBUXNzQUNBQVFmOEJjVUVZZENBQVFRaDFRZjhCY1VFUWRISWdBRUVRZFVIL0FYRkJDSFJ5SUFCQkdIWnlEd3ZrQkFFRWZ5QUNRWURBQUU0RVFDQUFJQUVnQWhBT0R3c2dBQ0VESUFBZ0Ftb2hCaUFBUVFOeElBRkJBM0ZHQkVBRFFBSkFJQUJCQTNGRkJFQU1BUXNDUUNBQ1FRQkdCRUFnQXc4TElBQWdBU3dBQURvQUFDQUFRUUZxSVFBZ0FVRUJhaUVCSUFKQkFXc2hBZ3NNQVFzTElBWkJmSEVoQkNBRVFjQUFheUVGQTBBQ1FDQUFJQVZNUlFSQURBRUxBa0FnQUNBQktBSUFOZ0lBSUFCQkJHb2dBVUVFYWlnQ0FEWUNBQ0FBUVFocUlBRkJDR29vQWdBMkFnQWdBRUVNYWlBQlFReHFLQUlBTmdJQUlBQkJFR29nQVVFUWFpZ0NBRFlDQUNBQVFSUnFJQUZCRkdvb0FnQTJBZ0FnQUVFWWFpQUJRUmhxS0FJQU5nSUFJQUJCSEdvZ0FVRWNhaWdDQURZQ0FDQUFRU0JxSUFGQklHb29BZ0EyQWdBZ0FFRWthaUFCUVNScUtBSUFOZ0lBSUFCQktHb2dBVUVvYWlnQ0FEWUNBQ0FBUVN4cUlBRkJMR29vQWdBMkFnQWdBRUV3YWlBQlFUQnFLQUlBTmdJQUlBQkJOR29nQVVFMGFpZ0NBRFlDQUNBQVFUaHFJQUZCT0dvb0FnQTJBZ0FnQUVFOGFpQUJRVHhxS0FJQU5nSUFJQUJCd0FCcUlRQWdBVUhBQUdvaEFRc01BUXNMQTBBQ1FDQUFJQVJJUlFSQURBRUxBa0FnQUNBQktBSUFOZ0lBSUFCQkJHb2hBQ0FCUVFScUlRRUxEQUVMQ3dVZ0JrRUVheUVFQTBBQ1FDQUFJQVJJUlFSQURBRUxBa0FnQUNBQkxBQUFPZ0FBSUFCQkFXb2dBVUVCYWl3QUFEb0FBQ0FBUVFKcUlBRkJBbW9zQUFBNkFBQWdBRUVEYWlBQlFRTnFMQUFBT2dBQUlBQkJCR29oQUNBQlFRUnFJUUVMREFFTEN3c0RRQUpBSUFBZ0JraEZCRUFNQVFzQ1FDQUFJQUVzQUFBNkFBQWdBRUVCYWlFQUlBRkJBV29oQVFzTUFRc0xJQU1QQy9FQ0FRUi9JQUFnQW1vaEF5QUJRZjhCY1NFQklBSkJ3d0JPQkVBRFFBSkFJQUJCQTNGQkFFZEZCRUFNQVFzQ1FDQUFJQUU2QUFBZ0FFRUJhaUVBQ3d3QkN3c2dBMEY4Y1NFRUlBUkJ3QUJySVFVZ0FTQUJRUWgwY2lBQlFSQjBjaUFCUVJoMGNpRUdBMEFDUUNBQUlBVk1SUVJBREFFTEFrQWdBQ0FHTmdJQUlBQkJCR29nQmpZQ0FDQUFRUWhxSUFZMkFnQWdBRUVNYWlBR05nSUFJQUJCRUdvZ0JqWUNBQ0FBUVJScUlBWTJBZ0FnQUVFWWFpQUdOZ0lBSUFCQkhHb2dCallDQUNBQVFTQnFJQVkyQWdBZ0FFRWthaUFHTmdJQUlBQkJLR29nQmpZQ0FDQUFRU3hxSUFZMkFnQWdBRUV3YWlBR05nSUFJQUJCTkdvZ0JqWUNBQ0FBUVRocUlBWTJBZ0FnQUVFOGFpQUdOZ0lBSUFCQndBQnFJUUFMREFFTEN3TkFBa0FnQUNBRVNFVUVRQXdCQ3dKQUlBQWdCallDQUNBQVFRUnFJUUFMREFFTEN3c0RRQUpBSUFBZ0EwaEZCRUFNQVFzQ1FDQUFJQUU2QUFBZ0FFRUJhaUVBQ3d3QkN3c2dBeUFDYXc4TEJRQkJBQThMQlFCQkFBOExaZ0VFZnlBQVFROXFRWEJ4SVFBakNpZ0NBQ0VCSUFFZ0FHb2hBeUFBUVFCS0lBTWdBVWh4SUFOQkFFaHlCRUFRQWhwQkRCQUhRWDhQQ3lNS0lBTTJBZ0FRQVNFRUlBTWdCRW9FUUJBQVFRQkdCRUFqQ2lBQk5nSUFRUXdRQjBGL0R3c0xJQUVQQ3hBQUlBRWdBRUVIY1VFQWFoRUJBQThMRkFBZ0FTQUNJQU1nQUVFSGNVRUlhaEVBQUE4TENRQkJBQkFFUVFBUEN3a0FRUUVRQlVFQUR3c0x3aTRCQUVHQUNBdTZMZ0FBQUFCc0FRQUEyQUlBQUdzQkFBRFhBZ0FBYWdFQUFOWUNBQUJwQVFBQTFRSUFBR2dCQUFEVUFnQUFad0VBQU5NQ0FBQm1BUUFBMGdJQUFHVUJBQURSQWdBQVpBRUFBTkFDQUFCakFRQUF6d0lBQUdJQkFBRE9BZ0FBWVFFQUFNMENBQUJnQVFBQXpBSUFBRjhCQUFETEFnQUFYZ0VBQU1vQ0FBQmRBUUFBeVFJQUFGd0JBQURJQWdBQVd3RUFBTWNDQUFCYUFRQUF4Z0lBQUZrQkFBREZBZ0FBV0FFQUFNUUNBQUJYQVFBQXd3SUFBRllCQUFEQ0FnQUFWUUVBQU1FQ0FBQlVBUUFBd0FJQUFGTUJBQUMvQWdBQVVnRUFBTDRDQUFCUkFRQUF2UUlBQUZBQkFBQzhBZ0FBVHdFQUFMc0NBQUJPQVFBQXVnSUFBRTBCQUFDNUFnQUFUQUVBQUxnQ0FBQkxBUUFBdHdJQUFFb0JBQUMyQWdBQVNRRUFBTFVDQUFCSUFRQUF0QUlBQUVjQkFBQ3pBZ0FBUmdFQUFMSUNBQUJGQVFBQXNRSUFBRVFCQUFDd0FnQUFRd0VBQUs4Q0FBQkNBUUFBcmdJQUFFRUJBQUN0QWdBQVFBRUFBS3dDQUFBL0FRQUFxd0lBQUQ0QkFBQ3FBZ0FBUFFFQUFLa0NBQUE4QVFBQXFBSUFBRHNCQUFDbkFnQUFPZ0VBQUtZQ0FBQTVBUUFBcFFJQUFEZ0JBQUNrQWdBQU53RUFBS01DQUFBMkFRQUFvZ0lBQURVQkFBQ2hBZ0FBTkFFQUFLQUNBQUF6QVFBQW53SUFBRElCQUFDZUFnQUFNUUVBQUowQ0FBQXdBUUFBbkFJQUFDOEJBQUNiQWdBQUxnRUFBSm9DQUFBdEFRQUFtUUlBQUN3QkFBQ1lBZ0FBS3dFQUFKY0NBQUFxQVFBQWxnSUFBQ2tCQUFDVkFnQUFLQUVBQUpRQ0FBQW5BUUFBa3dJQUFDWUJBQUNTQWdBQUpRRUFBSkVDQUFBa0FRQUFrQUlBQUNNQkFBQ1BBZ0FBSWdFQUFJNENBQUFoQVFBQWpRSUFBQ0FCQUFDTUFnQUFId0VBQUlzQ0FBQWVBUUFBaWdJQUFCMEJBQUNKQWdBQUhBRUFBSWdDQUFBYkFRQUFod0lBQUJvQkFBQ0dBZ0FBR1FFQUFJVUNBQUFZQVFBQWhBSUFBQmNCQUFDREFnQUFGZ0VBQUlJQ0FBQVZBUUFBZ1FJQUFCUUJBQUNBQWdBQUV3RUFBSDhDQUFBU0FRQUFmZ0lBQUJFQkFBQjlBZ0FBRUFFQUFId0NBQUFQQVFBQWV3SUFBQTRCQUFCNkFnQUFEUUVBQUhrQ0FBQU1BUUFBZUFJQUFBc0JBQUIzQWdBQUNnRUFBSFlDQUFBSkFRQUFkUUlBQUFnQkFBQjBBZ0FBQndFQUFITUNBQUFHQVFBQWNnSUFBQVVCQUFCeEFnQUFCQUVBQUhBQ0FBQURBUUFBYndJQUFBSUJBQUJ1QWdBQUFRRUFBRzBDQUFBQUFRQUFiQUlBQVA4QUFBQnJBZ0FBL2dBQUFHb0NBQUQ5QUFBQWFRSUFBUHdBQUFCb0FnQUErd0FBQUdjQ0FBRDZBQUFBWmdJQUFQa0FBQUJsQWdBQStBQUFBR1FDQUFEM0FBQUFZd0lBQVBZQUFBQmlBZ0FBOVFBQUFHRUNBQUQwQUFBQVlBSUFBUE1BQUFCZkFnQUE4Z0FBQUY0Q0FBRHhBQUFBWFFJQUFQQUFBQUJjQWdBQTd3QUFBRnNDQUFEdUFBQUFXZ0lBQU8wQUFBQlpBZ0FBN0FBQUFGZ0NBQURyQUFBQVZ3SUFBT29BQUFCV0FnQUE2UUFBQUZVQ0FBRG9BQUFBVkFJQUFPY0FBQUJUQWdBQTVnQUFBRklDQUFEbEFBQUFVUUlBQU9RQUFBQlFBZ0FBNHdBQUFFOENBQURpQUFBQVRnSUFBT0VBQUFCTkFnQUE0QUFBQUV3Q0FBRGZBQUFBU3dJQUFONEFBQUJLQWdBQTNRQUFBRWtDQUFEY0FBQUFTQUlBQU5zQUFBQkhBZ0FBMmdBQUFFWUNBQURaQUFBQVJRSUFBTmdBQUFCRUFnQUExd0FBQUVNQ0FBRFdBQUFBUWdJQUFOVUFBQUJCQWdBQTFBQUFBRUFDQUFEVEFBQUFQd0lBQU5JQUFBQStBZ0FBMFFBQUFEMENBQURRQUFBQVBBSUFBTThBQUFBN0FnQUF6Z0FBQURvQ0FBRE5BQUFBT1FJQUFNd0FBQUE0QWdBQXl3QUFBRGNDQUFES0FBQUFOZ0lBQU1rQUFBQTFBZ0FBeUFBQUFEUUNBQURIQUFBQU13SUFBTVlBQUFBeUFnQUF4UUFBQURFQ0FBREVBQUFBTUFJQUFNTUFBQUF2QWdBQXdnQUFBQzRDQUFEQkFBQUFMUUlBQU1BQUFBQXNBZ0FBdndBQUFDc0NBQUMrQUFBQUtnSUFBTDBBQUFBcEFnQUF2QUFBQUNnQ0FBQzdBQUFBSndJQUFMb0FBQUFtQWdBQXVRQUFBQ1VDQUFDNEFBQUFKQUlBQUxjQUFBQWpBZ0FBdGdBQUFDSUNBQUMxQUFBQUlRSUFBTFFBQUFBZ0FnQUFzd0FBQUI4Q0FBQ3lBQUFBSGdJQUFMRUFBQUFkQWdBQXNBQUFBQndDQUFDdkFBQUFHd0lBQUs0QUFBQWFBZ0FBclFBQUFCa0NBQUNzQUFBQUdBSUFBS3NBQUFBWEFnQUFxZ0FBQUJZQ0FBQ3BBQUFBRlFJQUFLZ0FBQUFVQWdBQXB3QUFBQk1DQUFDbUFBQUFFZ0lBQUtVQUFBQVJBZ0FBcEFBQUFCQUNBQUNqQUFBQUR3SUFBS0lBQUFBT0FnQUFvUUFBQUEwQ0FBQ2dBQUFBREFJQUFKOEFBQUFMQWdBQW5nQUFBQW9DQUFDZEFBQUFDUUlBQUp3QUFBQUlBZ0FBbXdBQUFBY0NBQUNhQUFBQUJnSUFBSmtBQUFBRkFnQUFtQUFBQUFRQ0FBQ1hBQUFBQXdJQUFKWUFBQUFDQWdBQWxRQUFBQUVDQUFDVUFBQUFBQUlBQUpNQUFBRC9BUUFBa2dBQUFQNEJBQUNSQUFBQS9RRUFBSkFBQUFEOEFRQUFqd0FBQVBzQkFBQ09BQUFBK2dFQUFJMEFBQUQ1QVFBQWpBQUFBUGdCQUFDTEFBQUE5d0VBQUlvQUFBRDJBUUFBaVFBQUFQVUJBQUNJQUFBQTlBRUFBSWNBQUFEekFRQUFoZ0FBQVBJQkFBQ0ZBQUFBOFFFQUFJUUFBQUR3QVFBQWd3QUFBTzhCQUFDQ0FBQUE3Z0VBQUlFQUFBRHRBUUFBZ0FBQUFPd0JBQUIvQUFBQTZ3RUFBSDRBQUFEcUFRQUFmUUFBQU9rQkFBQjhBQUFBNkFFQUFIc0FBQURuQVFBQWVnQUFBT1lCQUFCNUFBQUE1UUVBQUhnQUFBRGtBUUFBZHdBQUFPTUJBQUIyQUFBQTRnRUFBSFVBQUFEaEFRQUFkQUFBQU9BQkFBQnpBQUFBM3dFQUFISUFBQURlQVFBQWNRQUFBTjBCQUFCd0FBQUEzQUVBQUc4QUFBRGJBUUFBYmdBQUFOb0JBQUJ0QUFBQTJRRUFBR3dBQUFEWUFRQUFhd0FBQU5jQkFBQnFBQUFBMWdFQUFHa0FBQURWQVFBQWFBQUFBTlFCQUFCbkFBQUEwd0VBQUdZQUFBRFNBUUFBWlFBQUFORUJBQUJrQUFBQTBBRUFBR01BQUFEUEFRQUFZZ0FBQU00QkFBQmhBQUFBelFFQUFHQUFBQURNQVFBQVh3QUFBTXNCQUFCZUFBQUF5Z0VBQUYwQUFBREpBUUFBWEFBQUFNZ0JBQUJiQUFBQXh3RUFBRm9BQUFER0FRQUFXUUFBQU1VQkFBQllBQUFBeEFFQUFGY0FBQUREQVFBQVZnQUFBTUlCQUFCVkFBQUF3UUVBQUZRQUFBREFBUUFBVXdBQUFMOEJBQUJTQUFBQXZnRUFBRkVBQUFDOUFRQUFVQUFBQUx3QkFBQlBBQUFBdXdFQUFFNEFBQUM2QVFBQVRRQUFBTGtCQUFCTUFBQUF1QUVBQUVzQUFBQzNBUUFBU2dBQUFMWUJBQUJKQUFBQXRRRUFBRWdBQUFDMEFRQUFSd0FBQUxNQkFBQkdBQUFBc2dFQUFFVUFBQUN4QVFBQVJBQUFBTEFCQUFCREFBQUFyd0VBQUVJQUFBQ3VBUUFBUVFBQUFLMEJBQUJBQUFBQXJBRUFBRDhBQUFDckFRQUFQZ0FBQUtvQkFBQTlBQUFBcVFFQUFEd0FBQUNvQVFBQU93QUFBS2NCQUFBNkFBQUFwZ0VBQURrQUFBQ2xBUUFBT0FBQUFLUUJBQUEzQUFBQW93RUFBRFlBQUFDaUFRQUFOUUFBQUtFQkFBQTBBQUFBb0FFQUFETUFBQUNmQVFBQU1nQUFBSjRCQUFBeEFBQUFuUUVBQURBQUFBQ2NBUUFBTHdBQUFKc0JBQUF1QUFBQW1nRUFBQzBBQUFDWkFRQUFMQUFBQUpnQkFBQXJBQUFBbHdFQUFDb0FBQUNXQVFBQUtRQUFBSlVCQUFBb0FBQUFsQUVBQUNjQUFBQ1RBUUFBSmdBQUFKSUJBQUFsQUFBQWtRRUFBQ1FBQUFDUUFRQUFJd0FBQUk4QkFBQWlBQUFBamdFQUFDRUFBQUNOQVFBQUlBQUFBSXdCQUFBZkFBQUFpd0VBQUI0QUFBQ0tBUUFBSFFBQUFJa0JBQUFjQUFBQWlBRUFBQnNBQUFDSEFRQUFHZ0FBQUlZQkFBQVpBQUFBaFFFQUFCZ0FBQUNFQVFBQUZ3QUFBSU1CQUFBV0FBQUFnZ0VBQUJVQUFBQ0JBUUFBRkFBQUFJQUJBQUFUQUFBQWZ3RUFBQklBQUFCK0FRQUFFUUFBQUgwQkFBQVFBQUFBZkFFQUFBOEFBQUI3QVFBQURnQUFBSG9CQUFBTkFBQUFlUUVBQUF3QUFBQjRBUUFBQ3dBQUFIY0JBQUFLQUFBQWRnRUFBQWtBQUFCMUFRQUFDQUFBQUhRQkFBQUhBQUFBY3dFQUFBWUFBQUJ5QVFBQUJRQUFBSEVCQUFBRUFBQUFjQUVBQUFNQUFBQnZBUUFBQWdBQUFHNEJBQUFCQUFBQWJRRUFBQUFBQUFBQkFBQUFBQUFBQVAvLy8vOENBQUFBQVFBQUFQLy8vLzhBQUFBQUFnQUFBUC8vLy84QkFBQUFBQUFBQUpnUEFBQUZBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNBQUFBQXdBQUFKUWlBQUFBQUFBQUFBQUFBQUFBQUFBQ0FBQUFBQUFBQUFBQUFBQUFBQUQvLy8vLy93QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQU1BQUFDY0lnQUFBQVFBQUFBQUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFBQUFDdi8vLy84QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJRUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGUWRBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFTVzUyWVd4cFpDQnRhVzVYWldsbmFIUk5ZV2R1YVhSMVpHVWdKV1FBT1VGQ1EwUkZSa2RJU1VwTFRFMU9UMUJSVWxOVVZWWlhXRmxhQUJFQUNnQVJFUkVBQUFBQUJRQUFBQUFBQUFrQUFBQUFDd0FBQUFBQUFBQUFFUUFQQ2hFUkVRTUtCd0FCRXdrTEN3QUFDUVlMQUFBTEFBWVJBQUFBRVJFUkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFzQUFBQUFBQUFBQUJFQUNnb1JFUkVBQ2dBQUFnQUpDd0FBQUFrQUN3QUFDd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1BQUFBQUFBQUFBQUFBQUFNQUFBQUFBd0FBQUFBQ1F3QUFBQUFBQXdBQUF3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdBQUFBQUFBQUFBQUFBQURRQUFBQVFOQUFBQUFBa09BQUFBQUFBT0FBQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQThBQUFBQUR3QUFBQUFKRUFBQUFBQUFFQUFBRUFBQUVnQUFBQklTRWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFTQUFBQUVoSVNBQUFBQUFBQUNRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN3QUFBQUFBQUFBQUFBQUFDZ0FBQUFBS0FBQUFBQWtMQUFBQUFBQUxBQUFMQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFBQUFBQUFBQUF3QUFBQUFEQUFBQUFBSkRBQUFBQUFBREFBQURBQUFMU3NnSUNBd1dEQjRBQ2h1ZFd4c0tRQXRNRmdyTUZnZ01GZ3RNSGdyTUhnZ01IZ0FhVzVtQUVsT1JnQnVZVzRBVGtGT0FEQXhNak0wTlRZM09EbEJRa05FUlVZdUFGUWhJaGtOQVFJREVVc2NEQkFFQ3gwU0hpZG9ibTl3Y1dJZ0JRWVBFeFFWR2dnV0J5Z2tGeGdKQ2c0Ykh5VWpnNEo5SmlvclBEMCtQME5IU2sxWVdWcGJYRjFlWDJCaFkyUmxabWRwYW10c2NuTjBlWHA3ZkFCSmJHeGxaMkZzSUdKNWRHVWdjMlZ4ZFdWdVkyVUFSRzl0WVdsdUlHVnljbTl5QUZKbGMzVnNkQ0J1YjNRZ2NtVndjbVZ6Wlc1MFlXSnNaUUJPYjNRZ1lTQjBkSGtBVUdWeWJXbHpjMmx2YmlCa1pXNXBaV1FBVDNCbGNtRjBhVzl1SUc1dmRDQndaWEp0YVhSMFpXUUFUbThnYzNWamFDQm1hV3hsSUc5eUlHUnBjbVZqZEc5eWVRQk9ieUJ6ZFdOb0lIQnliMk5sYzNNQVJtbHNaU0JsZUdsemRITUFWbUZzZFdVZ2RHOXZJR3hoY21kbElHWnZjaUJrWVhSaElIUjVjR1VBVG04Z2MzQmhZMlVnYkdWbWRDQnZiaUJrWlhacFkyVUFUM1YwSUc5bUlHMWxiVzl5ZVFCU1pYTnZkWEpqWlNCaWRYTjVBRWx1ZEdWeWNuVndkR1ZrSUhONWMzUmxiU0JqWVd4c0FGSmxjMjkxY21ObElIUmxiWEJ2Y21GeWFXeDVJSFZ1WVhaaGFXeGhZbXhsQUVsdWRtRnNhV1FnYzJWbGF3QkRjbTl6Y3kxa1pYWnBZMlVnYkdsdWF3QlNaV0ZrTFc5dWJIa2dabWxzWlNCemVYTjBaVzBBUkdseVpXTjBiM0o1SUc1dmRDQmxiWEIwZVFCRGIyNXVaV04wYVc5dUlISmxjMlYwSUdKNUlIQmxaWElBVDNCbGNtRjBhVzl1SUhScGJXVmtJRzkxZEFCRGIyNXVaV04wYVc5dUlISmxablZ6WldRQVNHOXpkQ0JwY3lCa2IzZHVBRWh2YzNRZ2FYTWdkVzV5WldGamFHRmliR1VBUVdSa2NtVnpjeUJwYmlCMWMyVUFRbkp2YTJWdUlIQnBjR1VBU1M5UElHVnljbTl5QUU1dklITjFZMmdnWkdWMmFXTmxJRzl5SUdGa1pISmxjM01BUW14dlkyc2daR1YyYVdObElISmxjWFZwY21Wa0FFNXZJSE4xWTJnZ1pHVjJhV05sQUU1dmRDQmhJR1JwY21WamRHOXllUUJKY3lCaElHUnBjbVZqZEc5eWVRQlVaWGgwSUdacGJHVWdZblZ6ZVFCRmVHVmpJR1p2Y20xaGRDQmxjbkp2Y2dCSmJuWmhiR2xrSUdGeVozVnRaVzUwQUVGeVozVnRaVzUwSUd4cGMzUWdkRzl2SUd4dmJtY0FVM2x0WW05c2FXTWdiR2x1YXlCc2IyOXdBRVpwYkdWdVlXMWxJSFJ2YnlCc2IyNW5BRlJ2YnlCdFlXNTVJRzl3Wlc0Z1ptbHNaWE1nYVc0Z2MzbHpkR1Z0QUU1dklHWnBiR1VnWkdWelkzSnBjSFJ2Y25NZ1lYWmhhV3hoWW14bEFFSmhaQ0JtYVd4bElHUmxjMk55YVhCMGIzSUFUbThnWTJocGJHUWdjSEp2WTJWemN3QkNZV1FnWVdSa2NtVnpjd0JHYVd4bElIUnZieUJzWVhKblpRQlViMjhnYldGdWVTQnNhVzVyY3dCT2J5QnNiMk5yY3lCaGRtRnBiR0ZpYkdVQVVtVnpiM1Z5WTJVZ1pHVmhaR3h2WTJzZ2QyOTFiR1FnYjJOamRYSUFVM1JoZEdVZ2JtOTBJSEpsWTI5MlpYSmhZbXhsQUZCeVpYWnBiM1Z6SUc5M2JtVnlJR1JwWldRQVQzQmxjbUYwYVc5dUlHTmhibU5sYkdWa0FFWjFibU4wYVc5dUlHNXZkQ0JwYlhCc1pXMWxiblJsWkFCT2J5QnRaWE56WVdkbElHOW1JR1JsYzJseVpXUWdkSGx3WlFCSlpHVnVkR2xtYVdWeUlISmxiVzkyWldRQVJHVjJhV05sSUc1dmRDQmhJSE4wY21WaGJRQk9ieUJrWVhSaElHRjJZV2xzWVdKc1pRQkVaWFpwWTJVZ2RHbHRaVzkxZEFCUGRYUWdiMllnYzNSeVpXRnRjeUJ5WlhOdmRYSmpaWE1BVEdsdWF5Qm9ZWE1nWW1WbGJpQnpaWFpsY21Wa0FGQnliM1J2WTI5c0lHVnljbTl5QUVKaFpDQnRaWE56WVdkbEFFWnBiR1VnWkdWelkzSnBjSFJ2Y2lCcGJpQmlZV1FnYzNSaGRHVUFUbTkwSUdFZ2MyOWphMlYwQUVSbGMzUnBibUYwYVc5dUlHRmtaSEpsYzNNZ2NtVnhkV2x5WldRQVRXVnpjMkZuWlNCMGIyOGdiR0Z5WjJVQVVISnZkRzlqYjJ3Z2QzSnZibWNnZEhsd1pTQm1iM0lnYzI5amEyVjBBRkJ5YjNSdlkyOXNJRzV2ZENCaGRtRnBiR0ZpYkdVQVVISnZkRzlqYjJ3Z2JtOTBJSE4xY0hCdmNuUmxaQUJUYjJOclpYUWdkSGx3WlNCdWIzUWdjM1Z3Y0c5eWRHVmtBRTV2ZENCemRYQndiM0owWldRQVVISnZkRzlqYjJ3Z1ptRnRhV3g1SUc1dmRDQnpkWEJ3YjNKMFpXUUFRV1JrY21WemN5Qm1ZVzFwYkhrZ2JtOTBJSE4xY0hCdmNuUmxaQ0JpZVNCd2NtOTBiMk52YkFCQlpHUnlaWE56SUc1dmRDQmhkbUZwYkdGaWJHVUFUbVYwZDI5eWF5QnBjeUJrYjNkdUFFNWxkSGR2Y21zZ2RXNXlaV0ZqYUdGaWJHVUFRMjl1Ym1WamRHbHZiaUJ5WlhObGRDQmllU0J1WlhSM2IzSnJBRU52Ym01bFkzUnBiMjRnWVdKdmNuUmxaQUJPYnlCaWRXWm1aWElnYzNCaFkyVWdZWFpoYVd4aFlteGxBRk52WTJ0bGRDQnBjeUJqYjI1dVpXTjBaV1FBVTI5amEyVjBJRzV2ZENCamIyNXVaV04wWldRQVEyRnVibTkwSUhObGJtUWdZV1owWlhJZ2MyOWphMlYwSUhOb2RYUmtiM2R1QUU5d1pYSmhkR2x2YmlCaGJISmxZV1I1SUdsdUlIQnliMmR5WlhOekFFOXdaWEpoZEdsdmJpQnBiaUJ3Y205bmNtVnpjd0JUZEdGc1pTQm1hV3hsSUdoaGJtUnNaUUJTWlcxdmRHVWdTUzlQSUdWeWNtOXlBRkYxYjNSaElHVjRZMlZsWkdWa0FFNXZJRzFsWkdsMWJTQm1iM1Z1WkFCWGNtOXVaeUJ0WldScGRXMGdkSGx3WlFCT2J5Qmxjbkp2Y2lCcGJtWnZjbTFoZEdsdmJnPT0nO1xyXG4gIHZhciBhc21qc0NvZGVGaWxlID0gJyc7XHJcblxyXG4gIGlmICh0eXBlb2YgTW9kdWxlWydsb2NhdGVGaWxlJ10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGlmICghaXNEYXRhVVJJKHdhc21UZXh0RmlsZSkpIHtcclxuICAgICAgd2FzbVRleHRGaWxlID0gTW9kdWxlWydsb2NhdGVGaWxlJ10od2FzbVRleHRGaWxlKTtcclxuICAgIH1cclxuICAgIGlmICghaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSkge1xyXG4gICAgICB3YXNtQmluYXJ5RmlsZSA9IE1vZHVsZVsnbG9jYXRlRmlsZSddKHdhc21CaW5hcnlGaWxlKTtcclxuICAgIH1cclxuICAgIGlmICghaXNEYXRhVVJJKGFzbWpzQ29kZUZpbGUpKSB7XHJcbiAgICAgIGFzbWpzQ29kZUZpbGUgPSBNb2R1bGVbJ2xvY2F0ZUZpbGUnXShhc21qc0NvZGVGaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHV0aWxpdGllc1xyXG5cclxuICB2YXIgd2FzbVBhZ2VTaXplID0gNjQqMTAyNDtcclxuXHJcbiAgdmFyIGluZm8gPSB7XHJcbiAgICAnZ2xvYmFsJzogbnVsbCxcclxuICAgICdlbnYnOiBudWxsLFxyXG4gICAgJ2FzbTJ3YXNtJzogeyAvLyBzcGVjaWFsIGFzbTJ3YXNtIGltcG9ydHNcclxuICAgICAgXCJmNjQtcmVtXCI6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCAlIHk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZGVidWdnZXJcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAncGFyZW50JzogTW9kdWxlIC8vIE1vZHVsZSBpbnNpZGUgd2FzbS1qcy5jcHAgcmVmZXJzIHRvIHdhc20tanMuY3BwOyB0aGlzIGFsbG93cyBhY2Nlc3MgdG8gdGhlIG91dHNpZGUgcHJvZ3JhbS5cclxuICB9O1xyXG5cclxuICB2YXIgZXhwb3J0cyA9IG51bGw7XHJcblxyXG5cclxuICBmdW5jdGlvbiBtZXJnZU1lbW9yeShuZXdCdWZmZXIpIHtcclxuICAgIC8vIFRoZSB3YXNtIGluc3RhbmNlIGNyZWF0ZXMgaXRzIG1lbW9yeS4gQnV0IHN0YXRpYyBpbml0IGNvZGUgbWlnaHQgaGF2ZSB3cml0dGVuIHRvXHJcbiAgICAvLyBidWZmZXIgYWxyZWFkeSwgaW5jbHVkaW5nIHRoZSBtZW0gaW5pdCBmaWxlLCBhbmQgd2UgbXVzdCBjb3B5IGl0IG92ZXIgaW4gYSBwcm9wZXIgbWVyZ2UuXHJcbiAgICAvLyBUT0RPOiBhdm9pZCB0aGlzIGNvcHksIGJ5IGF2b2lkaW5nIHN1Y2ggc3RhdGljIGluaXQgd3JpdGVzXHJcbiAgICAvLyBUT0RPOiBpbiBzaG9ydGVyIHRlcm0sIGp1c3QgY29weSB1cCB0byB0aGUgbGFzdCBzdGF0aWMgaW5pdCB3cml0ZVxyXG4gICAgdmFyIG9sZEJ1ZmZlciA9IE1vZHVsZVsnYnVmZmVyJ107XHJcbiAgICBpZiAobmV3QnVmZmVyLmJ5dGVMZW5ndGggPCBvbGRCdWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ3RoZSBuZXcgYnVmZmVyIGluIG1lcmdlTWVtb3J5IGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXMgb25lLiBpbiBuYXRpdmUgd2FzbSwgd2Ugc2hvdWxkIGdyb3cgbWVtb3J5IGhlcmUnKTtcclxuICAgIH1cclxuICAgIHZhciBvbGRWaWV3ID0gbmV3IEludDhBcnJheShvbGRCdWZmZXIpO1xyXG4gICAgdmFyIG5ld1ZpZXcgPSBuZXcgSW50OEFycmF5KG5ld0J1ZmZlcik7XHJcblxyXG5cclxuICAgIG5ld1ZpZXcuc2V0KG9sZFZpZXcpO1xyXG4gICAgdXBkYXRlR2xvYmFsQnVmZmVyKG5ld0J1ZmZlcik7XHJcbiAgICB1cGRhdGVHbG9iYWxCdWZmZXJWaWV3cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZml4SW1wb3J0cyhpbXBvcnRzKSB7XHJcbiAgICByZXR1cm4gaW1wb3J0cztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJpbmFyeSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChNb2R1bGVbJ3dhc21CaW5hcnknXSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShNb2R1bGVbJ3dhc21CaW5hcnknXSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGJpbmFyeSA9IHRyeVBhcnNlQXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKTtcclxuICAgICAgaWYgKGJpbmFyeSkge1xyXG4gICAgICAgIHJldHVybiBiaW5hcnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKE1vZHVsZVsncmVhZEJpbmFyeSddKSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZHVsZVsncmVhZEJpbmFyeSddKHdhc21CaW5hcnlGaWxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBcIm9uIHRoZSB3ZWIsIHdlIG5lZWQgdGhlIHdhc20gYmluYXJ5IHRvIGJlIHByZWxvYWRlZCBhbmQgc2V0IG9uIE1vZHVsZVsnd2FzbUJpbmFyeSddLiBlbWNjLnB5IHdpbGwgZG8gdGhhdCBmb3IgeW91IHdoZW4gZ2VuZXJhdGluZyBIVE1MIChidXQgbm90IEpTKVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGFib3J0KGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKCkge1xyXG4gICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSB0aGUgYmluYXJ5IHlldCwgYW5kIGhhdmUgdGhlIEZldGNoIGFwaSwgdXNlIHRoYXRcclxuICAgIC8vIGluIHNvbWUgZW52aXJvbm1lbnRzLCBsaWtlIEVsZWN0cm9uJ3MgcmVuZGVyIHByb2Nlc3MsIEZldGNoIGFwaSBtYXkgYmUgcHJlc2VudCwgYnV0IGhhdmUgYSBkaWZmZXJlbnQgY29udGV4dCB0aGFuIGV4cGVjdGVkLCBsZXQncyBvbmx5IHVzZSBpdCBvbiB0aGUgV2ViXHJcbiAgICBpZiAoIU1vZHVsZVsnd2FzbUJpbmFyeSddICYmIChFTlZJUk9OTUVOVF9JU19XRUIgfHwgRU5WSVJPTk1FTlRfSVNfV09SS0VSKSAmJiB0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGZldGNoKHdhc21CaW5hcnlGaWxlLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlWydvayddKSB7XHJcbiAgICAgICAgICB0aHJvdyBcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiICsgd2FzbUJpbmFyeUZpbGUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlWydhcnJheUJ1ZmZlciddKCk7XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0QmluYXJ5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gT3RoZXJ3aXNlLCBnZXRCaW5hcnkgc2hvdWxkIGJlIGFibGUgdG8gZ2V0IGl0IHN5bmNocm9ub3VzbHlcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgcmVzb2x2ZShnZXRCaW5hcnkoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGRvLW1ldGhvZCBmdW5jdGlvbnNcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGRvTmF0aXZlV2FzbShnbG9iYWwsIGVudiwgcHJvdmlkZWRCdWZmZXIpIHtcclxuICAgIGlmICh0eXBlb2YgV2ViQXNzZW1ibHkgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIE1vZHVsZVsncHJpbnRFcnInXSgnbm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBwcmVwYXJlIG1lbW9yeSBpbXBvcnRcclxuICAgIGlmICghKE1vZHVsZVsnd2FzbU1lbW9yeSddIGluc3RhbmNlb2YgV2ViQXNzZW1ibHkuTWVtb3J5KSkge1xyXG4gICAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ25vIG5hdGl2ZSB3YXNtIE1lbW9yeSBpbiB1c2UnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZW52WydtZW1vcnknXSA9IE1vZHVsZVsnd2FzbU1lbW9yeSddO1xyXG4gICAgLy8gTG9hZCB0aGUgd2FzbSBtb2R1bGUgYW5kIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB1c2luZyBuYXRpdmUgc3VwcG9ydCBpbiB0aGUgSlMgZW5naW5lLlxyXG4gICAgaW5mb1snZ2xvYmFsJ10gPSB7XHJcbiAgICAgICdOYU4nOiBOYU4sXHJcbiAgICAgICdJbmZpbml0eSc6IEluZmluaXR5XHJcbiAgICB9O1xyXG4gICAgaW5mb1snZ2xvYmFsLk1hdGgnXSA9IE1hdGg7XHJcbiAgICBpbmZvWydlbnYnXSA9IGVudjtcclxuICAgIC8vIGhhbmRsZSBhIGdlbmVyYXRlZCB3YXNtIGluc3RhbmNlLCByZWNlaXZpbmcgaXRzIGV4cG9ydHMgYW5kXHJcbiAgICAvLyBwZXJmb3JtaW5nIG90aGVyIG5lY2Vzc2FyeSBzZXR1cFxyXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLCBtb2R1bGUpIHtcclxuICAgICAgZXhwb3J0cyA9IGluc3RhbmNlLmV4cG9ydHM7XHJcbiAgICAgIGlmIChleHBvcnRzLm1lbW9yeSkgbWVyZ2VNZW1vcnkoZXhwb3J0cy5tZW1vcnkpO1xyXG4gICAgICBNb2R1bGVbJ2FzbSddID0gZXhwb3J0cztcclxuICAgICAgTW9kdWxlW1widXNpbmdXYXNtXCJdID0gdHJ1ZTtcclxuICAgICAgcmVtb3ZlUnVuRGVwZW5kZW5jeSgnd2FzbS1pbnN0YW50aWF0ZScpO1xyXG4gICAgfVxyXG4gICAgYWRkUnVuRGVwZW5kZW5jeSgnd2FzbS1pbnN0YW50aWF0ZScpO1xyXG5cclxuICAgIC8vIFVzZXIgc2hlbGwgcGFnZXMgY2FuIHdyaXRlIHRoZWlyIG93biBNb2R1bGUuaW5zdGFudGlhdGVXYXNtID0gZnVuY3Rpb24oaW1wb3J0cywgc3VjY2Vzc0NhbGxiYWNrKSBjYWxsYmFja1xyXG4gICAgLy8gdG8gbWFudWFsbHkgaW5zdGFudGlhdGUgdGhlIFdhc20gbW9kdWxlIHRoZW1zZWx2ZXMuIFRoaXMgYWxsb3dzIHBhZ2VzIHRvIHJ1biB0aGUgaW5zdGFudGlhdGlvbiBwYXJhbGxlbFxyXG4gICAgLy8gdG8gYW55IG90aGVyIGFzeW5jIHN0YXJ0dXAgYWN0aW9ucyB0aGV5IGFyZSBwZXJmb3JtaW5nLlxyXG4gICAgaWYgKE1vZHVsZVsnaW5zdGFudGlhdGVXYXNtJ10pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTW9kdWxlWydpbnN0YW50aWF0ZVdhc20nXShpbmZvLCByZWNlaXZlSW5zdGFuY2UpO1xyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBNb2R1bGVbJ3ByaW50RXJyJ10oJ01vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICcgKyBlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3luYyBjb21waWxhdGlvbiBjYW4gYmUgY29uZnVzaW5nIHdoZW4gYW4gZXJyb3Igb24gdGhlIHBhZ2Ugb3ZlcndyaXRlcyBNb2R1bGVcclxuICAgIC8vIChmb3IgZXhhbXBsZSwgaWYgdGhlIG9yZGVyIG9mIGVsZW1lbnRzIGlzIHdyb25nLCBhbmQgdGhlIG9uZSBkZWZpbmluZyBNb2R1bGUgaXNcclxuICAgIC8vIGxhdGVyKSwgc28gd2Ugc2F2ZSBNb2R1bGUgYW5kIGNoZWNrIGl0IGxhdGVyLlxyXG4gICAgdmFyIHRydWVNb2R1bGUgPSBNb2R1bGU7XHJcbiAgICBmdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGVkU291cmNlKG91dHB1dCkge1xyXG4gICAgICAvLyAnb3V0cHV0JyBpcyBhIFdlYkFzc2VtYmx5SW5zdGFudGlhdGVkU291cmNlIG9iamVjdCB3aGljaCBoYXMgYm90aCB0aGUgbW9kdWxlIGFuZCBpbnN0YW5jZS5cclxuICAgICAgLy8gcmVjZWl2ZUluc3RhbmNlKCkgd2lsbCBzd2FwIGluIHRoZSBleHBvcnRzICh0byBNb2R1bGUuYXNtKSBzbyB0aGV5IGNhbiBiZSBjYWxsZWRcclxuICAgICAgYXNzZXJ0KE1vZHVsZSA9PT0gdHJ1ZU1vZHVsZSwgJ3RoZSBNb2R1bGUgb2JqZWN0IHNob3VsZCBub3QgYmUgcmVwbGFjZWQgZHVyaW5nIGFzeW5jIGNvbXBpbGF0aW9uIC0gcGVyaGFwcyB0aGUgb3JkZXIgb2YgSFRNTCBlbGVtZW50cyBpcyB3cm9uZz8nKTtcclxuICAgICAgdHJ1ZU1vZHVsZSA9IG51bGw7XHJcbiAgICAgIHJlY2VpdmVJbnN0YW5jZShvdXRwdXRbJ2luc3RhbmNlJ10sIG91dHB1dFsnbW9kdWxlJ10pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlcikge1xyXG4gICAgICBnZXRCaW5hcnlQcm9taXNlKCkudGhlbihmdW5jdGlvbihiaW5hcnkpIHtcclxuICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LCBpbmZvKTtcclxuICAgICAgfSkudGhlbihyZWNlaXZlcikuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgTW9kdWxlWydwcmludEVyciddKCdmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAnICsgcmVhc29uKTtcclxuICAgICAgICBhYm9ydChyZWFzb24pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFByZWZlciBzdHJlYW1pbmcgaW5zdGFudGlhdGlvbiBpZiBhdmFpbGFibGUuXHJcbiAgICBpZiAoIU1vZHVsZVsnd2FzbUJpbmFyeSddICYmXHJcbiAgICAgICAgdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgICAgIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkgJiZcclxuICAgICAgICB0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcoZmV0Y2god2FzbUJpbmFyeUZpbGUsIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSksIGluZm8pXHJcbiAgICAgICAgLnRoZW4ocmVjZWl2ZUluc3RhbnRpYXRlZFNvdXJjZSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAvLyBXZSBleHBlY3QgdGhlIG1vc3QgY29tbW9uIGZhaWx1cmUgY2F1c2UgdG8gYmUgYSBiYWQgTUlNRSB0eXBlIGZvciB0aGUgYmluYXJ5LFxyXG4gICAgICAgICAgLy8gaW4gd2hpY2ggY2FzZSBmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiBzaG91bGQgd29yay5cclxuICAgICAgICAgIE1vZHVsZVsncHJpbnRFcnInXSgnd2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICcgKyByZWFzb24pO1xyXG4gICAgICAgICAgTW9kdWxlWydwcmludEVyciddKCdmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbicpO1xyXG4gICAgICAgICAgaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihyZWNlaXZlSW5zdGFudGlhdGVkU291cmNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIocmVjZWl2ZUluc3RhbnRpYXRlZFNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307IC8vIG5vIGV4cG9ydHMgeWV0OyB3ZSdsbCBmaWxsIHRoZW0gaW4gbGF0ZXJcclxuICB9XHJcblxyXG5cclxuICAvLyBXZSBtYXkgaGF2ZSBhIHByZWxvYWRlZCB2YWx1ZSBpbiBNb2R1bGUuYXNtLCBzYXZlIGl0XHJcbiAgTW9kdWxlWydhc21QcmVsb2FkJ10gPSBNb2R1bGVbJ2FzbSddO1xyXG5cclxuICAvLyBNZW1vcnkgZ3Jvd3RoIGludGVncmF0aW9uIGNvZGVcclxuXHJcbiAgdmFyIGFzbWpzUmVhbGxvY0J1ZmZlciA9IE1vZHVsZVsncmVhbGxvY0J1ZmZlciddO1xyXG5cclxuICB2YXIgd2FzbVJlYWxsb2NCdWZmZXIgPSBmdW5jdGlvbihzaXplKSB7XHJcbiAgICB2YXIgUEFHRV9NVUxUSVBMRSA9IE1vZHVsZVtcInVzaW5nV2FzbVwiXSA/IFdBU01fUEFHRV9TSVpFIDogQVNNSlNfUEFHRV9TSVpFOyAvLyBJbiB3YXNtLCBoZWFwIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0S0IuIEluIGFzbS5qcywgdGhleSBuZWVkIHRvIGJlIG11bHRpcGxlcyBvZiAxNk1CLlxyXG4gICAgc2l6ZSA9IGFsaWduVXAoc2l6ZSwgUEFHRV9NVUxUSVBMRSk7IC8vIHJvdW5kIHVwIHRvIHdhc20gcGFnZSBzaXplXHJcbiAgICB2YXIgb2xkID0gTW9kdWxlWydidWZmZXInXTtcclxuICAgIHZhciBvbGRTaXplID0gb2xkLmJ5dGVMZW5ndGg7XHJcbiAgICBpZiAoTW9kdWxlW1widXNpbmdXYXNtXCJdKSB7XHJcbiAgICAgIC8vIG5hdGl2ZSB3YXNtIHN1cHBvcnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gTW9kdWxlWyd3YXNtTWVtb3J5J10uZ3Jvdygoc2l6ZSAtIG9sZFNpemUpIC8gd2FzbVBhZ2VTaXplKTsgLy8gLmdyb3coKSB0YWtlcyBhIGRlbHRhIGNvbXBhcmVkIHRvIHRoZSBwcmV2aW91cyBzaXplXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gKC0xIHwgMCkpIHtcclxuICAgICAgICAgIC8vIHN1Y2Nlc3MgaW4gbmF0aXZlIHdhc20gbWVtb3J5IGdyb3d0aCwgZ2V0IHRoZSBidWZmZXIgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgICAgICByZXR1cm4gTW9kdWxlWydidWZmZXInXSA9IE1vZHVsZVsnd2FzbU1lbW9yeSddLmJ1ZmZlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdNb2R1bGUucmVhbGxvY0J1ZmZlcjogQXR0ZW1wdGVkIHRvIGdyb3cgZnJvbSAnICsgb2xkU2l6ZSAgKyAnIGJ5dGVzIHRvICcgKyBzaXplICsgJyBieXRlcywgYnV0IGdvdCBlcnJvcjogJyArIGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kdWxlWydyZWFsbG9jQnVmZmVyJ10gPSBmdW5jdGlvbihzaXplKSB7XHJcbiAgICBpZiAoZmluYWxNZXRob2QgPT09ICdhc21qcycpIHtcclxuICAgICAgcmV0dXJuIGFzbWpzUmVhbGxvY0J1ZmZlcihzaXplKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB3YXNtUmVhbGxvY0J1ZmZlcihzaXplKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyB3ZSBtYXkgdHJ5IG1vcmUgdGhhbiBvbmU7IHRoaXMgaXMgdGhlIGZpbmFsIG9uZSwgdGhhdCB3b3JrZWQgYW5kIHdlIGFyZSB1c2luZ1xyXG4gIHZhciBmaW5hbE1ldGhvZCA9ICcnO1xyXG5cclxuICAvLyBQcm92aWRlIGFuIFwiYXNtLmpzIGZ1bmN0aW9uXCIgZm9yIHRoZSBhcHBsaWNhdGlvbiwgY2FsbGVkIHRvIFwibGlua1wiIHRoZSBhc20uanMgbW9kdWxlLiBXZSBpbnN0YW50aWF0ZVxyXG4gIC8vIHRoZSB3YXNtIG1vZHVsZSBhdCB0aGF0IHRpbWUsIGFuZCBpdCByZWNlaXZlcyBpbXBvcnRzIGFuZCBwcm92aWRlcyBleHBvcnRzIGFuZCBzbyBmb3J0aCwgdGhlIGFwcFxyXG4gIC8vIGRvZXNuJ3QgbmVlZCB0byBjYXJlIHRoYXQgaXQgaXMgd2FzbSBvciBvbHlmaWxsZWQgd2FzbSBvciBhc20uanMuXHJcblxyXG4gIE1vZHVsZVsnYXNtJ10gPSBmdW5jdGlvbihnbG9iYWwsIGVudiwgcHJvdmlkZWRCdWZmZXIpIHtcclxuICAgIGVudiA9IGZpeEltcG9ydHMoZW52KTtcclxuXHJcbiAgICAvLyBpbXBvcnQgdGFibGVcclxuICAgIGlmICghZW52Wyd0YWJsZSddKSB7XHJcbiAgICAgIHZhciBUQUJMRV9TSVpFID0gTW9kdWxlWyd3YXNtVGFibGVTaXplJ107XHJcbiAgICAgIGlmIChUQUJMRV9TSVpFID09PSB1bmRlZmluZWQpIFRBQkxFX1NJWkUgPSAxMDI0OyAvLyB3b3JrcyBpbiBiaW5hcnllbiBpbnRlcnByZXRlciBhdCBsZWFzdFxyXG4gICAgICB2YXIgTUFYX1RBQkxFX1NJWkUgPSBNb2R1bGVbJ3dhc21NYXhUYWJsZVNpemUnXTtcclxuICAgICAgaWYgKHR5cGVvZiBXZWJBc3NlbWJseSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIFdlYkFzc2VtYmx5LlRhYmxlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKE1BWF9UQUJMRV9TSVpFICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGVudlsndGFibGUnXSA9IG5ldyBXZWJBc3NlbWJseS5UYWJsZSh7ICdpbml0aWFsJzogVEFCTEVfU0laRSwgJ21heGltdW0nOiBNQVhfVEFCTEVfU0laRSwgJ2VsZW1lbnQnOiAnYW55ZnVuYycgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVudlsndGFibGUnXSA9IG5ldyBXZWJBc3NlbWJseS5UYWJsZSh7ICdpbml0aWFsJzogVEFCTEVfU0laRSwgZWxlbWVudDogJ2FueWZ1bmMnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnZbJ3RhYmxlJ10gPSBuZXcgQXJyYXkoVEFCTEVfU0laRSk7IC8vIHdvcmtzIGluIGJpbmFyeWVuIGludGVycHJldGVyIGF0IGxlYXN0XHJcbiAgICAgIH1cclxuICAgICAgTW9kdWxlWyd3YXNtVGFibGUnXSA9IGVudlsndGFibGUnXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVudlsnbWVtb3J5QmFzZSddKSB7XHJcbiAgICAgIGVudlsnbWVtb3J5QmFzZSddID0gTW9kdWxlWydTVEFUSUNfQkFTRSddOyAvLyB0ZWxsIHRoZSBtZW1vcnkgc2VnbWVudHMgd2hlcmUgdG8gcGxhY2UgdGhlbXNlbHZlc1xyXG4gICAgfVxyXG4gICAgaWYgKCFlbnZbJ3RhYmxlQmFzZSddKSB7XHJcbiAgICAgIGVudlsndGFibGVCYXNlJ10gPSAwOyAvLyB0YWJsZSBzdGFydHMgYXQgMCBieSBkZWZhdWx0LCBpbiBkeW5hbWljIGxpbmtpbmcgdGhpcyB3aWxsIGNoYW5nZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRyeSB0aGUgbWV0aG9kcy4gZWFjaCBzaG91bGQgcmV0dXJuIHRoZSBleHBvcnRzIGlmIGl0IHN1Y2NlZWRlZFxyXG5cclxuICAgIHZhciBleHBvcnRzO1xyXG4gICAgZXhwb3J0cyA9IGRvTmF0aXZlV2FzbShnbG9iYWwsIGVudiwgcHJvdmlkZWRCdWZmZXIpO1xyXG5cclxuICAgIGlmICghZXhwb3J0cykgYWJvcnQoJ25vIGJpbmFyeWVuIG1ldGhvZCBzdWNjZWVkZWQuIGNvbnNpZGVyIGVuYWJsaW5nIG1vcmUgb3B0aW9ucywgbGlrZSBpbnRlcnByZXRpbmcsIGlmIHlvdSB3YW50IHRoYXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlwa2VuL2Vtc2NyaXB0ZW4vd2lraS9XZWJBc3NlbWJseSNiaW5hcnllbi1tZXRob2RzJyk7XHJcblxyXG5cclxuICAgIHJldHVybiBleHBvcnRzO1xyXG4gIH07XHJcblxyXG4gIHZhciBtZXRob2RIYW5kbGVyID0gTW9kdWxlWydhc20nXTsgLy8gbm90ZSBvdXIgbWV0aG9kIGhhbmRsZXIsIGFzIHdlIG1heSBtb2RpZnkgTW9kdWxlWydhc20nXSBsYXRlclxyXG59XHJcblxyXG5pbnRlZ3JhdGVXYXNtSlMoKTtcclxuXHJcbi8vID09PSBCb2R5ID09PVxyXG5cclxudmFyIEFTTV9DT05TVFMgPSBbXTtcclxuXHJcblxyXG5cclxuXHJcblNUQVRJQ19CQVNFID0gR0xPQkFMX0JBU0U7XHJcblxyXG5TVEFUSUNUT1AgPSBTVEFUSUNfQkFTRSArIDk4ODg7XHJcbi8qIGdsb2JhbCBpbml0aWFsaXplcnMgKi8gIF9fQVRJTklUX18ucHVzaCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIFNUQVRJQ19CVU1QID0gOTg4ODtcclxuTW9kdWxlW1wiU1RBVElDX0JBU0VcIl0gPSBTVEFUSUNfQkFTRTtcclxuTW9kdWxlW1wiU1RBVElDX0JVTVBcIl0gPSBTVEFUSUNfQlVNUDtcclxuXHJcbi8qIG5vIG1lbW9yeSBpbml0aWFsaXplciAqL1xyXG52YXIgdGVtcERvdWJsZVB0ciA9IFNUQVRJQ1RPUDsgU1RBVElDVE9QICs9IDE2O1xyXG5cclxuYXNzZXJ0KHRlbXBEb3VibGVQdHIgJSA4ID09IDApO1xyXG5cclxuZnVuY3Rpb24gY29weVRlbXBGbG9hdChwdHIpIHsgLy8gZnVuY3Rpb25zLCBiZWNhdXNlIGlubGluaW5nIHRoaXMgY29kZSBpbmNyZWFzZXMgY29kZSBzaXplIHRvbyBtdWNoXHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHJdID0gSEVBUDhbcHRyXTtcclxuXHJcbiAgSEVBUDhbdGVtcERvdWJsZVB0cisxXSA9IEhFQVA4W3B0cisxXTtcclxuXHJcbiAgSEVBUDhbdGVtcERvdWJsZVB0cisyXSA9IEhFQVA4W3B0cisyXTtcclxuXHJcbiAgSEVBUDhbdGVtcERvdWJsZVB0ciszXSA9IEhFQVA4W3B0ciszXTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUZW1wRG91YmxlKHB0cikge1xyXG5cclxuICBIRUFQOFt0ZW1wRG91YmxlUHRyXSA9IEhFQVA4W3B0cl07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrMV0gPSBIRUFQOFtwdHIrMV07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrMl0gPSBIRUFQOFtwdHIrMl07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrM10gPSBIRUFQOFtwdHIrM107XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrNF0gPSBIRUFQOFtwdHIrNF07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrNV0gPSBIRUFQOFtwdHIrNV07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrNl0gPSBIRUFQOFtwdHIrNl07XHJcblxyXG4gIEhFQVA4W3RlbXBEb3VibGVQdHIrN10gPSBIRUFQOFtwdHIrN107XHJcblxyXG59XHJcblxyXG4vLyB7e1BSRV9MSUJSQVJZfX1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIF9fX2xvY2soKSB7fVxyXG5cclxuICBcclxuICB2YXIgU1lTQ0FMTFM9e3ZhcmFyZ3M6MCxnZXQ6ZnVuY3Rpb24gKHZhcmFyZ3MpIHtcclxuICAgICAgICBTWVNDQUxMUy52YXJhcmdzICs9IDQ7XHJcbiAgICAgICAgdmFyIHJldCA9IEhFQVAzMlsoKChTWVNDQUxMUy52YXJhcmdzKS0oNCkpPj4yKV07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgfSxnZXRTdHI6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXQgPSBQb2ludGVyX3N0cmluZ2lmeShTWVNDQUxMUy5nZXQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgfSxnZXQ2NDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvdyA9IFNZU0NBTExTLmdldCgpLCBoaWdoID0gU1lTQ0FMTFMuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGxvdyA+PSAwKSBhc3NlcnQoaGlnaCA9PT0gMCk7XHJcbiAgICAgICAgZWxzZSBhc3NlcnQoaGlnaCA9PT0gLTEpO1xyXG4gICAgICAgIHJldHVybiBsb3c7XHJcbiAgICAgIH0sZ2V0WmVybzpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXNzZXJ0KFNZU0NBTExTLmdldCgpID09PSAwKTtcclxuICAgICAgfX07ZnVuY3Rpb24gX19fc3lzY2FsbDE0MCh3aGljaCwgdmFyYXJncykge1NZU0NBTExTLnZhcmFyZ3MgPSB2YXJhcmdzO1xyXG4gIHRyeSB7XHJcbiAgIC8vIGxsc2Vla1xyXG4gICAgICB2YXIgc3RyZWFtID0gU1lTQ0FMTFMuZ2V0U3RyZWFtRnJvbUZEKCksIG9mZnNldF9oaWdoID0gU1lTQ0FMTFMuZ2V0KCksIG9mZnNldF9sb3cgPSBTWVNDQUxMUy5nZXQoKSwgcmVzdWx0ID0gU1lTQ0FMTFMuZ2V0KCksIHdoZW5jZSA9IFNZU0NBTExTLmdldCgpO1xyXG4gICAgICAvLyBOT1RFOiBvZmZzZXRfaGlnaCBpcyB1bnVzZWQgLSBFbXNjcmlwdGVuJ3Mgb2ZmX3QgaXMgMzItYml0XHJcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXRfbG93O1xyXG4gICAgICBGUy5sbHNlZWsoc3RyZWFtLCBvZmZzZXQsIHdoZW5jZSk7XHJcbiAgICAgIEhFQVAzMlsoKHJlc3VsdCk+PjIpXT1zdHJlYW0ucG9zaXRpb247XHJcbiAgICAgIGlmIChzdHJlYW0uZ2V0ZGVudHMgJiYgb2Zmc2V0ID09PSAwICYmIHdoZW5jZSA9PT0gMCkgc3RyZWFtLmdldGRlbnRzID0gbnVsbDsgLy8gcmVzZXQgcmVhZGRpciBzdGF0ZVxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmICh0eXBlb2YgRlMgPT09ICd1bmRlZmluZWQnIHx8ICEoZSBpbnN0YW5jZW9mIEZTLkVycm5vRXJyb3IpKSBhYm9ydChlKTtcclxuICAgIHJldHVybiAtZS5lcnJubztcclxuICB9XHJcbiAgfVxyXG5cclxuICBcclxuICBmdW5jdGlvbiBmbHVzaF9OT19GSUxFU1lTVEVNKCkge1xyXG4gICAgICAvLyBmbHVzaCBhbnl0aGluZyByZW1haW5pbmcgaW4gdGhlIGJ1ZmZlcnMgZHVyaW5nIHNodXRkb3duXHJcbiAgICAgIHZhciBmZmx1c2ggPSBNb2R1bGVbXCJfZmZsdXNoXCJdO1xyXG4gICAgICBpZiAoZmZsdXNoKSBmZmx1c2goMCk7XHJcbiAgICAgIHZhciBwcmludENoYXIgPSBfX19zeXNjYWxsMTQ2LnByaW50Q2hhcjtcclxuICAgICAgaWYgKCFwcmludENoYXIpIHJldHVybjtcclxuICAgICAgdmFyIGJ1ZmZlcnMgPSBfX19zeXNjYWxsMTQ2LmJ1ZmZlcnM7XHJcbiAgICAgIGlmIChidWZmZXJzWzFdLmxlbmd0aCkgcHJpbnRDaGFyKDEsIDEwKTtcclxuICAgICAgaWYgKGJ1ZmZlcnNbMl0ubGVuZ3RoKSBwcmludENoYXIoMiwgMTApO1xyXG4gICAgfWZ1bmN0aW9uIF9fX3N5c2NhbGwxNDYod2hpY2gsIHZhcmFyZ3MpIHtTWVNDQUxMUy52YXJhcmdzID0gdmFyYXJncztcclxuICB0cnkge1xyXG4gICAvLyB3cml0ZXZcclxuICAgICAgLy8gaGFjayB0byBzdXBwb3J0IHByaW50ZiBpbiBOT19GSUxFU1lTVEVNXHJcbiAgICAgIHZhciBzdHJlYW0gPSBTWVNDQUxMUy5nZXQoKSwgaW92ID0gU1lTQ0FMTFMuZ2V0KCksIGlvdmNudCA9IFNZU0NBTExTLmdldCgpO1xyXG4gICAgICB2YXIgcmV0ID0gMDtcclxuICAgICAgaWYgKCFfX19zeXNjYWxsMTQ2LmJ1ZmZlcnMpIHtcclxuICAgICAgICBfX19zeXNjYWxsMTQ2LmJ1ZmZlcnMgPSBbbnVsbCwgW10sIFtdXTsgLy8gMSA9PiBzdGRvdXQsIDIgPT4gc3RkZXJyXHJcbiAgICAgICAgX19fc3lzY2FsbDE0Ni5wcmludENoYXIgPSBmdW5jdGlvbihzdHJlYW0sIGN1cnIpIHtcclxuICAgICAgICAgIHZhciBidWZmZXIgPSBfX19zeXNjYWxsMTQ2LmJ1ZmZlcnNbc3RyZWFtXTtcclxuICAgICAgICAgIGFzc2VydChidWZmZXIpO1xyXG4gICAgICAgICAgaWYgKGN1cnIgPT09IDAgfHwgY3VyciA9PT0gMTApIHtcclxuICAgICAgICAgICAgKHN0cmVhbSA9PT0gMSA/IE1vZHVsZVsncHJpbnQnXSA6IE1vZHVsZVsncHJpbnRFcnInXSkoVVRGOEFycmF5VG9TdHJpbmcoYnVmZmVyLCAwKSk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1c2goY3Vycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlvdmNudDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHB0ciA9IEhFQVAzMlsoKChpb3YpKyhpKjgpKT4+MildO1xyXG4gICAgICAgIHZhciBsZW4gPSBIRUFQMzJbKCgoaW92KSsoaSo4ICsgNCkpPj4yKV07XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47IGorKykge1xyXG4gICAgICAgICAgX19fc3lzY2FsbDE0Ni5wcmludENoYXIoc3RyZWFtLCBIRUFQVThbcHRyK2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0ICs9IGxlbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKHR5cGVvZiBGUyA9PT0gJ3VuZGVmaW5lZCcgfHwgIShlIGluc3RhbmNlb2YgRlMuRXJybm9FcnJvcikpIGFib3J0KGUpO1xyXG4gICAgcmV0dXJuIC1lLmVycm5vO1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9fX3N5c2NhbGw1NCh3aGljaCwgdmFyYXJncykge1NZU0NBTExTLnZhcmFyZ3MgPSB2YXJhcmdzO1xyXG4gIHRyeSB7XHJcbiAgIC8vIGlvY3RsXHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKHR5cGVvZiBGUyA9PT0gJ3VuZGVmaW5lZCcgfHwgIShlIGluc3RhbmNlb2YgRlMuRXJybm9FcnJvcikpIGFib3J0KGUpO1xyXG4gICAgcmV0dXJuIC1lLmVycm5vO1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9fX3N5c2NhbGw2KHdoaWNoLCB2YXJhcmdzKSB7U1lTQ0FMTFMudmFyYXJncyA9IHZhcmFyZ3M7XHJcbiAgdHJ5IHtcclxuICAgLy8gY2xvc2VcclxuICAgICAgdmFyIHN0cmVhbSA9IFNZU0NBTExTLmdldFN0cmVhbUZyb21GRCgpO1xyXG4gICAgICBGUy5jbG9zZShzdHJlYW0pO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmICh0eXBlb2YgRlMgPT09ICd1bmRlZmluZWQnIHx8ICEoZSBpbnN0YW5jZW9mIEZTLkVycm5vRXJyb3IpKSBhYm9ydChlKTtcclxuICAgIHJldHVybiAtZS5lcnJubztcclxuICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfX191bmxvY2soKSB7fVxyXG5cclxuICBmdW5jdGlvbiBfZW1zY3JpcHRlbl9oYXNfdGhyZWFkaW5nX3N1cHBvcnQoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gIFxyXG4gIHZhciBjdHR6X2k4ID0gYWxsb2NhdGUoWzgsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNCwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw1LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNiwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw0LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDUsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNCwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw3LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNSwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw0LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDYsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDAsNCwwLDEsMCwyLDAsMSwwLDMsMCwxLDAsMiwwLDEsMCw1LDAsMSwwLDIsMCwxLDAsMywwLDEsMCwyLDAsMSwwLDQsMCwxLDAsMiwwLDEsMCwzLDAsMSwwLDIsMCwxLDBdLCBcImk4XCIsIEFMTE9DX1NUQVRJQyk7ZnVuY3Rpb24gX2xsdm1fY3R0el9pMzIoeCkge1xyXG4gICAgICB4ID0geHwwO1xyXG4gICAgICB2YXIgcmV0ID0gMDtcclxuICAgICAgcmV0ID0gKChIRUFQOFsoKChjdHR6X2k4KSsoeCAmIDB4ZmYpKT4+MCldKXwwKTtcclxuICAgICAgaWYgKChyZXR8MCkgPCA4KSByZXR1cm4gcmV0fDA7XHJcbiAgICAgIHJldCA9ICgoSEVBUDhbKCgoY3R0el9pOCkrKCh4ID4+IDgpJjB4ZmYpKT4+MCldKXwwKTtcclxuICAgICAgaWYgKChyZXR8MCkgPCA4KSByZXR1cm4gKHJldCArIDgpfDA7XHJcbiAgICAgIHJldCA9ICgoSEVBUDhbKCgoY3R0el9pOCkrKCh4ID4+IDE2KSYweGZmKSk+PjApXSl8MCk7XHJcbiAgICAgIGlmICgocmV0fDApIDwgOCkgcmV0dXJuIChyZXQgKyAxNil8MDtcclxuICAgICAgcmV0dXJuICgoKEhFQVA4WygoKGN0dHpfaTgpKyh4ID4+PiAyNCkpPj4wKV0pfDApICsgMjQpfDA7XHJcbiAgICB9ZnVuY3Rpb24gX2xsdm1fY3R0el9pNjQobCwgaCkge1xyXG4gICAgICB2YXIgcmV0ID0gX2xsdm1fY3R0el9pMzIobCk7XHJcbiAgICAgIGlmIChyZXQgPT0gMzIpIHJldCArPSBfbGx2bV9jdHR6X2kzMihoKTtcclxuICAgICAgcmV0dXJuICgoc2V0VGVtcFJldDAoMCkscmV0KXwwKTtcclxuICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gX2xsdm1fc3RhY2tyZXN0b3JlKHApIHtcclxuICAgICAgdmFyIHNlbGYgPSBfbGx2bV9zdGFja3NhdmU7XHJcbiAgICAgIHZhciByZXQgPSBzZWxmLkxMVk1fU0FWRURTVEFDS1NbcF07XHJcbiAgICAgIHNlbGYuTExWTV9TQVZFRFNUQUNLUy5zcGxpY2UocCwgMSk7XHJcbiAgICAgIHN0YWNrUmVzdG9yZShyZXQpO1xyXG4gICAgfVxyXG5cclxuICBmdW5jdGlvbiBfbGx2bV9zdGFja3NhdmUoKSB7XHJcbiAgICAgIHZhciBzZWxmID0gX2xsdm1fc3RhY2tzYXZlO1xyXG4gICAgICBpZiAoIXNlbGYuTExWTV9TQVZFRFNUQUNLUykge1xyXG4gICAgICAgIHNlbGYuTExWTV9TQVZFRFNUQUNLUyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYuTExWTV9TQVZFRFNUQUNLUy5wdXNoKHN0YWNrU2F2ZSgpKTtcclxuICAgICAgcmV0dXJuIHNlbGYuTExWTV9TQVZFRFNUQUNLUy5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LCBzcmMsIG51bSkge1xyXG4gICAgICBIRUFQVTguc2V0KEhFQVBVOC5zdWJhcnJheShzcmMsIHNyYytudW0pLCBkZXN0KTtcclxuICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9IFxyXG5cclxuICAgXHJcblxyXG4gIGZ1bmN0aW9uIF9wdGhyZWFkX2NyZWF0ZSgpIHtcclxuICAgICAgcmV0dXJuIDExO1xyXG4gICAgfVxyXG5cclxuICBmdW5jdGlvbiBfcHRocmVhZF9qb2luKCkge31cclxuXHJcbiAgZnVuY3Rpb24gX3B0aHJlYWRfbXV0ZXhfaW5pdCgpIHt9XHJcblxyXG4gICBcclxuXHJcbiAgIFxyXG5cclxuICBcclxuICBmdW5jdGlvbiBfX19zZXRFcnJObyh2YWx1ZSkge1xyXG4gICAgICBpZiAoTW9kdWxlWydfX19lcnJub19sb2NhdGlvbiddKSBIRUFQMzJbKChNb2R1bGVbJ19fX2Vycm5vX2xvY2F0aW9uJ10oKSk+PjIpXT12YWx1ZTtcclxuICAgICAgZWxzZSBNb2R1bGUucHJpbnRFcnIoJ2ZhaWxlZCB0byBzZXQgZXJybm8gZnJvbSBKUycpO1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IFxyXG5cclxuICBcclxuICB2YXIgRVJSTk9fQ09ERVM9e0VQRVJNOjEsRU5PRU5UOjIsRVNSQ0g6MyxFSU5UUjo0LEVJTzo1LEVOWElPOjYsRTJCSUc6NyxFTk9FWEVDOjgsRUJBREY6OSxFQ0hJTEQ6MTAsRUFHQUlOOjExLEVXT1VMREJMT0NLOjExLEVOT01FTToxMixFQUNDRVM6MTMsRUZBVUxUOjE0LEVOT1RCTEs6MTUsRUJVU1k6MTYsRUVYSVNUOjE3LEVYREVWOjE4LEVOT0RFVjoxOSxFTk9URElSOjIwLEVJU0RJUjoyMSxFSU5WQUw6MjIsRU5GSUxFOjIzLEVNRklMRToyNCxFTk9UVFk6MjUsRVRYVEJTWToyNixFRkJJRzoyNyxFTk9TUEM6MjgsRVNQSVBFOjI5LEVST0ZTOjMwLEVNTElOSzozMSxFUElQRTozMixFRE9NOjMzLEVSQU5HRTozNCxFTk9NU0c6NDIsRUlEUk06NDMsRUNIUk5HOjQ0LEVMMk5TWU5DOjQ1LEVMM0hMVDo0NixFTDNSU1Q6NDcsRUxOUk5HOjQ4LEVVTkFUQ0g6NDksRU5PQ1NJOjUwLEVMMkhMVDo1MSxFREVBRExLOjM1LEVOT0xDSzozNyxFQkFERTo1MixFQkFEUjo1MyxFWEZVTEw6NTQsRU5PQU5POjU1LEVCQURSUUM6NTYsRUJBRFNMVDo1NyxFREVBRExPQ0s6MzUsRUJGT05UOjU5LEVOT1NUUjo2MCxFTk9EQVRBOjYxLEVUSU1FOjYyLEVOT1NSOjYzLEVOT05FVDo2NCxFTk9QS0c6NjUsRVJFTU9URTo2NixFTk9MSU5LOjY3LEVBRFY6NjgsRVNSTU5UOjY5LEVDT01NOjcwLEVQUk9UTzo3MSxFTVVMVElIT1A6NzIsRURPVERPVDo3MyxFQkFETVNHOjc0LEVOT1RVTklROjc2LEVCQURGRDo3NyxFUkVNQ0hHOjc4LEVMSUJBQ0M6NzksRUxJQkJBRDo4MCxFTElCU0NOOjgxLEVMSUJNQVg6ODIsRUxJQkVYRUM6ODMsRU5PU1lTOjM4LEVOT1RFTVBUWTozOSxFTkFNRVRPT0xPTkc6MzYsRUxPT1A6NDAsRU9QTk9UU1VQUDo5NSxFUEZOT1NVUFBPUlQ6OTYsRUNPTk5SRVNFVDoxMDQsRU5PQlVGUzoxMDUsRUFGTk9TVVBQT1JUOjk3LEVQUk9UT1RZUEU6OTEsRU5PVFNPQ0s6ODgsRU5PUFJPVE9PUFQ6OTIsRVNIVVRET1dOOjEwOCxFQ09OTlJFRlVTRUQ6MTExLEVBRERSSU5VU0U6OTgsRUNPTk5BQk9SVEVEOjEwMyxFTkVUVU5SRUFDSDoxMDEsRU5FVERPV046MTAwLEVUSU1FRE9VVDoxMTAsRUhPU1RET1dOOjExMixFSE9TVFVOUkVBQ0g6MTEzLEVJTlBST0dSRVNTOjExNSxFQUxSRUFEWToxMTQsRURFU1RBRERSUkVROjg5LEVNU0dTSVpFOjkwLEVQUk9UT05PU1VQUE9SVDo5MyxFU09DS1ROT1NVUFBPUlQ6OTQsRUFERFJOT1RBVkFJTDo5OSxFTkVUUkVTRVQ6MTAyLEVJU0NPTk46MTA2LEVOT1RDT05OOjEwNyxFVE9PTUFOWVJFRlM6MTA5LEVVU0VSUzo4NyxFRFFVT1Q6MTIyLEVTVEFMRToxMTYsRU5PVFNVUDo5NSxFTk9NRURJVU06MTIzLEVJTFNFUTo4NCxFT1ZFUkZMT1c6NzUsRUNBTkNFTEVEOjEyNSxFTk9UUkVDT1ZFUkFCTEU6MTMxLEVPV05FUkRFQUQ6MTMwLEVTVFJQSVBFOjg2fTtmdW5jdGlvbiBfc3lzY29uZihuYW1lKSB7XHJcbiAgICAgIC8vIGxvbmcgc3lzY29uZihpbnQgbmFtZSk7XHJcbiAgICAgIC8vIGh0dHA6Ly9wdWJzLm9wZW5ncm91cC5vcmcvb25saW5lcHVicy8wMDk2OTUzOTkvZnVuY3Rpb25zL3N5c2NvbmYuaHRtbFxyXG4gICAgICBzd2l0Y2gobmFtZSkge1xyXG4gICAgICAgIGNhc2UgMzA6IHJldHVybiBQQUdFX1NJWkU7XHJcbiAgICAgICAgY2FzZSA4NTpcclxuICAgICAgICAgIHZhciBtYXhIZWFwU2l6ZSA9IDIqMTAyNCoxMDI0KjEwMjQgLSA2NTUzNjtcclxuICAgICAgICAgIG1heEhlYXBTaXplID0gSEVBUFU4Lmxlbmd0aDtcclxuICAgICAgICAgIHJldHVybiBtYXhIZWFwU2l6ZSAvIFBBR0VfU0laRTtcclxuICAgICAgICBjYXNlIDEzMjpcclxuICAgICAgICBjYXNlIDEzMzpcclxuICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgIGNhc2UgMTM3OlxyXG4gICAgICAgIGNhc2UgMTM4OlxyXG4gICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgY2FzZSAyMzU6XHJcbiAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICBjYXNlIDE3OlxyXG4gICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgIGNhc2UgMTQ5OlxyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICBjYXNlIDIzNjpcclxuICAgICAgICBjYXNlIDE1MzpcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgIGNhc2UgMTU5OlxyXG4gICAgICAgIGNhc2UgMTU0OlxyXG4gICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgY2FzZSA3NzpcclxuICAgICAgICBjYXNlIDc4OlxyXG4gICAgICAgIGNhc2UgMTM5OlxyXG4gICAgICAgIGNhc2UgODA6XHJcbiAgICAgICAgY2FzZSA4MTpcclxuICAgICAgICBjYXNlIDgyOlxyXG4gICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgY2FzZSA2NzpcclxuICAgICAgICBjYXNlIDE2NDpcclxuICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgIGNhc2UgMjk6XHJcbiAgICAgICAgY2FzZSA0NzpcclxuICAgICAgICBjYXNlIDQ4OlxyXG4gICAgICAgIGNhc2UgOTU6XHJcbiAgICAgICAgY2FzZSA1MjpcclxuICAgICAgICBjYXNlIDUxOlxyXG4gICAgICAgIGNhc2UgNDY6XHJcbiAgICAgICAgICByZXR1cm4gMjAwODA5O1xyXG4gICAgICAgIGNhc2UgNzk6XHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICBjYXNlIDI3OlxyXG4gICAgICAgIGNhc2UgMjQ2OlxyXG4gICAgICAgIGNhc2UgMTI3OlxyXG4gICAgICAgIGNhc2UgMTI4OlxyXG4gICAgICAgIGNhc2UgMjM6XHJcbiAgICAgICAgY2FzZSAyNDpcclxuICAgICAgICBjYXNlIDE2MDpcclxuICAgICAgICBjYXNlIDE2MTpcclxuICAgICAgICBjYXNlIDE4MTpcclxuICAgICAgICBjYXNlIDE4MjpcclxuICAgICAgICBjYXNlIDI0MjpcclxuICAgICAgICBjYXNlIDE4MzpcclxuICAgICAgICBjYXNlIDE4NDpcclxuICAgICAgICBjYXNlIDI0MzpcclxuICAgICAgICBjYXNlIDI0NDpcclxuICAgICAgICBjYXNlIDI0NTpcclxuICAgICAgICBjYXNlIDE2NTpcclxuICAgICAgICBjYXNlIDE3ODpcclxuICAgICAgICBjYXNlIDE3OTpcclxuICAgICAgICBjYXNlIDQ5OlxyXG4gICAgICAgIGNhc2UgNTA6XHJcbiAgICAgICAgY2FzZSAxNjg6XHJcbiAgICAgICAgY2FzZSAxNjk6XHJcbiAgICAgICAgY2FzZSAxNzU6XHJcbiAgICAgICAgY2FzZSAxNzA6XHJcbiAgICAgICAgY2FzZSAxNzE6XHJcbiAgICAgICAgY2FzZSAxNzI6XHJcbiAgICAgICAgY2FzZSA5NzpcclxuICAgICAgICBjYXNlIDc2OlxyXG4gICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgY2FzZSAxNzM6XHJcbiAgICAgICAgY2FzZSAzNTpcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICBjYXNlIDE3NjpcclxuICAgICAgICBjYXNlIDE3NzpcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgY2FzZSAxNTU6XHJcbiAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgIGNhc2UgMTU3OlxyXG4gICAgICAgIGNhc2UgMTI1OlxyXG4gICAgICAgIGNhc2UgMTI2OlxyXG4gICAgICAgIGNhc2UgOTI6XHJcbiAgICAgICAgY2FzZSA5MzpcclxuICAgICAgICBjYXNlIDEyOTpcclxuICAgICAgICBjYXNlIDEzMDpcclxuICAgICAgICBjYXNlIDEzMTpcclxuICAgICAgICBjYXNlIDk0OlxyXG4gICAgICAgIGNhc2UgOTE6XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBjYXNlIDc0OlxyXG4gICAgICAgIGNhc2UgNjA6XHJcbiAgICAgICAgY2FzZSA2OTpcclxuICAgICAgICBjYXNlIDcwOlxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHJldHVybiAxMDI0O1xyXG4gICAgICAgIGNhc2UgMzE6XHJcbiAgICAgICAgY2FzZSA0MjpcclxuICAgICAgICBjYXNlIDcyOlxyXG4gICAgICAgICAgcmV0dXJuIDMyO1xyXG4gICAgICAgIGNhc2UgODc6XHJcbiAgICAgICAgY2FzZSAyNjpcclxuICAgICAgICBjYXNlIDMzOlxyXG4gICAgICAgICAgcmV0dXJuIDIxNDc0ODM2NDc7XHJcbiAgICAgICAgY2FzZSAzNDpcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICByZXR1cm4gNDc4Mzk7XHJcbiAgICAgICAgY2FzZSAzODpcclxuICAgICAgICBjYXNlIDM2OlxyXG4gICAgICAgICAgcmV0dXJuIDk5O1xyXG4gICAgICAgIGNhc2UgNDM6XHJcbiAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgIHJldHVybiAyMDQ4O1xyXG4gICAgICAgIGNhc2UgMDogcmV0dXJuIDIwOTcxNTI7XHJcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gNjU1MzY7XHJcbiAgICAgICAgY2FzZSAyODogcmV0dXJuIDMyNzY4O1xyXG4gICAgICAgIGNhc2UgNDQ6IHJldHVybiAzMjc2NztcclxuICAgICAgICBjYXNlIDc1OiByZXR1cm4gMTYzODQ7XHJcbiAgICAgICAgY2FzZSAzOTogcmV0dXJuIDEwMDA7XHJcbiAgICAgICAgY2FzZSA4OTogcmV0dXJuIDcwMDtcclxuICAgICAgICBjYXNlIDcxOiByZXR1cm4gMjU2O1xyXG4gICAgICAgIGNhc2UgNDA6IHJldHVybiAyNTU7XHJcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gMTAwO1xyXG4gICAgICAgIGNhc2UgMTgwOiByZXR1cm4gNjQ7XHJcbiAgICAgICAgY2FzZSAyNTogcmV0dXJuIDIwO1xyXG4gICAgICAgIGNhc2UgNTogcmV0dXJuIDE2O1xyXG4gICAgICAgIGNhc2UgNjogcmV0dXJuIDY7XHJcbiAgICAgICAgY2FzZSA3MzogcmV0dXJuIDQ7XHJcbiAgICAgICAgY2FzZSA4NDoge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnKSByZXR1cm4gbmF2aWdhdG9yWydoYXJkd2FyZUNvbmN1cnJlbmN5J10gfHwgMTtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBfX19zZXRFcnJObyhFUlJOT19DT0RFUy5FSU5WQUwpO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbkRZTkFNSUNUT1BfUFRSID0gc3RhdGljQWxsb2MoNCk7XHJcblxyXG5TVEFDS19CQVNFID0gU1RBQ0tUT1AgPSBhbGlnbk1lbW9yeShTVEFUSUNUT1ApO1xyXG5cclxuU1RBQ0tfTUFYID0gU1RBQ0tfQkFTRSArIFRPVEFMX1NUQUNLO1xyXG5cclxuRFlOQU1JQ19CQVNFID0gYWxpZ25NZW1vcnkoU1RBQ0tfTUFYKTtcclxuXHJcbkhFQVAzMltEWU5BTUlDVE9QX1BUUj4+Ml0gPSBEWU5BTUlDX0JBU0U7XHJcblxyXG5zdGF0aWNTZWFsZWQgPSB0cnVlOyAvLyBzZWFsIHRoZSBzdGF0aWMgcG9ydGlvbiBvZiBtZW1vcnlcclxuXHJcbmFzc2VydChEWU5BTUlDX0JBU0UgPCBUT1RBTF9NRU1PUlksIFwiVE9UQUxfTUVNT1JZIG5vdCBiaWcgZW5vdWdoIGZvciBzdGFja1wiKTtcclxuXHJcbnZhciBBU1NFUlRJT05TID0gdHJ1ZTtcclxuXHJcbi8qKiBAdHlwZSB7ZnVuY3Rpb24oc3RyaW5nLCBib29sZWFuPSwgbnVtYmVyPSl9ICovXHJcbmZ1bmN0aW9uIGludEFycmF5RnJvbVN0cmluZyhzdHJpbmd5LCBkb250QWRkTnVsbCwgbGVuZ3RoKSB7XHJcbiAgdmFyIGxlbiA9IGxlbmd0aCA+IDAgPyBsZW5ndGggOiBsZW5ndGhCeXRlc1VURjgoc3RyaW5neSkrMTtcclxuICB2YXIgdThhcnJheSA9IG5ldyBBcnJheShsZW4pO1xyXG4gIHZhciBudW1CeXRlc1dyaXR0ZW4gPSBzdHJpbmdUb1VURjhBcnJheShzdHJpbmd5LCB1OGFycmF5LCAwLCB1OGFycmF5Lmxlbmd0aCk7XHJcbiAgaWYgKGRvbnRBZGROdWxsKSB1OGFycmF5Lmxlbmd0aCA9IG51bUJ5dGVzV3JpdHRlbjtcclxuICByZXR1cm4gdThhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50QXJyYXlUb1N0cmluZyhhcnJheSkge1xyXG4gIHZhciByZXQgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY2hyID0gYXJyYXlbaV07XHJcbiAgICBpZiAoY2hyID4gMHhGRikge1xyXG4gICAgICBpZiAoQVNTRVJUSU9OUykge1xyXG4gICAgICAgIGFzc2VydChmYWxzZSwgJ0NoYXJhY3RlciBjb2RlICcgKyBjaHIgKyAnICgnICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpICsgJykgIGF0IG9mZnNldCAnICsgaSArICcgbm90IGluIDB4MDAtMHhGRi4nKTtcclxuICAgICAgfVxyXG4gICAgICBjaHIgJj0gMHhGRjtcclxuICAgIH1cclxuICAgIHJldC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyKSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXQuam9pbignJyk7XHJcbn1cclxuXHJcblxyXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc3Ryb3BoZS9zdHJvcGhlanMvYmxvYi9lMDZkMDI3L3NyYy9wb2x5ZmlsbHMuanMjTDE0OVxyXG5cclxuLy8gVGhpcyBjb2RlIHdhcyB3cml0dGVuIGJ5IFR5bGVyIEFraW5zIGFuZCBoYXMgYmVlbiBwbGFjZWQgaW4gdGhlXHJcbi8vIHB1YmxpYyBkb21haW4uICBJdCB3b3VsZCBiZSBuaWNlIGlmIHlvdSBsZWZ0IHRoaXMgaGVhZGVyIGludGFjdC5cclxuLy8gQmFzZTY0IGNvZGUgZnJvbSBUeWxlciBBa2lucyAtLSBodHRwOi8vcnVta2luLmNvbVxyXG5cclxuLyoqXHJcbiAqIERlY29kZXMgYSBiYXNlNjQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyB0byBkZWNvZGUuXHJcbiAqL1xyXG52YXIgZGVjb2RlQmFzZTY0ID0gdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicgPyBhdG9iIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgdmFyIGtleVN0ciA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcblxyXG4gIHZhciBvdXRwdXQgPSAnJztcclxuICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcclxuICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcclxuICB2YXIgaSA9IDA7XHJcbiAgLy8gcmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBLVosIGEteiwgMC05LCArLCAvLCBvciA9XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgJycpO1xyXG4gIGRvIHtcclxuICAgIGVuYzEgPSBrZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICBlbmMyID0ga2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgZW5jMyA9IGtleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgIGVuYzQgPSBrZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblxyXG4gICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XHJcbiAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XHJcbiAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xyXG5cclxuICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XHJcblxyXG4gICAgaWYgKGVuYzMgIT09IDY0KSB7XHJcbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5jNCAhPT0gNjQpIHtcclxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcclxuICAgIH1cclxuICB9IHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKTtcclxuICByZXR1cm4gb3V0cHV0O1xyXG59O1xyXG5cclxuLy8gQ29udmVydHMgYSBzdHJpbmcgb2YgYmFzZTY0IGludG8gYSBieXRlIGFycmF5LlxyXG4vLyBUaHJvd3MgZXJyb3Igb24gaW52YWxpZCBpbnB1dC5cclxuZnVuY3Rpb24gaW50QXJyYXlGcm9tQmFzZTY0KHMpIHtcclxuICBpZiAodHlwZW9mIEVOVklST05NRU5UX0lTX05PREUgPT09ICdib29sZWFuJyAmJiBFTlZJUk9OTUVOVF9JU19OT0RFKSB7XHJcbiAgICB2YXIgYnVmO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYnVmID0gQnVmZmVyLmZyb20ocywgJ2Jhc2U2NCcpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICBidWYgPSBuZXcgQnVmZmVyKHMsICdiYXNlNjQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHZhciBkZWNvZGVkID0gZGVjb2RlQmFzZTY0KHMpO1xyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZGVjb2RlZC5sZW5ndGgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgZGVjb2RlZC5sZW5ndGggOyArK2kpIHtcclxuICAgICAgYnl0ZXNbaV0gPSBkZWNvZGVkLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZXM7XHJcbiAgfSBjYXRjaCAoXykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb252ZXJ0aW5nIGJhc2U2NCBzdHJpbmcgdG8gYnl0ZXMgZmFpbGVkLicpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSWYgZmlsZW5hbWUgaXMgYSBiYXNlNjQgZGF0YSBVUkksIHBhcnNlcyBhbmQgcmV0dXJucyBkYXRhIChCdWZmZXIgb24gbm9kZSxcclxuLy8gVWludDhBcnJheSBvdGhlcndpc2UpLiBJZiBmaWxlbmFtZSBpcyBub3QgYSBiYXNlNjQgZGF0YSBVUkksIHJldHVybnMgdW5kZWZpbmVkLlxyXG5mdW5jdGlvbiB0cnlQYXJzZUFzRGF0YVVSSShmaWxlbmFtZSkge1xyXG4gIGlmICghaXNEYXRhVVJJKGZpbGVuYW1lKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGludEFycmF5RnJvbUJhc2U2NChmaWxlbmFtZS5zbGljZShkYXRhVVJJUHJlZml4Lmxlbmd0aCkpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG51bGxGdW5jX2lpKHgpIHsgTW9kdWxlW1wicHJpbnRFcnJcIl0oXCJJbnZhbGlkIGZ1bmN0aW9uIHBvaW50ZXIgY2FsbGVkIHdpdGggc2lnbmF0dXJlICdpaScuIFBlcmhhcHMgdGhpcyBpcyBhbiBpbnZhbGlkIHZhbHVlIChlLmcuIGNhdXNlZCBieSBjYWxsaW5nIGEgdmlydHVhbCBtZXRob2Qgb24gYSBOVUxMIHBvaW50ZXIpPyBPciBjYWxsaW5nIGEgZnVuY3Rpb24gd2l0aCBhbiBpbmNvcnJlY3QgdHlwZSwgd2hpY2ggd2lsbCBmYWlsPyAoaXQgaXMgd29ydGggYnVpbGRpbmcgeW91ciBzb3VyY2UgZmlsZXMgd2l0aCAtV2Vycm9yICh3YXJuaW5ncyBhcmUgZXJyb3JzKSwgYXMgd2FybmluZ3MgY2FuIGluZGljYXRlIHVuZGVmaW5lZCBiZWhhdmlvciB3aGljaCBjYW4gY2F1c2UgdGhpcylcIik7ICBNb2R1bGVbXCJwcmludEVyclwiXShcIkJ1aWxkIHdpdGggQVNTRVJUSU9OUz0yIGZvciBtb3JlIGluZm8uXCIpO2Fib3J0KHgpIH1cclxuXHJcbmZ1bmN0aW9uIG51bGxGdW5jX2lpaWkoeCkgeyBNb2R1bGVbXCJwcmludEVyclwiXShcIkludmFsaWQgZnVuY3Rpb24gcG9pbnRlciBjYWxsZWQgd2l0aCBzaWduYXR1cmUgJ2lpaWknLiBQZXJoYXBzIHRoaXMgaXMgYW4gaW52YWxpZCB2YWx1ZSAoZS5nLiBjYXVzZWQgYnkgY2FsbGluZyBhIHZpcnR1YWwgbWV0aG9kIG9uIGEgTlVMTCBwb2ludGVyKT8gT3IgY2FsbGluZyBhIGZ1bmN0aW9uIHdpdGggYW4gaW5jb3JyZWN0IHR5cGUsIHdoaWNoIHdpbGwgZmFpbD8gKGl0IGlzIHdvcnRoIGJ1aWxkaW5nIHlvdXIgc291cmNlIGZpbGVzIHdpdGggLVdlcnJvciAod2FybmluZ3MgYXJlIGVycm9ycyksIGFzIHdhcm5pbmdzIGNhbiBpbmRpY2F0ZSB1bmRlZmluZWQgYmVoYXZpb3Igd2hpY2ggY2FuIGNhdXNlIHRoaXMpXCIpOyAgTW9kdWxlW1wicHJpbnRFcnJcIl0oXCJCdWlsZCB3aXRoIEFTU0VSVElPTlM9MiBmb3IgbW9yZSBpbmZvLlwiKTthYm9ydCh4KSB9XHJcblxyXG5Nb2R1bGVbJ3dhc21UYWJsZVNpemUnXSA9IDE2O1xyXG5cclxuTW9kdWxlWyd3YXNtTWF4VGFibGVTaXplJ10gPSAxNjtcclxuXHJcbmZ1bmN0aW9uIGludm9rZV9paShpbmRleCxhMSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gTW9kdWxlW1wiZHluQ2FsbF9paVwiXShpbmRleCxhMSk7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICBpZiAodHlwZW9mIGUgIT09ICdudW1iZXInICYmIGUgIT09ICdsb25nam1wJykgdGhyb3cgZTtcclxuICAgIE1vZHVsZVtcInNldFRocmV3XCJdKDEsIDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlX2lpaWkoaW5kZXgsYTEsYTIsYTMpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIE1vZHVsZVtcImR5bkNhbGxfaWlpaVwiXShpbmRleCxhMSxhMixhMyk7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICBpZiAodHlwZW9mIGUgIT09ICdudW1iZXInICYmIGUgIT09ICdsb25nam1wJykgdGhyb3cgZTtcclxuICAgIE1vZHVsZVtcInNldFRocmV3XCJdKDEsIDApO1xyXG4gIH1cclxufVxyXG5cclxuTW9kdWxlLmFzbUdsb2JhbEFyZyA9IHt9O1xyXG5cclxuTW9kdWxlLmFzbUxpYnJhcnlBcmcgPSB7IFwiYWJvcnRcIjogYWJvcnQsIFwiYXNzZXJ0XCI6IGFzc2VydCwgXCJlbmxhcmdlTWVtb3J5XCI6IGVubGFyZ2VNZW1vcnksIFwiZ2V0VG90YWxNZW1vcnlcIjogZ2V0VG90YWxNZW1vcnksIFwiYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnlcIjogYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnksIFwiYWJvcnRTdGFja092ZXJmbG93XCI6IGFib3J0U3RhY2tPdmVyZmxvdywgXCJudWxsRnVuY19paVwiOiBudWxsRnVuY19paSwgXCJudWxsRnVuY19paWlpXCI6IG51bGxGdW5jX2lpaWksIFwiaW52b2tlX2lpXCI6IGludm9rZV9paSwgXCJpbnZva2VfaWlpaVwiOiBpbnZva2VfaWlpaSwgXCJfX19sb2NrXCI6IF9fX2xvY2ssIFwiX19fc2V0RXJyTm9cIjogX19fc2V0RXJyTm8sIFwiX19fc3lzY2FsbDE0MFwiOiBfX19zeXNjYWxsMTQwLCBcIl9fX3N5c2NhbGwxNDZcIjogX19fc3lzY2FsbDE0NiwgXCJfX19zeXNjYWxsNTRcIjogX19fc3lzY2FsbDU0LCBcIl9fX3N5c2NhbGw2XCI6IF9fX3N5c2NhbGw2LCBcIl9fX3VubG9ja1wiOiBfX191bmxvY2ssIFwiX2Vtc2NyaXB0ZW5faGFzX3RocmVhZGluZ19zdXBwb3J0XCI6IF9lbXNjcmlwdGVuX2hhc190aHJlYWRpbmdfc3VwcG9ydCwgXCJfZW1zY3JpcHRlbl9tZW1jcHlfYmlnXCI6IF9lbXNjcmlwdGVuX21lbWNweV9iaWcsIFwiX2xsdm1fY3R0el9pMzJcIjogX2xsdm1fY3R0el9pMzIsIFwiX2xsdm1fY3R0el9pNjRcIjogX2xsdm1fY3R0el9pNjQsIFwiX2xsdm1fc3RhY2tyZXN0b3JlXCI6IF9sbHZtX3N0YWNrcmVzdG9yZSwgXCJfbGx2bV9zdGFja3NhdmVcIjogX2xsdm1fc3RhY2tzYXZlLCBcIl9wdGhyZWFkX2NyZWF0ZVwiOiBfcHRocmVhZF9jcmVhdGUsIFwiX3B0aHJlYWRfam9pblwiOiBfcHRocmVhZF9qb2luLCBcIl9wdGhyZWFkX211dGV4X2luaXRcIjogX3B0aHJlYWRfbXV0ZXhfaW5pdCwgXCJfc3lzY29uZlwiOiBfc3lzY29uZiwgXCJmbHVzaF9OT19GSUxFU1lTVEVNXCI6IGZsdXNoX05PX0ZJTEVTWVNURU0sIFwiRFlOQU1JQ1RPUF9QVFJcIjogRFlOQU1JQ1RPUF9QVFIsIFwidGVtcERvdWJsZVB0clwiOiB0ZW1wRG91YmxlUHRyLCBcIkFCT1JUXCI6IEFCT1JULCBcIlNUQUNLVE9QXCI6IFNUQUNLVE9QLCBcIlNUQUNLX01BWFwiOiBTVEFDS19NQVgsIFwiY3R0el9pOFwiOiBjdHR6X2k4IH07XHJcbi8vIEVNU0NSSVBURU5fU1RBUlRfQVNNXHJcbnZhciBhc20gPU1vZHVsZVtcImFzbVwiXS8vIEVNU0NSSVBURU5fRU5EX0FTTVxyXG4oTW9kdWxlLmFzbUdsb2JhbEFyZywgTW9kdWxlLmFzbUxpYnJhcnlBcmcsIGJ1ZmZlcik7XHJcblxyXG52YXIgcmVhbF9fX19lcnJub19sb2NhdGlvbiA9IGFzbVtcIl9fX2Vycm5vX2xvY2F0aW9uXCJdOyBhc21bXCJfX19lcnJub19sb2NhdGlvblwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX19fZXJybm9fbG9jYXRpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX19jY3VybF9wb3cgPSBhc21bXCJfY2N1cmxfcG93XCJdOyBhc21bXCJfY2N1cmxfcG93XCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9fY2N1cmxfcG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fZmZsdXNoID0gYXNtW1wiX2ZmbHVzaFwiXTsgYXNtW1wiX2ZmbHVzaFwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX2ZmbHVzaC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfX2ZyZWUgPSBhc21bXCJfZnJlZVwiXTsgYXNtW1wiX2ZyZWVcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19mcmVlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fbGx2bV9ic3dhcF9pMzIgPSBhc21bXCJfbGx2bV9ic3dhcF9pMzJcIl07IGFzbVtcIl9sbHZtX2Jzd2FwX2kzMlwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX2xsdm1fYnN3YXBfaTMyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9fbWFsbG9jID0gYXNtW1wiX21hbGxvY1wiXTsgYXNtW1wiX21hbGxvY1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfX21hbGxvYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfX3B0aHJlYWRfbXV0ZXhfbG9jayA9IGFzbVtcIl9wdGhyZWFkX211dGV4X2xvY2tcIl07IGFzbVtcIl9wdGhyZWFkX211dGV4X2xvY2tcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX19wdGhyZWFkX211dGV4X2xvY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX19wdGhyZWFkX211dGV4X3VubG9jayA9IGFzbVtcIl9wdGhyZWFkX211dGV4X3VubG9ja1wiXTsgYXNtW1wiX3B0aHJlYWRfbXV0ZXhfdW5sb2NrXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9fcHRocmVhZF9tdXRleF91bmxvY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX19zYnJrID0gYXNtW1wiX3NicmtcIl07IGFzbVtcIl9zYnJrXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9fc2Jyay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfZXN0YWJsaXNoU3RhY2tTcGFjZSA9IGFzbVtcImVzdGFibGlzaFN0YWNrU3BhY2VcIl07IGFzbVtcImVzdGFibGlzaFN0YWNrU3BhY2VcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX2VzdGFibGlzaFN0YWNrU3BhY2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX2dldFRlbXBSZXQwID0gYXNtW1wiZ2V0VGVtcFJldDBcIl07IGFzbVtcImdldFRlbXBSZXQwXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9nZXRUZW1wUmV0MC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxudmFyIHJlYWxfc2V0VGVtcFJldDAgPSBhc21bXCJzZXRUZW1wUmV0MFwiXTsgYXNtW1wic2V0VGVtcFJldDBcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiByZWFsX3NldFRlbXBSZXQwLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9zZXRUaHJldyA9IGFzbVtcInNldFRocmV3XCJdOyBhc21bXCJzZXRUaHJld1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfc2V0VGhyZXcuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbnZhciByZWFsX3N0YWNrQWxsb2MgPSBhc21bXCJzdGFja0FsbG9jXCJdOyBhc21bXCJzdGFja0FsbG9jXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gcmVhbF9zdGFja0FsbG9jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9zdGFja1Jlc3RvcmUgPSBhc21bXCJzdGFja1Jlc3RvcmVcIl07IGFzbVtcInN0YWNrUmVzdG9yZVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfc3RhY2tSZXN0b3JlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG52YXIgcmVhbF9zdGFja1NhdmUgPSBhc21bXCJzdGFja1NhdmVcIl07IGFzbVtcInN0YWNrU2F2ZVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIHJlYWxfc3RhY2tTYXZlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk1vZHVsZVtcImFzbVwiXSA9IGFzbTtcclxudmFyIF9fX2Vycm5vX2xvY2F0aW9uID0gTW9kdWxlW1wiX19fZXJybm9fbG9jYXRpb25cIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfX19lcnJub19sb2NhdGlvblwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfY2N1cmxfcG93ID0gTW9kdWxlW1wiX2NjdXJsX3Bvd1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcIl9jY3VybF9wb3dcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX2ZmbHVzaCA9IE1vZHVsZVtcIl9mZmx1c2hcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfZmZsdXNoXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9mcmVlID0gTW9kdWxlW1wiX2ZyZWVcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfZnJlZVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfbGx2bV9ic3dhcF9pMzIgPSBNb2R1bGVbXCJfbGx2bV9ic3dhcF9pMzJcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfbGx2bV9ic3dhcF9pMzJcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX21hbGxvYyA9IE1vZHVsZVtcIl9tYWxsb2NcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfbWFsbG9jXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9tZW1jcHkgPSBNb2R1bGVbXCJfbWVtY3B5XCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX21lbWNweVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfbWVtc2V0ID0gTW9kdWxlW1wiX21lbXNldFwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcIl9tZW1zZXRcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgX3B0aHJlYWRfbXV0ZXhfbG9jayA9IE1vZHVsZVtcIl9wdGhyZWFkX211dGV4X2xvY2tcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJfcHRocmVhZF9tdXRleF9sb2NrXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIF9wdGhyZWFkX211dGV4X3VubG9jayA9IE1vZHVsZVtcIl9wdGhyZWFkX211dGV4X3VubG9ja1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcIl9wdGhyZWFkX211dGV4X3VubG9ja1wiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBfc2JyayA9IE1vZHVsZVtcIl9zYnJrXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiX3NicmtcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgZXN0YWJsaXNoU3RhY2tTcGFjZSA9IE1vZHVsZVtcImVzdGFibGlzaFN0YWNrU3BhY2VcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJlc3RhYmxpc2hTdGFja1NwYWNlXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIGdldFRlbXBSZXQwID0gTW9kdWxlW1wiZ2V0VGVtcFJldDBcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJnZXRUZW1wUmV0MFwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBydW5Qb3N0U2V0cyA9IE1vZHVsZVtcInJ1blBvc3RTZXRzXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wicnVuUG9zdFNldHNcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgc2V0VGVtcFJldDAgPSBNb2R1bGVbXCJzZXRUZW1wUmV0MFwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcInNldFRlbXBSZXQwXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIHNldFRocmV3ID0gTW9kdWxlW1wic2V0VGhyZXdcIl0gPSBmdW5jdGlvbigpIHtcclxuICBhc3NlcnQocnVudGltZUluaXRpYWxpemVkLCAneW91IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHJ1bnRpbWUgdG8gYmUgcmVhZHkgKGUuZy4gd2FpdCBmb3IgbWFpbigpIHRvIGJlIGNhbGxlZCknKTtcclxuICBhc3NlcnQoIXJ1bnRpbWVFeGl0ZWQsICd0aGUgcnVudGltZSB3YXMgZXhpdGVkICh1c2UgTk9fRVhJVF9SVU5USU1FIHRvIGtlZXAgaXQgYWxpdmUgYWZ0ZXIgbWFpbigpIGV4aXRzKScpO1xyXG4gIHJldHVybiBNb2R1bGVbXCJhc21cIl1bXCJzZXRUaHJld1wiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBzdGFja0FsbG9jID0gTW9kdWxlW1wic3RhY2tBbGxvY1wiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcInN0YWNrQWxsb2NcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgc3RhY2tSZXN0b3JlID0gTW9kdWxlW1wic3RhY2tSZXN0b3JlXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wic3RhY2tSZXN0b3JlXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxudmFyIHN0YWNrU2F2ZSA9IE1vZHVsZVtcInN0YWNrU2F2ZVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcInN0YWNrU2F2ZVwiXS5hcHBseShudWxsLCBhcmd1bWVudHMpIH07XHJcbnZhciBkeW5DYWxsX2lpID0gTW9kdWxlW1wiZHluQ2FsbF9paVwiXSA9IGZ1bmN0aW9uKCkge1xyXG4gIGFzc2VydChydW50aW1lSW5pdGlhbGl6ZWQsICd5b3UgbmVlZCB0byB3YWl0IGZvciB0aGUgcnVudGltZSB0byBiZSByZWFkeSAoZS5nLiB3YWl0IGZvciBtYWluKCkgdG8gYmUgY2FsbGVkKScpO1xyXG4gIGFzc2VydCghcnVudGltZUV4aXRlZCwgJ3RoZSBydW50aW1lIHdhcyBleGl0ZWQgKHVzZSBOT19FWElUX1JVTlRJTUUgdG8ga2VlcCBpdCBhbGl2ZSBhZnRlciBtYWluKCkgZXhpdHMpJyk7XHJcbiAgcmV0dXJuIE1vZHVsZVtcImFzbVwiXVtcImR5bkNhbGxfaWlcIl0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSB9O1xyXG52YXIgZHluQ2FsbF9paWlpID0gTW9kdWxlW1wiZHluQ2FsbF9paWlpXCJdID0gZnVuY3Rpb24oKSB7XHJcbiAgYXNzZXJ0KHJ1bnRpbWVJbml0aWFsaXplZCwgJ3lvdSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBydW50aW1lIHRvIGJlIHJlYWR5IChlLmcuIHdhaXQgZm9yIG1haW4oKSB0byBiZSBjYWxsZWQpJyk7XHJcbiAgYXNzZXJ0KCFydW50aW1lRXhpdGVkLCAndGhlIHJ1bnRpbWUgd2FzIGV4aXRlZCAodXNlIE5PX0VYSVRfUlVOVElNRSB0byBrZWVwIGl0IGFsaXZlIGFmdGVyIG1haW4oKSBleGl0cyknKTtcclxuICByZXR1cm4gTW9kdWxlW1wiYXNtXCJdW1wiZHluQ2FsbF9paWlpXCJdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgfTtcclxuO1xyXG5cclxuXHJcblxyXG4vLyA9PT0gQXV0by1nZW5lcmF0ZWQgcG9zdGFtYmxlIHNldHVwIGVudHJ5IHN0dWZmID09PVxyXG5cclxuTW9kdWxlWydhc20nXSA9IGFzbTtcclxuXHJcbmlmICghTW9kdWxlW1wiaW50QXJyYXlGcm9tU3RyaW5nXCJdKSBNb2R1bGVbXCJpbnRBcnJheUZyb21TdHJpbmdcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInaW50QXJyYXlGcm9tU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJpbnRBcnJheVRvU3RyaW5nXCJdKSBNb2R1bGVbXCJpbnRBcnJheVRvU3RyaW5nXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2ludEFycmF5VG9TdHJpbmcnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5Nb2R1bGVbXCJjY2FsbFwiXSA9IGNjYWxsO1xyXG5Nb2R1bGVbXCJjd3JhcFwiXSA9IGN3cmFwO1xyXG5pZiAoIU1vZHVsZVtcInNldFZhbHVlXCJdKSBNb2R1bGVbXCJzZXRWYWx1ZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidzZXRWYWx1ZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZ2V0VmFsdWVcIl0pIE1vZHVsZVtcImdldFZhbHVlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2dldFZhbHVlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhbGxvY2F0ZVwiXSkgTW9kdWxlW1wiYWxsb2NhdGVcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWxsb2NhdGUnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImdldE1lbW9yeVwiXSkgTW9kdWxlW1wiZ2V0TWVtb3J5XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2dldE1lbW9yeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIlBvaW50ZXJfc3RyaW5naWZ5XCJdKSBNb2R1bGVbXCJQb2ludGVyX3N0cmluZ2lmeVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidQb2ludGVyX3N0cmluZ2lmeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiQXNjaWlUb1N0cmluZ1wiXSkgTW9kdWxlW1wiQXNjaWlUb1N0cmluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidBc2NpaVRvU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdHJpbmdUb0FzY2lpXCJdKSBNb2R1bGVbXCJzdHJpbmdUb0FzY2lpXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0cmluZ1RvQXNjaWknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIlVURjhBcnJheVRvU3RyaW5nXCJdKSBNb2R1bGVbXCJVVEY4QXJyYXlUb1N0cmluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidVVEY4QXJyYXlUb1N0cmluZycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiVVRGOFRvU3RyaW5nXCJdKSBNb2R1bGVbXCJVVEY4VG9TdHJpbmdcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInVVRGOFRvU3RyaW5nJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdHJpbmdUb1VURjhBcnJheVwiXSkgTW9kdWxlW1wic3RyaW5nVG9VVEY4QXJyYXlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc3RyaW5nVG9VVEY4QXJyYXknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInN0cmluZ1RvVVRGOFwiXSkgTW9kdWxlW1wic3RyaW5nVG9VVEY4XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3N0cmluZ1RvVVRGOCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEY4XCJdKSBNb2R1bGVbXCJsZW5ndGhCeXRlc1VURjhcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInbGVuZ3RoQnl0ZXNVVEY4JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJVVEYxNlRvU3RyaW5nXCJdKSBNb2R1bGVbXCJVVEYxNlRvU3RyaW5nXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ1VURjE2VG9TdHJpbmcnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInN0cmluZ1RvVVRGMTZcIl0pIE1vZHVsZVtcInN0cmluZ1RvVVRGMTZcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc3RyaW5nVG9VVEYxNicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEYxNlwiXSkgTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEYxNlwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidsZW5ndGhCeXRlc1VURjE2JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJVVEYzMlRvU3RyaW5nXCJdKSBNb2R1bGVbXCJVVEYzMlRvU3RyaW5nXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ1VURjMyVG9TdHJpbmcnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInN0cmluZ1RvVVRGMzJcIl0pIE1vZHVsZVtcInN0cmluZ1RvVVRGMzJcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc3RyaW5nVG9VVEYzMicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEYzMlwiXSkgTW9kdWxlW1wibGVuZ3RoQnl0ZXNVVEYzMlwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidsZW5ndGhCeXRlc1VURjMyJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhbGxvY2F0ZVVURjhcIl0pIE1vZHVsZVtcImFsbG9jYXRlVVRGOFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidhbGxvY2F0ZVVURjgnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInN0YWNrVHJhY2VcIl0pIE1vZHVsZVtcInN0YWNrVHJhY2VcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc3RhY2tUcmFjZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWRkT25QcmVSdW5cIl0pIE1vZHVsZVtcImFkZE9uUHJlUnVuXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FkZE9uUHJlUnVuJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhZGRPbkluaXRcIl0pIE1vZHVsZVtcImFkZE9uSW5pdFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidhZGRPbkluaXQnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImFkZE9uUHJlTWFpblwiXSkgTW9kdWxlW1wiYWRkT25QcmVNYWluXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2FkZE9uUHJlTWFpbicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiYWRkT25FeGl0XCJdKSBNb2R1bGVbXCJhZGRPbkV4aXRcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWRkT25FeGl0JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhZGRPblBvc3RSdW5cIl0pIE1vZHVsZVtcImFkZE9uUG9zdFJ1blwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidhZGRPblBvc3RSdW4nIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIndyaXRlU3RyaW5nVG9NZW1vcnlcIl0pIE1vZHVsZVtcIndyaXRlU3RyaW5nVG9NZW1vcnlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInd3JpdGVTdHJpbmdUb01lbW9yeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wid3JpdGVBcnJheVRvTWVtb3J5XCJdKSBNb2R1bGVbXCJ3cml0ZUFycmF5VG9NZW1vcnlcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInd3JpdGVBcnJheVRvTWVtb3J5JyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJ3cml0ZUFzY2lpVG9NZW1vcnlcIl0pIE1vZHVsZVtcIndyaXRlQXNjaWlUb01lbW9yeVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIid3cml0ZUFzY2lpVG9NZW1vcnknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImFkZFJ1bkRlcGVuZGVuY3lcIl0pIE1vZHVsZVtcImFkZFJ1bkRlcGVuZGVuY3lcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWRkUnVuRGVwZW5kZW5jeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInJlbW92ZVJ1bkRlcGVuZGVuY3lcIl0pIE1vZHVsZVtcInJlbW92ZVJ1bkRlcGVuZGVuY3lcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCIncmVtb3ZlUnVuRGVwZW5kZW5jeScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpLiBBbHRlcm5hdGl2ZWx5LCBmb3JjaW5nIGZpbGVzeXN0ZW0gc3VwcG9ydCAoLXMgRk9SQ0VfRklMRVNZU1RFTT0xKSBjYW4gZXhwb3J0IHRoaXMgZm9yIHlvdVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIkZTXCJdKSBNb2R1bGVbXCJGU1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGUycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlRm9sZGVyXCJdKSBNb2R1bGVbXCJGU19jcmVhdGVGb2xkZXJcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfY3JlYXRlRm9sZGVyJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlUGF0aFwiXSkgTW9kdWxlW1wiRlNfY3JlYXRlUGF0aFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGU19jcmVhdGVQYXRoJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlRGF0YUZpbGVcIl0pIE1vZHVsZVtcIkZTX2NyZWF0ZURhdGFGaWxlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0ZTX2NyZWF0ZURhdGFGaWxlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlUHJlbG9hZGVkRmlsZVwiXSkgTW9kdWxlW1wiRlNfY3JlYXRlUHJlbG9hZGVkRmlsZVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGU19jcmVhdGVQcmVsb2FkZWRGaWxlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlTGF6eUZpbGVcIl0pIE1vZHVsZVtcIkZTX2NyZWF0ZUxhenlGaWxlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0ZTX2NyZWF0ZUxhenlGaWxlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlTGlua1wiXSkgTW9kdWxlW1wiRlNfY3JlYXRlTGlua1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidGU19jcmVhdGVMaW5rJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfY3JlYXRlRGV2aWNlXCJdKSBNb2R1bGVbXCJGU19jcmVhdGVEZXZpY2VcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfY3JlYXRlRGV2aWNlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiRlNfdW5saW5rXCJdKSBNb2R1bGVbXCJGU191bmxpbmtcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInRlNfdW5saW5rJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSkuIEFsdGVybmF0aXZlbHksIGZvcmNpbmcgZmlsZXN5c3RlbSBzdXBwb3J0ICgtcyBGT1JDRV9GSUxFU1lTVEVNPTEpIGNhbiBleHBvcnQgdGhpcyBmb3IgeW91XCIpIH07XHJcbmlmICghTW9kdWxlW1wiR0xcIl0pIE1vZHVsZVtcIkdMXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0dMJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJzdGF0aWNBbGxvY1wiXSkgTW9kdWxlW1wic3RhdGljQWxsb2NcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInc3RhdGljQWxsb2MnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImR5bmFtaWNBbGxvY1wiXSkgTW9kdWxlW1wiZHluYW1pY0FsbG9jXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2R5bmFtaWNBbGxvYycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wid2Fybk9uY2VcIl0pIE1vZHVsZVtcIndhcm5PbmNlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3dhcm5PbmNlJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJsb2FkRHluYW1pY0xpYnJhcnlcIl0pIE1vZHVsZVtcImxvYWREeW5hbWljTGlicmFyeVwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidsb2FkRHluYW1pY0xpYnJhcnknIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImxvYWRXZWJBc3NlbWJseU1vZHVsZVwiXSkgTW9kdWxlW1wibG9hZFdlYkFzc2VtYmx5TW9kdWxlXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2xvYWRXZWJBc3NlbWJseU1vZHVsZScgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZ2V0TEVCXCJdKSBNb2R1bGVbXCJnZXRMRUJcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInZ2V0TEVCJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJnZXRGdW5jdGlvblRhYmxlc1wiXSkgTW9kdWxlW1wiZ2V0RnVuY3Rpb25UYWJsZXNcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInZ2V0RnVuY3Rpb25UYWJsZXMnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImFsaWduRnVuY3Rpb25UYWJsZXNcIl0pIE1vZHVsZVtcImFsaWduRnVuY3Rpb25UYWJsZXNcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWxpZ25GdW5jdGlvblRhYmxlcycgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wicmVnaXN0ZXJGdW5jdGlvbnNcIl0pIE1vZHVsZVtcInJlZ2lzdGVyRnVuY3Rpb25zXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3JlZ2lzdGVyRnVuY3Rpb25zJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJhZGRGdW5jdGlvblwiXSkgTW9kdWxlW1wiYWRkRnVuY3Rpb25cIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInYWRkRnVuY3Rpb24nIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcInJlbW92ZUZ1bmN0aW9uXCJdKSBNb2R1bGVbXCJyZW1vdmVGdW5jdGlvblwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidyZW1vdmVGdW5jdGlvbicgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZ2V0RnVuY1dyYXBwZXJcIl0pIE1vZHVsZVtcImdldEZ1bmNXcmFwcGVyXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2dldEZ1bmNXcmFwcGVyJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJwcmV0dHlQcmludFwiXSkgTW9kdWxlW1wicHJldHR5UHJpbnRcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCIncHJldHR5UHJpbnQnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcIm1ha2VCaWdJbnRcIl0pIE1vZHVsZVtcIm1ha2VCaWdJbnRcIl0gPSBmdW5jdGlvbigpIHsgYWJvcnQoXCInbWFrZUJpZ0ludCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1wiZHluQ2FsbFwiXSkgTW9kdWxlW1wiZHluQ2FsbFwiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidkeW5DYWxsJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtcclxuaWYgKCFNb2R1bGVbXCJnZXRDb21waWxlclNldHRpbmdcIl0pIE1vZHVsZVtcImdldENvbXBpbGVyU2V0dGluZ1wiXSA9IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidnZXRDb21waWxlclNldHRpbmcnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9O1xyXG5pZiAoIU1vZHVsZVtcImludEFycmF5RnJvbUJhc2U2NFwiXSkgTW9kdWxlW1wiaW50QXJyYXlGcm9tQmFzZTY0XCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ2ludEFycmF5RnJvbUJhc2U2NCcgd2FzIG5vdCBleHBvcnRlZC4gYWRkIGl0IHRvIEVYVFJBX0VYUE9SVEVEX1JVTlRJTUVfTUVUSE9EUyAoc2VlIHRoZSBGQVEpXCIpIH07XHJcbmlmICghTW9kdWxlW1widHJ5UGFyc2VBc0RhdGFVUklcIl0pIE1vZHVsZVtcInRyeVBhcnNlQXNEYXRhVVJJXCJdID0gZnVuY3Rpb24oKSB7IGFib3J0KFwiJ3RyeVBhcnNlQXNEYXRhVVJJJyB3YXMgbm90IGV4cG9ydGVkLiBhZGQgaXQgdG8gRVhUUkFfRVhQT1JURURfUlVOVElNRV9NRVRIT0RTIChzZWUgdGhlIEZBUSlcIikgfTtpZiAoIU1vZHVsZVtcIkFMTE9DX05PUk1BTFwiXSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZSwgXCJBTExPQ19OT1JNQUxcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidBTExPQ19OT1JNQUwnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9IH0pO1xyXG5pZiAoIU1vZHVsZVtcIkFMTE9DX1NUQUNLXCJdKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kdWxlLCBcIkFMTE9DX1NUQUNLXCIsIHsgZ2V0OiBmdW5jdGlvbigpIHsgYWJvcnQoXCInQUxMT0NfU1RBQ0snIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9IH0pO1xyXG5pZiAoIU1vZHVsZVtcIkFMTE9DX1NUQVRJQ1wiXSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZSwgXCJBTExPQ19TVEFUSUNcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkgeyBhYm9ydChcIidBTExPQ19TVEFUSUMnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9IH0pO1xyXG5pZiAoIU1vZHVsZVtcIkFMTE9DX0RZTkFNSUNcIl0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2R1bGUsIFwiQUxMT0NfRFlOQU1JQ1wiLCB7IGdldDogZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0FMTE9DX0RZTkFNSUMnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9IH0pO1xyXG5pZiAoIU1vZHVsZVtcIkFMTE9DX05PTkVcIl0pIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2R1bGUsIFwiQUxMT0NfTk9ORVwiLCB7IGdldDogZnVuY3Rpb24oKSB7IGFib3J0KFwiJ0FMTE9DX05PTkUnIHdhcyBub3QgZXhwb3J0ZWQuIGFkZCBpdCB0byBFWFRSQV9FWFBPUlRFRF9SVU5USU1FX01FVEhPRFMgKHNlZSB0aGUgRkFRKVwiKSB9IH0pO1xyXG5cclxuXHJcblxyXG4vLyBNb2R1bGFyaXplIG1vZGUgcmV0dXJucyBhIGZ1bmN0aW9uLCB3aGljaCBjYW4gYmUgY2FsbGVkIHRvXHJcbi8vIGNyZWF0ZSBpbnN0YW5jZXMuIFRoZSBpbnN0YW5jZXMgcHJvdmlkZSBhIHRoZW4oKSBtZXRob2QsXHJcbi8vIG11c3QgbGlrZSBhIFByb21pc2UsIHRoYXQgcmVjZWl2ZXMgYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrXHJcbi8vIGlzIGNhbGxlZCB3aGVuIHRoZSBtb2R1bGUgaXMgcmVhZHkgdG8gcnVuLCB3aXRoIHRoZSBtb2R1bGVcclxuLy8gYXMgYSBwYXJhbWV0ZXIuIChMaWtlIGEgUHJvbWlzZSwgaXQgYWxzbyByZXR1cm5zIHRoZSBtb2R1bGVcclxuLy8gc28geW91IGNhbiB1c2UgdGhlIG91dHB1dCBvZiAudGhlbiguLikpLlxyXG5Nb2R1bGVbJ3RoZW4nXSA9IGZ1bmN0aW9uKGZ1bmMpIHtcclxuICAvLyBXZSBtYXkgYWxyZWFkeSBiZSByZWFkeSB0byBydW4gY29kZSBhdCB0aGlzIHRpbWUuIGlmXHJcbiAgLy8gc28sIGp1c3QgcXVldWUgYSBjYWxsIHRvIHRoZSBjYWxsYmFjay5cclxuICBpZiAoTW9kdWxlWydjYWxsZWRSdW4nXSkge1xyXG4gICAgZnVuYyhNb2R1bGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyB3ZSBhcmUgbm90IHJlYWR5IHRvIGNhbGwgdGhlbigpIHlldC4gd2UgbXVzdCBjYWxsIGl0XHJcbiAgICAvLyBhdCB0aGUgc2FtZSB0aW1lIHdlIHdvdWxkIGNhbGwgb25SdW50aW1lSW5pdGlhbGl6ZWQuXHJcbiAgICB2YXIgb2xkID0gTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddO1xyXG4gICAgTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChvbGQpIG9sZCgpO1xyXG4gICAgICBmdW5jKE1vZHVsZSk7XHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gTW9kdWxlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZW5kcyB7RXJyb3J9XHJcbiAqIEB0aGlzIHtFeGl0U3RhdHVzfVxyXG4gKi9cclxuZnVuY3Rpb24gRXhpdFN0YXR1cyhzdGF0dXMpIHtcclxuICB0aGlzLm5hbWUgPSBcIkV4aXRTdGF0dXNcIjtcclxuICB0aGlzLm1lc3NhZ2UgPSBcIlByb2dyYW0gdGVybWluYXRlZCB3aXRoIGV4aXQoXCIgKyBzdGF0dXMgKyBcIilcIjtcclxuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxufTtcclxuRXhpdFN0YXR1cy5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcclxuRXhpdFN0YXR1cy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFeGl0U3RhdHVzO1xyXG5cclxudmFyIGluaXRpYWxTdGFja1RvcDtcclxudmFyIGNhbGxlZE1haW4gPSBmYWxzZTtcclxuXHJcbmRlcGVuZGVuY2llc0Z1bGZpbGxlZCA9IGZ1bmN0aW9uIHJ1bkNhbGxlcigpIHtcclxuICAvLyBJZiBydW4gaGFzIG5ldmVyIGJlZW4gY2FsbGVkLCBhbmQgd2Ugc2hvdWxkIGNhbGwgcnVuIChJTlZPS0VfUlVOIGlzIHRydWUsIGFuZCBNb2R1bGUubm9Jbml0aWFsUnVuIGlzIG5vdCBmYWxzZSlcclxuICBpZiAoIU1vZHVsZVsnY2FsbGVkUnVuJ10pIHJ1bigpO1xyXG4gIGlmICghTW9kdWxlWydjYWxsZWRSdW4nXSkgZGVwZW5kZW5jaWVzRnVsZmlsbGVkID0gcnVuQ2FsbGVyOyAvLyB0cnkgdGhpcyBhZ2FpbiBsYXRlciwgYWZ0ZXIgbmV3IGRlcHMgYXJlIGZ1bGZpbGxlZFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqIEB0eXBlIHtmdW5jdGlvbihBcnJheT0pfSAqL1xyXG5mdW5jdGlvbiBydW4oYXJncykge1xyXG4gIGFyZ3MgPSBhcmdzIHx8IE1vZHVsZVsnYXJndW1lbnRzJ107XHJcblxyXG4gIGlmIChydW5EZXBlbmRlbmNpZXMgPiAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVN0YWNrQ29va2llKCk7XHJcblxyXG4gIHByZVJ1bigpO1xyXG5cclxuICBpZiAocnVuRGVwZW5kZW5jaWVzID4gMCkgcmV0dXJuOyAvLyBhIHByZVJ1biBhZGRlZCBhIGRlcGVuZGVuY3ksIHJ1biB3aWxsIGJlIGNhbGxlZCBsYXRlclxyXG4gIGlmIChNb2R1bGVbJ2NhbGxlZFJ1biddKSByZXR1cm47IC8vIHJ1biBtYXkgaGF2ZSBqdXN0IGJlZW4gY2FsbGVkIHRocm91Z2ggZGVwZW5kZW5jaWVzIGJlaW5nIGZ1bGZpbGxlZCBqdXN0IGluIHRoaXMgdmVyeSBmcmFtZVxyXG5cclxuICBmdW5jdGlvbiBkb1J1bigpIHtcclxuICAgIGlmIChNb2R1bGVbJ2NhbGxlZFJ1biddKSByZXR1cm47IC8vIHJ1biBtYXkgaGF2ZSBqdXN0IGJlZW4gY2FsbGVkIHdoaWxlIHRoZSBhc3luYyBzZXRTdGF0dXMgdGltZSBiZWxvdyB3YXMgaGFwcGVuaW5nXHJcbiAgICBNb2R1bGVbJ2NhbGxlZFJ1biddID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoQUJPUlQpIHJldHVybjtcclxuXHJcbiAgICBlbnN1cmVJbml0UnVudGltZSgpO1xyXG5cclxuICAgIHByZU1haW4oKTtcclxuXHJcbiAgICBpZiAoTW9kdWxlWydvblJ1bnRpbWVJbml0aWFsaXplZCddKSBNb2R1bGVbJ29uUnVudGltZUluaXRpYWxpemVkJ10oKTtcclxuXHJcbiAgICBhc3NlcnQoIU1vZHVsZVsnX21haW4nXSwgJ2NvbXBpbGVkIHdpdGhvdXQgYSBtYWluLCBidXQgb25lIGlzIHByZXNlbnQuIGlmIHlvdSBhZGRlZCBpdCBmcm9tIEpTLCB1c2UgTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0nKTtcclxuXHJcbiAgICBwb3N0UnVuKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoTW9kdWxlWydzZXRTdGF0dXMnXSkge1xyXG4gICAgTW9kdWxlWydzZXRTdGF0dXMnXSgnUnVubmluZy4uLicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBNb2R1bGVbJ3NldFN0YXR1cyddKCcnKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICAgIGRvUnVuKCk7XHJcbiAgICB9LCAxKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9SdW4oKTtcclxuICB9XHJcbiAgY2hlY2tTdGFja0Nvb2tpZSgpO1xyXG59XHJcbk1vZHVsZVsncnVuJ10gPSBydW47XHJcblxyXG5mdW5jdGlvbiBjaGVja1VuZmx1c2hlZENvbnRlbnQoKSB7XHJcbiAgLy8gQ29tcGlsZXIgc2V0dGluZ3MgZG8gbm90IGFsbG93IGV4aXRpbmcgdGhlIHJ1bnRpbWUsIHNvIGZsdXNoaW5nXHJcbiAgLy8gdGhlIHN0cmVhbXMgaXMgbm90IHBvc3NpYmxlLiBidXQgaW4gQVNTRVJUSU9OUyBtb2RlIHdlIGNoZWNrXHJcbiAgLy8gaWYgdGhlcmUgd2FzIHNvbWV0aGluZyB0byBmbHVzaCwgYW5kIGlmIHNvIHRlbGwgdGhlIHVzZXIgdGhleVxyXG4gIC8vIHNob3VsZCByZXF1ZXN0IHRoYXQgdGhlIHJ1bnRpbWUgYmUgZXhpdGFibGUuXHJcbiAgLy8gTm9ybWFsbHkgd2Ugd291bGQgbm90IGV2ZW4gaW5jbHVkZSBmbHVzaCgpIGF0IGFsbCwgYnV0IGluIEFTU0VSVElPTlNcclxuICAvLyBidWlsZHMgd2UgZG8gc28ganVzdCBmb3IgdGhpcyBjaGVjaywgYW5kIGhlcmUgd2Ugc2VlIGlmIHRoZXJlIGlzIGFueVxyXG4gIC8vIGNvbnRlbnQgdG8gZmx1c2gsIHRoYXQgaXMsIHdlIGNoZWNrIGlmIHRoZXJlIHdvdWxkIGhhdmUgYmVlblxyXG4gIC8vIHNvbWV0aGluZyBhIG5vbi1BU1NFUlRJT05TIGJ1aWxkIHdvdWxkIGhhdmUgbm90IHNlZW4uXHJcbiAgLy8gSG93IHdlIGZsdXNoIHRoZSBzdHJlYW1zIGRlcGVuZHMgb24gd2hldGhlciB3ZSBhcmUgaW4gTk9fRklMRVNZU1RFTVxyXG4gIC8vIG1vZGUgKHdoaWNoIGhhcyBpdHMgb3duIHNwZWNpYWwgZnVuY3Rpb24gZm9yIHRoaXM7IG90aGVyd2lzZSwgYWxsXHJcbiAgLy8gdGhlIGNvZGUgaXMgaW5zaWRlIGxpYmMpXHJcbiAgdmFyIHByaW50ID0gTW9kdWxlWydwcmludCddO1xyXG4gIHZhciBwcmludEVyciA9IE1vZHVsZVsncHJpbnRFcnInXTtcclxuICB2YXIgaGFzID0gZmFsc2U7XHJcbiAgTW9kdWxlWydwcmludCddID0gTW9kdWxlWydwcmludEVyciddID0gZnVuY3Rpb24oeCkge1xyXG4gICAgaGFzID0gdHJ1ZTtcclxuICB9XHJcbiAgdHJ5IHsgLy8gaXQgZG9lc24ndCBtYXR0ZXIgaWYgaXQgZmFpbHNcclxuICAgIHZhciBmbHVzaCA9IGZsdXNoX05PX0ZJTEVTWVNURU07XHJcbiAgICBpZiAoZmx1c2gpIGZsdXNoKDApO1xyXG4gIH0gY2F0Y2goZSkge31cclxuICBNb2R1bGVbJ3ByaW50J10gPSBwcmludDtcclxuICBNb2R1bGVbJ3ByaW50RXJyJ10gPSBwcmludEVycjtcclxuICBpZiAoaGFzKSB7XHJcbiAgICB3YXJuT25jZSgnc3RkaW8gc3RyZWFtcyBoYWQgY29udGVudCBpbiB0aGVtIHRoYXQgd2FzIG5vdCBmbHVzaGVkLiB5b3Ugc2hvdWxkIHNldCBOT19FWElUX1JVTlRJTUUgdG8gMCAoc2VlIHRoZSBGQVEpLCBvciBtYWtlIHN1cmUgdG8gZW1pdCBhIG5ld2xpbmUgd2hlbiB5b3UgcHJpbnRmIGV0Yy4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4aXQoc3RhdHVzLCBpbXBsaWNpdCkge1xyXG4gIGNoZWNrVW5mbHVzaGVkQ29udGVudCgpO1xyXG5cclxuICAvLyBpZiB0aGlzIGlzIGp1c3QgbWFpbiBleGl0LWluZyBpbXBsaWNpdGx5LCBhbmQgdGhlIHN0YXR1cyBpcyAwLCB0aGVuIHdlXHJcbiAgLy8gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZyBoZXJlIGFuZCBjYW4ganVzdCBsZWF2ZS4gaWYgdGhlIHN0YXR1cyBpc1xyXG4gIC8vIG5vbi16ZXJvLCB0aG91Z2gsIHRoZW4gd2UgbmVlZCB0byByZXBvcnQgaXQuXHJcbiAgLy8gKHdlIG1heSBoYXZlIHdhcm5lZCBhYm91dCB0aGlzIGVhcmxpZXIsIGlmIGEgc2l0dWF0aW9uIGp1c3RpZmllcyBkb2luZyBzbylcclxuICBpZiAoaW1wbGljaXQgJiYgTW9kdWxlWydub0V4aXRSdW50aW1lJ10gJiYgc3RhdHVzID09PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoTW9kdWxlWydub0V4aXRSdW50aW1lJ10pIHtcclxuICAgIC8vIGlmIGV4aXQoKSB3YXMgY2FsbGVkLCB3ZSBtYXkgd2FybiB0aGUgdXNlciBpZiB0aGUgcnVudGltZSBpc24ndCBhY3R1YWxseSBiZWluZyBzaHV0IGRvd25cclxuICAgIGlmICghaW1wbGljaXQpIHtcclxuICAgICAgTW9kdWxlLnByaW50RXJyKCdleGl0KCcgKyBzdGF0dXMgKyAnKSBjYWxsZWQsIGJ1dCBOT19FWElUX1JVTlRJTUUgaXMgc2V0LCBzbyBoYWx0aW5nIGV4ZWN1dGlvbiBidXQgbm90IGV4aXRpbmcgdGhlIHJ1bnRpbWUgb3IgcHJldmVudGluZyBmdXJ0aGVyIGFzeW5jIGV4ZWN1dGlvbiAoYnVpbGQgd2l0aCBOT19FWElUX1JVTlRJTUU9MCwgaWYgeW91IHdhbnQgYSB0cnVlIHNodXRkb3duKScpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgQUJPUlQgPSB0cnVlO1xyXG4gICAgRVhJVFNUQVRVUyA9IHN0YXR1cztcclxuICAgIFNUQUNLVE9QID0gaW5pdGlhbFN0YWNrVG9wO1xyXG5cclxuICAgIGV4aXRSdW50aW1lKCk7XHJcblxyXG4gICAgaWYgKE1vZHVsZVsnb25FeGl0J10pIE1vZHVsZVsnb25FeGl0J10oc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGlmIChFTlZJUk9OTUVOVF9JU19OT0RFKSB7XHJcbiAgICBwcm9jZXNzWydleGl0J10oc3RhdHVzKTtcclxuICB9XHJcbiAgTW9kdWxlWydxdWl0J10oc3RhdHVzLCBuZXcgRXhpdFN0YXR1cyhzdGF0dXMpKTtcclxufVxyXG5Nb2R1bGVbJ2V4aXQnXSA9IGV4aXQ7XHJcblxyXG52YXIgYWJvcnREZWNvcmF0b3JzID0gW107XHJcblxyXG5mdW5jdGlvbiBhYm9ydCh3aGF0KSB7XHJcbiAgaWYgKE1vZHVsZVsnb25BYm9ydCddKSB7XHJcbiAgICBNb2R1bGVbJ29uQWJvcnQnXSh3aGF0KTtcclxuICB9XHJcblxyXG4gIGlmICh3aGF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIE1vZHVsZS5wcmludCh3aGF0KTtcclxuICAgIE1vZHVsZS5wcmludEVycih3aGF0KTtcclxuICAgIHdoYXQgPSBKU09OLnN0cmluZ2lmeSh3aGF0KVxyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGF0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBBQk9SVCA9IHRydWU7XHJcbiAgRVhJVFNUQVRVUyA9IDE7XHJcblxyXG4gIHZhciBleHRyYSA9ICcnO1xyXG4gIHZhciBvdXRwdXQgPSAnYWJvcnQoJyArIHdoYXQgKyAnKSBhdCAnICsgc3RhY2tUcmFjZSgpICsgZXh0cmE7XHJcbiAgaWYgKGFib3J0RGVjb3JhdG9ycykge1xyXG4gICAgYWJvcnREZWNvcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oZGVjb3JhdG9yKSB7XHJcbiAgICAgIG91dHB1dCA9IGRlY29yYXRvcihvdXRwdXQsIHdoYXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRocm93IG91dHB1dDtcclxufVxyXG5Nb2R1bGVbJ2Fib3J0J10gPSBhYm9ydDtcclxuXHJcbi8vIHt7UFJFX1JVTl9BRERJVElPTlN9fVxyXG5cclxuaWYgKE1vZHVsZVsncHJlSW5pdCddKSB7XHJcbiAgaWYgKHR5cGVvZiBNb2R1bGVbJ3ByZUluaXQnXSA9PSAnZnVuY3Rpb24nKSBNb2R1bGVbJ3ByZUluaXQnXSA9IFtNb2R1bGVbJ3ByZUluaXQnXV07XHJcbiAgd2hpbGUgKE1vZHVsZVsncHJlSW5pdCddLmxlbmd0aCA+IDApIHtcclxuICAgIE1vZHVsZVsncHJlSW5pdCddLnBvcCgpKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuTW9kdWxlW1wibm9FeGl0UnVudGltZVwiXSA9IHRydWU7XHJcblxyXG5ydW4oKTtcclxuXHJcbi8vIHt7UE9TVF9SVU5fQURESVRJT05TfX1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB7e01PRFVMRV9BRERJVElPTlN9fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIE1vZHVsZTtcclxufTtcclxuaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JylcclxuICBtb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcclxuZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKVxyXG4gIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7IHJldHVybiBNb2R1bGU7IH0pO1xyXG5lbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXHJcbiAgZXhwb3J0c1tcIk1vZHVsZVwiXSA9IE1vZHVsZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZXJyb3JfY3J5cHRvRXJyb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9wcm9vZk9mV29ya19wcm9vZk9mV29ya0Jhc2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9