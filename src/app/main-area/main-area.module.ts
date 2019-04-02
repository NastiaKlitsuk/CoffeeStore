import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainareaComponent } from './mainarea/mainarea.component';

@NgModule({
  declarations: [MainareaComponent],
  imports: [CommonModule],
  exports: [MainareaComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class MainAreaModule {}
