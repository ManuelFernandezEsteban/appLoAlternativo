import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';


const routes:Routes=[
  {
    path:'',component:LoginAdminComponent,
  },
  {
    path:'admin',component:AdminComponent,
    //canActivate:[AuthGuard],
  }  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
