import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {

  transform(value: number, moneda:number,...args: unknown[]): string {
    if (value===0){
      return 'Gratis';
    }else{
      if (moneda === 2){
        return value+' $';
      }else{
        return value+' €';
      }

      
    }
  }

}
