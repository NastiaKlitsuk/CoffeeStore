import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategorizedMenu, StoreMenu } from '../../model/menu';

@Injectable()
export class MenuService {
  private menu: BehaviorSubject<CategorizedMenu[]>;
  public menu$: Observable<CategorizedMenu[]>;

  constructor() {
    this.menu = new BehaviorSubject(StoreMenu);
    this.menu$ = this.menu.asObservable();
  }
}
