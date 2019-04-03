import { Component } from '@angular/core';
import { isMorning, isAfternoon, isEvening } from '../utils/date-time.utils';

@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomemessageComponent {
  public message: string;

  constructor() {
    if (isMorning()) {
      this.message = 'GOOD MORNING';
    } else if (isAfternoon()) {
      this.message = 'GOOD AFTERNOON';
    } else if (isEvening()) {
      this.message = 'GOOD EVENING';
    } else {
      this.message = 'GOOD NIGTH';
    }
  }
}
