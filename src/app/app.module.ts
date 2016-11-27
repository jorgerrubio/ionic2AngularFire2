import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule/*, AuthProviders, AuthMethods*/ } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCmF0icC4LJlPueUKBBxMKQHy8Nb5jj9Ng",
  authDomain: "fireblogger-e4b20.firebaseapp.com",
  databaseURL: "https://fireblogger-e4b20.firebaseio.com",
  storageBucket: "fireblogger-e4b20.appspot.com",
  messagingSenderId: "127011656578"
};

// const myFirebaseAuthConfig = {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig/*, myFirebaseAuthConfig*/)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
