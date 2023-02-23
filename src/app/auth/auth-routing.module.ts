import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { PublicarEventoComponent } from './pages/publicar-evento/publicar-evento.component';
import { ModificarEventoComponent } from './pages/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './pages/eliminar-evento/eliminar-evento.component';
import { ModificarDatosComponent } from './pages/modificar-datos/modificar-datos.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';





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
        path:'new-password/:token', component:NewPasswordComponent
      },
      {
        path: 'principal', component: PrincipalComponent, 
        //canActivate:[AuthGuard],
        children: [
          {
            
            path:'',redirectTo:'mis-eventos',pathMatch:'full'
          },
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
          {
            path: 'planes', component: PlanesComponent
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
