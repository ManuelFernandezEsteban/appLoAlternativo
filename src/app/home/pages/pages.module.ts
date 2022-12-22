import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { DondeComponent } from './donde/donde.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EventosEspecialidadComponent } from './eventos-especialidad/eventos-especialidad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,   
    CursosComponent,
    EspecialistasComponent,
    EventosEspecialidadComponent,

    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule
  ],exports:[
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,   
    CursosComponent,
    EspecialistasComponent,
    EventosEspecialidadComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
