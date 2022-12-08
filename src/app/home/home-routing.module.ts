import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

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
