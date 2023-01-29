import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanesService } from '../../../services/planes.service';
import { ResPlan } from '../../interfaces/plan.interface';
import { tap } from 'rxjs/operators';
import { Especialista } from '../../models/especialista.model';

@Pipe({
  name: 'planesPipe'
})
export class PlanesPipe implements PipeTransform {
  
  plan: any;

  constructor(private planesService:PlanesService){

  }
  
  transform(especialista:Especialista):string{

    const fecha = new Date(especialista.fecha_fin_suscripcion);
    const hoy = new Date(Date.now());
    if (especialista.PlaneId===2 && fecha>=hoy){
      return 'ORO';
    }else if (especialista.PlaneId===1 && fecha>=hoy){
      return 'ORO';
    }else {
      return 'PLATA';
    }

  }

}
