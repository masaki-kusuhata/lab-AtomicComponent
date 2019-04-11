import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Authentication } from '../../models/authentication/authentication';

@Component({
  selector: 'app-ecosytem-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  anchorDisplayName: String;
  routerLinkPath: String;
  singinButtonValue: String;
  authentication: Authentication;

  constructor() {
    this.anchorDisplayName = 'New to MemoriesShares? Create an account.';
    this.routerLinkPath = '/signup';
    this.singinButtonValue = 'Sing In';
    this.authentication = {
      email: 'tanaka',
      password: ''
    };
  }

  ngOnInit() {
  }

  onReceiveEventFromSigninForm(authentication: Authentication) {
    this.authentication = authentication;
    console.log(authentication.email);
    console.log(authentication.password);
  }
}
