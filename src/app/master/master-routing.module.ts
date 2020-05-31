import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';

import { RegistrationGuard } from '../core/auth/registration.guard';
import { ForkComponent } from './fork/fork.component';
import { AuthoGuard } from '../core/auth/autho.guard';


const clientsRoutes: Routes = [
  { path: 'master/fork', component: ForkComponent, canActivate: [AuthGuard, AuthoGuard] }  
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
