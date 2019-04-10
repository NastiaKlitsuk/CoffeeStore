import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftslistComponent } from './giftslist/giftslist.component';
import { GiftRoutingModule } from './gift-routing.module';

@NgModule({
  declarations: [GiftslistComponent],
  imports: [CommonModule, GiftRoutingModule]
})
export class GiftModule {}
