import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value:number,moneda:number): string {
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
