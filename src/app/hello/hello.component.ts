import {Component} from '@angular/core';
import {greet} from 'wasm/hello/hello-pkg';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./hello.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  onGreetClick() {
    greet('World');
  }
}
