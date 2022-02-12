import {Component} from '@angular/core';
import {greet} from 'pkg/modules/hello';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  onGreetClick() {
    greet('World');
  }
}
