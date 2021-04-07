import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/gimnasios/lista/lista.component';
import { FormularioComponent } from './components/gimnasios/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/usuarios/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
