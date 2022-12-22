import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DondeComponent } from './pages/donde/donde.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EspecialistasComponent } from './pages/especialistas/especialistas.component';
import { BuscadorEspecialistaComponent } from './components/buscador-especialista/buscador-especialista.component';
import { EventosEspecialidadComponent } from './pages/eventos-especialidad/eventos-especialidad.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes:Routes=[
  { 
    path:'', component:HomeComponent,children:[
      {
        path:'',component:DashboardComponent
      },     
      {
        path:'home/nosotros',component:NosotrosComponent
      },
      {
        path:'home/cursos',component:CursosComponent
      },
      {
        path:'home/eventos',component:EventosComponent
      },
      {
        path:'home/donde',component:DondeComponent
      },
      {
        path:'home/contacto',component:ContactoComponent
      },
      {
        path:'home/especialistas',component:EspecialistasComponent
      },   
      {
        path:'home/buscador-especialista',component:BuscadorEspecialistaComponent
      },
      {
        path:'home/eventos-especialidad',component:EventosEspecialidadComponent
      },   

    ] 
      
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
