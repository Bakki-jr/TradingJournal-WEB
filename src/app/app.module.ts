import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFirebaseModule } from './modules/app-firebase/app-firebase.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFirebaseModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
