import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  subscriptions: Subscription[] = [];

  @Output() sidenavClose = new EventEmitter<void>();

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onClose() {
    this.sidenavClose.emit();
  }
}
