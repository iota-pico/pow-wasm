[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-pow-wasm/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-pow-wasm.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-pow-wasm) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/9a90b5ea-2754-4101-be27-53cbf58738f5/badge)](https://nodesecurity.io/orgs/iotaeco/projects/9a90b5ea-2754-4101-be27-53cbf58738f5)
[![Coveralls](https://img.shields.io/coveralls/iotaeco/iota-pico-pow-wasm.svg)](https://coveralls.io/github/iotaeco/iota-pico-pow-wasm)

# IOTA Pico Framework Proof Of Work for WebAssembly

## Introduction

The IOTA Pico Framework is intended to be a multi-layered set of object oriented JavaScript libraries.

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

## Installation

```shell
npm install @iota-pico/pow-wasm
```

## POW WebAssembly

The library contains the Curl proof of work algorithm as a WebAssembly module. 

This is currenly only single threaded as emscripten support for threading relies on SharedArrayBuffer which is currently disabled in most browsers due to the Spectre vulnerability. See [https://kripken.github.io/emscripten-site/docs/porting/pthreads.html](https://kripken.github.io/emscripten-site/docs/porting/pthreads.html) for more details.

## Platform Abstraction Layers (PALs)

* Browser PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser)
* NodeJS PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-nodejs)

## API Documentation

Documentation for the code can be found in [docs](./docs/README.md) folder.

## Tutorials

Some tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

## Examples

There is example code using all the functionality of the libraries for the following platforms and languages.

* Browser Examples written in JavaScript [@iota-pico/examples-browser-js](https://github.com/iotaeco/iota-pico-examples-browser-js)
* Browser Examples written in TypeScript [@iota-pico/examples-browser-ts](https://github.com/iotaeco/iota-pico-examples-browser-ts)
* NodeJS CLI Examples written in JavaScript [@iota-pico/examples-nodejs-js](https://github.com/iotaeco/iota-pico-examples-nodejs-js)
* NodeJS CLI Examples written in TypeScript [@iota-pico/examples-nodejs-ts](https://github.com/iotaeco/iota-pico-examples-nodejs-ts)
