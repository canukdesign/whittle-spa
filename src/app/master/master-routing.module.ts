import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { ScopeGuard } from '../core/auth/scope.guard';
import { ListDuplesComponent } from './duples/list-duples/list-duples.component';
import { UpdateDupleComponent } from './duples/update-duple/update-duple.component';
import { ListQuestionsComponent } from './questions/list-questions/list-questions.component';


const clientsRoutes: Routes = [
  { path: 'master/duples', component: ListDuplesComponent, canActivate: [AuthGuard, ScopeGuard], data: {expectedScopes: ['superadmin']} },
  { path: 'master/duples/:id', component: UpdateDupleComponent, canActivate: [AuthGuard, ScopeGuard], data: {expectedScopes: ['superadmin']} },
  { path: 'master/questions', component: ListQuestionsComponent, canActivate: [AuthGuard, ScopeGuard], data: {expectedScopes: ['superadmin']} }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(clientsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MasterRoutingModule { }
