import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BotonPlantillasComponent } from './boton-plantillas/boton-plantillas.component';
import { BannerPublicidadComponent } from './banner-publicidad/banner-publicidad.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';



@NgModule({
  declarations: [HeaderComponent, BotonPlantillasComponent, BannerPublicidadComponent, DirectorioComponent, EspecialidadComponent],
  imports: [
    CommonModule
  ],exports:[HeaderComponent,BotonPlantillasComponent,BannerPublicidadComponent,DirectorioComponent]
})
export class ComponentsModule { }
