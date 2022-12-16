import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value===0){
      return 'Gratis';
    }else{
      return value+' €';
    }
  }

}
