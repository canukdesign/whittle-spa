import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WhittlerClient } from '../services/whittle-api/whittle-api.service';
import { tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private whittlerClient: WhittlerClient) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.isRegistered) {
      return true;
    } else {
      return this.whittlerClient.getProfile().pipe(
        map(profile => profile.isRegistered),
        tap(registered => {
          if (registered) {
            this.auth.isRegistered = true;
          } else {
            this.router.navigate(["register"]);
          }
        })
      )
    }
  }
  
}
