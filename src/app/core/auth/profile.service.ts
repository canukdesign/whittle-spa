import { Injectable } from '@angular/core';
import { WhittlerClient } from '../services/whittle-api/whittle-api.service';
import { Observable, from, combineLatest, throwError, of } from 'rxjs';
import { concatMap, tap, shareReplay, catchError, map } from 'rxjs/operators';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    
  constructor(
    private router: Router,
    private whittlerClient: WhittlerClient) { 
      this.localProfileSetup():
    }

  isRegistered$ = this.whittlerClient.getProfile().pipe(
    map(profile => this.registered = profile.isRegistered)
  );

  registered: boolean = null;

  private localProfileSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkProfile$ = this.isRegistered$.pipe(
      concatMap((registered: boolean) => {
        if (registered) {
        }
        // If not authenticated, return stream that emits 'false'
        return of(registered);
      })
    );
    checkProfile$.subscribe();
  }  
}
