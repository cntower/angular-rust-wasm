import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuliaComponent } from './julia.component';

const routes: Routes = [{ path: '', component: JuliaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuliaRoutingModule { }
