import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { WhittlerModule } from './whittler/whittler.module';
import { ConfigService } from './core/config/config.service';
import { MasterModule } from './master/master.module';
import { NavbarComponent } from './core/nav/navbar/navbar.component';
import { SharedModule } from './core/shared.module';

const initializerConfigFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

// function load(): (() => Promise<boolean>) {
//   return (): Promise<boolean> => {
//     return new Promise<boolean>((resolve: (a: boolean) => void): void => {
//       resolve(true);
//     });
//   };
// }

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    MasterModule,
    WhittlerModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
