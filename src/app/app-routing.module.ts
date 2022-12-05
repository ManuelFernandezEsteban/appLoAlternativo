import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';

const routes: Routes = [

  {path:'principal', component:PrincipalComponent },
  {path:'login', component:LoginComponent },
  {path:'register', component:RegistroComponent },
  {path:'' ,redirectTo:'/principal',pathMatch:'full'},
  {path:'**',component:NotPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
