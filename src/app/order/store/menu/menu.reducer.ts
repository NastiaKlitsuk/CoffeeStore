import * as menuActions from './menu.actions';
import { MaybeCategorizedMenu } from '../../model/menu';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface MenuState {
  menu: MaybeCategorizedMenu;
  menuItemSelected: string;
}

const menuInitialState: MenuState = {
  menu: [],
  menuItemSelected: null
};

export function menuReducer(
  state = menuInitialState,
  action: menuActions.MenuActions
) {
  switch (action.type) {
    case menuActions.MENU_ITEM_SELECTED:
      return {
        ...state,
        menuItemSelected: action.payload
      };
    case menuActions.LOAD_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload
      };
  }

  return state;
}

export const menu = createFeatureSelector<MenuState>('storeMenu');
export const getMenu = createSelector(
  menu,
  (menuState: MenuState) => menuState.menu
);
