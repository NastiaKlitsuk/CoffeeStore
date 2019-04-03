import { Component, Input } from '@angular/core';
import { isMorning, isAfternoon, isEvening } from '../utils/date-time.utils';
import {
  WelcomeMessage,
  GoodMorningMessage,
  GoodAfternoonMessage,
  GoodEveningMessage,
  GoodNigthMessage
} from '../model/welcome-message';

@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomemessageComponent {
  @Input() dateTime: string;

  constructor() {}

  get messageInfo(): WelcomeMessage {
    if (isMorning(this.dateTime)) {
      return GoodMorningMessage;
    } else if (isAfternoon(this.dateTime)) {
      return GoodAfternoonMessage;
    } else if (isEvening(this.dateTime)) {
      return GoodEveningMessage;
    } else {
      return GoodNigthMessage;
    }
  }
}
