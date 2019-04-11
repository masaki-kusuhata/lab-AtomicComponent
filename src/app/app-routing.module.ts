import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './ecosystems/signin/signin.component';
import { SignupComponent } from './ecosystems/signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
