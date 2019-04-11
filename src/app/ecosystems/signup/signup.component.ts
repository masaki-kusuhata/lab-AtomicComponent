import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecosystems-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupButtonValue: String;

  constructor() {
    this.signupButtonValue = 'Sign up';
  }

  ngOnInit() {
  }
}
