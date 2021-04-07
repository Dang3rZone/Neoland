import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabBar2Component } from './tab-bar2/tab-bar2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TabBarComponent,
    TabBar2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
