import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from "ngx-loading";


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
import { PlanesComponent } from './pages/planes/planes.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { CancelarSuscripcionComponent } from './pages/cancelar-suscripcion/cancelar-suscripcion.component';
import { VentasEventoComponent } from './pages/ventas-evento/ventas-evento.component';
import { CrearCuentaConectadaComponent } from './pages/crear-cuenta-conectada/crear-cuenta-conectada.component';
import { SeleccionPlanComponent } from './pages/seleccion-plan/seleccion-plan.component';

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
    PlanesComponent,
    NewPasswordComponent,
    CancelarSuscripcionComponent,
    VentasEventoComponent,
    CrearCuentaConectadaComponent,
    SeleccionPlanComponent,  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),   
  ]
  
})
export class AuthModule { }
