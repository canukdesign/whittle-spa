import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule],
  exports: [CommonModule]
})
export class HomeModule { }
