import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainAreaModule } from './main-area/main-area.module';
import { WelcomemessageComponent } from './welcomemessage/welcomemessage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainMenuComponent,
    WelcomemessageComponent,
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
