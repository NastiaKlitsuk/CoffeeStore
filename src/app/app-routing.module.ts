import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'favorite',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'previous',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  {
    path: 'gift',
    loadChildren: './gift/gift.module#GiftModule'
  },
  {
    path: 'stores',
    loadChildren: './stores/stores.module#StoresModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
