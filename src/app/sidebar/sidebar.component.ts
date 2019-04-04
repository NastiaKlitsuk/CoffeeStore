import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from '../services/clock/clock.service';
import { Observable, Subscription } from 'rxjs';
import { GlobalState } from '../store/global/global.reducer';
import * as globalActions from '../store/global/global.actions';
import { Store } from '@ngrx/store';
import {
  UserMessage,
  GoodMorningMessage,
  GoodAfternoonMessage,
  GoodEveningMessage,
  GoodNigthMessage
} from '../model/user-message';
import { isMorning, isAfternoon, isEvening } from '../utils/date-time.utils';
import { Menu } from '../model/main-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public userMessage: UserMessage;
  public currentDateTimeSubscription: Subscription;
  private menuSelected: boolean;

  constructor(
    private clockServcie: ClockService,
    private store: Store<GlobalState>
  ) {}

  ngOnInit() {
    this.currentDateTimeSubscription = this.clockServcie
      .getCurrentDateTime()
      .subscribe(dateTime => this.setUserGoodDayMessage(dateTime));
  }

  onMenuSelected(menu: Menu) {
    this.menuSelected = true;
    this.userMessage = menu.userMessage || { message: '' };
    this.store.dispatch(new globalActions.MenuSelected(menu.name));
  }

  setUserGoodDayMessage(dateTime: string) {
    if (this.menuSelected) {
      return;
    }

    if (isMorning(dateTime)) {
      this.userMessage = GoodMorningMessage;
    } else if (isAfternoon(dateTime)) {
      this.userMessage = GoodAfternoonMessage;
    } else if (isEvening(dateTime)) {
      this.userMessage = GoodEveningMessage;
    } else {
      this.userMessage = GoodNigthMessage;
    }
  }

  ngOnDestroy(): void {
    this.currentDateTimeSubscription.unsubscribe();
  }
}
