(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-wasm", ["big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-wasm"] = factory(require("big-integer"));
	else
		root["IotaPicoPowWasm"] = factory(root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_34__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var stringHelper_1 = __webpack_require__(7);

var dataError_1 = __webpack_require__(3);
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @return True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @return True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(6);
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, (DataError.__proto__ || Object.getPrototypeOf(DataError)).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(6);
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, (CryptoError.__proto__ || Object.getPrototypeOf(CryptoError)).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(19);

var stringHelper_1 = __webpack_require__(7);
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var address_1 = __webpack_require__(25);

var hash_1 = __webpack_require__(5);

var signatureMessageFragment_1 = __webpack_require__(26);

var tag_1 = __webpack_require__(9);

var tryteNumber_1 = __webpack_require__(11);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @return New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trits_1 = __webpack_require__(12);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(8);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @return New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
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

__export(__webpack_require__(15));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); /// <reference types="emscripten" />

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);

var proofOfWorkBase_1 = __webpack_require__(20);

var trytes_1 = __webpack_require__(1); // @ts-ignore


var iota_pico_pow_wasm_1 = __importDefault(__webpack_require__(35));
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

    _this = _possibleConstructorReturn(this, (ProofOfWorkWasm.__proto__ || Object.getPrototypeOf(ProofOfWorkWasm)).call(this, timeService));

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
                return _get(ProofOfWorkWasm.prototype.__proto__ || Object.getPrototypeOf(ProofOfWorkWasm.prototype), "initialize", this).call(this);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
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

module.exports = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(8);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var timeService_1 = __webpack_require__(24);

var hash_1 = __webpack_require__(5);

var tag_1 = __webpack_require__(9);

var transaction_1 = __webpack_require__(10);

var tryteNumber_1 = __webpack_require__(11);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(4);

var transactionHelper_1 = __webpack_require__(27);
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
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

module.exports = __webpack_require__(23);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var hash_1 = __webpack_require__(5);

var transaction_1 = __webpack_require__(10);

var trits_1 = __webpack_require__(12);

var cryptoError_1 = __webpack_require__(4);

var spongeFactory_1 = __webpack_require__(28);
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(29);

var curl_1 = __webpack_require__(30);

var kerl_1 = __webpack_require__(31);
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, (SpongeFactory.__proto__ || Object.getPrototypeOf(SpongeFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(curl_1.Curl, [null].concat(args)))();
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var sha3_1 = __webpack_require__(32);

var cryptoError_1 = __webpack_require__(4);

var bigIntegerHelper_1 = __webpack_require__(33);
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @return Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(34));

var cryptoError_1 = __webpack_require__(4);
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
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
        if (!nodeFS) nodeFS = __webpack_require__(13);
        if (!nodePath) nodePath = __webpack_require__(13);
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

if (( false ? "undefined" : _typeof(exports)) === 'object' && ( false ? "undefined" : _typeof(module)) === 'object') module.exports = Module;else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  return Module;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["Module"] = Module;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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


/***/ })
/******/ ])["default"];
});