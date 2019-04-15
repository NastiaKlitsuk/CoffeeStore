import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PreviousComponent } from './previous/previous.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MenuResolverService } from './services/menu/menu-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'menu'
      },
      {
        path: 'menu',
        component: MenuComponent,
        resolve: { menu: MenuResolverService }
      },
      {
        path: 'previous',
        component: PreviousComponent
      },
      {
        path: 'favorite',
        component: FavoriteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
