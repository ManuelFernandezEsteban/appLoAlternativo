import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { PrivacidadComponent } from './dashboard/pages/privacidad/privacidad.component';



const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },

  {
    path:'', 
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'privacidad',component:PrivacidadComponent
  },
  {
    path:'**',redirectTo:'',pathMatch:'full'
  },
  {
    path:'404',component:ErrorPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
