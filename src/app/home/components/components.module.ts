import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FiltroEspecialistasComponent } from './filtro-especialistas/filtro-especialistas.component';
import { ResultadoBusquedaEspecialistasComponent } from './resultado-busqueda-especialistas/resultado-busqueda-especialistas.component';
import { EventoComponent } from './evento/evento.component';
import { ModalEventoComponent } from './modal-evento/modal-evento.component';
import { BuscadorEspecialistaComponent } from './buscador-especialista/buscador-especialista.component';
import { EurosPipe } from './pipes/euros.pipe';
import { LocalizacionPipe } from './pipes/localizacion.pipe';
import { EspecialistaComponent } from './especialista/especialista.component';
import { ModalEspecialistaComponent } from './modal-especialista/modal-especialista.component';


@NgModule({
  declarations: [
    BuscadorEspecialistaComponent,
    FiltroEspecialistasComponent,
    ResultadoBusquedaEspecialistasComponent,
    EventoComponent, 
    ModalEventoComponent,
    EurosPipe,
    LocalizacionPipe,
    EspecialistaComponent,
    ModalEspecialistaComponent
  ],
  imports: [
    CommonModule,FormsModule,SharedModule
  ],exports:[
    BuscadorEspecialistaComponent,
    FiltroEspecialistasComponent,
    ResultadoBusquedaEspecialistasComponent,
    EventoComponent, 
    ModalEventoComponent,
    EspecialistaComponent,
    ModalEspecialistaComponent,
    EurosPipe,
    LocalizacionPipe
  ]
})
export class ComponentsModule { }
