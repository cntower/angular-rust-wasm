import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAnalytics, provideAnalytics, ScreenTrackingService,} from '@angular/fire/analytics';

console.log('isPlatformBrowser', isPlatformBrowser('serverApp'));


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HomeModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics())
  ],
  providers: [
    // ScreenTrackingService,
    // UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
