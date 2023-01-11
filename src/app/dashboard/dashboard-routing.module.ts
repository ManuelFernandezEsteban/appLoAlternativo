import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EspecialistasComponent } from './pages/especialistas/especialistas.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DondeComponent } from './pages/donde/donde.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventosEspecialidadComponent } from './pages/eventos-especialidad/eventos-especialidad.component';
import { EspecialistasEspecialidadComponent } from './pages/especialistas-especialidad/especialistas-especialidad.component';
import { RevistasComponent } from './pages/revistas/revistas.component';

const routes:Routes=[
  {
    path:'', component:DashboardComponent,
    children:[   
      {
        path:'home',component:HomeComponent
      },  
      {
        path:'nosotros',component:NosotrosComponent
      },     
      {
        path:'cursos',component:CursosComponent
      },
      {
        path:'donde',component:DondeComponent
      },
      {
        path:'contacto',component:ContactoComponent
      },
      {
        path:'eventos',component:EventosComponent
      },
      {
        path:'revistas',component:RevistasComponent
      },
      {
        path:'eventos/eventos-especialidad/:id',component:EventosEspecialidadComponent
      },
      {
        path:'especialistas',component:EspecialistasComponent
      },
      {
        path:'especialistas/especialistas-especialidad/:id',component:EspecialistasEspecialidadComponent
      },
      
      {
        path:'',redirectTo:'home',pathMatch:'full'
      },
      {
        path:'**',redirectTo:'dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class DashboardRoutingModule { }
