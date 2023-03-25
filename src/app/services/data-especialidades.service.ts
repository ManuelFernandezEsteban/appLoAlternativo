import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../interfaces/especialidad';
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

}
