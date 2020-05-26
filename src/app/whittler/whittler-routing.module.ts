import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';

import { WhittlerProfileComponent } from './profile/whittler-profile.component';
import { WhittleComponent } from './whittle/whittle.component';
import { RegistrationGuard } from '../core/auth/registration.guard';
import { CircleComponent } from './circle/circle.component';


const clientsRoutes: Routes = [
  { path: 'whittler/whittle', component: WhittleComponent, canActivate: [AuthGuard, RegistrationGuard] },
  { path: 'whittler/profile', component: WhittlerProfileComponent, canActivate: [ AuthGuard, RegistrationGuard ]},
  { path: 'whittler/circle', component: CircleComponent, canActivate: [ AuthGuard, RegistrationGuard ]}    
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
