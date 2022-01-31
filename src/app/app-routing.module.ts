import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: 'hello', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) }, { path: 'julia', loadChildren: () => import('./julia/julia.module').then(m => m.JuliaModule) }]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
