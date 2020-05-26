import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WhittlerClient } from '../services/whittle-api/whittle-api.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {

  constructor(
    private router: Router,
    private whittlerClient: WhittlerClient) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.whittlerClient.getProfile().pipe(
      map(profile => profile.isRegistered),
      tap(registered => {
        if (!registered) {
          this.router.navigate(["register"]);
        }
      })
    )
  }
  
}
