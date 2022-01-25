import {Component, OnInit} from '@angular/core';
import {greet} from 'wasm-pkg';

declare const APP_VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    greet('World');
  }

  title = 'angular-rust-wasm' + '@' + APP_VERSION;
}
