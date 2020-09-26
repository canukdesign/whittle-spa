import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './whittler/landing/landing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/auth/interceptor.service';
import { AdminLandingComponent } from './master/admin-landing/admin-landing.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'adminhome', component: AdminLandingComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }    
  ]
})
export class AppRoutingModule { }


