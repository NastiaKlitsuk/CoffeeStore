import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { StoresRoutingModule } from './stores-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, StoresRoutingModule]
})
export class StoresModule {}
