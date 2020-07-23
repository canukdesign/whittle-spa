import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { WhittleComponent } from './whittle/whittle.component';


const clientsRoutes: Routes = [
  { path: 'whittler/whittle', component: WhittleComponent, canActivate: [AuthGuard ] }
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
