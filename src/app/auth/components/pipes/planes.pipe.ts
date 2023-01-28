import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanesService } from '../../../services/planes.service';
import { ResPlan } from '../../interfaces/plan.interface';
import { tap } from 'rxjs/operators';

@Pipe({
  name: 'planesPipe'
})
export class PlanesPipe implements PipeTransform {
  
  plan: any;

  constructor(private planesService:PlanesService){

  }
  
  transform(plan:number):string{
    if (plan===2){
      return 'ORO';
    }else{
      return 'PLATA'
    }
  }

}
