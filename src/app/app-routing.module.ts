import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhittleComponent } from './whittler/whittle/whittle.component';
import { LandingComponent } from './home/landing/landing.component';
import { AuthGuard } from './core/auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/auth/interceptor.service';
import { RegistrationComponent } from './home/registration/registration.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'register', component: RegistrationComponent }
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


