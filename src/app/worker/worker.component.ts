import {Component} from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./log.worker', import.meta.url));
      worker.onmessage = ({data}) => {
        console.log(`page got message: ${data}`);
      };
      console.log('start')
      setTimeout(() => {
        worker.postMessage('hello');
      }, 2000);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
