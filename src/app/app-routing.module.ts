import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { PerfilEventoComponent } from './pages/perfil-evento/perfil-evento.component';


const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "addUsuario", component: AddUsuarioComponent },
  { path: "addUsuario/:id", component: AddUsuarioComponent },
  { path: "addEvento", component: AddEventoComponent },
  { path: "addEvento/:id", component: AddEventoComponent },
  { path: "perfilEvento/:id", component: PerfilEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
