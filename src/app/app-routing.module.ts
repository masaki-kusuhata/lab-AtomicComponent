import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPageComponent } from './container/environments/sign-in-page/sign-in-page.component';
import { AddressSearchPageComponent } from './container/environments/address-search-page/address-search-page.component';

const routes: Routes = [
  { path: 'signin', component: SignInPageComponent },
  { path: '', component: AddressSearchPageComponent },
  { path: 'address-search', component: AddressSearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
