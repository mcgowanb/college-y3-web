// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-yo7QdsvT4wcr-Z9cGlbsIcWFSspNl_Q",
    authDomain: "web-proj-auth.firebaseapp.com",
    databaseURL: "https://web-proj-auth.firebaseio.com",
    projectId: "web-proj-auth",
    storageBucket: "",
    messagingSenderId: "390928824998"
  }
};
