import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { PublicarEventoComponent } from './pages/publicar-evento/publicar-evento.component';
import { ModificarEventoComponent } from './pages/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './pages/eliminar-evento/eliminar-evento.component';
import { ModificarDatosComponent } from './pages/modificar-datos/modificar-datos.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'registro', component: RegistroComponent
      },
      {
        path: 'principal', component: PrincipalComponent, children: [
          {
            path: 'mis-eventos', component: MisEventosComponent
          },
          {
            path: 'publicar', component: PublicarEventoComponent
          },
          {
            path: 'modificar', component: ModificarEventoComponent
          },
          {
            path: 'eliminar', component: EliminarEventoComponent
          },
          {
            path: 'datos', component: ModificarDatosComponent
          },
        ]
      },

      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
