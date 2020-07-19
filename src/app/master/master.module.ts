import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkComponent } from './fork/fork.component';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../core/shared.module';
import { TreeforkComponent } from './treefork/treefork.component';
import { AddForkComponent } from './fork/add-fork/add-fork.component';
import { AddTreeforkComponent } from './treefork/add-treefork/add-treefork.component';
import { UpdateForkComponent } from './fork/update-fork/update-fork.component';
import { ListQuestionsComponent } from './questions/list-questions/list-questions.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { ListDuplesComponent } from './duples/list-duples/list-duples.component';
import { AddDupleComponent } from './duples/add-duple/add-duple.component';
import { UpdateDupleComponent } from './duples/update-duple/update-duple.component';



@NgModule({
  declarations: [ForkComponent, TreeforkComponent, AddForkComponent, AddTreeforkComponent, UpdateForkComponent, ListQuestionsComponent, AddQuestionComponent, ListDuplesComponent, AddDupleComponent, UpdateDupleComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
