import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { WhittlerModule } from './whittler/whittler.module';
import { ConfigService, API_BASE_URL } from './core/config/config.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    WhittlerModule
  ],
  providers: [
    ConfigService,
    { provide: API_BASE_URL, useValue: environment.API_BASE_URL},       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
