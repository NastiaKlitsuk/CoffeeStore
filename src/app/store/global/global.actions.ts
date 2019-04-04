import { Action } from '@ngrx/store';

export const MENU_SELECTED = '[Global] Menu Selected';
export const SUB_MENU_SELECTED = '[Global] Sub Menu Selected';

export class MenuSelected implements Action {
  readonly type = MENU_SELECTED;
  constructor(public payload: string) {}
}

export class SubMenuSelected implements Action {
  readonly type = SUB_MENU_SELECTED;
  constructor(public payload: string) {}
}

export type GlobalActions = MenuSelected;
