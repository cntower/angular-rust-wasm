import { Component, OnInit } from '@angular/core';
import {run, wasm_log} from 'wasm/console_log/console_log-pkg';
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
