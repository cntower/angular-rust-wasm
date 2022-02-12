/// <reference lib="webworker" />
// The worker has its own scope and no direct access to functions/objects of the
// global scope. We import the generated JS file to make `wasm_bindgen`
// available which we need to initialize our WASM code.

import {ActionText, ActionWorker} from '../worker/actions.worker';

importScripts('./pkg/indexeddb/indexeddb.js');

console.log('Initializing indexeddb worker')

async function init_wasm_in_worker() {
  // Load the wasm file by awaiting the Promise returned by `wasm_bindgen`.
  await wasm_bindgen('./pkg/indexeddb/indexeddb_bg.wasm');
}

init_wasm_in_worker().then(() => {
  console.log('The indexeddb wasm file was loaded.');
  wasm_bindgen.example().then(resultFromDb => console.log('Result from db:', resultFromDb));
  postMessage({type: 'init'} as ActionWorker);
});

addEventListener('message', (messageEvent: MessageEvent) => {
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
