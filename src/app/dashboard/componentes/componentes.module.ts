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





@NgModule({
  declarations: [
    BannerPublicidadComponent,
    DirectorioComponent,
    EspecialidadCuadradaComponent,
    EspecialidadRedondaComponent,
    InfoModalComponent,
    InfoDireccionModalComponent,
    EventoComponent,
    EurosPipe,LocalizacionPipe, ModalEventoComponent, InfoModalEnlaceComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BannerPublicidadComponent,
    DirectorioComponent,
    EspecialidadCuadradaComponent,
    EspecialidadRedondaComponent,
    InfoModalComponent,
    InfoDireccionModalComponent,
    EventoComponent,
    ModalEventoComponent, InfoModalEnlaceComponent
  ]

  
})
export class ComponentesModule { }
