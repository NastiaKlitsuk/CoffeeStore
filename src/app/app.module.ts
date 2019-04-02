import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainAreaModule } from './main-area/main-area.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainAreaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
