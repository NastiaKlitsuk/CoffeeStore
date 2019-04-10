import { Menu, menu } from '../model/main-menu';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  public menu: Menu[];
  public selectedMenu: Menu;
  public isSubMenuExist: boolean;
  @Output() menuSelected: EventEmitter<Menu>;

  constructor() {
    this.menu = menu;
    this.menuSelected = new EventEmitter<Menu>();
  }

  menuClick(selectedMenu: Menu) {
    this.isSubMenuExist = selectedMenu.subMenu.length > 0;
    if (this.isSubMenuExist || selectedMenu.userMessage) {
      this.selectedMenu = selectedMenu;
      this.menuSelected.emit(selectedMenu);
    }
  }
}
