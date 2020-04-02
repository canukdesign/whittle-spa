import { Injectable } from '@angular/core';
import { WhittleApiClient } from '../services/whittle-api/whittle-api.service';
import { Observable, from, combineLatest } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile;

  constructor(private whittleApi: WhittleApiClient) { }

  // getUserProfile$(options?): Observable<any> {
  //   return this.whittleApi.profile().pipe(
  //     concatMap(
  //       (profileResult) =>
  //       {
  //         this.profile = profileResult;
  //       },
  //       error => {
  //       });

  //   );
  // }  
}
