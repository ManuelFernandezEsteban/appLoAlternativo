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




@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,   
    CursosComponent,
    EspecialistasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],exports:[
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,   
    CursosComponent,
    EspecialistasComponent,
  ]
})
export class PagesModule { }
