import {Component, OnInit} from '@angular/core';
import {greet} from 'wasm/hello/hello-pkg';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    greet('World');
  }


}
