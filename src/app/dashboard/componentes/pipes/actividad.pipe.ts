import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actividad'
})
export class ActividadPipe implements PipeTransform {
  actividades =['Esoterismo','Naturopatía','Crecimiento personal',
                'Terapia corporal', 'Terapia energética', 'Artesanía',
                'Productos bio','Retiros','Alquiler salas' ]
  transform(id_actividad:number): string {
    
    return this.actividades[id_actividad];
  }

}
