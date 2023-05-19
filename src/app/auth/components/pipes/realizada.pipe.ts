import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realizada'
})
export class RealizadaPipe implements PipeTransform {

  transform(realizada:boolean): string {
    if (realizada){
      return 'Realizada'
    }else{
      return 'No realizada'
    }
  }

}
