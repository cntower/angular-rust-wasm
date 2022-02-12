import {Component} from '@angular/core';
import {ActionText, ActionWorker} from '../worker/actions.worker';

@Component({
  selector: 'app-indexeddb',
  templateUrl: './indexeddb.component.html',
  styleUrls: ['./indexeddb.component.css']
})
export class IndexeddbComponent {
  worker: Worker | undefined;

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('./indexeddb.worker', import.meta.url));
      this.worker.onmessage = (messageEvent: MessageEvent<ActionWorker>) => this.dispatch(messageEvent);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  dispatch(messageEvent: MessageEvent<ActionWorker>) {
    let action = messageEvent.data;
    if (action.type === 'init') {
      this.onWorkerInit();
    }
    if (action.type === 'text') {
      this.onWorkerText(messageEvent.data as ActionText);
    }
  }

  onWorkerInit() {
    this.worker?.postMessage({text: 'hello', type: 'text'} as ActionText);
  }

  onWorkerText(action: ActionText) {
    console.log(action.text);
  }

}
