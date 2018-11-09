import { FcmService } from './service/fcm.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// FCM related imports
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
  apiKey: "AIzaSyD63ZOBLcJzGm_LRaEhNtX81e_RosJZL7I",
  authDomain: "fcmdemo-65c60.firebaseapp.com",
  databaseURL: "https://fcmdemo-65c60.firebaseio.com",
  projectId: "fcmdemo-65c60",
  storageBucket: "fcmdemo-65c60.appspot.com",
  messagingSenderId: "1086571478955"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Firebase,
    FcmService

  ]
})
export class AppModule { }
