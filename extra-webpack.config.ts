const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
import {CustomWebpackBrowserSchema, TargetOptions} from '@angular-builders/custom-webpack';
import * as path from 'path';
import * as webpack from 'webpack';
import * as pkg from './package.json';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  config.plugins!.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, '.'),
      outDir: 'wasm-pkg',
      forceMode: 'development'
    }),
    // Have this example work in Edge which doesn't ship `TextEncoder` or
    // `TextDecoder` at this time.
    new webpack.ProvidePlugin({
      TextDecoder: ['text-encoding', 'TextDecoder'],
      TextEncoder: ['text-encoding', 'TextEncoder']
    })
  );

  return config;
};
