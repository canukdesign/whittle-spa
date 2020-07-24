import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { ScopeGuard } from '../core/auth/scope.guard';
import { MasterComponent } from './master/master.component';


const clientsRoutes: Routes = [
  { path: 'master', component: MasterComponent, canActivate: [AuthGuard, ScopeGuard], data: {expectedScopes: ['superadmin']} }
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
