import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { WhittlerComponent } from './whittler/whittler.component';


const clientsRoutes: Routes = [
  { path: 'whittler/whittler', component: WhittlerComponent, canActivate: [AuthGuard ] }
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
export class WhittlerRoutingModule { }
