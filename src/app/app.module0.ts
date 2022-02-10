import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';

console.log('isPlatformBrowser', isPlatformBrowser('serverApp'));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    RouterModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule0 {
}
