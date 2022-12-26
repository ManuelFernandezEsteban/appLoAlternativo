import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'online'
})
export class OnlinePipe implements PipeTransform {

  transform(localizacion:boolean): string {
    if (localizacion){
      return 'Online';
    }else{
      return 'Presencial'
    }
  }

}
