import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Console_logComponent } from './console_log.component';

const routes: Routes = [{ path: '', component: Console_logComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Console_logRoutingModule { }
