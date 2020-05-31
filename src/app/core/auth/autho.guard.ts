import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {



  constructor(private auth: AuthService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth.getTokenSilently$().pipe(
      map(token => {
        if (token) {
          let helper = new JwtHelperService();
          let decodedToken = helper.decodeToken(token);
          return true;
        } else {
          return false;
        }}
      )
    );
  }
  
}
