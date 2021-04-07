import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
