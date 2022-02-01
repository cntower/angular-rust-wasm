import {Component} from '@angular/core';
import pkg from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wasm-rust' + '@' + JSON.stringify(pkg.version);
}
