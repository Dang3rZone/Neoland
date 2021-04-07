import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReviewsComponent } from './components/productos/reviews/reviews.component';
import { RelatedComponent } from './components/productos/related/related.component';
import { ExtrasComponent } from './components/productos/extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ContactoComponent,
    BlogComponent,
    Error404Component,
    ProductosComponent,
    ReviewsComponent,
    RelatedComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
