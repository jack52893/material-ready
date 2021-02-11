import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Breakpoint } from '../utils/ui/breakpoint.type';
import { BreakpointService } from '../utils/ui/service/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  form: FormGroup;
  breakpoint: Breakpoint = 'xsmall';
  subscriptions: Subscription[] = [];

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
      })
    );
  }

  onInput(value: string) {}

  onSubmit() {}

  onToggle() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
