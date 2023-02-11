import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad, Actividades, Actividad } from '../interfaces/especialiadad';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DataEspecialidadesService {

  actividadSeleccionada:Actividad;

  constructor(private http: HttpClient) { }

  getEspecialidades<Actividades>(): Observable<Actividades> {
    return this.http.get<Actividades>(`${base_url}/actividades`);
  }
/*
  getNombreEspecialidad(id: number): string {
    
    let nombreEspecialidad: string = '';   

    if (this.especialidades.length != 0) {

      this.especialidades.forEach(e => {
        if (e.id === id) {
          nombreEspecialidad = e.nombre;
        }
      });

    }

    return nombreEspecialidad;
  }
*/
}
