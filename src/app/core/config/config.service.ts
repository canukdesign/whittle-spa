import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public whittleApiBaseUrl: string;

  constructor(@Optional() @Inject(API_BASE_URL) baseUrl?: string) { 
    this.whittleApiBaseUrl = baseUrl;
  }
}
