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




@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent,
    EventosComponent,
    EventoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
