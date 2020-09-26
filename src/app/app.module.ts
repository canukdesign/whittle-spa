import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhittlerModule } from './whittler/whittler.module';
import { ConfigService, API_BASE_URL, AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './core/config/config.service';
import { environment } from 'src/environments/environment';
import { MasterModule } from './master/master.module';
import { NavbarComponent } from './core/nav/navbar/navbar.component';
import { SharedModule } from './core/shared.module';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MasterModule,
    WhittlerModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.API_BASE_URL},
    { provide: AUTH0_AUDIENCE, useValue: environment.AUTH0_AUDIENCE},       
    { provide: AUTH0_CLIENT_ID, useValue: environment.AUTH0_CLIENT_ID},       
    { provide: AUTH0_DOMAIN, useValue: environment.AUTH0_DOMAIN},       
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
