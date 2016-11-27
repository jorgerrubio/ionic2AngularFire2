#Ionic 2 RC3 and AngularFire2

###Ionic, Cordova and Typescript installed

```
$ npm install -g ionic cordova typescript
```

###create a new proyect
```
$ ionic start nameapp blank --v2
$ cd nameapp
```
###install firebase and angualarfire2
```
$ npm install @types/request@0.0.30 --save-dev --save-exact
$ npm install firebase angularfire2 --save
```

###Import & Initialize
You can open your app.module.ts and import everything we’ll be using, this is the only time you’ll see this file
You can find your firebaseConfig data in the [Firebase’s Console](https://console.firebase.google.com/).
![add firebase web](https://i1.wp.com/javebratt.com/wp-content/uploads/2016/10/console.png?w=1320&ssl=1)
```javacript
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
```
###And then add the initialize to @NgModule:
```javacript
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
    ...
```

