import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad, Especilidades } from '../interfaces/especiliadad';

@Injectable({
  providedIn: 'root'
})
export class DataEspecialidadesService {

  especialidades:Especialidad[]=[]

  constructor(private http:HttpClient) { }

  getEspecialidades(){
    return this.http.get<Especilidades>('./../../assets/data/especialidades.json');
  }

}
