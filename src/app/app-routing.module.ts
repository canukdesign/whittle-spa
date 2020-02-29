import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhittleComponent } from './whittler/whittle/whittle.component';
import { LandingComponent } from './home/landing/landing.component';
import { AuthGuard } from './core/auth/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'whittler', component: WhittleComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
