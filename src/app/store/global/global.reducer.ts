import { GlobalActions } from './global.actions';
import * as menuActions from './global.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface GlobalState {
  selectedMenu: string;
}

export const initialMenuState = {
  selectedMainMenu: null
};

export function globalReducer(state = initialMenuState, action: GlobalActions) {
  switch (action.type) {
    case menuActions.MENU_SELECTED:
      const selectedMenu = action.payload;
      return {
        ...state,
        selectedMenu
      };
  }

  return state;
}

export const globalState = createFeatureSelector('global');
export const getSelectedMainMenu = createSelector(
  globalState,
  (state: GlobalState) => state.selectedMenu
);
