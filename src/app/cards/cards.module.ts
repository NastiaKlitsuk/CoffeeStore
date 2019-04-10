import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardslistComponent } from './cardslist/cardslist.component';
import { CardsRoutingModule } from './cards-routing.module';

@NgModule({
  declarations: [CardslistComponent],
  imports: [CommonModule, CardsRoutingModule]
})
export class CardsModule {}
