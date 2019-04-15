import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from '../services/clock/clock.service';
import { Subscription } from 'rxjs';
import {
  UserMessage,
  GoodMorningMessage,
  GoodAfternoonMessage,
  GoodEveningMessage,
  GoodNigthMessage
} from '../model/user-message';
import { isMorning, isAfternoon, isEvening } from '../utils/date-time.utils';
import { NavigationMenu } from '../model/navigation-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public userMessage: UserMessage;
  public currentDateTimeSubscription: Subscription;
  private menuSelected: boolean;

  constructor(private clockServcie: ClockService) {}

  ngOnInit() {
    this.currentDateTimeSubscription = this.clockServcie
      .getCurrentDateTime()
      .subscribe(dateTime => this.setUserGoodDayMessage(dateTime));
  }

  onMenuSelected(menu: NavigationMenu) {
    this.menuSelected = true;
    this.userMessage = menu.userMessage;
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
