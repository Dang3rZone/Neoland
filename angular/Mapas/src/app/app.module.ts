import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaNgComponent } from './mapa-ng/mapa-ng.component';
import { MapaJsComponent } from './mapa-js/mapa-js.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaNgComponent,
    MapaJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoe3vvdGGosbpLVZqUncQDgiW4UAbl58'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
