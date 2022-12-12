import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from '../interfaces/especialiadad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEspecialidadesService {

  especialidades:Especialidad[]=[]

  constructor(private http:HttpClient) { }

  getEspecialidades<Especialidades>():Observable<Especialidades>{
    return this.http.get<Especialidades>('./../../assets/data/especialidades.json');
  }

}
