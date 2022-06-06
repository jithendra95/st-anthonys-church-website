import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { environment } from 'src/environments/environment';
import { GeneralComponent } from './components/general/general.component';
import { MassComponent } from './components/mass/mass.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordInputComponent } from './ui-elements/password-input/password-input.component';
import { ConfirmDialogComponent } from './ui-elements/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminConsoleComponent,
    GeneralComponent,
    MassComponent,
    AnnouncementComponent,
    AlertComponent,
    LoginComponent,
    PasswordInputComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
