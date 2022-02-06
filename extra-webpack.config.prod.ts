const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
import {CustomWebpackBrowserSchema, TargetOptions} from '@angular-builders/custom-webpack';
import * as path from 'path';
import * as webpack from 'webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  config.plugins!.push(
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, './wasm/hello'),
      outDir: 'hello-pkg',
      forceMode: 'production'
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, './wasm/julia'),
      outDir: 'julia-pkg',
      forceMode: 'production'
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, './wasm/console_log'),
      outDir: 'console_log-pkg',
      forceMode: 'production'
    }),
    // Have this example work in Edge which doesn't ship `TextEncoder` or
    // `TextDecoder` at this time.
    new webpack.ProvidePlugin({
      TextDecoder: ['text-encoding', 'TextDecoder'],
      TextEncoder: ['text-encoding', 'TextEncoder']
    })
  );
  config.experiments =
    {
      ...config.experiments,
      syncWebAssembly: true,
    }

  return config;
};
