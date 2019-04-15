import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PreviousComponent } from './previous/previous.component';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { MenuService } from './services/menu/menu.service';
import { StoreModule } from '@ngrx/store';
import { menuReducer } from './store/menu/menu.reducer';
import { MenuResolverService } from './services/menu/menu-resolver.service';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './store/menu/menu.effects';

@NgModule({
  declarations: [
    MenuComponent,
    FavoriteComponent,
    PreviousComponent,
    MenucategoryComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    StoreModule.forFeature('storeMenu', menuReducer),
    EffectsModule.forFeature([MenuEffects]),
  ],
  providers: [MenuService, MenuResolverService]
})
export class OrderModule {}
