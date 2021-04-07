import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/shop' },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:productoId', component: DetalleComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/shop' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
