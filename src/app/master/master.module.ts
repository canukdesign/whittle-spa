import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../core/shared.module';
import { ListQuestionsComponent } from './questions/list-questions/list-questions.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { ListDuplesComponent } from './duples/list-duples/list-duples.component';
import { AddDupleComponent } from './duples/add-duple/add-duple.component';
import { UpdateDupleComponent } from './duples/update-duple/update-duple.component';
import { MasterComponent } from './master/master.component';


@NgModule({
  declarations: [AddDupleComponent, UpdateDupleComponent, ListDuplesComponent, AddQuestionComponent, ListQuestionsComponent, MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
