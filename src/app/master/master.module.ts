import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkComponent } from './fork/fork.component';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../core/shared.module';
import { TreeforkComponent } from './treefork/treefork.component';
import { AddForkComponent } from './fork/add-fork/add-fork.component';
import { AddTreeforkComponent } from './treefork/add-treefork/add-treefork.component';



@NgModule({
  declarations: [ForkComponent, TreeforkComponent, AddForkComponent, AddTreeforkComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
