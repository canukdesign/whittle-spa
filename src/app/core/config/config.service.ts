import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then((data) => {
        this.appConfig = data;
      });
  }

  getServerUrl(): string {
    return this.appConfig.API_BASE_URL;
  }
}
