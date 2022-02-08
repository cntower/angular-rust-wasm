import { Component, OnInit } from '@angular/core';
import {run, wasm_log} from 'src/pkg/console_log';
@Component({
  selector: 'app-console_log',
  templateUrl: './console_log.component.html',
  styleUrls: ['./console_log.component.css']
})
export class Console_logComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    run();
  }

  onLogFromComponentClick(){
    wasm_log('This log was sent from a component');
  }

}
