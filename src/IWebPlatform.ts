/**
 * IWebPlatform interface.
 */
export interface IWebPlatform {
    webAssemblyType: string;
    wasmModuleLoader(module: any): void;
}
