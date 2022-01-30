import {Component, OnInit} from '@angular/core';
import {greet} from 'wasm/wasm-pkg';
import pkg from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    greet('World');
  }

  title = 'angular-rust-wasm' + '@' + JSON.stringify(pkg.version);
}
