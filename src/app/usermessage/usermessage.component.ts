import { Component, Input } from '@angular/core';
import { UserMessage } from '../model/user-message';

@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.css']
})
export class UserMessageComponent {
  @Input() userMessage: UserMessage;

  constructor() {}
}
