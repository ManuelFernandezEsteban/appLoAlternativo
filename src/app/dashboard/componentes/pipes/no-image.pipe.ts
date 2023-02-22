import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(image:string): any {
    let resultado=image;


    
    if (image===''||image===null || image===undefined){      
      resultado= './../../../../assets/images/no_disponible.png';
    }    
    return this.sanitizer.bypassSecurityTrustResourceUrl(resultado);

  }

}
