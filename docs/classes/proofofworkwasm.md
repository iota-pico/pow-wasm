[@iota-pico/pow-wasm](../README.md) > [ProofOfWorkWasm](../classes/proofofworkwasm.md)



# Class: ProofOfWorkWasm


ProofOfWork implementation using WebAssembly.

## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworkwasm.md#constructor)


### Methods

* [initialize](proofofworkwasm.md#initialize)
* [performsSingle](proofofworkwasm.md#performssingle)
* [pow](proofofworkwasm.md#pow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkWasm**(webPlatform?: *[IWebPlatform](../interfaces/iwebplatform.md)*): [ProofOfWorkWasm](proofofworkwasm.md)


*Defined in [proofOfWorkWasm.ts:21](https://github.com/iotaeco/iota-pico-pow-wasm/blob/2e927b8/src/proofOfWorkWasm.ts#L21)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webPlatform | [IWebPlatform](../interfaces/iwebplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |





**Returns:** [ProofOfWorkWasm](proofofworkwasm.md)

---


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [proofOfWorkWasm.ts:42](https://github.com/iotaeco/iota-pico-pow-wasm/blob/2e927b8/src/proofOfWorkWasm.ts#L42)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in [proofOfWorkWasm.ts:67](https://github.com/iotaeco/iota-pico-pow-wasm/blob/2e927b8/src/proofOfWorkWasm.ts#L67)*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in [proofOfWorkWasm.ts:79](https://github.com/iotaeco/iota-pico-pow-wasm/blob/2e927b8/src/proofOfWorkWasm.ts#L79)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash`   |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[]   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`[]>
The trytes produced by the proof of work.






___


