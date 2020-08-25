import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './ui/material.module';
import { WidgetsModule } from './ui/widgets.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nav/navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    WidgetsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    WidgetsModule
  ]
})
export class SharedModule { }
