import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftslistComponent } from './giftslist/giftslist.component';

const routes: Routes = [
  {
    path: '',
    component: GiftslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftRoutingModule {}
