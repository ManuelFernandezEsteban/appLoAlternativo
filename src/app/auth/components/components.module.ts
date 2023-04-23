import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablaEventosComponent } from './tabla-eventos/tabla-eventos.component';
import { FilaEventosComponent } from './fila-eventos/fila-eventos.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';

import { MonedaPipe } from './pipes/moneda.pipe';
import { OnlinePipe } from './pipes/online.pipe';
import { PlanesPipe } from './pipes/planes.pipe';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { SharedModule } from '../../shared/shared.module';
import { FilaEventoVendidoComponent } from './fila-evento-vendido/fila-evento-vendido.component';
import { RealizadaPipe } from './pipes/realizada.pipe';




@NgModule({
  declarations: [
    BarraSuperiorComponent,
    SidebarComponent,
    TablaEventosComponent,
    FilaEventosComponent,
    MonedaPipe,
    OnlinePipe,
    PlanesPipe,
    ModalInfoComponent,
    FormEventoComponent,
    NoImagePipe,
    FilaEventoVendidoComponent,
    RealizadaPipe,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ],exports:[
    BarraSuperiorComponent,
    SidebarComponent,
    TablaEventosComponent,
    FilaEventosComponent,
    MonedaPipe,
    OnlinePipe,
    ModalInfoComponent,
    FormEventoComponent,
    FilaEventoVendidoComponent
  ]
})
export class ComponentsModule { }
