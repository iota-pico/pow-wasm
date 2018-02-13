var Module = function (Module) {
    Module = Module || {};
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
    Module['quit'] = function (status, toThrow) {
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
        }
        else if (Module['ENVIRONMENT'] === 'WORKER') {
            ENVIRONMENT_IS_WORKER = true;
        }
        else if (Module['ENVIRONMENT'] === 'NODE') {
            ENVIRONMENT_IS_NODE = true;
        }
        else if (Module['ENVIRONMENT'] === 'SHELL') {
            ENVIRONMENT_IS_SHELL = true;
        }
        else {
            throw new Error('Module[\'ENVIRONMENT\'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.');
        }
    }
    else {
        ENVIRONMENT_IS_WEB = typeof window === 'object';
        ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
        ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
        ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    }
    if (ENVIRONMENT_IS_NODE) {
        // Expose functionality in the same simple way that the shells work
        // Note that we pollute the global namespace here, otherwise we break in node
        var nodeFS;
        var nodePath;
        Module['read'] = function shell_read(filename, binary) {
            var ret;
            ret = tryParseAsDataURI(filename);
            if (!ret) {
                if (!nodeFS)
                    nodeFS = require('fs');
                if (!nodePath)
                    nodePath = require('path');
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
        // MODULARIZE will export the module in the proper place outside, we don't need to export here
        process['on']('uncaughtException', function (ex) {
            // suppress ExitStatus exceptions from showing an error
            if (!(ex instanceof ExitStatus)) {
                throw ex;
            }
        });
        // Currently node will swallow unhandled rejections, but this behavior is
        // deprecated, and in the future it will exit with error status.
        process['on']('unhandledRejection', function (reason, p) {
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
        }
        else if (typeof arguments != 'undefined') {
            Module['arguments'] = arguments;
        }
        if (typeof quit === 'function') {
            Module['quit'] = function (status, toThrow) {
                quit(status);
            };
        }
    }
    else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        Module['read'] = function shell_read(url) {
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                xhr.send(null);
                return xhr.responseText;
            }
            catch (err) {
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
                }
                catch (err) {
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
                if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
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
        Module['setWindowTitle'] = function (title) { document.title = title; };
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
    stackSave = stackRestore = stackAlloc = setTempRet0 = getTempRet0 = function () {
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
        var ret = HEAP32[DYNAMICTOP_PTR >> 2];
        var end = (ret + size + 15) & -16;
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
        if (!factor)
            factor = STACK_ALIGN; // stack alignment (16-byte) by default
        var ret = size = Math.ceil(size / factor) * factor;
        return ret;
    }
    function getNativeTypeSize(type) {
        switch (type) {
            case 'i1':
            case 'i8': return 1;
            case 'i16': return 2;
            case 'i32': return 4;
            case 'i64': return 8;
            case 'float': return 4;
            case 'double': return 8;
            default: {
                if (type[type.length - 1] === '*') {
                    return 4; // A pointer
                }
                else if (type[0] === 'i') {
                    var bits = parseInt(type.substr(1));
                    assert(bits % 8 === 0);
                    return bits / 8;
                }
                else {
                    return 0;
                }
            }
        }
    }
    function warnOnce(text) {
        if (!warnOnce.shown)
            warnOnce.shown = {};
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
        functionPointers[index - 1] = null;
    }
    var funcWrappers = {};
    function getFuncWrapper(func, sig) {
        if (!func)
            return; // on null pointer, return undefined
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
            }
            else if (sig.length === 2) {
                sigCache[func] = function dynCall_wrapper(arg) {
                    return dynCall(sig, func, [arg]);
                };
            }
            else {
                // general case
                sigCache[func] = function dynCall_wrapper() {
                    return dynCall(sig, func, Array.prototype.slice.call(arguments));
                };
            }
        }
        return sigCache[func];
    }
    function makeBigInt(low, high, unsigned) {
        return unsigned ? ((+((low >>> 0))) + ((+((high >>> 0))) * 4294967296.0)) : ((+((low >>> 0))) + ((+((high | 0))) * 4294967296.0));
    }
    function dynCall(sig, ptr, args) {
        if (args && args.length) {
            assert(args.length == sig.length - 1);
            assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
            return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
        }
        else {
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
        dynCall: dynCall,
        // helpful errors
        getTempRet0: function () { abort('getTempRet0() is now a top-level function, after removing the Runtime object. Remove "Runtime."'); },
        staticAlloc: function () { abort('staticAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."'); },
        stackAlloc: function () { abort('stackAlloc() is now a top-level function, after removing the Runtime object. Remove "Runtime."'); },
    };
    // The address globals begin at. Very low in memory, for code size and optimization opportunities.
    // Above 0 is static memory, starting with globals.
    // Then the stack.
    // Then 'dynamic' memory for sbrk.
    var GLOBAL_BASE = 1024;
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
        'stackSave': function () {
            stackSave();
        },
        'stackRestore': function () {
            stackRestore();
        },
        // type conversion from js to c
        'arrayToC': function (arr) {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret;
        },
        'stringToC': function (str) {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len);
            }
            return ret;
        }
    };
    // For fast lookup of conversion functions
    var toC = { 'string': JSfuncs['stringToC'], 'array': JSfuncs['arrayToC'] };
    // C calling interface.
    function ccall(ident, returnType, argTypes, args, opts) {
        var func = getCFunc(ident);
        var cArgs = [];
        var stack = 0;
        assert(returnType !== 'array', 'Return type should not be "array".');
        if (args) {
            for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                    if (stack === 0)
                        stack = stackSave();
                    cArgs[i] = converter(args[i]);
                }
                else {
                    cArgs[i] = args[i];
                }
            }
        }
        var ret = func.apply(null, cArgs);
        if (returnType === 'string')
            ret = Pointer_stringify(ret);
        if (stack !== 0) {
            stackRestore(stack);
        }
        return ret;
    }
    function cwrap(ident, returnType, argTypes) {
        argTypes = argTypes || [];
        var cfunc = getCFunc(ident);
        // When the function takes numbers and returns a number, we can just return
        // the original function
        var numericArgs = argTypes.every(function (type) { return type === 'number'; });
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
        if (type.charAt(type.length - 1) === '*')
            type = 'i32'; // pointers are 32-bit
        switch (type) {
            case 'i1':
                HEAP8[((ptr) >> 0)] = value;
                break;
            case 'i8':
                HEAP8[((ptr) >> 0)] = value;
                break;
            case 'i16':
                HEAP16[((ptr) >> 1)] = value;
                break;
            case 'i32':
                HEAP32[((ptr) >> 2)] = value;
                break;
            case 'i64':
                (tempI64 = [value >>> 0, (tempDouble = value, (+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble) / 4294967296.0))), 4294967295.0)) | 0) >>> 0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296.0))))) >>> 0) : 0)], HEAP32[((ptr) >> 2)] = tempI64[0], HEAP32[(((ptr) + (4)) >> 2)] = tempI64[1]);
                break;
            case 'float':
                HEAPF32[((ptr) >> 2)] = value;
                break;
            case 'double':
                HEAPF64[((ptr) >> 3)] = value;
                break;
            default: abort('invalid type for setValue: ' + type);
        }
    }
    /** @type {function(number, string, boolean=)} */
    function getValue(ptr, type, noSafe) {
        type = type || 'i8';
        if (type.charAt(type.length - 1) === '*')
            type = 'i32'; // pointers are 32-bit
        switch (type) {
            case 'i1': return HEAP8[((ptr) >> 0)];
            case 'i8': return HEAP8[((ptr) >> 0)];
            case 'i16': return HEAP16[((ptr) >> 1)];
            case 'i32': return HEAP32[((ptr) >> 2)];
            case 'i64': return HEAP32[((ptr) >> 2)];
            case 'float': return HEAPF32[((ptr) >> 2)];
            case 'double': return HEAPF64[((ptr) >> 3)];
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
        }
        else {
            zeroinit = false;
            size = slab.length;
        }
        var singleType = typeof types === 'string' ? types : null;
        var ret;
        if (allocator == ALLOC_NONE) {
            ret = ptr;
        }
        else {
            ret = [typeof _malloc === 'function' ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
        }
        if (zeroinit) {
            var stop;
            ptr = ret;
            assert((ret & 3) == 0);
            stop = ret + (size & ~3);
            for (; ptr < stop; ptr += 4) {
                HEAP32[((ptr) >> 2)] = 0;
            }
            stop = ret + size;
            while (ptr < stop) {
                HEAP8[((ptr++) >> 0)] = 0;
            }
            return ret;
        }
        if (singleType === 'i8') {
            if (slab.subarray || slab.slice) {
                HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
            }
            else {
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
            if (type == 'i64')
                type = 'i32'; // special case: we have one i32 here, and one i32 later
            setValue(ret + i, curr, type);
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
        if (!staticSealed)
            return staticAlloc(size);
        if (!runtimeInitialized)
            return dynamicAlloc(size);
        return _malloc(size);
    }
    /** @type {function(number, number=)} */
    function Pointer_stringify(ptr, length) {
        if (length === 0 || !ptr)
            return '';
        // TODO: use TextDecoder
        // Find the length, and check for UTF while doing so
        var hasUtf = 0;
        var t;
        var i = 0;
        while (1) {
            assert(ptr + i < TOTAL_MEMORY);
            t = HEAPU8[(((ptr) + (i)) >> 0)];
            hasUtf |= t;
            if (t == 0 && !length)
                break;
            i++;
            if (length && i == length)
                break;
        }
        if (!length)
            length = i;
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
            var ch = HEAP8[((ptr++) >> 0)];
            if (!ch)
                return str;
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
        while (u8Array[endPtr])
            ++endPtr;
        if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
            return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
        }
        else {
            var u0, u1, u2, u3, u4, u5;
            var str = '';
            while (1) {
                // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
                u0 = u8Array[idx++];
                if (!u0)
                    return str;
                if (!(u0 & 0x80)) {
                    str += String.fromCharCode(u0);
                    continue;
                }
                u1 = u8Array[idx++] & 63;
                if ((u0 & 0xE0) == 0xC0) {
                    str += String.fromCharCode(((u0 & 31) << 6) | u1);
                    continue;
                }
                u2 = u8Array[idx++] & 63;
                if ((u0 & 0xF0) == 0xE0) {
                    u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
                }
                else {
                    u3 = u8Array[idx++] & 63;
                    if ((u0 & 0xF8) == 0xF0) {
                        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
                    }
                    else {
                        u4 = u8Array[idx++] & 63;
                        if ((u0 & 0xFC) == 0xF8) {
                            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
                        }
                        else {
                            u5 = u8Array[idx++] & 63;
                            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
                        }
                    }
                }
                if (u0 < 0x10000) {
                    str += String.fromCharCode(u0);
                }
                else {
                    var ch = u0 - 0x10000;
                    str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
                }
            }
        }
    }
    // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
    // a copy of that string as a Javascript String object.
    function UTF8ToString(ptr) {
        return UTF8ArrayToString(HEAPU8, ptr);
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
        if (!(maxBytesToWrite > 0))
            return 0;
        var startIdx = outIdx;
        var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
        for (var i = 0; i < str.length; ++i) {
            // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
            // See http://unicode.org/faq/utf_bom.html#utf16-3
            // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
            var u = str.charCodeAt(i); // possibly a lead surrogate
            if (u >= 0xD800 && u <= 0xDFFF)
                u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
            if (u <= 0x7F) {
                if (outIdx >= endIdx)
                    break;
                outU8Array[outIdx++] = u;
            }
            else if (u <= 0x7FF) {
                if (outIdx + 1 >= endIdx)
                    break;
                outU8Array[outIdx++] = 0xC0 | (u >> 6);
                outU8Array[outIdx++] = 0x80 | (u & 63);
            }
            else if (u <= 0xFFFF) {
                if (outIdx + 2 >= endIdx)
                    break;
                outU8Array[outIdx++] = 0xE0 | (u >> 12);
                outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
                outU8Array[outIdx++] = 0x80 | (u & 63);
            }
            else if (u <= 0x1FFFFF) {
                if (outIdx + 3 >= endIdx)
                    break;
                outU8Array[outIdx++] = 0xF0 | (u >> 18);
                outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
                outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
                outU8Array[outIdx++] = 0x80 | (u & 63);
            }
            else if (u <= 0x3FFFFFF) {
                if (outIdx + 4 >= endIdx)
                    break;
                outU8Array[outIdx++] = 0xF8 | (u >> 24);
                outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
                outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
                outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
                outU8Array[outIdx++] = 0x80 | (u & 63);
            }
            else {
                if (outIdx + 5 >= endIdx)
                    break;
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
        return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
    function lengthBytesUTF8(str) {
        var len = 0;
        for (var i = 0; i < str.length; ++i) {
            // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
            // See http://unicode.org/faq/utf_bom.html#utf16-3
            var u = str.charCodeAt(i); // possibly a lead surrogate
            if (u >= 0xD800 && u <= 0xDFFF)
                u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
            if (u <= 0x7F) {
                ++len;
            }
            else if (u <= 0x7FF) {
                len += 2;
            }
            else if (u <= 0xFFFF) {
                len += 3;
            }
            else if (u <= 0x1FFFFF) {
                len += 4;
            }
            else if (u <= 0x3FFFFFF) {
                len += 5;
            }
            else {
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
        while (HEAP16[idx])
            ++idx;
        endPtr = idx << 1;
        if (endPtr - ptr > 32 && UTF16Decoder) {
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
        }
        else {
            var i = 0;
            var str = '';
            while (1) {
                var codeUnit = HEAP16[(((ptr) + (i * 2)) >> 1)];
                if (codeUnit == 0)
                    return str;
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
        if (maxBytesToWrite < 2)
            return 0;
        maxBytesToWrite -= 2; // Null terminator.
        var startPtr = outPtr;
        var numCharsToWrite = (maxBytesToWrite < str.length * 2) ? (maxBytesToWrite / 2) : str.length;
        for (var i = 0; i < numCharsToWrite; ++i) {
            // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
            var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
            HEAP16[((outPtr) >> 1)] = codeUnit;
            outPtr += 2;
        }
        // Null-terminate the pointer to the HEAP.
        HEAP16[((outPtr) >> 1)] = 0;
        return outPtr - startPtr;
    }
    // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.
    function lengthBytesUTF16(str) {
        return str.length * 2;
    }
    function UTF32ToString(ptr) {
        assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
        var i = 0;
        var str = '';
        while (1) {
            var utf32 = HEAP32[(((ptr) + (i * 4)) >> 2)];
            if (utf32 == 0)
                return str;
            ++i;
            // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
            // See http://unicode.org/faq/utf_bom.html#utf16-3
            if (utf32 >= 0x10000) {
                var ch = utf32 - 0x10000;
                str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
            }
            else {
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
        if (maxBytesToWrite < 4)
            return 0;
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
            HEAP32[((outPtr) >> 2)] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr)
                break;
        }
        // Null-terminate the pointer to the HEAP.
        HEAP32[((outPtr) >> 2)] = 0;
        return outPtr - startPtr;
    }
    // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.
    function lengthBytesUTF32(str) {
        var len = 0;
        for (var i = 0; i < str.length; ++i) {
            // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
            // See http://unicode.org/faq/utf_bom.html#utf16-3
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF)
                ++i; // possibly a lead surrogate, so skip over the tail surrogate.
            len += 4;
        }
        return len;
    }
    // Allocate heap space for a JS string, and write it there.
    // It is the responsibility of the caller to free() that memory.
    function allocateUTF8(str) {
        var size = lengthBytesUTF8(str) + 1;
        var ret = _malloc(size);
        if (ret)
            stringToUTF8Array(str, HEAP8, ret, size);
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
        var regex = /__Z[\w\d_]+/g;
        return text.replace(regex, function (x) {
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
            }
            catch (e) {
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
        if (Module['extraStackTrace'])
            js += '\n' + Module['extraStackTrace']();
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
    STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
    staticSealed = false;
    // Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
    function writeStackCookie() {
        assert((STACK_MAX & 3) == 0);
        HEAPU32[(STACK_MAX >> 2) - 1] = 0x02135467;
        HEAPU32[(STACK_MAX >> 2) - 2] = 0x89BACDFE;
    }
    function checkStackCookie() {
        if (HEAPU32[(STACK_MAX >> 2) - 1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2) - 2] != 0x89BACDFE) {
            abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2) - 2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2) - 1].toString(16));
        }
        // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
        if (HEAP32[0] !== 0x63736d65 /* 'emsc' */)
            throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
    }
    function abortStackOverflow(allocSize) {
        abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
    }
    function abortOnCannotGrowMemory() {
        abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }
    function enlargeMemory() {
        abortOnCannotGrowMemory();
    }
    var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
    var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
    if (TOTAL_MEMORY < TOTAL_STACK)
        Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');
    // Initialize the runtime's memory
    // check for full engine support (use string 'subarray' to avoid closure compiler confusion)
    assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, 'JS engine does not provide full typed array support');
    // Use a provided buffer, if there is one, or else allocate a new one
    if (Module['buffer']) {
        buffer = Module['buffer'];
        assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
    }
    else {
        // Use a WebAssembly memory where available
        if (typeof WebAssembly === 'object' && typeof WebAssembly.Memory === 'function') {
            assert(TOTAL_MEMORY % WASM_PAGE_SIZE === 0);
            Module['wasmMemory'] = new WebAssembly.Memory({ 'initial': TOTAL_MEMORY / WASM_PAGE_SIZE, 'maximum': TOTAL_MEMORY / WASM_PAGE_SIZE });
            buffer = Module['wasmMemory'].buffer;
        }
        else {
            buffer = new ArrayBuffer(TOTAL_MEMORY);
        }
        assert(buffer.byteLength === TOTAL_MEMORY);
        Module['buffer'] = buffer;
    }
    updateGlobalBufferViews();
    function getTotalMemory() {
        return TOTAL_MEMORY;
    }
    // Endianness check (note: assumes compiler arch was little-endian)
    HEAP32[0] = 0x63736d65; /* 'emsc' */
    HEAP16[1] = 0x6373;
    if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63)
        throw 'Runtime error: expected the system to be little-endian!';
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
                    Module['dynCall_v'](func);
                }
                else {
                    Module['dynCall_vi'](func, callback.arg);
                }
            }
            else {
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
        if (Module['preRun']) {
            if (typeof Module['preRun'] == 'function')
                Module['preRun'] = [Module['preRun']];
            while (Module['preRun'].length) {
                addOnPreRun(Module['preRun'].shift());
            }
        }
        callRuntimeCallbacks(__ATPRERUN__);
    }
    function ensureInitRuntime() {
        checkStackCookie();
        if (runtimeInitialized)
            return;
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
        checkStackCookie();
        // compatibility - merge in anything from Module['postRun'] at this time
        if (Module['postRun']) {
            if (typeof Module['postRun'] == 'function')
                Module['postRun'] = [Module['postRun']];
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
        if (dontAddNull)
            HEAP8[end] = lastChar; // Restore the value under the null character.
    }
    function writeArrayToMemory(array, buffer) {
        assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)');
        HEAP8.set(array, buffer);
    }
    function writeAsciiToMemory(str, buffer, dontAddNull) {
        for (var i = 0; i < str.length; ++i) {
            assert(str.charCodeAt(i) === str.charCodeAt(i) & 0xff);
            HEAP8[((buffer++) >> 0)] = str.charCodeAt(i);
        }
        // Null-terminate the pointer to the HEAP.
        if (!dontAddNull)
            HEAP8[((buffer) >> 0)] = 0;
    }
    function unSign(value, bits, ignore) {
        if (value >= 0) {
            return value;
        }
        return bits <= 32 ? 2 * Math.abs(1 << (bits - 1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
            : Math.pow(2, bits) + value;
    }
    function reSign(value, bits, ignore) {
        if (value <= 0) {
            return value;
        }
        var half = bits <= 32 ? Math.abs(1 << (bits - 1)) // abs is needed if bits == 32
            : Math.pow(2, bits - 1);
        if (value >= half && (bits <= 32 || value > half)) {
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
            if (!runDependencyTracking[id])
                return id;
            id = orig + Math.random();
        }
        return id;
    }
    function addRunDependency(id) {
        runDependencies++;
        if (Module['monitorRunDependencies']) {
            Module['monitorRunDependencies'](runDependencies);
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
                            Module.printErr('still waiting on run dependencies:');
                        }
                        Module.printErr('dependency: ' + dep);
                    }
                    if (shown) {
                        Module.printErr('(end of list)');
                    }
                }, 10000);
            }
        }
        else {
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
        }
        else {
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
    var /* show errors on likely calls to FS when it was not included */ FS = {
        error: function () {
            abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
        },
        init: function () { FS.error(); },
        createDataFile: function () { FS.error(); },
        createPreloadedFile: function () { FS.error(); },
        createLazyFile: function () { FS.error(); },
        open: function () { FS.error(); },
        mkdev: function () { FS.error(); },
        registerDevice: function () { FS.error(); },
        analyzePath: function () { FS.error(); },
        loadFilesFromDB: function () { FS.error(); },
        ErrnoError: function ErrnoError() { FS.error(); },
    };
    Module['FS_createDataFile'] = FS.createDataFile;
    Module['FS_createPreloadedFile'] = FS.createPreloadedFile;
    // Prefix of data URIs emitted by SINGLE_FILE and related options.
    var dataURIPrefix = 'data:application/octet-stream;base64,';
    // Indicates whether filename is a base64 data URI.
    function isDataURI(filename) {
        return String.prototype.startsWith ?
            filename.startsWith(dataURIPrefix) :
            filename.indexOf(dataURIPrefix) === 0;
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
        if (typeof Module['locateFile'] === 'function') {
            if (!isDataURI(wasmTextFile)) {
                wasmTextFile = Module['locateFile'](wasmTextFile);
            }
            if (!isDataURI(wasmBinaryFile)) {
                wasmBinaryFile = Module['locateFile'](wasmBinaryFile);
            }
            if (!isDataURI(asmjsCodeFile)) {
                asmjsCodeFile = Module['locateFile'](asmjsCodeFile);
            }
        }
        // utilities
        var wasmPageSize = 64 * 1024;
        var info = {
            'global': null,
            'env': null,
            'asm2wasm': {
                "f64-rem": function (x, y) {
                    return x % y;
                },
                "debugger": function () {
                    debugger;
                }
            },
            'parent': Module // Module inside wasm-js.cpp refers to wasm-js.cpp; this allows access to the outside program.
        };
        var exports = null;
        function mergeMemory(newBuffer) {
            // The wasm instance creates its memory. But static init code might have written to
            // buffer already, including the mem init file, and we must copy it over in a proper merge.
            // TODO: avoid this copy, by avoiding such static init writes
            // TODO: in shorter term, just copy up to the last static init write
            var oldBuffer = Module['buffer'];
            if (newBuffer.byteLength < oldBuffer.byteLength) {
                Module['printErr']('the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here');
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
                if (Module['wasmBinary']) {
                    return new Uint8Array(Module['wasmBinary']);
                }
                var binary = tryParseAsDataURI(wasmBinaryFile);
                if (binary) {
                    return binary;
                }
                if (Module['readBinary']) {
                    return Module['readBinary'](wasmBinaryFile);
                }
                else {
                    throw "on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
                }
            }
            catch (err) {
                abort(err);
            }
        }
        function getBinaryPromise() {
            // if we don't have the binary yet, and have the Fetch api, use that
            // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
            if (!Module['wasmBinary'] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function') {
                return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
                    if (!response['ok']) {
                        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                    }
                    return response['arrayBuffer']();
                }).catch(function () {
                    return getBinary();
                });
            }
            // Otherwise, getBinary should be able to get it synchronously
            return new Promise(function (resolve, reject) {
                resolve(getBinary());
            });
        }
        // do-method functions
        function doNativeWasm(global, env, providedBuffer) {
            if (typeof WebAssembly !== 'object') {
                Module['printErr']('no native wasm support detected');
                return false;
            }
            // prepare memory import
            if (!(Module['wasmMemory'] instanceof WebAssembly.Memory)) {
                Module['printErr']('no native wasm Memory in use');
                return false;
            }
            env['memory'] = Module['wasmMemory'];
            // Load the wasm module and create an instance of using native support in the JS engine.
            info['global'] = {
                'NaN': NaN,
                'Infinity': Infinity
            };
            info['global.Math'] = Math;
            info['env'] = env;
            // handle a generated wasm instance, receiving its exports and
            // performing other necessary setup
            function receiveInstance(instance, module) {
                exports = instance.exports;
                if (exports.memory)
                    mergeMemory(exports.memory);
                Module['asm'] = exports;
                Module["usingWasm"] = true;
                removeRunDependency('wasm-instantiate');
            }
            addRunDependency('wasm-instantiate');
            // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
            // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
            // to any other async startup actions they are performing.
            if (Module['instantiateWasm']) {
                try {
                    return Module['instantiateWasm'](info, receiveInstance);
                }
                catch (e) {
                    Module['printErr']('Module.instantiateWasm callback failed with error: ' + e);
                    return false;
                }
            }
            // Async compilation can be confusing when an error on the page overwrites Module
            // (for example, if the order of elements is wrong, and the one defining Module is
            // later), so we save Module and check it later.
            var trueModule = Module;
            function receiveInstantiatedSource(output) {
                // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
                // receiveInstance() will swap in the exports (to Module.asm) so they can be called
                assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
                trueModule = null;
                receiveInstance(output['instance'], output['module']);
            }
            function instantiateArrayBuffer(receiver) {
                getBinaryPromise().then(function (binary) {
                    return WebAssembly.instantiate(binary, info);
                }).then(receiver).catch(function (reason) {
                    Module['printErr']('failed to asynchronously prepare wasm: ' + reason);
                    abort(reason);
                });
            }
            // Prefer streaming instantiation if available.
            if (!Module['wasmBinary'] &&
                typeof WebAssembly.instantiateStreaming === 'function' &&
                !isDataURI(wasmBinaryFile) &&
                typeof fetch === 'function') {
                WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, { credentials: 'same-origin' }), info)
                    .then(receiveInstantiatedSource)
                    .catch(function (reason) {
                    // We expect the most common failure cause to be a bad MIME type for the binary,
                    // in which case falling back to ArrayBuffer instantiation should work.
                    Module['printErr']('wasm streaming compile failed: ' + reason);
                    Module['printErr']('falling back to ArrayBuffer instantiation');
                    instantiateArrayBuffer(receiveInstantiatedSource);
                });
            }
            else {
                instantiateArrayBuffer(receiveInstantiatedSource);
            }
            return {}; // no exports yet; we'll fill them in later
        }
        // We may have a preloaded value in Module.asm, save it
        Module['asmPreload'] = Module['asm'];
        // Memory growth integration code
        var asmjsReallocBuffer = Module['reallocBuffer'];
        var wasmReallocBuffer = function (size) {
            var PAGE_MULTIPLE = Module["usingWasm"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE; // In wasm, heap size must be a multiple of 64KB. In asm.js, they need to be multiples of 16MB.
            size = alignUp(size, PAGE_MULTIPLE); // round up to wasm page size
            var old = Module['buffer'];
            var oldSize = old.byteLength;
            if (Module["usingWasm"]) {
                // native wasm support
                try {
                    var result = Module['wasmMemory'].grow((size - oldSize) / wasmPageSize); // .grow() takes a delta compared to the previous size
                    if (result !== (-1 | 0)) {
                        // success in native wasm memory growth, get the buffer from the memory
                        return Module['buffer'] = Module['wasmMemory'].buffer;
                    }
                    else {
                        return null;
                    }
                }
                catch (e) {
                    console.error('Module.reallocBuffer: Attempted to grow from ' + oldSize + ' bytes to ' + size + ' bytes, but got error: ' + e);
                    return null;
                }
            }
        };
        Module['reallocBuffer'] = function (size) {
            if (finalMethod === 'asmjs') {
                return asmjsReallocBuffer(size);
            }
            else {
                return wasmReallocBuffer(size);
            }
        };
        // we may try more than one; this is the final one, that worked and we are using
        var finalMethod = '';
        // Provide an "asm.js function" for the application, called to "link" the asm.js module. We instantiate
        // the wasm module at that time, and it receives imports and provides exports and so forth, the app
        // doesn't need to care that it is wasm or olyfilled wasm or asm.js.
        Module['asm'] = function (global, env, providedBuffer) {
            env = fixImports(env);
            // import table
            if (!env['table']) {
                var TABLE_SIZE = Module['wasmTableSize'];
                if (TABLE_SIZE === undefined)
                    TABLE_SIZE = 1024; // works in binaryen interpreter at least
                var MAX_TABLE_SIZE = Module['wasmMaxTableSize'];
                if (typeof WebAssembly === 'object' && typeof WebAssembly.Table === 'function') {
                    if (MAX_TABLE_SIZE !== undefined) {
                        env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, 'maximum': MAX_TABLE_SIZE, 'element': 'anyfunc' });
                    }
                    else {
                        env['table'] = new WebAssembly.Table({ 'initial': TABLE_SIZE, element: 'anyfunc' });
                    }
                }
                else {
                    env['table'] = new Array(TABLE_SIZE); // works in binaryen interpreter at least
                }
                Module['wasmTable'] = env['table'];
            }
            if (!env['memoryBase']) {
                env['memoryBase'] = Module['STATIC_BASE']; // tell the memory segments where to place themselves
            }
            if (!env['tableBase']) {
                env['tableBase'] = 0; // table starts at 0 by default, in dynamic linking this will change
            }
            // try the methods. each should return the exports if it succeeded
            var exports;
            exports = doNativeWasm(global, env, providedBuffer);
            if (!exports)
                abort('no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods');
            return exports;
        };
        var methodHandler = Module['asm']; // note our method handler, as we may modify Module['asm'] later
    }
    integrateWasmJS();
    // === Body ===
    var ASM_CONSTS = [];
    STATIC_BASE = GLOBAL_BASE;
    STATICTOP = STATIC_BASE + 9888;
    /* global initializers */ __ATINIT__.push();
    var STATIC_BUMP = 9888;
    Module["STATIC_BASE"] = STATIC_BASE;
    Module["STATIC_BUMP"] = STATIC_BUMP;
    /* no memory initializer */
    var tempDoublePtr = STATICTOP;
    STATICTOP += 16;
    assert(tempDoublePtr % 8 == 0);
    function copyTempFloat(ptr) {
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
    }
    // {{PRE_LIBRARY}}
    function ___lock() { }
    var SYSCALLS = { varargs: 0, get: function (varargs) {
            SYSCALLS.varargs += 4;
            var ret = HEAP32[(((SYSCALLS.varargs) - (4)) >> 2)];
            return ret;
        }, getStr: function () {
            var ret = Pointer_stringify(SYSCALLS.get());
            return ret;
        }, get64: function () {
            var low = SYSCALLS.get(), high = SYSCALLS.get();
            if (low >= 0)
                assert(high === 0);
            else
                assert(high === -1);
            return low;
        }, getZero: function () {
            assert(SYSCALLS.get() === 0);
        } };
    function ___syscall140(which, varargs) {
        SYSCALLS.varargs = varargs;
        try {
            // llseek
            var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
            // NOTE: offset_high is unused - Emscripten's off_t is 32-bit
            var offset = offset_low;
            FS.llseek(stream, offset, whence);
            HEAP32[((result) >> 2)] = stream.position;
            if (stream.getdents && offset === 0 && whence === 0)
                stream.getdents = null; // reset readdir state
            return 0;
        }
        catch (e) {
            if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError))
                abort(e);
            return -e.errno;
        }
    }
    function flush_NO_FILESYSTEM() {
        // flush anything remaining in the buffers during shutdown
        var fflush = Module["_fflush"];
        if (fflush)
            fflush(0);
        var printChar = ___syscall146.printChar;
        if (!printChar)
            return;
        var buffers = ___syscall146.buffers;
        if (buffers[1].length)
            printChar(1, 10);
        if (buffers[2].length)
            printChar(2, 10);
    }
    function ___syscall146(which, varargs) {
        SYSCALLS.varargs = varargs;
        try {
            // writev
            // hack to support printf in NO_FILESYSTEM
            var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
            var ret = 0;
            if (!___syscall146.buffers) {
                ___syscall146.buffers = [null, [], []]; // 1 => stdout, 2 => stderr
                ___syscall146.printChar = function (stream, curr) {
                    var buffer = ___syscall146.buffers[stream];
                    assert(buffer);
                    if (curr === 0 || curr === 10) {
                        (stream === 1 ? Module['print'] : Module['printErr'])(UTF8ArrayToString(buffer, 0));
                        buffer.length = 0;
                    }
                    else {
                        buffer.push(curr);
                    }
                };
            }
            for (var i = 0; i < iovcnt; i++) {
                var ptr = HEAP32[(((iov) + (i * 8)) >> 2)];
                var len = HEAP32[(((iov) + (i * 8 + 4)) >> 2)];
                for (var j = 0; j < len; j++) {
                    ___syscall146.printChar(stream, HEAPU8[ptr + j]);
                }
                ret += len;
            }
            return ret;
        }
        catch (e) {
            if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError))
                abort(e);
            return -e.errno;
        }
    }
    function ___syscall54(which, varargs) {
        SYSCALLS.varargs = varargs;
        try {
            // ioctl
            return 0;
        }
        catch (e) {
            if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError))
                abort(e);
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
        }
        catch (e) {
            if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError))
                abort(e);
            return -e.errno;
        }
    }
    function ___unlock() { }
    function _emscripten_has_threading_support() {
        return 0;
    }
    var cttz_i8 = allocate([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", ALLOC_STATIC);
    function _llvm_cttz_i32(x) {
        x = x | 0;
        var ret = 0;
        ret = ((HEAP8[(((cttz_i8) + (x & 0xff)) >> 0)]) | 0);
        if ((ret | 0) < 8)
            return ret | 0;
        ret = ((HEAP8[(((cttz_i8) + ((x >> 8) & 0xff)) >> 0)]) | 0);
        if ((ret | 0) < 8)
            return (ret + 8) | 0;
        ret = ((HEAP8[(((cttz_i8) + ((x >> 16) & 0xff)) >> 0)]) | 0);
        if ((ret | 0) < 8)
            return (ret + 16) | 0;
        return (((HEAP8[(((cttz_i8) + (x >>> 24)) >> 0)]) | 0) + 24) | 0;
    }
    function _llvm_cttz_i64(l, h) {
        var ret = _llvm_cttz_i32(l);
        if (ret == 32)
            ret += _llvm_cttz_i32(h);
        return ((setTempRet0(0), ret) | 0);
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
        return self.LLVM_SAVEDSTACKS.length - 1;
    }
    function _emscripten_memcpy_big(dest, src, num) {
        HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
        return dest;
    }
    function _pthread_create() {
        return 11;
    }
    function _pthread_join() { }
    function _pthread_mutex_init() { }
    function ___setErrNo(value) {
        if (Module['___errno_location'])
            HEAP32[((Module['___errno_location']()) >> 2)] = value;
        else
            Module.printErr('failed to set errno from JS');
        return value;
    }
    var ERRNO_CODES = { EPERM: 1, ENOENT: 2, ESRCH: 3, EINTR: 4, EIO: 5, ENXIO: 6, E2BIG: 7, ENOEXEC: 8, EBADF: 9, ECHILD: 10, EAGAIN: 11, EWOULDBLOCK: 11, ENOMEM: 12, EACCES: 13, EFAULT: 14, ENOTBLK: 15, EBUSY: 16, EEXIST: 17, EXDEV: 18, ENODEV: 19, ENOTDIR: 20, EISDIR: 21, EINVAL: 22, ENFILE: 23, EMFILE: 24, ENOTTY: 25, ETXTBSY: 26, EFBIG: 27, ENOSPC: 28, ESPIPE: 29, EROFS: 30, EMLINK: 31, EPIPE: 32, EDOM: 33, ERANGE: 34, ENOMSG: 42, EIDRM: 43, ECHRNG: 44, EL2NSYNC: 45, EL3HLT: 46, EL3RST: 47, ELNRNG: 48, EUNATCH: 49, ENOCSI: 50, EL2HLT: 51, EDEADLK: 35, ENOLCK: 37, EBADE: 52, EBADR: 53, EXFULL: 54, ENOANO: 55, EBADRQC: 56, EBADSLT: 57, EDEADLOCK: 35, EBFONT: 59, ENOSTR: 60, ENODATA: 61, ETIME: 62, ENOSR: 63, ENONET: 64, ENOPKG: 65, EREMOTE: 66, ENOLINK: 67, EADV: 68, ESRMNT: 69, ECOMM: 70, EPROTO: 71, EMULTIHOP: 72, EDOTDOT: 73, EBADMSG: 74, ENOTUNIQ: 76, EBADFD: 77, EREMCHG: 78, ELIBACC: 79, ELIBBAD: 80, ELIBSCN: 81, ELIBMAX: 82, ELIBEXEC: 83, ENOSYS: 38, ENOTEMPTY: 39, ENAMETOOLONG: 36, ELOOP: 40, EOPNOTSUPP: 95, EPFNOSUPPORT: 96, ECONNRESET: 104, ENOBUFS: 105, EAFNOSUPPORT: 97, EPROTOTYPE: 91, ENOTSOCK: 88, ENOPROTOOPT: 92, ESHUTDOWN: 108, ECONNREFUSED: 111, EADDRINUSE: 98, ECONNABORTED: 103, ENETUNREACH: 101, ENETDOWN: 100, ETIMEDOUT: 110, EHOSTDOWN: 112, EHOSTUNREACH: 113, EINPROGRESS: 115, EALREADY: 114, EDESTADDRREQ: 89, EMSGSIZE: 90, EPROTONOSUPPORT: 93, ESOCKTNOSUPPORT: 94, EADDRNOTAVAIL: 99, ENETRESET: 102, EISCONN: 106, ENOTCONN: 107, ETOOMANYREFS: 109, EUSERS: 87, EDQUOT: 122, ESTALE: 116, ENOTSUP: 95, ENOMEDIUM: 123, EILSEQ: 84, EOVERFLOW: 75, ECANCELED: 125, ENOTRECOVERABLE: 131, EOWNERDEAD: 130, ESTRPIPE: 86 };
    function _sysconf(name) {
        // long sysconf(int name);
        // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
        switch (name) {
            case 30: return PAGE_SIZE;
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
                if (typeof navigator === 'object')
                    return navigator['hardwareConcurrency'] || 1;
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
        if (dontAddNull)
            u8array.length = numBytesWritten;
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
            }
            catch (_) {
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
        }
        catch (_) {
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
    function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"); Module["printErr"]("Build with ASSERTIONS=2 for more info."); abort(x); }
    function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"); Module["printErr"]("Build with ASSERTIONS=2 for more info."); abort(x); }
    Module['wasmTableSize'] = 16;
    Module['wasmMaxTableSize'] = 16;
    function invoke_ii(index, a1) {
        try {
            return Module["dynCall_ii"](index, a1);
        }
        catch (e) {
            if (typeof e !== 'number' && e !== 'longjmp')
                throw e;
            Module["setThrew"](1, 0);
        }
    }
    function invoke_iiii(index, a1, a2, a3) {
        try {
            return Module["dynCall_iiii"](index, a1, a2, a3);
        }
        catch (e) {
            if (typeof e !== 'number' && e !== 'longjmp')
                throw e;
            Module["setThrew"](1, 0);
        }
    }
    Module.asmGlobalArg = {};
    Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_ii": nullFunc_ii, "nullFunc_iiii": nullFunc_iiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "___lock": ___lock, "___setErrNo": ___setErrNo, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "___syscall54": ___syscall54, "___syscall6": ___syscall6, "___unlock": ___unlock, "_emscripten_has_threading_support": _emscripten_has_threading_support, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_llvm_cttz_i32": _llvm_cttz_i32, "_llvm_cttz_i64": _llvm_cttz_i64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "_pthread_create": _pthread_create, "_pthread_join": _pthread_join, "_pthread_mutex_init": _pthread_mutex_init, "_sysconf": _sysconf, "flush_NO_FILESYSTEM": flush_NO_FILESYSTEM, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8 };
    // EMSCRIPTEN_START_ASM
    var asm = Module["asm"] // EMSCRIPTEN_END_ASM
    (Module.asmGlobalArg, Module.asmLibraryArg, buffer);
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
    Module["asm"] = asm;
    var ___errno_location = Module["___errno_location"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["___errno_location"].apply(null, arguments);
    };
    var _ccurl_pow = Module["_ccurl_pow"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_ccurl_pow"].apply(null, arguments);
    };
    var _fflush = Module["_fflush"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_fflush"].apply(null, arguments);
    };
    var _free = Module["_free"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_free"].apply(null, arguments);
    };
    var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_llvm_bswap_i32"].apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_malloc"].apply(null, arguments);
    };
    var _memcpy = Module["_memcpy"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_memcpy"].apply(null, arguments);
    };
    var _memset = Module["_memset"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_memset"].apply(null, arguments);
    };
    var _pthread_mutex_lock = Module["_pthread_mutex_lock"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_pthread_mutex_lock"].apply(null, arguments);
    };
    var _pthread_mutex_unlock = Module["_pthread_mutex_unlock"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_pthread_mutex_unlock"].apply(null, arguments);
    };
    var _sbrk = Module["_sbrk"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["_sbrk"].apply(null, arguments);
    };
    var establishStackSpace = Module["establishStackSpace"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["establishStackSpace"].apply(null, arguments);
    };
    var getTempRet0 = Module["getTempRet0"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["getTempRet0"].apply(null, arguments);
    };
    var runPostSets = Module["runPostSets"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["runPostSets"].apply(null, arguments);
    };
    var setTempRet0 = Module["setTempRet0"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["setTempRet0"].apply(null, arguments);
    };
    var setThrew = Module["setThrew"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["setThrew"].apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["stackAlloc"].apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["stackRestore"].apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["stackSave"].apply(null, arguments);
    };
    var dynCall_ii = Module["dynCall_ii"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["dynCall_ii"].apply(null, arguments);
    };
    var dynCall_iiii = Module["dynCall_iiii"] = function () {
        assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
        assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
        return Module["asm"]["dynCall_iiii"].apply(null, arguments);
    };
    ;
    // === Auto-generated postamble setup entry stuff ===
    Module['asm'] = asm;
    if (!Module["intArrayFromString"])
        Module["intArrayFromString"] = function () { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["intArrayToString"])
        Module["intArrayToString"] = function () { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    Module["ccall"] = ccall;
    Module["cwrap"] = cwrap;
    if (!Module["setValue"])
        Module["setValue"] = function () { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getValue"])
        Module["getValue"] = function () { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["allocate"])
        Module["allocate"] = function () { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getMemory"])
        Module["getMemory"] = function () { abort("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["Pointer_stringify"])
        Module["Pointer_stringify"] = function () { abort("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["AsciiToString"])
        Module["AsciiToString"] = function () { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stringToAscii"])
        Module["stringToAscii"] = function () { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["UTF8ArrayToString"])
        Module["UTF8ArrayToString"] = function () { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["UTF8ToString"])
        Module["UTF8ToString"] = function () { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stringToUTF8Array"])
        Module["stringToUTF8Array"] = function () { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stringToUTF8"])
        Module["stringToUTF8"] = function () { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["lengthBytesUTF8"])
        Module["lengthBytesUTF8"] = function () { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["UTF16ToString"])
        Module["UTF16ToString"] = function () { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stringToUTF16"])
        Module["stringToUTF16"] = function () { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["lengthBytesUTF16"])
        Module["lengthBytesUTF16"] = function () { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["UTF32ToString"])
        Module["UTF32ToString"] = function () { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stringToUTF32"])
        Module["stringToUTF32"] = function () { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["lengthBytesUTF32"])
        Module["lengthBytesUTF32"] = function () { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["allocateUTF8"])
        Module["allocateUTF8"] = function () { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["stackTrace"])
        Module["stackTrace"] = function () { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addOnPreRun"])
        Module["addOnPreRun"] = function () { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addOnInit"])
        Module["addOnInit"] = function () { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addOnPreMain"])
        Module["addOnPreMain"] = function () { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addOnExit"])
        Module["addOnExit"] = function () { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addOnPostRun"])
        Module["addOnPostRun"] = function () { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["writeStringToMemory"])
        Module["writeStringToMemory"] = function () { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["writeArrayToMemory"])
        Module["writeArrayToMemory"] = function () { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["writeAsciiToMemory"])
        Module["writeAsciiToMemory"] = function () { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addRunDependency"])
        Module["addRunDependency"] = function () { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["removeRunDependency"])
        Module["removeRunDependency"] = function () { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS"])
        Module["FS"] = function () { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["FS_createFolder"])
        Module["FS_createFolder"] = function () { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createPath"])
        Module["FS_createPath"] = function () { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createDataFile"])
        Module["FS_createDataFile"] = function () { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createPreloadedFile"])
        Module["FS_createPreloadedFile"] = function () { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createLazyFile"])
        Module["FS_createLazyFile"] = function () { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createLink"])
        Module["FS_createLink"] = function () { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_createDevice"])
        Module["FS_createDevice"] = function () { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["FS_unlink"])
        Module["FS_unlink"] = function () { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
    if (!Module["GL"])
        Module["GL"] = function () { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["staticAlloc"])
        Module["staticAlloc"] = function () { abort("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["dynamicAlloc"])
        Module["dynamicAlloc"] = function () { abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["warnOnce"])
        Module["warnOnce"] = function () { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["loadDynamicLibrary"])
        Module["loadDynamicLibrary"] = function () { abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["loadWebAssemblyModule"])
        Module["loadWebAssemblyModule"] = function () { abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getLEB"])
        Module["getLEB"] = function () { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getFunctionTables"])
        Module["getFunctionTables"] = function () { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["alignFunctionTables"])
        Module["alignFunctionTables"] = function () { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["registerFunctions"])
        Module["registerFunctions"] = function () { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["addFunction"])
        Module["addFunction"] = function () { abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["removeFunction"])
        Module["removeFunction"] = function () { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getFuncWrapper"])
        Module["getFuncWrapper"] = function () { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["prettyPrint"])
        Module["prettyPrint"] = function () { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["makeBigInt"])
        Module["makeBigInt"] = function () { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["dynCall"])
        Module["dynCall"] = function () { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["getCompilerSetting"])
        Module["getCompilerSetting"] = function () { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["intArrayFromBase64"])
        Module["intArrayFromBase64"] = function () { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["tryParseAsDataURI"])
        Module["tryParseAsDataURI"] = function () { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
    if (!Module["ALLOC_NORMAL"])
        Object.defineProperty(Module, "ALLOC_NORMAL", { get: function () { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
    if (!Module["ALLOC_STACK"])
        Object.defineProperty(Module, "ALLOC_STACK", { get: function () { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
    if (!Module["ALLOC_STATIC"])
        Object.defineProperty(Module, "ALLOC_STATIC", { get: function () { abort("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
    if (!Module["ALLOC_DYNAMIC"])
        Object.defineProperty(Module, "ALLOC_DYNAMIC", { get: function () { abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
    if (!Module["ALLOC_NONE"])
        Object.defineProperty(Module, "ALLOC_NONE", { get: function () { abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
    // Modularize mode returns a function, which can be called to
    // create instances. The instances provide a then() method,
    // must like a Promise, that receives a callback. The callback
    // is called when the module is ready to run, with the module
    // as a parameter. (Like a Promise, it also returns the module
    // so you can use the output of .then(..)).
    Module['then'] = function (func) {
        // We may already be ready to run code at this time. if
        // so, just queue a call to the callback.
        if (Module['calledRun']) {
            func(Module);
        }
        else {
            // we are not ready to call then() yet. we must call it
            // at the same time we would call onRuntimeInitialized.
            var old = Module['onRuntimeInitialized'];
            Module['onRuntimeInitialized'] = function () {
                if (old)
                    old();
                func(Module);
            };
        }
        return Module;
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
        if (!Module['calledRun'])
            run();
        if (!Module['calledRun'])
            dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
    };
    /** @type {function(Array=)} */
    function run(args) {
        args = args || Module['arguments'];
        if (runDependencies > 0) {
            return;
        }
        writeStackCookie();
        preRun();
        if (runDependencies > 0)
            return; // a preRun added a dependency, run will be called later
        if (Module['calledRun'])
            return; // run may have just been called through dependencies being fulfilled just in this very frame
        function doRun() {
            if (Module['calledRun'])
                return; // run may have just been called while the async setStatus time below was happening
            Module['calledRun'] = true;
            if (ABORT)
                return;
            ensureInitRuntime();
            preMain();
            if (Module['onRuntimeInitialized'])
                Module['onRuntimeInitialized']();
            assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
            postRun();
        }
        if (Module['setStatus']) {
            Module['setStatus']('Running...');
            setTimeout(function () {
                setTimeout(function () {
                    Module['setStatus']('');
                }, 1);
                doRun();
            }, 1);
        }
        else {
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
        Module['print'] = Module['printErr'] = function (x) {
            has = true;
        };
        try {
            var flush = flush_NO_FILESYSTEM;
            if (flush)
                flush(0);
        }
        catch (e) { }
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
        }
        else {
            ABORT = true;
            EXITSTATUS = status;
            STACKTOP = initialStackTop;
            exitRuntime();
            if (Module['onExit'])
                Module['onExit'](status);
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
        if (what !== undefined) {
            Module.print(what);
            Module.printErr(what);
            what = JSON.stringify(what);
        }
        else {
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
    Module['abort'] = abort;
    // {{PRE_RUN_ADDITIONS}}
    if (Module['preInit']) {
        if (typeof Module['preInit'] == 'function')
            Module['preInit'] = [Module['preInit']];
        while (Module['preInit'].length > 0) {
            Module['preInit'].pop()();
        }
    }
    Module["noExitRuntime"] = true;
    run();
    // {{POST_RUN_ADDITIONS}}
    // {{MODULE_ADDITIONS}}
    return Module;
};
if (typeof exports === 'object' && typeof module === 'object')
    module.exports = Module;
else if (typeof define === 'function' && define['amd'])
    define([], function () { return Module; });
else if (typeof exports === 'object')
    exports["Module"] = Module;
