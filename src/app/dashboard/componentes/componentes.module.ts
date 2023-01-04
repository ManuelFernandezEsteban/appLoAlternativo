import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerPublicidadComponent } from './banner-publicidad/banner-publicidad.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { EspecialidadCuadradaComponent } from './especialidad-cuadrada/especialidad-cuadrada.component';
import { EspecialidadRedondaComponent } from './especialidad-redonda/especialidad-redonda.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { InfoDireccionModalComponent } from './info-direccion-modal/info-direccion-modal.component';
import { EventoComponent } from './evento/evento.component';
import { EurosPipe } from './pipes/euros.pipe';
import { LocalizacionPipe } from "./pipes/localizacion.pipe";
import { ModalEventoComponent } from './modal-evento/modal-evento.component';
import { InfoModalEnlaceComponent } from './info-modal-enlace/info-modal-enlace.component';
import { ResultadoBusquedaEspecialistasComponent } from './resultado-busqueda-especialistas/resultado-busqueda-especialistas.component';
import { FiltroEspecialistasComponent } from './filtro-especialistas/filtro-especialistas.component';
import { ModalEspecialistaComponent } from './modal-especialista/modal-especialista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EspecialistaComponent } from './especialista/especialista.component';
import { SharedModule } from '../../shared/shared.module';
import { ActividadPipe } from './pipes/actividad.pipe';
import { CarouselPublicidadComponent } from './carousel-publicidad/carousel-publicidad.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ModalRevistaComponent } from './modal-revista/modal-revista.component';
import { ModalEmailComponent } from './modal-email/modal-email.component';





@NgModule({
  declarations: [
    BannerPublicidadComponent,
    DirectorioComponent,
    EspecialidadCuadradaComponent,
    EspecialidadRedondaComponent,
    InfoModalComponent,
    InfoDireccionModalComponent,
    EventoComponent,
    EurosPipe,LocalizacionPipe, 
    ModalEventoComponent, 
    InfoModalEnlaceComponent, 
    ResultadoBusquedaEspecialistasComponent, 
    FiltroEspecialistasComponent,
    ModalEspecialistaComponent, 
    EspecialistaComponent, ActividadPipe, CarouselPublicidadComponent, SponsorComponent, ModalRevistaComponent, ModalEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],exports:[
    BannerPublicidadComponent,
    DirectorioComponent,
    EspecialidadCuadradaComponent,
    EspecialidadRedondaComponent,
    InfoModalComponent,
    InfoDireccionModalComponent,
    EventoComponent,
    ModalEventoComponent, 
    InfoModalEnlaceComponent,
    ResultadoBusquedaEspecialistasComponent, 
    FiltroEspecialistasComponent,
    ModalEspecialistaComponent, 
    EspecialistaComponent,
    CarouselPublicidadComponent,
    ModalRevistaComponent
  ]

  
})
export class ComponentesModule { }
