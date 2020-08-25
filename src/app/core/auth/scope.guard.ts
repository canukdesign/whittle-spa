import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScopeGuard implements CanActivate {

  private helper = new JwtHelperService();

  constructor(public auth:AuthService, public router: Router) {}
  
  // userHasScopes(scopes: Array<string>): boolean {
  //   const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
  //   return scopes.every(scope => grantedScopes.includes(scope));
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const requiredScopes: String[] = (next.data as any).expectedScopes;
    
    return this.auth.getTokenSilently$().pipe(
      map(token => {
        let decodedToken = this.helper.decodeToken(token);
        let userScopes: String[] = decodedToken.permissions;
        if (userScopes.every(userScope => requiredScopes.includes(userScope))) {
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}
