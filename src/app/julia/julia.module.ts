import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuliaRoutingModule } from './julia-routing.module';
import { JuliaComponent } from './julia.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    JuliaComponent
  ],
  imports: [
    CommonModule,
    JuliaRoutingModule,
    FormsModule
  ]
})
export class JuliaModule { }
