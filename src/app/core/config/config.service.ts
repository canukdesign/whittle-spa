import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const AUTH0_DOMAIN = new InjectionToken<string>('AUTH0_DOMAIN');
export const AUTH0_CLIENT_ID = new InjectionToken<string>('AUTH0_CLIENT_ID');
export const AUTH0_AUDIENCE = new InjectionToken<string>('AUTH0_AUDIENCE');

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public whittleApiBaseUrl: string;
  public auth0Domain: string;
  public auth0ClientId: string;
  public auth0Audience: string;

  constructor(
    @Inject(API_BASE_URL) baseUrl?: string,
    @Inject(AUTH0_DOMAIN) auth0Domain?: string,
    @Inject(AUTH0_CLIENT_ID) auth0ClientId?: string,
    @Inject(AUTH0_AUDIENCE) auth0Audience?: string) { 

    this.whittleApiBaseUrl = baseUrl;
    this.auth0Domain = auth0Domain;
    this.auth0ClientId = auth0ClientId;
    this.auth0Audience = auth0Audience;
  }
}




