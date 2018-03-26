[@iota-pico/pow-wasm](../README.md) > [ProofOfWorkWasm](../classes/proofofworkwasm.md)



# Class: ProofOfWorkWasm


ProofOfWork implementation using WebAssembly.

## Hierarchy


 `ProofOfWorkBase`

**↳ ProofOfWorkWasm**







## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworkwasm.md#constructor)


### Properties

* [MAX_TIMESTAMP_VALUE](proofofworkwasm.md#max_timestamp_value)


### Methods

* [initialize](proofofworkwasm.md#initialize)
* [pow](proofofworkwasm.md#pow)
* [singlePow](proofofworkwasm.md#singlepow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkWasm**(webPlatform?: *[IWebPlatform](../interfaces/iwebplatform.md)*, timeService?: *`ITimeService`*): [ProofOfWorkWasm](proofofworkwasm.md)


*Overrides ProofOfWorkBase.__constructor*

*Defined in [proofOfWorkWasm.ts:20](https://github.com/iotaeco/iota-pico-pow-wasm/blob/01a71f7/src/proofOfWorkWasm.ts#L20)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webPlatform | [IWebPlatform](../interfaces/iwebplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |
| timeService | `ITimeService`   |  Service to get the time for attachments. |





**Returns:** [ProofOfWorkWasm](proofofworkwasm.md)

---


## Properties
<a id="max_timestamp_value"></a>

### «Static» MAX_TIMESTAMP_VALUE

**●  MAX_TIMESTAMP_VALUE**:  *`number`* 

*Inherited from ProofOfWorkBase.MAX_TIMESTAMP_VALUE*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-wasm/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:12*



The maximum timestamp value used in proof of work.




___


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Overrides ProofOfWorkBase.initialize*

*Defined in [proofOfWorkWasm.ts:44](https://github.com/iotaeco/iota-pico-pow-wasm/blob/01a71f7/src/proofOfWorkWasm.ts#L44)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Inherited from ProofOfWorkBase.pow*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-wasm/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:31*



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

<a id="singlepow"></a>

###  singlePow

► **singlePow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Overrides ProofOfWorkBase.singlePow*

*Defined in [proofOfWorkWasm.ts:72](https://github.com/iotaeco/iota-pico-pow-wasm/blob/01a71f7/src/proofOfWorkWasm.ts#L72)*



Perform a proof of work on a single item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


