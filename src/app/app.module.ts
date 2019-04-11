import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent } from './atoms/button/button.component';
import { SigninComponent } from './ecosystems/signin/signin.component';
import { SigninFormComponent } from './molecules/signin-form/signin-form.component';
import { PasswordComponent } from './atoms/input/password/password.component';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { SignupComponent } from './ecosystems/signup/signup.component';
import { TextComponent } from './atoms/input/text/text.component';
import { EmailComponent } from './atoms/input/email/email.component';
import { SignupFormComponent } from './molecules/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SigninComponent,
    SigninFormComponent,
    PasswordComponent,
    AnchorComponent,
    SignupComponent,
    TextComponent,
    EmailComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
