import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MaybeCategorizedMenu } from '../model/menu';
import { Store } from '@ngrx/store';
import { MenuState, getMenu } from '../store/menu/menu.reducer';
import * as menuActions from '../store/menu/menu.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu$: Observable<MaybeCategorizedMenu>;

  constructor(private store: Store<MenuState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.menu$ = this.store.select(getMenu);
  }

  onMenuItemSelected(menuItemName: string) {
    this.store.dispatch(new menuActions.MenuItemSelected(menuItemName));
  }
}
