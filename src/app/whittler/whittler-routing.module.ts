import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';

import { WhittlerProfileComponent } from './profile/whittler-profile.component';
import { WhittleComponent } from './whittle/whittle.component';


const clientsRoutes: Routes = [
  { path: 'whittler', component: WhittleComponent, canActivate: [AuthGuard] },
  { path: 'whittler/profile', component: WhittlerProfileComponent, canActivate: [ AuthGuard ]}  
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
