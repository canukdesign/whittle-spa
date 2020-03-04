import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './ui/material.module';
import { WidgetsModule } from './ui/widgets.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
