import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuState } from '../../store/menu/menu.reducer';
import * as menuActions from '../../store/menu/menu.actions';
import { of, EMPTY } from 'rxjs';

// TODO: how to set fetched data from the resolver to the store?
// If not possible, what are for example a case when to use a resolver
@Injectable()
export class MenuResolverService implements Resolve<any> {
  constructor(
    private store: Store<MenuState>
  ) {}

  resolve() {
    this.store.dispatch(new menuActions.LoadMenu());
    return of(EMPTY);

    // let menu: MaybeCategorizedMenu;
    // this.menuService.menu$.subscribe(storeMenu => (menu = storeMenu));
    // return menu;
  }
}
