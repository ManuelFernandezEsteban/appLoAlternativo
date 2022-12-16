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


const routes:Routes=[
  {
    path:'',
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
        path:'especialistas',component:EspecialistasComponent
      },
      {
        path:'buscador-especialista',component:BuscadorEspecialistaComponent
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
        path:'**',redirectTo:'home'
      }
    ]
  }
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
