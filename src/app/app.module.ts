import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { HttpClientModule } from '@angular/common/http';
import { Amplify } from 'aws-amplify';


Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: 'eu-west-2',
    userPoolId: 'us-west-2_My9ziyhGC',
    userPoolWebClientId: '43be1rar2nq3n27b8vl8d18eu6',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
})

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxLocalStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
