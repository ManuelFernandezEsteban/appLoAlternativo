import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(precio:number): string {
    if (precio!=0){
      return `${precio} €`;
    }else{
      return 'Gratis';
    }
  }

}
