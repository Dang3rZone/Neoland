import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/gimnasios/formulario/formulario.component';
import { ListaComponent } from './components/gimnasios/lista/lista.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaComponent, canActivate: [LoginGuard] },
  { path: 'new', component: FormularioComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
