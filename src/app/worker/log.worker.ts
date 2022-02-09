/// <reference lib="webworker" />
// The worker has its own scope and no direct access to functions/objects of the
// global scope. We import the generated JS file to make `wasm_bindgen`
// available which we need to initialize our WASM code.

import {ActionText, ActionWorker} from './actions.worker';

importScripts('./pkg/worker/console_log.js');

console.log('Initializing worker')

async function init_wasm_in_worker() {
  // Load the wasm file by awaiting the Promise returned by `wasm_bindgen`.
  await wasm_bindgen('./pkg/worker/console_log_bg.wasm');
}

init_wasm_in_worker().then(() => {
  console.log('The wasm file was loaded.');
  postMessage({type: 'init'} as ActionWorker);
});

addEventListener('message', (messageEvent: MessageEvent) => {
  wasm_bindgen.wasm_log('Hey! From Web Worker!')
  dispatch(messageEvent);
});

function dispatch(messageEvent: MessageEvent<ActionWorker>) {
  let action = messageEvent.data;
  if (action.type === 'text') {
    onMainText(action as ActionText);
  }
}

function onMainText(action: ActionText) {
  const text = `worker response to ${action.text}`;
  postMessage({text, type: 'text'} as ActionText);
}
