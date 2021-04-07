import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SliderComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '/slider' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
