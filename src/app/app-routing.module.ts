import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'hello', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)},
  {path: 'julia', loadChildren: () => import('./julia/julia.module').then(m => m.JuliaModule)},
  { path: 'console_log', loadChildren: () => import('./console_log/console_log.module').then(m => m.Console_logModule) },
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
