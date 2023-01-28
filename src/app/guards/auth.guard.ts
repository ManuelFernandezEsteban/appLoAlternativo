import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,  Router } from '@angular/router';
import { EspecialistasService } from '../services/especialistas.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private especialistasService:EspecialistasService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      return this.especialistasService.validarToken().pipe(
        tap(estaAuntenticado=>{
          if(!estaAuntenticado){
            this.router.navigateByUrl('/auth/login')
          }
        })
      );        

  }
  
}
