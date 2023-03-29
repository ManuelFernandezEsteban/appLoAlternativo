import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentesModule } from './componentes/componentes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from "ngx-loading";

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DondeComponent } from './pages/donde/donde.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EspecialistasComponent } from './pages/especialistas/especialistas.component';
import { EventosEspecialidadComponent } from './pages/eventos-especialidad/eventos-especialidad.component';
import { EspecialistasEspecialidadComponent } from './pages/especialistas-especialidad/especialistas-especialidad.component';
import { RevistasComponent } from './pages/revistas/revistas.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { LegalRegistroEspecialistasComponent } from './pages/legal-registro-especialistas/legal-registro-especialistas.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { CondicionesRegistroComponent } from './pages/condiciones-registro/condiciones-registro.component';
import { StripeCheckoutComponent } from './pages/stripe-checkout/stripe-checkout.component';




@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    DondeComponent,
    EventosComponent,
    EspecialistasComponent,
    EventosEspecialidadComponent,
    EspecialistasEspecialidadComponent,
    RevistasComponent,
    PrivacidadComponent,
    LegalRegistroEspecialistasComponent,
    PoliticaCookiesComponent,
    CondicionesRegistroComponent,
    StripeCheckoutComponent,

   
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
  ],exports:[
    HomeComponent,
    DashboardComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    DondeComponent,
    EventosComponent,
    EspecialistasComponent,
 
  ]
})
export class DashboardModule { }
