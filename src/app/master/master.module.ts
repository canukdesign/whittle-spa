import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkComponent } from './fork/fork.component';
import { MasterRoutingModule } from './master-routing.module';



@NgModule({
  declarations: [ForkComponent],
  imports: [
    MasterRoutingModule,
    CommonModule
  ]
})
export class MasterModule { }
