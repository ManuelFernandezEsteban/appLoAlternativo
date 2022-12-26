import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ComponentsModule } from './components/components.module';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { PublicarEventoComponent } from './pages/publicar-evento/publicar-evento.component';
import { ModificarEventoComponent } from './pages/modificar-evento/modificar-evento.component';
import { EliminarEventoComponent } from './pages/eliminar-evento/eliminar-evento.component';
import { ModificarDatosComponent } from './pages/modificar-datos/modificar-datos.component';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    PrincipalComponent,
    MisEventosComponent,
    PublicarEventoComponent,
    ModificarEventoComponent,
    EliminarEventoComponent,
    ModificarDatosComponent,  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule   
  ]
  
})
export class AuthModule { }
