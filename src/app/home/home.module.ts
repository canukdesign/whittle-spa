import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../core/shared.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, SharedModule],
  exports: [CommonModule]
})
export class HomeModule { }
