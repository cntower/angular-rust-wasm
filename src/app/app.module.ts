import {NgModule} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAnalytics, provideAnalytics, ScreenTrackingService,} from '@angular/fire/analytics';
import {AppModule0} from './app.module0';

console.log('isPlatformBrowser', isPlatformBrowser('serverApp'));

@NgModule({
  imports: [
    AppModule0,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [
    ScreenTrackingService,
    // UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
