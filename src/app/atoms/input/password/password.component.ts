import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-atom-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  value: String;

  @Output() event = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
  }

  emitKeyupEvent() {
    this.event.emit(this.value);
  }
}
