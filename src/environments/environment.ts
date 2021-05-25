// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const headers = {
  'Access-Control-Allow-Origin': 'Development',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'b0dc8eb7924540e1913ab262b8500721',
};

export const apiUrl = 'https://back-technicaltestapi.azurewebsites.net/';
export const methodGreetUrl = 'api/Greeter/ResponseGreet';
export const methodNameUrl = 'api/Greeter/ResponseName';
export const methodSayGoodByeUrl = 'api/Greeter/ResponseSayGoodBye';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
