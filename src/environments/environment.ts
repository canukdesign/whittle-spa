// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_BASE_URL: 'https://localhost:44340',
  AUTH0_DOMAIN: "whittle-life-dev.auth0.com",
  AUTH0_CLIENT_ID: "CTadRzDqN7YeFQVztS3yOvfFpIgqiOk5",
  AUTH0_AUDIENCE: "https://dev.local.api.whittle.life"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
