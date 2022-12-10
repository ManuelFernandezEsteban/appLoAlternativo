import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DondeComponent } from './pages/donde/donde.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

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
        path:'donde',component:DondeComponent
      },
      {
        path:'contacto',component:ContactoComponent
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
