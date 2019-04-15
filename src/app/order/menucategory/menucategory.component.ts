import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategorizedMenu } from '../model/menu';

// TODO: how to conditionally render an image

@Component({
  selector: 'app-menucategory',
  templateUrl: './menucategory.component.html',
  styleUrls: ['./menucategory.component.css']
})
export class MenucategoryComponent {
  @Input() menuCategory: CategorizedMenu;
  @Output() menuItemSelected: EventEmitter<string>;

  constructor() {
    this.menuItemSelected = new EventEmitter<string>();
  }

  onMenuItemSelected(menuItemName: string) {
    this.menuItemSelected.emit(menuItemName);
  }
}
