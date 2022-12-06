import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    NotPageFoundComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    NotPageFoundComponent
  ]
})
export class PagesModule { }
