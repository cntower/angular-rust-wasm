/// <reference lib="webworker" />
// The worker has its own scope and no direct access to functions/objects of the
// global scope. We import the generated JS file to make `wasm_bindgen`
// available which we need to initialize our WASM code.
importScripts('./pkg/worker/console_log.js');

console.log('Initializing worker')

async function init_wasm_in_worker() {
  // Load the wasm file by awaiting the Promise returned by `wasm_bindgen`.
  // @ts-ignore
  await wasm_bindgen('./pkg/worker/console_log_bg.wasm');
}
init_wasm_in_worker();

addEventListener('message', ({data}) => {
  // @ts-ignore
  wasm_bindgen.wasm_log('Hey! From Web Worker!')
  const response = `worker response to ${data}`;
  postMessage(response);
});
