import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FiltroEspecialistasComponent } from './filtro-especialistas/filtro-especialistas.component';
import { ResultadoBusquedaEspecialistasComponent } from './resultado-busqueda-especialistas/resultado-busqueda-especialistas.component';
import { EventoComponent } from './evento/evento.component';
import { ModalEventoComponent } from './modal-evento/modal-evento.component';
import { BuscadorEspecialistaComponent } from './buscador-especialista/buscador-especialista.component';

import { EspecialistaComponent } from './especialista/especialista.component';
import { ModalEspecialistaComponent } from './modal-especialista/modal-especialista.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { InfoDireccionModalComponent } from './info-direccion-modal/info-direccion-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoModalEnlaceComponent } from './info-modal-enlace/info-modal-enlace.component';


@NgModule({
  declarations: [
    BuscadorEspecialistaComponent,
    FiltroEspecialistasComponent,
    ResultadoBusquedaEspecialistasComponent,
    EventoComponent, 
    ModalEventoComponent,

    EspecialistaComponent,
    ModalEspecialistaComponent,
    InfoModalComponent,
    InfoDireccionModalComponent,
    InfoModalEnlaceComponent
  ],
  imports: [
    CommonModule,FormsModule,SharedModule,FontAwesomeModule
  ],exports:[
    BuscadorEspecialistaComponent,
    FiltroEspecialistasComponent,
    ResultadoBusquedaEspecialistasComponent,
    EventoComponent, 
    ModalEventoComponent,
    EspecialistaComponent,
    ModalEspecialistaComponent,
    InfoModalComponent,
    InfoModalEnlaceComponent,
    InfoDireccionModalComponent,

  ]
})
export class ComponentsModule { }
