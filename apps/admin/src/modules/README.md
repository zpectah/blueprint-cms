# BlueprintCMS: Modules

Modules created here represent one separate page/section. 
The content of the module is "separate", i.e. that it exports only itself 
and that depending on the use.

Modules can be under authorization or not. If the module contains more logic 
and is authorized, it should be loaded asynchronously by `React.lazy`.

## Exporting

If the module is loaded asynchronously, there is no need to 
create `index.ts` in the root directory. Because the asynchronous import 
is routed through the absolute path to the module.
