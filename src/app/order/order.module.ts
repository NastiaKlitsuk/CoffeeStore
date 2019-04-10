import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderRoutingModule } from './order-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PreviousComponent } from './previous/previous.component';

@NgModule({
  declarations: [OrderComponent, MenuComponent, FavoriteComponent, PreviousComponent],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
