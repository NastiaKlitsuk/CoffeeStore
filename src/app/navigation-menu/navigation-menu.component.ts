import { navigationMenu, NavigationMenu } from '../model/navigation-menu';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  public menu: NavigationMenu[];
  public selectedSubMenu: NavigationMenu;
  public selectedMainMenu: NavigationMenu;
  public isSubMenuExist: boolean;
  @Output() mainMenuSelected: EventEmitter<NavigationMenu>;

  constructor() {
    this.menu = navigationMenu;
    this.mainMenuSelected = new EventEmitter<NavigationMenu>();
  }

  onMainMenuSelected(selectedMenu: NavigationMenu) {
    this.isSubMenuExist = selectedMenu.subMenu.length > 0;
    this.selectedMainMenu = selectedMenu;
    this.mainMenuSelected.emit(selectedMenu);
  }

  onSubMenuSelected(selectedMenu: NavigationMenu) {
    this.selectedSubMenu = selectedMenu;
  }
}
