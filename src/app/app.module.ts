import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( {
    apiKey: 'AIzaSyBIEMLAadSk4hkuJZDeo77splKo6ZJy1W8',
    authDomain: 'whc-london-chat-demo.firebaseapp.com',
    databaseURL: 'https://whc-london-chat-demo.firebaseio.com',
    projectId: 'whc-london-chat-demo',
    storageBucket: 'whc-london-chat-demo.appspot.com',
    messagingSenderId: '754056430526'
  }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
