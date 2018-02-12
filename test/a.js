// The Module object: Our interface to the outside world. We import
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
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

Module['arguments'] = [];
Module['thisProgram'] = './this.program';
Module['quit'] = function(status, toThrow) {
  throw toThrow;
};
Module['preRun'] = [];
Module['postRun'] = [];

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('Module[\'ENVIRONMENT\'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}

var ENVIRONMENT_IS_PTHREAD;
if (!ENVIRONMENT_IS_PTHREAD) ENVIRONMENT_IS_PTHREAD = false; // ENVIRONMENT_IS_PTHREAD=true will have been preset in pthread-main.js. Make it false in the main runtime thread.
var PthreadWorkerInit; // Collects together variables that are needed at initialization time for the web workers that host pthreads.
if (!ENVIRONMENT_IS_PTHREAD) PthreadWorkerInit = {};
var currentScriptUrl = (typeof document !== 'undefined' && document.currentScript) ? document.currentScript.src : undefined;

if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  var nodeFS;
  var nodePath;

  Module['read'] = function shell_read(filename, binary) {
    var ret;
    ret = tryParseAsDataURI(filename);
    if (!ret) {
      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      ret = nodeFS['readFileSync'](filename);
    }
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  if (process['argv'].length > 1) {
    Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  // Currently node will swallow unhandled rejections, but this behavior is
  // deprecated, and in the future it will exit with error status.
  process['on']('unhandledRejection', function(reason, p) {
    Module['printErr']('node.js exiting due to unhandled promise rejection');
    process['exit'](1);
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (typeof read != 'undefined') {
    Module['read'] = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  Module['readBinary'] = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status, toThrow) {
      quit(status);
    }
  }
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function shell_read(url) {
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
    Module['readBinary'] = function readBinary(url) {
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

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
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
    Module['arguments'] = arguments;
  }

  Module['setWindowTitle'] = function(title) { document.title = title };
}
else {
  // Unreachable because SHELL is dependent on the others
  throw new Error('unknown runtime environment');
}

// console.log is checked first, as 'print' on the web will open a print dialogue
// printErr is preferable to console.warn (works better in shells)
Module['print'] = typeof console !== 'undefined' ? console.log : (typeof print !== 'undefined' ? print : null);
Module['printErr'] = typeof printErr !== 'undefined' ? printErr : ((typeof console !== 'undefined' && console.warn) || Module['print']);

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

// stack management, and other functionality that is provided by the compiled code,
// should not be used before it is ready
stackSave = stackRestore = stackAlloc = setTempRet0 = getTempRet0 = function() {
  abort('cannot use the stack before compiled code is ready to run, and has provided stack access');
};

function staticAlloc(size) {
  assert(!staticSealed);
  var ret = STATICTOP;
  STATICTOP = (STATICTOP + size + 15) & -16;
  return ret;
}

function dynamicAlloc(size) {
  assert(DYNAMICTOP_PTR);
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  if (end >= TOTAL_MEMORY) {
    var success = enlargeMemory();
    if (!success) {
      HEAP32[DYNAMICTOP_PTR>>2] = ret;
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
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
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
    Module.printErr(text);
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
  functionPointers[index-1] = null;
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
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

function dynCall(sig, ptr, args) {
  if (args && args.length) {
    assert(args.length == sig.length-1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    assert(sig.length == 1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].call(null, ptr);
  }
}


function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}

var Runtime = {
  // FIXME backwards compatibility layer for ports. Support some Runtime.*
  //       for now, fix it there, then remove it from here. That way we
  //       can minimize any period of breakage.
  dynCall: dynCall, // for SDL2 port
  // helpful errors
  getTempRet0: function() { abort('getTempRet0() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
  staticAlloc: function() { abort('staticAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
  stackAlloc: function() { abort('stackAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."') },
};

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 8;



// === Preamble library stuff ===

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

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

var JSfuncs = {
  // Helpers for cwrap -- it can't refer to Runtime directly because it might
  // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
  // out what the minified function name is.
  'stackSave': function() {
    stackSave()
  },
  'stackRestore': function() {
    stackRestore()
  },
  // type conversion from js to c
  'arrayToC' : function(arr) {
    var ret = stackAlloc(arr.length);
    writeArrayToMemory(arr, ret);
    return ret;
  },
  'stringToC' : function(str) {
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
      // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
      var len = (str.length << 2) + 1;
      ret = stackAlloc(len);
      stringToUTF8(str, ret, len);
    }
    return ret;
  }
};
// For fast lookup of conversion functions
var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

// C calling interface.
function ccall (ident, returnType, argTypes, args, opts) {
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  if (returnType === 'string') ret = Pointer_stringify(ret);
  if (stack !== 0) {
    stackRestore(stack);
  }
  return ret;
}

function cwrap (ident, returnType, argTypes) {
  argTypes = argTypes || [];
  var cfunc = getCFunc(ident);
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs) {
    return cfunc;
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments);
  }
}

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
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
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return staticAlloc(size);
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}

/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
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
}

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
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
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
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
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
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
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
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
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
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
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

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
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
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
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
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
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
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
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

if (!ENVIRONMENT_IS_PTHREAD) { // Pthreads have already initialized these variables in src/pthread-main.js, where they were passed to the thread worker at startup time
  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;
}

if (ENVIRONMENT_IS_PTHREAD) {
  staticSealed = true; // The static memory area has been initialized already in the main thread, pthreads skip this.
}

// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abort('Cannot enlarge memory arrays, since compiling with pthreads support enabled (-s USE_PTHREADS=1).');
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');


if (typeof SharedArrayBuffer !== 'undefined') {
  if (!ENVIRONMENT_IS_PTHREAD) buffer = new SharedArrayBuffer(TOTAL_MEMORY);
  // Currently SharedArrayBuffer does not have a slice() operation, so polyfill it in.
  // Adapted from https://github.com/ttaubert/node-arraybuffer-slice, (c) 2014 Tim Taubert <tim@timtaubert.de>
  // arraybuffer-slice may be freely distributed under the MIT license.
  (function (undefined) {
    "use strict";
    function clamp(val, length) {
      val = (val|0) || 0;
      if (val < 0) return Math.max(val + length, 0);
      return Math.min(val, length);
    }
    if (typeof SharedArrayBuffer !== 'undefined' && !SharedArrayBuffer.prototype.slice) {
      SharedArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength;
        var begin = clamp(from, length);
        var end = length;
        if (to !== undefined) end = clamp(to, length);
        if (begin > end) return new ArrayBuffer(0);
        var num = end - begin;
        var target = new ArrayBuffer(num);
        var targetArray = new Uint8Array(target);
        var sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);
        return target;
      };
    }
  })();
} else {
  if (!ENVIRONMENT_IS_PTHREAD) buffer = new ArrayBuffer(TOTAL_MEMORY);
}
updateGlobalBufferViews();

if (typeof Atomics === 'undefined') {
  // Polyfill singlethreaded atomics ops from http://lars-t-hansen.github.io/ecmascript_sharedmem/shmem.html#Atomics.add
  // No thread-safety needed since we don't have multithreading support.
  Atomics = {};
  Atomics['add'] = function(t, i, v) { var w = t[i]; t[i] += v; return w; }
  Atomics['and'] = function(t, i, v) { var w = t[i]; t[i] &= v; return w; }
  Atomics['compareExchange'] = function(t, i, e, r) { var w = t[i]; if (w == e) t[i] = r; return w; }
  Atomics['exchange'] = function(t, i, v) { var w = t[i]; t[i] = v; return w; }
  Atomics['wait'] = function(t, i, v, o) { if (t[i] != v) return 'not-equal'; else return 'timed-out'; }
  Atomics['wake'] = function(t, i, c) { return 0; }
  Atomics['wakeOrRequeue'] = function(t, i1, c, i2, v) { return 0; }
  Atomics['isLockFree'] = function(s) { return true; }
  Atomics['load'] = function(t, i) { return t[i]; }
  Atomics['or'] = function(t, i, v) { var w = t[i]; t[i] |= v; return w; }
  Atomics['store'] = function(t, i, v) { t[i] = v; return v; }
  Atomics['sub'] = function(t, i, v) { var w = t[i]; t[i] -= v; return w; }
  Atomics['xor'] = function(t, i, v) { var w = t[i]; t[i] ^= v; return w; }
}


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
if (!ENVIRONMENT_IS_PTHREAD) {
  HEAP32[0] = 0x63736d65; /* 'emsc' */
} else {
  if (HEAP32[0] !== 0x63736d65) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;

if (ENVIRONMENT_IS_PTHREAD) runtimeInitialized = true; // The runtime is hosted in the main thread, and bits shared to pthreads via SharedArrayBuffer. No need to init again in pthread.

function preRun() {
  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  // Pass the thread address inside the asm.js scope to store it for fast access that avoids the need for a FFI out.
  __register_pthread_ptr(PThread.mainThreadBlock, /*isMainBrowserThread=*/!ENVIRONMENT_IS_WORKER, /*isMainRuntimeThread=*/1);
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
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
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
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
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
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
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
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
  // We should never get here in pthreads (could no-op this out if called in pthreads, but that might indicate a bug in caller side,
  // so good to be very explicit)
  assert(!ENVIRONMENT_IS_PTHREAD);
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
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

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;






// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return String.prototype.startsWith ?
      filename.startsWith(dataURIPrefix) :
      filename.indexOf(dataURIPrefix) === 0;
}





// === Body ===

var ASM_CONSTS = [function() { postMessage({ cmd: 'processQueuedMainThreadWork' }) },
 function() { return !!(Module['canvas']); },
 function() { Module['noExitRuntime'] = true }];

function _emscripten_asm_const_i(code) {
  return ASM_CONSTS[code]();
}



STATIC_BASE = GLOBAL_BASE;

STATICTOP = STATIC_BASE + 11648;
/* global initializers */ if (!ENVIRONMENT_IS_PTHREAD) __ATINIT__.push({ func: function() { ___emscripten_pthread_data_constructor() } });


if (!ENVIRONMENT_IS_PTHREAD) {
memoryInitializer = "data:application/octet-stream;base64,AAAAAGwBAADYAgAAawEAANcCAABqAQAA1gIAAGkBAADVAgAAaAEAANQCAABnAQAA0wIAAGYBAADSAgAAZQEAANECAABkAQAA0AIAAGMBAADPAgAAYgEAAM4CAABhAQAAzQIAAGABAADMAgAAXwEAAMsCAABeAQAAygIAAF0BAADJAgAAXAEAAMgCAABbAQAAxwIAAFoBAADGAgAAWQEAAMUCAABYAQAAxAIAAFcBAADDAgAAVgEAAMICAABVAQAAwQIAAFQBAADAAgAAUwEAAL8CAABSAQAAvgIAAFEBAAC9AgAAUAEAALwCAABPAQAAuwIAAE4BAAC6AgAATQEAALkCAABMAQAAuAIAAEsBAAC3AgAASgEAALYCAABJAQAAtQIAAEgBAAC0AgAARwEAALMCAABGAQAAsgIAAEUBAACxAgAARAEAALACAABDAQAArwIAAEIBAACuAgAAQQEAAK0CAABAAQAArAIAAD8BAACrAgAAPgEAAKoCAAA9AQAAqQIAADwBAACoAgAAOwEAAKcCAAA6AQAApgIAADkBAAClAgAAOAEAAKQCAAA3AQAAowIAADYBAACiAgAANQEAAKECAAA0AQAAoAIAADMBAACfAgAAMgEAAJ4CAAAxAQAAnQIAADABAACcAgAALwEAAJsCAAAuAQAAmgIAAC0BAACZAgAALAEAAJgCAAArAQAAlwIAACoBAACWAgAAKQEAAJUCAAAoAQAAlAIAACcBAACTAgAAJgEAAJICAAAlAQAAkQIAACQBAACQAgAAIwEAAI8CAAAiAQAAjgIAACEBAACNAgAAIAEAAIwCAAAfAQAAiwIAAB4BAACKAgAAHQEAAIkCAAAcAQAAiAIAABsBAACHAgAAGgEAAIYCAAAZAQAAhQIAABgBAACEAgAAFwEAAIMCAAAWAQAAggIAABUBAACBAgAAFAEAAIACAAATAQAAfwIAABIBAAB+AgAAEQEAAH0CAAAQAQAAfAIAAA8BAAB7AgAADgEAAHoCAAANAQAAeQIAAAwBAAB4AgAACwEAAHcCAAAKAQAAdgIAAAkBAAB1AgAACAEAAHQCAAAHAQAAcwIAAAYBAAByAgAABQEAAHECAAAEAQAAcAIAAAMBAABvAgAAAgEAAG4CAAABAQAAbQIAAAABAABsAgAA/wAAAGsCAAD+AAAAagIAAP0AAABpAgAA/AAAAGgCAAD7AAAAZwIAAPoAAABmAgAA+QAAAGUCAAD4AAAAZAIAAPcAAABjAgAA9gAAAGICAAD1AAAAYQIAAPQAAABgAgAA8wAAAF8CAADyAAAAXgIAAPEAAABdAgAA8AAAAFwCAADvAAAAWwIAAO4AAABaAgAA7QAAAFkCAADsAAAAWAIAAOsAAABXAgAA6gAAAFYCAADpAAAAVQIAAOgAAABUAgAA5wAAAFMCAADmAAAAUgIAAOUAAABRAgAA5AAAAFACAADjAAAATwIAAOIAAABOAgAA4QAAAE0CAADgAAAATAIAAN8AAABLAgAA3gAAAEoCAADdAAAASQIAANwAAABIAgAA2wAAAEcCAADaAAAARgIAANkAAABFAgAA2AAAAEQCAADXAAAAQwIAANYAAABCAgAA1QAAAEECAADUAAAAQAIAANMAAAA/AgAA0gAAAD4CAADRAAAAPQIAANAAAAA8AgAAzwAAADsCAADOAAAAOgIAAM0AAAA5AgAAzAAAADgCAADLAAAANwIAAMoAAAA2AgAAyQAAADUCAADIAAAANAIAAMcAAAAzAgAAxgAAADICAADFAAAAMQIAAMQAAAAwAgAAwwAAAC8CAADCAAAALgIAAMEAAAAtAgAAwAAAACwCAAC/AAAAKwIAAL4AAAAqAgAAvQAAACkCAAC8AAAAKAIAALsAAAAnAgAAugAAACYCAAC5AAAAJQIAALgAAAAkAgAAtwAAACMCAAC2AAAAIgIAALUAAAAhAgAAtAAAACACAACzAAAAHwIAALIAAAAeAgAAsQAAAB0CAACwAAAAHAIAAK8AAAAbAgAArgAAABoCAACtAAAAGQIAAKwAAAAYAgAAqwAAABcCAACqAAAAFgIAAKkAAAAVAgAAqAAAABQCAACnAAAAEwIAAKYAAAASAgAApQAAABECAACkAAAAEAIAAKMAAAAPAgAAogAAAA4CAAChAAAADQIAAKAAAAAMAgAAnwAAAAsCAACeAAAACgIAAJ0AAAAJAgAAnAAAAAgCAACbAAAABwIAAJoAAAAGAgAAmQAAAAUCAACYAAAABAIAAJcAAAADAgAAlgAAAAICAACVAAAAAQIAAJQAAAAAAgAAkwAAAP8BAACSAAAA/gEAAJEAAAD9AQAAkAAAAPwBAACPAAAA+wEAAI4AAAD6AQAAjQAAAPkBAACMAAAA+AEAAIsAAAD3AQAAigAAAPYBAACJAAAA9QEAAIgAAAD0AQAAhwAAAPMBAACGAAAA8gEAAIUAAADxAQAAhAAAAPABAACDAAAA7wEAAIIAAADuAQAAgQAAAO0BAACAAAAA7AEAAH8AAADrAQAAfgAAAOoBAAB9AAAA6QEAAHwAAADoAQAAewAAAOcBAAB6AAAA5gEAAHkAAADlAQAAeAAAAOQBAAB3AAAA4wEAAHYAAADiAQAAdQAAAOEBAAB0AAAA4AEAAHMAAADfAQAAcgAAAN4BAABxAAAA3QEAAHAAAADcAQAAbwAAANsBAABuAAAA2gEAAG0AAADZAQAAbAAAANgBAABrAAAA1wEAAGoAAADWAQAAaQAAANUBAABoAAAA1AEAAGcAAADTAQAAZgAAANIBAABlAAAA0QEAAGQAAADQAQAAYwAAAM8BAABiAAAAzgEAAGEAAADNAQAAYAAAAMwBAABfAAAAywEAAF4AAADKAQAAXQAAAMkBAABcAAAAyAEAAFsAAADHAQAAWgAAAMYBAABZAAAAxQEAAFgAAADEAQAAVwAAAMMBAABWAAAAwgEAAFUAAADBAQAAVAAAAMABAABTAAAAvwEAAFIAAAC+AQAAUQAAAL0BAABQAAAAvAEAAE8AAAC7AQAATgAAALoBAABNAAAAuQEAAEwAAAC4AQAASwAAALcBAABKAAAAtgEAAEkAAAC1AQAASAAAALQBAABHAAAAswEAAEYAAACyAQAARQAAALEBAABEAAAAsAEAAEMAAACvAQAAQgAAAK4BAABBAAAArQEAAEAAAACsAQAAPwAAAKsBAAA+AAAAqgEAAD0AAACpAQAAPAAAAKgBAAA7AAAApwEAADoAAACmAQAAOQAAAKUBAAA4AAAApAEAADcAAACjAQAANgAAAKIBAAA1AAAAoQEAADQAAACgAQAAMwAAAJ8BAAAyAAAAngEAADEAAACdAQAAMAAAAJwBAAAvAAAAmwEAAC4AAACaAQAALQAAAJkBAAAsAAAAmAEAACsAAACXAQAAKgAAAJYBAAApAAAAlQEAACgAAACUAQAAJwAAAJMBAAAmAAAAkgEAACUAAACRAQAAJAAAAJABAAAjAAAAjwEAACIAAACOAQAAIQAAAI0BAAAgAAAAjAEAAB8AAACLAQAAHgAAAIoBAAAdAAAAiQEAABwAAACIAQAAGwAAAIcBAAAaAAAAhgEAABkAAACFAQAAGAAAAIQBAAAXAAAAgwEAABYAAACCAQAAFQAAAIEBAAAUAAAAgAEAABMAAAB/AQAAEgAAAH4BAAARAAAAfQEAABAAAAB8AQAADwAAAHsBAAAOAAAAegEAAA0AAAB5AQAADAAAAHgBAAALAAAAdwEAAAoAAAB2AQAACQAAAHUBAAAIAAAAdAEAAAcAAABzAQAABgAAAHIBAAAFAAAAcQEAAAQAAABwAQAAAwAAAG8BAAACAAAAbgEAAAEAAABtAQAAAAAAAAEAAAAAAAAA/////wIAAAABAAAA/////wAAAAACAAAA/////wEAAAAAAAAAoAsAAAUAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAAAdCkAAAAEAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAr/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRyeXRlcyAlcwoAdHJpdHMACj0lcz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgBsZW46ICVkCgoAJWQALCAACj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoASW5zaWRlIHBkX3NlYXJjaCAlZAoAY3VybABIYXMgdGhyZWFkaW5nIHN1cHBvcnQgJWQuCgBTdGFydGluZyAlZCBzZWFyY2ggdGhyZWFkcy4KAFRocmVhZHMgQ3JlYXRlZC4KAFRocmVhZHMgQ29tcGxldGVkLgoATm8gdGhyZWFkIHN1cHBvcnQuCgBJbnNpZGUgZmluZF9ub25jZQoARm91bmQgTm9uY2UgJWxsZC4KAEluc2lkZSBwZF9zZWFyY2hfaW5pdAoAOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBuYW4ATkFOADAxMjM0NTY3ODlBQkNERUYuAFQhIhkNAQIDEUscDBAECx0SHidobm9wcWIgBQYPExQVGggWBygkFxgJCg4bHyUjg4J9JiorPD0+P0NHSk1YWVpbXF1eX2BhY2RlZmdpamtscnN0eXp7fABJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBlcnJvciBpbmZvcm1hdGlvbgAAeyByZXR1cm4gISEoTW9kdWxlWydjYW52YXMnXSk7IH0AI2NhbnZhcwBNb2R1bGVbJ25vRXhpdFJ1bnRpbWUnXSA9IHRydWUAQXBwbGljYXRpb24gbWFpbiB0aHJlYWQAZW1zY3JpcHRlbl9pc19tYWluX3J1bnRpbWVfdGhyZWFkKCkgJiYgImVtc2NyaXB0ZW5fbWFpbl90aHJlYWRfcHJvY2Vzc19xdWV1ZWRfY2FsbHMgbXVzdCBiZSBjYWxsZWQgZnJvbSB0aGUgbWFpbiB0aHJlYWQhIgBDOlxQcm9ncmFtIEZpbGVzICh4ODYpXGVtc2NyaXB0ZW5cZW1zY3JpcHRlblwxLjM3LjMzXHN5c3RlbVxsaWJccHRocmVhZFxsaWJyYXJ5X3B0aHJlYWQuYwBlbXNjcmlwdGVuX21haW5fdGhyZWFkX3Byb2Nlc3NfcXVldWVkX2NhbGxzADAgJiYgIkludmFsaWQgRW1zY3JpcHRlbiBwdGhyZWFkIF9kb19jYWxsIG9wY29kZSEiAF9kb19jYWxsAGNhbGwAZW1zY3JpcHRlbl9hc3luY19ydW5faW5fbWFpbl90aHJlYWQAcG9zdE1lc3NhZ2UoeyBjbWQ6ICdwcm9jZXNzUXVldWVkTWFpblRocmVhZFdvcmsnIH0p";
}





/* no memory initializer */
var tempDoublePtr;

if (!ENVIRONMENT_IS_PTHREAD) tempDoublePtr = alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + Pointer_stringify(condition) + ', at: ' + [filename ? Pointer_stringify(filename) : 'unknown filename', line, func ? Pointer_stringify(func) : 'unknown function']);
    }

  
  
  var PROCINFO={ppid:1,pid:42,sid:42,pgid:42};
  
  
  var __pthread_ptr=0;
  
  var __pthread_is_main_runtime_thread=0;
  
  var __pthread_is_main_browser_thread=0; var PThread={MAIN_THREAD_ID:1,mainThreadInfo:{schedPolicy:0,schedPrio:0},unusedWorkerPool:[],runningWorkers:[],initMainThreadBlock:function () {
        if (ENVIRONMENT_IS_PTHREAD) return undefined;
        PThread.mainThreadBlock = allocate(244, "i32*", ALLOC_STATIC);
  
        for (var i = 0; i < 244/4; ++i) HEAPU32[PThread.mainThreadBlock/4+i] = 0;
  
        // The pthread struct has a field that points to itself - this is used as a magic ID to detect whether the pthread_t
        // structure is 'alive'.
        HEAP32[(((PThread.mainThreadBlock)+(24))>>2)]=PThread.mainThreadBlock;
  
        // pthread struct robust_list head should point to itself.
        var headPtr = PThread.mainThreadBlock + 168;
        HEAP32[((headPtr)>>2)]=headPtr;
  
        // Allocate memory for thread-local storage.
        var tlsMemory = allocate(128 * 4, "i32*", ALLOC_STATIC);
        for (var i = 0; i < 128; ++i) HEAPU32[tlsMemory/4+i] = 0;
        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 116 ) >> 2, tlsMemory); // Init thread-local-storage memory array.
        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 52 ) >> 2, PThread.mainThreadBlock); // Main thread ID.
        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 56 ) >> 2, PROCINFO.pid); // Process ID.
  
      },pthreads:{},pthreadIdCounter:2,exitHandlers:null,setThreadStatus:function () {},runExitHandlers:function () {
        if (PThread.exitHandlers !== null) {
          while (PThread.exitHandlers.length > 0) {
            PThread.exitHandlers.pop()();
          }
          PThread.exitHandlers = null;
        }
  
        // Call into the musl function that runs destructors of all thread-specific data.
        if (ENVIRONMENT_IS_PTHREAD && threadInfoStruct) ___pthread_tsd_run_dtors();
      },threadExit:function (exitCode) {
        var tb = _pthread_self();
        if (tb) { // If we haven't yet exited?
          Atomics.store(HEAPU32, (tb + 4 ) >> 2, exitCode);
          // When we publish this, the main thread is free to deallocate the thread object and we are done.
          // Therefore set threadInfoStruct = 0; above to 'release' the object in this worker thread.
          Atomics.store(HEAPU32, (tb + 0 ) >> 2, 1);
  
          // Disable all cancellation so that executing the cleanup handlers won't trigger another JS
          // canceled exception to be thrown.
          Atomics.store(HEAPU32, (tb + 72 ) >> 2, 1/*PTHREAD_CANCEL_DISABLE*/);
          Atomics.store(HEAPU32, (tb + 76 ) >> 2, 0/*PTHREAD_CANCEL_DEFERRED*/);
          PThread.runExitHandlers();
  
          _emscripten_futex_wake(tb + 0, 2147483647);
          __register_pthread_ptr(0, 0, 0); // Unregister the thread block also inside the asm.js scope.
          threadInfoStruct = 0;
          if (ENVIRONMENT_IS_PTHREAD) {
            // This worker no longer owns any WebGL OffscreenCanvases, so transfer them back to parent thread.
            var transferList = [];
  
  
            postMessage({ cmd: 'exit' });
          }
        }
      },threadCancel:function () {
        PThread.runExitHandlers();
        Atomics.store(HEAPU32, (threadInfoStruct + 4 ) >> 2, -1/*PTHREAD_CANCELED*/);
        Atomics.store(HEAPU32, (threadInfoStruct + 0 ) >> 2, 1); // Mark the thread as no longer running.
        _emscripten_futex_wake(threadInfoStruct + 0, 2147483647); // wake all threads
        threadInfoStruct = selfThreadId = 0; // Not hosting a pthread anymore in this worker, reset the info structures to null.
        __register_pthread_ptr(0, 0, 0); // Unregister the thread block also inside the asm.js scope.
        postMessage({ cmd: 'cancelDone' });
      },terminateAllThreads:function () {
        for (var t in PThread.pthreads) {
          var pthread = PThread.pthreads[t];
          if (pthread) {
            PThread.freeThreadData(pthread);
            if (pthread.worker) pthread.worker.terminate();
          }
        }
        PThread.pthreads = {};
        for (var t in PThread.unusedWorkerPool) {
          var pthread = PThread.unusedWorkerPool[t];
          if (pthread) {
            PThread.freeThreadData(pthread);
            if (pthread.worker) pthread.worker.terminate();
          }
        }
        PThread.unusedWorkerPool = [];
        for (var t in PThread.runningWorkers) {
          var pthread = PThread.runningWorkers[t];
          if (pthread) {
            PThread.freeThreadData(pthread);
            if (pthread.worker) pthread.worker.terminate();
          }
        }
        PThread.runningWorkers = [];
      },freeThreadData:function (pthread) {
        if (!pthread) return;
        if (pthread.threadInfoStruct) {
          var tlsMemory = HEAP32[(((pthread.threadInfoStruct)+(116))>>2)];
          HEAP32[(((pthread.threadInfoStruct)+(116))>>2)]=0;
          _free(pthread.tlsMemory);
          _free(pthread.threadInfoStruct);
        }
        pthread.threadInfoStruct = 0;
        if (pthread.allocatedOwnStack && pthread.stackBase) _free(pthread.stackBase);
        pthread.stackBase = 0;
        if (pthread.worker) pthread.worker.pthread = null;
      },receiveObjectTransfer:function (data) {
      },allocateUnusedWorkers:function (numWorkers, onFinishedLoading) {
        if (typeof SharedArrayBuffer === 'undefined') return; // No multithreading support, no-op.
        Module['print']('Preallocating ' + numWorkers + ' workers for a pthread spawn pool.');
  
        var numWorkersLoaded = 0;
        for (var i = 0; i < numWorkers; ++i) {
          var pthreadMainJs = 'pthread-main.js';
          // Allow HTML module to configure the location where the 'pthread-main.js' file will be loaded from,
          // either via Module.locateFile() function, or via Module.pthreadMainPrefixURL string. If neither
          // of these are passed, then the default URL 'pthread-main.js' relative to the main html file is loaded.
          if (typeof Module['locateFile'] === 'function') pthreadMainJs = Module['locateFile'](pthreadMainJs);
          else if (Module['pthreadMainPrefixURL']) pthreadMainJs = Module['pthreadMainPrefixURL'] + pthreadMainJs;
          var worker = new Worker(pthreadMainJs);
  
          worker.onmessage = function(e) {
            var d = e.data;
            // TODO: Move the proxied call mechanism into a queue inside heap.
            if (d.proxiedCall) {
              var returnValue;
              var funcTable = (d.func >= 0) ? proxiedFunctionTable : ASM_CONSTS;
              var funcIdx = (d.func >= 0) ? d.func : (-1 - d.func);
              PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct; // Sometimes we need to backproxy events to the calling thread (e.g. HTML5 DOM events handlers such as emscripten_set_mousemove_callback()), so keep track in a globally accessible variable about the thread that initiated the proxying.
              switch(d.proxiedCall & 31) {
                case 1: returnValue = funcTable[funcIdx](); break;
                case 2: returnValue = funcTable[funcIdx](d.p0); break;
                case 3: returnValue = funcTable[funcIdx](d.p0, d.p1); break;
                case 4: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2); break;
                case 5: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3); break;
                case 6: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3, d.p4); break;
                case 7: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3, d.p4, d.p5); break;
                case 8: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3, d.p4, d.p5, d.p6); break;
                case 9: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3, d.p4, d.p5, d.p6, d.p7); break;
                case 10: returnValue = funcTable[funcIdx](d.p0, d.p1, d.p2, d.p3, d.p4, d.p5, d.p6, d.p7, d.p8); break;
                default:
                  if (d.proxiedCall) {
                    Module['printErr']("worker sent an unknown proxied call idx " + d.proxiedCall);
                    console.error(e.data);
                  }
                  break;
              }
              if (d.returnValue) {
                if (d.proxiedCall < 32) HEAP32[d.returnValue >> 2] = returnValue;
                else HEAPF64[d.returnValue >> 3] = returnValue;
              }
              var waitAddress = d.waitAddress;
              if (waitAddress) {
                Atomics.store(HEAP32, waitAddress >> 2, 1);
                Atomics.wake(HEAP32, waitAddress >> 2, 1);
              }
              return;
            }
  
            // If this message is intended to a recipient that is not the main thread, forward it to the target thread.
            if (d.targetThread && d.targetThread != _pthread_self()) {
              var thread = PThread.pthreads[d.targetThread];
              if (thread) {
                thread.worker.postMessage(e.data, d.transferList);
              } else {
                console.error('Internal error! Worker sent a message "' + d.cmd + '" to target pthread ' + d.targetThread + ', but that thread no longer exists!');
              }
              return;
            }
  
            if (d.cmd === 'processQueuedMainThreadWork') {
              // TODO: Must post message to main Emscripten thread in PROXY_TO_WORKER mode.
              _emscripten_main_thread_process_queued_calls();
            } else if (d.cmd === 'spawnThread') {
              __spawn_thread(e.data);
            } else if (d.cmd === 'cleanupThread') {
              __cleanup_thread(d.thread);
            } else if (d.cmd === 'killThread') {
              __kill_thread(d.thread);
            } else if (d.cmd === 'cancelThread') {
              __cancel_thread(d.thread);
            } else if (d.cmd === 'loaded') {
              ++numWorkersLoaded;
              if (numWorkersLoaded === numWorkers && onFinishedLoading) {
                onFinishedLoading();
              }
            } else if (d.cmd === 'print') {
              Module['print']('Thread ' + d.threadId + ': ' + d.text);
            } else if (d.cmd === 'printErr') {
              Module['printErr']('Thread ' + d.threadId + ': ' + d.text);
            } else if (d.cmd === 'alert') {
              alert('Thread ' + d.threadId + ': ' + d.text);
            } else if (d.cmd === 'exit') {
              // currently no-op
            } else if (d.cmd === 'cancelDone') {
              PThread.freeThreadData(worker.pthread);
              worker.pthread = undefined; // Detach the worker from the pthread object, and return it to the worker pool as an unused worker.
              PThread.unusedWorkerPool.push(worker);
              // TODO: Free if detached.
              PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker.pthread), 1); // Not a running Worker anymore.
            } else if (d.cmd === 'objectTransfer') {
              PThread.receiveObjectTransfer(e.data);
            } else if (e.data.target === 'setimmediate') {
              worker.postMessage(e.data); // Worker wants to postMessage() to itself to implement setImmediate() emulation.
            } else {
              Module['printErr']("worker sent an unknown command " + d.cmd);
            }
          };
  
          worker.onerror = function(e) {
            Module['printErr']('pthread sent an error! ' + e.filename + ':' + e.lineno + ': ' + e.message);
          };
  
          // Allocate tempDoublePtr for the worker. This is done here on the worker's behalf, since we may need to do this statically
          // if the runtime has not been loaded yet, etc. - so we just use getMemory, which is main-thread only.
          var tempDoublePtr = getMemory(8); // TODO: leaks. Cleanup after worker terminates.
  
          // Ask the new worker to load up the Emscripten-compiled page. This is a heavy operation.
          worker.postMessage({
              cmd: 'load',
              // If the application main .js file was loaded from a Blob, then it is not possible
              // to access the URL of the current script that could be passed to a Web Worker so that
              // it could load up the same file. In that case, developer must either deliver the Blob
              // object in Module['mainScriptUrlOrBlob'], or a URL to it, so that pthread Workers can
              // independently load up the same main application file.
              urlOrBlob: Module['mainScriptUrlOrBlob'] || currentScriptUrl,
              buffer: HEAPU8.buffer,
              tempDoublePtr: tempDoublePtr,
              TOTAL_MEMORY: TOTAL_MEMORY,
              STATICTOP: STATICTOP,
              DYNAMIC_BASE: DYNAMIC_BASE,
              DYNAMICTOP_PTR: DYNAMICTOP_PTR,
              PthreadWorkerInit: PthreadWorkerInit
            });
          PThread.unusedWorkerPool.push(worker);
        }
      },getNewWorker:function () {
        if (PThread.unusedWorkerPool.length == 0) PThread.allocateUnusedWorkers(1);
        if (PThread.unusedWorkerPool.length > 0) return PThread.unusedWorkerPool.pop();
        else return null;
      },busySpinWait:function (msecs) {
        var t = performance.now() + msecs;
        while(performance.now() < t) {
          ;
        }
      }};function ___call_main(argc, argv) {
      return _main(argc, argv);
    }

  
  
  function _emscripten_get_now() { abort() }
  
  function _emscripten_get_now_is_monotonic() {
      // return whether emscripten_get_now is guaranteed monotonic; the Date.now
      // implementation is not :(
      return ENVIRONMENT_IS_NODE || (typeof dateNow !== 'undefined') ||
          ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self['performance'] && self['performance']['now']);
    }
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else Module.printErr('failed to set errno from JS');
      return value;
    }function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if (clk_id === 1 && _emscripten_get_now_is_monotonic()) {
        now = _emscripten_get_now();
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      HEAP32[((tp)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)]=((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }function ___clock_gettime() {
  return _clock_gettime.apply(null, arguments)
  }

  function ___lock() {}

  
  
  
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function (stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              var isPosixPlatform = (process.platform != 'win32'); // Node doesn't offer a direct check, so test by exclusion
  
              var fd = process.stdin.fd;
              if (isPosixPlatform) {
                // Linux and Mac cannot use process.stdin.fd (which isn't set up as sync)
                var usingDevice = false;
                try {
                  fd = fs.openSync('/dev/stdin', 'r');
                  usingDevice = true;
                } catch (e) {}
              }
  
              try {
                bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (usingDevice) { fs.closeSync(fd); }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
  
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            Module['print'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function (tty) {
          if (tty.output && tty.output.length > 0) {
            Module['printErr'](UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function (node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function (node) {
        if (!node.contents) return new Uint8Array;
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function (node, newCapacity) {
        // If we are asked to expand the size of a file that already exists, revert to using a standard JS array to store the file
        // instead of a typed array. This makes resizing the array more flexible because we can just .push() elements at the back to
        // increase the size.
        if (node.contents && node.contents.subarray && newCapacity > node.contents.length) {
          node.contents = MEMFS.getFileDataAsRegularArray(node);
          node.usedBytes = node.contents.length; // We might be writing to a lazy-loaded file which had overridden this property, so force-reset it.
        }
  
        if (!node.contents || node.contents.subarray) { // Keep using a typed array if creating a new storage, or if old one was a typed array as well.
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
          // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
          // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
          // avoid overshooting the allocation cap by a very large margin.
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) | 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity); // Allocate new storage.
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
          return;
        }
        // Not using a typed array to back the file storage. Use a standard JS array instead.
        if (!node.contents && newCapacity > 0) node.contents = [];
        while (node.contents.length < newCapacity) node.contents.push(0);
      },resizeFileStorage:function (node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(new ArrayBuffer(newSize)); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position+length);
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < stream.node.usedBytes) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function (stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var IDBFS={dbs:{},indexedDB:function () {
        if (typeof indexedDB !== 'undefined') return indexedDB;
        var ret = null;
        if (typeof window === 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function (name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:function (mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { timestamp: stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function (mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = function(e) {
              callback(this.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = function(event) {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db: db, entries: entries });
              }
  
              entries[cursor.primaryKey] = { timestamp: cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },loadLocalEntry:function (path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry.mode);
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:function (src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        };
  
        transaction.onerror = function(e) {
          done(this.error);
          e.preventDefault();
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
        var flags = process["binding"]("constants");
        // Node.js 4 compatibility: it has no namespaces for constants
        if (flags["fs"]) {
          flags = flags["fs"];
        }
        NODEFS.flagsForNodeMap = {
          "1024": flags["O_APPEND"],
          "64": flags["O_CREAT"],
          "128": flags["O_EXCL"],
          "0": flags["O_RDONLY"],
          "2": flags["O_RDWR"],
          "4096": flags["O_SYNC"],
          "512": flags["O_TRUNC"],
          "1": flags["O_WRONLY"]
        };
      },bufferFrom:function (arrayBuffer) {
        // Node.js < 4.5 compatibility: Buffer.from does not support ArrayBuffer
        // Buffer.from before 4.5 was just a method inherited from Uint8Array
        // Buffer.alloc has been added with Buffer.from together, so check it instead
        return Buffer.alloc ? Buffer.from(arrayBuffer) : new Buffer(arrayBuffer);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // Node.js on Windows never represents permission bit 'x', so
            // propagate read bits to execute bits
            stat.mode = stat.mode | ((stat.mode & 292) >> 2);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsForNode:function (flags) {
        flags &= ~0x200000 /*O_PATH*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x800 /*O_NONBLOCK*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x8000 /*O_LARGEFILE*/; // Ignore this flag from musl, otherwise node.js fails to open the file.
        flags &= ~0x80000 /*O_CLOEXEC*/; // Some applications may pass it; it makes no sense for a single process.
        var newFlags = 0;
        for (var k in NODEFS.flagsForNodeMap) {
          if (flags & k) {
            newFlags |= NODEFS.flagsForNodeMap[k];
            flags ^= k;
          }
        }
  
        if (!flags) {
          return newFlags;
        } else {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            path = fs.readlinkSync(path);
            path = NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root), path);
            return path;
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsForNode(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // Node.js < 6 compatibility: node errors on 0 length reads
          if (length === 0) return 0;
          try {
            return fs.readSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },write:function (stream, buffer, offset, length, position) {
          try {
            return fs.writeSync(stream.nfd, NODEFS.bufferFrom(buffer.buffer), offset, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
  
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
  
          return position;
        }}};
  
  var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:function (mount) {
        assert(ENVIRONMENT_IS_WORKER);
        if (!WORKERFS.reader) WORKERFS.reader = new FileReaderSync();
        var root = WORKERFS.createNode(null, '/', WORKERFS.DIR_MODE, 0);
        var createdParents = {};
        function ensureParent(path) {
          // return the parent node, creating subdirs as necessary
          var parts = path.split('/');
          var parent = root;
          for (var i = 0; i < parts.length-1; i++) {
            var curr = parts.slice(0, i+1).join('/');
            // Issue 4254: Using curr as a node name will prevent the node
            // from being found in FS.nameTable when FS.open is called on
            // a path which holds a child of this node,
            // given that all FS functions assume node names
            // are just their corresponding parts within their given path,
            // rather than incremental aggregates which include their parent's
            // directories.
            if (!createdParents[curr]) {
              createdParents[curr] = WORKERFS.createNode(parent, parts[i], WORKERFS.DIR_MODE, 0);
            }
            parent = createdParents[curr];
          }
          return parent;
        }
        function base(path) {
          var parts = path.split('/');
          return parts[parts.length-1];
        }
        // We also accept FileList here, by using Array.prototype
        Array.prototype.forEach.call(mount.opts["files"] || [], function(file) {
          WORKERFS.createNode(ensureParent(file.name), base(file.name), WORKERFS.FILE_MODE, 0, file, file.lastModifiedDate);
        });
        (mount.opts["blobs"] || []).forEach(function(obj) {
          WORKERFS.createNode(ensureParent(obj["name"]), base(obj["name"]), WORKERFS.FILE_MODE, 0, obj["data"]);
        });
        (mount.opts["packages"] || []).forEach(function(pack) {
          pack['metadata'].files.forEach(function(file) {
            var name = file.filename.substr(1); // remove initial slash
            WORKERFS.createNode(ensureParent(name), base(name), WORKERFS.FILE_MODE, 0, pack['blob'].slice(file.start, file.end));
          });
        });
        return root;
      },createNode:function (parent, name, mode, dev, contents, mtime) {
        var node = FS.createNode(parent, name, mode);
        node.mode = mode;
        node.node_ops = WORKERFS.node_ops;
        node.stream_ops = WORKERFS.stream_ops;
        node.timestamp = (mtime || new Date).getTime();
        assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE);
        if (mode === WORKERFS.FILE_MODE) {
          node.size = contents.size;
          node.contents = contents;
        } else {
          node.size = 4096;
          node.contents = {};
        }
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },node_ops:{getattr:function (node) {
          return {
            dev: 1,
            ino: undefined,
            mode: node.mode,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: undefined,
            size: node.size,
            atime: new Date(node.timestamp),
            mtime: new Date(node.timestamp),
            ctime: new Date(node.timestamp),
            blksize: 4096,
            blocks: Math.ceil(node.size / 4096),
          };
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
        },lookup:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        },mknod:function (parent, name, mode, dev) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rename:function (oldNode, newDir, newName) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },unlink:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },rmdir:function (parent, name) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readdir:function (node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newName, oldPath) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        },readlink:function (node) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          if (position >= stream.node.size) return 0;
          var chunk = stream.node.contents.slice(position, position + length);
          var ab = WORKERFS.reader.readAsArrayBuffer(chunk);
          buffer.set(new Uint8Array(ab), offset);
          return chunk.size;
        },write:function (stream, buffer, offset, length, position) {
          throw new FS.ErrnoError(ERRNO_CODES.EIO);
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.size;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return position;
        }}};
  
  var _stdin; if (ENVIRONMENT_IS_PTHREAD) _stdin = PthreadWorkerInit._stdin; else PthreadWorkerInit._stdin = _stdin = allocate(1, "i32*", ALLOC_STATIC);
  
  var _stdout; if (ENVIRONMENT_IS_PTHREAD) _stdout = PthreadWorkerInit._stdout; else PthreadWorkerInit._stdout = _stdout = allocate(1, "i32*", ALLOC_STATIC);
  
  var _stderr; if (ENVIRONMENT_IS_PTHREAD) _stderr = PthreadWorkerInit._stderr; else PthreadWorkerInit._stderr = _stderr = allocate(1, "i32*", ALLOC_STATIC);var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
  
          FS.FSNode.prototype = {};
  
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
  
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); }
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); }
            }
          });
        }
  
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return !!node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        var err = FS.nodePermissions(dir, 'x');
        if (err) return err;
        if (!dir.node_ops.lookup) return ERRNO_CODES.EACCES;
        return 0;
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },getMounts:function (mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          console.log('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(err) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(err);
        }
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function (path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != ERRNO_CODES.EEXIST) throw e;
          }
        }
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        if (!PATH.resolve(oldpath)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          console.log("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return PATH.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var err = FS.mayOpen(node, flags);
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          console.log("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function (stream) {
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },msync:function (stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function (stream) {
        return 0;
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto !== 'undefined') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else if (ENVIRONMENT_IS_NODE) {
          // for nodejs
          random_device = function() { return require('crypto')['randomBytes'](1)[0]; };
        } else {
          // default for ES5 platforms
          random_device = function() { return (Math.random()*256)|0; };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function () {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
  
        var stdout = FS.open('/dev/stdout', 'w');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
  
        var stderr = FS.open('/dev/stderr', 'w');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          //Module.printErr(stackTrace()); // useful for debugging
          this.node = node;
          this.setErrno = function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          // Node.js compatibility: assigning on this.stack fails on Node 4 (but fixed on Node 8)
          if (this.stack) Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
          if (this.stack) this.stack = demangleAll(this.stack);
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
          'NODEFS': NODEFS,
          'WORKERFS': WORKERFS,
        };
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        }
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        }
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(xhr.response || []);
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        }
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:function (dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function (func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -ERRNO_CODES.ENOTDIR;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        HEAP32[(((buf)+(36))>>2)]=stat.size;
        HEAP32[(((buf)+(40))>>2)]=4096;
        HEAP32[(((buf)+(44))>>2)]=stat.blocks;
        HEAP32[(((buf)+(48))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(52))>>2)]=0;
        HEAP32[(((buf)+(56))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=stat.ino;
        return 0;
      },doMsync:function (addr, stream, len, flags) {
        var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
        FS.msync(stream, buffer, 0, len, flags);
      },doMkdir:function (path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function (path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -ERRNO_CODES.EINVAL;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function (path, buf, bufsize) {
        if (bufsize <= 0) return -ERRNO_CODES.EINVAL;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function (path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -ERRNO_CODES.EINVAL;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -ERRNO_CODES.EACCES;
        }
        return 0;
      },doDup:function (path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },getStreamFromFD:function () {
        var stream = FS.getStream(SYSCALLS.get());
        if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return stream;
      },getSocketFromFD:function () {
        var socket = SOCKFS.getSocket(SYSCALLS.get());
        if (!socket) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        return socket;
      },getSocketAddress:function (allowNull) {
        var addrp = SYSCALLS.get(), addrlen = SYSCALLS.get();
        if (allowNull && addrp === 0) return null;
        var info = __read_sockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall140(which, varargs) {if (ENVIRONMENT_IS_PTHREAD) { return _emscripten_sync_run_in_main_thread_2(138, 140, varargs) }
  SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      // NOTE: offset_high is unused - Emscripten's off_t is 32-bit
      var offset = offset_low;
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall146(which, varargs) {if (ENVIRONMENT_IS_PTHREAD) { return _emscripten_sync_run_in_main_thread_2(138, 146, varargs) }
  SYSCALLS.varargs = varargs;
  try {
   // writev
      var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      return SYSCALLS.doWritev(stream, iov, iovcnt);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall54(which, varargs) {if (ENVIRONMENT_IS_PTHREAD) { return _emscripten_sync_run_in_main_thread_2(138, 54, varargs) }
  SYSCALLS.varargs = varargs;
  try {
   // ioctl
      var stream = SYSCALLS.getStreamFromFD(), op = SYSCALLS.get();
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return -ERRNO_CODES.EINVAL; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -ERRNO_CODES.ENOTTY;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall6(which, varargs) {if (ENVIRONMENT_IS_PTHREAD) { return _emscripten_sync_run_in_main_thread_2(138, 6, varargs) }
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

  
  
   
  
   
  
  var cttz_i8; if (ENVIRONMENT_IS_PTHREAD) cttz_i8 = PthreadWorkerInit.cttz_i8; else PthreadWorkerInit.cttz_i8 = cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STATIC);   

  function ___unlock() {}

   

   

   

  var _emscripten_asm_const_int=true;

  
  function _emscripten_conditional_set_current_thread_status_js(expectedStatus, newStatus) {
    } 

  
  var __main_thread_futex_wait_address; if (ENVIRONMENT_IS_PTHREAD) __main_thread_futex_wait_address = PthreadWorkerInit.__main_thread_futex_wait_address; else PthreadWorkerInit.__main_thread_futex_wait_address = __main_thread_futex_wait_address = allocate(1, "i32*", ALLOC_STATIC);function _emscripten_futex_wait(addr, val, timeout) {
      if (addr <= 0 || addr > HEAP8.length || addr&3 != 0) return -22;
  //    dump('futex_wait addr:' + addr + ' by thread: ' + _pthread_self() + (ENVIRONMENT_IS_PTHREAD?'(pthread)':'') + '\n');
      if (ENVIRONMENT_IS_WORKER) {
        var ret = Atomics.wait(HEAP32, addr >> 2, val, timeout);
  //    dump('futex_wait done by thread: ' + _pthread_self() + (ENVIRONMENT_IS_PTHREAD?'(pthread)':'') + '\n');
        if (ret === 'timed-out') return -110;
        if (ret === 'not-equal') return -11;
        if (ret === 'ok') return 0;
        throw 'Atomics.wait returned an unexpected value ' + ret;
      } else {
        // Atomics.wait is not available in the main browser thread, so simulate it via busy spinning.
        var loadedVal = Atomics.load(HEAP32, addr >> 2);
        if (val != loadedVal) return -11;
  
        var tNow = performance.now();
        var tEnd = tNow + timeout;
  
  
        // Register globally which address the main thread is simulating to be waiting on. When zero, main thread is not waiting on anything,
        // and on nonzero, the contents of address pointed by __main_thread_futex_wait_address tell which address the main thread is simulating its wait on.
        Atomics.store(HEAP32, __main_thread_futex_wait_address >> 2, addr);
        var ourWaitAddress = addr; // We may recursively re-enter this function while processing queued calls, in which case we'll do a spurious wakeup of the older wait operation.
        while (addr == ourWaitAddress) {
          tNow = performance.now();
          if (tNow > tEnd) {
            return -110;
          }
          _emscripten_main_thread_process_queued_calls(); // We are performing a blocking loop here, so must pump any pthreads if they want to perform operations that are proxied.
          addr = Atomics.load(HEAP32, __main_thread_futex_wait_address >> 2); // Look for a worker thread waking us up.
        }
        return 0;
      }
    }

  function _emscripten_futex_wake(addr, count) {
      if (addr <= 0 || addr > HEAP8.length || addr&3 != 0 || count < 0) return -22;
      if (count == 0) return 0;
  //    dump('futex_wake addr:' + addr + ' by thread: ' + _pthread_self() + (ENVIRONMENT_IS_PTHREAD?'(pthread)':'') + '\n');
  
      // See if main thread is waiting on this address? If so, wake it up by resetting its wake location to zero.
      // Note that this is not a fair procedure, since we always wake main thread first before any workers, so
      // this scheme does not adhere to real queue-based waiting.
      var mainThreadWaitAddress = Atomics.load(HEAP32, __main_thread_futex_wait_address >> 2);
      var mainThreadWoken = 0;
      if (mainThreadWaitAddress == addr) {
        var loadedAddr = Atomics.compareExchange(HEAP32, __main_thread_futex_wait_address >> 2, mainThreadWaitAddress, 0);
        if (loadedAddr == mainThreadWaitAddress) {
          --count;
          mainThreadWoken = 1;
          if (count <= 0) return 1;
        }
      }
  
      // Wake any workers waiting on this address.
      var ret = Atomics.wake(HEAP32, addr >> 2, count);
      if (ret >= 0) return ret + mainThreadWoken;
      throw 'Atomics.wake returned an unexpected value ' + ret;
    }


  function _emscripten_has_threading_support() {
      return typeof SharedArrayBuffer !== 'undefined';
    }

   

  
  function _emscripten_set_current_thread_status_js(newStatus) {
    } 

  
  function _emscripten_set_thread_name_js(threadId, name) {
    } 

  function _emscripten_syscall(which, varargs) {
    switch (which) {
      case 140: return ___syscall140(which, varargs);
      case 146: return ___syscall146(which, varargs);
      case 54: return ___syscall54(which, varargs);
      case 6: return ___syscall6(which, varargs);
      default: throw "surprising proxied syscall: " + which;
    }
  }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }



   

  function _llvm_cttz_i64(l, h) {
      var ret = _llvm_cttz_i32(l);
      if (ret == 32) ret += _llvm_cttz_i32(h);
      return ((setTempRet0(0),ret)|0);
    }

  function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }

  function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length-1;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 

   

  
  function __spawn_thread(threadParams) {
      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! _spawn_thread() can only ever be called from main application thread!';
  
      var worker = PThread.getNewWorker();
      if (worker.pthread !== undefined) throw 'Internal error!';
      if (!threadParams.pthread_ptr) throw 'Internal error, no pthread ptr!';
      PThread.runningWorkers.push(worker);
  
      // Allocate memory for thread-local storage and initialize it to zero.
      var tlsMemory = _malloc(128 * 4);
      for (var i = 0; i < 128; ++i) {
        HEAP32[(((tlsMemory)+(i*4))>>2)]=0;
      }
  
      var pthread = PThread.pthreads[threadParams.pthread_ptr] = { // Create a pthread info object to represent this thread.
        worker: worker,
        stackBase: threadParams.stackBase,
        stackSize: threadParams.stackSize,
        allocatedOwnStack: threadParams.allocatedOwnStack,
        thread: threadParams.pthread_ptr,
        threadInfoStruct: threadParams.pthread_ptr // Info area for this thread in Emscripten HEAP (shared)
      };
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 0 ) >> 2, 0); // threadStatus <- 0, meaning not yet exited.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 4 ) >> 2, 0); // threadExitCode <- 0.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 20 ) >> 2, 0); // profilerBlock <- 0.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 80 ) >> 2, threadParams.detached);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 116 ) >> 2, tlsMemory); // Init thread-local-storage memory array.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 60 ) >> 2, 0); // Mark initial status to unused.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 52 ) >> 2, pthread.threadInfoStruct); // Main thread ID.
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 56 ) >> 2, PROCINFO.pid); // Process ID.
  
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 120) >> 2, threadParams.stackSize);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 96) >> 2, threadParams.stackSize);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 92) >> 2, threadParams.stackBase);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 120 + 8) >> 2, threadParams.stackBase);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 120 + 12) >> 2, threadParams.detached);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 120 + 20) >> 2, threadParams.schedPolicy);
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 120 + 24) >> 2, threadParams.schedPrio);
  
      var global_libc = _emscripten_get_global_libc();
      var global_locale = global_libc + 40;
      Atomics.store(HEAPU32, (pthread.threadInfoStruct + 188) >> 2, global_locale);
  
  
      worker.pthread = pthread;
  
      // Ask the worker to start executing its pthread entry point function.
      worker.postMessage({
        cmd: 'run',
        start_routine: threadParams.startRoutine,
        arg: threadParams.arg,
        threadInfoStruct: threadParams.pthread_ptr,
        selfThreadId: threadParams.pthread_ptr, // TODO: Remove this since thread ID is now the same as the thread address.
        parentThreadId: threadParams.parent_pthread_ptr,
        stackBase: threadParams.stackBase,
        stackSize: threadParams.stackSize,
      }, threadParams.transferList);
    }
  
  function _pthread_getschedparam(thread, policy, schedparam) {
      if (!policy && !schedparam) return ERRNO_CODES.EINVAL;
  
      if (!thread) {
        Module['printErr']('pthread_getschedparam called with a null thread pointer!');
        return ERRNO_CODES.ESRCH;
      }
      var self = HEAP32[(((thread)+(24))>>2)];
      if (self != thread) {
        Module['printErr']('pthread_getschedparam attempted on thread ' + thread + ', which does not point to a valid thread, or does not exist anymore!');
        return ERRNO_CODES.ESRCH;
      }
  
      var schedPolicy = Atomics.load(HEAPU32, (thread + 120 + 20 ) >> 2);
      var schedPrio = Atomics.load(HEAPU32, (thread + 120 + 24 ) >> 2);
  
      if (policy) HEAP32[((policy)>>2)]=schedPolicy;
      if (schedparam) HEAP32[((schedparam)>>2)]=schedPrio;
      return 0;
    }
  
   function _pthread_create(pthread_ptr, attr, start_routine, arg) {
      if (typeof SharedArrayBuffer === 'undefined') {
        Module['printErr']('Current environment does not support SharedArrayBuffer, pthreads are not available!');
        return 11;
      }
      if (!pthread_ptr) {
        Module['printErr']('pthread_create called with a null thread pointer!');
        return 22;
      }
  
      var transferList = []; // List of JS objects that will transfer ownership to the Worker hosting the thread
  
  
      // Synchronously proxy the thread creation to main thread if possible. If we need to transfer ownership of objects, then
      // proxy asynchronously via postMessage.
      if (ENVIRONMENT_IS_PTHREAD && transferList.length == 0) {
        return _emscripten_sync_run_in_main_thread_4(137, pthread_ptr, attr, start_routine, arg);
      }
  
      var stackSize = 0;
      var stackBase = 0;
      var detached = 0; // Default thread attr is PTHREAD_CREATE_JOINABLE, i.e. start as not detached.
      var schedPolicy = 0; /*SCHED_OTHER*/
      var schedPrio = 0;
      if (attr) {
        stackSize = HEAP32[((attr)>>2)];
        stackBase = HEAP32[(((attr)+(8))>>2)];
        detached = HEAP32[(((attr)+(12))>>2)] != 0/*PTHREAD_CREATE_JOINABLE*/;
        var inheritSched = HEAP32[(((attr)+(16))>>2)] == 0/*PTHREAD_INHERIT_SCHED*/;
        if (inheritSched) {
          var prevSchedPolicy = HEAP32[(((attr)+(20))>>2)];
          var prevSchedPrio = HEAP32[(((attr)+(24))>>2)];
          _pthread_getschedparam(_pthread_self(), attr + 20, attr + 24);
          schedPolicy = HEAP32[(((attr)+(20))>>2)];
          schedPrio = HEAP32[(((attr)+(24))>>2)];
          HEAP32[(((attr)+(20))>>2)]=prevSchedPolicy;
          HEAP32[(((attr)+(24))>>2)]=prevSchedPrio;
        } else {
          schedPolicy = HEAP32[(((attr)+(20))>>2)];
          schedPrio = HEAP32[(((attr)+(24))>>2)];
        }
      }
      stackSize += 81920 /*DEFAULT_STACK_SIZE*/;
      var allocatedOwnStack = stackBase == 0; // If allocatedOwnStack == true, then the pthread impl maintains the stack allocation.
      if (allocatedOwnStack) {
        stackBase = _malloc(stackSize); // Allocate a stack if the user doesn't want to place the stack in a custom memory area.
      } else {
        // Musl stores the stack base address assuming stack grows downwards, so adjust it to Emscripten convention that the
        // stack grows upwards instead.
        stackBase -= stackSize;
        assert(stackBase > 0);
      }
  
      // Allocate thread block (pthread_t structure).
      var threadInfoStruct = _malloc(244);
      for (var i = 0; i < 244 >> 2; ++i) HEAPU32[(threadInfoStruct>>2) + i] = 0; // zero-initialize thread structure.
      HEAP32[((pthread_ptr)>>2)]=threadInfoStruct;
  
      // The pthread struct has a field that points to itself - this is used as a magic ID to detect whether the pthread_t
      // structure is 'alive'.
      HEAP32[(((threadInfoStruct)+(24))>>2)]=threadInfoStruct;
  
      // pthread struct robust_list head should point to itself.
      var headPtr = threadInfoStruct + 168;
      HEAP32[((headPtr)>>2)]=headPtr;
  
      var threadParams = {
        stackBase: stackBase,
        stackSize: stackSize,
        allocatedOwnStack: allocatedOwnStack,
        schedPolicy: schedPolicy,
        schedPrio: schedPrio,
        detached: detached,
        startRoutine: start_routine,
        pthread_ptr: threadInfoStruct,
        parent_pthread_ptr: _pthread_self(),
        arg: arg,
        transferList: transferList
      };
  
      if (ENVIRONMENT_IS_PTHREAD) {
        // The prepopulated pool of web workers that can host pthreads is stored in the main JS thread. Therefore if a
        // pthread is attempting to spawn a new thread, the thread creation must be deferred to the main JS thread.
        threadParams.cmd = 'spawnThread';
        postMessage(threadParams, transferList);
      } else {
        // We are the main thread, so we have the pthread warmup pool in this thread and can fire off JS thread creation
        // directly ourselves.
        __spawn_thread(threadParams);
      }
  
      return 0;
    }

  
  function __cleanup_thread(pthread_ptr) {
      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! _cleanup_thread() can only ever be called from main application thread!';
      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in _cleanup_thread!';
      HEAP32[(((pthread_ptr)+(24))>>2)]=0;
      var pthread = PThread.pthreads[pthread_ptr];
      var worker = pthread.worker;
      PThread.freeThreadData(pthread);
      worker.pthread = undefined; // Detach the worker from the pthread object, and return it to the worker pool as an unused worker.
      PThread.unusedWorkerPool.push(worker);
      PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker.pthread), 1); // Not a running Worker anymore.
    }
  
  function __pthread_testcancel_js() {
      if (!ENVIRONMENT_IS_PTHREAD) return;
      if (!threadInfoStruct) return;
      var cancelDisabled = Atomics.load(HEAPU32, (threadInfoStruct + 72 ) >> 2);
      if (cancelDisabled) return;
      var canceled = Atomics.load(HEAPU32, (threadInfoStruct + 0 ) >> 2);
      if (canceled == 2) throw 'Canceled!';
    }function _pthread_join(thread, status) {
      if (!thread) {
        Module['printErr']('pthread_join attempted on a null thread pointer!');
        return ERRNO_CODES.ESRCH;
      }
      if (ENVIRONMENT_IS_PTHREAD && selfThreadId == thread) {
        Module['printErr']('PThread ' + thread + ' is attempting to join to itself!');
        return ERRNO_CODES.EDEADLK;
      }
      else if (!ENVIRONMENT_IS_PTHREAD && PThread.mainThreadBlock == thread) {
        Module['printErr']('Main thread ' + thread + ' is attempting to join to itself!');
        return ERRNO_CODES.EDEADLK;
      }
      var self = HEAP32[(((thread)+(24))>>2)];
      if (self != thread) {
        Module['printErr']('pthread_join attempted on thread ' + thread + ', which does not point to a valid thread, or does not exist anymore!');
        return ERRNO_CODES.ESRCH;
      }
  
      var detached = Atomics.load(HEAPU32, (thread + 80 ) >> 2);
      if (detached) {
        Module['printErr']('Attempted to join thread ' + thread + ', which was already detached!');
        return ERRNO_CODES.EINVAL; // The thread is already detached, can no longer join it!
      }
      for (;;) {
        var threadStatus = Atomics.load(HEAPU32, (thread + 0 ) >> 2);
        if (threadStatus == 1) { // Exited?
          var threadExitCode = Atomics.load(HEAPU32, (thread + 4 ) >> 2);
          if (status) HEAP32[((status)>>2)]=threadExitCode;
          Atomics.store(HEAPU32, (thread + 80 ) >> 2, 1); // Mark the thread as detached.
  
          if (!ENVIRONMENT_IS_PTHREAD) __cleanup_thread(thread);
          else postMessage({ cmd: 'cleanupThread', thread: thread});
          return 0;
        }
        // TODO HACK! Replace the _js variant with just _pthread_testcancel:
        //_pthread_testcancel();
        __pthread_testcancel_js();
        // In main runtime thread (the thread that initialized the Emscripten C runtime and launched main()), assist pthreads in performing operations
        // that they need to access the Emscripten main runtime for.
        if (!ENVIRONMENT_IS_PTHREAD) _emscripten_main_thread_process_queued_calls();
        _emscripten_futex_wait(thread + 0, threadStatus, ENVIRONMENT_IS_PTHREAD ? 100 : 1);
      }
    }


   

  function _sysconf(name) {
  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_sync_run_in_browser_thread_ii(1, name);
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 85:
          var maxHeapSize = 2*1024*1024*1024 - 16777216;
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
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: {
          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;
          return 1;
        }
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }

if (!ENVIRONMENT_IS_PTHREAD) PThread.initMainThreadBlock();;
if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function _emscripten_get_now_actual() {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (typeof dateNow !== 'undefined') {
    _emscripten_get_now = dateNow;
  } else if (typeof self === 'object' && self['performance'] && typeof self['performance']['now'] === 'function') {
    _emscripten_get_now = function() { return self['performance']['now'](); };
  } else if (typeof performance === 'object' && typeof performance['now'] === 'function') {
    _emscripten_get_now = function() { return performance['now'](); };
  } else {
    _emscripten_get_now = Date.now;
  };
FS.staticInit();__ATINIT__.unshift(function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() });__ATMAIN__.push(function() { FS.ignorePermissions = false });__ATEXIT__.push(function() { FS.quit() });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
__ATINIT__.unshift(function() { TTY.init() });__ATEXIT__.push(function() { TTY.shutdown() });;
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); var NODEJS_PATH = require("path"); NODEFS.staticInit(); };

 // proxiedFunctionTable specifies the list of functions that can be called either synchronously or asynchronously from other threads in postMessage()d or internally queued events. This way a pthread in a Worker can synchronously access e.g. the DOM on the main thread.

var proxiedFunctionTable = [null,_sysconf];

function _emscripten_sync_run_in_browser_thread_ii(func, p0) {
  var waitAddress = stackSave();
  var returnValue = waitAddress + 4;
  Atomics.store(HEAP32, waitAddress >> 2, 0);
  postMessage({ proxiedCall: 2, func: func, waitAddress: waitAddress, returnValue: returnValue, p0: p0 });
  Atomics.wait(HEAP32, waitAddress >> 2, 0);
  return HEAP32[returnValue >> 2];
}

if (!ENVIRONMENT_IS_PTHREAD) {
 // Only main thread initializes these, pthreads copy them over at thread worker init time (in pthread-main.js)
DYNAMICTOP_PTR = staticAlloc(4);

STACK_BASE = STACKTOP = alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");

}

var ASSERTIONS = true;

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
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
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

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
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
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
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



function nullFunc_i(x) { Module["printErr"]("Invalid function pointer called with signature 'i'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iii(x) { Module["printErr"]("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_v(x) { Module["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vii(x) { Module["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_i(index) {
  try {
    return Module["dynCall_i"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };
Module.asmGlobalArg['Atomics'] = Atomics;
Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_i": nullFunc_i, "nullFunc_ii": nullFunc_ii, "nullFunc_iii": nullFunc_iii, "nullFunc_iiii": nullFunc_iiii, "nullFunc_v": nullFunc_v, "nullFunc_vi": nullFunc_vi, "nullFunc_vii": nullFunc_vii, "nullFunc_viii": nullFunc_viii, "invoke_i": invoke_i, "invoke_ii": invoke_ii, "invoke_iii": invoke_iii, "invoke_iiii": invoke_iiii, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viii": invoke_viii, "___assert_fail": ___assert_fail, "___call_main": ___call_main, "___clock_gettime": ___clock_gettime, "___lock": ___lock, "___setErrNo": ___setErrNo, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "___syscall54": ___syscall54, "___syscall6": ___syscall6, "___unlock": ___unlock, "__cleanup_thread": __cleanup_thread, "__pthread_testcancel_js": __pthread_testcancel_js, "__spawn_thread": __spawn_thread, "_clock_gettime": _clock_gettime, "_emscripten_asm_const_i": _emscripten_asm_const_i, "_emscripten_conditional_set_current_thread_status_js": _emscripten_conditional_set_current_thread_status_js, "_emscripten_futex_wait": _emscripten_futex_wait, "_emscripten_futex_wake": _emscripten_futex_wake, "_emscripten_get_now": _emscripten_get_now, "_emscripten_get_now_is_monotonic": _emscripten_get_now_is_monotonic, "_emscripten_has_threading_support": _emscripten_has_threading_support, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_emscripten_set_current_thread_status_js": _emscripten_set_current_thread_status_js, "_emscripten_set_thread_name_js": _emscripten_set_thread_name_js, "_emscripten_syscall": _emscripten_syscall, "_gettimeofday": _gettimeofday, "_llvm_cttz_i64": _llvm_cttz_i64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "_pthread_create": _pthread_create, "_pthread_getschedparam": _pthread_getschedparam, "_pthread_join": _pthread_join, "_sysconf": _sysconf, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8 };
// EMSCRIPTEN_START_ASM
var asm = (/** @suppress {uselessCode} */ function(global, env, buffer) {
'almost asm';


  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var __pthread_ptr = 0;
  var __pthread_is_main_runtime_thread = 0;
  var __pthread_is_main_browser_thread = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_i=env.nullFunc_i;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_viii=env.nullFunc_viii;
  var invoke_i=env.invoke_i;
  var invoke_ii=env.invoke_ii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viii=env.invoke_viii;
  var ___assert_fail=env.___assert_fail;
  var ___call_main=env.___call_main;
  var ___clock_gettime=env.___clock_gettime;
  var ___lock=env.___lock;
  var ___setErrNo=env.___setErrNo;
  var ___syscall140=env.___syscall140;
  var ___syscall146=env.___syscall146;
  var ___syscall54=env.___syscall54;
  var ___syscall6=env.___syscall6;
  var ___unlock=env.___unlock;
  var __cleanup_thread=env.__cleanup_thread;
  var __pthread_testcancel_js=env.__pthread_testcancel_js;
  var __spawn_thread=env.__spawn_thread;
  var _clock_gettime=env._clock_gettime;
  var _emscripten_asm_const_i=env._emscripten_asm_const_i;
  var _emscripten_conditional_set_current_thread_status_js=env._emscripten_conditional_set_current_thread_status_js;
  var _emscripten_futex_wait=env._emscripten_futex_wait;
  var _emscripten_futex_wake=env._emscripten_futex_wake;
  var _emscripten_get_now=env._emscripten_get_now;
  var _emscripten_get_now_is_monotonic=env._emscripten_get_now_is_monotonic;
  var _emscripten_has_threading_support=env._emscripten_has_threading_support;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _emscripten_set_current_thread_status_js=env._emscripten_set_current_thread_status_js;
  var _emscripten_set_thread_name_js=env._emscripten_set_thread_name_js;
  var _emscripten_syscall=env._emscripten_syscall;
  var _gettimeofday=env._gettimeofday;
  var _llvm_cttz_i64=env._llvm_cttz_i64;
  var _llvm_stackrestore=env._llvm_stackrestore;
  var _llvm_stacksave=env._llvm_stacksave;
  var _pthread_create=env._pthread_create;
  var _pthread_getschedparam=env._pthread_getschedparam;
  var _pthread_join=env._pthread_join;
  var _sysconf=env._sysconf;
  var Atomics_load=global.Atomics.load;
  var Atomics_store=global.Atomics.store;
  var Atomics_exchange=global.Atomics.exchange;
  var Atomics_compareExchange=global.Atomics.compareExchange;
  var Atomics_add=global.Atomics.add;
  var Atomics_sub=global.Atomics.sub;
  var Atomics_and=global.Atomics.and;
  var Atomics_or=global.Atomics.or;
  var Atomics_xor=global.Atomics.xor;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _dumpArray2($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer4 = 0, $vararg_buffer7 = 0, $vararg_buffer9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $vararg_buffer9 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $7 = $3;
 HEAP32[$vararg_buffer>>2] = $7;
 (_printf(3245,$vararg_buffer)|0);
 $8 = $5;
 HEAP32[$vararg_buffer1>>2] = $8;
 (_printf(3322,$vararg_buffer1)|0);
 $6 = 0;
 while(1) {
  $9 = $6;
  $10 = $5;
  $11 = ($9|0)<($10|0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = $6;
  $14 = (($12) + ($13)|0);
  $15 = HEAP8[$14>>0]|0;
  $16 = $15 << 24 >> 24;
  HEAP32[$vararg_buffer4>>2] = $16;
  (_printf(3332,$vararg_buffer4)|0);
  $17 = $6;
  $18 = $5;
  $19 = (($18) - 1)|0;
  $20 = ($17|0)<($19|0);
  if ($20) {
   (_printf(3335,$vararg_buffer7)|0);
  }
  $21 = $6;
  $22 = (($21) + 1)|0;
  $6 = $22;
 }
 (_printf(3338,$vararg_buffer9)|0);
 STACKTOP = sp;return;
}
function _ccurl_pow($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 800|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(800|0);
 $vararg_buffer = sp;
 $7 = sp + 60|0;
 $8 = sp + 4|0;
 $2 = $0;
 $3 = $1;
 _init_converter();
 $9 = $2;
 HEAP32[$vararg_buffer>>2] = $9;
 (_printf(3228,$vararg_buffer)|0);
 $4 = 0;
 $10 = $2;
 $11 = (_strnlen($10,2673)|0);
 $5 = $11;
 $12 = $2;
 $13 = $5;
 $14 = (_trits_from_trytes($12,$13)|0);
 $6 = $14;
 $15 = $6;
 $16 = $5;
 _dumpArray2(3239,$15,$16);
 _init_curl($7);
 $17 = $6;
 _absorb($7,$17,7776);
 $18 = $6;
 $19 = ((($18)) + 7776|0);
 _memcpy(($7|0),($19|0),243)|0;
 $20 = $3;
 _pd_search($8,$7,$20,-1);
 $21 = $6;
 $22 = ((($21)) + 7776|0);
 _memcpy(($22|0),($7|0),243)|0;
 $23 = $6;
 $24 = (_trytes_from_trits($23,0,8019)|0);
 $4 = $24;
 $25 = $6;
 _free($25);
 $26 = $4;
 STACKTOP = sp;return ($26|0);
}
function _init_curl($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 _memset(($2|0),0,729)|0;
 STACKTOP = sp;return;
}
function _absorb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = 0;
 while(1) {
  $7 = $3;
  $8 = $4;
  $9 = $6;
  $10 = (($8) + ($9)|0);
  $11 = $5;
  $12 = ($11|0)<(243);
  $13 = $5;
  $14 = $12 ? $13 : 243;
  $15 = $14;
  _memcpy(($7|0),($10|0),($15|0))|0;
  $16 = $3;
  _transform($16);
  $17 = $6;
  $18 = (($17) + 243)|0;
  $6 = $18;
  $19 = $5;
  $20 = (($19) - 243)|0;
  $5 = $20;
  $21 = ($20|0)>(0);
  if (!($21)) {
   break;
  }
 }
 STACKTOP = sp;return;
}
function _transform($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 752|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(752|0);
 $4 = sp + 12|0;
 $1 = $0;
 $2 = 0;
 while(1) {
  $5 = $2;
  $6 = ($5|0)<(81);
  if (!($6)) {
   break;
  }
  $7 = $1;
  _memcpy(($4|0),($7|0),729)|0;
  $3 = 0;
  while(1) {
   $8 = $3;
   $9 = ($8|0)<(729);
   if (!($9)) {
    break;
   }
   $10 = $3;
   $11 = (8 + ($10<<2)|0);
   $12 = HEAP32[$11>>2]|0;
   $13 = (($4) + ($12)|0);
   $14 = HEAP8[$13>>0]|0;
   $15 = $14 << 24 >> 24;
   $16 = $3;
   $17 = (($16) + 1)|0;
   $18 = (8 + ($17<<2)|0);
   $19 = HEAP32[$18>>2]|0;
   $20 = (($4) + ($19)|0);
   $21 = HEAP8[$20>>0]|0;
   $22 = $21 << 24 >> 24;
   $23 = $22 << 2;
   $24 = (($15) + ($23))|0;
   $25 = (($24) + 5)|0;
   $26 = (2928 + ($25<<2)|0);
   $27 = HEAP32[$26>>2]|0;
   $28 = $27&255;
   $29 = $1;
   $30 = $3;
   $31 = (($29) + ($30)|0);
   HEAP8[$31>>0] = $28;
   $32 = $3;
   $33 = (($32) + 1)|0;
   $3 = $33;
  }
  $34 = $2;
  $35 = (($34) + 1)|0;
  $2 = $35;
 }
 STACKTOP = sp;return;
}
function _dumpArray($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer4 = 0, $vararg_buffer7 = 0, $vararg_buffer9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $vararg_buffer9 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $7 = $3;
 HEAP32[$vararg_buffer>>2] = $7;
 (_printf(3245,$vararg_buffer)|0);
 $8 = $5;
 HEAP32[$vararg_buffer1>>2] = $8;
 (_printf(3322,$vararg_buffer1)|0);
 $6 = 0;
 while(1) {
  $9 = $6;
  $10 = $5;
  $11 = ($9|0)<($10|0);
  if (!($11)) {
   break;
  }
  $12 = $4;
  $13 = $6;
  $14 = (($12) + ($13)|0);
  $15 = HEAP8[$14>>0]|0;
  $16 = $15 << 24 >> 24;
  HEAP32[$vararg_buffer4>>2] = $16;
  (_printf(3332,$vararg_buffer4)|0);
  $17 = $6;
  $18 = $5;
  $19 = (($18) - 1)|0;
  $20 = ($17|0)<($19|0);
  if ($20) {
   (_printf(3335,$vararg_buffer7)|0);
  }
  $21 = $6;
  $22 = (($21) + 1)|0;
  $6 = $22;
 }
 (_printf(3338,$vararg_buffer9)|0);
 STACKTOP = sp;return;
}
function _pd_search($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$alloca_mul = 0, $$alloca_mul24 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $9 = 0, $or$cond = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer12 = 0, $vararg_buffer2 = 0, $vararg_buffer5 = 0, $vararg_buffer8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 23440|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(23440|0);
 $vararg_buffer12 = sp + 23368|0;
 $vararg_buffer10 = sp + 23360|0;
 $vararg_buffer8 = sp + 23352|0;
 $vararg_buffer5 = sp + 23344|0;
 $vararg_buffer2 = sp + 23336|0;
 $vararg_buffer = sp + 23328|0;
 $10 = sp;
 $12 = sp + 23392|0;
 $13 = sp + 23372|0;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $14 = $6;
 HEAP32[$vararg_buffer>>2] = $14;
 (_printf(3413,$vararg_buffer)|0);
 $15 = $5;
 _dumpArray(3434,$15,729);
 $16 = $6;
 $17 = ($16|0)<(0);
 $18 = $6;
 $19 = ($18|0)>(243);
 $or$cond = $17 | $19;
 $20 = $4;
 if ($or$cond) {
  HEAP32[$20>>2] = 5;
  STACKTOP = sp;return;
 }
 HEAP32[$20>>2] = 1;
 $21 = $5;
 _pd_search_init($10,$21,162);
 $22 = (_emscripten_has_threading_support()|0);
 $23 = $4;
 $24 = ((($23)) + 4|0);
 HEAP32[$24>>2] = $22;
 $25 = $4;
 $26 = ((($25)) + 4|0);
 $27 = HEAP32[$26>>2]|0;
 HEAP32[$vararg_buffer2>>2] = $27;
 (_printf(3439,$vararg_buffer2)|0);
 $28 = $4;
 $29 = ((($28)) + 4|0);
 $30 = HEAP32[$29>>2]|0;
 $31 = ($30|0)!=(0);
 if (!($31)) {
  (_printf(3533,$vararg_buffer12)|0);
  HEAP32[$13>>2] = $10;
  $78 = $5;
  $79 = ((($13)) + 4|0);
  HEAP32[$79>>2] = $78;
  $80 = $6;
  $81 = ((($13)) + 8|0);
  HEAP32[$81>>2] = $80;
  $82 = $9;
  $83 = ((($13)) + 12|0);
  HEAP32[$83>>2] = $82;
  $84 = $4;
  $85 = ((($13)) + 16|0);
  HEAP32[$85>>2] = $84;
  (_find_nonce($13)|0);
  STACKTOP = sp;return;
 }
 $32 = $7;
 $33 = ($32|0)<=(0);
 if ($33) {
  $34 = (_sysconf(84)|0);
  $35 = (($34) - 1)|0;
  $7 = $35;
  $36 = $7;
  $37 = ($36|0)<(1);
  $$ = $37 ? 1 : $35;
  $7 = $$;
 }
 $38 = $4;
 $39 = ((($38)) + 8|0);
 (_pthread_mutex_init($39,0)|0);
 $40 = $7;
 $41 = (_llvm_stacksave()|0);
 $11 = $41;
 $$alloca_mul = $40<<2;
 $42 = STACKTOP; STACKTOP = STACKTOP + ((((1*$$alloca_mul)|0)+15)&-16)|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(((((1*$$alloca_mul)|0)+15)&-16)|0);;
 $43 = $7;
 $$alloca_mul24 = ($43*20)|0;
 $44 = STACKTOP; STACKTOP = STACKTOP + ((((1*$$alloca_mul24)|0)+15)&-16)|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(((((1*$$alloca_mul24)|0)+15)&-16)|0);;
 $9 = 0;
 $45 = $7;
 HEAP32[$vararg_buffer5>>2] = $45;
 (_printf(3466,$vararg_buffer5)|0);
 while(1) {
  $46 = $9;
  $47 = $7;
  $48 = ($46|0)<($47|0);
  if (!($48)) {
   break;
  }
  $49 = $9;
  $50 = (($44) + (($49*20)|0)|0);
  HEAP32[$12>>2] = $10;
  $51 = ((($12)) + 4|0);
  $52 = $5;
  HEAP32[$51>>2] = $52;
  $53 = ((($12)) + 8|0);
  $54 = $6;
  HEAP32[$53>>2] = $54;
  $55 = ((($12)) + 12|0);
  $56 = $9;
  HEAP32[$55>>2] = $56;
  $57 = ((($12)) + 16|0);
  $58 = $4;
  HEAP32[$57>>2] = $58;
  ;HEAP32[$50>>2]=HEAP32[$12>>2]|0;HEAP32[$50+4>>2]=HEAP32[$12+4>>2]|0;HEAP32[$50+8>>2]=HEAP32[$12+8>>2]|0;HEAP32[$50+12>>2]=HEAP32[$12+12>>2]|0;HEAP32[$50+16>>2]=HEAP32[$12+16>>2]|0;
  $59 = $9;
  $60 = (($42) + ($59<<2)|0);
  $61 = $9;
  $62 = (($44) + (($61*20)|0)|0);
  (_pthread_create(($60|0),(0|0),(5|0),($62|0))|0);
  $63 = $9;
  $64 = (($63) + 1)|0;
  $9 = $64;
 }
 (_printf(3495,$vararg_buffer8)|0);
 $8 = 0;
 while(1) {
  $65 = $8;
  $66 = $9;
  $67 = ($65|0)<($66|0);
  if (!($67)) {
   break;
  }
  $68 = $8;
  $69 = (($42) + ($68<<2)|0);
  $70 = HEAP32[$69>>2]|0;
  $71 = ($70|0)!=(0|0);
  if ($71) {
   $72 = $8;
   $73 = (($42) + ($72<<2)|0);
   $74 = HEAP32[$73>>2]|0;
   (_pthread_join(($74|0),(0|0))|0);
  }
  $75 = $8;
  $76 = (($75) + 1)|0;
  $8 = $76;
 }
 (_printf(3513,$vararg_buffer10)|0);
 $77 = $11;
 _llvm_stackrestore(($77|0));
 STACKTOP = sp;return;
}
function _pd_search_init($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$sink1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $vararg_buffer = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = $0;
 $4 = $1;
 $5 = $2;
 (_printf(3591,$vararg_buffer)|0);
 $6 = 0;
 while(1) {
  $7 = $6;
  $8 = ($7|0)<(729);
  if (!($8)) {
   break;
  }
  $9 = $4;
  $10 = $6;
  $11 = (($9) + ($10)|0);
  $12 = HEAP8[$11>>0]|0;
  $13 = $12 << 24 >> 24;
  switch ($13|0) {
  case 0:  {
   $14 = $3;
   $15 = $6;
   $16 = (($14) + ($15<<3)|0);
   $17 = $16;
   $18 = $17;
   HEAP32[$18>>2] = -1;
   $19 = (($17) + 4)|0;
   $20 = $19;
   HEAP32[$20>>2] = -1;
   $21 = $3;
   $22 = ((($21)) + 5832|0);
   $23 = $6;
   $24 = (($22) + ($23<<3)|0);
   $$sink1 = $24;$49 = -1;$52 = -1;
   break;
  }
  case 1:  {
   $25 = $3;
   $26 = $6;
   $27 = (($25) + ($26<<3)|0);
   $28 = $27;
   $29 = $28;
   HEAP32[$29>>2] = 0;
   $30 = (($28) + 4)|0;
   $31 = $30;
   HEAP32[$31>>2] = 0;
   $32 = $3;
   $33 = ((($32)) + 5832|0);
   $34 = $6;
   $35 = (($33) + ($34<<3)|0);
   $$sink1 = $35;$49 = -1;$52 = -1;
   break;
  }
  default: {
   $36 = $3;
   $37 = $6;
   $38 = (($36) + ($37<<3)|0);
   $39 = $38;
   $40 = $39;
   HEAP32[$40>>2] = -1;
   $41 = (($39) + 4)|0;
   $42 = $41;
   HEAP32[$42>>2] = -1;
   $43 = $3;
   $44 = ((($43)) + 5832|0);
   $45 = $6;
   $46 = (($44) + ($45<<3)|0);
   $$sink1 = $46;$49 = 0;$52 = 0;
  }
  }
  $47 = $$sink1;
  $48 = $47;
  HEAP32[$48>>2] = $49;
  $50 = (($47) + 4)|0;
  $51 = $50;
  HEAP32[$51>>2] = $52;
  $53 = $6;
  $54 = (($53) + 1)|0;
  $6 = $54;
 }
 $55 = $3;
 $56 = $5;
 $57 = (($55) + ($56<<3)|0);
 $58 = $57;
 $59 = $58;
 HEAP32[$59>>2] = 1840700269;
 $60 = (($58) + 4)|0;
 $61 = $60;
 HEAP32[$61>>2] = -613566757;
 $62 = $3;
 $63 = ((($62)) + 5832|0);
 $64 = $5;
 $65 = (($63) + ($64<<3)|0);
 $66 = $65;
 $67 = $66;
 HEAP32[$67>>2] = -613566757;
 $68 = (($66) + 4)|0;
 $69 = $68;
 HEAP32[$69>>2] = -1227133514;
 $70 = $3;
 $71 = $5;
 $72 = (($71) + 1)|0;
 $73 = (($70) + ($72<<3)|0);
 $74 = $73;
 $75 = $74;
 HEAP32[$75>>2] = 1059033031;
 $76 = (($74) + 4)|0;
 $77 = $76;
 HEAP32[$77>>2] = -235340674;
 $78 = $3;
 $79 = ((($78)) + 5832|0);
 $80 = $5;
 $81 = (($80) + 1)|0;
 $82 = (($79) + ($81<<3)|0);
 $83 = $82;
 $84 = $83;
 HEAP32[$84>>2] = -117670337;
 $85 = (($83) + 4)|0;
 $86 = $85;
 HEAP32[$86>>2] = -1882725391;
 $87 = $3;
 $88 = $5;
 $89 = (($88) + 2)|0;
 $90 = (($87) + ($89<<3)|0);
 $91 = $90;
 $92 = $91;
 HEAP32[$92>>2] = -261633;
 $93 = (($91) + 4)|0;
 $94 = $93;
 HEAP32[$94>>2] = 2147475471;
 $95 = $3;
 $96 = ((($95)) + 5832|0);
 $97 = $5;
 $98 = (($97) + 2)|0;
 $99 = (($96) + ($98<<3)|0);
 $100 = $99;
 $101 = $100;
 HEAP32[$101>>2] = -133955585;
 $102 = (($100) + 4)|0;
 $103 = $102;
 HEAP32[$103>>2] = -4186113;
 $104 = $3;
 $105 = $5;
 $106 = (($105) + 3)|0;
 $107 = (($104) + ($106<<3)|0);
 $108 = $107;
 $109 = $108;
 HEAP32[$109>>2] = 134217727;
 $110 = (($108) + 4)|0;
 $111 = $110;
 HEAP32[$111>>2] = -4194304;
 $112 = $3;
 $113 = ((($112)) + 5832|0);
 $114 = $5;
 $115 = (($114) + 3)|0;
 $116 = (($113) + ($115<<3)|0);
 $117 = $116;
 $118 = $117;
 HEAP32[$118>>2] = -1;
 $119 = (($117) + 4)|0;
 $120 = $119;
 HEAP32[$120>>2] = 4194303;
 STACKTOP = sp;return;
}
function _find_nonce($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 35056|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(35056|0);
 $vararg_buffer1 = sp + 35016|0;
 $vararg_buffer = sp + 35008|0;
 $5 = sp + 29176|0;
 $6 = sp + 23344|0;
 $9 = sp + 23336|0;
 $10 = sp + 23328|0;
 $12 = sp + 17496|0;
 $13 = sp + 11664|0;
 $14 = sp + 5832|0;
 $15 = sp;
 $2 = $0;
 (_printf(3553,$vararg_buffer)|0);
 $17 = $2;
 $3 = $17;
 $18 = $3;
 $19 = ((($18)) + 16|0);
 $20 = HEAP32[$19>>2]|0;
 $4 = $20;
 $21 = $3;
 $22 = ((($21)) + 4|0);
 $23 = HEAP32[$22>>2]|0;
 $11 = $23;
 _memset(($5|0),0,5832)|0;
 _memset(($6|0),0,5832)|0;
 $24 = $3;
 $25 = HEAP32[$24>>2]|0;
 _memcpy(($5|0),($25|0),5832)|0;
 $26 = $3;
 $27 = HEAP32[$26>>2]|0;
 $28 = ((($27)) + 5832|0);
 _memcpy(($6|0),($28|0),5832)|0;
 $29 = $3;
 $30 = ((($29)) + 12|0);
 $31 = HEAP32[$30>>2]|0;
 $7 = $31;
 while(1) {
  $32 = $7;
  $33 = (($32) + -1)|0;
  $7 = $33;
  $34 = ($32|0)>(0);
  if (!($34)) {
   break;
  }
  _pd_increment($5,$6,166,193);
 }
 _memset(($14|0),0,5832)|0;
 _memset(($15|0),0,5832)|0;
 _memset(($12|0),0,5832)|0;
 _memset(($13|0),0,5832)|0;
 $16 = 0;
 while(1) {
  $35 = $3;
  $36 = $4;
  $37 = (_ctxStatusEq($35,$36,1)|0);
  $38 = ($37<<24>>24)!=(0);
  if (!($38)) {
   label = 18;
   break;
  }
  _pd_increment($5,$6,193,243);
  _memcpy(($14|0),($5|0),5832)|0;
  _memcpy(($15|0),($6|0),5832)|0;
  _pd_transform($14,$15,$12,$13);
  $39 = $3;
  $40 = ((($39)) + 8|0);
  $41 = HEAP32[$40>>2]|0;
  $42 = (_is_found_fast($14,$15,$41)|0);
  $43 = tempRet0;
  $44 = $9;
  $45 = $44;
  HEAP32[$45>>2] = $42;
  $46 = (($44) + 4)|0;
  $47 = $46;
  HEAP32[$47>>2] = $43;
  $48 = ($42|0)==(0);
  $49 = ($43|0)==(0);
  $50 = $48 & $49;
  if (!($50)) {
   break;
  }
 }
 if ((label|0) == 18) {
  $1 = 0;
  $145 = $1;
  STACKTOP = sp;return ($145|0);
 }
 $51 = $9;
 $52 = $51;
 $53 = HEAP32[$52>>2]|0;
 $54 = (($51) + 4)|0;
 $55 = $54;
 $56 = HEAP32[$55>>2]|0;
 $57 = $vararg_buffer1;
 $58 = $57;
 HEAP32[$58>>2] = $53;
 $59 = (($57) + 4)|0;
 $60 = $59;
 HEAP32[$60>>2] = $56;
 (_printf(3572,$vararg_buffer1)|0);
 $61 = $9;
 $62 = $61;
 $63 = HEAP32[$62>>2]|0;
 $64 = (($61) + 4)|0;
 $65 = $64;
 $66 = HEAP32[$65>>2]|0;
 $67 = (_llvm_cttz_i64(($63|0),($66|0),0)|0);
 $68 = tempRet0;
 $8 = $67;
 $69 = $8;
 $70 = 1 << $69;
 $71 = ($70|0)<(0);
 $72 = $71 << 31 >> 31;
 $73 = $10;
 $74 = $73;
 HEAP32[$74>>2] = $70;
 $75 = (($73) + 4)|0;
 $76 = $75;
 HEAP32[$76>>2] = $72;
 $77 = $4;
 $78 = ((($77)) + 4|0);
 $79 = HEAP32[$78>>2]|0;
 $80 = ($79|0)!=(0);
 if ($80) {
  $81 = $3;
  $82 = ((($81)) + 16|0);
  $83 = HEAP32[$82>>2]|0;
  $84 = ((($83)) + 8|0);
  (___pthread_mutex_lock($84)|0);
 }
 $85 = $4;
 $86 = HEAP32[$85>>2]|0;
 $87 = ($86|0)!=(3);
 L15: do {
  if ($87) {
   $88 = $4;
   HEAP32[$88>>2] = 3;
   $7 = 0;
   while(1) {
    $89 = $7;
    $90 = ($89|0)<(243);
    if (!($90)) {
     break L15;
    }
    $91 = $7;
    $92 = (($5) + ($91<<3)|0);
    $93 = $92;
    $94 = $93;
    $95 = HEAP32[$94>>2]|0;
    $96 = (($93) + 4)|0;
    $97 = $96;
    $98 = HEAP32[$97>>2]|0;
    $99 = $10;
    $100 = $99;
    $101 = HEAP32[$100>>2]|0;
    $102 = (($99) + 4)|0;
    $103 = $102;
    $104 = HEAP32[$103>>2]|0;
    $105 = $95 & $101;
    $106 = $98 & $104;
    $107 = ($105|0)==(0);
    $108 = ($106|0)==(0);
    $109 = $107 & $108;
    if ($109) {
     $131 = 1;
    } else {
     $110 = $7;
     $111 = (($6) + ($110<<3)|0);
     $112 = $111;
     $113 = $112;
     $114 = HEAP32[$113>>2]|0;
     $115 = (($112) + 4)|0;
     $116 = $115;
     $117 = HEAP32[$116>>2]|0;
     $118 = $10;
     $119 = $118;
     $120 = HEAP32[$119>>2]|0;
     $121 = (($118) + 4)|0;
     $122 = $121;
     $123 = HEAP32[$122>>2]|0;
     $124 = $114 & $120;
     $125 = $117 & $123;
     $126 = ($124|0)==(0);
     $127 = ($125|0)==(0);
     $128 = $126 & $127;
     $129 = $128 ? -1 : 0;
     $131 = $129;
    }
    $130 = $131&255;
    $132 = $11;
    $133 = $7;
    $134 = (($132) + ($133)|0);
    HEAP8[$134>>0] = $130;
    $135 = $7;
    $136 = (($135) + 1)|0;
    $7 = $136;
   }
  }
 } while(0);
 $137 = $4;
 $138 = ((($137)) + 4|0);
 $139 = HEAP32[$138>>2]|0;
 $140 = ($139|0)!=(0);
 if ($140) {
  $141 = $3;
  $142 = ((($141)) + 16|0);
  $143 = HEAP32[$142>>2]|0;
  $144 = ((($143)) + 8|0);
  (___pthread_mutex_unlock($144)|0);
 }
 $1 = 0;
 $145 = $1;
 STACKTOP = sp;return ($145|0);
}
function _pd_increment($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $9 = sp + 16|0;
 $10 = sp + 8|0;
 $11 = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $12 = $9;
 $13 = $12;
 HEAP32[$13>>2] = 1;
 $14 = (($12) + 4)|0;
 $15 = $14;
 HEAP32[$15>>2] = 0;
 $16 = $6;
 $8 = $16;
 while(1) {
  $17 = $8;
  $18 = $7;
  $19 = ($17>>>0)<($18>>>0);
  $20 = $9;
  $21 = $20;
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + 4)|0;
  $24 = $23;
  $25 = HEAP32[$24>>2]|0;
  $26 = ($22|0)!=(0);
  $27 = ($25|0)!=(0);
  $28 = $26 | $27;
  $29 = $19 ? $28 : 0;
  if (!($29)) {
   break;
  }
  $30 = $4;
  $31 = $8;
  $32 = (($30) + ($31<<3)|0);
  $33 = $32;
  $34 = $33;
  $35 = HEAP32[$34>>2]|0;
  $36 = (($33) + 4)|0;
  $37 = $36;
  $38 = HEAP32[$37>>2]|0;
  $39 = $10;
  $40 = $39;
  HEAP32[$40>>2] = $35;
  $41 = (($39) + 4)|0;
  $42 = $41;
  HEAP32[$42>>2] = $38;
  $43 = $5;
  $44 = $8;
  $45 = (($43) + ($44<<3)|0);
  $46 = $45;
  $47 = $46;
  $48 = HEAP32[$47>>2]|0;
  $49 = (($46) + 4)|0;
  $50 = $49;
  $51 = HEAP32[$50>>2]|0;
  $52 = $11;
  $53 = $52;
  HEAP32[$53>>2] = $48;
  $54 = (($52) + 4)|0;
  $55 = $54;
  HEAP32[$55>>2] = $51;
  $56 = $11;
  $57 = $56;
  $58 = HEAP32[$57>>2]|0;
  $59 = (($56) + 4)|0;
  $60 = $59;
  $61 = HEAP32[$60>>2]|0;
  $62 = $10;
  $63 = $62;
  $64 = HEAP32[$63>>2]|0;
  $65 = (($62) + 4)|0;
  $66 = $65;
  $67 = HEAP32[$66>>2]|0;
  $68 = $58 ^ $64;
  $69 = $61 ^ $67;
  $70 = $4;
  $71 = $8;
  $72 = (($70) + ($71<<3)|0);
  $73 = $72;
  $74 = $73;
  HEAP32[$74>>2] = $68;
  $75 = (($73) + 4)|0;
  $76 = $75;
  HEAP32[$76>>2] = $69;
  $77 = $10;
  $78 = $77;
  $79 = HEAP32[$78>>2]|0;
  $80 = (($77) + 4)|0;
  $81 = $80;
  $82 = HEAP32[$81>>2]|0;
  $83 = $5;
  $84 = $8;
  $85 = (($83) + ($84<<3)|0);
  $86 = $85;
  $87 = $86;
  HEAP32[$87>>2] = $79;
  $88 = (($86) + 4)|0;
  $89 = $88;
  HEAP32[$89>>2] = $82;
  $90 = $11;
  $91 = $90;
  $92 = HEAP32[$91>>2]|0;
  $93 = (($90) + 4)|0;
  $94 = $93;
  $95 = HEAP32[$94>>2]|0;
  $96 = $10;
  $97 = $96;
  $98 = HEAP32[$97>>2]|0;
  $99 = (($96) + 4)|0;
  $100 = $99;
  $101 = HEAP32[$100>>2]|0;
  $102 = $98 ^ -1;
  $103 = $101 ^ -1;
  $104 = $92 & $102;
  $105 = $95 & $103;
  $106 = $9;
  $107 = $106;
  HEAP32[$107>>2] = $104;
  $108 = (($106) + 4)|0;
  $109 = $108;
  HEAP32[$109>>2] = $105;
  $110 = $8;
  $111 = (($110) + 1)|0;
  $8 = $111;
 }
 STACKTOP = sp;return;
}
function _ctxStatusEq($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $8 = $5;
 $9 = ((($8)) + 4|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ($10|0)!=(0);
 if ($11) {
  $12 = $4;
  $13 = ((($12)) + 16|0);
  $14 = HEAP32[$13>>2]|0;
  $15 = ((($14)) + 8|0);
  (___pthread_mutex_lock($15)|0);
  $16 = $5;
  $17 = HEAP32[$16>>2]|0;
  $18 = $6;
  $19 = ($17|0)==($18|0);
  $20 = $19&1;
  $21 = $20&255;
  $7 = $21;
  $22 = $4;
  $23 = ((($22)) + 16|0);
  $24 = HEAP32[$23>>2]|0;
  $25 = ((($24)) + 8|0);
  (___pthread_mutex_unlock($25)|0);
  $26 = $7;
  $3 = $26;
  $33 = $3;
  STACKTOP = sp;return ($33|0);
 } else {
  $27 = $5;
  $28 = HEAP32[$27>>2]|0;
  $29 = $6;
  $30 = ($28|0)==($29|0);
  $31 = $30&1;
  $32 = $31&255;
  $3 = $32;
  $33 = $3;
  STACKTOP = sp;return ($33|0);
 }
 return (0)|0;
}
function _pd_transform($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $11 = sp + 24|0;
 $12 = sp + 16|0;
 $13 = sp + 8|0;
 $14 = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = 0;
 $9 = 81;
 L1: while(1) {
  $15 = $9;
  $16 = (($15) + -1)|0;
  $9 = $16;
  $17 = ($15|0)>(0);
  if (!($17)) {
   break;
  }
  $18 = $6;
  $19 = $4;
  _memcpy(($18|0),($19|0),5832)|0;
  $20 = $7;
  $21 = $5;
  _memcpy(($20|0),($21|0),5832)|0;
  $10 = 0;
  while(1) {
   $22 = $10;
   $23 = ($22|0)<(729);
   if (!($23)) {
    continue L1;
   }
   $24 = $6;
   $25 = $8;
   $26 = (($24) + ($25<<3)|0);
   $27 = $26;
   $28 = $27;
   $29 = HEAP32[$28>>2]|0;
   $30 = (($27) + 4)|0;
   $31 = $30;
   $32 = HEAP32[$31>>2]|0;
   $33 = $11;
   $34 = $33;
   HEAP32[$34>>2] = $29;
   $35 = (($33) + 4)|0;
   $36 = $35;
   HEAP32[$36>>2] = $32;
   $37 = $7;
   $38 = $8;
   $39 = (($37) + ($38<<3)|0);
   $40 = $39;
   $41 = $40;
   $42 = HEAP32[$41>>2]|0;
   $43 = (($40) + 4)|0;
   $44 = $43;
   $45 = HEAP32[$44>>2]|0;
   $46 = $12;
   $47 = $46;
   HEAP32[$47>>2] = $42;
   $48 = (($46) + 4)|0;
   $49 = $48;
   HEAP32[$49>>2] = $45;
   $50 = $7;
   $51 = $8;
   $52 = ($51|0)<(365);
   $53 = $52 ? 364 : -365;
   $54 = $8;
   $55 = (($54) + ($53))|0;
   $8 = $55;
   $56 = (($50) + ($55<<3)|0);
   $57 = $56;
   $58 = $57;
   $59 = HEAP32[$58>>2]|0;
   $60 = (($57) + 4)|0;
   $61 = $60;
   $62 = HEAP32[$61>>2]|0;
   $63 = $13;
   $64 = $63;
   HEAP32[$64>>2] = $59;
   $65 = (($63) + 4)|0;
   $66 = $65;
   HEAP32[$66>>2] = $62;
   $67 = $11;
   $68 = $67;
   $69 = HEAP32[$68>>2]|0;
   $70 = (($67) + 4)|0;
   $71 = $70;
   $72 = HEAP32[$71>>2]|0;
   $73 = $13;
   $74 = $73;
   $75 = HEAP32[$74>>2]|0;
   $76 = (($73) + 4)|0;
   $77 = $76;
   $78 = HEAP32[$77>>2]|0;
   $79 = $75 ^ -1;
   $80 = $78 ^ -1;
   $81 = $69 | $79;
   $82 = $72 | $80;
   $83 = $6;
   $84 = $8;
   $85 = (($83) + ($84<<3)|0);
   $86 = $85;
   $87 = $86;
   $88 = HEAP32[$87>>2]|0;
   $89 = (($86) + 4)|0;
   $90 = $89;
   $91 = HEAP32[$90>>2]|0;
   $92 = $12;
   $93 = $92;
   $94 = HEAP32[$93>>2]|0;
   $95 = (($92) + 4)|0;
   $96 = $95;
   $97 = HEAP32[$96>>2]|0;
   $98 = $88 ^ $94;
   $99 = $91 ^ $97;
   $100 = $81 & $98;
   $101 = $82 & $99;
   $102 = $14;
   $103 = $102;
   HEAP32[$103>>2] = $100;
   $104 = (($102) + 4)|0;
   $105 = $104;
   HEAP32[$105>>2] = $101;
   $106 = $14;
   $107 = $106;
   $108 = HEAP32[$107>>2]|0;
   $109 = (($106) + 4)|0;
   $110 = $109;
   $111 = HEAP32[$110>>2]|0;
   $112 = $108 ^ -1;
   $113 = $111 ^ -1;
   $114 = $4;
   $115 = $10;
   $116 = (($114) + ($115<<3)|0);
   $117 = $116;
   $118 = $117;
   HEAP32[$118>>2] = $112;
   $119 = (($117) + 4)|0;
   $120 = $119;
   HEAP32[$120>>2] = $113;
   $121 = $11;
   $122 = $121;
   $123 = HEAP32[$122>>2]|0;
   $124 = (($121) + 4)|0;
   $125 = $124;
   $126 = HEAP32[$125>>2]|0;
   $127 = $13;
   $128 = $127;
   $129 = HEAP32[$128>>2]|0;
   $130 = (($127) + 4)|0;
   $131 = $130;
   $132 = HEAP32[$131>>2]|0;
   $133 = $123 ^ $129;
   $134 = $126 ^ $132;
   $135 = $14;
   $136 = $135;
   $137 = HEAP32[$136>>2]|0;
   $138 = (($135) + 4)|0;
   $139 = $138;
   $140 = HEAP32[$139>>2]|0;
   $141 = $133 | $137;
   $142 = $134 | $140;
   $143 = $5;
   $144 = $10;
   $145 = (($143) + ($144<<3)|0);
   $146 = $145;
   $147 = $146;
   HEAP32[$147>>2] = $141;
   $148 = (($146) + 4)|0;
   $149 = $148;
   HEAP32[$149>>2] = $142;
   $150 = $10;
   $151 = (($150) + 1)|0;
   $10 = $151;
  }
 }
 STACKTOP = sp;return;
}
function _is_found_fast($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = sp + 8|0;
 $8 = sp;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $9 = $8;
 $10 = $9;
 HEAP32[$10>>2] = -1;
 $11 = (($9) + 4)|0;
 $12 = $11;
 HEAP32[$12>>2] = -1;
 $13 = $6;
 $7 = $13;
 while(1) {
  $14 = $7;
  $15 = (($14) + -1)|0;
  $7 = $15;
  $16 = ($14|0)>(0);
  if (!($16)) {
   label = 5;
   break;
  }
  $17 = $4;
  $18 = $7;
  $19 = (242 - ($18))|0;
  $20 = (($17) + ($19<<3)|0);
  $21 = $20;
  $22 = $21;
  $23 = HEAP32[$22>>2]|0;
  $24 = (($21) + 4)|0;
  $25 = $24;
  $26 = HEAP32[$25>>2]|0;
  $27 = $5;
  $28 = $7;
  $29 = (242 - ($28))|0;
  $30 = (($27) + ($29<<3)|0);
  $31 = $30;
  $32 = $31;
  $33 = HEAP32[$32>>2]|0;
  $34 = (($31) + 4)|0;
  $35 = $34;
  $36 = HEAP32[$35>>2]|0;
  $37 = $23 ^ $33;
  $38 = $26 ^ $36;
  $39 = $37 ^ -1;
  $40 = $38 ^ -1;
  $41 = $8;
  $42 = $41;
  $43 = HEAP32[$42>>2]|0;
  $44 = (($41) + 4)|0;
  $45 = $44;
  $46 = HEAP32[$45>>2]|0;
  $47 = $43 & $39;
  $48 = $46 & $40;
  $49 = $8;
  $50 = $49;
  HEAP32[$50>>2] = $47;
  $51 = (($49) + 4)|0;
  $52 = $51;
  HEAP32[$52>>2] = $48;
  $53 = $8;
  $54 = $53;
  $55 = HEAP32[$54>>2]|0;
  $56 = (($53) + 4)|0;
  $57 = $56;
  $58 = HEAP32[$57>>2]|0;
  $59 = ($55|0)==(0);
  $60 = ($58|0)==(0);
  $61 = $59 & $60;
  if ($61) {
   label = 4;
   break;
  }
 }
 if ((label|0) == 4) {
  $62 = $3;
  $63 = $62;
  HEAP32[$63>>2] = 0;
  $64 = (($62) + 4)|0;
  $65 = $64;
  HEAP32[$65>>2] = 0;
  $76 = $3;
  $77 = $76;
  $78 = HEAP32[$77>>2]|0;
  $79 = (($76) + 4)|0;
  $80 = $79;
  $81 = HEAP32[$80>>2]|0;
  tempRet0 = ($81);
  STACKTOP = sp;return ($78|0);
 }
 else if ((label|0) == 5) {
  $66 = $8;
  $67 = $66;
  $68 = HEAP32[$67>>2]|0;
  $69 = (($66) + 4)|0;
  $70 = $69;
  $71 = HEAP32[$70>>2]|0;
  $72 = $3;
  $73 = $72;
  HEAP32[$73>>2] = $68;
  $74 = (($72) + 4)|0;
  $75 = $74;
  HEAP32[$75>>2] = $71;
  $76 = $3;
  $77 = $76;
  $78 = HEAP32[$77>>2]|0;
  $79 = (($76) + 4)|0;
  $80 = $79;
  $81 = HEAP32[$80>>2]|0;
  tempRet0 = ($81);
  STACKTOP = sp;return ($78|0);
 }
 return (0)|0;
}
function _trits_from_trytes($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $6 = $3;
 $7 = ($6*3)|0;
 $8 = $7;
 $9 = (_malloc($8)|0);
 $5 = $9;
 $4 = 0;
 while(1) {
  $10 = $4;
  $11 = $3;
  $12 = ($10|0)<($11|0);
  $13 = $5;
  if (!($12)) {
   break;
  }
  $14 = $4;
  $15 = ($14*3)|0;
  $16 = (($13) + ($15)|0);
  $17 = $2;
  $18 = $4;
  $19 = (($17) + ($18)|0);
  $20 = HEAP8[$19>>0]|0;
  $21 = $20 << 24 >> 24;
  $22 = (_strchr(3614,$21)|0);
  $23 = $22;
  $24 = 3614;
  $25 = (($23) - ($24))|0;
  $26 = (10523 + (($25*3)|0)|0);
  ;HEAP8[$16>>0]=HEAP8[$26>>0]|0;HEAP8[$16+1>>0]=HEAP8[$26+1>>0]|0;HEAP8[$16+2>>0]=HEAP8[$26+2>>0]|0;
  $27 = $4;
  $28 = (($27) + 1)|0;
  $4 = $28;
 }
 STACKTOP = sp;return ($13|0);
}
function _trytes_from_trits($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $10 = $5;
 $11 = (($10) + 3)|0;
 $12 = (($11) - 1)|0;
 $13 = (($12|0) / 3)&-1;
 $7 = $13;
 $14 = $7;
 $15 = (($14) + 1)|0;
 $16 = $15;
 $17 = (_malloc($16)|0);
 $8 = $17;
 $18 = $8;
 $19 = $7;
 $20 = (($18) + ($19)|0);
 HEAP8[$20>>0] = 0;
 $6 = 0;
 while(1) {
  $21 = $6;
  $22 = $7;
  $23 = ($21|0)<($22|0);
  if (!($23)) {
   break;
  }
  $24 = $3;
  $25 = $4;
  $26 = $6;
  $27 = ($26*3)|0;
  $28 = (($25) + ($27))|0;
  $29 = (($24) + ($28)|0);
  $30 = HEAP8[$29>>0]|0;
  $31 = $30 << 24 >> 24;
  $32 = $3;
  $33 = $4;
  $34 = $6;
  $35 = ($34*3)|0;
  $36 = (($33) + ($35))|0;
  $37 = (($36) + 1)|0;
  $38 = (($32) + ($37)|0);
  $39 = HEAP8[$38>>0]|0;
  $40 = $39 << 24 >> 24;
  $41 = ($40*3)|0;
  $42 = (($31) + ($41))|0;
  $43 = $3;
  $44 = $4;
  $45 = $6;
  $46 = ($45*3)|0;
  $47 = (($44) + ($46))|0;
  $48 = (($47) + 2)|0;
  $49 = (($43) + ($48)|0);
  $50 = HEAP8[$49>>0]|0;
  $51 = $50 << 24 >> 24;
  $52 = ($51*9)|0;
  $53 = (($42) + ($52))|0;
  $54 = $53&255;
  $9 = $54;
  $55 = $9;
  $56 = $55 << 24 >> 24;
  $57 = ($56|0)<(0);
  if ($57) {
   $58 = $9;
   $59 = $58 << 24 >> 24;
   $60 = (($59) + 27)|0;
   $61 = $60&255;
   $9 = $61;
  }
  $62 = $9;
  $63 = $62 << 24 >> 24;
  $64 = (3614 + ($63)|0);
  $65 = HEAP8[$64>>0]|0;
  $66 = $8;
  $67 = $6;
  $68 = (($66) + ($67)|0);
  HEAP8[$68>>0] = $65;
  $69 = $6;
  $70 = (($69) + 1)|0;
  $6 = $70;
 }
 $71 = $8;
 STACKTOP = sp;return ($71|0);
}
function _init_converter() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp + 4|0;
 ;HEAP8[$1>>0]=0|0;HEAP8[$1+1>>0]=0|0;HEAP8[$1+2>>0]=0|0;HEAP8[$1+3>>0]=0|0;HEAP8[$1+4>>0]=0|0;
 $0 = 0;
 while(1) {
  $2 = $0;
  $3 = ($2|0)<(243);
  if (!($3)) {
   break;
  }
  $4 = $0;
  $5 = (9308 + (($4*5)|0)|0);
  ;HEAP8[$5>>0]=HEAP8[$1>>0]|0;HEAP8[$5+1>>0]=HEAP8[$1+1>>0]|0;HEAP8[$5+2>>0]=HEAP8[$1+2>>0]|0;HEAP8[$5+3>>0]=HEAP8[$1+3>>0]|0;HEAP8[$5+4>>0]=HEAP8[$1+4>>0]|0;
  _increment($1,5);
  $6 = $0;
  $7 = (($6) + 1)|0;
  $0 = $7;
 }
 $0 = 0;
 while(1) {
  $8 = $0;
  $9 = ($8|0)<(27);
  if (!($9)) {
   break;
  }
  $10 = $0;
  $11 = (10523 + (($10*3)|0)|0);
  ;HEAP8[$11>>0]=HEAP8[$1>>0]|0;HEAP8[$11+1>>0]=HEAP8[$1+1>>0]|0;HEAP8[$11+2>>0]=HEAP8[$1+2>>0]|0;
  _increment($1,3);
  $12 = $0;
  $13 = (($12) + 1)|0;
  $0 = $13;
 }
 STACKTOP = sp;return;
}
function _increment($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = 0;
 while(1) {
  $5 = $4;
  $6 = $3;
  $7 = ($5|0)<($6|0);
  if (!($7)) {
   label = 5;
   break;
  }
  $8 = $2;
  $9 = $4;
  $10 = (($8) + ($9)|0);
  $11 = HEAP8[$10>>0]|0;
  $12 = (($11) + 1)<<24>>24;
  HEAP8[$10>>0] = $12;
  $13 = $12 << 24 >> 24;
  $14 = ($13|0)>(1);
  if (!($14)) {
   label = 5;
   break;
  }
  $15 = $2;
  $16 = $4;
  $17 = (($15) + ($16)|0);
  HEAP8[$17>>0] = -1;
  $18 = $4;
  $19 = (($18) + 1)|0;
  $4 = $19;
 }
 if ((label|0) == 5) {
  STACKTOP = sp;return;
 }
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0172$i = 0, $$$0173$i = 0, $$$4230$i = 0, $$$4236$i = 0, $$$4329$i = 0, $$$i = 0, $$0$i = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0172$lcssa$i = 0, $$01724$i = 0, $$0173$lcssa$i = 0, $$01733$i = 0, $$0193 = 0, $$0195 = 0, $$0201$i$i = 0, $$0202$i$i = 0, $$0206$i$i = 0, $$0207$i$i = 0;
 var $$024359$i = 0, $$0260$i$i = 0, $$0261$i$i = 0, $$0262$i$i = 0, $$0268$i$i = 0, $$0269$i$i = 0, $$0320$i = 0, $$0322$i = 0, $$0323$i = 0, $$0325$i = 0, $$0331$i = 0, $$0336$i = 0, $$0337$$i = 0, $$0337$i = 0, $$0339$i = 0, $$0340$i = 0, $$0345$i = 0, $$1 = 0, $$1176$i = 0, $$1178$i = 0;
 var $$124458$i = 0, $$1264$i$i = 0, $$1266$i$i = 0, $$1321$i = 0, $$1326$i = 0, $$1341$i = 0, $$1347$i = 0, $$1351$i = 0, $$2 = 0, $$2234243136$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2333$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i196 = 0, $$3229$i = 0, $$3235$i = 0, $$3328$i = 0, $$3349$i = 0;
 var $$4$lcssa$i = 0, $$4$ph$i = 0, $$4230$i = 0, $$4236$i = 0, $$4329$lcssa$i = 0, $$43298$i = 0, $$4335$$4$i = 0, $$4335$ph$i = 0, $$43357$i = 0, $$49$i = 0, $$7$i = 0, $$7239$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i18$i = 0, $$pre$i203 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i19$iZ2D = 0, $$pre$phi$i204Z2D = 0;
 var $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$sink1$i = 0, $$sink1$i$i = 0, $$sink12$i = 0, $$sink2$i = 0, $$sink2$i198 = 0, $$sink3$i = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0;
 var $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0;
 var $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0;
 var $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0;
 var $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0;
 var $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0;
 var $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0;
 var $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0;
 var $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0;
 var $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0;
 var $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0;
 var $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0;
 var $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0;
 var $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0;
 var $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0;
 var $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0;
 var $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0;
 var $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0;
 var $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0;
 var $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0;
 var $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0;
 var $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0;
 var $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0;
 var $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0;
 var $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0;
 var $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0;
 var $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0;
 var $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0;
 var $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0;
 var $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0;
 var $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0;
 var $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0;
 var $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0;
 var $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0;
 var $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0;
 var $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0;
 var $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0;
 var $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0;
 var $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0;
 var $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0;
 var $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0;
 var $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0;
 var $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0;
 var $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0;
 var $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0;
 var $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0;
 var $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0;
 var $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i202 = 0, $not$3$i = 0, $or$cond$i = 0, $or$cond$i206 = 0, $or$cond1$i = 0, $or$cond1$i205 = 0, $or$cond10$i = 0;
 var $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond42$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond9$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp + 12|0;
 $2 = sp + 8|0;
 $3 = sp + 4|0;
 $4 = sp;
 $5 = HEAP32[1644]|0;
 $6 = ($5|0)==(0);
 if ($6) {
  (___pthread_mutex_lock(6600)|0);
  $7 = HEAP32[1644]|0;
  $8 = ($7|0)==(0);
  if ($8) {
   HEAP32[(6584)>>2] = 4096;
   HEAP32[(6580)>>2] = 4096;
   HEAP32[(6588)>>2] = -1;
   HEAP32[(6592)>>2] = -1;
   HEAP32[(6596)>>2] = 2;
   HEAP32[(7072)>>2] = 2;
   $9 = (_pthread_mutexattr_init($3)|0);
   $10 = ($9|0)==(0);
   if ($10) {
    $11 = (_pthread_mutex_init((7076),$3)|0);
    $12 = ($11|0)==(0);
    if ($12) {
    }
   }
   $13 = $4;
   $14 = $13 & -16;
   $15 = $14 ^ 1431655768;
   Atomics_store(HEAP32,1644,$15)|0;
  }
  (___pthread_mutex_unlock(6600)|0);
 }
 $16 = HEAP32[(7072)>>2]|0;
 $17 = $16 & 2;
 $18 = ($17|0)==(0);
 if (!($18)) {
  $19 = (___pthread_mutex_lock((7076))|0);
  $20 = ($19|0)==(0);
  if (!($20)) {
   $$1 = 0;
   STACKTOP = sp;return ($$1|0);
  }
 }
 $21 = ($0>>>0)<(245);
 do {
  if ($21) {
   $22 = ($0>>>0)<(11);
   $23 = (($0) + 11)|0;
   $24 = $23 & -8;
   $25 = $22 ? 16 : $24;
   $26 = $25 >>> 3;
   $27 = HEAP32[1657]|0;
   $28 = $27 >>> $26;
   $29 = $28 & 3;
   $30 = ($29|0)==(0);
   if (!($30)) {
    $31 = $28 & 1;
    $32 = $31 ^ 1;
    $33 = (($32) + ($26))|0;
    $34 = $33 << 1;
    $35 = (6668 + ($34<<2)|0);
    $36 = ((($35)) + 8|0);
    $37 = HEAP32[$36>>2]|0;
    $38 = ((($37)) + 8|0);
    $39 = HEAP32[$38>>2]|0;
    $40 = ($39|0)==($35|0);
    if ($40) {
     $41 = 1 << $33;
     $42 = $41 ^ -1;
     $43 = $27 & $42;
     HEAP32[1657] = $43;
    } else {
     $44 = ((($39)) + 12|0);
     HEAP32[$44>>2] = $35;
     HEAP32[$36>>2] = $39;
    }
    $45 = $33 << 3;
    $46 = $45 | 3;
    $47 = ((($37)) + 4|0);
    HEAP32[$47>>2] = $46;
    $48 = (($37) + ($45)|0);
    $49 = ((($48)) + 4|0);
    $50 = HEAP32[$49>>2]|0;
    $51 = $50 | 1;
    HEAP32[$49>>2] = $51;
    $$2 = $38;
    break;
   }
   $52 = HEAP32[(6636)>>2]|0;
   $53 = ($25>>>0)>($52>>>0);
   if ($53) {
    $54 = ($28|0)==(0);
    if (!($54)) {
     $55 = $28 << $26;
     $56 = 2 << $26;
     $57 = (0 - ($56))|0;
     $58 = $56 | $57;
     $59 = $55 & $58;
     $60 = (0 - ($59))|0;
     $61 = $59 & $60;
     $62 = (($61) + -1)|0;
     $63 = $62 >>> 12;
     $64 = $63 & 16;
     $65 = $62 >>> $64;
     $66 = $65 >>> 5;
     $67 = $66 & 8;
     $68 = $67 | $64;
     $69 = $65 >>> $67;
     $70 = $69 >>> 2;
     $71 = $70 & 4;
     $72 = $68 | $71;
     $73 = $69 >>> $71;
     $74 = $73 >>> 1;
     $75 = $74 & 2;
     $76 = $72 | $75;
     $77 = $73 >>> $75;
     $78 = $77 >>> 1;
     $79 = $78 & 1;
     $80 = $76 | $79;
     $81 = $77 >>> $79;
     $82 = (($80) + ($81))|0;
     $83 = $82 << 1;
     $84 = (6668 + ($83<<2)|0);
     $85 = ((($84)) + 8|0);
     $86 = HEAP32[$85>>2]|0;
     $87 = ((($86)) + 8|0);
     $88 = HEAP32[$87>>2]|0;
     $89 = ($88|0)==($84|0);
     if ($89) {
      $90 = 1 << $82;
      $91 = $90 ^ -1;
      $92 = $27 & $91;
      HEAP32[1657] = $92;
      $109 = $92;
     } else {
      $93 = ((($88)) + 12|0);
      HEAP32[$93>>2] = $84;
      HEAP32[$85>>2] = $88;
      $109 = $27;
     }
     $94 = $82 << 3;
     $95 = (($94) - ($25))|0;
     $96 = $25 | 3;
     $97 = ((($86)) + 4|0);
     HEAP32[$97>>2] = $96;
     $98 = (($86) + ($25)|0);
     $99 = $95 | 1;
     $100 = ((($98)) + 4|0);
     HEAP32[$100>>2] = $99;
     $101 = (($86) + ($94)|0);
     HEAP32[$101>>2] = $95;
     $102 = ($52|0)==(0);
     if (!($102)) {
      $103 = HEAP32[(6648)>>2]|0;
      $104 = $52 >>> 3;
      $105 = $104 << 1;
      $106 = (6668 + ($105<<2)|0);
      $107 = 1 << $104;
      $108 = $109 & $107;
      $110 = ($108|0)==(0);
      if ($110) {
       $111 = $109 | $107;
       HEAP32[1657] = $111;
       $$pre = ((($106)) + 8|0);
       $$0195 = $106;$$pre$phiZ2D = $$pre;
      } else {
       $112 = ((($106)) + 8|0);
       $113 = HEAP32[$112>>2]|0;
       $$0195 = $113;$$pre$phiZ2D = $112;
      }
      HEAP32[$$pre$phiZ2D>>2] = $103;
      $114 = ((($$0195)) + 12|0);
      HEAP32[$114>>2] = $103;
      $115 = ((($103)) + 8|0);
      HEAP32[$115>>2] = $$0195;
      $116 = ((($103)) + 12|0);
      HEAP32[$116>>2] = $106;
     }
     HEAP32[(6636)>>2] = $95;
     HEAP32[(6648)>>2] = $98;
     $$2 = $87;
     break;
    }
    $117 = HEAP32[(6632)>>2]|0;
    $118 = ($117|0)==(0);
    if ($118) {
     $$0193 = $25;
     label = 108;
    } else {
     $119 = (0 - ($117))|0;
     $120 = $117 & $119;
     $121 = (($120) + -1)|0;
     $122 = $121 >>> 12;
     $123 = $122 & 16;
     $124 = $121 >>> $123;
     $125 = $124 >>> 5;
     $126 = $125 & 8;
     $127 = $126 | $123;
     $128 = $124 >>> $126;
     $129 = $128 >>> 2;
     $130 = $129 & 4;
     $131 = $127 | $130;
     $132 = $128 >>> $130;
     $133 = $132 >>> 1;
     $134 = $133 & 2;
     $135 = $131 | $134;
     $136 = $132 >>> $134;
     $137 = $136 >>> 1;
     $138 = $137 & 1;
     $139 = $135 | $138;
     $140 = $136 >>> $138;
     $141 = (($139) + ($140))|0;
     $142 = (6932 + ($141<<2)|0);
     $143 = HEAP32[$142>>2]|0;
     $144 = ((($143)) + 4|0);
     $145 = HEAP32[$144>>2]|0;
     $146 = $145 & -8;
     $147 = (($146) - ($25))|0;
     $148 = ((($143)) + 16|0);
     $149 = HEAP32[$148>>2]|0;
     $150 = ($149|0)==(0|0);
     $$sink12$i = $150&1;
     $151 = (((($143)) + 16|0) + ($$sink12$i<<2)|0);
     $152 = HEAP32[$151>>2]|0;
     $153 = ($152|0)==(0|0);
     if ($153) {
      $$0172$lcssa$i = $143;$$0173$lcssa$i = $147;
     } else {
      $$01724$i = $143;$$01733$i = $147;$155 = $152;
      while(1) {
       $154 = ((($155)) + 4|0);
       $156 = HEAP32[$154>>2]|0;
       $157 = $156 & -8;
       $158 = (($157) - ($25))|0;
       $159 = ($158>>>0)<($$01733$i>>>0);
       $$$0173$i = $159 ? $158 : $$01733$i;
       $$$0172$i = $159 ? $155 : $$01724$i;
       $160 = ((($155)) + 16|0);
       $161 = HEAP32[$160>>2]|0;
       $162 = ($161|0)==(0|0);
       $$sink1$i = $162&1;
       $163 = (((($155)) + 16|0) + ($$sink1$i<<2)|0);
       $164 = HEAP32[$163>>2]|0;
       $165 = ($164|0)==(0|0);
       if ($165) {
        $$0172$lcssa$i = $$$0172$i;$$0173$lcssa$i = $$$0173$i;
        break;
       } else {
        $$01724$i = $$$0172$i;$$01733$i = $$$0173$i;$155 = $164;
       }
      }
     }
     $166 = (($$0172$lcssa$i) + ($25)|0);
     $167 = ($166>>>0)>($$0172$lcssa$i>>>0);
     if ($167) {
      $168 = ((($$0172$lcssa$i)) + 24|0);
      $169 = HEAP32[$168>>2]|0;
      $170 = ((($$0172$lcssa$i)) + 12|0);
      $171 = HEAP32[$170>>2]|0;
      $172 = ($171|0)==($$0172$lcssa$i|0);
      do {
       if ($172) {
        $177 = ((($$0172$lcssa$i)) + 20|0);
        $178 = HEAP32[$177>>2]|0;
        $179 = ($178|0)==(0|0);
        if ($179) {
         $180 = ((($$0172$lcssa$i)) + 16|0);
         $181 = HEAP32[$180>>2]|0;
         $182 = ($181|0)==(0|0);
         if ($182) {
          $$3$i = 0;
          break;
         } else {
          $$1176$i = $181;$$1178$i = $180;
         }
        } else {
         $$1176$i = $178;$$1178$i = $177;
        }
        while(1) {
         $183 = ((($$1176$i)) + 20|0);
         $184 = HEAP32[$183>>2]|0;
         $185 = ($184|0)==(0|0);
         if (!($185)) {
          $$1176$i = $184;$$1178$i = $183;
          continue;
         }
         $186 = ((($$1176$i)) + 16|0);
         $187 = HEAP32[$186>>2]|0;
         $188 = ($187|0)==(0|0);
         if ($188) {
          break;
         } else {
          $$1176$i = $187;$$1178$i = $186;
         }
        }
        HEAP32[$$1178$i>>2] = 0;
        $$3$i = $$1176$i;
       } else {
        $173 = ((($$0172$lcssa$i)) + 8|0);
        $174 = HEAP32[$173>>2]|0;
        $175 = ((($174)) + 12|0);
        HEAP32[$175>>2] = $171;
        $176 = ((($171)) + 8|0);
        HEAP32[$176>>2] = $174;
        $$3$i = $171;
       }
      } while(0);
      $189 = ($169|0)==(0|0);
      do {
       if (!($189)) {
        $190 = ((($$0172$lcssa$i)) + 28|0);
        $191 = HEAP32[$190>>2]|0;
        $192 = (6932 + ($191<<2)|0);
        $193 = HEAP32[$192>>2]|0;
        $194 = ($$0172$lcssa$i|0)==($193|0);
        if ($194) {
         HEAP32[$192>>2] = $$3$i;
         $cond$i = ($$3$i|0)==(0|0);
         if ($cond$i) {
          $195 = 1 << $191;
          $196 = $195 ^ -1;
          $197 = $117 & $196;
          HEAP32[(6632)>>2] = $197;
          break;
         }
        } else {
         $198 = ((($169)) + 16|0);
         $199 = HEAP32[$198>>2]|0;
         $200 = ($199|0)!=($$0172$lcssa$i|0);
         $$sink2$i = $200&1;
         $201 = (((($169)) + 16|0) + ($$sink2$i<<2)|0);
         HEAP32[$201>>2] = $$3$i;
         $202 = ($$3$i|0)==(0|0);
         if ($202) {
          break;
         }
        }
        $203 = ((($$3$i)) + 24|0);
        HEAP32[$203>>2] = $169;
        $204 = ((($$0172$lcssa$i)) + 16|0);
        $205 = HEAP32[$204>>2]|0;
        $206 = ($205|0)==(0|0);
        if (!($206)) {
         $207 = ((($$3$i)) + 16|0);
         HEAP32[$207>>2] = $205;
         $208 = ((($205)) + 24|0);
         HEAP32[$208>>2] = $$3$i;
        }
        $209 = ((($$0172$lcssa$i)) + 20|0);
        $210 = HEAP32[$209>>2]|0;
        $211 = ($210|0)==(0|0);
        if (!($211)) {
         $212 = ((($$3$i)) + 20|0);
         HEAP32[$212>>2] = $210;
         $213 = ((($210)) + 24|0);
         HEAP32[$213>>2] = $$3$i;
        }
       }
      } while(0);
      $214 = ($$0173$lcssa$i>>>0)<(16);
      if ($214) {
       $215 = (($$0173$lcssa$i) + ($25))|0;
       $216 = $215 | 3;
       $217 = ((($$0172$lcssa$i)) + 4|0);
       HEAP32[$217>>2] = $216;
       $218 = (($$0172$lcssa$i) + ($215)|0);
       $219 = ((($218)) + 4|0);
       $220 = HEAP32[$219>>2]|0;
       $221 = $220 | 1;
       HEAP32[$219>>2] = $221;
      } else {
       $222 = $25 | 3;
       $223 = ((($$0172$lcssa$i)) + 4|0);
       HEAP32[$223>>2] = $222;
       $224 = $$0173$lcssa$i | 1;
       $225 = ((($166)) + 4|0);
       HEAP32[$225>>2] = $224;
       $226 = (($166) + ($$0173$lcssa$i)|0);
       HEAP32[$226>>2] = $$0173$lcssa$i;
       $227 = ($52|0)==(0);
       if (!($227)) {
        $228 = HEAP32[(6648)>>2]|0;
        $229 = $52 >>> 3;
        $230 = $229 << 1;
        $231 = (6668 + ($230<<2)|0);
        $232 = 1 << $229;
        $233 = $27 & $232;
        $234 = ($233|0)==(0);
        if ($234) {
         $235 = $27 | $232;
         HEAP32[1657] = $235;
         $$pre$i = ((($231)) + 8|0);
         $$0$i = $231;$$pre$phi$iZ2D = $$pre$i;
        } else {
         $236 = ((($231)) + 8|0);
         $237 = HEAP32[$236>>2]|0;
         $$0$i = $237;$$pre$phi$iZ2D = $236;
        }
        HEAP32[$$pre$phi$iZ2D>>2] = $228;
        $238 = ((($$0$i)) + 12|0);
        HEAP32[$238>>2] = $228;
        $239 = ((($228)) + 8|0);
        HEAP32[$239>>2] = $$0$i;
        $240 = ((($228)) + 12|0);
        HEAP32[$240>>2] = $231;
       }
       HEAP32[(6636)>>2] = $$0173$lcssa$i;
       HEAP32[(6648)>>2] = $166;
      }
      $241 = ((($$0172$lcssa$i)) + 8|0);
      $$2 = $241;
     } else {
      $$0193 = $25;
      label = 108;
     }
    }
   } else {
    $$0193 = $25;
    label = 108;
   }
  } else {
   $242 = ($0>>>0)>(4294967231);
   if ($242) {
    $$0193 = -1;
    label = 108;
   } else {
    $243 = (($0) + 11)|0;
    $244 = $243 & -8;
    $245 = HEAP32[(6632)>>2]|0;
    $246 = ($245|0)==(0);
    if ($246) {
     $$0193 = $244;
     label = 108;
    } else {
     $247 = (0 - ($244))|0;
     $248 = $243 >>> 8;
     $249 = ($248|0)==(0);
     if ($249) {
      $$0336$i = 0;
     } else {
      $250 = ($244>>>0)>(16777215);
      if ($250) {
       $$0336$i = 31;
      } else {
       $251 = (($248) + 1048320)|0;
       $252 = $251 >>> 16;
       $253 = $252 & 8;
       $254 = $248 << $253;
       $255 = (($254) + 520192)|0;
       $256 = $255 >>> 16;
       $257 = $256 & 4;
       $258 = $257 | $253;
       $259 = $254 << $257;
       $260 = (($259) + 245760)|0;
       $261 = $260 >>> 16;
       $262 = $261 & 2;
       $263 = $258 | $262;
       $264 = (14 - ($263))|0;
       $265 = $259 << $262;
       $266 = $265 >>> 15;
       $267 = (($264) + ($266))|0;
       $268 = $267 << 1;
       $269 = (($267) + 7)|0;
       $270 = $244 >>> $269;
       $271 = $270 & 1;
       $272 = $271 | $268;
       $$0336$i = $272;
      }
     }
     $273 = (6932 + ($$0336$i<<2)|0);
     $274 = HEAP32[$273>>2]|0;
     $275 = ($274|0)==(0|0);
     L85: do {
      if ($275) {
       $$2333$i = 0;$$3$i196 = 0;$$3328$i = $247;
       label = 66;
      } else {
       $276 = ($$0336$i|0)==(31);
       $277 = $$0336$i >>> 1;
       $278 = (25 - ($277))|0;
       $279 = $276 ? 0 : $278;
       $280 = $244 << $279;
       $$0320$i = 0;$$0325$i = $247;$$0331$i = $274;$$0337$i = $280;$$0340$i = 0;
       while(1) {
        $281 = ((($$0331$i)) + 4|0);
        $282 = HEAP32[$281>>2]|0;
        $283 = $282 & -8;
        $284 = (($283) - ($244))|0;
        $285 = ($284>>>0)<($$0325$i>>>0);
        if ($285) {
         $286 = ($284|0)==(0);
         if ($286) {
          $$43298$i = 0;$$43357$i = $$0331$i;$$49$i = $$0331$i;
          label = 70;
          break L85;
         } else {
          $$1321$i = $$0331$i;$$1326$i = $284;
         }
        } else {
         $$1321$i = $$0320$i;$$1326$i = $$0325$i;
        }
        $287 = ((($$0331$i)) + 20|0);
        $288 = HEAP32[$287>>2]|0;
        $289 = $$0337$i >>> 31;
        $290 = (((($$0331$i)) + 16|0) + ($289<<2)|0);
        $291 = HEAP32[$290>>2]|0;
        $292 = ($288|0)==(0|0);
        $293 = ($288|0)==($291|0);
        $or$cond1$i = $292 | $293;
        $$1341$i = $or$cond1$i ? $$0340$i : $288;
        $294 = ($291|0)==(0|0);
        $not$3$i = $294 ^ 1;
        $295 = $not$3$i&1;
        $$0337$$i = $$0337$i << $295;
        if ($294) {
         $$2333$i = $$1341$i;$$3$i196 = $$1321$i;$$3328$i = $$1326$i;
         label = 66;
         break;
        } else {
         $$0320$i = $$1321$i;$$0325$i = $$1326$i;$$0331$i = $291;$$0337$i = $$0337$$i;$$0340$i = $$1341$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 66) {
      $296 = ($$2333$i|0)==(0|0);
      $297 = ($$3$i196|0)==(0|0);
      $or$cond$i = $296 & $297;
      if ($or$cond$i) {
       $298 = 2 << $$0336$i;
       $299 = (0 - ($298))|0;
       $300 = $298 | $299;
       $301 = $245 & $300;
       $302 = ($301|0)==(0);
       if ($302) {
        $$0193 = $244;
        label = 108;
        break;
       }
       $303 = (0 - ($301))|0;
       $304 = $301 & $303;
       $305 = (($304) + -1)|0;
       $306 = $305 >>> 12;
       $307 = $306 & 16;
       $308 = $305 >>> $307;
       $309 = $308 >>> 5;
       $310 = $309 & 8;
       $311 = $310 | $307;
       $312 = $308 >>> $310;
       $313 = $312 >>> 2;
       $314 = $313 & 4;
       $315 = $311 | $314;
       $316 = $312 >>> $314;
       $317 = $316 >>> 1;
       $318 = $317 & 2;
       $319 = $315 | $318;
       $320 = $316 >>> $318;
       $321 = $320 >>> 1;
       $322 = $321 & 1;
       $323 = $319 | $322;
       $324 = $320 >>> $322;
       $325 = (($323) + ($324))|0;
       $326 = (6932 + ($325<<2)|0);
       $327 = HEAP32[$326>>2]|0;
       $$4$ph$i = 0;$$4335$ph$i = $327;
      } else {
       $$4$ph$i = $$3$i196;$$4335$ph$i = $$2333$i;
      }
      $328 = ($$4335$ph$i|0)==(0|0);
      if ($328) {
       $$4$lcssa$i = $$4$ph$i;$$4329$lcssa$i = $$3328$i;
      } else {
       $$43298$i = $$3328$i;$$43357$i = $$4335$ph$i;$$49$i = $$4$ph$i;
       label = 70;
      }
     }
     if ((label|0) == 70) {
      while(1) {
       label = 0;
       $329 = ((($$43357$i)) + 4|0);
       $330 = HEAP32[$329>>2]|0;
       $331 = $330 & -8;
       $332 = (($331) - ($244))|0;
       $333 = ($332>>>0)<($$43298$i>>>0);
       $$$4329$i = $333 ? $332 : $$43298$i;
       $$4335$$4$i = $333 ? $$43357$i : $$49$i;
       $334 = ((($$43357$i)) + 16|0);
       $335 = HEAP32[$334>>2]|0;
       $336 = ($335|0)==(0|0);
       $$sink2$i198 = $336&1;
       $337 = (((($$43357$i)) + 16|0) + ($$sink2$i198<<2)|0);
       $338 = HEAP32[$337>>2]|0;
       $339 = ($338|0)==(0|0);
       if ($339) {
        $$4$lcssa$i = $$4335$$4$i;$$4329$lcssa$i = $$$4329$i;
        break;
       } else {
        $$43298$i = $$$4329$i;$$43357$i = $338;$$49$i = $$4335$$4$i;
        label = 70;
       }
      }
     }
     $340 = ($$4$lcssa$i|0)==(0|0);
     if ($340) {
      $$0193 = $244;
      label = 108;
     } else {
      $341 = HEAP32[(6636)>>2]|0;
      $342 = (($341) - ($244))|0;
      $343 = ($$4329$lcssa$i>>>0)<($342>>>0);
      if ($343) {
       $344 = (($$4$lcssa$i) + ($244)|0);
       $345 = ($344>>>0)>($$4$lcssa$i>>>0);
       if ($345) {
        $346 = ((($$4$lcssa$i)) + 24|0);
        $347 = HEAP32[$346>>2]|0;
        $348 = ((($$4$lcssa$i)) + 12|0);
        $349 = HEAP32[$348>>2]|0;
        $350 = ($349|0)==($$4$lcssa$i|0);
        do {
         if ($350) {
          $355 = ((($$4$lcssa$i)) + 20|0);
          $356 = HEAP32[$355>>2]|0;
          $357 = ($356|0)==(0|0);
          if ($357) {
           $358 = ((($$4$lcssa$i)) + 16|0);
           $359 = HEAP32[$358>>2]|0;
           $360 = ($359|0)==(0|0);
           if ($360) {
            $$3349$i = 0;
            break;
           } else {
            $$1347$i = $359;$$1351$i = $358;
           }
          } else {
           $$1347$i = $356;$$1351$i = $355;
          }
          while(1) {
           $361 = ((($$1347$i)) + 20|0);
           $362 = HEAP32[$361>>2]|0;
           $363 = ($362|0)==(0|0);
           if (!($363)) {
            $$1347$i = $362;$$1351$i = $361;
            continue;
           }
           $364 = ((($$1347$i)) + 16|0);
           $365 = HEAP32[$364>>2]|0;
           $366 = ($365|0)==(0|0);
           if ($366) {
            break;
           } else {
            $$1347$i = $365;$$1351$i = $364;
           }
          }
          HEAP32[$$1351$i>>2] = 0;
          $$3349$i = $$1347$i;
         } else {
          $351 = ((($$4$lcssa$i)) + 8|0);
          $352 = HEAP32[$351>>2]|0;
          $353 = ((($352)) + 12|0);
          HEAP32[$353>>2] = $349;
          $354 = ((($349)) + 8|0);
          HEAP32[$354>>2] = $352;
          $$3349$i = $349;
         }
        } while(0);
        $367 = ($347|0)==(0|0);
        do {
         if ($367) {
          $450 = $245;
         } else {
          $368 = ((($$4$lcssa$i)) + 28|0);
          $369 = HEAP32[$368>>2]|0;
          $370 = (6932 + ($369<<2)|0);
          $371 = HEAP32[$370>>2]|0;
          $372 = ($$4$lcssa$i|0)==($371|0);
          if ($372) {
           HEAP32[$370>>2] = $$3349$i;
           $cond$i202 = ($$3349$i|0)==(0|0);
           if ($cond$i202) {
            $373 = 1 << $369;
            $374 = $373 ^ -1;
            $375 = $245 & $374;
            HEAP32[(6632)>>2] = $375;
            $450 = $375;
            break;
           }
          } else {
           $376 = ((($347)) + 16|0);
           $377 = HEAP32[$376>>2]|0;
           $378 = ($377|0)!=($$4$lcssa$i|0);
           $$sink3$i = $378&1;
           $379 = (((($347)) + 16|0) + ($$sink3$i<<2)|0);
           HEAP32[$379>>2] = $$3349$i;
           $380 = ($$3349$i|0)==(0|0);
           if ($380) {
            $450 = $245;
            break;
           }
          }
          $381 = ((($$3349$i)) + 24|0);
          HEAP32[$381>>2] = $347;
          $382 = ((($$4$lcssa$i)) + 16|0);
          $383 = HEAP32[$382>>2]|0;
          $384 = ($383|0)==(0|0);
          if (!($384)) {
           $385 = ((($$3349$i)) + 16|0);
           HEAP32[$385>>2] = $383;
           $386 = ((($383)) + 24|0);
           HEAP32[$386>>2] = $$3349$i;
          }
          $387 = ((($$4$lcssa$i)) + 20|0);
          $388 = HEAP32[$387>>2]|0;
          $389 = ($388|0)==(0|0);
          if ($389) {
           $450 = $245;
          } else {
           $390 = ((($$3349$i)) + 20|0);
           HEAP32[$390>>2] = $388;
           $391 = ((($388)) + 24|0);
           HEAP32[$391>>2] = $$3349$i;
           $450 = $245;
          }
         }
        } while(0);
        $392 = ($$4329$lcssa$i>>>0)<(16);
        do {
         if ($392) {
          $393 = (($$4329$lcssa$i) + ($244))|0;
          $394 = $393 | 3;
          $395 = ((($$4$lcssa$i)) + 4|0);
          HEAP32[$395>>2] = $394;
          $396 = (($$4$lcssa$i) + ($393)|0);
          $397 = ((($396)) + 4|0);
          $398 = HEAP32[$397>>2]|0;
          $399 = $398 | 1;
          HEAP32[$397>>2] = $399;
         } else {
          $400 = $244 | 3;
          $401 = ((($$4$lcssa$i)) + 4|0);
          HEAP32[$401>>2] = $400;
          $402 = $$4329$lcssa$i | 1;
          $403 = ((($344)) + 4|0);
          HEAP32[$403>>2] = $402;
          $404 = (($344) + ($$4329$lcssa$i)|0);
          HEAP32[$404>>2] = $$4329$lcssa$i;
          $405 = $$4329$lcssa$i >>> 3;
          $406 = ($$4329$lcssa$i>>>0)<(256);
          if ($406) {
           $407 = $405 << 1;
           $408 = (6668 + ($407<<2)|0);
           $409 = HEAP32[1657]|0;
           $410 = 1 << $405;
           $411 = $409 & $410;
           $412 = ($411|0)==(0);
           if ($412) {
            $413 = $409 | $410;
            HEAP32[1657] = $413;
            $$pre$i203 = ((($408)) + 8|0);
            $$0345$i = $408;$$pre$phi$i204Z2D = $$pre$i203;
           } else {
            $414 = ((($408)) + 8|0);
            $415 = HEAP32[$414>>2]|0;
            $$0345$i = $415;$$pre$phi$i204Z2D = $414;
           }
           HEAP32[$$pre$phi$i204Z2D>>2] = $344;
           $416 = ((($$0345$i)) + 12|0);
           HEAP32[$416>>2] = $344;
           $417 = ((($344)) + 8|0);
           HEAP32[$417>>2] = $$0345$i;
           $418 = ((($344)) + 12|0);
           HEAP32[$418>>2] = $408;
           break;
          }
          $419 = $$4329$lcssa$i >>> 8;
          $420 = ($419|0)==(0);
          if ($420) {
           $$0339$i = 0;
          } else {
           $421 = ($$4329$lcssa$i>>>0)>(16777215);
           if ($421) {
            $$0339$i = 31;
           } else {
            $422 = (($419) + 1048320)|0;
            $423 = $422 >>> 16;
            $424 = $423 & 8;
            $425 = $419 << $424;
            $426 = (($425) + 520192)|0;
            $427 = $426 >>> 16;
            $428 = $427 & 4;
            $429 = $428 | $424;
            $430 = $425 << $428;
            $431 = (($430) + 245760)|0;
            $432 = $431 >>> 16;
            $433 = $432 & 2;
            $434 = $429 | $433;
            $435 = (14 - ($434))|0;
            $436 = $430 << $433;
            $437 = $436 >>> 15;
            $438 = (($435) + ($437))|0;
            $439 = $438 << 1;
            $440 = (($438) + 7)|0;
            $441 = $$4329$lcssa$i >>> $440;
            $442 = $441 & 1;
            $443 = $442 | $439;
            $$0339$i = $443;
           }
          }
          $444 = (6932 + ($$0339$i<<2)|0);
          $445 = ((($344)) + 28|0);
          HEAP32[$445>>2] = $$0339$i;
          $446 = ((($344)) + 16|0);
          $447 = ((($446)) + 4|0);
          HEAP32[$447>>2] = 0;
          HEAP32[$446>>2] = 0;
          $448 = 1 << $$0339$i;
          $449 = $450 & $448;
          $451 = ($449|0)==(0);
          if ($451) {
           $452 = $450 | $448;
           HEAP32[(6632)>>2] = $452;
           HEAP32[$444>>2] = $344;
           $453 = ((($344)) + 24|0);
           HEAP32[$453>>2] = $444;
           $454 = ((($344)) + 12|0);
           HEAP32[$454>>2] = $344;
           $455 = ((($344)) + 8|0);
           HEAP32[$455>>2] = $344;
           break;
          }
          $456 = HEAP32[$444>>2]|0;
          $457 = ($$0339$i|0)==(31);
          $458 = $$0339$i >>> 1;
          $459 = (25 - ($458))|0;
          $460 = $457 ? 0 : $459;
          $461 = $$4329$lcssa$i << $460;
          $$0322$i = $461;$$0323$i = $456;
          while(1) {
           $462 = ((($$0323$i)) + 4|0);
           $463 = HEAP32[$462>>2]|0;
           $464 = $463 & -8;
           $465 = ($464|0)==($$4329$lcssa$i|0);
           if ($465) {
            label = 106;
            break;
           }
           $466 = $$0322$i >>> 31;
           $467 = (((($$0323$i)) + 16|0) + ($466<<2)|0);
           $468 = $$0322$i << 1;
           $469 = HEAP32[$467>>2]|0;
           $470 = ($469|0)==(0|0);
           if ($470) {
            label = 105;
            break;
           } else {
            $$0322$i = $468;$$0323$i = $469;
           }
          }
          if ((label|0) == 105) {
           HEAP32[$467>>2] = $344;
           $471 = ((($344)) + 24|0);
           HEAP32[$471>>2] = $$0323$i;
           $472 = ((($344)) + 12|0);
           HEAP32[$472>>2] = $344;
           $473 = ((($344)) + 8|0);
           HEAP32[$473>>2] = $344;
           break;
          }
          else if ((label|0) == 106) {
           $474 = ((($$0323$i)) + 8|0);
           $475 = HEAP32[$474>>2]|0;
           $476 = ((($475)) + 12|0);
           HEAP32[$476>>2] = $344;
           HEAP32[$474>>2] = $344;
           $477 = ((($344)) + 8|0);
           HEAP32[$477>>2] = $475;
           $478 = ((($344)) + 12|0);
           HEAP32[$478>>2] = $$0323$i;
           $479 = ((($344)) + 24|0);
           HEAP32[$479>>2] = 0;
           break;
          }
         }
        } while(0);
        $480 = ((($$4$lcssa$i)) + 8|0);
        $$2 = $480;
       } else {
        $$2 = 0;
       }
      } else {
       $$0193 = $244;
       label = 108;
      }
     }
    }
   }
  }
 } while(0);
 L151: do {
  if ((label|0) == 108) {
   $481 = HEAP32[(6636)>>2]|0;
   $482 = ($481>>>0)<($$0193>>>0);
   if (!($482)) {
    $483 = (($481) - ($$0193))|0;
    $484 = HEAP32[(6648)>>2]|0;
    $485 = ($483>>>0)>(15);
    if ($485) {
     $486 = (($484) + ($$0193)|0);
     HEAP32[(6648)>>2] = $486;
     HEAP32[(6636)>>2] = $483;
     $487 = $483 | 1;
     $488 = ((($486)) + 4|0);
     HEAP32[$488>>2] = $487;
     $489 = (($484) + ($481)|0);
     HEAP32[$489>>2] = $483;
     $490 = $$0193 | 3;
     $491 = ((($484)) + 4|0);
     HEAP32[$491>>2] = $490;
    } else {
     HEAP32[(6636)>>2] = 0;
     HEAP32[(6648)>>2] = 0;
     $492 = $481 | 3;
     $493 = ((($484)) + 4|0);
     HEAP32[$493>>2] = $492;
     $494 = (($484) + ($481)|0);
     $495 = ((($494)) + 4|0);
     $496 = HEAP32[$495>>2]|0;
     $497 = $496 | 1;
     HEAP32[$495>>2] = $497;
    }
    $498 = ((($484)) + 8|0);
    $$2 = $498;
    break;
   }
   $499 = HEAP32[(6640)>>2]|0;
   $500 = ($499>>>0)>($$0193>>>0);
   if ($500) {
    $501 = (($499) - ($$0193))|0;
    HEAP32[(6640)>>2] = $501;
    $502 = HEAP32[(6652)>>2]|0;
    $503 = (($502) + ($$0193)|0);
    HEAP32[(6652)>>2] = $503;
    $504 = $501 | 1;
    $505 = ((($503)) + 4|0);
    HEAP32[$505>>2] = $504;
    $506 = $$0193 | 3;
    $507 = ((($502)) + 4|0);
    HEAP32[$507>>2] = $506;
    $508 = ((($502)) + 8|0);
    $$2 = $508;
    break;
   }
   $509 = HEAP32[1644]|0;
   $510 = ($509|0)==(0);
   if ($510) {
    (___pthread_mutex_lock(6600)|0);
    $511 = HEAP32[1644]|0;
    $512 = ($511|0)==(0);
    if ($512) {
     HEAP32[(6584)>>2] = 4096;
     HEAP32[(6580)>>2] = 4096;
     HEAP32[(6588)>>2] = -1;
     HEAP32[(6592)>>2] = -1;
     HEAP32[(6596)>>2] = 2;
     HEAP32[(7072)>>2] = 2;
     $513 = (_pthread_mutexattr_init($1)|0);
     $514 = ($513|0)==(0);
     if ($514) {
      $515 = (_pthread_mutex_init((7076),$1)|0);
      $516 = ($515|0)==(0);
      if ($516) {
      }
     }
     $517 = $2;
     $518 = $517 & -16;
     $519 = $518 ^ 1431655768;
     Atomics_store(HEAP32,1644,$519)|0;
    }
    (___pthread_mutex_unlock(6600)|0);
   }
   $520 = (($$0193) + 48)|0;
   $521 = HEAP32[(6584)>>2]|0;
   $522 = (($$0193) + 47)|0;
   $523 = (($521) + ($522))|0;
   $524 = (0 - ($521))|0;
   $525 = $523 & $524;
   $526 = ($525>>>0)>($$0193>>>0);
   if ($526) {
    $527 = HEAP32[(7068)>>2]|0;
    $528 = ($527|0)==(0);
    if (!($528)) {
     $529 = HEAP32[(7060)>>2]|0;
     $530 = (($529) + ($525))|0;
     $531 = ($530>>>0)<=($529>>>0);
     $532 = ($530>>>0)>($527>>>0);
     $or$cond1$i205 = $531 | $532;
     if ($or$cond1$i205) {
      $$2 = 0;
      break;
     }
    }
    $533 = HEAP32[(7072)>>2]|0;
    $534 = $533 & 4;
    $535 = ($534|0)==(0);
    if ($535) {
     $536 = HEAP32[(6652)>>2]|0;
     $537 = ($536|0)==(0|0);
     L179: do {
      if ($537) {
       label = 131;
      } else {
       $$0$i$i = (7104);
       while(1) {
        $538 = HEAP32[$$0$i$i>>2]|0;
        $539 = ($538>>>0)>($536>>>0);
        if (!($539)) {
         $540 = ((($$0$i$i)) + 4|0);
         $541 = HEAP32[$540>>2]|0;
         $542 = (($538) + ($541)|0);
         $543 = ($542>>>0)>($536>>>0);
         if ($543) {
          break;
         }
        }
        $544 = ((($$0$i$i)) + 8|0);
        $545 = HEAP32[$544>>2]|0;
        $546 = ($545|0)==(0|0);
        if ($546) {
         label = 131;
         break L179;
        } else {
         $$0$i$i = $545;
        }
       }
       (___pthread_mutex_lock(6600)|0);
       $569 = HEAP32[(6640)>>2]|0;
       $570 = HEAP32[(6584)>>2]|0;
       $571 = (($522) - ($569))|0;
       $572 = (($571) + ($570))|0;
       $573 = (0 - ($570))|0;
       $574 = $572 & $573;
       $575 = ($574>>>0)<(2147483647);
       if ($575) {
        $576 = (_sbrk(($574|0))|0);
        $577 = HEAP32[$$0$i$i>>2]|0;
        $578 = HEAP32[$540>>2]|0;
        $579 = (($577) + ($578)|0);
        $580 = ($576|0)==($579|0);
        if ($580) {
         $581 = ($576|0)==((-1)|0);
         if ($581) {
          $$2234243136$i = $574;
          label = 145;
         } else {
          $$3229$i = $576;$$3235$i = $574;
         }
        } else {
         $$2247$ph$i = $576;$$2253$ph$i = $574;
         label = 139;
        }
       } else {
        $$2234243136$i = 0;
        label = 145;
       }
      }
     } while(0);
     do {
      if ((label|0) == 131) {
       (___pthread_mutex_lock(6600)|0);
       $547 = (_sbrk(0)|0);
       $548 = ($547|0)==((-1)|0);
       if ($548) {
        $$2234243136$i = 0;
        label = 145;
       } else {
        $549 = $547;
        $550 = HEAP32[(6580)>>2]|0;
        $551 = (($550) + -1)|0;
        $552 = $551 & $549;
        $553 = ($552|0)==(0);
        $554 = (($551) + ($549))|0;
        $555 = (0 - ($550))|0;
        $556 = $554 & $555;
        $557 = (($556) - ($549))|0;
        $558 = $553 ? 0 : $557;
        $$$i = (($558) + ($525))|0;
        $559 = HEAP32[(7060)>>2]|0;
        $560 = (($$$i) + ($559))|0;
        $561 = ($$$i>>>0)>($$0193>>>0);
        $562 = ($$$i>>>0)<(2147483647);
        $or$cond$i206 = $561 & $562;
        if ($or$cond$i206) {
         $563 = HEAP32[(7068)>>2]|0;
         $564 = ($563|0)==(0);
         if (!($564)) {
          $565 = ($560>>>0)<=($559>>>0);
          $566 = ($560>>>0)>($563>>>0);
          $or$cond2$i = $565 | $566;
          if ($or$cond2$i) {
           $$2234243136$i = 0;
           label = 145;
           break;
          }
         }
         $567 = (_sbrk(($$$i|0))|0);
         $568 = ($567|0)==($547|0);
         if ($568) {
          $$3229$i = $547;$$3235$i = $$$i;
         } else {
          $$2247$ph$i = $567;$$2253$ph$i = $$$i;
          label = 139;
         }
        } else {
         $$2234243136$i = 0;
         label = 145;
        }
       }
      }
     } while(0);
     do {
      if ((label|0) == 139) {
       $582 = (0 - ($$2253$ph$i))|0;
       $583 = ($$2247$ph$i|0)!=((-1)|0);
       $584 = ($$2253$ph$i>>>0)<(2147483647);
       $or$cond7$i = $584 & $583;
       $585 = ($520>>>0)>($$2253$ph$i>>>0);
       $or$cond10$i = $585 & $or$cond7$i;
       if (!($or$cond10$i)) {
        $595 = ($$2247$ph$i|0)==((-1)|0);
        if ($595) {
         $$2234243136$i = 0;
         label = 145;
         break;
        } else {
         $$3229$i = $$2247$ph$i;$$3235$i = $$2253$ph$i;
         break;
        }
       }
       $586 = HEAP32[(6584)>>2]|0;
       $587 = (($522) - ($$2253$ph$i))|0;
       $588 = (($587) + ($586))|0;
       $589 = (0 - ($586))|0;
       $590 = $588 & $589;
       $591 = ($590>>>0)<(2147483647);
       if ($591) {
        $592 = (_sbrk(($590|0))|0);
        $593 = ($592|0)==((-1)|0);
        if ($593) {
         (_sbrk(($582|0))|0);
         $$2234243136$i = 0;
         label = 145;
         break;
        } else {
         $594 = (($590) + ($$2253$ph$i))|0;
         $$3229$i = $$2247$ph$i;$$3235$i = $594;
         break;
        }
       } else {
        $$3229$i = $$2247$ph$i;$$3235$i = $$2253$ph$i;
       }
      }
     } while(0);
     if ((label|0) == 145) {
      $596 = HEAP32[(7072)>>2]|0;
      $597 = $596 | 4;
      HEAP32[(7072)>>2] = $597;
      $$3229$i = (-1);$$3235$i = $$2234243136$i;
     }
     (___pthread_mutex_unlock(6600)|0);
     $$4230$i = $$3229$i;$$4236$i = $$3235$i;
    } else {
     $$4230$i = (-1);$$4236$i = 0;
    }
    $598 = ($$4230$i|0)==((-1)|0);
    $599 = ($525>>>0)<(2147483647);
    $or$cond9$i = $599 & $598;
    if ($or$cond9$i) {
     (___pthread_mutex_lock(6600)|0);
     $600 = (_sbrk(($525|0))|0);
     $601 = (_sbrk(0)|0);
     (___pthread_mutex_unlock(6600)|0);
     $602 = ($600|0)!=((-1)|0);
     $603 = ($601|0)!=((-1)|0);
     $or$cond5$i = $602 & $603;
     $604 = ($600>>>0)<($601>>>0);
     $or$cond11$i = $604 & $or$cond5$i;
     $605 = $601;
     $606 = $600;
     $607 = (($605) - ($606))|0;
     $608 = (($$0193) + 40)|0;
     $609 = ($607>>>0)>($608>>>0);
     $$$4236$i = $609 ? $607 : $$4236$i;
     $$$4230$i = $609 ? $600 : (-1);
     if ($or$cond11$i) {
      $$7$i = $$$4230$i;$$7239$i = $$$4236$i;
      label = 149;
     }
    } else {
     $$7$i = $$4230$i;$$7239$i = $$4236$i;
     label = 149;
    }
    if ((label|0) == 149) {
     $610 = ($$7$i|0)==((-1)|0);
     if (!($610)) {
      $611 = HEAP32[(7060)>>2]|0;
      $612 = (($611) + ($$7239$i))|0;
      HEAP32[(7060)>>2] = $612;
      $613 = HEAP32[(7064)>>2]|0;
      $614 = ($612>>>0)>($613>>>0);
      if ($614) {
       HEAP32[(7064)>>2] = $612;
      }
      $615 = HEAP32[(6652)>>2]|0;
      $616 = ($615|0)==(0|0);
      do {
       if ($616) {
        $617 = HEAP32[(6644)>>2]|0;
        $618 = ($617|0)==(0|0);
        $619 = ($$7$i>>>0)<($617>>>0);
        $or$cond12$i = $618 | $619;
        if ($or$cond12$i) {
         HEAP32[(6644)>>2] = $$7$i;
        }
        HEAP32[(7104)>>2] = $$7$i;
        HEAP32[(7108)>>2] = $$7239$i;
        HEAP32[(7116)>>2] = 0;
        $620 = HEAP32[1644]|0;
        HEAP32[(6664)>>2] = $620;
        HEAP32[(6660)>>2] = -1;
        HEAP32[(6680)>>2] = (6668);
        HEAP32[(6676)>>2] = (6668);
        HEAP32[(6688)>>2] = (6676);
        HEAP32[(6684)>>2] = (6676);
        HEAP32[(6696)>>2] = (6684);
        HEAP32[(6692)>>2] = (6684);
        HEAP32[(6704)>>2] = (6692);
        HEAP32[(6700)>>2] = (6692);
        HEAP32[(6712)>>2] = (6700);
        HEAP32[(6708)>>2] = (6700);
        HEAP32[(6720)>>2] = (6708);
        HEAP32[(6716)>>2] = (6708);
        HEAP32[(6728)>>2] = (6716);
        HEAP32[(6724)>>2] = (6716);
        HEAP32[(6736)>>2] = (6724);
        HEAP32[(6732)>>2] = (6724);
        HEAP32[(6744)>>2] = (6732);
        HEAP32[(6740)>>2] = (6732);
        HEAP32[(6752)>>2] = (6740);
        HEAP32[(6748)>>2] = (6740);
        HEAP32[(6760)>>2] = (6748);
        HEAP32[(6756)>>2] = (6748);
        HEAP32[(6768)>>2] = (6756);
        HEAP32[(6764)>>2] = (6756);
        HEAP32[(6776)>>2] = (6764);
        HEAP32[(6772)>>2] = (6764);
        HEAP32[(6784)>>2] = (6772);
        HEAP32[(6780)>>2] = (6772);
        HEAP32[(6792)>>2] = (6780);
        HEAP32[(6788)>>2] = (6780);
        HEAP32[(6800)>>2] = (6788);
        HEAP32[(6796)>>2] = (6788);
        HEAP32[(6808)>>2] = (6796);
        HEAP32[(6804)>>2] = (6796);
        HEAP32[(6816)>>2] = (6804);
        HEAP32[(6812)>>2] = (6804);
        HEAP32[(6824)>>2] = (6812);
        HEAP32[(6820)>>2] = (6812);
        HEAP32[(6832)>>2] = (6820);
        HEAP32[(6828)>>2] = (6820);
        HEAP32[(6840)>>2] = (6828);
        HEAP32[(6836)>>2] = (6828);
        HEAP32[(6848)>>2] = (6836);
        HEAP32[(6844)>>2] = (6836);
        HEAP32[(6856)>>2] = (6844);
        HEAP32[(6852)>>2] = (6844);
        HEAP32[(6864)>>2] = (6852);
        HEAP32[(6860)>>2] = (6852);
        HEAP32[(6872)>>2] = (6860);
        HEAP32[(6868)>>2] = (6860);
        HEAP32[(6880)>>2] = (6868);
        HEAP32[(6876)>>2] = (6868);
        HEAP32[(6888)>>2] = (6876);
        HEAP32[(6884)>>2] = (6876);
        HEAP32[(6896)>>2] = (6884);
        HEAP32[(6892)>>2] = (6884);
        HEAP32[(6904)>>2] = (6892);
        HEAP32[(6900)>>2] = (6892);
        HEAP32[(6912)>>2] = (6900);
        HEAP32[(6908)>>2] = (6900);
        HEAP32[(6920)>>2] = (6908);
        HEAP32[(6916)>>2] = (6908);
        HEAP32[(6928)>>2] = (6916);
        HEAP32[(6924)>>2] = (6916);
        $621 = (($$7239$i) + -40)|0;
        $622 = ((($$7$i)) + 8|0);
        $623 = $622;
        $624 = $623 & 7;
        $625 = ($624|0)==(0);
        $626 = (0 - ($623))|0;
        $627 = $626 & 7;
        $628 = $625 ? 0 : $627;
        $629 = (($$7$i) + ($628)|0);
        $630 = (($621) - ($628))|0;
        HEAP32[(6652)>>2] = $629;
        HEAP32[(6640)>>2] = $630;
        $631 = $630 | 1;
        $632 = ((($629)) + 4|0);
        HEAP32[$632>>2] = $631;
        $633 = (($$7$i) + ($621)|0);
        $634 = ((($633)) + 4|0);
        HEAP32[$634>>2] = 40;
        $635 = HEAP32[(6592)>>2]|0;
        HEAP32[(6656)>>2] = $635;
       } else {
        $$024359$i = (7104);
        while(1) {
         $636 = HEAP32[$$024359$i>>2]|0;
         $637 = ((($$024359$i)) + 4|0);
         $638 = HEAP32[$637>>2]|0;
         $639 = (($636) + ($638)|0);
         $640 = ($$7$i|0)==($639|0);
         if ($640) {
          label = 158;
          break;
         }
         $641 = ((($$024359$i)) + 8|0);
         $642 = HEAP32[$641>>2]|0;
         $643 = ($642|0)==(0|0);
         if ($643) {
          break;
         } else {
          $$024359$i = $642;
         }
        }
        if ((label|0) == 158) {
         $644 = ((($$024359$i)) + 12|0);
         $645 = HEAP32[$644>>2]|0;
         $646 = $645 & 8;
         $647 = ($646|0)==(0);
         if ($647) {
          $648 = ($636>>>0)<=($615>>>0);
          $649 = ($$7$i>>>0)>($615>>>0);
          $or$cond42$i = $649 & $648;
          if ($or$cond42$i) {
           $650 = (($638) + ($$7239$i))|0;
           HEAP32[$637>>2] = $650;
           $651 = HEAP32[(6640)>>2]|0;
           $652 = (($651) + ($$7239$i))|0;
           $653 = ((($615)) + 8|0);
           $654 = $653;
           $655 = $654 & 7;
           $656 = ($655|0)==(0);
           $657 = (0 - ($654))|0;
           $658 = $657 & 7;
           $659 = $656 ? 0 : $658;
           $660 = (($615) + ($659)|0);
           $661 = (($652) - ($659))|0;
           HEAP32[(6652)>>2] = $660;
           HEAP32[(6640)>>2] = $661;
           $662 = $661 | 1;
           $663 = ((($660)) + 4|0);
           HEAP32[$663>>2] = $662;
           $664 = (($615) + ($652)|0);
           $665 = ((($664)) + 4|0);
           HEAP32[$665>>2] = 40;
           $666 = HEAP32[(6592)>>2]|0;
           HEAP32[(6656)>>2] = $666;
           break;
          }
         }
        }
        $667 = HEAP32[(6644)>>2]|0;
        $668 = ($$7$i>>>0)<($667>>>0);
        if ($668) {
         HEAP32[(6644)>>2] = $$7$i;
        }
        $669 = (($$7$i) + ($$7239$i)|0);
        $$124458$i = (7104);
        while(1) {
         $670 = HEAP32[$$124458$i>>2]|0;
         $671 = ($670|0)==($669|0);
         if ($671) {
          label = 166;
          break;
         }
         $672 = ((($$124458$i)) + 8|0);
         $673 = HEAP32[$672>>2]|0;
         $674 = ($673|0)==(0|0);
         if ($674) {
          $$0$i$i$i = (7104);
          break;
         } else {
          $$124458$i = $673;
         }
        }
        if ((label|0) == 166) {
         $675 = ((($$124458$i)) + 12|0);
         $676 = HEAP32[$675>>2]|0;
         $677 = $676 & 8;
         $678 = ($677|0)==(0);
         if ($678) {
          HEAP32[$$124458$i>>2] = $$7$i;
          $679 = ((($$124458$i)) + 4|0);
          $680 = HEAP32[$679>>2]|0;
          $681 = (($680) + ($$7239$i))|0;
          HEAP32[$679>>2] = $681;
          $682 = ((($$7$i)) + 8|0);
          $683 = $682;
          $684 = $683 & 7;
          $685 = ($684|0)==(0);
          $686 = (0 - ($683))|0;
          $687 = $686 & 7;
          $688 = $685 ? 0 : $687;
          $689 = (($$7$i) + ($688)|0);
          $690 = ((($669)) + 8|0);
          $691 = $690;
          $692 = $691 & 7;
          $693 = ($692|0)==(0);
          $694 = (0 - ($691))|0;
          $695 = $694 & 7;
          $696 = $693 ? 0 : $695;
          $697 = (($669) + ($696)|0);
          $698 = $697;
          $699 = $689;
          $700 = (($698) - ($699))|0;
          $701 = (($689) + ($$0193)|0);
          $702 = (($700) - ($$0193))|0;
          $703 = $$0193 | 3;
          $704 = ((($689)) + 4|0);
          HEAP32[$704>>2] = $703;
          $705 = ($615|0)==($697|0);
          do {
           if ($705) {
            $706 = HEAP32[(6640)>>2]|0;
            $707 = (($706) + ($702))|0;
            HEAP32[(6640)>>2] = $707;
            HEAP32[(6652)>>2] = $701;
            $708 = $707 | 1;
            $709 = ((($701)) + 4|0);
            HEAP32[$709>>2] = $708;
           } else {
            $710 = HEAP32[(6648)>>2]|0;
            $711 = ($710|0)==($697|0);
            if ($711) {
             $712 = HEAP32[(6636)>>2]|0;
             $713 = (($712) + ($702))|0;
             HEAP32[(6636)>>2] = $713;
             HEAP32[(6648)>>2] = $701;
             $714 = $713 | 1;
             $715 = ((($701)) + 4|0);
             HEAP32[$715>>2] = $714;
             $716 = (($701) + ($713)|0);
             HEAP32[$716>>2] = $713;
             break;
            }
            $717 = ((($697)) + 4|0);
            $718 = HEAP32[$717>>2]|0;
            $719 = $718 & 3;
            $720 = ($719|0)==(1);
            if ($720) {
             $721 = $718 & -8;
             $722 = $718 >>> 3;
             $723 = ($718>>>0)<(256);
             L247: do {
              if ($723) {
               $724 = ((($697)) + 8|0);
               $725 = HEAP32[$724>>2]|0;
               $726 = ((($697)) + 12|0);
               $727 = HEAP32[$726>>2]|0;
               $728 = ($727|0)==($725|0);
               if ($728) {
                $729 = 1 << $722;
                $730 = $729 ^ -1;
                $731 = HEAP32[1657]|0;
                $732 = $731 & $730;
                HEAP32[1657] = $732;
                break;
               } else {
                $733 = ((($725)) + 12|0);
                HEAP32[$733>>2] = $727;
                $734 = ((($727)) + 8|0);
                HEAP32[$734>>2] = $725;
                break;
               }
              } else {
               $735 = ((($697)) + 24|0);
               $736 = HEAP32[$735>>2]|0;
               $737 = ((($697)) + 12|0);
               $738 = HEAP32[$737>>2]|0;
               $739 = ($738|0)==($697|0);
               do {
                if ($739) {
                 $744 = ((($697)) + 16|0);
                 $745 = ((($744)) + 4|0);
                 $746 = HEAP32[$745>>2]|0;
                 $747 = ($746|0)==(0|0);
                 if ($747) {
                  $748 = HEAP32[$744>>2]|0;
                  $749 = ($748|0)==(0|0);
                  if ($749) {
                   $$3$i$i = 0;
                   break;
                  } else {
                   $$1264$i$i = $748;$$1266$i$i = $744;
                  }
                 } else {
                  $$1264$i$i = $746;$$1266$i$i = $745;
                 }
                 while(1) {
                  $750 = ((($$1264$i$i)) + 20|0);
                  $751 = HEAP32[$750>>2]|0;
                  $752 = ($751|0)==(0|0);
                  if (!($752)) {
                   $$1264$i$i = $751;$$1266$i$i = $750;
                   continue;
                  }
                  $753 = ((($$1264$i$i)) + 16|0);
                  $754 = HEAP32[$753>>2]|0;
                  $755 = ($754|0)==(0|0);
                  if ($755) {
                   break;
                  } else {
                   $$1264$i$i = $754;$$1266$i$i = $753;
                  }
                 }
                 HEAP32[$$1266$i$i>>2] = 0;
                 $$3$i$i = $$1264$i$i;
                } else {
                 $740 = ((($697)) + 8|0);
                 $741 = HEAP32[$740>>2]|0;
                 $742 = ((($741)) + 12|0);
                 HEAP32[$742>>2] = $738;
                 $743 = ((($738)) + 8|0);
                 HEAP32[$743>>2] = $741;
                 $$3$i$i = $738;
                }
               } while(0);
               $756 = ($736|0)==(0|0);
               if ($756) {
                break;
               }
               $757 = ((($697)) + 28|0);
               $758 = HEAP32[$757>>2]|0;
               $759 = (6932 + ($758<<2)|0);
               $760 = HEAP32[$759>>2]|0;
               $761 = ($760|0)==($697|0);
               do {
                if ($761) {
                 HEAP32[$759>>2] = $$3$i$i;
                 $cond$i$i = ($$3$i$i|0)==(0|0);
                 if (!($cond$i$i)) {
                  break;
                 }
                 $762 = 1 << $758;
                 $763 = $762 ^ -1;
                 $764 = HEAP32[(6632)>>2]|0;
                 $765 = $764 & $763;
                 HEAP32[(6632)>>2] = $765;
                 break L247;
                } else {
                 $766 = ((($736)) + 16|0);
                 $767 = HEAP32[$766>>2]|0;
                 $768 = ($767|0)!=($697|0);
                 $$sink1$i$i = $768&1;
                 $769 = (((($736)) + 16|0) + ($$sink1$i$i<<2)|0);
                 HEAP32[$769>>2] = $$3$i$i;
                 $770 = ($$3$i$i|0)==(0|0);
                 if ($770) {
                  break L247;
                 }
                }
               } while(0);
               $771 = ((($$3$i$i)) + 24|0);
               HEAP32[$771>>2] = $736;
               $772 = ((($697)) + 16|0);
               $773 = HEAP32[$772>>2]|0;
               $774 = ($773|0)==(0|0);
               if (!($774)) {
                $775 = ((($$3$i$i)) + 16|0);
                HEAP32[$775>>2] = $773;
                $776 = ((($773)) + 24|0);
                HEAP32[$776>>2] = $$3$i$i;
               }
               $777 = ((($772)) + 4|0);
               $778 = HEAP32[$777>>2]|0;
               $779 = ($778|0)==(0|0);
               if ($779) {
                break;
               }
               $780 = ((($$3$i$i)) + 20|0);
               HEAP32[$780>>2] = $778;
               $781 = ((($778)) + 24|0);
               HEAP32[$781>>2] = $$3$i$i;
              }
             } while(0);
             $782 = (($697) + ($721)|0);
             $783 = (($721) + ($702))|0;
             $$0$i17$i = $782;$$0260$i$i = $783;
            } else {
             $$0$i17$i = $697;$$0260$i$i = $702;
            }
            $784 = ((($$0$i17$i)) + 4|0);
            $785 = HEAP32[$784>>2]|0;
            $786 = $785 & -2;
            HEAP32[$784>>2] = $786;
            $787 = $$0260$i$i | 1;
            $788 = ((($701)) + 4|0);
            HEAP32[$788>>2] = $787;
            $789 = (($701) + ($$0260$i$i)|0);
            HEAP32[$789>>2] = $$0260$i$i;
            $790 = $$0260$i$i >>> 3;
            $791 = ($$0260$i$i>>>0)<(256);
            if ($791) {
             $792 = $790 << 1;
             $793 = (6668 + ($792<<2)|0);
             $794 = HEAP32[1657]|0;
             $795 = 1 << $790;
             $796 = $794 & $795;
             $797 = ($796|0)==(0);
             if ($797) {
              $798 = $794 | $795;
              HEAP32[1657] = $798;
              $$pre$i$i = ((($793)) + 8|0);
              $$0268$i$i = $793;$$pre$phi$i$iZ2D = $$pre$i$i;
             } else {
              $799 = ((($793)) + 8|0);
              $800 = HEAP32[$799>>2]|0;
              $$0268$i$i = $800;$$pre$phi$i$iZ2D = $799;
             }
             HEAP32[$$pre$phi$i$iZ2D>>2] = $701;
             $801 = ((($$0268$i$i)) + 12|0);
             HEAP32[$801>>2] = $701;
             $802 = ((($701)) + 8|0);
             HEAP32[$802>>2] = $$0268$i$i;
             $803 = ((($701)) + 12|0);
             HEAP32[$803>>2] = $793;
             break;
            }
            $804 = $$0260$i$i >>> 8;
            $805 = ($804|0)==(0);
            do {
             if ($805) {
              $$0269$i$i = 0;
             } else {
              $806 = ($$0260$i$i>>>0)>(16777215);
              if ($806) {
               $$0269$i$i = 31;
               break;
              }
              $807 = (($804) + 1048320)|0;
              $808 = $807 >>> 16;
              $809 = $808 & 8;
              $810 = $804 << $809;
              $811 = (($810) + 520192)|0;
              $812 = $811 >>> 16;
              $813 = $812 & 4;
              $814 = $813 | $809;
              $815 = $810 << $813;
              $816 = (($815) + 245760)|0;
              $817 = $816 >>> 16;
              $818 = $817 & 2;
              $819 = $814 | $818;
              $820 = (14 - ($819))|0;
              $821 = $815 << $818;
              $822 = $821 >>> 15;
              $823 = (($820) + ($822))|0;
              $824 = $823 << 1;
              $825 = (($823) + 7)|0;
              $826 = $$0260$i$i >>> $825;
              $827 = $826 & 1;
              $828 = $827 | $824;
              $$0269$i$i = $828;
             }
            } while(0);
            $829 = (6932 + ($$0269$i$i<<2)|0);
            $830 = ((($701)) + 28|0);
            HEAP32[$830>>2] = $$0269$i$i;
            $831 = ((($701)) + 16|0);
            $832 = ((($831)) + 4|0);
            HEAP32[$832>>2] = 0;
            HEAP32[$831>>2] = 0;
            $833 = HEAP32[(6632)>>2]|0;
            $834 = 1 << $$0269$i$i;
            $835 = $833 & $834;
            $836 = ($835|0)==(0);
            if ($836) {
             $837 = $833 | $834;
             HEAP32[(6632)>>2] = $837;
             HEAP32[$829>>2] = $701;
             $838 = ((($701)) + 24|0);
             HEAP32[$838>>2] = $829;
             $839 = ((($701)) + 12|0);
             HEAP32[$839>>2] = $701;
             $840 = ((($701)) + 8|0);
             HEAP32[$840>>2] = $701;
             break;
            }
            $841 = HEAP32[$829>>2]|0;
            $842 = ($$0269$i$i|0)==(31);
            $843 = $$0269$i$i >>> 1;
            $844 = (25 - ($843))|0;
            $845 = $842 ? 0 : $844;
            $846 = $$0260$i$i << $845;
            $$0261$i$i = $846;$$0262$i$i = $841;
            while(1) {
             $847 = ((($$0262$i$i)) + 4|0);
             $848 = HEAP32[$847>>2]|0;
             $849 = $848 & -8;
             $850 = ($849|0)==($$0260$i$i|0);
             if ($850) {
              label = 207;
              break;
             }
             $851 = $$0261$i$i >>> 31;
             $852 = (((($$0262$i$i)) + 16|0) + ($851<<2)|0);
             $853 = $$0261$i$i << 1;
             $854 = HEAP32[$852>>2]|0;
             $855 = ($854|0)==(0|0);
             if ($855) {
              label = 206;
              break;
             } else {
              $$0261$i$i = $853;$$0262$i$i = $854;
             }
            }
            if ((label|0) == 206) {
             HEAP32[$852>>2] = $701;
             $856 = ((($701)) + 24|0);
             HEAP32[$856>>2] = $$0262$i$i;
             $857 = ((($701)) + 12|0);
             HEAP32[$857>>2] = $701;
             $858 = ((($701)) + 8|0);
             HEAP32[$858>>2] = $701;
             break;
            }
            else if ((label|0) == 207) {
             $859 = ((($$0262$i$i)) + 8|0);
             $860 = HEAP32[$859>>2]|0;
             $861 = ((($860)) + 12|0);
             HEAP32[$861>>2] = $701;
             HEAP32[$859>>2] = $701;
             $862 = ((($701)) + 8|0);
             HEAP32[$862>>2] = $860;
             $863 = ((($701)) + 12|0);
             HEAP32[$863>>2] = $$0262$i$i;
             $864 = ((($701)) + 24|0);
             HEAP32[$864>>2] = 0;
             break;
            }
           }
          } while(0);
          $989 = ((($689)) + 8|0);
          $$2 = $989;
          break L151;
         } else {
          $$0$i$i$i = (7104);
         }
        }
        while(1) {
         $865 = HEAP32[$$0$i$i$i>>2]|0;
         $866 = ($865>>>0)>($615>>>0);
         if (!($866)) {
          $867 = ((($$0$i$i$i)) + 4|0);
          $868 = HEAP32[$867>>2]|0;
          $869 = (($865) + ($868)|0);
          $870 = ($869>>>0)>($615>>>0);
          if ($870) {
           break;
          }
         }
         $871 = ((($$0$i$i$i)) + 8|0);
         $872 = HEAP32[$871>>2]|0;
         $$0$i$i$i = $872;
        }
        $873 = ((($869)) + -47|0);
        $874 = ((($873)) + 8|0);
        $875 = $874;
        $876 = $875 & 7;
        $877 = ($876|0)==(0);
        $878 = (0 - ($875))|0;
        $879 = $878 & 7;
        $880 = $877 ? 0 : $879;
        $881 = (($873) + ($880)|0);
        $882 = ((($615)) + 16|0);
        $883 = ($881>>>0)<($882>>>0);
        $884 = $883 ? $615 : $881;
        $885 = ((($884)) + 8|0);
        $886 = ((($884)) + 24|0);
        $887 = (($$7239$i) + -40)|0;
        $888 = ((($$7$i)) + 8|0);
        $889 = $888;
        $890 = $889 & 7;
        $891 = ($890|0)==(0);
        $892 = (0 - ($889))|0;
        $893 = $892 & 7;
        $894 = $891 ? 0 : $893;
        $895 = (($$7$i) + ($894)|0);
        $896 = (($887) - ($894))|0;
        HEAP32[(6652)>>2] = $895;
        HEAP32[(6640)>>2] = $896;
        $897 = $896 | 1;
        $898 = ((($895)) + 4|0);
        HEAP32[$898>>2] = $897;
        $899 = (($$7$i) + ($887)|0);
        $900 = ((($899)) + 4|0);
        HEAP32[$900>>2] = 40;
        $901 = HEAP32[(6592)>>2]|0;
        HEAP32[(6656)>>2] = $901;
        $902 = ((($884)) + 4|0);
        HEAP32[$902>>2] = 27;
        ;HEAP32[$885>>2]=HEAP32[(7104)>>2]|0;HEAP32[$885+4>>2]=HEAP32[(7104)+4>>2]|0;HEAP32[$885+8>>2]=HEAP32[(7104)+8>>2]|0;HEAP32[$885+12>>2]=HEAP32[(7104)+12>>2]|0;
        HEAP32[(7104)>>2] = $$7$i;
        HEAP32[(7108)>>2] = $$7239$i;
        HEAP32[(7116)>>2] = 0;
        HEAP32[(7112)>>2] = $885;
        $904 = $886;
        while(1) {
         $903 = ((($904)) + 4|0);
         HEAP32[$903>>2] = 7;
         $905 = ((($904)) + 8|0);
         $906 = ($905>>>0)<($869>>>0);
         if ($906) {
          $904 = $903;
         } else {
          break;
         }
        }
        $907 = ($884|0)==($615|0);
        if (!($907)) {
         $908 = $884;
         $909 = $615;
         $910 = (($908) - ($909))|0;
         $911 = HEAP32[$902>>2]|0;
         $912 = $911 & -2;
         HEAP32[$902>>2] = $912;
         $913 = $910 | 1;
         $914 = ((($615)) + 4|0);
         HEAP32[$914>>2] = $913;
         HEAP32[$884>>2] = $910;
         $915 = $910 >>> 3;
         $916 = ($910>>>0)<(256);
         if ($916) {
          $917 = $915 << 1;
          $918 = (6668 + ($917<<2)|0);
          $919 = HEAP32[1657]|0;
          $920 = 1 << $915;
          $921 = $919 & $920;
          $922 = ($921|0)==(0);
          if ($922) {
           $923 = $919 | $920;
           HEAP32[1657] = $923;
           $$pre$i18$i = ((($918)) + 8|0);
           $$0206$i$i = $918;$$pre$phi$i19$iZ2D = $$pre$i18$i;
          } else {
           $924 = ((($918)) + 8|0);
           $925 = HEAP32[$924>>2]|0;
           $$0206$i$i = $925;$$pre$phi$i19$iZ2D = $924;
          }
          HEAP32[$$pre$phi$i19$iZ2D>>2] = $615;
          $926 = ((($$0206$i$i)) + 12|0);
          HEAP32[$926>>2] = $615;
          $927 = ((($615)) + 8|0);
          HEAP32[$927>>2] = $$0206$i$i;
          $928 = ((($615)) + 12|0);
          HEAP32[$928>>2] = $918;
          break;
         }
         $929 = $910 >>> 8;
         $930 = ($929|0)==(0);
         do {
          if ($930) {
           $$0207$i$i = 0;
          } else {
           $931 = ($910>>>0)>(16777215);
           if ($931) {
            $$0207$i$i = 31;
            break;
           }
           $932 = (($929) + 1048320)|0;
           $933 = $932 >>> 16;
           $934 = $933 & 8;
           $935 = $929 << $934;
           $936 = (($935) + 520192)|0;
           $937 = $936 >>> 16;
           $938 = $937 & 4;
           $939 = $938 | $934;
           $940 = $935 << $938;
           $941 = (($940) + 245760)|0;
           $942 = $941 >>> 16;
           $943 = $942 & 2;
           $944 = $939 | $943;
           $945 = (14 - ($944))|0;
           $946 = $940 << $943;
           $947 = $946 >>> 15;
           $948 = (($945) + ($947))|0;
           $949 = $948 << 1;
           $950 = (($948) + 7)|0;
           $951 = $910 >>> $950;
           $952 = $951 & 1;
           $953 = $952 | $949;
           $$0207$i$i = $953;
          }
         } while(0);
         $954 = (6932 + ($$0207$i$i<<2)|0);
         $955 = ((($615)) + 28|0);
         HEAP32[$955>>2] = $$0207$i$i;
         $956 = ((($615)) + 20|0);
         HEAP32[$956>>2] = 0;
         HEAP32[$882>>2] = 0;
         $957 = HEAP32[(6632)>>2]|0;
         $958 = 1 << $$0207$i$i;
         $959 = $957 & $958;
         $960 = ($959|0)==(0);
         if ($960) {
          $961 = $957 | $958;
          HEAP32[(6632)>>2] = $961;
          HEAP32[$954>>2] = $615;
          $962 = ((($615)) + 24|0);
          HEAP32[$962>>2] = $954;
          $963 = ((($615)) + 12|0);
          HEAP32[$963>>2] = $615;
          $964 = ((($615)) + 8|0);
          HEAP32[$964>>2] = $615;
          break;
         }
         $965 = HEAP32[$954>>2]|0;
         $966 = ($$0207$i$i|0)==(31);
         $967 = $$0207$i$i >>> 1;
         $968 = (25 - ($967))|0;
         $969 = $966 ? 0 : $968;
         $970 = $910 << $969;
         $$0201$i$i = $970;$$0202$i$i = $965;
         while(1) {
          $971 = ((($$0202$i$i)) + 4|0);
          $972 = HEAP32[$971>>2]|0;
          $973 = $972 & -8;
          $974 = ($973|0)==($910|0);
          if ($974) {
           label = 228;
           break;
          }
          $975 = $$0201$i$i >>> 31;
          $976 = (((($$0202$i$i)) + 16|0) + ($975<<2)|0);
          $977 = $$0201$i$i << 1;
          $978 = HEAP32[$976>>2]|0;
          $979 = ($978|0)==(0|0);
          if ($979) {
           label = 227;
           break;
          } else {
           $$0201$i$i = $977;$$0202$i$i = $978;
          }
         }
         if ((label|0) == 227) {
          HEAP32[$976>>2] = $615;
          $980 = ((($615)) + 24|0);
          HEAP32[$980>>2] = $$0202$i$i;
          $981 = ((($615)) + 12|0);
          HEAP32[$981>>2] = $615;
          $982 = ((($615)) + 8|0);
          HEAP32[$982>>2] = $615;
          break;
         }
         else if ((label|0) == 228) {
          $983 = ((($$0202$i$i)) + 8|0);
          $984 = HEAP32[$983>>2]|0;
          $985 = ((($984)) + 12|0);
          HEAP32[$985>>2] = $615;
          HEAP32[$983>>2] = $615;
          $986 = ((($615)) + 8|0);
          HEAP32[$986>>2] = $984;
          $987 = ((($615)) + 12|0);
          HEAP32[$987>>2] = $$0202$i$i;
          $988 = ((($615)) + 24|0);
          HEAP32[$988>>2] = 0;
          break;
         }
        }
       }
      } while(0);
      $990 = HEAP32[(6640)>>2]|0;
      $991 = ($990>>>0)>($$0193>>>0);
      if ($991) {
       $992 = (($990) - ($$0193))|0;
       HEAP32[(6640)>>2] = $992;
       $993 = HEAP32[(6652)>>2]|0;
       $994 = (($993) + ($$0193)|0);
       HEAP32[(6652)>>2] = $994;
       $995 = $992 | 1;
       $996 = ((($994)) + 4|0);
       HEAP32[$996>>2] = $995;
       $997 = $$0193 | 3;
       $998 = ((($993)) + 4|0);
       HEAP32[$998>>2] = $997;
       $999 = ((($993)) + 8|0);
       $$2 = $999;
       break;
      }
     }
    }
    $1000 = (___errno_location()|0);
    HEAP32[$1000>>2] = 12;
    $$2 = 0;
   } else {
    $$2 = 0;
   }
  }
 } while(0);
 $1001 = HEAP32[(7072)>>2]|0;
 $1002 = $1001 & 2;
 $1003 = ($1002|0)==(0);
 if ($1003) {
  $$1 = $$2;
  STACKTOP = sp;return ($$1|0);
 }
 (___pthread_mutex_unlock((7076))|0);
 $$1 = $$2;
 STACKTOP = sp;return ($$1|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0195$i = 0, $$0195$in$i = 0, $$0348 = 0, $$0349 = 0, $$0361 = 0, $$0368 = 0, $$1 = 0, $$1347 = 0, $$1352 = 0, $$1355 = 0, $$1363 = 0, $$1367 = 0, $$2 = 0, $$3 = 0, $$3365 = 0, $$pre = 0, $$pre$phiZ2D = 0, $$sink3 = 0, $$sink5 = 0, $1 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $cond373 = 0, $cond374 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = HEAP32[(7072)>>2]|0;
 $4 = $3 & 2;
 $5 = ($4|0)==(0);
 if (!($5)) {
  $6 = (___pthread_mutex_lock((7076))|0);
  $7 = ($6|0)==(0);
  if (!($7)) {
   return;
  }
 }
 $8 = HEAP32[(6644)>>2]|0;
 $9 = ((($0)) + -4|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = $10 & -8;
 $12 = (($2) + ($11)|0);
 $13 = $10 & 1;
 $14 = ($13|0)==(0);
 do {
  if ($14) {
   $15 = HEAP32[$2>>2]|0;
   $16 = $10 & 3;
   $17 = ($16|0)==(0);
   if (!($17)) {
    $18 = (0 - ($15))|0;
    $19 = (($2) + ($18)|0);
    $20 = (($15) + ($11))|0;
    $21 = ($19>>>0)<($8>>>0);
    if (!($21)) {
     $22 = HEAP32[(6648)>>2]|0;
     $23 = ($22|0)==($19|0);
     if ($23) {
      $84 = ((($12)) + 4|0);
      $85 = HEAP32[$84>>2]|0;
      $86 = $85 & 3;
      $87 = ($86|0)==(3);
      if (!($87)) {
       $$1 = $19;$$1347 = $20;$93 = $19;
       label = 30;
       break;
      }
      HEAP32[(6636)>>2] = $20;
      $88 = $85 & -2;
      HEAP32[$84>>2] = $88;
      $89 = $20 | 1;
      $90 = ((($19)) + 4|0);
      HEAP32[$90>>2] = $89;
      $91 = (($19) + ($20)|0);
      HEAP32[$91>>2] = $20;
      break;
     }
     $24 = $15 >>> 3;
     $25 = ($15>>>0)<(256);
     if ($25) {
      $26 = ((($19)) + 8|0);
      $27 = HEAP32[$26>>2]|0;
      $28 = ((($19)) + 12|0);
      $29 = HEAP32[$28>>2]|0;
      $30 = ($29|0)==($27|0);
      if ($30) {
       $31 = 1 << $24;
       $32 = $31 ^ -1;
       $33 = HEAP32[1657]|0;
       $34 = $33 & $32;
       HEAP32[1657] = $34;
       $$1 = $19;$$1347 = $20;$93 = $19;
       label = 30;
       break;
      } else {
       $35 = ((($27)) + 12|0);
       HEAP32[$35>>2] = $29;
       $36 = ((($29)) + 8|0);
       HEAP32[$36>>2] = $27;
       $$1 = $19;$$1347 = $20;$93 = $19;
       label = 30;
       break;
      }
     }
     $37 = ((($19)) + 24|0);
     $38 = HEAP32[$37>>2]|0;
     $39 = ((($19)) + 12|0);
     $40 = HEAP32[$39>>2]|0;
     $41 = ($40|0)==($19|0);
     do {
      if ($41) {
       $46 = ((($19)) + 16|0);
       $47 = ((($46)) + 4|0);
       $48 = HEAP32[$47>>2]|0;
       $49 = ($48|0)==(0|0);
       if ($49) {
        $50 = HEAP32[$46>>2]|0;
        $51 = ($50|0)==(0|0);
        if ($51) {
         $$3 = 0;
         break;
        } else {
         $$1352 = $50;$$1355 = $46;
        }
       } else {
        $$1352 = $48;$$1355 = $47;
       }
       while(1) {
        $52 = ((($$1352)) + 20|0);
        $53 = HEAP32[$52>>2]|0;
        $54 = ($53|0)==(0|0);
        if (!($54)) {
         $$1352 = $53;$$1355 = $52;
         continue;
        }
        $55 = ((($$1352)) + 16|0);
        $56 = HEAP32[$55>>2]|0;
        $57 = ($56|0)==(0|0);
        if ($57) {
         break;
        } else {
         $$1352 = $56;$$1355 = $55;
        }
       }
       HEAP32[$$1355>>2] = 0;
       $$3 = $$1352;
      } else {
       $42 = ((($19)) + 8|0);
       $43 = HEAP32[$42>>2]|0;
       $44 = ((($43)) + 12|0);
       HEAP32[$44>>2] = $40;
       $45 = ((($40)) + 8|0);
       HEAP32[$45>>2] = $43;
       $$3 = $40;
      }
     } while(0);
     $58 = ($38|0)==(0|0);
     if ($58) {
      $$1 = $19;$$1347 = $20;$93 = $19;
      label = 30;
     } else {
      $59 = ((($19)) + 28|0);
      $60 = HEAP32[$59>>2]|0;
      $61 = (6932 + ($60<<2)|0);
      $62 = HEAP32[$61>>2]|0;
      $63 = ($62|0)==($19|0);
      if ($63) {
       HEAP32[$61>>2] = $$3;
       $cond373 = ($$3|0)==(0|0);
       if ($cond373) {
        $64 = 1 << $60;
        $65 = $64 ^ -1;
        $66 = HEAP32[(6632)>>2]|0;
        $67 = $66 & $65;
        HEAP32[(6632)>>2] = $67;
        $$1 = $19;$$1347 = $20;$93 = $19;
        label = 30;
        break;
       }
      } else {
       $68 = ((($38)) + 16|0);
       $69 = HEAP32[$68>>2]|0;
       $70 = ($69|0)!=($19|0);
       $$sink3 = $70&1;
       $71 = (((($38)) + 16|0) + ($$sink3<<2)|0);
       HEAP32[$71>>2] = $$3;
       $72 = ($$3|0)==(0|0);
       if ($72) {
        $$1 = $19;$$1347 = $20;$93 = $19;
        label = 30;
        break;
       }
      }
      $73 = ((($$3)) + 24|0);
      HEAP32[$73>>2] = $38;
      $74 = ((($19)) + 16|0);
      $75 = HEAP32[$74>>2]|0;
      $76 = ($75|0)==(0|0);
      if (!($76)) {
       $77 = ((($$3)) + 16|0);
       HEAP32[$77>>2] = $75;
       $78 = ((($75)) + 24|0);
       HEAP32[$78>>2] = $$3;
      }
      $79 = ((($74)) + 4|0);
      $80 = HEAP32[$79>>2]|0;
      $81 = ($80|0)==(0|0);
      if ($81) {
       $$1 = $19;$$1347 = $20;$93 = $19;
       label = 30;
      } else {
       $82 = ((($$3)) + 20|0);
       HEAP32[$82>>2] = $80;
       $83 = ((($80)) + 24|0);
       HEAP32[$83>>2] = $$3;
       $$1 = $19;$$1347 = $20;$93 = $19;
       label = 30;
      }
     }
    }
   }
  } else {
   $$1 = $2;$$1347 = $11;$93 = $2;
   label = 30;
  }
 } while(0);
 do {
  if ((label|0) == 30) {
   $92 = ($93>>>0)<($12>>>0);
   if ($92) {
    $94 = ((($12)) + 4|0);
    $95 = HEAP32[$94>>2]|0;
    $96 = $95 & 1;
    $97 = ($96|0)==(0);
    if (!($97)) {
     $98 = $95 & 2;
     $99 = ($98|0)==(0);
     if ($99) {
      $100 = HEAP32[(6652)>>2]|0;
      $101 = ($100|0)==($12|0);
      if ($101) {
       $102 = HEAP32[(6640)>>2]|0;
       $103 = (($102) + ($$1347))|0;
       HEAP32[(6640)>>2] = $103;
       HEAP32[(6652)>>2] = $$1;
       $104 = $103 | 1;
       $105 = ((($$1)) + 4|0);
       HEAP32[$105>>2] = $104;
       $106 = HEAP32[(6648)>>2]|0;
       $107 = ($$1|0)==($106|0);
       if (!($107)) {
        break;
       }
       HEAP32[(6648)>>2] = 0;
       HEAP32[(6636)>>2] = 0;
       break;
      }
      $108 = HEAP32[(6648)>>2]|0;
      $109 = ($108|0)==($12|0);
      if ($109) {
       $110 = HEAP32[(6636)>>2]|0;
       $111 = (($110) + ($$1347))|0;
       HEAP32[(6636)>>2] = $111;
       HEAP32[(6648)>>2] = $93;
       $112 = $111 | 1;
       $113 = ((($$1)) + 4|0);
       HEAP32[$113>>2] = $112;
       $114 = (($93) + ($111)|0);
       HEAP32[$114>>2] = $111;
       break;
      }
      $115 = $95 & -8;
      $116 = (($115) + ($$1347))|0;
      $117 = $95 >>> 3;
      $118 = ($95>>>0)<(256);
      do {
       if ($118) {
        $119 = ((($12)) + 8|0);
        $120 = HEAP32[$119>>2]|0;
        $121 = ((($12)) + 12|0);
        $122 = HEAP32[$121>>2]|0;
        $123 = ($122|0)==($120|0);
        if ($123) {
         $124 = 1 << $117;
         $125 = $124 ^ -1;
         $126 = HEAP32[1657]|0;
         $127 = $126 & $125;
         HEAP32[1657] = $127;
         break;
        } else {
         $128 = ((($120)) + 12|0);
         HEAP32[$128>>2] = $122;
         $129 = ((($122)) + 8|0);
         HEAP32[$129>>2] = $120;
         break;
        }
       } else {
        $130 = ((($12)) + 24|0);
        $131 = HEAP32[$130>>2]|0;
        $132 = ((($12)) + 12|0);
        $133 = HEAP32[$132>>2]|0;
        $134 = ($133|0)==($12|0);
        do {
         if ($134) {
          $139 = ((($12)) + 16|0);
          $140 = ((($139)) + 4|0);
          $141 = HEAP32[$140>>2]|0;
          $142 = ($141|0)==(0|0);
          if ($142) {
           $143 = HEAP32[$139>>2]|0;
           $144 = ($143|0)==(0|0);
           if ($144) {
            $$3365 = 0;
            break;
           } else {
            $$1363 = $143;$$1367 = $139;
           }
          } else {
           $$1363 = $141;$$1367 = $140;
          }
          while(1) {
           $145 = ((($$1363)) + 20|0);
           $146 = HEAP32[$145>>2]|0;
           $147 = ($146|0)==(0|0);
           if (!($147)) {
            $$1363 = $146;$$1367 = $145;
            continue;
           }
           $148 = ((($$1363)) + 16|0);
           $149 = HEAP32[$148>>2]|0;
           $150 = ($149|0)==(0|0);
           if ($150) {
            break;
           } else {
            $$1363 = $149;$$1367 = $148;
           }
          }
          HEAP32[$$1367>>2] = 0;
          $$3365 = $$1363;
         } else {
          $135 = ((($12)) + 8|0);
          $136 = HEAP32[$135>>2]|0;
          $137 = ((($136)) + 12|0);
          HEAP32[$137>>2] = $133;
          $138 = ((($133)) + 8|0);
          HEAP32[$138>>2] = $136;
          $$3365 = $133;
         }
        } while(0);
        $151 = ($131|0)==(0|0);
        if (!($151)) {
         $152 = ((($12)) + 28|0);
         $153 = HEAP32[$152>>2]|0;
         $154 = (6932 + ($153<<2)|0);
         $155 = HEAP32[$154>>2]|0;
         $156 = ($155|0)==($12|0);
         if ($156) {
          HEAP32[$154>>2] = $$3365;
          $cond374 = ($$3365|0)==(0|0);
          if ($cond374) {
           $157 = 1 << $153;
           $158 = $157 ^ -1;
           $159 = HEAP32[(6632)>>2]|0;
           $160 = $159 & $158;
           HEAP32[(6632)>>2] = $160;
           break;
          }
         } else {
          $161 = ((($131)) + 16|0);
          $162 = HEAP32[$161>>2]|0;
          $163 = ($162|0)!=($12|0);
          $$sink5 = $163&1;
          $164 = (((($131)) + 16|0) + ($$sink5<<2)|0);
          HEAP32[$164>>2] = $$3365;
          $165 = ($$3365|0)==(0|0);
          if ($165) {
           break;
          }
         }
         $166 = ((($$3365)) + 24|0);
         HEAP32[$166>>2] = $131;
         $167 = ((($12)) + 16|0);
         $168 = HEAP32[$167>>2]|0;
         $169 = ($168|0)==(0|0);
         if (!($169)) {
          $170 = ((($$3365)) + 16|0);
          HEAP32[$170>>2] = $168;
          $171 = ((($168)) + 24|0);
          HEAP32[$171>>2] = $$3365;
         }
         $172 = ((($167)) + 4|0);
         $173 = HEAP32[$172>>2]|0;
         $174 = ($173|0)==(0|0);
         if (!($174)) {
          $175 = ((($$3365)) + 20|0);
          HEAP32[$175>>2] = $173;
          $176 = ((($173)) + 24|0);
          HEAP32[$176>>2] = $$3365;
         }
        }
       }
      } while(0);
      $177 = $116 | 1;
      $178 = ((($$1)) + 4|0);
      HEAP32[$178>>2] = $177;
      $179 = (($93) + ($116)|0);
      HEAP32[$179>>2] = $116;
      $180 = HEAP32[(6648)>>2]|0;
      $181 = ($$1|0)==($180|0);
      if ($181) {
       HEAP32[(6636)>>2] = $116;
       break;
      } else {
       $$2 = $116;
      }
     } else {
      $182 = $95 & -2;
      HEAP32[$94>>2] = $182;
      $183 = $$1347 | 1;
      $184 = ((($$1)) + 4|0);
      HEAP32[$184>>2] = $183;
      $185 = (($93) + ($$1347)|0);
      HEAP32[$185>>2] = $$1347;
      $$2 = $$1347;
     }
     $186 = $$2 >>> 3;
     $187 = ($$2>>>0)<(256);
     if ($187) {
      $188 = $186 << 1;
      $189 = (6668 + ($188<<2)|0);
      $190 = HEAP32[1657]|0;
      $191 = 1 << $186;
      $192 = $190 & $191;
      $193 = ($192|0)==(0);
      if ($193) {
       $194 = $190 | $191;
       HEAP32[1657] = $194;
       $$pre = ((($189)) + 8|0);
       $$0368 = $189;$$pre$phiZ2D = $$pre;
      } else {
       $195 = ((($189)) + 8|0);
       $196 = HEAP32[$195>>2]|0;
       $$0368 = $196;$$pre$phiZ2D = $195;
      }
      HEAP32[$$pre$phiZ2D>>2] = $$1;
      $197 = ((($$0368)) + 12|0);
      HEAP32[$197>>2] = $$1;
      $198 = ((($$1)) + 8|0);
      HEAP32[$198>>2] = $$0368;
      $199 = ((($$1)) + 12|0);
      HEAP32[$199>>2] = $189;
      break;
     }
     $200 = $$2 >>> 8;
     $201 = ($200|0)==(0);
     if ($201) {
      $$0361 = 0;
     } else {
      $202 = ($$2>>>0)>(16777215);
      if ($202) {
       $$0361 = 31;
      } else {
       $203 = (($200) + 1048320)|0;
       $204 = $203 >>> 16;
       $205 = $204 & 8;
       $206 = $200 << $205;
       $207 = (($206) + 520192)|0;
       $208 = $207 >>> 16;
       $209 = $208 & 4;
       $210 = $209 | $205;
       $211 = $206 << $209;
       $212 = (($211) + 245760)|0;
       $213 = $212 >>> 16;
       $214 = $213 & 2;
       $215 = $210 | $214;
       $216 = (14 - ($215))|0;
       $217 = $211 << $214;
       $218 = $217 >>> 15;
       $219 = (($216) + ($218))|0;
       $220 = $219 << 1;
       $221 = (($219) + 7)|0;
       $222 = $$2 >>> $221;
       $223 = $222 & 1;
       $224 = $223 | $220;
       $$0361 = $224;
      }
     }
     $225 = (6932 + ($$0361<<2)|0);
     $226 = ((($$1)) + 28|0);
     HEAP32[$226>>2] = $$0361;
     $227 = ((($$1)) + 16|0);
     $228 = ((($$1)) + 20|0);
     HEAP32[$228>>2] = 0;
     HEAP32[$227>>2] = 0;
     $229 = HEAP32[(6632)>>2]|0;
     $230 = 1 << $$0361;
     $231 = $229 & $230;
     $232 = ($231|0)==(0);
     do {
      if ($232) {
       $233 = $229 | $230;
       HEAP32[(6632)>>2] = $233;
       HEAP32[$225>>2] = $$1;
       $234 = ((($$1)) + 24|0);
       HEAP32[$234>>2] = $225;
       $235 = ((($$1)) + 12|0);
       HEAP32[$235>>2] = $$1;
       $236 = ((($$1)) + 8|0);
       HEAP32[$236>>2] = $$1;
      } else {
       $237 = HEAP32[$225>>2]|0;
       $238 = ($$0361|0)==(31);
       $239 = $$0361 >>> 1;
       $240 = (25 - ($239))|0;
       $241 = $238 ? 0 : $240;
       $242 = $$2 << $241;
       $$0348 = $242;$$0349 = $237;
       while(1) {
        $243 = ((($$0349)) + 4|0);
        $244 = HEAP32[$243>>2]|0;
        $245 = $244 & -8;
        $246 = ($245|0)==($$2|0);
        if ($246) {
         label = 75;
         break;
        }
        $247 = $$0348 >>> 31;
        $248 = (((($$0349)) + 16|0) + ($247<<2)|0);
        $249 = $$0348 << 1;
        $250 = HEAP32[$248>>2]|0;
        $251 = ($250|0)==(0|0);
        if ($251) {
         label = 74;
         break;
        } else {
         $$0348 = $249;$$0349 = $250;
        }
       }
       if ((label|0) == 74) {
        HEAP32[$248>>2] = $$1;
        $252 = ((($$1)) + 24|0);
        HEAP32[$252>>2] = $$0349;
        $253 = ((($$1)) + 12|0);
        HEAP32[$253>>2] = $$1;
        $254 = ((($$1)) + 8|0);
        HEAP32[$254>>2] = $$1;
        break;
       }
       else if ((label|0) == 75) {
        $255 = ((($$0349)) + 8|0);
        $256 = HEAP32[$255>>2]|0;
        $257 = ((($256)) + 12|0);
        HEAP32[$257>>2] = $$1;
        HEAP32[$255>>2] = $$1;
        $258 = ((($$1)) + 8|0);
        HEAP32[$258>>2] = $256;
        $259 = ((($$1)) + 12|0);
        HEAP32[$259>>2] = $$0349;
        $260 = ((($$1)) + 24|0);
        HEAP32[$260>>2] = 0;
        break;
       }
      }
     } while(0);
     $261 = HEAP32[(6660)>>2]|0;
     $262 = (($261) + -1)|0;
     HEAP32[(6660)>>2] = $262;
     $263 = ($262|0)==(0);
     if ($263) {
      $$0195$in$i = (7112);
      while(1) {
       $$0195$i = HEAP32[$$0195$in$i>>2]|0;
       $264 = ($$0195$i|0)==(0|0);
       $265 = ((($$0195$i)) + 8|0);
       if ($264) {
        break;
       } else {
        $$0195$in$i = $265;
       }
      }
      HEAP32[(6660)>>2] = -1;
     }
    }
   }
  }
 } while(0);
 $266 = HEAP32[(7072)>>2]|0;
 $267 = $266 & 2;
 $268 = ($267|0)==(0);
 if ($268) {
  return;
 }
 (___pthread_mutex_unlock((7076))|0);
 return;
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (7128|0);
}
function ___emscripten_pthread_data_constructor() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 $1 = ((($0)) + 188|0);
 HEAP32[$1>>2] = (7168);
 return;
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = (_dummy_732($2)|0);
 HEAP32[$vararg_buffer>>2] = $3;
 $4 = (___syscall6(6,($vararg_buffer|0))|0);
 $5 = (___syscall_ret($4)|0);
 STACKTOP = sp;return ($5|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$04756 = 0, $$04855 = 0, $$04954 = 0, $$051 = 0, $$1 = 0, $$150 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0;
 var $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = HEAP32[$4>>2]|0;
 HEAP32[$3>>2] = $5;
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($5))|0;
 HEAP32[$6>>2] = $9;
 $10 = ((($3)) + 8|0);
 HEAP32[$10>>2] = $1;
 $11 = ((($3)) + 12|0);
 HEAP32[$11>>2] = $2;
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = $3;
 HEAP32[$vararg_buffer>>2] = $14;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $15;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = 2;
 $16 = (___syscall146(146,($vararg_buffer|0))|0);
 $17 = (___syscall_ret($16)|0);
 $18 = ($12|0)==($17|0);
 L1: do {
  if ($18) {
   label = 3;
  } else {
   $$04756 = 2;$$04855 = $12;$$04954 = $3;$27 = $17;
   while(1) {
    $26 = ($27|0)<(0);
    if ($26) {
     break;
    }
    $35 = (($$04855) - ($27))|0;
    $36 = ((($$04954)) + 4|0);
    $37 = HEAP32[$36>>2]|0;
    $38 = ($27>>>0)>($37>>>0);
    $39 = ((($$04954)) + 8|0);
    $$150 = $38 ? $39 : $$04954;
    $40 = $38 << 31 >> 31;
    $$1 = (($$04756) + ($40))|0;
    $41 = $38 ? $37 : 0;
    $$0 = (($27) - ($41))|0;
    $42 = HEAP32[$$150>>2]|0;
    $43 = (($42) + ($$0)|0);
    HEAP32[$$150>>2] = $43;
    $44 = ((($$150)) + 4|0);
    $45 = HEAP32[$44>>2]|0;
    $46 = (($45) - ($$0))|0;
    HEAP32[$44>>2] = $46;
    $47 = HEAP32[$13>>2]|0;
    $48 = $$150;
    HEAP32[$vararg_buffer3>>2] = $47;
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    HEAP32[$vararg_ptr6>>2] = $48;
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    HEAP32[$vararg_ptr7>>2] = $$1;
    $49 = (___syscall146(146,($vararg_buffer3|0))|0);
    $50 = (___syscall_ret($49)|0);
    $51 = ($35|0)==($50|0);
    if ($51) {
     label = 3;
     break L1;
    } else {
     $$04756 = $$1;$$04855 = $35;$$04954 = $$150;$27 = $50;
    }
   }
   $28 = ((($0)) + 16|0);
   HEAP32[$28>>2] = 0;
   HEAP32[$4>>2] = 0;
   HEAP32[$7>>2] = 0;
   $29 = HEAP32[$0>>2]|0;
   $30 = $29 | 32;
   HEAP32[$0>>2] = $30;
   $31 = ($$04756|0)==(2);
   if ($31) {
    $$051 = 0;
   } else {
    $32 = ((($$04954)) + 4|0);
    $33 = HEAP32[$32>>2]|0;
    $34 = (($2) - ($33))|0;
    $$051 = $34;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $19 = ((($0)) + 44|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ((($0)) + 48|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + ($22)|0);
  $24 = ((($0)) + 16|0);
  HEAP32[$24>>2] = $23;
  $25 = $20;
  HEAP32[$4>>2] = $25;
  HEAP32[$7>>2] = $25;
  $$051 = $2;
 }
 STACKTOP = sp;return ($$051|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $3;
 HEAP32[$vararg_buffer>>2] = $5;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $1;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $6;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $2;
 $7 = (___syscall140(140,($vararg_buffer|0))|0);
 $8 = (___syscall_ret($7)|0);
 $9 = ($8|0)<(0);
 if ($9) {
  HEAP32[$3>>2] = -1;
  $10 = -1;
 } else {
  $$pre = HEAP32[$3>>2]|0;
  $10 = $$pre;
 }
 STACKTOP = sp;return ($10|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  HEAP32[$3>>2] = $2;
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___pthread_self_108()|0);
 $1 = ((($0)) + 64|0);
 return ($1|0);
}
function ___pthread_self_108() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function _dummy_732($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($0|0);
}
function ___stdout_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 16|0;
 $4 = ((($0)) + 36|0);
 HEAP32[$4>>2] = 6;
 $5 = HEAP32[$0>>2]|0;
 $6 = $5 & 64;
 $7 = ($6|0)==(0);
 if ($7) {
  $8 = ((($0)) + 60|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = $3;
  HEAP32[$vararg_buffer>>2] = $9;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21523;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $10;
  $11 = (___syscall54(54,($vararg_buffer|0))|0);
  $12 = ($11|0)==(0);
  if (!($12)) {
   $13 = ((($0)) + 75|0);
   HEAP8[$13>>0] = -1;
  }
 }
 $14 = (___stdio_write($0,$1,$2)|0);
 STACKTOP = sp;return ($14|0);
}
function _strcmp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$011 = 0, $$0710 = 0, $$lcssa = 0, $$lcssa8 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $2 = HEAP8[$0>>0]|0;
 $3 = HEAP8[$1>>0]|0;
 $4 = ($2<<24>>24)!=($3<<24>>24);
 $5 = ($2<<24>>24)==(0);
 $or$cond9 = $5 | $4;
 if ($or$cond9) {
  $$lcssa = $3;$$lcssa8 = $2;
 } else {
  $$011 = $1;$$0710 = $0;
  while(1) {
   $6 = ((($$0710)) + 1|0);
   $7 = ((($$011)) + 1|0);
   $8 = HEAP8[$6>>0]|0;
   $9 = HEAP8[$7>>0]|0;
   $10 = ($8<<24>>24)!=($9<<24>>24);
   $11 = ($8<<24>>24)==(0);
   $or$cond = $11 | $10;
   if ($or$cond) {
    $$lcssa = $9;$$lcssa8 = $8;
    break;
   } else {
    $$011 = $7;$$0710 = $6;
   }
  }
 }
 $12 = $$lcssa8&255;
 $13 = $$lcssa&255;
 $14 = (($12) - ($13))|0;
 return ($14|0);
}
function _vsnprintf($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$015 = 0, $$0 = 0, $$014 = 0, $$015 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $4 = sp + 124|0;
 $5 = sp;
 dest=$5; src=3104; stop=dest+124|0; do { HEAP32[dest>>2]=HEAP32[src>>2]|0; dest=dest+4|0; src=src+4|0; } while ((dest|0) < (stop|0));
 $6 = (($1) + -1)|0;
 $7 = ($6>>>0)>(2147483646);
 if ($7) {
  $8 = ($1|0)==(0);
  if ($8) {
   $$014 = $4;$$015 = 1;
   label = 4;
  } else {
   $9 = (___errno_location()|0);
   HEAP32[$9>>2] = 75;
   $$0 = -1;
  }
 } else {
  $$014 = $0;$$015 = $1;
  label = 4;
 }
 if ((label|0) == 4) {
  $10 = $$014;
  $11 = (-2 - ($10))|0;
  $12 = ($$015>>>0)>($11>>>0);
  $$$015 = $12 ? $11 : $$015;
  $13 = ((($5)) + 48|0);
  HEAP32[$13>>2] = $$$015;
  $14 = ((($5)) + 20|0);
  HEAP32[$14>>2] = $$014;
  $15 = ((($5)) + 44|0);
  HEAP32[$15>>2] = $$014;
  $16 = (($$014) + ($$$015)|0);
  $17 = ((($5)) + 16|0);
  HEAP32[$17>>2] = $16;
  $18 = ((($5)) + 28|0);
  HEAP32[$18>>2] = $16;
  $19 = (_vfprintf($5,$2,$3)|0);
  $20 = ($$$015|0)==(0);
  if ($20) {
   $$0 = $19;
  } else {
   $21 = HEAP32[$14>>2]|0;
   $22 = HEAP32[$17>>2]|0;
   $23 = ($21|0)==($22|0);
   $24 = $23 << 31 >> 31;
   $25 = (($21) + ($24)|0);
   HEAP8[$25>>0] = 0;
   $$0 = $19;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(224|0);
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 dest=$4; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $vacopy_currentptr = HEAP32[$2>>2]|0;
 HEAP32[$3>>2] = $vacopy_currentptr;
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = (Atomics_load(HEAP32,$9>>2)|0);
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $40 = $12;
  } else {
   $40 = 0;
  }
  $13 = HEAP32[$0>>2]|0;
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = HEAP8[$15>>0]|0;
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   HEAP32[$0>>2] = $18;
  }
  $19 = ((($0)) + 48|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = HEAP32[$23>>2]|0;
   HEAP32[$23>>2] = $6;
   $25 = ((($0)) + 28|0);
   HEAP32[$25>>2] = $6;
   $26 = ((($0)) + 20|0);
   HEAP32[$26>>2] = $6;
   HEAP32[$19>>2] = 80;
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   HEAP32[$28>>2] = $27;
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = HEAP32[$31>>2]|0;
    (FUNCTION_TABLE_iiii[$32 & 7]($0,0,0)|0);
    $33 = HEAP32[$26>>2]|0;
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    HEAP32[$23>>2] = $24;
    HEAP32[$19>>2] = 0;
    HEAP32[$28>>2] = 0;
    HEAP32[$25>>2] = 0;
    HEAP32[$26>>2] = 0;
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = HEAP32[$0>>2]|0;
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  HEAP32[$0>>2] = $38;
  $39 = ($40|0)==(0);
  if (!($39)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$4266 = 0, $$$5 = 0, $$0 = 0, $$0228 = 0, $$0228$ = 0, $$0229320 = 0, $$0232 = 0, $$0235 = 0, $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa357 = 0, $$0240319 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0;
 var $$0249307 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$$0254$ = 0, $$0259 = 0, $$0262$lcssa = 0, $$0262313 = 0, $$0269 = 0, $$0269$phi = 0, $$1 = 0, $$1230331 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241330 = 0, $$1244318 = 0, $$1248 = 0, $$1250 = 0, $$1255 = 0;
 var $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$2 = 0, $$2234 = 0, $$2239 = 0, $$2242$lcssa = 0, $$2242306 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2256$$$2256 = 0, $$2261 = 0, $$2271 = 0, $$283$ = 0, $$290 = 0, $$291 = 0, $$3257 = 0;
 var $$3265 = 0, $$3272 = 0, $$3304 = 0, $$376 = 0, $$4258355 = 0, $$4266 = 0, $$5 = 0, $$6268 = 0, $$lcssa295 = 0, $$pre = 0, $$pre346 = 0, $$pre347 = 0, $$pre347$pre = 0, $$pre349 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
 var $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0;
 var $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0;
 var $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0;
 var $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0;
 var $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0;
 var $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0;
 var $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0;
 var $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0;
 var $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0;
 var $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0;
 var $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0.0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0;
 var $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $brmerge = 0, $brmerge312 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0;
 var $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $isdigit = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $or$cond = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0, $storemerge = 0, $storemerge278 = 0, $trunc = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $5 = sp + 16|0;
 $6 = sp;
 $7 = sp + 24|0;
 $8 = sp + 8|0;
 $9 = sp + 20|0;
 HEAP32[$5>>2] = $1;
 $10 = ($0|0)!=(0|0);
 $11 = ((($7)) + 40|0);
 $12 = $11;
 $13 = ((($7)) + 39|0);
 $14 = ((($8)) + 4|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$21 = $1;
 L1: while(1) {
  $15 = ($$0247|0)>(-1);
  do {
   if ($15) {
    $16 = (2147483647 - ($$0247))|0;
    $17 = ($$0243|0)>($16|0);
    if ($17) {
     $18 = (___errno_location()|0);
     HEAP32[$18>>2] = 75;
     $$1248 = -1;
     break;
    } else {
     $19 = (($$0243) + ($$0247))|0;
     $$1248 = $19;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $20 = HEAP8[$21>>0]|0;
  $22 = ($20<<24>>24)==(0);
  if ($22) {
   label = 86;
   break;
  } else {
   $23 = $20;$25 = $21;
  }
  L9: while(1) {
   switch ($23<<24>>24) {
   case 37:  {
    $$0249307 = $25;$27 = $25;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $25;$39 = $25;
    break L9;
    break;
   }
   default: {
   }
   }
   $24 = ((($25)) + 1|0);
   HEAP32[$5>>2] = $24;
   $$pre = HEAP8[$24>>0]|0;
   $23 = $$pre;$25 = $24;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $26 = ((($27)) + 1|0);
     $28 = HEAP8[$26>>0]|0;
     $29 = ($28<<24>>24)==(37);
     if (!($29)) {
      $$0249$lcssa = $$0249307;$39 = $27;
      break L12;
     }
     $30 = ((($$0249307)) + 1|0);
     $31 = ((($27)) + 2|0);
     HEAP32[$5>>2] = $31;
     $32 = HEAP8[$31>>0]|0;
     $33 = ($32<<24>>24)==(37);
     if ($33) {
      $$0249307 = $30;$27 = $31;
      label = 9;
     } else {
      $$0249$lcssa = $30;$39 = $31;
      break;
     }
    }
   }
  } while(0);
  $34 = $$0249$lcssa;
  $35 = $21;
  $36 = (($34) - ($35))|0;
  if ($10) {
   _out($0,$21,$36);
  }
  $37 = ($36|0)==(0);
  if (!($37)) {
   $$0269$phi = $$0269;$$0243 = $36;$$0247 = $$1248;$21 = $39;$$0269 = $$0269$phi;
   continue;
  }
  $38 = ((($39)) + 1|0);
  $40 = HEAP8[$38>>0]|0;
  $41 = $40 << 24 >> 24;
  $isdigittmp = (($41) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $42 = ((($39)) + 2|0);
   $43 = HEAP8[$42>>0]|0;
   $44 = ($43<<24>>24)==(36);
   $45 = ((($39)) + 3|0);
   $$376 = $44 ? $45 : $38;
   $$$0269 = $44 ? 1 : $$0269;
   $isdigittmp$ = $44 ? $isdigittmp : -1;
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$storemerge = $$376;
  } else {
   $$0253 = -1;$$1270 = $$0269;$storemerge = $38;
  }
  HEAP32[$5>>2] = $storemerge;
  $46 = HEAP8[$storemerge>>0]|0;
  $47 = $46 << 24 >> 24;
  $48 = (($47) + -32)|0;
  $49 = ($48>>>0)>(31);
  $50 = 1 << $48;
  $51 = $50 & 75913;
  $52 = ($51|0)==(0);
  $brmerge312 = $49 | $52;
  if ($brmerge312) {
   $$0262$lcssa = 0;$$lcssa295 = $46;$69 = $storemerge;
  } else {
   $$0262313 = 0;$54 = $46;$59 = $storemerge;
   while(1) {
    $53 = $54 << 24 >> 24;
    $55 = (($53) + -32)|0;
    $56 = 1 << $55;
    $57 = $56 | $$0262313;
    $58 = ((($59)) + 1|0);
    HEAP32[$5>>2] = $58;
    $60 = HEAP8[$58>>0]|0;
    $61 = $60 << 24 >> 24;
    $62 = (($61) + -32)|0;
    $63 = ($62>>>0)>(31);
    $64 = 1 << $62;
    $65 = $64 & 75913;
    $66 = ($65|0)==(0);
    $brmerge = $63 | $66;
    if ($brmerge) {
     $$0262$lcssa = $57;$$lcssa295 = $60;$69 = $58;
     break;
    } else {
     $$0262313 = $57;$54 = $60;$59 = $58;
    }
   }
  }
  $67 = ($$lcssa295<<24>>24)==(42);
  if ($67) {
   $68 = ((($69)) + 1|0);
   $70 = HEAP8[$68>>0]|0;
   $71 = $70 << 24 >> 24;
   $isdigittmp276 = (($71) + -48)|0;
   $isdigit277 = ($isdigittmp276>>>0)<(10);
   if ($isdigit277) {
    $72 = ((($69)) + 2|0);
    $73 = HEAP8[$72>>0]|0;
    $74 = ($73<<24>>24)==(36);
    if ($74) {
     $75 = (($4) + ($isdigittmp276<<2)|0);
     HEAP32[$75>>2] = 10;
     $76 = HEAP8[$68>>0]|0;
     $77 = $76 << 24 >> 24;
     $78 = (($77) + -48)|0;
     $79 = (($3) + ($78<<3)|0);
     $80 = $79;
     $81 = $80;
     $82 = HEAP32[$81>>2]|0;
     $83 = (($80) + 4)|0;
     $84 = $83;
     $85 = HEAP32[$84>>2]|0;
     $86 = ((($69)) + 3|0);
     $$0259 = $82;$$2271 = 1;$storemerge278 = $86;
    } else {
     label = 22;
    }
   } else {
    label = 22;
   }
   if ((label|0) == 22) {
    label = 0;
    $87 = ($$1270|0)==(0);
    if (!($87)) {
     $$0 = -1;
     break;
    }
    if ($10) {
     $arglist_current = HEAP32[$2>>2]|0;
     $88 = $arglist_current;
     $89 = ((0) + 4|0);
     $expanded4 = $89;
     $expanded = (($expanded4) - 1)|0;
     $90 = (($88) + ($expanded))|0;
     $91 = ((0) + 4|0);
     $expanded8 = $91;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $92 = $90 & $expanded6;
     $93 = $92;
     $94 = HEAP32[$93>>2]|0;
     $arglist_next = ((($93)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     $$0259 = $94;$$2271 = 0;$storemerge278 = $68;
    } else {
     $$0259 = 0;$$2271 = 0;$storemerge278 = $68;
    }
   }
   HEAP32[$5>>2] = $storemerge278;
   $95 = ($$0259|0)<(0);
   $96 = $$0262$lcssa | 8192;
   $97 = (0 - ($$0259))|0;
   $$$0262 = $95 ? $96 : $$0262$lcssa;
   $$$0259 = $95 ? $97 : $$0259;
   $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$101 = $storemerge278;
  } else {
   $98 = (_getint($5)|0);
   $99 = ($98|0)<(0);
   if ($99) {
    $$0 = -1;
    break;
   }
   $$pre346 = HEAP32[$5>>2]|0;
   $$1260 = $98;$$1263 = $$0262$lcssa;$$3272 = $$1270;$101 = $$pre346;
  }
  $100 = HEAP8[$101>>0]|0;
  $102 = ($100<<24>>24)==(46);
  do {
   if ($102) {
    $103 = ((($101)) + 1|0);
    $104 = HEAP8[$103>>0]|0;
    $105 = ($104<<24>>24)==(42);
    if (!($105)) {
     $132 = ((($101)) + 1|0);
     HEAP32[$5>>2] = $132;
     $133 = (_getint($5)|0);
     $$pre347$pre = HEAP32[$5>>2]|0;
     $$0254 = $133;$$pre347 = $$pre347$pre;
     break;
    }
    $106 = ((($101)) + 2|0);
    $107 = HEAP8[$106>>0]|0;
    $108 = $107 << 24 >> 24;
    $isdigittmp274 = (($108) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $109 = ((($101)) + 3|0);
     $110 = HEAP8[$109>>0]|0;
     $111 = ($110<<24>>24)==(36);
     if ($111) {
      $112 = (($4) + ($isdigittmp274<<2)|0);
      HEAP32[$112>>2] = 10;
      $113 = HEAP8[$106>>0]|0;
      $114 = $113 << 24 >> 24;
      $115 = (($114) + -48)|0;
      $116 = (($3) + ($115<<3)|0);
      $117 = $116;
      $118 = $117;
      $119 = HEAP32[$118>>2]|0;
      $120 = (($117) + 4)|0;
      $121 = $120;
      $122 = HEAP32[$121>>2]|0;
      $123 = ((($101)) + 4|0);
      HEAP32[$5>>2] = $123;
      $$0254 = $119;$$pre347 = $123;
      break;
     }
    }
    $124 = ($$3272|0)==(0);
    if (!($124)) {
     $$0 = -1;
     break L1;
    }
    if ($10) {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $125 = $arglist_current2;
     $126 = ((0) + 4|0);
     $expanded11 = $126;
     $expanded10 = (($expanded11) - 1)|0;
     $127 = (($125) + ($expanded10))|0;
     $128 = ((0) + 4|0);
     $expanded15 = $128;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $129 = $127 & $expanded13;
     $130 = $129;
     $131 = HEAP32[$130>>2]|0;
     $arglist_next3 = ((($130)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $338 = $131;
    } else {
     $338 = 0;
    }
    HEAP32[$5>>2] = $106;
    $$0254 = $338;$$pre347 = $106;
   } else {
    $$0254 = -1;$$pre347 = $101;
   }
  } while(0);
  $$0252 = 0;$135 = $$pre347;
  while(1) {
   $134 = HEAP8[$135>>0]|0;
   $136 = $134 << 24 >> 24;
   $137 = (($136) + -65)|0;
   $138 = ($137>>>0)>(57);
   if ($138) {
    $$0 = -1;
    break L1;
   }
   $139 = ((($135)) + 1|0);
   HEAP32[$5>>2] = $139;
   $140 = HEAP8[$135>>0]|0;
   $141 = $140 << 24 >> 24;
   $142 = (($141) + -65)|0;
   $143 = ((3642 + (($$0252*58)|0)|0) + ($142)|0);
   $144 = HEAP8[$143>>0]|0;
   $145 = $144&255;
   $146 = (($145) + -1)|0;
   $147 = ($146>>>0)<(8);
   if ($147) {
    $$0252 = $145;$135 = $139;
   } else {
    break;
   }
  }
  $148 = ($144<<24>>24)==(0);
  if ($148) {
   $$0 = -1;
   break;
  }
  $149 = ($144<<24>>24)==(19);
  $150 = ($$0253|0)>(-1);
  do {
   if ($149) {
    if ($150) {
     $$0 = -1;
     break L1;
    } else {
     label = 48;
    }
   } else {
    if ($150) {
     $151 = (($4) + ($$0253<<2)|0);
     HEAP32[$151>>2] = $145;
     $152 = (($3) + ($$0253<<3)|0);
     $153 = $152;
     $154 = $153;
     $155 = HEAP32[$154>>2]|0;
     $156 = (($153) + 4)|0;
     $157 = $156;
     $158 = HEAP32[$157>>2]|0;
     $159 = $6;
     $160 = $159;
     HEAP32[$160>>2] = $155;
     $161 = (($159) + 4)|0;
     $162 = $161;
     HEAP32[$162>>2] = $158;
     label = 48;
     break;
    }
    if (!($10)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($6,$145,$2);
   }
  } while(0);
  if ((label|0) == 48) {
   label = 0;
   if (!($10)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
    continue;
   }
  }
  $163 = HEAP8[$135>>0]|0;
  $164 = $163 << 24 >> 24;
  $165 = ($$0252|0)!=(0);
  $166 = $164 & 15;
  $167 = ($166|0)==(3);
  $or$cond280 = $165 & $167;
  $168 = $164 & -33;
  $$0235 = $or$cond280 ? $168 : $164;
  $169 = $$1263 & 8192;
  $170 = ($169|0)==(0);
  $171 = $$1263 & -65537;
  $$1263$ = $170 ? $$1263 : $171;
  L70: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $178 = HEAP32[$6>>2]|0;
     HEAP32[$178>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 1:  {
     $179 = HEAP32[$6>>2]|0;
     HEAP32[$179>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 2:  {
     $180 = ($$1248|0)<(0);
     $181 = $180 << 31 >> 31;
     $182 = HEAP32[$6>>2]|0;
     $183 = $182;
     $184 = $183;
     HEAP32[$184>>2] = $$1248;
     $185 = (($183) + 4)|0;
     $186 = $185;
     HEAP32[$186>>2] = $181;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 3:  {
     $187 = $$1248&65535;
     $188 = HEAP32[$6>>2]|0;
     HEAP16[$188>>1] = $187;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 4:  {
     $189 = $$1248&255;
     $190 = HEAP32[$6>>2]|0;
     HEAP8[$190>>0] = $189;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 6:  {
     $191 = HEAP32[$6>>2]|0;
     HEAP32[$191>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    case 7:  {
     $192 = ($$1248|0)<(0);
     $193 = $192 << 31 >> 31;
     $194 = HEAP32[$6>>2]|0;
     $195 = $194;
     $196 = $195;
     HEAP32[$196>>2] = $$1248;
     $197 = (($195) + 4)|0;
     $198 = $197;
     HEAP32[$198>>2] = $193;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $199 = ($$0254>>>0)>(8);
    $200 = $199 ? $$0254 : 8;
    $201 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $200;$$3265 = $201;
    label = 60;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 60;
    break;
   }
   case 111:  {
    $217 = $6;
    $218 = $217;
    $219 = HEAP32[$218>>2]|0;
    $220 = (($217) + 4)|0;
    $221 = $220;
    $222 = HEAP32[$221>>2]|0;
    $223 = (_fmt_o($219,$222,$11)|0);
    $224 = $$1263$ & 8;
    $225 = ($224|0)==(0);
    $226 = $223;
    $227 = (($12) - ($226))|0;
    $228 = ($$0254|0)>($227|0);
    $229 = (($227) + 1)|0;
    $230 = $225 | $228;
    $$0254$$0254$ = $230 ? $$0254 : $229;
    $$0228 = $223;$$1233 = 0;$$1238 = 4106;$$2256 = $$0254$$0254$;$$4266 = $$1263$;$256 = $219;$258 = $222;
    label = 66;
    break;
   }
   case 105: case 100:  {
    $231 = $6;
    $232 = $231;
    $233 = HEAP32[$232>>2]|0;
    $234 = (($231) + 4)|0;
    $235 = $234;
    $236 = HEAP32[$235>>2]|0;
    $237 = ($236|0)<(0);
    if ($237) {
     $238 = (_i64Subtract(0,0,($233|0),($236|0))|0);
     $239 = tempRet0;
     $240 = $6;
     $241 = $240;
     HEAP32[$241>>2] = $238;
     $242 = (($240) + 4)|0;
     $243 = $242;
     HEAP32[$243>>2] = $239;
     $$0232 = 1;$$0237 = 4106;$250 = $238;$251 = $239;
     label = 65;
     break L70;
    } else {
     $244 = $$1263$ & 2048;
     $245 = ($244|0)==(0);
     $246 = $$1263$ & 1;
     $247 = ($246|0)==(0);
     $$ = $247 ? 4106 : (4108);
     $$$ = $245 ? $$ : (4107);
     $248 = $$1263$ & 2049;
     $249 = ($248|0)!=(0);
     $$283$ = $249&1;
     $$0232 = $$283$;$$0237 = $$$;$250 = $233;$251 = $236;
     label = 65;
     break L70;
    }
    break;
   }
   case 117:  {
    $172 = $6;
    $173 = $172;
    $174 = HEAP32[$173>>2]|0;
    $175 = (($172) + 4)|0;
    $176 = $175;
    $177 = HEAP32[$176>>2]|0;
    $$0232 = 0;$$0237 = 4106;$250 = $174;$251 = $177;
    label = 65;
    break;
   }
   case 99:  {
    $267 = $6;
    $268 = $267;
    $269 = HEAP32[$268>>2]|0;
    $270 = (($267) + 4)|0;
    $271 = $270;
    $272 = HEAP32[$271>>2]|0;
    $273 = $269&255;
    HEAP8[$13>>0] = $273;
    $$2 = $13;$$2234 = 0;$$2239 = 4106;$$2251 = $11;$$5 = 1;$$6268 = $171;
    break;
   }
   case 109:  {
    $274 = (___errno_location()|0);
    $275 = HEAP32[$274>>2]|0;
    $276 = (_strerror($275)|0);
    $$1 = $276;
    label = 70;
    break;
   }
   case 115:  {
    $277 = HEAP32[$6>>2]|0;
    $278 = ($277|0)!=(0|0);
    $279 = $278 ? $277 : 4116;
    $$1 = $279;
    label = 70;
    break;
   }
   case 67:  {
    $286 = $6;
    $287 = $286;
    $288 = HEAP32[$287>>2]|0;
    $289 = (($286) + 4)|0;
    $290 = $289;
    $291 = HEAP32[$290>>2]|0;
    HEAP32[$8>>2] = $288;
    HEAP32[$14>>2] = 0;
    HEAP32[$6>>2] = $8;
    $$4258355 = -1;$339 = $8;
    label = 74;
    break;
   }
   case 83:  {
    $$pre349 = HEAP32[$6>>2]|0;
    $292 = ($$0254|0)==(0);
    if ($292) {
     _pad_668($0,32,$$1260,0,$$1263$);
     $$0240$lcssa357 = 0;
     label = 83;
    } else {
     $$4258355 = $$0254;$339 = $$pre349;
     label = 74;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $314 = +HEAPF64[$6>>3];
    $315 = (_fmt_fp($0,$314,$$1260,$$0254,$$1263$,$$0235)|0);
    $$0243 = $315;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
    continue L1;
    break;
   }
   default: {
    $$2 = $21;$$2234 = 0;$$2239 = 4106;$$2251 = $11;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L94: do {
   if ((label|0) == 60) {
    label = 0;
    $202 = $6;
    $203 = $202;
    $204 = HEAP32[$203>>2]|0;
    $205 = (($202) + 4)|0;
    $206 = $205;
    $207 = HEAP32[$206>>2]|0;
    $208 = $$1236 & 32;
    $209 = (_fmt_x($204,$207,$11,$208)|0);
    $210 = ($204|0)==(0);
    $211 = ($207|0)==(0);
    $212 = $210 & $211;
    $213 = $$3265 & 8;
    $214 = ($213|0)==(0);
    $or$cond282 = $214 | $212;
    $215 = $$1236 >> 4;
    $216 = (4106 + ($215)|0);
    $$290 = $or$cond282 ? 4106 : $216;
    $$291 = $or$cond282 ? 0 : 2;
    $$0228 = $209;$$1233 = $$291;$$1238 = $$290;$$2256 = $$1255;$$4266 = $$3265;$256 = $204;$258 = $207;
    label = 66;
   }
   else if ((label|0) == 65) {
    label = 0;
    $252 = (_fmt_u($250,$251,$11)|0);
    $$0228 = $252;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;$256 = $250;$258 = $251;
    label = 66;
   }
   else if ((label|0) == 70) {
    label = 0;
    $280 = (_memchr($$1,0,$$0254)|0);
    $281 = ($280|0)==(0|0);
    $282 = $280;
    $283 = $$1;
    $284 = (($282) - ($283))|0;
    $285 = (($$1) + ($$0254)|0);
    $$3257 = $281 ? $$0254 : $284;
    $$1250 = $281 ? $285 : $280;
    $$2 = $$1;$$2234 = 0;$$2239 = 4106;$$2251 = $$1250;$$5 = $$3257;$$6268 = $171;
   }
   else if ((label|0) == 74) {
    label = 0;
    $$0229320 = $339;$$0240319 = 0;$$1244318 = 0;
    while(1) {
     $293 = HEAP32[$$0229320>>2]|0;
     $294 = ($293|0)==(0);
     if ($294) {
      $$0240$lcssa = $$0240319;$$2245 = $$1244318;
      break;
     }
     $295 = (_wctomb($9,$293)|0);
     $296 = ($295|0)<(0);
     $297 = (($$4258355) - ($$0240319))|0;
     $298 = ($295>>>0)>($297>>>0);
     $or$cond285 = $296 | $298;
     if ($or$cond285) {
      $$0240$lcssa = $$0240319;$$2245 = $295;
      break;
     }
     $299 = ((($$0229320)) + 4|0);
     $300 = (($295) + ($$0240319))|0;
     $301 = ($$4258355>>>0)>($300>>>0);
     if ($301) {
      $$0229320 = $299;$$0240319 = $300;$$1244318 = $295;
     } else {
      $$0240$lcssa = $300;$$2245 = $295;
      break;
     }
    }
    $302 = ($$2245|0)<(0);
    if ($302) {
     $$0 = -1;
     break L1;
    }
    _pad_668($0,32,$$1260,$$0240$lcssa,$$1263$);
    $303 = ($$0240$lcssa|0)==(0);
    if ($303) {
     $$0240$lcssa357 = 0;
     label = 83;
    } else {
     $$1230331 = $339;$$1241330 = 0;
     while(1) {
      $304 = HEAP32[$$1230331>>2]|0;
      $305 = ($304|0)==(0);
      if ($305) {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 83;
       break L94;
      }
      $306 = (_wctomb($9,$304)|0);
      $307 = (($306) + ($$1241330))|0;
      $308 = ($307|0)>($$0240$lcssa|0);
      if ($308) {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 83;
       break L94;
      }
      $309 = ((($$1230331)) + 4|0);
      _out($0,$9,$306);
      $310 = ($307>>>0)<($$0240$lcssa>>>0);
      if ($310) {
       $$1230331 = $309;$$1241330 = $307;
      } else {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 83;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 66) {
   label = 0;
   $253 = ($$2256|0)>(-1);
   $254 = $$4266 & -65537;
   $$$4266 = $253 ? $254 : $$4266;
   $255 = ($256|0)!=(0);
   $257 = ($258|0)!=(0);
   $259 = $255 | $257;
   $260 = ($$2256|0)!=(0);
   $or$cond = $260 | $259;
   $261 = $$0228;
   $262 = (($12) - ($261))|0;
   $263 = $259 ^ 1;
   $264 = $263&1;
   $265 = (($262) + ($264))|0;
   $266 = ($$2256|0)>($265|0);
   $$2256$ = $266 ? $$2256 : $265;
   $$2256$$$2256 = $or$cond ? $$2256$ : $$2256;
   $$0228$ = $or$cond ? $$0228 : $11;
   $$2 = $$0228$;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $11;$$5 = $$2256$$$2256;$$6268 = $$$4266;
  }
  else if ((label|0) == 83) {
   label = 0;
   $311 = $$1263$ ^ 8192;
   _pad_668($0,32,$$1260,$$0240$lcssa357,$311);
   $312 = ($$1260|0)>($$0240$lcssa357|0);
   $313 = $312 ? $$1260 : $$0240$lcssa357;
   $$0243 = $313;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
   continue;
  }
  $316 = $$2251;
  $317 = $$2;
  $318 = (($316) - ($317))|0;
  $319 = ($$5|0)<($318|0);
  $$$5 = $319 ? $318 : $$5;
  $320 = (($$$5) + ($$2234))|0;
  $321 = ($$1260|0)<($320|0);
  $$2261 = $321 ? $320 : $$1260;
  _pad_668($0,32,$$2261,$320,$$6268);
  _out($0,$$2239,$$2234);
  $322 = $$6268 ^ 65536;
  _pad_668($0,48,$$2261,$320,$322);
  _pad_668($0,48,$$$5,$318,0);
  _out($0,$$2,$318);
  $323 = $$6268 ^ 8192;
  _pad_668($0,32,$$2261,$320,$323);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$21 = $139;
 }
 L113: do {
  if ((label|0) == 86) {
   $324 = ($0|0)==(0|0);
   if ($324) {
    $325 = ($$0269|0)==(0);
    if ($325) {
     $$0 = 0;
    } else {
     $$2242306 = 1;
     while(1) {
      $326 = (($4) + ($$2242306<<2)|0);
      $327 = HEAP32[$326>>2]|0;
      $328 = ($327|0)==(0);
      if ($328) {
       $$2242$lcssa = $$2242306;
       break;
      }
      $330 = (($3) + ($$2242306<<3)|0);
      _pop_arg($330,$327,$2);
      $331 = (($$2242306) + 1)|0;
      $332 = ($$2242306|0)<(9);
      if ($332) {
       $$2242306 = $331;
      } else {
       $$2242$lcssa = $331;
       break;
      }
     }
     $329 = ($$2242$lcssa|0)<(10);
     if ($329) {
      $$3304 = $$2242$lcssa;
      while(1) {
       $335 = (($4) + ($$3304<<2)|0);
       $336 = HEAP32[$335>>2]|0;
       $337 = ($336|0)==(0);
       if (!($337)) {
        $$0 = -1;
        break L113;
       }
       $333 = (($$3304) + 1)|0;
       $334 = ($$3304|0)<(9);
       if ($334) {
        $$3304 = $333;
       } else {
        $$0 = 1;
        break;
       }
      }
     } else {
      $$0 = 1;
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _out($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = HEAP32[$0>>2]|0;
 $4 = $3 & 32;
 $5 = ($4|0)==(0);
 if ($5) {
  (___fwritex($1,$2,$0)|0);
 }
 return;
}
function _getint($0) {
 $0 = $0|0;
 var $$0$lcssa = 0, $$06 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $isdigit = 0, $isdigit5 = 0, $isdigittmp = 0, $isdigittmp4 = 0, $isdigittmp7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $isdigittmp4 = (($3) + -48)|0;
 $isdigit5 = ($isdigittmp4>>>0)<(10);
 if ($isdigit5) {
  $$06 = 0;$7 = $1;$isdigittmp7 = $isdigittmp4;
  while(1) {
   $4 = ($$06*10)|0;
   $5 = (($isdigittmp7) + ($4))|0;
   $6 = ((($7)) + 1|0);
   HEAP32[$0>>2] = $6;
   $8 = HEAP8[$6>>0]|0;
   $9 = $8 << 24 >> 24;
   $isdigittmp = (($9) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $$06 = $5;$7 = $6;$isdigittmp7 = $isdigittmp;
   } else {
    $$0$lcssa = $5;
    break;
   }
  }
 } else {
  $$0$lcssa = 0;
 }
 return ($$0$lcssa|0);
}
function _pop_arg($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0;
 var $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0;
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0;
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0;
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = HEAP32[$2>>2]|0;
     $4 = $arglist_current;
     $5 = ((0) + 4|0);
     $expanded28 = $5;
     $expanded = (($expanded28) - 1)|0;
     $6 = (($4) + ($expanded))|0;
     $7 = ((0) + 4|0);
     $expanded32 = $7;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $8 = $6 & $expanded30;
     $9 = $8;
     $10 = HEAP32[$9>>2]|0;
     $arglist_next = ((($9)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     HEAP32[$0>>2] = $10;
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $11 = $arglist_current2;
     $12 = ((0) + 4|0);
     $expanded35 = $12;
     $expanded34 = (($expanded35) - 1)|0;
     $13 = (($11) + ($expanded34))|0;
     $14 = ((0) + 4|0);
     $expanded39 = $14;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $15 = $13 & $expanded37;
     $16 = $15;
     $17 = HEAP32[$16>>2]|0;
     $arglist_next3 = ((($16)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $18 = ($17|0)<(0);
     $19 = $18 << 31 >> 31;
     $20 = $0;
     $21 = $20;
     HEAP32[$21>>2] = $17;
     $22 = (($20) + 4)|0;
     $23 = $22;
     HEAP32[$23>>2] = $19;
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = HEAP32[$2>>2]|0;
     $24 = $arglist_current5;
     $25 = ((0) + 4|0);
     $expanded42 = $25;
     $expanded41 = (($expanded42) - 1)|0;
     $26 = (($24) + ($expanded41))|0;
     $27 = ((0) + 4|0);
     $expanded46 = $27;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $28 = $26 & $expanded44;
     $29 = $28;
     $30 = HEAP32[$29>>2]|0;
     $arglist_next6 = ((($29)) + 4|0);
     HEAP32[$2>>2] = $arglist_next6;
     $31 = $0;
     $32 = $31;
     HEAP32[$32>>2] = $30;
     $33 = (($31) + 4)|0;
     $34 = $33;
     HEAP32[$34>>2] = 0;
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = HEAP32[$2>>2]|0;
     $35 = $arglist_current8;
     $36 = ((0) + 8|0);
     $expanded49 = $36;
     $expanded48 = (($expanded49) - 1)|0;
     $37 = (($35) + ($expanded48))|0;
     $38 = ((0) + 8|0);
     $expanded53 = $38;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $39 = $37 & $expanded51;
     $40 = $39;
     $41 = $40;
     $42 = $41;
     $43 = HEAP32[$42>>2]|0;
     $44 = (($41) + 4)|0;
     $45 = $44;
     $46 = HEAP32[$45>>2]|0;
     $arglist_next9 = ((($40)) + 8|0);
     HEAP32[$2>>2] = $arglist_next9;
     $47 = $0;
     $48 = $47;
     HEAP32[$48>>2] = $43;
     $49 = (($47) + 4)|0;
     $50 = $49;
     HEAP32[$50>>2] = $46;
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = HEAP32[$2>>2]|0;
     $51 = $arglist_current11;
     $52 = ((0) + 4|0);
     $expanded56 = $52;
     $expanded55 = (($expanded56) - 1)|0;
     $53 = (($51) + ($expanded55))|0;
     $54 = ((0) + 4|0);
     $expanded60 = $54;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $55 = $53 & $expanded58;
     $56 = $55;
     $57 = HEAP32[$56>>2]|0;
     $arglist_next12 = ((($56)) + 4|0);
     HEAP32[$2>>2] = $arglist_next12;
     $58 = $57&65535;
     $59 = $58 << 16 >> 16;
     $60 = ($59|0)<(0);
     $61 = $60 << 31 >> 31;
     $62 = $0;
     $63 = $62;
     HEAP32[$63>>2] = $59;
     $64 = (($62) + 4)|0;
     $65 = $64;
     HEAP32[$65>>2] = $61;
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = HEAP32[$2>>2]|0;
     $66 = $arglist_current14;
     $67 = ((0) + 4|0);
     $expanded63 = $67;
     $expanded62 = (($expanded63) - 1)|0;
     $68 = (($66) + ($expanded62))|0;
     $69 = ((0) + 4|0);
     $expanded67 = $69;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $70 = $68 & $expanded65;
     $71 = $70;
     $72 = HEAP32[$71>>2]|0;
     $arglist_next15 = ((($71)) + 4|0);
     HEAP32[$2>>2] = $arglist_next15;
     $$mask31 = $72 & 65535;
     $73 = $0;
     $74 = $73;
     HEAP32[$74>>2] = $$mask31;
     $75 = (($73) + 4)|0;
     $76 = $75;
     HEAP32[$76>>2] = 0;
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = HEAP32[$2>>2]|0;
     $77 = $arglist_current17;
     $78 = ((0) + 4|0);
     $expanded70 = $78;
     $expanded69 = (($expanded70) - 1)|0;
     $79 = (($77) + ($expanded69))|0;
     $80 = ((0) + 4|0);
     $expanded74 = $80;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $81 = $79 & $expanded72;
     $82 = $81;
     $83 = HEAP32[$82>>2]|0;
     $arglist_next18 = ((($82)) + 4|0);
     HEAP32[$2>>2] = $arglist_next18;
     $84 = $83&255;
     $85 = $84 << 24 >> 24;
     $86 = ($85|0)<(0);
     $87 = $86 << 31 >> 31;
     $88 = $0;
     $89 = $88;
     HEAP32[$89>>2] = $85;
     $90 = (($88) + 4)|0;
     $91 = $90;
     HEAP32[$91>>2] = $87;
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = HEAP32[$2>>2]|0;
     $92 = $arglist_current20;
     $93 = ((0) + 4|0);
     $expanded77 = $93;
     $expanded76 = (($expanded77) - 1)|0;
     $94 = (($92) + ($expanded76))|0;
     $95 = ((0) + 4|0);
     $expanded81 = $95;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $96 = $94 & $expanded79;
     $97 = $96;
     $98 = HEAP32[$97>>2]|0;
     $arglist_next21 = ((($97)) + 4|0);
     HEAP32[$2>>2] = $arglist_next21;
     $$mask = $98 & 255;
     $99 = $0;
     $100 = $99;
     HEAP32[$100>>2] = $$mask;
     $101 = (($99) + 4)|0;
     $102 = $101;
     HEAP32[$102>>2] = 0;
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = HEAP32[$2>>2]|0;
     $103 = $arglist_current23;
     $104 = ((0) + 8|0);
     $expanded84 = $104;
     $expanded83 = (($expanded84) - 1)|0;
     $105 = (($103) + ($expanded83))|0;
     $106 = ((0) + 8|0);
     $expanded88 = $106;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $107 = $105 & $expanded86;
     $108 = $107;
     $109 = +HEAPF64[$108>>3];
     $arglist_next24 = ((($108)) + 8|0);
     HEAP32[$2>>2] = $arglist_next24;
     HEAPF64[$0>>3] = $109;
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = HEAP32[$2>>2]|0;
     $110 = $arglist_current26;
     $111 = ((0) + 8|0);
     $expanded91 = $111;
     $expanded90 = (($expanded91) - 1)|0;
     $112 = (($110) + ($expanded90))|0;
     $113 = ((0) + 8|0);
     $expanded95 = $113;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $114 = $112 & $expanded93;
     $115 = $114;
     $116 = +HEAPF64[$115>>3];
     $arglist_next27 = ((($115)) + 8|0);
     HEAP32[$2>>2] = $arglist_next27;
     HEAPF64[$0>>3] = $116;
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_x($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$05$lcssa = 0, $$056 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $4 = ($0|0)==(0);
 $5 = ($1|0)==(0);
 $6 = $4 & $5;
 if ($6) {
  $$05$lcssa = $2;
 } else {
  $$056 = $2;$15 = $1;$8 = $0;
  while(1) {
   $7 = $8 & 15;
   $9 = (4158 + ($7)|0);
   $10 = HEAP8[$9>>0]|0;
   $11 = $10&255;
   $12 = $11 | $3;
   $13 = $12&255;
   $14 = ((($$056)) + -1|0);
   HEAP8[$14>>0] = $13;
   $16 = (_bitshift64Lshr(($8|0),($15|0),4)|0);
   $17 = tempRet0;
   $18 = ($16|0)==(0);
   $19 = ($17|0)==(0);
   $20 = $18 & $19;
   if ($20) {
    $$05$lcssa = $14;
    break;
   } else {
    $$056 = $14;$15 = $17;$8 = $16;
   }
  }
 }
 return ($$05$lcssa|0);
}
function _fmt_o($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$06 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0);
 $4 = ($1|0)==(0);
 $5 = $3 & $4;
 if ($5) {
  $$0$lcssa = $2;
 } else {
  $$06 = $2;$11 = $1;$7 = $0;
  while(1) {
   $6 = $7&255;
   $8 = $6 & 7;
   $9 = $8 | 48;
   $10 = ((($$06)) + -1|0);
   HEAP8[$10>>0] = $9;
   $12 = (_bitshift64Lshr(($7|0),($11|0),3)|0);
   $13 = tempRet0;
   $14 = ($12|0)==(0);
   $15 = ($13|0)==(0);
   $16 = $14 & $15;
   if ($16) {
    $$0$lcssa = $10;
    break;
   } else {
    $$06 = $10;$11 = $13;$7 = $12;
   }
  }
 }
 return ($$0$lcssa|0);
}
function _fmt_u($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$010$lcssa$off0 = 0, $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(0);
 $4 = ($0>>>0)>(4294967295);
 $5 = ($1|0)==(0);
 $6 = $5 & $4;
 $7 = $3 | $6;
 if ($7) {
  $$0914 = $2;$8 = $0;$9 = $1;
  while(1) {
   $10 = (___uremdi3(($8|0),($9|0),10,0)|0);
   $11 = tempRet0;
   $12 = $10&255;
   $13 = $12 | 48;
   $14 = ((($$0914)) + -1|0);
   HEAP8[$14>>0] = $13;
   $15 = (___udivdi3(($8|0),($9|0),10,0)|0);
   $16 = tempRet0;
   $17 = ($9>>>0)>(9);
   $18 = ($8>>>0)>(4294967295);
   $19 = ($9|0)==(9);
   $20 = $19 & $18;
   $21 = $17 | $20;
   if ($21) {
    $$0914 = $14;$8 = $15;$9 = $16;
   } else {
    break;
   }
  }
  $$010$lcssa$off0 = $15;$$09$lcssa = $14;
 } else {
  $$010$lcssa$off0 = $0;$$09$lcssa = $2;
 }
 $22 = ($$010$lcssa$off0|0)==(0);
 if ($22) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $23 = (($$012>>>0) % 10)&-1;
   $24 = $23 | 48;
   $25 = $24&255;
   $26 = ((($$111)) + -1|0);
   HEAP8[$26>>0] = $25;
   $27 = (($$012>>>0) / 10)&-1;
   $28 = ($$012>>>0)<(10);
   if ($28) {
    $$1$lcssa = $26;
    break;
   } else {
    $$012 = $27;$$111 = $26;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (___pthread_self_105()|0);
 $2 = ((($1)) + 188|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = (___strerror_l($0,$3)|0);
 return ($4|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = HEAP8[$$03555>>0]|0;
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = HEAP8[$$035$lcssa65>>0]|0;
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = HEAP32[$$046>>2]|0;
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = HEAP8[$$140>>0]|0;
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad_668($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa = 0, $$011 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(256|0);
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 if ($or$cond) {
  $9 = (($2) - ($3))|0;
  $10 = ($9>>>0)<(256);
  $11 = $10 ? $9 : 256;
  _memset(($5|0),($1|0),($11|0))|0;
  $12 = ($9>>>0)>(255);
  if ($12) {
   $13 = (($2) - ($3))|0;
   $$011 = $9;
   while(1) {
    _out($0,$5,256);
    $14 = (($$011) + -256)|0;
    $15 = ($14>>>0)>(255);
    if ($15) {
     $$011 = $14;
    } else {
     break;
    }
   }
   $16 = $13 & 255;
   $$0$lcssa = $16;
  } else {
   $$0$lcssa = $9;
  }
  _out($0,$5,$$0$lcssa);
 }
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _fmt_fp($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = +$1;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$ = 0, $$$ = 0, $$$$564 = 0.0, $$$3484 = 0, $$$3484699 = 0, $$$3484700 = 0, $$$3501 = 0, $$$4502 = 0, $$$543 = 0.0, $$$564 = 0.0, $$0 = 0, $$0463$lcssa = 0, $$0463587 = 0, $$0464597 = 0, $$0471 = 0.0, $$0479 = 0, $$0487644 = 0, $$0488 = 0, $$0488655 = 0, $$0488657 = 0;
 var $$0496$$9 = 0, $$0497656 = 0, $$0498 = 0, $$0509585 = 0.0, $$0510 = 0, $$0511 = 0, $$0514639 = 0, $$0520 = 0, $$0521 = 0, $$0521$ = 0, $$0523 = 0, $$0527 = 0, $$0527$in633 = 0, $$0530638 = 0, $$1465 = 0, $$1467 = 0.0, $$1469 = 0.0, $$1472 = 0.0, $$1480 = 0, $$1482$lcssa = 0;
 var $$1482663 = 0, $$1489643 = 0, $$1499$lcssa = 0, $$1499662 = 0, $$1508586 = 0, $$1512$lcssa = 0, $$1512610 = 0, $$1515 = 0, $$1524 = 0, $$1526 = 0, $$1528617 = 0, $$1531$lcssa = 0, $$1531632 = 0, $$1601 = 0, $$2 = 0, $$2473 = 0.0, $$2476 = 0, $$2476$$549 = 0, $$2476$$551 = 0, $$2483$ph = 0;
 var $$2500 = 0, $$2513 = 0, $$2516621 = 0, $$2529 = 0, $$2532620 = 0, $$3 = 0.0, $$3477 = 0, $$3484$lcssa = 0, $$3484650 = 0, $$3501$lcssa = 0, $$3501649 = 0, $$3533616 = 0, $$4 = 0.0, $$4478$lcssa = 0, $$4478593 = 0, $$4492 = 0, $$4502 = 0, $$4518 = 0, $$5$lcssa = 0, $$534$ = 0;
 var $$540 = 0, $$540$ = 0, $$543 = 0.0, $$548 = 0, $$5486$lcssa = 0, $$5486626 = 0, $$5493600 = 0, $$550 = 0, $$5519$ph = 0, $$557 = 0, $$5605 = 0, $$561 = 0, $$564 = 0.0, $$6 = 0, $$6494592 = 0, $$7495604 = 0, $$7505 = 0, $$7505$ = 0, $$7505$ph = 0, $$8 = 0;
 var $$9$ph = 0, $$lcssa675 = 0, $$neg = 0, $$neg568 = 0, $$pn = 0, $$pr = 0, $$pr566 = 0, $$pre = 0, $$pre$phi691Z2D = 0, $$pre$phi698Z2D = 0, $$pre690 = 0, $$pre693 = 0, $$pre697 = 0, $$sink = 0, $$sink547$lcssa = 0, $$sink547625 = 0, $$sink560 = 0, $10 = 0, $100 = 0, $101 = 0;
 var $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0.0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0.0, $119 = 0.0, $12 = 0;
 var $120 = 0.0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0;
 var $139 = 0, $14 = 0.0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0;
 var $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0;
 var $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0;
 var $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0.0, $232 = 0.0, $233 = 0, $234 = 0.0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0;
 var $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0;
 var $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0;
 var $339 = 0, $34 = 0.0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0.0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0;
 var $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0;
 var $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0.0, $51 = 0, $52 = 0, $53 = 0, $54 = 0.0, $55 = 0.0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0.0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $not$ = 0, $or$cond = 0, $or$cond3$not = 0, $or$cond542 = 0, $or$cond545 = 0, $or$cond556 = 0, $or$cond6 = 0, $scevgep686 = 0, $scevgep686687 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(560|0);
 $6 = sp + 8|0;
 $7 = sp;
 $8 = sp + 524|0;
 $9 = $8;
 $10 = sp + 512|0;
 HEAP32[$7>>2] = 0;
 $11 = ((($10)) + 12|0);
 (___DOUBLE_BITS_669($1)|0);
 $12 = tempRet0;
 $13 = ($12|0)<(0);
 if ($13) {
  $14 = -$1;
  $$0471 = $14;$$0520 = 1;$$0521 = 4123;
 } else {
  $15 = $4 & 2048;
  $16 = ($15|0)==(0);
  $17 = $4 & 1;
  $18 = ($17|0)==(0);
  $$ = $18 ? (4124) : (4129);
  $$$ = $16 ? $$ : (4126);
  $19 = $4 & 2049;
  $20 = ($19|0)!=(0);
  $$534$ = $20&1;
  $$0471 = $1;$$0520 = $$534$;$$0521 = $$$;
 }
 (___DOUBLE_BITS_669($$0471)|0);
 $21 = tempRet0;
 $22 = $21 & 2146435072;
 $23 = (0)==(0);
 $24 = ($22|0)==(2146435072);
 $25 = $23 & $24;
 do {
  if ($25) {
   $26 = $5 & 32;
   $27 = ($26|0)!=(0);
   $28 = $27 ? 4142 : 4146;
   $29 = ($$0471 != $$0471) | (0.0 != 0.0);
   $30 = $27 ? 4150 : 4154;
   $$0510 = $29 ? $30 : $28;
   $31 = (($$0520) + 3)|0;
   $32 = $4 & -65537;
   _pad_668($0,32,$2,$31,$32);
   _out($0,$$0521,$$0520);
   _out($0,$$0510,3);
   $33 = $4 ^ 8192;
   _pad_668($0,32,$2,$31,$33);
   $$sink560 = $31;
  } else {
   $34 = (+_frexpl($$0471,$7));
   $35 = $34 * 2.0;
   $36 = $35 != 0.0;
   if ($36) {
    $37 = HEAP32[$7>>2]|0;
    $38 = (($37) + -1)|0;
    HEAP32[$7>>2] = $38;
   }
   $39 = $5 | 32;
   $40 = ($39|0)==(97);
   if ($40) {
    $41 = $5 & 32;
    $42 = ($41|0)==(0);
    $43 = ((($$0521)) + 9|0);
    $$0521$ = $42 ? $$0521 : $43;
    $44 = $$0520 | 2;
    $45 = ($3>>>0)>(11);
    $46 = (12 - ($3))|0;
    $47 = ($46|0)==(0);
    $48 = $45 | $47;
    do {
     if ($48) {
      $$1472 = $35;
     } else {
      $$0509585 = 8.0;$$1508586 = $46;
      while(1) {
       $49 = (($$1508586) + -1)|0;
       $50 = $$0509585 * 16.0;
       $51 = ($49|0)==(0);
       if ($51) {
        break;
       } else {
        $$0509585 = $50;$$1508586 = $49;
       }
      }
      $52 = HEAP8[$$0521$>>0]|0;
      $53 = ($52<<24>>24)==(45);
      if ($53) {
       $54 = -$35;
       $55 = $54 - $50;
       $56 = $50 + $55;
       $57 = -$56;
       $$1472 = $57;
       break;
      } else {
       $58 = $35 + $50;
       $59 = $58 - $50;
       $$1472 = $59;
       break;
      }
     }
    } while(0);
    $60 = HEAP32[$7>>2]|0;
    $61 = ($60|0)<(0);
    $62 = (0 - ($60))|0;
    $63 = $61 ? $62 : $60;
    $64 = ($63|0)<(0);
    $65 = $64 << 31 >> 31;
    $66 = (_fmt_u($63,$65,$11)|0);
    $67 = ($66|0)==($11|0);
    if ($67) {
     $68 = ((($10)) + 11|0);
     HEAP8[$68>>0] = 48;
     $$0511 = $68;
    } else {
     $$0511 = $66;
    }
    $69 = $60 >> 31;
    $70 = $69 & 2;
    $71 = (($70) + 43)|0;
    $72 = $71&255;
    $73 = ((($$0511)) + -1|0);
    HEAP8[$73>>0] = $72;
    $74 = (($5) + 15)|0;
    $75 = $74&255;
    $76 = ((($$0511)) + -2|0);
    HEAP8[$76>>0] = $75;
    $77 = ($3|0)<(1);
    $78 = $4 & 8;
    $79 = ($78|0)==(0);
    $$0523 = $8;$$2473 = $$1472;
    while(1) {
     $80 = (~~(($$2473)));
     $81 = (4158 + ($80)|0);
     $82 = HEAP8[$81>>0]|0;
     $83 = $82&255;
     $84 = $41 | $83;
     $85 = $84&255;
     $86 = ((($$0523)) + 1|0);
     HEAP8[$$0523>>0] = $85;
     $87 = (+($80|0));
     $88 = $$2473 - $87;
     $89 = $88 * 16.0;
     $90 = $86;
     $91 = (($90) - ($9))|0;
     $92 = ($91|0)==(1);
     if ($92) {
      $93 = $89 == 0.0;
      $or$cond3$not = $77 & $93;
      $or$cond = $79 & $or$cond3$not;
      if ($or$cond) {
       $$1524 = $86;
      } else {
       $94 = ((($$0523)) + 2|0);
       HEAP8[$86>>0] = 46;
       $$1524 = $94;
      }
     } else {
      $$1524 = $86;
     }
     $95 = $89 != 0.0;
     if ($95) {
      $$0523 = $$1524;$$2473 = $89;
     } else {
      break;
     }
    }
    $96 = ($3|0)==(0);
    $$pre693 = $$1524;
    if ($96) {
     label = 24;
    } else {
     $97 = (-2 - ($9))|0;
     $98 = (($97) + ($$pre693))|0;
     $99 = ($98|0)<($3|0);
     if ($99) {
      $100 = (($3) + 2)|0;
      $$pre690 = (($$pre693) - ($9))|0;
      $$pre$phi691Z2D = $$pre690;$$sink = $100;
     } else {
      label = 24;
     }
    }
    if ((label|0) == 24) {
     $101 = (($$pre693) - ($9))|0;
     $$pre$phi691Z2D = $101;$$sink = $101;
    }
    $102 = $11;
    $103 = $76;
    $104 = (($102) - ($103))|0;
    $105 = (($104) + ($44))|0;
    $106 = (($105) + ($$sink))|0;
    _pad_668($0,32,$2,$106,$4);
    _out($0,$$0521$,$44);
    $107 = $4 ^ 65536;
    _pad_668($0,48,$2,$106,$107);
    _out($0,$8,$$pre$phi691Z2D);
    $108 = (($$sink) - ($$pre$phi691Z2D))|0;
    _pad_668($0,48,$108,0,0);
    _out($0,$76,$104);
    $109 = $4 ^ 8192;
    _pad_668($0,32,$2,$106,$109);
    $$sink560 = $106;
    break;
   }
   $110 = ($3|0)<(0);
   $$540 = $110 ? 6 : $3;
   if ($36) {
    $111 = $35 * 268435456.0;
    $112 = HEAP32[$7>>2]|0;
    $113 = (($112) + -28)|0;
    HEAP32[$7>>2] = $113;
    $$3 = $111;$$pr = $113;
   } else {
    $$pre = HEAP32[$7>>2]|0;
    $$3 = $35;$$pr = $$pre;
   }
   $114 = ($$pr|0)<(0);
   $115 = ((($6)) + 288|0);
   $$561 = $114 ? $6 : $115;
   $$0498 = $$561;$$4 = $$3;
   while(1) {
    $116 = (~~(($$4))>>>0);
    HEAP32[$$0498>>2] = $116;
    $117 = ((($$0498)) + 4|0);
    $118 = (+($116>>>0));
    $119 = $$4 - $118;
    $120 = $119 * 1.0E+9;
    $121 = $120 != 0.0;
    if ($121) {
     $$0498 = $117;$$4 = $120;
    } else {
     break;
    }
   }
   $122 = ($$pr|0)>(0);
   if ($122) {
    $$1482663 = $$561;$$1499662 = $117;$124 = $$pr;
    while(1) {
     $123 = ($124|0)<(29);
     $125 = $123 ? $124 : 29;
     $$0488655 = ((($$1499662)) + -4|0);
     $126 = ($$0488655>>>0)<($$1482663>>>0);
     if ($126) {
      $$2483$ph = $$1482663;
     } else {
      $$0488657 = $$0488655;$$0497656 = 0;
      while(1) {
       $127 = HEAP32[$$0488657>>2]|0;
       $128 = (_bitshift64Shl(($127|0),0,($125|0))|0);
       $129 = tempRet0;
       $130 = (_i64Add(($128|0),($129|0),($$0497656|0),0)|0);
       $131 = tempRet0;
       $132 = (___uremdi3(($130|0),($131|0),1000000000,0)|0);
       $133 = tempRet0;
       HEAP32[$$0488657>>2] = $132;
       $134 = (___udivdi3(($130|0),($131|0),1000000000,0)|0);
       $135 = tempRet0;
       $$0488 = ((($$0488657)) + -4|0);
       $136 = ($$0488>>>0)<($$1482663>>>0);
       if ($136) {
        break;
       } else {
        $$0488657 = $$0488;$$0497656 = $134;
       }
      }
      $137 = ($134|0)==(0);
      if ($137) {
       $$2483$ph = $$1482663;
      } else {
       $138 = ((($$1482663)) + -4|0);
       HEAP32[$138>>2] = $134;
       $$2483$ph = $138;
      }
     }
     $$2500 = $$1499662;
     while(1) {
      $139 = ($$2500>>>0)>($$2483$ph>>>0);
      if (!($139)) {
       break;
      }
      $140 = ((($$2500)) + -4|0);
      $141 = HEAP32[$140>>2]|0;
      $142 = ($141|0)==(0);
      if ($142) {
       $$2500 = $140;
      } else {
       break;
      }
     }
     $143 = HEAP32[$7>>2]|0;
     $144 = (($143) - ($125))|0;
     HEAP32[$7>>2] = $144;
     $145 = ($144|0)>(0);
     if ($145) {
      $$1482663 = $$2483$ph;$$1499662 = $$2500;$124 = $144;
     } else {
      $$1482$lcssa = $$2483$ph;$$1499$lcssa = $$2500;$$pr566 = $144;
      break;
     }
    }
   } else {
    $$1482$lcssa = $$561;$$1499$lcssa = $117;$$pr566 = $$pr;
   }
   $146 = ($$pr566|0)<(0);
   if ($146) {
    $147 = (($$540) + 25)|0;
    $148 = (($147|0) / 9)&-1;
    $149 = (($148) + 1)|0;
    $150 = ($39|0)==(102);
    $$3484650 = $$1482$lcssa;$$3501649 = $$1499$lcssa;$152 = $$pr566;
    while(1) {
     $151 = (0 - ($152))|0;
     $153 = ($151|0)<(9);
     $154 = $153 ? $151 : 9;
     $155 = ($$3484650>>>0)<($$3501649>>>0);
     if ($155) {
      $159 = 1 << $154;
      $160 = (($159) + -1)|0;
      $161 = 1000000000 >>> $154;
      $$0487644 = 0;$$1489643 = $$3484650;
      while(1) {
       $162 = HEAP32[$$1489643>>2]|0;
       $163 = $162 & $160;
       $164 = $162 >>> $154;
       $165 = (($164) + ($$0487644))|0;
       HEAP32[$$1489643>>2] = $165;
       $166 = Math_imul($163, $161)|0;
       $167 = ((($$1489643)) + 4|0);
       $168 = ($167>>>0)<($$3501649>>>0);
       if ($168) {
        $$0487644 = $166;$$1489643 = $167;
       } else {
        break;
       }
      }
      $169 = HEAP32[$$3484650>>2]|0;
      $170 = ($169|0)==(0);
      $171 = ((($$3484650)) + 4|0);
      $$$3484 = $170 ? $171 : $$3484650;
      $172 = ($166|0)==(0);
      if ($172) {
       $$$3484700 = $$$3484;$$4502 = $$3501649;
      } else {
       $173 = ((($$3501649)) + 4|0);
       HEAP32[$$3501649>>2] = $166;
       $$$3484700 = $$$3484;$$4502 = $173;
      }
     } else {
      $156 = HEAP32[$$3484650>>2]|0;
      $157 = ($156|0)==(0);
      $158 = ((($$3484650)) + 4|0);
      $$$3484699 = $157 ? $158 : $$3484650;
      $$$3484700 = $$$3484699;$$4502 = $$3501649;
     }
     $174 = $150 ? $$561 : $$$3484700;
     $175 = $$4502;
     $176 = $174;
     $177 = (($175) - ($176))|0;
     $178 = $177 >> 2;
     $179 = ($178|0)>($149|0);
     $180 = (($174) + ($149<<2)|0);
     $$$4502 = $179 ? $180 : $$4502;
     $181 = HEAP32[$7>>2]|0;
     $182 = (($181) + ($154))|0;
     HEAP32[$7>>2] = $182;
     $183 = ($182|0)<(0);
     if ($183) {
      $$3484650 = $$$3484700;$$3501649 = $$$4502;$152 = $182;
     } else {
      $$3484$lcssa = $$$3484700;$$3501$lcssa = $$$4502;
      break;
     }
    }
   } else {
    $$3484$lcssa = $$1482$lcssa;$$3501$lcssa = $$1499$lcssa;
   }
   $184 = ($$3484$lcssa>>>0)<($$3501$lcssa>>>0);
   $185 = $$561;
   if ($184) {
    $186 = $$3484$lcssa;
    $187 = (($185) - ($186))|0;
    $188 = $187 >> 2;
    $189 = ($188*9)|0;
    $190 = HEAP32[$$3484$lcssa>>2]|0;
    $191 = ($190>>>0)<(10);
    if ($191) {
     $$1515 = $189;
    } else {
     $$0514639 = $189;$$0530638 = 10;
     while(1) {
      $192 = ($$0530638*10)|0;
      $193 = (($$0514639) + 1)|0;
      $194 = ($190>>>0)<($192>>>0);
      if ($194) {
       $$1515 = $193;
       break;
      } else {
       $$0514639 = $193;$$0530638 = $192;
      }
     }
    }
   } else {
    $$1515 = 0;
   }
   $195 = ($39|0)!=(102);
   $196 = $195 ? $$1515 : 0;
   $197 = (($$540) - ($196))|0;
   $198 = ($39|0)==(103);
   $199 = ($$540|0)!=(0);
   $200 = $199 & $198;
   $$neg = $200 << 31 >> 31;
   $201 = (($197) + ($$neg))|0;
   $202 = $$3501$lcssa;
   $203 = (($202) - ($185))|0;
   $204 = $203 >> 2;
   $205 = ($204*9)|0;
   $206 = (($205) + -9)|0;
   $207 = ($201|0)<($206|0);
   if ($207) {
    $208 = ((($$561)) + 4|0);
    $209 = (($201) + 9216)|0;
    $210 = (($209|0) / 9)&-1;
    $211 = (($210) + -1024)|0;
    $212 = (($208) + ($211<<2)|0);
    $213 = (($209|0) % 9)&-1;
    $214 = ($213|0)<(8);
    if ($214) {
     $$0527$in633 = $213;$$1531632 = 10;
     while(1) {
      $$0527 = (($$0527$in633) + 1)|0;
      $215 = ($$1531632*10)|0;
      $216 = ($$0527$in633|0)<(7);
      if ($216) {
       $$0527$in633 = $$0527;$$1531632 = $215;
      } else {
       $$1531$lcssa = $215;
       break;
      }
     }
    } else {
     $$1531$lcssa = 10;
    }
    $217 = HEAP32[$212>>2]|0;
    $218 = (($217>>>0) % ($$1531$lcssa>>>0))&-1;
    $219 = ($218|0)==(0);
    $220 = ((($212)) + 4|0);
    $221 = ($220|0)==($$3501$lcssa|0);
    $or$cond542 = $221 & $219;
    if ($or$cond542) {
     $$4492 = $212;$$4518 = $$1515;$$8 = $$3484$lcssa;
    } else {
     $222 = (($217>>>0) / ($$1531$lcssa>>>0))&-1;
     $223 = $222 & 1;
     $224 = ($223|0)==(0);
     $$543 = $224 ? 9007199254740992.0 : 9007199254740994.0;
     $225 = (($$1531$lcssa|0) / 2)&-1;
     $226 = ($218>>>0)<($225>>>0);
     $227 = ($218|0)==($225|0);
     $or$cond545 = $221 & $227;
     $$564 = $or$cond545 ? 1.0 : 1.5;
     $$$564 = $226 ? 0.5 : $$564;
     $228 = ($$0520|0)==(0);
     if ($228) {
      $$1467 = $$$564;$$1469 = $$543;
     } else {
      $229 = HEAP8[$$0521>>0]|0;
      $230 = ($229<<24>>24)==(45);
      $231 = -$$543;
      $232 = -$$$564;
      $$$543 = $230 ? $231 : $$543;
      $$$$564 = $230 ? $232 : $$$564;
      $$1467 = $$$$564;$$1469 = $$$543;
     }
     $233 = (($217) - ($218))|0;
     HEAP32[$212>>2] = $233;
     $234 = $$1469 + $$1467;
     $235 = $234 != $$1469;
     if ($235) {
      $236 = (($233) + ($$1531$lcssa))|0;
      HEAP32[$212>>2] = $236;
      $237 = ($236>>>0)>(999999999);
      if ($237) {
       $$5486626 = $$3484$lcssa;$$sink547625 = $212;
       while(1) {
        $238 = ((($$sink547625)) + -4|0);
        HEAP32[$$sink547625>>2] = 0;
        $239 = ($238>>>0)<($$5486626>>>0);
        if ($239) {
         $240 = ((($$5486626)) + -4|0);
         HEAP32[$240>>2] = 0;
         $$6 = $240;
        } else {
         $$6 = $$5486626;
        }
        $241 = HEAP32[$238>>2]|0;
        $242 = (($241) + 1)|0;
        HEAP32[$238>>2] = $242;
        $243 = ($242>>>0)>(999999999);
        if ($243) {
         $$5486626 = $$6;$$sink547625 = $238;
        } else {
         $$5486$lcssa = $$6;$$sink547$lcssa = $238;
         break;
        }
       }
      } else {
       $$5486$lcssa = $$3484$lcssa;$$sink547$lcssa = $212;
      }
      $244 = $$5486$lcssa;
      $245 = (($185) - ($244))|0;
      $246 = $245 >> 2;
      $247 = ($246*9)|0;
      $248 = HEAP32[$$5486$lcssa>>2]|0;
      $249 = ($248>>>0)<(10);
      if ($249) {
       $$4492 = $$sink547$lcssa;$$4518 = $247;$$8 = $$5486$lcssa;
      } else {
       $$2516621 = $247;$$2532620 = 10;
       while(1) {
        $250 = ($$2532620*10)|0;
        $251 = (($$2516621) + 1)|0;
        $252 = ($248>>>0)<($250>>>0);
        if ($252) {
         $$4492 = $$sink547$lcssa;$$4518 = $251;$$8 = $$5486$lcssa;
         break;
        } else {
         $$2516621 = $251;$$2532620 = $250;
        }
       }
      }
     } else {
      $$4492 = $212;$$4518 = $$1515;$$8 = $$3484$lcssa;
     }
    }
    $253 = ((($$4492)) + 4|0);
    $254 = ($$3501$lcssa>>>0)>($253>>>0);
    $$$3501 = $254 ? $253 : $$3501$lcssa;
    $$5519$ph = $$4518;$$7505$ph = $$$3501;$$9$ph = $$8;
   } else {
    $$5519$ph = $$1515;$$7505$ph = $$3501$lcssa;$$9$ph = $$3484$lcssa;
   }
   $$7505 = $$7505$ph;
   while(1) {
    $255 = ($$7505>>>0)>($$9$ph>>>0);
    if (!($255)) {
     $$lcssa675 = 0;
     break;
    }
    $256 = ((($$7505)) + -4|0);
    $257 = HEAP32[$256>>2]|0;
    $258 = ($257|0)==(0);
    if ($258) {
     $$7505 = $256;
    } else {
     $$lcssa675 = 1;
     break;
    }
   }
   $259 = (0 - ($$5519$ph))|0;
   do {
    if ($198) {
     $not$ = $199 ^ 1;
     $260 = $not$&1;
     $$540$ = (($$540) + ($260))|0;
     $261 = ($$540$|0)>($$5519$ph|0);
     $262 = ($$5519$ph|0)>(-5);
     $or$cond6 = $261 & $262;
     if ($or$cond6) {
      $263 = (($5) + -1)|0;
      $$neg568 = (($$540$) + -1)|0;
      $264 = (($$neg568) - ($$5519$ph))|0;
      $$0479 = $263;$$2476 = $264;
     } else {
      $265 = (($5) + -2)|0;
      $266 = (($$540$) + -1)|0;
      $$0479 = $265;$$2476 = $266;
     }
     $267 = $4 & 8;
     $268 = ($267|0)==(0);
     if ($268) {
      if ($$lcssa675) {
       $269 = ((($$7505)) + -4|0);
       $270 = HEAP32[$269>>2]|0;
       $271 = ($270|0)==(0);
       if ($271) {
        $$2529 = 9;
       } else {
        $272 = (($270>>>0) % 10)&-1;
        $273 = ($272|0)==(0);
        if ($273) {
         $$1528617 = 0;$$3533616 = 10;
         while(1) {
          $274 = ($$3533616*10)|0;
          $275 = (($$1528617) + 1)|0;
          $276 = (($270>>>0) % ($274>>>0))&-1;
          $277 = ($276|0)==(0);
          if ($277) {
           $$1528617 = $275;$$3533616 = $274;
          } else {
           $$2529 = $275;
           break;
          }
         }
        } else {
         $$2529 = 0;
        }
       }
      } else {
       $$2529 = 9;
      }
      $278 = $$0479 | 32;
      $279 = ($278|0)==(102);
      $280 = $$7505;
      $281 = (($280) - ($185))|0;
      $282 = $281 >> 2;
      $283 = ($282*9)|0;
      $284 = (($283) + -9)|0;
      if ($279) {
       $285 = (($284) - ($$2529))|0;
       $286 = ($285|0)>(0);
       $$548 = $286 ? $285 : 0;
       $287 = ($$2476|0)<($$548|0);
       $$2476$$549 = $287 ? $$2476 : $$548;
       $$1480 = $$0479;$$3477 = $$2476$$549;$$pre$phi698Z2D = 0;
       break;
      } else {
       $288 = (($284) + ($$5519$ph))|0;
       $289 = (($288) - ($$2529))|0;
       $290 = ($289|0)>(0);
       $$550 = $290 ? $289 : 0;
       $291 = ($$2476|0)<($$550|0);
       $$2476$$551 = $291 ? $$2476 : $$550;
       $$1480 = $$0479;$$3477 = $$2476$$551;$$pre$phi698Z2D = 0;
       break;
      }
     } else {
      $$1480 = $$0479;$$3477 = $$2476;$$pre$phi698Z2D = $267;
     }
    } else {
     $$pre697 = $4 & 8;
     $$1480 = $5;$$3477 = $$540;$$pre$phi698Z2D = $$pre697;
    }
   } while(0);
   $292 = $$3477 | $$pre$phi698Z2D;
   $293 = ($292|0)!=(0);
   $294 = $293&1;
   $295 = $$1480 | 32;
   $296 = ($295|0)==(102);
   if ($296) {
    $297 = ($$5519$ph|0)>(0);
    $298 = $297 ? $$5519$ph : 0;
    $$2513 = 0;$$pn = $298;
   } else {
    $299 = ($$5519$ph|0)<(0);
    $300 = $299 ? $259 : $$5519$ph;
    $301 = ($300|0)<(0);
    $302 = $301 << 31 >> 31;
    $303 = (_fmt_u($300,$302,$11)|0);
    $304 = $11;
    $305 = $303;
    $306 = (($304) - ($305))|0;
    $307 = ($306|0)<(2);
    if ($307) {
     $$1512610 = $303;
     while(1) {
      $308 = ((($$1512610)) + -1|0);
      HEAP8[$308>>0] = 48;
      $309 = $308;
      $310 = (($304) - ($309))|0;
      $311 = ($310|0)<(2);
      if ($311) {
       $$1512610 = $308;
      } else {
       $$1512$lcssa = $308;
       break;
      }
     }
    } else {
     $$1512$lcssa = $303;
    }
    $312 = $$5519$ph >> 31;
    $313 = $312 & 2;
    $314 = (($313) + 43)|0;
    $315 = $314&255;
    $316 = ((($$1512$lcssa)) + -1|0);
    HEAP8[$316>>0] = $315;
    $317 = $$1480&255;
    $318 = ((($$1512$lcssa)) + -2|0);
    HEAP8[$318>>0] = $317;
    $319 = $318;
    $320 = (($304) - ($319))|0;
    $$2513 = $318;$$pn = $320;
   }
   $321 = (($$0520) + 1)|0;
   $322 = (($321) + ($$3477))|0;
   $$1526 = (($322) + ($294))|0;
   $323 = (($$1526) + ($$pn))|0;
   _pad_668($0,32,$2,$323,$4);
   _out($0,$$0521,$$0520);
   $324 = $4 ^ 65536;
   _pad_668($0,48,$2,$323,$324);
   if ($296) {
    $325 = ($$9$ph>>>0)>($$561>>>0);
    $$0496$$9 = $325 ? $$561 : $$9$ph;
    $326 = ((($8)) + 9|0);
    $327 = $326;
    $328 = ((($8)) + 8|0);
    $$5493600 = $$0496$$9;
    while(1) {
     $329 = HEAP32[$$5493600>>2]|0;
     $330 = (_fmt_u($329,0,$326)|0);
     $331 = ($$5493600|0)==($$0496$$9|0);
     if ($331) {
      $337 = ($330|0)==($326|0);
      if ($337) {
       HEAP8[$328>>0] = 48;
       $$1465 = $328;
      } else {
       $$1465 = $330;
      }
     } else {
      $332 = ($330>>>0)>($8>>>0);
      if ($332) {
       $333 = $330;
       $334 = (($333) - ($9))|0;
       _memset(($8|0),48,($334|0))|0;
       $$0464597 = $330;
       while(1) {
        $335 = ((($$0464597)) + -1|0);
        $336 = ($335>>>0)>($8>>>0);
        if ($336) {
         $$0464597 = $335;
        } else {
         $$1465 = $335;
         break;
        }
       }
      } else {
       $$1465 = $330;
      }
     }
     $338 = $$1465;
     $339 = (($327) - ($338))|0;
     _out($0,$$1465,$339);
     $340 = ((($$5493600)) + 4|0);
     $341 = ($340>>>0)>($$561>>>0);
     if ($341) {
      break;
     } else {
      $$5493600 = $340;
     }
    }
    $342 = ($292|0)==(0);
    if (!($342)) {
     _out($0,4174,1);
    }
    $343 = ($340>>>0)<($$7505>>>0);
    $344 = ($$3477|0)>(0);
    $345 = $343 & $344;
    if ($345) {
     $$4478593 = $$3477;$$6494592 = $340;
     while(1) {
      $346 = HEAP32[$$6494592>>2]|0;
      $347 = (_fmt_u($346,0,$326)|0);
      $348 = ($347>>>0)>($8>>>0);
      if ($348) {
       $349 = $347;
       $350 = (($349) - ($9))|0;
       _memset(($8|0),48,($350|0))|0;
       $$0463587 = $347;
       while(1) {
        $351 = ((($$0463587)) + -1|0);
        $352 = ($351>>>0)>($8>>>0);
        if ($352) {
         $$0463587 = $351;
        } else {
         $$0463$lcssa = $351;
         break;
        }
       }
      } else {
       $$0463$lcssa = $347;
      }
      $353 = ($$4478593|0)<(9);
      $354 = $353 ? $$4478593 : 9;
      _out($0,$$0463$lcssa,$354);
      $355 = ((($$6494592)) + 4|0);
      $356 = (($$4478593) + -9)|0;
      $357 = ($355>>>0)<($$7505>>>0);
      $358 = ($$4478593|0)>(9);
      $359 = $357 & $358;
      if ($359) {
       $$4478593 = $356;$$6494592 = $355;
      } else {
       $$4478$lcssa = $356;
       break;
      }
     }
    } else {
     $$4478$lcssa = $$3477;
    }
    $360 = (($$4478$lcssa) + 9)|0;
    _pad_668($0,48,$360,9,0);
   } else {
    $361 = ((($$9$ph)) + 4|0);
    $$7505$ = $$lcssa675 ? $$7505 : $361;
    $362 = ($$3477|0)>(-1);
    if ($362) {
     $363 = ((($8)) + 9|0);
     $364 = ($$pre$phi698Z2D|0)==(0);
     $365 = $363;
     $366 = (0 - ($9))|0;
     $367 = ((($8)) + 8|0);
     $$5605 = $$3477;$$7495604 = $$9$ph;
     while(1) {
      $368 = HEAP32[$$7495604>>2]|0;
      $369 = (_fmt_u($368,0,$363)|0);
      $370 = ($369|0)==($363|0);
      if ($370) {
       HEAP8[$367>>0] = 48;
       $$0 = $367;
      } else {
       $$0 = $369;
      }
      $371 = ($$7495604|0)==($$9$ph|0);
      do {
       if ($371) {
        $375 = ((($$0)) + 1|0);
        _out($0,$$0,1);
        $376 = ($$5605|0)<(1);
        $or$cond556 = $364 & $376;
        if ($or$cond556) {
         $$2 = $375;
         break;
        }
        _out($0,4174,1);
        $$2 = $375;
       } else {
        $372 = ($$0>>>0)>($8>>>0);
        if (!($372)) {
         $$2 = $$0;
         break;
        }
        $scevgep686 = (($$0) + ($366)|0);
        $scevgep686687 = $scevgep686;
        _memset(($8|0),48,($scevgep686687|0))|0;
        $$1601 = $$0;
        while(1) {
         $373 = ((($$1601)) + -1|0);
         $374 = ($373>>>0)>($8>>>0);
         if ($374) {
          $$1601 = $373;
         } else {
          $$2 = $373;
          break;
         }
        }
       }
      } while(0);
      $377 = $$2;
      $378 = (($365) - ($377))|0;
      $379 = ($$5605|0)>($378|0);
      $380 = $379 ? $378 : $$5605;
      _out($0,$$2,$380);
      $381 = (($$5605) - ($378))|0;
      $382 = ((($$7495604)) + 4|0);
      $383 = ($382>>>0)<($$7505$>>>0);
      $384 = ($381|0)>(-1);
      $385 = $383 & $384;
      if ($385) {
       $$5605 = $381;$$7495604 = $382;
      } else {
       $$5$lcssa = $381;
       break;
      }
     }
    } else {
     $$5$lcssa = $$3477;
    }
    $386 = (($$5$lcssa) + 18)|0;
    _pad_668($0,48,$386,18,0);
    $387 = $11;
    $388 = $$2513;
    $389 = (($387) - ($388))|0;
    _out($0,$$2513,$389);
   }
   $390 = $4 ^ 8192;
   _pad_668($0,32,$2,$323,$390);
   $$sink560 = $323;
  }
 } while(0);
 $391 = ($$sink560|0)<($2|0);
 $$557 = $391 ? $2 : $$sink560;
 STACKTOP = sp;return ($$557|0);
}
function ___DOUBLE_BITS_669($0) {
 $0 = +$0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$1 = HEAP32[tempDoublePtr>>2]|0;
 $2 = HEAP32[tempDoublePtr+4>>2]|0;
 tempRet0 = ($2);
 return ($1|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $storemerge = 0, $trunc$clear = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 $4 = (_bitshift64Lshr(($2|0),($3|0),52)|0);
 $5 = tempRet0;
 $6 = $4&65535;
 $trunc$clear = $6 & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $7 = $0 != 0.0;
  if ($7) {
   $8 = $0 * 1.8446744073709552E+19;
   $9 = (+_frexp($8,$1));
   $10 = HEAP32[$1>>2]|0;
   $11 = (($10) + -64)|0;
   $$016 = $9;$storemerge = $11;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  HEAP32[$1>>2] = $storemerge;
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $12 = $4 & 2047;
  $13 = (($12) + -1022)|0;
  HEAP32[$1>>2] = $13;
  $14 = $3 & -2146435073;
  $15 = $14 | 1071644672;
  HEAP32[tempDoublePtr>>2] = $2;HEAP32[tempDoublePtr+4>>2] = $15;$16 = +HEAPF64[tempDoublePtr>>3];
  $$0 = $16;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    HEAP8[$0>>0] = $5;
    $$0 = 1;
    break;
   }
   $6 = (___pthread_self_442()|0);
   $7 = ((($6)) + 188|0);
   $8 = HEAP32[$7>>2]|0;
   $9 = (Atomics_load(HEAP32,$8>>2)|0);
   $10 = ($9|0)==(0|0);
   if ($10) {
    $11 = $1 & -128;
    $12 = ($11|0)==(57216);
    if ($12) {
     $14 = $1&255;
     HEAP8[$0>>0] = $14;
     $$0 = 1;
     break;
    } else {
     $13 = (___errno_location()|0);
     HEAP32[$13>>2] = 84;
     $$0 = -1;
     break;
    }
   }
   $15 = ($1>>>0)<(2048);
   if ($15) {
    $16 = $1 >>> 6;
    $17 = $16 | 192;
    $18 = $17&255;
    $19 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $18;
    $20 = $1 & 63;
    $21 = $20 | 128;
    $22 = $21&255;
    HEAP8[$19>>0] = $22;
    $$0 = 2;
    break;
   }
   $23 = ($1>>>0)<(55296);
   $24 = $1 & -8192;
   $25 = ($24|0)==(57344);
   $or$cond = $23 | $25;
   if ($or$cond) {
    $26 = $1 >>> 12;
    $27 = $26 | 224;
    $28 = $27&255;
    $29 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $28;
    $30 = $1 >>> 6;
    $31 = $30 & 63;
    $32 = $31 | 128;
    $33 = $32&255;
    $34 = ((($0)) + 2|0);
    HEAP8[$29>>0] = $33;
    $35 = $1 & 63;
    $36 = $35 | 128;
    $37 = $36&255;
    HEAP8[$34>>0] = $37;
    $$0 = 3;
    break;
   }
   $38 = (($1) + -65536)|0;
   $39 = ($38>>>0)<(1048576);
   if ($39) {
    $40 = $1 >>> 18;
    $41 = $40 | 240;
    $42 = $41&255;
    $43 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $42;
    $44 = $1 >>> 12;
    $45 = $44 & 63;
    $46 = $45 | 128;
    $47 = $46&255;
    $48 = ((($0)) + 2|0);
    HEAP8[$43>>0] = $47;
    $49 = $1 >>> 6;
    $50 = $49 & 63;
    $51 = $50 | 128;
    $52 = $51&255;
    $53 = ((($0)) + 3|0);
    HEAP8[$48>>0] = $52;
    $54 = $1 & 63;
    $55 = $54 | 128;
    $56 = $55&255;
    HEAP8[$53>>0] = $56;
    $$0 = 4;
    break;
   } else {
    $57 = (___errno_location()|0);
    HEAP32[$57>>2] = 84;
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___pthread_self_442() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function ___pthread_self_105() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function ___strerror_l($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$012$lcssa = 0, $$01214 = 0, $$016 = 0, $$113 = 0, $$115 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $$016 = 0;
 while(1) {
  $3 = (4176 + ($$016)|0);
  $4 = HEAP8[$3>>0]|0;
  $5 = $4&255;
  $6 = ($5|0)==($0|0);
  if ($6) {
   label = 2;
   break;
  }
  $7 = (($$016) + 1)|0;
  $8 = ($7|0)==(87);
  if ($8) {
   $$01214 = 4264;$$115 = 87;
   label = 5;
   break;
  } else {
   $$016 = $7;
  }
 }
 if ((label|0) == 2) {
  $2 = ($$016|0)==(0);
  if ($2) {
   $$012$lcssa = 4264;
  } else {
   $$01214 = 4264;$$115 = $$016;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$113 = $$01214;
   while(1) {
    $9 = HEAP8[$$113>>0]|0;
    $10 = ($9<<24>>24)==(0);
    $11 = ((($$113)) + 1|0);
    if ($10) {
     break;
    } else {
     $$113 = $11;
    }
   }
   $12 = (($$115) + -1)|0;
   $13 = ($12|0)==(0);
   if ($13) {
    $$012$lcssa = $11;
    break;
   } else {
    $$01214 = $11;$$115 = $12;
    label = 5;
   }
  }
 }
 $14 = ((($1)) + 20|0);
 $15 = (Atomics_load(HEAP32,$14>>2)|0);
 $16 = (___lctrans($$012$lcssa,$15)|0);
 return ($16|0);
}
function ___lctrans($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (___lctrans_impl($0,$1)|0);
 return ($2|0);
}
function ___lctrans_impl($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = HEAP32[$1>>2]|0;
  $4 = ((($1)) + 4|0);
  $5 = HEAP32[$4>>2]|0;
  $6 = (___mo_lookup($3,$5,$0)|0);
  $$0 = $6;
 }
 $7 = ($$0|0)!=(0|0);
 $8 = $7 ? $$0 : $0;
 return ($8|0);
}
function ___mo_lookup($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$090 = 0, $$094 = 0, $$191 = 0, $$195 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond102 = 0, $or$cond104 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = HEAP32[$0>>2]|0;
 $4 = (($3) + 1794895138)|0;
 $5 = ((($0)) + 8|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = (_swapc($6,$4)|0);
 $8 = ((($0)) + 12|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = (_swapc($9,$4)|0);
 $11 = ((($0)) + 16|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = (_swapc($12,$4)|0);
 $14 = $1 >>> 2;
 $15 = ($7>>>0)<($14>>>0);
 L1: do {
  if ($15) {
   $16 = $7 << 2;
   $17 = (($1) - ($16))|0;
   $18 = ($10>>>0)<($17>>>0);
   $19 = ($13>>>0)<($17>>>0);
   $or$cond = $18 & $19;
   if ($or$cond) {
    $20 = $13 | $10;
    $21 = $20 & 3;
    $22 = ($21|0)==(0);
    if ($22) {
     $23 = $10 >>> 2;
     $24 = $13 >>> 2;
     $$090 = 0;$$094 = $7;
     while(1) {
      $25 = $$094 >>> 1;
      $26 = (($$090) + ($25))|0;
      $27 = $26 << 1;
      $28 = (($27) + ($23))|0;
      $29 = (($0) + ($28<<2)|0);
      $30 = HEAP32[$29>>2]|0;
      $31 = (_swapc($30,$4)|0);
      $32 = (($28) + 1)|0;
      $33 = (($0) + ($32<<2)|0);
      $34 = HEAP32[$33>>2]|0;
      $35 = (_swapc($34,$4)|0);
      $36 = ($35>>>0)<($1>>>0);
      $37 = (($1) - ($35))|0;
      $38 = ($31>>>0)<($37>>>0);
      $or$cond102 = $36 & $38;
      if (!($or$cond102)) {
       $$4 = 0;
       break L1;
      }
      $39 = (($35) + ($31))|0;
      $40 = (($0) + ($39)|0);
      $41 = HEAP8[$40>>0]|0;
      $42 = ($41<<24>>24)==(0);
      if (!($42)) {
       $$4 = 0;
       break L1;
      }
      $43 = (($0) + ($35)|0);
      $44 = (_strcmp($2,$43)|0);
      $45 = ($44|0)==(0);
      if ($45) {
       break;
      }
      $62 = ($$094|0)==(1);
      $63 = ($44|0)<(0);
      $64 = (($$094) - ($25))|0;
      $$195 = $63 ? $25 : $64;
      $$191 = $63 ? $$090 : $26;
      if ($62) {
       $$4 = 0;
       break L1;
      } else {
       $$090 = $$191;$$094 = $$195;
      }
     }
     $46 = (($27) + ($24))|0;
     $47 = (($0) + ($46<<2)|0);
     $48 = HEAP32[$47>>2]|0;
     $49 = (_swapc($48,$4)|0);
     $50 = (($46) + 1)|0;
     $51 = (($0) + ($50<<2)|0);
     $52 = HEAP32[$51>>2]|0;
     $53 = (_swapc($52,$4)|0);
     $54 = ($53>>>0)<($1>>>0);
     $55 = (($1) - ($53))|0;
     $56 = ($49>>>0)<($55>>>0);
     $or$cond104 = $54 & $56;
     if ($or$cond104) {
      $57 = (($0) + ($53)|0);
      $58 = (($53) + ($49))|0;
      $59 = (($0) + ($58)|0);
      $60 = HEAP8[$59>>0]|0;
      $61 = ($60<<24>>24)==(0);
      $$ = $61 ? $57 : 0;
      $$4 = $$;
     } else {
      $$4 = 0;
     }
    } else {
     $$4 = 0;
    }
   } else {
    $$4 = 0;
   }
  } else {
   $$4 = 0;
  }
 } while(0);
 return ($$4|0);
}
function _swapc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0);
 $3 = (_llvm_bswap_i32(($0|0))|0);
 $$ = $2 ? $0 : $3;
 return ($$|0);
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$038 = 0, $$042 = 0, $$1 = 0, $$139 = 0, $$141 = 0, $$143 = 0, $$pre = 0, $$pre47 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = HEAP32[$3>>2]|0;
   $12 = $$pre;
   label = 5;
  } else {
   $$1 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = HEAP32[$9>>2]|0;
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = (FUNCTION_TABLE_iiii[$16 & 7]($2,$0,$1)|0);
    $$1 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = HEAP8[$18>>0]|0;
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$038 = $1;
     while(1) {
      $21 = ($$038|0)==(0);
      if ($21) {
       $$139 = 0;$$141 = $0;$$143 = $1;$31 = $14;
       break L10;
      }
      $22 = (($$038) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = HEAP8[$23>>0]|0;
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$038 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = HEAP32[$26>>2]|0;
     $28 = (FUNCTION_TABLE_iiii[$27 & 7]($2,$0,$$038)|0);
     $29 = ($28>>>0)<($$038>>>0);
     if ($29) {
      $$1 = $28;
      break L5;
     }
     $30 = (($0) + ($$038)|0);
     $$042 = (($1) - ($$038))|0;
     $$pre47 = HEAP32[$9>>2]|0;
     $$139 = $$038;$$141 = $30;$$143 = $$042;$31 = $$pre47;
    } else {
     $$139 = 0;$$141 = $0;$$143 = $1;$31 = $14;
    }
   } while(0);
   _memcpy(($31|0),($$141|0),($$143|0))|0;
   $32 = HEAP32[$9>>2]|0;
   $33 = (($32) + ($$143)|0);
   HEAP32[$9>>2] = $33;
   $34 = (($$139) + ($$143))|0;
   $$1 = $34;
  }
 } while(0);
 return ($$1|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 HEAP8[$1>>0] = $6;
 $7 = HEAP32[$0>>2]|0;
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  HEAP32[$11>>2] = 0;
  $12 = ((($0)) + 4|0);
  HEAP32[$12>>2] = 0;
  $13 = ((($0)) + 44|0);
  $14 = HEAP32[$13>>2]|0;
  $15 = ((($0)) + 28|0);
  HEAP32[$15>>2] = $14;
  $16 = ((($0)) + 20|0);
  HEAP32[$16>>2] = $14;
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = HEAP32[$18>>2]|0;
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  HEAP32[$21>>2] = $20;
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  HEAP32[$0>>2] = $10;
  $$0 = -1;
 }
 return ($$0|0);
}
function _sn_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$cast = 0, $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 16|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($0)) + 20|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = (($4) - ($6))|0;
 $8 = ($7>>>0)>($2>>>0);
 $$ = $8 ? $2 : $7;
 $$cast = $6;
 _memcpy(($$cast|0),($1|0),($$|0))|0;
 $9 = HEAP32[$5>>2]|0;
 $10 = (($9) + ($$)|0);
 HEAP32[$5>>2] = $10;
 return ($2|0);
}
function _strnlen($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_memchr($0,0,$1)|0);
 $3 = ($2|0)==(0|0);
 $4 = $2;
 $5 = $0;
 $6 = (($4) - ($5))|0;
 $7 = $3 ? $1 : $6;
 return ($7|0);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$015$lcssa = 0, $$01519 = 0, $$1$lcssa = 0, $$pn = 0, $$pre = 0, $$sink = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01519 = $0;$23 = $1;
   while(1) {
    $4 = HEAP8[$$01519>>0]|0;
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$sink = $23;
     break L1;
    }
    $6 = ((($$01519)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01519 = $6;$23 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = HEAP32[$$0>>2]|0;
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn = $$0;
   while(1) {
    $19 = ((($$pn)) + 1|0);
    $$pre = HEAP8[$19>>0]|0;
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$sink = $21;
 }
 $22 = (($$sink) - ($1))|0;
 return ($22|0);
}
function _strchr($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (___strchrnul($0,$1)|0);
 $3 = HEAP8[$2>>0]|0;
 $4 = $1&255;
 $5 = ($3<<24>>24)==($4<<24>>24);
 $6 = $5 ? $2 : 0;
 return ($6|0);
}
function ___strchrnul($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$029$lcssa = 0, $$02936 = 0, $$030$lcssa = 0, $$03039 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond33 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1 & 255;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $8 = (_strlen($0)|0);
   $9 = (($0) + ($8)|0);
   $$0 = $9;
  } else {
   $4 = $0;
   $5 = $4 & 3;
   $6 = ($5|0)==(0);
   if ($6) {
    $$030$lcssa = $0;
   } else {
    $7 = $1&255;
    $$03039 = $0;
    while(1) {
     $10 = HEAP8[$$03039>>0]|0;
     $11 = ($10<<24>>24)==(0);
     $12 = ($10<<24>>24)==($7<<24>>24);
     $or$cond = $11 | $12;
     if ($or$cond) {
      $$0 = $$03039;
      break L1;
     }
     $13 = ((($$03039)) + 1|0);
     $14 = $13;
     $15 = $14 & 3;
     $16 = ($15|0)==(0);
     if ($16) {
      $$030$lcssa = $13;
      break;
     } else {
      $$03039 = $13;
     }
    }
   }
   $17 = Math_imul($2, 16843009)|0;
   $18 = HEAP32[$$030$lcssa>>2]|0;
   $19 = (($18) + -16843009)|0;
   $20 = $18 & -2139062144;
   $21 = $20 ^ -2139062144;
   $22 = $21 & $19;
   $23 = ($22|0)==(0);
   L10: do {
    if ($23) {
     $$02936 = $$030$lcssa;$25 = $18;
     while(1) {
      $24 = $25 ^ $17;
      $26 = (($24) + -16843009)|0;
      $27 = $24 & -2139062144;
      $28 = $27 ^ -2139062144;
      $29 = $28 & $26;
      $30 = ($29|0)==(0);
      if (!($30)) {
       $$029$lcssa = $$02936;
       break L10;
      }
      $31 = ((($$02936)) + 4|0);
      $32 = HEAP32[$31>>2]|0;
      $33 = (($32) + -16843009)|0;
      $34 = $32 & -2139062144;
      $35 = $34 ^ -2139062144;
      $36 = $35 & $33;
      $37 = ($36|0)==(0);
      if ($37) {
       $$02936 = $31;$25 = $32;
      } else {
       $$029$lcssa = $31;
       break;
      }
     }
    } else {
     $$029$lcssa = $$030$lcssa;
    }
   } while(0);
   $38 = $1&255;
   $$1 = $$029$lcssa;
   while(1) {
    $39 = HEAP8[$$1>>0]|0;
    $40 = ($39<<24>>24)==(0);
    $41 = ($39<<24>>24)==($38<<24>>24);
    $or$cond33 = $40 | $41;
    $42 = ((($$1)) + 1|0);
    if ($or$cond33) {
     $$0 = $$1;
     break;
    } else {
     $$1 = $42;
    }
   }
  }
 } while(0);
 return ($$0|0);
}
function ___ofl_lock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___lock((7192|0));
 return (7200|0);
}
function ___ofl_unlock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___unlock((7192|0));
 return;
}
function _fflush($0) {
 $0 = $0|0;
 var $$0 = 0, $$023 = 0, $$02325 = 0, $$02327 = 0, $$024$lcssa = 0, $$02426 = 0, $$1 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 do {
  if ($1) {
   $8 = (Atomics_load(HEAP32,775)|0);
   $9 = ($8|0)==(0|0);
   if ($9) {
    $29 = 0;
   } else {
    $10 = (Atomics_load(HEAP32,775)|0);
    $11 = (_fflush($10)|0);
    $29 = $11;
   }
   $12 = (___ofl_lock()|0);
   $$02325 = HEAP32[$12>>2]|0;
   $13 = ($$02325|0)==(0|0);
   if ($13) {
    $$024$lcssa = $29;
   } else {
    $$02327 = $$02325;$$02426 = $29;
    while(1) {
     $14 = ((($$02327)) + 76|0);
     $15 = (Atomics_load(HEAP32,$14>>2)|0);
     $16 = ($15|0)>(-1);
     if ($16) {
      $17 = (___lockfile($$02327)|0);
      $26 = $17;
     } else {
      $26 = 0;
     }
     $18 = ((($$02327)) + 20|0);
     $19 = HEAP32[$18>>2]|0;
     $20 = ((($$02327)) + 28|0);
     $21 = HEAP32[$20>>2]|0;
     $22 = ($19>>>0)>($21>>>0);
     if ($22) {
      $23 = (___fflush_unlocked($$02327)|0);
      $24 = $23 | $$02426;
      $$1 = $24;
     } else {
      $$1 = $$02426;
     }
     $25 = ($26|0)==(0);
     if (!($25)) {
      ___unlockfile($$02327);
     }
     $27 = ((($$02327)) + 56|0);
     $$023 = HEAP32[$27>>2]|0;
     $28 = ($$023|0)==(0|0);
     if ($28) {
      $$024$lcssa = $$1;
      break;
     } else {
      $$02327 = $$023;$$02426 = $$1;
     }
    }
   }
   ___ofl_unlock();
   $$0 = $$024$lcssa;
  } else {
   $2 = ((($0)) + 76|0);
   $3 = (Atomics_load(HEAP32,$2>>2)|0);
   $4 = ($3|0)>(-1);
   if (!($4)) {
    $5 = (___fflush_unlocked($0)|0);
    $$0 = $5;
    break;
   }
   $6 = (___lockfile($0)|0);
   $phitmp = ($6|0)==(0);
   $7 = (___fflush_unlocked($0)|0);
   if ($phitmp) {
    $$0 = $7;
   } else {
    ___unlockfile($0);
    $$0 = $7;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___fflush_unlocked($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 20|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($0)) + 28|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($2>>>0)>($4>>>0);
 if ($5) {
  $6 = ((($0)) + 36|0);
  $7 = HEAP32[$6>>2]|0;
  (FUNCTION_TABLE_iiii[$7 & 7]($0,0,0)|0);
  $8 = HEAP32[$1>>2]|0;
  $9 = ($8|0)==(0|0);
  if ($9) {
   $$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $10 = ((($0)) + 4|0);
  $11 = HEAP32[$10>>2]|0;
  $12 = ((($0)) + 8|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($11>>>0)<($13>>>0);
  if ($14) {
   $15 = $11;
   $16 = $13;
   $17 = (($15) - ($16))|0;
   $18 = ((($0)) + 40|0);
   $19 = HEAP32[$18>>2]|0;
   (FUNCTION_TABLE_iiii[$19 & 7]($0,$17,1)|0);
  }
  $20 = ((($0)) + 16|0);
  HEAP32[$20>>2] = 0;
  HEAP32[$3>>2] = 0;
  HEAP32[$1>>2] = 0;
  HEAP32[$12>>2] = 0;
  HEAP32[$10>>2] = 0;
  $$0 = 0;
 }
 return ($$0|0);
}
function _printf($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 HEAP32[$1>>2] = $varargs;
 $2 = HEAP32[743]|0;
 $3 = (_vfprintf($2,$0,$1)|0);
 STACKTOP = sp;return ($3|0);
}
function ___pthread_tsd_run_dtors() {
 var $$02427 = 0, $$026 = 0, $$125 = 0, $$2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 $1 = ((($0)) + 60|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0);
 if ($3) {
  return;
 }
 $4 = ((($0)) + 116|0);
 $$02427 = 0;
 while(1) {
  $$026 = 0;$$125 = 0;
  while(1) {
   $5 = HEAP32[$4>>2]|0;
   $6 = (($5) + ($$026<<2)|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = ($7|0)==(0|0);
   if ($8) {
    $$2 = $$125;
   } else {
    $9 = (7772 + ($$026<<2)|0);
    $10 = (Atomics_load(HEAP32,$9>>2)|0);
    $11 = ($10|0)==(0|0);
    if ($11) {
     $$2 = $$125;
    } else {
     HEAP32[$6>>2] = 0;
     $12 = (Atomics_load(HEAP32,$9>>2)|0);
     FUNCTION_TABLE_vi[$12 & 0]($7);
     $$2 = 1;
    }
   }
   $13 = (($$026) + 1)|0;
   $exitcond = ($13|0)==(128);
   if ($exitcond) {
    break;
   } else {
    $$026 = $13;$$125 = $$2;
   }
  }
  $14 = (($$02427) + 1)|0;
  $15 = ($$2|0)!=(0);
  $16 = ($$02427|0)<(3);
  $17 = $16 & $15;
  if ($17) {
   $$02427 = $14;
  } else {
   break;
  }
 }
 return;
}
function _emscripten_async_run_in_main_thread($0) {
 $0 = $0|0;
 var $$0 = 0, $$0$in = 0, $$0$in19 = 0, $$0$lcssa = 0, $$020 = 0, $$expand_i1_val = 0, $$lcssa = 0, $$lcssa18 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $call_queue$init$val = 0, $call_queue$init$val$pre_trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  ___assert_fail((6480|0),(6286|0),251,(6485|0));
  // unreachable;
 }
 $2 = (_emscripten_is_main_runtime_thread()|0);
 $3 = ($2|0)==(0);
 if (!($3)) {
  __do_call($0);
  return;
 }
 (___pthread_mutex_lock(7216)|0);
 $call_queue$init$val$pre_trunc = HEAP8[11636]|0;
 $call_queue$init$val = $call_queue$init$val$pre_trunc&1;
 if (!($call_queue$init$val)) {
  $$expand_i1_val = 1;
  HEAP8[11636] = $$expand_i1_val;
 }
 $4 = (Atomics_load(HEAP32, 1811)|0);
 $5 = (Atomics_load(HEAP32, 1812)|0);
 $$0$in19 = (($5) + 1)|0;
 $$020 = (($$0$in19|0) % 128)&-1;
 $6 = ($$020|0)==($4|0);
 if ($6) {
  $7 = $4;
  while(1) {
   (___pthread_mutex_unlock(7216)|0);
   (_emscripten_futex_wait((7244|0),($7|0),inf)|0);
   (___pthread_mutex_lock(7216)|0);
   $8 = (Atomics_load(HEAP32, 1811)|0);
   $9 = (Atomics_load(HEAP32, 1812)|0);
   $$0$in = (($9) + 1)|0;
   $$0 = (($$0$in|0) % 128)&-1;
   $10 = ($$0|0)==($8|0);
   if ($10) {
    $7 = $8;
   } else {
    $$0$lcssa = $$0;$$lcssa = $9;$$lcssa18 = $8;
    break;
   }
  }
 } else {
  $$0$lcssa = $$020;$$lcssa = $5;$$lcssa18 = $4;
 }
 $11 = (7252 + ($$lcssa<<2)|0);
 HEAP32[$11>>2] = $0;
 $12 = ($$lcssa18|0)==($$lcssa|0);
 if ($12) {
  $13 = _emscripten_asm_const_i(0)|0;
 }
 $14 = (Atomics_store(HEAP32, 1812,$$0$lcssa)|0);
 (___pthread_mutex_unlock(7216)|0);
 return;
}
function _emscripten_main_thread_process_queued_calls() {
 var $$0910 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_emscripten_is_main_runtime_thread()|0);
 $1 = ($0|0)==(0);
 if ($1) {
  ___assert_fail((6164|0),(6286|0),415,(6376|0));
  // unreachable;
 }
 $2 = (_emscripten_is_main_runtime_thread()|0);
 $3 = ($2|0)==(0);
 $4 = HEAP32[1803]|0;
 $5 = ($4|0)!=(0);
 $or$cond = $3 | $5;
 if ($or$cond) {
  return;
 }
 HEAP32[1803] = 1;
 (___pthread_mutex_lock(7216)|0);
 $6 = (Atomics_load(HEAP32, 1811)|0);
 $7 = (Atomics_load(HEAP32, 1812)|0);
 $8 = ($6|0)==($7|0);
 (___pthread_mutex_unlock(7216)|0);
 if (!($8)) {
  $$0910 = $6;
  while(1) {
   $9 = (7252 + ($$0910<<2)|0);
   $10 = HEAP32[$9>>2]|0;
   __do_call($10);
   (___pthread_mutex_lock(7216)|0);
   $11 = (($$0910) + 1)|0;
   $12 = (($11|0) % 128)&-1;
   $13 = (Atomics_store(HEAP32, 1811,$12)|0);
   $14 = (Atomics_load(HEAP32, 1812)|0);
   $15 = ($12|0)==($14|0);
   (___pthread_mutex_unlock(7216)|0);
   if ($15) {
    break;
   } else {
    $$0910 = $12;
   }
  }
 }
 (_emscripten_futex_wake((7244|0),2147483647)|0);
 HEAP32[1803] = 0;
 return;
}
function _emscripten_sync_run_in_main_thread($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _emscripten_async_run_in_main_thread($0);
 (_emscripten_wait_for_call_v($0,inf)|0);
 return;
}
function _emscripten_sync_run_in_main_thread_0($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $1 = sp;
 dest=$1; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$1>>2] = $0;
 $2 = ((($1)) + 80|0);
 HEAP32[$2>>2] = 0;
 _emscripten_async_run_in_main_thread($1);
 (_emscripten_wait_for_call_v($1,inf)|0);
 $3 = HEAP32[$2>>2]|0;
 STACKTOP = sp;return ($3|0);
}
function _emscripten_sync_run_in_main_thread_1($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $2 = sp;
 dest=$2; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$2>>2] = $0;
 $3 = ((($2)) + 16|0);
 HEAP32[$3>>2] = $1;
 $4 = ((($2)) + 80|0);
 HEAP32[$4>>2] = 0;
 _emscripten_async_run_in_main_thread($2);
 (_emscripten_wait_for_call_v($2,inf)|0);
 $5 = HEAP32[$4>>2]|0;
 STACKTOP = sp;return ($5|0);
}
function _emscripten_sync_run_in_main_thread_2($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $3 = sp;
 dest=$3; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$3>>2] = $0;
 $4 = ((($3)) + 16|0);
 HEAP32[$4>>2] = $1;
 $5 = ((($3)) + 24|0);
 HEAP32[$5>>2] = $2;
 $6 = ((($3)) + 80|0);
 HEAP32[$6>>2] = 0;
 _emscripten_async_run_in_main_thread($3);
 (_emscripten_wait_for_call_v($3,inf)|0);
 $7 = HEAP32[$6>>2]|0;
 STACKTOP = sp;return ($7|0);
}
function _emscripten_sync_run_in_main_thread_3($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $4 = sp;
 dest=$4; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$4>>2] = $0;
 $5 = ((($4)) + 16|0);
 HEAP32[$5>>2] = $1;
 $6 = ((($4)) + 24|0);
 HEAP32[$6>>2] = $2;
 $7 = ((($4)) + 32|0);
 HEAP32[$7>>2] = $3;
 $8 = ((($4)) + 80|0);
 HEAP32[$8>>2] = 0;
 _emscripten_async_run_in_main_thread($4);
 (_emscripten_wait_for_call_v($4,inf)|0);
 $9 = HEAP32[$8>>2]|0;
 STACKTOP = sp;return ($9|0);
}
function _emscripten_sync_run_in_main_thread_4($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $5 = sp;
 dest=$5; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$5>>2] = $0;
 $6 = ((($5)) + 16|0);
 HEAP32[$6>>2] = $1;
 $7 = ((($5)) + 24|0);
 HEAP32[$7>>2] = $2;
 $8 = ((($5)) + 32|0);
 HEAP32[$8>>2] = $3;
 $9 = ((($5)) + 40|0);
 HEAP32[$9>>2] = $4;
 $10 = ((($5)) + 80|0);
 HEAP32[$10>>2] = 0;
 _emscripten_async_run_in_main_thread($5);
 (_emscripten_wait_for_call_v($5,inf)|0);
 $11 = HEAP32[$10>>2]|0;
 STACKTOP = sp;return ($11|0);
}
function _emscripten_sync_run_in_main_thread_5($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $6 = sp;
 dest=$6; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$6>>2] = $0;
 $7 = ((($6)) + 16|0);
 HEAP32[$7>>2] = $1;
 $8 = ((($6)) + 24|0);
 HEAP32[$8>>2] = $2;
 $9 = ((($6)) + 32|0);
 HEAP32[$9>>2] = $3;
 $10 = ((($6)) + 40|0);
 HEAP32[$10>>2] = $4;
 $11 = ((($6)) + 48|0);
 HEAP32[$11>>2] = $5;
 $12 = ((($6)) + 80|0);
 HEAP32[$12>>2] = 0;
 _emscripten_async_run_in_main_thread($6);
 (_emscripten_wait_for_call_v($6,inf)|0);
 $13 = HEAP32[$12>>2]|0;
 STACKTOP = sp;return ($13|0);
}
function _emscripten_sync_run_in_main_thread_6($0,$1,$2,$3,$4,$5,$6) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = $6|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $7 = sp;
 dest=$7; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$7>>2] = $0;
 $8 = ((($7)) + 16|0);
 HEAP32[$8>>2] = $1;
 $9 = ((($7)) + 24|0);
 HEAP32[$9>>2] = $2;
 $10 = ((($7)) + 32|0);
 HEAP32[$10>>2] = $3;
 $11 = ((($7)) + 40|0);
 HEAP32[$11>>2] = $4;
 $12 = ((($7)) + 48|0);
 HEAP32[$12>>2] = $5;
 $13 = ((($7)) + 56|0);
 HEAP32[$13>>2] = $6;
 $14 = ((($7)) + 80|0);
 HEAP32[$14>>2] = 0;
 _emscripten_async_run_in_main_thread($7);
 (_emscripten_wait_for_call_v($7,inf)|0);
 $15 = HEAP32[$14>>2]|0;
 STACKTOP = sp;return ($15|0);
}
function _emscripten_sync_run_in_main_thread_7($0,$1,$2,$3,$4,$5,$6,$7) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = $6|0;
 $7 = $7|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $8 = sp;
 dest=$8; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$8>>2] = $0;
 $9 = ((($8)) + 16|0);
 HEAP32[$9>>2] = $1;
 $10 = ((($8)) + 24|0);
 HEAP32[$10>>2] = $2;
 $11 = ((($8)) + 32|0);
 HEAP32[$11>>2] = $3;
 $12 = ((($8)) + 40|0);
 HEAP32[$12>>2] = $4;
 $13 = ((($8)) + 48|0);
 HEAP32[$13>>2] = $5;
 $14 = ((($8)) + 56|0);
 HEAP32[$14>>2] = $6;
 $15 = ((($8)) + 64|0);
 HEAP32[$15>>2] = $7;
 $16 = ((($8)) + 80|0);
 HEAP32[$16>>2] = 0;
 _emscripten_async_run_in_main_thread($8);
 (_emscripten_wait_for_call_v($8,inf)|0);
 $17 = HEAP32[$16>>2]|0;
 STACKTOP = sp;return ($17|0);
}
function _emscripten_sync_run_in_main_thread_xprintf_varargs($0,$1,$2,$varargs) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $varargs = $varargs|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(240|0);
 $3 = sp + 96|0;
 $4 = sp + 112|0;
 $5 = sp;
 HEAP32[$3>>2] = $varargs;
 $6 = (_vsnprintf($4,128,$2,$3)|0);
 $7 = ($6|0)>(127);
 $8 = (($6) + 1)|0;
 if ($7) {
  $9 = (_malloc($8)|0);
  HEAP32[$3>>2] = $varargs;
  (_vsnprintf($9,$8,$2,$3)|0);
  $$0 = $9;
 } else {
  $$0 = $4;
 }
 dest=$5; stop=dest+96|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 HEAP32[$5>>2] = $0;
 $10 = $1;
 $11 = ((($5)) + 16|0);
 HEAP32[$11>>2] = $10;
 $12 = ((($5)) + 24|0);
 HEAP32[$12>>2] = $$0;
 $13 = ((($5)) + 80|0);
 HEAP32[$13>>2] = 0;
 _emscripten_async_run_in_main_thread($5);
 (_emscripten_wait_for_call_v($5,inf)|0);
 $14 = ($$0|0)==($4|0);
 if ($14) {
  $15 = HEAP32[$13>>2]|0;
  STACKTOP = sp;return ($15|0);
 }
 _free($$0);
 $15 = HEAP32[$13>>2]|0;
 STACKTOP = sp;return ($15|0);
}
function _proxy_main($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $2 = sp + 4|0;
 $3 = sp;
 $4 = (_emscripten_has_threading_support()|0);
 $5 = ($4|0)==(0);
 if ($5) {
  $15 = (Atomics_load(HEAP32,1801)|0);
  $16 = (Atomics_load(HEAP32,(7208)>>2)|0);
  $17 = (___call_main(($15|0),($16|0))|0);
  $$1 = $17;
  STACKTOP = sp;return ($$1|0);
 }
 (_pthread_attr_init($2)|0);
 (_pthread_attr_setdetachstate($2,0)|0);
 (_pthread_attr_setstacksize($2,131072)|0);
 $6 = _emscripten_asm_const_i(1)|0;
 $7 = ($6|0)==(0);
 if (!($7)) {
  $8 = ((($2)) + 36|0);
  HEAP32[$8>>2] = (6101);
 }
 Atomics_store(HEAP32,1801,$0)|0;
 Atomics_store(HEAP32,(7208)>>2,$1)|0;
 $9 = (_pthread_create(($3|0),($2|0),(7|0),(7204|0))|0);
 $10 = ($9|0)==(0);
 if ($10) {
  $14 = _emscripten_asm_const_i(2)|0;
  $$0 = 0;
 } else {
  $11 = (Atomics_load(HEAP32,1801)|0);
  $12 = (Atomics_load(HEAP32,(7208)>>2)|0);
  $13 = (___call_main(($11|0),($12|0))|0);
  $$0 = $13;
 }
 $$1 = $$0;
 STACKTOP = sp;return ($$1|0);
}
function _pthread_attr_init($0) {
 $0 = $0|0;
 var $$sroa$0 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $$sroa$0 = sp;
 dest=$$sroa$0; stop=dest+44|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 dest=$0; src=$$sroa$0; stop=dest+44|0; do { HEAP32[dest>>2]=HEAP32[src>>2]|0; dest=dest+4|0; src=src+4|0; } while ((dest|0) < (stop|0));
 STACKTOP = sp;return 0;
}
function _pthread_attr_setdetachstate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1>>>0)>(1);
 if ($2) {
  $$0 = 22;
 } else {
  $3 = ((($0)) + 12|0);
  HEAP32[$3>>2] = $1;
  $$0 = 0;
 }
 return ($$0|0);
}
function _pthread_attr_setstacksize($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (($1) + -2048)|0;
 $3 = ($2>>>0)>(1073741823);
 if ($3) {
  $$0 = 22;
  return ($$0|0);
 }
 $4 = (($1) + -81920)|0;
 $5 = ((($0)) + 8|0);
 HEAP32[$5>>2] = 0;
 HEAP32[$0>>2] = $4;
 $$0 = 0;
 return ($$0|0);
}
function ___emscripten_thread_main($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_pthread_self()|0);
 _emscripten_set_thread_name(($1|0),(6140|0));
 $2 = HEAP32[$0>>2]|0;
 $3 = ((($0)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (___call_main(($2|0),($4|0))|0);
 $6 = $5;
 return ($6|0);
}
function _pthread_attr_destroy($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _emscripten_wait_for_call_v($0,$1) {
 $0 = $0|0;
 $1 = +$1;
 var $$ = 0, $$01921 = 0.0, $$020$lcssa = 0, $$1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0.0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 8|0);
 $3 = (Atomics_load(HEAP32, $2>>2)|0);
 $4 = ($3|0)==(0);
 if (!($4)) {
  $$1 = $3;
  $13 = ($$1|0)==(0);
  $$ = $13 ? -8 : 0;
  return ($$|0);
 }
 $5 = (+_emscripten_get_now());
 $6 = $5 + $1;
 _emscripten_set_current_thread_status(5);
 $7 = $5 < $6;
 if ($7) {
  $$01921 = $5;
  while(1) {
   $8 = $6 - $$01921;
   (_emscripten_futex_wait(($2|0),0,(+$8))|0);
   $9 = (Atomics_load(HEAP32, $2>>2)|0);
   $10 = (+_emscripten_get_now());
   $11 = ($9|0)==(0);
   $12 = $10 < $6;
   $or$cond = $11 & $12;
   if ($or$cond) {
    $$01921 = $10;
   } else {
    $$020$lcssa = $9;
    break;
   }
  }
 } else {
  $$020$lcssa = 0;
 }
 _emscripten_set_current_thread_status(1);
 $$1 = $$020$lcssa;
 $13 = ($$1|0)==(0);
 $$ = $13 ? -8 : 0;
 return ($$|0);
}
function __do_call($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 do {
  switch ($1|0) {
  case 137:  {
   $2 = ((($0)) + 16|0);
   $3 = HEAP32[$2>>2]|0;
   $4 = ((($0)) + 24|0);
   $5 = HEAP32[$4>>2]|0;
   $6 = ((($0)) + 32|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = ((($0)) + 40|0);
   $9 = HEAP32[$8>>2]|0;
   $10 = (_pthread_create(($3|0),($5|0),($7|0),($9|0))|0);
   $11 = ((($0)) + 80|0);
   HEAP32[$11>>2] = $10;
   break;
  }
  case 138:  {
   $12 = ((($0)) + 16|0);
   $13 = HEAP32[$12>>2]|0;
   $14 = ((($0)) + 24|0);
   $15 = HEAP32[$14>>2]|0;
   $16 = (_emscripten_syscall(($13|0),($15|0))|0);
   $17 = ((($0)) + 80|0);
   HEAP32[$17>>2] = $16;
   break;
  }
  case 1024:  {
   $18 = ((($0)) + 4|0);
   $19 = HEAP32[$18>>2]|0;
   FUNCTION_TABLE_v[$19 & 0]();
   break;
  }
  case 1025:  {
   $20 = ((($0)) + 4|0);
   $21 = HEAP32[$20>>2]|0;
   $22 = ((($0)) + 16|0);
   $23 = HEAP32[$22>>2]|0;
   FUNCTION_TABLE_vi[$21 & 0]($23);
   break;
  }
  case 1026:  {
   $24 = ((($0)) + 4|0);
   $25 = HEAP32[$24>>2]|0;
   $26 = ((($0)) + 16|0);
   $27 = HEAP32[$26>>2]|0;
   $28 = ((($0)) + 24|0);
   $29 = HEAP32[$28>>2]|0;
   FUNCTION_TABLE_vii[$25 & 0]($27,$29);
   break;
  }
  case 1027:  {
   $30 = ((($0)) + 4|0);
   $31 = HEAP32[$30>>2]|0;
   $32 = ((($0)) + 16|0);
   $33 = HEAP32[$32>>2]|0;
   $34 = ((($0)) + 24|0);
   $35 = HEAP32[$34>>2]|0;
   $36 = ((($0)) + 32|0);
   $37 = HEAP32[$36>>2]|0;
   FUNCTION_TABLE_viii[$31 & 0]($33,$35,$37);
   break;
  }
  case 2048:  {
   $38 = ((($0)) + 4|0);
   $39 = HEAP32[$38>>2]|0;
   $40 = (FUNCTION_TABLE_i[$39 & 0]()|0);
   $41 = ((($0)) + 80|0);
   HEAP32[$41>>2] = $40;
   break;
  }
  case 2049:  {
   $42 = ((($0)) + 4|0);
   $43 = HEAP32[$42>>2]|0;
   $44 = ((($0)) + 16|0);
   $45 = HEAP32[$44>>2]|0;
   $46 = (FUNCTION_TABLE_ii[$43 & 7]($45)|0);
   $47 = ((($0)) + 80|0);
   HEAP32[$47>>2] = $46;
   break;
  }
  case 2050:  {
   $48 = ((($0)) + 4|0);
   $49 = HEAP32[$48>>2]|0;
   $50 = ((($0)) + 16|0);
   $51 = HEAP32[$50>>2]|0;
   $52 = ((($0)) + 24|0);
   $53 = HEAP32[$52>>2]|0;
   $54 = (FUNCTION_TABLE_iii[$49 & 0]($51,$53)|0);
   $55 = ((($0)) + 80|0);
   HEAP32[$55>>2] = $54;
   break;
  }
  case 2051:  {
   $56 = ((($0)) + 4|0);
   $57 = HEAP32[$56>>2]|0;
   $58 = ((($0)) + 16|0);
   $59 = HEAP32[$58>>2]|0;
   $60 = ((($0)) + 24|0);
   $61 = HEAP32[$60>>2]|0;
   $62 = ((($0)) + 32|0);
   $63 = HEAP32[$62>>2]|0;
   $64 = (FUNCTION_TABLE_iiii[$57 & 7]($59,$61,$63)|0);
   $65 = ((($0)) + 80|0);
   HEAP32[$65>>2] = $64;
   break;
  }
  default: {
   ___assert_fail((6420|0),(6286|0),202,(6471|0));
   // unreachable;
  }
  }
 } while(0);
 $66 = ((($0)) + 88|0);
 $67 = HEAP32[$66>>2]|0;
 $68 = ($67|0)==(0);
 if ($68) {
  $69 = ((($0)) + 8|0);
  HEAP32[$69>>2] = 1;
  (_emscripten_futex_wake(($69|0),2147483647)|0);
  return;
 } else {
  _free($0);
  return;
 }
}
function ___pthread_mutex_unlock($0) {
 $0 = $0|0;
 var $$0 = 0, $$045 = 0, $$pre = 0, $$pre$phiZ2D = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 $2 = (Atomics_load(HEAP32,$1>>2)|0);
 $3 = HEAP32[$0>>2]|0;
 $4 = $3 & 15;
 $5 = $3 & 128;
 $6 = $5 ^ 128;
 $7 = ($4|0)==(0);
 if ($7) {
  $$pre = ((($0)) + 4|0);
  $$045 = 0;$$pre$phiZ2D = $$pre;
 } else {
  $8 = (_pthread_self()|0);
  $9 = ((($0)) + 4|0);
  $10 = (Atomics_load(HEAP32,$9>>2)|0);
  $11 = $10 & 2147483647;
  $12 = ((($8)) + 52|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($11|0)==($13|0);
  if (!($14)) {
   $$0 = 1;
   return ($$0|0);
  }
  $15 = $3 & 3;
  $16 = ($15|0)==(1);
  if ($16) {
   $17 = ((($0)) + 20|0);
   $18 = HEAP32[$17>>2]|0;
   $19 = ($18|0)==(0);
   if (!($19)) {
    $20 = (($18) + -1)|0;
    HEAP32[$17>>2] = $20;
    $$0 = 0;
    return ($$0|0);
   }
  }
  $21 = ($6|0)==(0);
  $22 = ((($0)) + 16|0);
  if ($21) {
   $23 = ((($8)) + 176|0);
   Atomics_store(HEAP32,$23>>2,$22)|0;
   ___vm_lock();
  }
  $24 = ((($0)) + 12|0);
  $25 = HEAP32[$24>>2]|0;
  $26 = HEAP32[$22>>2]|0;
  Atomics_store(HEAP32,$25>>2,$26)|0;
  $27 = ((($8)) + 168|0);
  $28 = ($26|0)==($27|0);
  if ($28) {
   $$045 = $8;$$pre$phiZ2D = $9;
  } else {
   $29 = ((($26)) + -4|0);
   Atomics_store(HEAP32,$29>>2,$25)|0;
   $$045 = $8;$$pre$phiZ2D = $9;
  }
 }
 $30 = $3 & 8;
 $31 = ($30|0)!=(0);
 $32 = $31 ? 2147483647 : 0;
 while(1) {
  $33 = (Atomics_load(HEAP32, $$pre$phiZ2D>>2)|0);
  $34 = (Atomics_compareExchange(HEAP32, $$pre$phiZ2D>>2,$33,$32)|0);
  $35 = ($34|0)==($33|0);
  if ($35) {
   break;
  }
 }
 $36 = ($6|0)!=(0);
 $or$cond = $7 | $36;
 if (!($or$cond)) {
  $37 = ((($$045)) + 176|0);
  Atomics_store(HEAP32,$37>>2,0)|0;
  ___vm_unlock();
 }
 $38 = ($2|0)!=(0);
 $39 = ($33|0)<(0);
 $or$cond3 = $38 | $39;
 if (!($or$cond3)) {
  $$0 = 0;
  return ($$0|0);
 }
 (_emscripten_futex_wake(($$pre$phiZ2D|0),1)|0);
 $$0 = 0;
 return ($$0|0);
}
function ___vm_lock() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (Atomics_add(HEAP32, 1941,1)|0);
 return;
}
function ___vm_unlock() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (Atomics_add(HEAP32, 1941,-1)|0);
 $1 = ($0|0)==(1);
 if (!($1)) {
  return;
 }
 $2 = (Atomics_load(HEAP32,(7768)>>2)|0);
 $3 = ($2|0)==(0);
 if ($3) {
  return;
 }
 (_emscripten_futex_wake((7764|0),2147483647)|0);
 return;
}
function ___pthread_mutex_lock($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 & 15;
 $3 = ($2|0)==(0);
 if ($3) {
  $4 = ((($0)) + 4|0);
  $5 = (Atomics_compareExchange(HEAP32, $4>>2,0,16)|0);
  $6 = ($5|0)==(0);
  if ($6) {
   $$0 = 0;
   return ($$0|0);
  }
 }
 $7 = (___pthread_mutex_timedlock($0,0)|0);
 $$0 = $7;
 return ($$0|0);
}
function ___pthread_mutex_timedlock($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$2 = 0, $$pre = 0, $$pre43 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = HEAP32[$0>>2]|0;
 $3 = $2 & 15;
 $4 = ($3|0)==(0);
 do {
  if ($4) {
   $5 = ((($0)) + 4|0);
   $6 = (Atomics_compareExchange(HEAP32, $5>>2,0,16)|0);
   $7 = ($6|0)==(0);
   if ($7) {
    $$2 = 0;
    return ($$2|0);
   } else {
    $$pre = HEAP32[$0>>2]|0;
    $9 = $$pre;
    break;
   }
  } else {
   $9 = $2;
  }
 } while(0);
 $8 = $9 & 128;
 $10 = $8 ^ 128;
 $11 = (___pthread_mutex_trylock($0)|0);
 $12 = ($11|0)==(16);
 if (!($12)) {
  $$2 = $11;
  return ($$2|0);
 }
 $13 = ((($0)) + 4|0);
 $14 = ((($0)) + 8|0);
 $$0 = 100;
 while(1) {
  $15 = (($$0) + -1)|0;
  $16 = ($$0|0)==(0);
  if ($16) {
   break;
  }
  $17 = (Atomics_load(HEAP32,$13>>2)|0);
  $18 = ($17|0)==(0);
  if ($18) {
   break;
  }
  $19 = (Atomics_load(HEAP32,$14>>2)|0);
  $20 = ($19|0)==(0);
  if ($20) {
   $$0 = $15;
  } else {
   break;
  }
 }
 $21 = (___pthread_mutex_trylock($0)|0);
 $22 = ($21|0)==(16);
 if (!($22)) {
  $$2 = $21;
  return ($$2|0);
 }
 while(1) {
  $23 = (Atomics_load(HEAP32,$13>>2)|0);
  $24 = ($23|0)==(0);
  if (!($24)) {
   $27 = $23 & 1073741824;
   $28 = ($27|0)==(0);
   $$pre43 = HEAP32[$0>>2]|0;
   $29 = $$pre43 & 4;
   $30 = ($29|0)==(0);
   $or$cond = $28 | $30;
   if ($or$cond) {
    $31 = $$pre43 & 3;
    $32 = ($31|0)==(2);
    if ($32) {
     $33 = $23 & 2147483647;
     $34 = (_pthread_self()|0);
     $35 = ((($34)) + 52|0);
     $36 = HEAP32[$35>>2]|0;
     $37 = ($33|0)==($36|0);
     if ($37) {
      $$2 = 35;
      label = 17;
      break;
     }
    }
    $38 = (Atomics_add(HEAP32, $14>>2,1)|0);
    $39 = $23 | -2147483648;
    $40 = (Atomics_compareExchange(HEAP32, $13>>2,$23,$39)|0);
    $41 = (___timedwait($13,$39,0,$1,$10)|0);
    $42 = (Atomics_sub(HEAP32, $14>>2,1)|0);
    $43 = $41 | 4;
    $44 = ($43|0)==(4);
    if (!($44)) {
     $$2 = $41;
     label = 17;
     break;
    }
   }
  }
  $25 = (___pthread_mutex_trylock($0)|0);
  $26 = ($25|0)==(16);
  if (!($26)) {
   $$2 = $25;
   label = 17;
   break;
  }
 }
 if ((label|0) == 17) {
  return ($$2|0);
 }
 return (0)|0;
}
function ___timedwait($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $5 = sp;
 (___pthread_setcancelstate(1,$5)|0);
 _emscripten_conditional_set_current_thread_status(1,4);
 $6 = (___timedwait_cp($0,$1,$2,$3,$4)|0);
 _emscripten_conditional_set_current_thread_status(4,1);
 $7 = HEAP32[$5>>2]|0;
 (___pthread_setcancelstate($7,0)|0);
 STACKTOP = sp;return ($6|0);
}
function ___pthread_setcancelstate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$pre = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0>>>0)>(2);
 if ($2) {
  $$0 = 22;
  return ($$0|0);
 }
 $3 = (_pthread_self()|0);
 $4 = ($1|0)==(0|0);
 $$pre = ((($3)) + 72|0);
 if (!($4)) {
  $5 = (Atomics_load(HEAP32,$$pre>>2)|0);
  HEAP32[$1>>2] = $5;
 }
 Atomics_store(HEAP32,$$pre>>2,$0)|0;
 $$0 = 0;
 return ($$0|0);
}
function ___timedwait_cp($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$$0$us = 0.0, $$$045 = 0.0, $$$046$us = 0.0, $$0$us = 0.0, $$0$us53 = 0.0, $$138 = 0, $$138$ph = 0, $$138$ph70 = 0, $$138$ph72 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0.0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0.0, $39 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $5 = sp;
 $6 = ($3|0)!=(0|0);
 if ($6) {
  $7 = ((($3)) + 4|0);
  $8 = HEAP32[$7>>2]|0;
  $9 = ($8>>>0)>(999999999);
  if ($9) {
   $$138 = 22;
   STACKTOP = sp;return ($$138|0);
  }
  $10 = (___clock_gettime(($2|0),($5|0))|0);
  $11 = ($10|0)==(0);
  if (!($11)) {
   $$138 = 22;
   STACKTOP = sp;return ($$138|0);
  }
  $12 = HEAP32[$3>>2]|0;
  $13 = HEAP32[$5>>2]|0;
  $14 = (($12) - ($13))|0;
  HEAP32[$5>>2] = $14;
  $15 = HEAP32[$7>>2]|0;
  $16 = ((($5)) + 4|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = (($15) - ($17))|0;
  HEAP32[$16>>2] = $18;
  $19 = ($18|0)<(0);
  if ($19) {
   $20 = (($14) + -1)|0;
   HEAP32[$5>>2] = $20;
   $21 = (($18) + 1000000000)|0;
   HEAP32[$16>>2] = $21;
   $23 = $20;
  } else {
   $23 = $14;
  }
  $22 = ($23|0)<(0);
  if ($22) {
   $$138 = 110;
   STACKTOP = sp;return ($$138|0);
  }
 }
 $24 = (_emscripten_is_main_runtime_thread()|0);
 $25 = ($24|0)!=(0);
 $$$045 = $25 ? 1.0 : 100.0;
 if ($25) {
  L15: while(1) {
   $26 = (_pthread_self()|0);
   $27 = (__pthread_isduecanceled($26)|0);
   $28 = ($27|0)==(0);
   if (!($28)) {
    $$138$ph = 125;
    break;
   }
   _emscripten_main_thread_process_queued_calls();
   if ($6) {
    $29 = (+__pthread_msecs_until($3));
    $30 = !($29 <= 0.0);
    $31 = $29 > 100.0;
    $$0$us = $31 ? 100.0 : $29;
    $32 = $$0$us > 1.0;
    $$$0$us = $32 ? 1.0 : $$0$us;
    if ($30) {
     $$$046$us = $$$0$us;
    } else {
     $$138$ph = 110;
     break;
    }
   } else {
    $$$046$us = $$$045;
   }
   $33 = (_emscripten_futex_wait(($0|0),($1|0),(+$$$046$us))|0);
   $34 = (0 - ($33))|0;
   switch ($34|0) {
   case 110:  {
    break;
   }
   case 4: case 125:  {
    $$138$ph = $34;
    break L15;
    break;
   }
   default: {
    $$138 = 0;
    label = 21;
    break L15;
   }
   }
  }
  if ((label|0) == 21) {
   STACKTOP = sp;return ($$138|0);
  }
  $$138 = $$138$ph;
  STACKTOP = sp;return ($$138|0);
 }
 if (!($6)) {
  L27: while(1) {
   $43 = (_pthread_self()|0);
   $44 = (__pthread_isduecanceled($43)|0);
   $45 = ($44|0)==(0);
   if (!($45)) {
    $$138$ph72 = 125;
    break;
   }
   $46 = (_emscripten_futex_wait(($0|0),($1|0),(+$$$045))|0);
   $47 = (0 - ($46))|0;
   switch ($47|0) {
   case 110:  {
    break;
   }
   case 4: case 125:  {
    $$138$ph72 = $47;
    break L27;
    break;
   }
   default: {
    $$138 = 0;
    label = 21;
    break L27;
   }
   }
  }
  if ((label|0) == 21) {
   STACKTOP = sp;return ($$138|0);
  }
  $$138 = $$138$ph72;
  STACKTOP = sp;return ($$138|0);
 }
 L34: while(1) {
  $35 = (_pthread_self()|0);
  $36 = (__pthread_isduecanceled($35)|0);
  $37 = ($36|0)==(0);
  if (!($37)) {
   $$138$ph70 = 125;
   break;
  }
  $38 = (+__pthread_msecs_until($3));
  $39 = !($38 <= 0.0);
  if (!($39)) {
   $$138$ph70 = 110;
   break;
  }
  $40 = $38 > 100.0;
  $$0$us53 = $40 ? 100.0 : $38;
  $41 = (_emscripten_futex_wait(($0|0),($1|0),(+$$0$us53))|0);
  $42 = (0 - ($41))|0;
  switch ($42|0) {
  case 110:  {
   break;
  }
  case 4: case 125:  {
   $$138$ph70 = $42;
   break L34;
   break;
  }
  default: {
   $$138 = 0;
   label = 21;
   break L34;
  }
  }
 }
 if ((label|0) == 21) {
  STACKTOP = sp;return ($$138|0);
 }
 $$138 = $$138$ph70;
 STACKTOP = sp;return ($$138|0);
}
function __pthread_isduecanceled($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(2);
 $3 = $2&1;
 return ($3|0);
}
function __pthread_msecs_until($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0.0, $12 = 0.0, $13 = 0, $14 = 0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $2 = 0, $3 = 0.0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 (_gettimeofday(($1|0),(0|0))|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = (+($2|0));
 $4 = $3 * 1000.0;
 $5 = ((($1)) + 4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = (+($6|0));
 $8 = $7 * 0.001;
 $9 = $4 + $8;
 $10 = HEAP32[$0>>2]|0;
 $11 = (+($10|0));
 $12 = $11 * 1000.0;
 $13 = ((($0)) + 4|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = (+($14|0));
 $16 = $15 * 9.9999999999999995E-7;
 $17 = $12 + $16;
 $18 = $17 - $9;
 STACKTOP = sp;return (+$18);
}
function ___pthread_mutex_trylock($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 & 15;
 $3 = ($2|0)==(0);
 if ($3) {
  $4 = ((($0)) + 4|0);
  $5 = (Atomics_compareExchange(HEAP32, $4>>2,0,16)|0);
  $6 = $5 & 16;
  $$0 = $6;
  return ($$0|0);
 } else {
  $7 = (___pthread_mutex_trylock_owner($0)|0);
  $$0 = $7;
  return ($$0|0);
 }
 return (0)|0;
}
function ___pthread_mutex_trylock_owner($0) {
 $0 = $0|0;
 var $$ = 0, $$1 = 0, $$154 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond57 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = (_pthread_self()|0);
 $3 = ((($2)) + 52|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($0)) + 4|0);
 $6 = (Atomics_load(HEAP32,$5>>2)|0);
 $7 = $6 & 2147483647;
 $8 = ($7|0)==($4|0);
 $9 = $1 & 3;
 $10 = ($9|0)==(1);
 $or$cond = $10 & $8;
 if ($or$cond) {
  $11 = ((($0)) + 20|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = ($12>>>0)>(2147483646);
  if ($13) {
   $$1 = 11;
   return ($$1|0);
  }
  $14 = (($12) + 1)|0;
  HEAP32[$11>>2] = $14;
  $$1 = 0;
  return ($$1|0);
 }
 $15 = ($7|0)==(2147483647);
 if ($15) {
  $$1 = 131;
  return ($$1|0);
 }
 $16 = HEAP32[$0>>2]|0;
 $17 = $16 & 128;
 $18 = ($17|0)==(0);
 if ($18) {
  $$154 = $4;
 } else {
  $19 = ((($2)) + 172|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ($20|0)==(0);
  if ($21) {
   HEAP32[$19>>2] = -12;
  }
  $22 = ((($0)) + 8|0);
  $23 = (Atomics_load(HEAP32,$22>>2)|0);
  $24 = ($23|0)==(0);
  $25 = $4 | -2147483648;
  $$ = $24 ? $4 : $25;
  $26 = ((($0)) + 16|0);
  $27 = ((($2)) + 176|0);
  Atomics_store(HEAP32,$27>>2,$26)|0;
  $$154 = $$;
 }
 $28 = ($7|0)!=(0);
 if ($28) {
  $29 = $6 & 1073741824;
  $30 = ($29|0)==(0);
  $31 = $1 & 4;
  $32 = ($31|0)==(0);
  $or$cond57 = $32 | $30;
  if (!($or$cond57)) {
   label = 11;
  }
 } else {
  label = 11;
 }
 if ((label|0) == 11) {
  $33 = (Atomics_compareExchange(HEAP32, $5>>2,$6,$$154)|0);
  $34 = ($33|0)==($6|0);
  if ($34) {
   $36 = ((($2)) + 168|0);
   $37 = (Atomics_load(HEAP32,$36>>2)|0);
   $38 = ((($0)) + 16|0);
   HEAP32[$38>>2] = $37;
   $39 = ((($0)) + 12|0);
   HEAP32[$39>>2] = $36;
   $40 = ($37|0)==($36|0);
   if (!($40)) {
    $41 = ((($37)) + -4|0);
    Atomics_store(HEAP32,$41>>2,$38)|0;
   }
   Atomics_store(HEAP32,$36>>2,$38)|0;
   $42 = ((($2)) + 176|0);
   Atomics_store(HEAP32,$42>>2,0)|0;
   if (!($28)) {
    $$1 = 0;
    return ($$1|0);
   }
   $43 = ((($0)) + 20|0);
   HEAP32[$43>>2] = 0;
   $44 = HEAP32[$0>>2]|0;
   $45 = $44 | 8;
   HEAP32[$0>>2] = $45;
   $$1 = 130;
   return ($$1|0);
  }
 }
 $35 = ((($2)) + 176|0);
 Atomics_store(HEAP32,$35>>2,0)|0;
 $$1 = 16;
 return ($$1|0);
}
function _pthread_mutexattr_destroy($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _pthread_mutexattr_init($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$0>>2] = 0;
 return 0;
}
function _pthread_mutex_init($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sroa$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $$sroa$0 = sp;
 ;HEAP32[$$sroa$0>>2]=0|0;HEAP32[$$sroa$0+4>>2]=0|0;HEAP32[$$sroa$0+8>>2]=0|0;HEAP32[$$sroa$0+12>>2]=0|0;HEAP32[$$sroa$0+16>>2]=0|0;HEAP32[$$sroa$0+20>>2]=0|0;HEAP32[$$sroa$0+24>>2]=0|0;
 ;HEAP32[$0>>2]=HEAP32[$$sroa$0>>2]|0;HEAP32[$0+4>>2]=HEAP32[$$sroa$0+4>>2]|0;HEAP32[$0+8>>2]=HEAP32[$$sroa$0+8>>2]|0;HEAP32[$0+12>>2]=HEAP32[$$sroa$0+12>>2]|0;HEAP32[$0+16>>2]=HEAP32[$$sroa$0+16>>2]|0;HEAP32[$0+20>>2]=HEAP32[$$sroa$0+20>>2]|0;HEAP32[$0+24>>2]=HEAP32[$$sroa$0+24>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return 0;
 }
 $3 = HEAP32[$1>>2]|0;
 HEAP32[$0>>2] = $3;
 STACKTOP = sp;return 0;
}
function __emscripten_atomic_fetch_and_add_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = (_i64Add(($11|0),($14|0),($1|0),($2|0))|0);
 $16 = tempRet0;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function __emscripten_atomic_fetch_and_and_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 & $1;
 $16 = $14 & $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function __emscripten_atomic_fetch_and_or_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 | $1;
 $16 = $14 | $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function __emscripten_atomic_fetch_and_sub_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = (_i64Subtract(($11|0),($14|0),($1|0),($2|0))|0);
 $16 = tempRet0;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function __emscripten_atomic_fetch_and_xor_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 ^ $1;
 $16 = $14 ^ $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function _emscripten_atomic_add_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = (_i64Add(($11|0),($14|0),($1|0),($2|0))|0);
 $16 = tempRet0;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($16);
 return ($15|0);
}
function _emscripten_atomic_and_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 & $1;
 $16 = $14 & $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($16);
 return ($15|0);
}
function _emscripten_atomic_cas_u64($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $5 = $0;
 $6 = $5 >>> 3;
 $7 = $6 & 255;
 $8 = (8284 + ($7<<2)|0);
 while(1) {
  $9 = (Atomics_exchange(HEAP32, $8>>2,1)|0);
  $10 = ($9|0)==(0);
  if ($10) {
   break;
  }
 }
 $11 = $0;
 $12 = $11;
 $13 = HEAP32[$12>>2]|0;
 $14 = (($11) + 4)|0;
 $15 = $14;
 $16 = HEAP32[$15>>2]|0;
 $17 = ($13|0)==($1|0);
 $18 = ($16|0)==($2|0);
 $19 = $17 & $18;
 if (!($19)) {
  $24 = (Atomics_store(HEAP32, $8>>2,0)|0);
  tempRet0 = ($16);
  return ($13|0);
 }
 $20 = $0;
 $21 = $20;
 HEAP32[$21>>2] = $3;
 $22 = (($20) + 4)|0;
 $23 = $22;
 HEAP32[$23>>2] = $4;
 $24 = (Atomics_store(HEAP32, $8>>2,0)|0);
 tempRet0 = ($16);
 return ($13|0);
}
function _emscripten_atomic_exchange_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $0;
 $16 = $15;
 HEAP32[$16>>2] = $1;
 $17 = (($15) + 4)|0;
 $18 = $17;
 HEAP32[$18>>2] = $2;
 $19 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($14);
 return ($11|0);
}
function _emscripten_atomic_load_f32($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (Atomics_load(HEAP32, $0>>2)|0);
 $2 = (HEAP32[tempDoublePtr>>2]=$1,+HEAPF32[tempDoublePtr>>2]);
 return (+$2);
}
function _emscripten_atomic_load_f64($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 >>> 3;
 $3 = $2 & 255;
 $4 = (8284 + ($3<<2)|0);
 while(1) {
  $5 = (Atomics_exchange(HEAP32, $4>>2,1)|0);
  $6 = ($5|0)==(0);
  if ($6) {
   break;
  }
 }
 $7 = +HEAPF64[$0>>3];
 $8 = (Atomics_store(HEAP32, $4>>2,0)|0);
 return (+$7);
}
function _emscripten_atomic_load_u64($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 >>> 3;
 $3 = $2 & 255;
 $4 = (8284 + ($3<<2)|0);
 while(1) {
  $5 = (Atomics_exchange(HEAP32, $4>>2,1)|0);
  $6 = ($5|0)==(0);
  if ($6) {
   break;
  }
 }
 $7 = $0;
 $8 = $7;
 $9 = HEAP32[$8>>2]|0;
 $10 = (($7) + 4)|0;
 $11 = $10;
 $12 = HEAP32[$11>>2]|0;
 $13 = (Atomics_store(HEAP32, $4>>2,0)|0);
 tempRet0 = ($12);
 return ($9|0);
}
function _emscripten_atomic_or_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 | $1;
 $16 = $14 | $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($16);
 return ($15|0);
}
function _emscripten_atomic_store_f32($0,$1) {
 $0 = $0|0;
 $1 = +$1;
 var $2 = 0, $3 = 0, $4 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (HEAPF32[tempDoublePtr>>2]=$1,HEAP32[tempDoublePtr>>2]|0);
 $3 = (Atomics_store(HEAP32, $0>>2,$2)|0);
 $4 = (+($3>>>0));
 return (+$4);
}
function _emscripten_atomic_store_f64($0,$1) {
 $0 = $0|0;
 $1 = +$1;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $0;
 $3 = $2 >>> 3;
 $4 = $3 & 255;
 $5 = (8284 + ($4<<2)|0);
 while(1) {
  $6 = (Atomics_exchange(HEAP32, $5>>2,1)|0);
  $7 = ($6|0)==(0);
  if ($7) {
   break;
  }
 }
 HEAPF64[$0>>3] = $1;
 $8 = (Atomics_store(HEAP32, $5>>2,0)|0);
 return (+$1);
}
function _emscripten_atomic_store_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 HEAP32[$10>>2] = $1;
 $11 = (($9) + 4)|0;
 $12 = $11;
 HEAP32[$12>>2] = $2;
 $13 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($2);
 return ($1|0);
}
function _emscripten_atomic_sub_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = (_i64Subtract(($11|0),($14|0),($1|0),($2|0))|0);
 $16 = tempRet0;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($16);
 return ($15|0);
}
function _emscripten_atomic_xor_u64($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = $0;
 $4 = $3 >>> 3;
 $5 = $4 & 255;
 $6 = (8284 + ($5<<2)|0);
 while(1) {
  $7 = (Atomics_exchange(HEAP32, $6>>2,1)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   break;
  }
 }
 $9 = $0;
 $10 = $9;
 $11 = HEAP32[$10>>2]|0;
 $12 = (($9) + 4)|0;
 $13 = $12;
 $14 = HEAP32[$13>>2]|0;
 $15 = $11 ^ $1;
 $16 = $14 ^ $2;
 $17 = $0;
 $18 = $17;
 HEAP32[$18>>2] = $15;
 $19 = (($17) + 4)|0;
 $20 = $19;
 HEAP32[$20>>2] = $16;
 $21 = (Atomics_store(HEAP32, $6>>2,0)|0);
 tempRet0 = ($16);
 return ($15|0);
}
function runPostSets() {
}
function __register_pthread_ptr(pthreadPtr, isMainBrowserThread, isMainRuntimeThread) {
    pthreadPtr = pthreadPtr|0;
    isMainBrowserThread = isMainBrowserThread|0;
    isMainRuntimeThread = isMainRuntimeThread|0;
    __pthread_ptr = pthreadPtr;
    __pthread_is_main_browser_thread = isMainBrowserThread;
    __pthread_is_main_runtime_thread = isMainRuntimeThread;
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {
    expectedStatus = expectedStatus|0;
    newStatus = newStatus|0;
}
function _emscripten_is_main_runtime_thread() {
    return __pthread_is_main_runtime_thread|0; // Semantically the same as testing "!ENVIRONMENT_IS_PTHREAD" outside the asm.js scope
}
function _emscripten_set_current_thread_status(newStatus) {
    newStatus = newStatus|0;
}
function _emscripten_set_thread_name(threadId, name) {
    threadId = threadId|0;
    name = name|0;
}
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _pthread_self() {
    return __pthread_ptr|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    totalMemory = getTotalMemory()|0;

    // Perform a compare-and-swap loop to update the new dynamic top value. This is because
    // this function can becalled simultaneously in multiple threads.
    do {
      oldDynamicTop = Atomics_load(HEAP32, DYNAMICTOP_PTR>>2)|0;
      newDynamicTop = oldDynamicTop + increment | 0;
      // Asking to increase dynamic top to a too high value? In pthreads builds we cannot
      // enlarge memory, so this needs to fail.
      if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
        | (newDynamicTop|0) < 0 // Also underflow, sbrk() should be able to be used to subtract.
        | (newDynamicTop|0) > (totalMemory|0)) {
        abortOnCannotGrowMemory()|0;
      }
      // Attempt to update the dynamic top to new value. Another thread may have beat this thread to the update,
      // in which case we will need to start over by iterating the loop body again.
      oldDynamicTopOnChange = Atomics_compareExchange(HEAP32, DYNAMICTOP_PTR>>2, oldDynamicTop|0, newDynamicTop|0)|0;
    } while((oldDynamicTopOnChange|0) != (oldDynamicTop|0));
    return oldDynamicTop|0;
}

  
function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&0]()|0;
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&7](a1|0)|0;
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&0](a1|0,a2|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&0]();
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&0](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&0](a1|0,a2|0);
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&0](a1|0,a2|0,a3|0);
}

function b0() {
 ; nullFunc_i(0);return 0;
}
function b1(p0) {
 p0 = p0|0; nullFunc_ii(1);return 0;
}
function b2(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_iii(2);return 0;
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(3);return 0;
}
function b4() {
 ; nullFunc_v(4);
}
function b5(p0) {
 p0 = p0|0; nullFunc_vi(5);
}
function b6(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(6);
}
function b7(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(7);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_i = [b0];
var FUNCTION_TABLE_ii = [b1,___stdio_close,b1,b1,b1,_find_nonce,b1,___emscripten_thread_main];
var FUNCTION_TABLE_iii = [b2];
var FUNCTION_TABLE_iiii = [b3,b3,___stdout_write,___stdio_seek,_sn_write,b3,___stdio_write,b3];
var FUNCTION_TABLE_v = [b4];
var FUNCTION_TABLE_vi = [b5];
var FUNCTION_TABLE_vii = [b6];
var FUNCTION_TABLE_viii = [b7];

  return { ___emscripten_pthread_data_constructor: ___emscripten_pthread_data_constructor, ___errno_location: ___errno_location, ___pthread_tsd_run_dtors: ___pthread_tsd_run_dtors, ___udivdi3: ___udivdi3, ___uremdi3: ___uremdi3, __emscripten_atomic_fetch_and_add_u64: __emscripten_atomic_fetch_and_add_u64, __emscripten_atomic_fetch_and_and_u64: __emscripten_atomic_fetch_and_and_u64, __emscripten_atomic_fetch_and_or_u64: __emscripten_atomic_fetch_and_or_u64, __emscripten_atomic_fetch_and_sub_u64: __emscripten_atomic_fetch_and_sub_u64, __emscripten_atomic_fetch_and_xor_u64: __emscripten_atomic_fetch_and_xor_u64, __register_pthread_ptr: __register_pthread_ptr, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _ccurl_pow: _ccurl_pow, _emscripten_async_run_in_main_thread: _emscripten_async_run_in_main_thread, _emscripten_atomic_add_u64: _emscripten_atomic_add_u64, _emscripten_atomic_and_u64: _emscripten_atomic_and_u64, _emscripten_atomic_cas_u64: _emscripten_atomic_cas_u64, _emscripten_atomic_exchange_u64: _emscripten_atomic_exchange_u64, _emscripten_atomic_load_f32: _emscripten_atomic_load_f32, _emscripten_atomic_load_f64: _emscripten_atomic_load_f64, _emscripten_atomic_load_u64: _emscripten_atomic_load_u64, _emscripten_atomic_or_u64: _emscripten_atomic_or_u64, _emscripten_atomic_store_f32: _emscripten_atomic_store_f32, _emscripten_atomic_store_f64: _emscripten_atomic_store_f64, _emscripten_atomic_store_u64: _emscripten_atomic_store_u64, _emscripten_atomic_sub_u64: _emscripten_atomic_sub_u64, _emscripten_atomic_xor_u64: _emscripten_atomic_xor_u64, _emscripten_conditional_set_current_thread_status: _emscripten_conditional_set_current_thread_status, _emscripten_get_global_libc: _emscripten_get_global_libc, _emscripten_is_main_runtime_thread: _emscripten_is_main_runtime_thread, _emscripten_main_thread_process_queued_calls: _emscripten_main_thread_process_queued_calls, _emscripten_set_current_thread_status: _emscripten_set_current_thread_status, _emscripten_set_thread_name: _emscripten_set_thread_name, _emscripten_sync_run_in_main_thread: _emscripten_sync_run_in_main_thread, _emscripten_sync_run_in_main_thread_0: _emscripten_sync_run_in_main_thread_0, _emscripten_sync_run_in_main_thread_1: _emscripten_sync_run_in_main_thread_1, _emscripten_sync_run_in_main_thread_2: _emscripten_sync_run_in_main_thread_2, _emscripten_sync_run_in_main_thread_3: _emscripten_sync_run_in_main_thread_3, _emscripten_sync_run_in_main_thread_4: _emscripten_sync_run_in_main_thread_4, _emscripten_sync_run_in_main_thread_5: _emscripten_sync_run_in_main_thread_5, _emscripten_sync_run_in_main_thread_6: _emscripten_sync_run_in_main_thread_6, _emscripten_sync_run_in_main_thread_7: _emscripten_sync_run_in_main_thread_7, _emscripten_sync_run_in_main_thread_xprintf_varargs: _emscripten_sync_run_in_main_thread_xprintf_varargs, _fflush: _fflush, _free: _free, _i64Add: _i64Add, _i64Subtract: _i64Subtract, _llvm_bswap_i32: _llvm_bswap_i32, _llvm_cttz_i32: _llvm_cttz_i32, _malloc: _malloc, _memcpy: _memcpy, _memset: _memset, _proxy_main: _proxy_main, _pthread_self: _pthread_self, _sbrk: _sbrk, dynCall_i: dynCall_i, dynCall_ii: dynCall_ii, dynCall_iii: dynCall_iii, dynCall_iiii: dynCall_iiii, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viii: dynCall_viii, establishStackSpace: establishStackSpace, getTempRet0: getTempRet0, runPostSets: runPostSets, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real____emscripten_pthread_data_constructor = asm["___emscripten_pthread_data_constructor"]; asm["___emscripten_pthread_data_constructor"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____emscripten_pthread_data_constructor.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____errno_location.apply(null, arguments);
};

var real____pthread_tsd_run_dtors = asm["___pthread_tsd_run_dtors"]; asm["___pthread_tsd_run_dtors"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____pthread_tsd_run_dtors.apply(null, arguments);
};

var real____udivdi3 = asm["___udivdi3"]; asm["___udivdi3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____udivdi3.apply(null, arguments);
};

var real____uremdi3 = asm["___uremdi3"]; asm["___uremdi3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real____uremdi3.apply(null, arguments);
};

var real___emscripten_atomic_fetch_and_add_u64 = asm["__emscripten_atomic_fetch_and_add_u64"]; asm["__emscripten_atomic_fetch_and_add_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___emscripten_atomic_fetch_and_add_u64.apply(null, arguments);
};

var real___emscripten_atomic_fetch_and_and_u64 = asm["__emscripten_atomic_fetch_and_and_u64"]; asm["__emscripten_atomic_fetch_and_and_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___emscripten_atomic_fetch_and_and_u64.apply(null, arguments);
};

var real___emscripten_atomic_fetch_and_or_u64 = asm["__emscripten_atomic_fetch_and_or_u64"]; asm["__emscripten_atomic_fetch_and_or_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___emscripten_atomic_fetch_and_or_u64.apply(null, arguments);
};

var real___emscripten_atomic_fetch_and_sub_u64 = asm["__emscripten_atomic_fetch_and_sub_u64"]; asm["__emscripten_atomic_fetch_and_sub_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___emscripten_atomic_fetch_and_sub_u64.apply(null, arguments);
};

var real___emscripten_atomic_fetch_and_xor_u64 = asm["__emscripten_atomic_fetch_and_xor_u64"]; asm["__emscripten_atomic_fetch_and_xor_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___emscripten_atomic_fetch_and_xor_u64.apply(null, arguments);
};

var real___register_pthread_ptr = asm["__register_pthread_ptr"]; asm["__register_pthread_ptr"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real___register_pthread_ptr.apply(null, arguments);
};

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__bitshift64Lshr.apply(null, arguments);
};

var real__bitshift64Shl = asm["_bitshift64Shl"]; asm["_bitshift64Shl"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__bitshift64Shl.apply(null, arguments);
};

var real__ccurl_pow = asm["_ccurl_pow"]; asm["_ccurl_pow"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__ccurl_pow.apply(null, arguments);
};

var real__emscripten_async_run_in_main_thread = asm["_emscripten_async_run_in_main_thread"]; asm["_emscripten_async_run_in_main_thread"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_async_run_in_main_thread.apply(null, arguments);
};

var real__emscripten_atomic_add_u64 = asm["_emscripten_atomic_add_u64"]; asm["_emscripten_atomic_add_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_add_u64.apply(null, arguments);
};

var real__emscripten_atomic_and_u64 = asm["_emscripten_atomic_and_u64"]; asm["_emscripten_atomic_and_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_and_u64.apply(null, arguments);
};

var real__emscripten_atomic_cas_u64 = asm["_emscripten_atomic_cas_u64"]; asm["_emscripten_atomic_cas_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_cas_u64.apply(null, arguments);
};

var real__emscripten_atomic_exchange_u64 = asm["_emscripten_atomic_exchange_u64"]; asm["_emscripten_atomic_exchange_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_exchange_u64.apply(null, arguments);
};

var real__emscripten_atomic_load_f32 = asm["_emscripten_atomic_load_f32"]; asm["_emscripten_atomic_load_f32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_load_f32.apply(null, arguments);
};

var real__emscripten_atomic_load_f64 = asm["_emscripten_atomic_load_f64"]; asm["_emscripten_atomic_load_f64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_load_f64.apply(null, arguments);
};

var real__emscripten_atomic_load_u64 = asm["_emscripten_atomic_load_u64"]; asm["_emscripten_atomic_load_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_load_u64.apply(null, arguments);
};

var real__emscripten_atomic_or_u64 = asm["_emscripten_atomic_or_u64"]; asm["_emscripten_atomic_or_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_or_u64.apply(null, arguments);
};

var real__emscripten_atomic_store_f32 = asm["_emscripten_atomic_store_f32"]; asm["_emscripten_atomic_store_f32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_store_f32.apply(null, arguments);
};

var real__emscripten_atomic_store_f64 = asm["_emscripten_atomic_store_f64"]; asm["_emscripten_atomic_store_f64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_store_f64.apply(null, arguments);
};

var real__emscripten_atomic_store_u64 = asm["_emscripten_atomic_store_u64"]; asm["_emscripten_atomic_store_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_store_u64.apply(null, arguments);
};

var real__emscripten_atomic_sub_u64 = asm["_emscripten_atomic_sub_u64"]; asm["_emscripten_atomic_sub_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_sub_u64.apply(null, arguments);
};

var real__emscripten_atomic_xor_u64 = asm["_emscripten_atomic_xor_u64"]; asm["_emscripten_atomic_xor_u64"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_atomic_xor_u64.apply(null, arguments);
};

var real__emscripten_conditional_set_current_thread_status = asm["_emscripten_conditional_set_current_thread_status"]; asm["_emscripten_conditional_set_current_thread_status"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_conditional_set_current_thread_status.apply(null, arguments);
};

var real__emscripten_get_global_libc = asm["_emscripten_get_global_libc"]; asm["_emscripten_get_global_libc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_get_global_libc.apply(null, arguments);
};

var real__emscripten_is_main_runtime_thread = asm["_emscripten_is_main_runtime_thread"]; asm["_emscripten_is_main_runtime_thread"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_is_main_runtime_thread.apply(null, arguments);
};

var real__emscripten_main_thread_process_queued_calls = asm["_emscripten_main_thread_process_queued_calls"]; asm["_emscripten_main_thread_process_queued_calls"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_main_thread_process_queued_calls.apply(null, arguments);
};

var real__emscripten_set_current_thread_status = asm["_emscripten_set_current_thread_status"]; asm["_emscripten_set_current_thread_status"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_set_current_thread_status.apply(null, arguments);
};

var real__emscripten_set_thread_name = asm["_emscripten_set_thread_name"]; asm["_emscripten_set_thread_name"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_set_thread_name.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread = asm["_emscripten_sync_run_in_main_thread"]; asm["_emscripten_sync_run_in_main_thread"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_0 = asm["_emscripten_sync_run_in_main_thread_0"]; asm["_emscripten_sync_run_in_main_thread_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_0.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_1 = asm["_emscripten_sync_run_in_main_thread_1"]; asm["_emscripten_sync_run_in_main_thread_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_1.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_2 = asm["_emscripten_sync_run_in_main_thread_2"]; asm["_emscripten_sync_run_in_main_thread_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_2.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_3 = asm["_emscripten_sync_run_in_main_thread_3"]; asm["_emscripten_sync_run_in_main_thread_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_3.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_4 = asm["_emscripten_sync_run_in_main_thread_4"]; asm["_emscripten_sync_run_in_main_thread_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_4.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_5 = asm["_emscripten_sync_run_in_main_thread_5"]; asm["_emscripten_sync_run_in_main_thread_5"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_5.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_6 = asm["_emscripten_sync_run_in_main_thread_6"]; asm["_emscripten_sync_run_in_main_thread_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_6.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_7 = asm["_emscripten_sync_run_in_main_thread_7"]; asm["_emscripten_sync_run_in_main_thread_7"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_7.apply(null, arguments);
};

var real__emscripten_sync_run_in_main_thread_xprintf_varargs = asm["_emscripten_sync_run_in_main_thread_xprintf_varargs"]; asm["_emscripten_sync_run_in_main_thread_xprintf_varargs"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__emscripten_sync_run_in_main_thread_xprintf_varargs.apply(null, arguments);
};

var real__fflush = asm["_fflush"]; asm["_fflush"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__fflush.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__free.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__i64Add.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__i64Subtract.apply(null, arguments);
};

var real__llvm_bswap_i32 = asm["_llvm_bswap_i32"]; asm["_llvm_bswap_i32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__llvm_bswap_i32.apply(null, arguments);
};

var real__llvm_cttz_i32 = asm["_llvm_cttz_i32"]; asm["_llvm_cttz_i32"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__llvm_cttz_i32.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__malloc.apply(null, arguments);
};

var real__proxy_main = asm["_proxy_main"]; asm["_proxy_main"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__proxy_main.apply(null, arguments);
};

var real__pthread_self = asm["_pthread_self"]; asm["_pthread_self"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__pthread_self.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real__sbrk.apply(null, arguments);
};

var real_establishStackSpace = asm["establishStackSpace"]; asm["establishStackSpace"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_establishStackSpace.apply(null, arguments);
};

var real_getTempRet0 = asm["getTempRet0"]; asm["getTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_getTempRet0.apply(null, arguments);
};

var real_setTempRet0 = asm["setTempRet0"]; asm["setTempRet0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_setTempRet0.apply(null, arguments);
};

var real_setThrew = asm["setThrew"]; asm["setThrew"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_setThrew.apply(null, arguments);
};

var real_stackAlloc = asm["stackAlloc"]; asm["stackAlloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackAlloc.apply(null, arguments);
};

var real_stackRestore = asm["stackRestore"]; asm["stackRestore"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackRestore.apply(null, arguments);
};

var real_stackSave = asm["stackSave"]; asm["stackSave"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return real_stackSave.apply(null, arguments);
};
var ___emscripten_pthread_data_constructor = Module["___emscripten_pthread_data_constructor"] = asm["___emscripten_pthread_data_constructor"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var ___pthread_tsd_run_dtors = Module["___pthread_tsd_run_dtors"] = asm["___pthread_tsd_run_dtors"];
var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];
var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];
var __emscripten_atomic_fetch_and_add_u64 = Module["__emscripten_atomic_fetch_and_add_u64"] = asm["__emscripten_atomic_fetch_and_add_u64"];
var __emscripten_atomic_fetch_and_and_u64 = Module["__emscripten_atomic_fetch_and_and_u64"] = asm["__emscripten_atomic_fetch_and_and_u64"];
var __emscripten_atomic_fetch_and_or_u64 = Module["__emscripten_atomic_fetch_and_or_u64"] = asm["__emscripten_atomic_fetch_and_or_u64"];
var __emscripten_atomic_fetch_and_sub_u64 = Module["__emscripten_atomic_fetch_and_sub_u64"] = asm["__emscripten_atomic_fetch_and_sub_u64"];
var __emscripten_atomic_fetch_and_xor_u64 = Module["__emscripten_atomic_fetch_and_xor_u64"] = asm["__emscripten_atomic_fetch_and_xor_u64"];
var __register_pthread_ptr = Module["__register_pthread_ptr"] = asm["__register_pthread_ptr"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var _ccurl_pow = Module["_ccurl_pow"] = asm["_ccurl_pow"];
var _emscripten_async_run_in_main_thread = Module["_emscripten_async_run_in_main_thread"] = asm["_emscripten_async_run_in_main_thread"];
var _emscripten_atomic_add_u64 = Module["_emscripten_atomic_add_u64"] = asm["_emscripten_atomic_add_u64"];
var _emscripten_atomic_and_u64 = Module["_emscripten_atomic_and_u64"] = asm["_emscripten_atomic_and_u64"];
var _emscripten_atomic_cas_u64 = Module["_emscripten_atomic_cas_u64"] = asm["_emscripten_atomic_cas_u64"];
var _emscripten_atomic_exchange_u64 = Module["_emscripten_atomic_exchange_u64"] = asm["_emscripten_atomic_exchange_u64"];
var _emscripten_atomic_load_f32 = Module["_emscripten_atomic_load_f32"] = asm["_emscripten_atomic_load_f32"];
var _emscripten_atomic_load_f64 = Module["_emscripten_atomic_load_f64"] = asm["_emscripten_atomic_load_f64"];
var _emscripten_atomic_load_u64 = Module["_emscripten_atomic_load_u64"] = asm["_emscripten_atomic_load_u64"];
var _emscripten_atomic_or_u64 = Module["_emscripten_atomic_or_u64"] = asm["_emscripten_atomic_or_u64"];
var _emscripten_atomic_store_f32 = Module["_emscripten_atomic_store_f32"] = asm["_emscripten_atomic_store_f32"];
var _emscripten_atomic_store_f64 = Module["_emscripten_atomic_store_f64"] = asm["_emscripten_atomic_store_f64"];
var _emscripten_atomic_store_u64 = Module["_emscripten_atomic_store_u64"] = asm["_emscripten_atomic_store_u64"];
var _emscripten_atomic_sub_u64 = Module["_emscripten_atomic_sub_u64"] = asm["_emscripten_atomic_sub_u64"];
var _emscripten_atomic_xor_u64 = Module["_emscripten_atomic_xor_u64"] = asm["_emscripten_atomic_xor_u64"];
var _emscripten_conditional_set_current_thread_status = Module["_emscripten_conditional_set_current_thread_status"] = asm["_emscripten_conditional_set_current_thread_status"];
var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"];
var _emscripten_is_main_runtime_thread = Module["_emscripten_is_main_runtime_thread"] = asm["_emscripten_is_main_runtime_thread"];
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = asm["_emscripten_main_thread_process_queued_calls"];
var _emscripten_set_current_thread_status = Module["_emscripten_set_current_thread_status"] = asm["_emscripten_set_current_thread_status"];
var _emscripten_set_thread_name = Module["_emscripten_set_thread_name"] = asm["_emscripten_set_thread_name"];
var _emscripten_sync_run_in_main_thread = Module["_emscripten_sync_run_in_main_thread"] = asm["_emscripten_sync_run_in_main_thread"];
var _emscripten_sync_run_in_main_thread_0 = Module["_emscripten_sync_run_in_main_thread_0"] = asm["_emscripten_sync_run_in_main_thread_0"];
var _emscripten_sync_run_in_main_thread_1 = Module["_emscripten_sync_run_in_main_thread_1"] = asm["_emscripten_sync_run_in_main_thread_1"];
var _emscripten_sync_run_in_main_thread_2 = Module["_emscripten_sync_run_in_main_thread_2"] = asm["_emscripten_sync_run_in_main_thread_2"];
var _emscripten_sync_run_in_main_thread_3 = Module["_emscripten_sync_run_in_main_thread_3"] = asm["_emscripten_sync_run_in_main_thread_3"];
var _emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = asm["_emscripten_sync_run_in_main_thread_4"];
var _emscripten_sync_run_in_main_thread_5 = Module["_emscripten_sync_run_in_main_thread_5"] = asm["_emscripten_sync_run_in_main_thread_5"];
var _emscripten_sync_run_in_main_thread_6 = Module["_emscripten_sync_run_in_main_thread_6"] = asm["_emscripten_sync_run_in_main_thread_6"];
var _emscripten_sync_run_in_main_thread_7 = Module["_emscripten_sync_run_in_main_thread_7"] = asm["_emscripten_sync_run_in_main_thread_7"];
var _emscripten_sync_run_in_main_thread_xprintf_varargs = Module["_emscripten_sync_run_in_main_thread_xprintf_varargs"] = asm["_emscripten_sync_run_in_main_thread_xprintf_varargs"];
var _fflush = Module["_fflush"] = asm["_fflush"];
var _free = Module["_free"] = asm["_free"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];
var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var _proxy_main = Module["_proxy_main"] = asm["_proxy_main"];
var _pthread_self = Module["_pthread_self"] = asm["_pthread_self"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];
var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];
var setThrew = Module["setThrew"] = asm["setThrew"];
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
var stackRestore = Module["stackRestore"] = asm["stackRestore"];
var stackSave = Module["stackSave"] = asm["stackSave"];
var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
;



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;

if (!Module["intArrayFromString"]) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["intArrayToString"]) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
if (!Module["setValue"]) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getValue"]) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["allocate"]) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["getMemory"] = getMemory;
if (!Module["Pointer_stringify"]) Module["Pointer_stringify"] = function() { abort("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["AsciiToString"]) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToAscii"]) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF8ArrayToString"]) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF8ToString"]) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF8Array"]) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF8"]) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF8"]) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF16ToString"]) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF16"]) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF16"]) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["UTF32ToString"]) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stringToUTF32"]) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["lengthBytesUTF32"]) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["allocateUTF8"]) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["stackTrace"]) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPreRun"]) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnInit"]) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPreMain"]) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnExit"]) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addOnPostRun"]) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeStringToMemory"]) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeArrayToMemory"]) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["writeAsciiToMemory"]) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
if (!Module["FS"]) Module["FS"] = function() { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createFolder"] = FS.createFolder;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createLink"] = FS.createLink;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Module["GL"]) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["staticAlloc"]) Module["staticAlloc"] = function() { abort("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["dynamicAlloc"]) Module["dynamicAlloc"] = function() { abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["warnOnce"]) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["loadDynamicLibrary"]) Module["loadDynamicLibrary"] = function() { abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["loadWebAssemblyModule"]) Module["loadWebAssemblyModule"] = function() { abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getLEB"]) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getFunctionTables"]) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["alignFunctionTables"]) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["registerFunctions"]) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["addFunction"]) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["removeFunction"]) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getFuncWrapper"]) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["prettyPrint"]) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["makeBigInt"]) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["dynCall"]) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["getCompilerSetting"]) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["intArrayFromBase64"]) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Module["tryParseAsDataURI"]) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };if (!Module["ALLOC_NORMAL"]) Object.defineProperty(Module, "ALLOC_NORMAL", { get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_STACK"]) Object.defineProperty(Module, "ALLOC_STACK", { get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_STATIC"]) Object.defineProperty(Module, "ALLOC_STATIC", { get: function() { abort("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_DYNAMIC"]) Object.defineProperty(Module, "ALLOC_DYNAMIC", { get: function() { abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Module["ALLOC_NONE"]) Object.defineProperty(Module, "ALLOC_NONE", { get: function() { abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

if (memoryInitializer && !ENVIRONMENT_IS_PTHREAD) {
  if (!isDataURI(memoryInitializer)) {
    if (typeof Module['locateFile'] === 'function') {
      memoryInitializer = Module['locateFile'](memoryInitializer);
    } else if (Module['memoryInitializerPrefixURL']) {
      memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
    }
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    var data = Module['readBinary'](memoryInitializer);
    HEAPU8.set(data, GLOBAL_BASE);
  } else {
    addRunDependency('memory initializer');
    var applyMemoryInitializer = function(data) {
      if (data.byteLength) data = new Uint8Array(data);
      for (var i = 0; i < data.length; i++) {
        assert(HEAPU8[GLOBAL_BASE + i] === 0, "area for memory initializer should not have been touched before it's loaded");
      }
      HEAPU8.set(data, GLOBAL_BASE);
      // Delete the typed array that contains the large blob of the memory initializer request response so that
      // we won't keep unnecessary memory lying around. However, keep the XHR object itself alive so that e.g.
      // its .status field can still be accessed later.
      if (Module['memoryInitializerRequest']) delete Module['memoryInitializerRequest'].response;
      removeRunDependency('memory initializer');
    }
    function doBrowserLoad() {
      Module['readAsync'](memoryInitializer, applyMemoryInitializer, function() {
        throw 'could not load memory initializer ' + memoryInitializer;
      });
    }
    var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);
    if (memoryInitializerBytes) {
      applyMemoryInitializer(memoryInitializerBytes.buffer);
    } else
    if (Module['memoryInitializerRequest']) {
      // a network request has already been created, just use that
      function useRequest() {
        var request = Module['memoryInitializerRequest'];
        var response = request.response;
        if (request.status !== 200 && request.status !== 0) {
          var data = tryParseAsDataURI(Module['memoryInitializerRequestURL']);
          if (data) {
            response = data.buffer;
          } else {
            // If you see this warning, the issue may be that you are using locateFile or memoryInitializerPrefixURL, and defining them in JS. That
            // means that the HTML file doesn't know about them, and when it tries to create the mem init request early, does it to the wrong place.
            // Look in your browser's devtools network console to see what's going on.
            console.warn('a problem seems to have happened with Module.memoryInitializerRequest, status: ' + request.status + ', retrying ' + memoryInitializer);
            doBrowserLoad();
            return;
          }
        }
        applyMemoryInitializer(response);
      }
      if (Module['memoryInitializerRequest'].response) {
        setTimeout(useRequest, 0); // it's already here; but, apply it asynchronously
      } else {
        Module['memoryInitializerRequest'].addEventListener('load', useRequest); // wait for it
      }
    } else {
      // fetch it from the network ourselves
      doBrowserLoad();
    }
  }
}



/**
 * @constructor
 * @extends {Error}
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}





/** @type {function(Array=)} */
function run(args) {
  args = args || Module['arguments'];

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

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
  var print = Module['print'];
  var printErr = Module['printErr'];
  var has = false;
  Module['print'] = Module['printErr'] = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    var hasFS = true;
    if (hasFS) {
      ['stdout', 'stderr'].forEach(function(name) {
        var info = FS.analyzePath('/dev/' + name);
        if (!info) return;
        var stream = info.object;
        var rdev = stream.rdev;
        var tty = TTY.ttys[rdev];
        if (tty && tty.output && tty.output.length) {
          has = true;
        }
      });
    }
  } catch(e) {}
  Module['print'] = print;
  Module['printErr'] = printErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set NO_EXIT_RUNTIME to 0 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && Module['noExitRuntime'] && status === 0) {
    return;
  }

  if (Module['noExitRuntime']) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      Module.printErr('exit(' + status + ') called, but NO_EXIT_RUNTIME is set, so halting execution but not exiting the runtime or preventing further async execution (build with NO_EXIT_RUNTIME=0, if you want a true shutdown)');
    }
  } else {
    PThread.terminateAllThreads();

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  }
  Module['quit'](status, new ExitStatus(status));
}
Module['exit'] = exit;

var abortDecorators = [];

function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  if (ENVIRONMENT_IS_PTHREAD) console.error('Pthread aborting at ' + new Error().stack);
  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';
  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}


Module["noExitRuntime"] = true;

if (!ENVIRONMENT_IS_PTHREAD) run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}



