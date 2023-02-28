import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(image:string,isEspecialista:boolean): any {
    
    let resultado=image;
    
    if (image===''||image===null || image===undefined){      
      if (isEspecialista){
        resultado= './../../../../assets/images/especialista_no_disponible.svg';
      }else{
        resultado= './../../../../assets/images/evento_no_disponible.svg';
      }
      
    }    
    return this.sanitizer.bypassSecurityTrustResourceUrl(resultado);

  }

}
