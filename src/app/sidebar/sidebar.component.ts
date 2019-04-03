import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { ClockService } from '../services/clock/clock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public currentDateTime$: Observable<string>;

  constructor(private clockServcie: ClockService) {}

  ngOnInit() {
    this.currentDateTime$ = this.clockServcie.getCurrentDateTime();
  }
}
