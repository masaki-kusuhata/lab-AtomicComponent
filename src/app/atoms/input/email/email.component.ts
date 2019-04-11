import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-atom-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

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
