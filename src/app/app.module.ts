import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent } from './presentational/atoms/button/button.component';
import { SigninComponent } from './container/ecosystems/signin/signin.component';
import { SigninFormComponent } from './presentational/molecules/signin-form/signin-form.component';
import { PasswordComponent } from './presentational/atoms/input/password/password.component';
import { AnchorComponent } from './presentational/atoms/anchor/anchor.component';
import { SignupComponent } from './container/ecosystems/signup/signup.component';
import { TextComponent } from './presentational/atoms/input/text/text.component';
import { EmailComponent } from './presentational/atoms/input/email/email.component';
import { SignupFormComponent } from './presentational/molecules/signup-form/signup-form.component';
import { HeaderComponent } from './container/ecosystems/header/header.component';
import { FooterComponent } from './container/ecosystems/footer/footer.component';
import { AddressSearchComponent } from './container/ecosystems/address-search/address-search.component';
import { AddressSearchPageComponent } from './container/environments/address-search-page/address-search-page.component';
import { SignInPageComponent } from './container/environments/sign-in-page/sign-in-page.component';
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
    SignupFormComponent,
    HeaderComponent,
    FooterComponent,
    AddressSearchComponent,
    AddressSearchPageComponent,
    SignInPageComponent
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
