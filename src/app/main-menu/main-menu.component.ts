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
  public selectedLeafMenu: Menu;
  public isSubMenuExist: boolean;
  @Output() menuSelected: EventEmitter<Menu>;

  constructor() {
    this.menu = menu;
    this.menuSelected = new EventEmitter<Menu>();
  }

  menuClick(selectedMenu: Menu) {
    if (selectedMenu.subMenu.length || selectedMenu.userMessage) {
      this.selectedMenu = selectedMenu;
      this.isSubMenuExist = selectedMenu.subMenu.length > 0;
    }

    this.selectedLeafMenu =
      selectedMenu.subMenu.length === 0 ? selectedMenu : null;
    this.menuSelected.emit(selectedMenu);
  }
}
