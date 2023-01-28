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
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],exports:[
    BarraSuperiorComponent,
    SidebarComponent,
    TablaEventosComponent,
    FilaEventosComponent,
    MonedaPipe,
    OnlinePipe,
    ModalInfoComponent
  ]
})
export class ComponentsModule { }
