import {Component} from '@angular/core';

declare const APP_VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rust-wasm' + '@' + APP_VERSION;
}
