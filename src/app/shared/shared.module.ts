import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HeaderNoMenuComponent } from './components/header-no-menu/header-no-menu.component';
import { BotonPlantillaComponent } from './components/boton-plantilla/boton-plantilla.component';
import { RedSocialComponent } from './components/red-social/red-social.component';

import { HeaderResponsiveComponent } from './components/header-responsive/header-responsive.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    HeaderNoMenuComponent,
    BotonPlantillaComponent,
    RedSocialComponent,
    HeaderResponsiveComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    BotonPlantillaComponent,
    HeaderNoMenuComponent,
    RedSocialComponent,
    HeaderResponsiveComponent
  ]
})
export class SharedModule { }
