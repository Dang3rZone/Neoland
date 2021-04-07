import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: ListaComponent },
  {
    path: 'escritores/:escritorId', component: DetalleComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  },
  { path: '**', redirectTo: 'escritores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
