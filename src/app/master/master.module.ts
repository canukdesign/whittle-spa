import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkComponent } from './fork/fork.component';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../core/shared.module';
import { TreeforkComponent } from './treefork/treefork.component';



@NgModule({
  declarations: [ForkComponent, TreeforkComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
