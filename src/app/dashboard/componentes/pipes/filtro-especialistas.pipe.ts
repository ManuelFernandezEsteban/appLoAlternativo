import { Pipe, PipeTransform } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';

@Pipe({
  name: 'filtroEspecialistas'
})
export class FiltroEspecialistasPipe implements PipeTransform {

  transform(value: EspecialistaClass[], pagina:number=0,nombre:string='',provincia:string=''): EspecialistaClass[] {

    let resultado:EspecialistaClass[]=value;
    let filtroProvincias:EspecialistaClass[]=value;

    if (nombre.length!=0){
      nombre=nombre.trim().toLowerCase();
      resultado=value.filter(item=>item.nombre.toLowerCase().includes(nombre));
      if (provincia.length!=0){
        provincia=provincia.trim().toLowerCase();
        filtroProvincias=resultado.filter(item=>item.provincia.toLowerCase().includes(provincia));
        resultado = filtroProvincias;  
      }
    }else if(provincia.length!=0 ){      
      provincia=provincia.trim().toLowerCase();      
      filtroProvincias=value.filter(item=>item.provincia.toLowerCase().includes(provincia));        
      resultado=filtroProvincias;
    }
    
    return resultado.slice(pagina,pagina+5);
  }
}
