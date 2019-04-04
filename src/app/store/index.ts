import { GlobalState, globalReducer } from './global/global.reducer';

export type AppState = GlobalState;

export const appReducers = {
  global: globalReducer
};
