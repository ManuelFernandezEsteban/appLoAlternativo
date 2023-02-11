import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentesModule } from './componentes/componentes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

   
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
