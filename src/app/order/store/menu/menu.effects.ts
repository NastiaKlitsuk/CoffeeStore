import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as menuActions from './menu.actions';
import { switchMap, map } from 'rxjs/operators';
import { MenuService } from '../../services/menu/menu.service';

@Injectable()
export class MenuEffects {
  constructor(private actions$: Actions, private menuService: MenuService) {}

  @Effect()
  loadMenu$ = this.actions$.pipe(
    ofType(menuActions.LOAD_MENU),
    switchMap(() => {
      return this.menuService.menu$.pipe(
        map(menu => new menuActions.LoadMenuSuccess(menu))
      );
    })
  );
}
