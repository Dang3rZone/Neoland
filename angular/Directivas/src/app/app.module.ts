import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { SwitchComponent } from './switch/switch.component';
import { SubrayadoDirective } from './subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    EpisodiosComponent,
    SwitchComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
