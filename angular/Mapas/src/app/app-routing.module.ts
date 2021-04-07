import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaJsComponent } from './mapa-js/mapa-js.component';
import { MapaNgComponent } from './mapa-ng/mapa-ng.component';

const routes: Routes = [
  { path: 'mapa-js', component: MapaJsComponent },
  { path: 'mapa-componente', component: MapaNgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
