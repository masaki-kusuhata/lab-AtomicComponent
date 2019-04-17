import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-atom-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() value: String;
  @Output() event = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  emitClickEvent() {
    this.event.emit();
  }
}
