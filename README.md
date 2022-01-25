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
3. Install and configure custom-webpack `npm install -D @angular-builders/custom-webpack`...
4. Build wasm package: Add wasm-pack-plugin `npm install -D @wasm-tool/wasm-pack-plugin`...
5. Call WebAssembly from Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
