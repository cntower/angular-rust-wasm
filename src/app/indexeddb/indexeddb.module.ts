import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexeddbRoutingModule } from './indexeddb-routing.module';
import { IndexeddbComponent } from './indexeddb.component';


@NgModule({
  declarations: [
    IndexeddbComponent
  ],
  imports: [
    CommonModule,
    IndexeddbRoutingModule
  ]
})
export class IndexeddbModule { }
