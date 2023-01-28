import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planes'
})
export class PlanesPipe implements PipeTransform {

  constructor(){}
  
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
