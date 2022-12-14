import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SharedModule } from '../shared/shared.module';
import { DondeComponent } from './pages/donde/donde.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EventoComponent } from './components/evento/evento.component';
import { EurosPipe } from './pipes/euros.pipe';
import { LocalizacionPipe } from './pipes/localizacion.pipe';
import { ModalEventoComponent } from './components/modal-evento/modal-evento.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EspecialistasComponent } from './pages/especialistas/especialistas.component';
import { BuscadorEspecialistaComponent } from './components/buscador-especialista/buscador-especialista.component';




@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,
    EventoComponent,
    EurosPipe,
    LocalizacionPipe,
    ModalEventoComponent,
    CursosComponent,
    EspecialistasComponent,
    BuscadorEspecialistaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
