import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authentication } from '../../../models/authentication/authentication';

@Component({
  selector: 'app-molecule-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  @Output() event = new EventEmitter<Authentication>();

  email: String;
  password: String;
  singinButtonValue: String;

  constructor() {
    this.singinButtonValue = 'sign in';
  }

  ngOnInit() {
  }

  onReceiveEventFromSinginButton() {
    let authentication: Authentication;
    authentication = {
      email: this.email,
      password: this.password
    };
    this.event.emit(authentication);
  }

  onReceiveEventFromEmail(email: String) {
    this.email = email;
  }
  onReceiveEventFromPassword(password: String) {
    this.password = password;
  }
}
