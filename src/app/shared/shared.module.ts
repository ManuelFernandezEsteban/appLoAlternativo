import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BotonPlantillaComponent } from './components/boton-plantilla/boton-plantilla.component';
import { BannerPublicidadComponent } from './components/banner-publicidad/banner-publicidad.component';
import { BotonEspecialistasComponent } from './components/boton-especialistas/boton-especialistas.component';
import { DirectorioComponent } from './components/directorio/directorio.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { HeaderNoMenuComponent } from './components/header-no-menu/header-no-menu.component';




@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    BotonPlantillaComponent,
    BannerPublicidadComponent,
    BotonEspecialistasComponent,
    DirectorioComponent,
    EspecialidadComponent,
    HeaderNoMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,   

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    BotonPlantillaComponent,
    BannerPublicidadComponent,
    BotonEspecialistasComponent,
    DirectorioComponent,
    EspecialidadComponent,
    HeaderNoMenuComponent
  ]
})
export class SharedModule { }
