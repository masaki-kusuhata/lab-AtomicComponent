import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atom-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

  @Input() showName: String;
  @Input() routerLink: String;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goto() {
    this.router.navigate([this.routerLink]);
  }
}
