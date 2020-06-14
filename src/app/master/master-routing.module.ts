import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';

import { ForkComponent } from './fork/fork.component';
import { ScopeGuard } from '../core/auth/scope.guard';


const clientsRoutes: Routes = [
  { path: 'master/fork', component: ForkComponent, canActivate: [AuthGuard, ScopeGuard], data: {expectedScopes: ['superadmin']} }  
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
