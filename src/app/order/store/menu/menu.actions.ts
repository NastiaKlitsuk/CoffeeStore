import { Action } from '@ngrx/store';
import { MaybeCategorizedMenu } from '../../model/menu';

export const MENU_ITEM_SELECTED = '[Menu] Menu Item Selected';
export const LOAD_MENU = '[Menu] Load Menu';
export const LOAD_MENU_SUCCESS = '[Menu] Load Menu Success';

export class MenuItemSelected implements Action {
  readonly type = MENU_ITEM_SELECTED;
  constructor(public payload: string) {}
}

export class LoadMenu implements Action {
  readonly type = LOAD_MENU;
  constructor() {}
}

export class LoadMenuSuccess implements Action {
  readonly type = LOAD_MENU_SUCCESS;
  constructor(public payload: MaybeCategorizedMenu) {}
}

export type MenuActions = MenuItemSelected | LoadMenu | LoadMenuSuccess;
