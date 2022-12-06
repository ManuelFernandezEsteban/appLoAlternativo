import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BotonPlantillasComponent } from './boton-plantillas/boton-plantillas.component';
import { BannerPublicidadComponent } from './banner-publicidad/banner-publicidad.component';



@NgModule({
  declarations: [HeaderComponent, BotonPlantillasComponent, BannerPublicidadComponent],
  imports: [
    CommonModule
  ],exports:[HeaderComponent,BotonPlantillasComponent,BannerPublicidadComponent]
})
export class ComponentsModule { }
