import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { InfoComponent } from './components/info/info.component';
import { ExtrasComponent } from './components/productos/extras/extras.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RelatedComponent } from './components/productos/related/related.component';
import { ReviewsComponent } from './components/productos/reviews/reviews.component';
import { RandomGuard } from './random.guard';

// Info, Contacto, Blog

// asasdasdsad
const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'info', redirectTo: 'informacion' },
  { path: 'informacion', component: InfoComponent, canActivate: [RandomGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'productos/:productoId', component: ProductosComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent },
      { path: 'extras', component: ExtrasComponent }
    ]
  },
  // { path: '**', redirectTo: 'contacto' }
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
