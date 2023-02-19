import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image:string): string {
    let resultado=image;
    
    if (image===''||image===null || image===undefined){      
      resultado= './../../../../assets/images/no_disponible.png';
    }    
    return resultado
  }

}
