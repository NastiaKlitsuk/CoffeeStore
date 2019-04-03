import { Component, OnInit } from '@angular/core';
import { MAIN_MENU } from '../model/main-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public menuHeaders: string[];

  constructor() {
    this.menuHeaders = Object.values(MAIN_MENU);
  }

  ngOnInit() {}
}
