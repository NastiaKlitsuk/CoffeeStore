import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardslistComponent } from './cardslist/cardslist.component';

const routes: Routes = [
  {
    path: '',
    component: CardslistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
