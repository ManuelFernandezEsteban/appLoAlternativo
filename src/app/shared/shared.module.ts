import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HeaderNoMenuComponent } from './components/header-no-menu/header-no-menu.component';
import { BotonPlantillaComponent } from './components/boton-plantilla/boton-plantilla.component';
import { RedSocialComponent } from './components/red-social/red-social.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    HeaderNoMenuComponent,
    BotonPlantillaComponent,
    RedSocialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    BotonPlantillaComponent,
    HeaderNoMenuComponent,
    RedSocialComponent,
  ]
})
export class SharedModule { }
