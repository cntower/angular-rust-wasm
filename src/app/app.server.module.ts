import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppComponent} from './app.component';
import {AppModule0} from './app.module0';

@NgModule({
  imports: [
    AppModule0, // to solve https://github.com/angular/angularfire/issues/3102
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
