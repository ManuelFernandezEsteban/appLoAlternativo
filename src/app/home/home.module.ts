import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SharedModule } from '../shared/shared.module';
import { DondeComponent } from './pages/donde/donde.component';
import { ContactoComponent } from './pages/contacto/contacto.component';




@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    DondeComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
