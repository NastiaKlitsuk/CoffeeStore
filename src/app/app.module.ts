import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainAreaModule } from './main-area/main-area.module';
import { UserMessageComponent } from './usermessage/usermessage.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainMenuComponent,
    UserMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainAreaModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
