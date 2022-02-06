import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Console_logRoutingModule } from './console_log-routing.module';
import { Console_logComponent } from './console_log.component';


@NgModule({
  declarations: [
    Console_logComponent
  ],
  imports: [
    CommonModule,
    Console_logRoutingModule
  ]
})
export class Console_logModule { }
