import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../core/shared.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [LandingComponent, RegistrationComponent],
  imports: [CommonModule, SharedModule],
  exports: [CommonModule]
})
export class HomeModule { }
