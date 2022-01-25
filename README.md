# AngularRustWasm ( Angular, Rust, WebAssembly )
Example of integration WebAssembly (WASM) in Angular 13

## Prerequisites
- [Angular CLI](https://github.com/angular/angular-cli)
- [Rust](https://www.rust-lang.org/tools/install)

## Installation
`npm install`

## Tasks done:
1. Create new Angular project - `ng new angular-rust-wasm`
2. Create Rust files `Cargo.toml` and `wasm-src/lib.rs` based on https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html#cargotoml
3. Install custom-webpack `npm install -D @angular-builders/custom-webpack` and configure
4. Build wasm package: Add wasm-pack-plugin `npm install -D @wasm-tool/wasm-pack-plugin` and plug it in webpack
5. Call WebAssembly from Angular 🙂
