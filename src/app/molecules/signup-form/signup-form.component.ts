import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Input() signupButtonValue: String;
  constructor() {
  }

  ngOnInit() {
  }
}
