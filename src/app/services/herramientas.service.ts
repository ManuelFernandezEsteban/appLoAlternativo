import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UsaHerramienta } from '../interfaces/especialidad';
import { FormFilterEspecialista } from '../interfaces/formFilterEspecialista.interface';
import { EspecialistasActividad } from '../interfaces/especialistas-actividad.interface';

const baseUrl=environment.base_url

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  constructor(private http:HttpClient) { }

  getHerramienta<Herramienta>(id:string):Observable<Herramienta>{
    return this.http.get<Herramienta>(`${baseUrl}/herramientas/${id}`);
  }

  getHerramientasByEspecialista<HerramientasResp>(id:string):Observable<HerramientasResp>{
    return this.http.get<HerramientasResp>(`${baseUrl}/herramientas/especialista/${id}`);
  }
  getHerramientasByActividad<Herramientas>(actividad:number):Observable<Herramientas>{
    return this.http.get<Herramientas>(`${baseUrl}/herramientas/herramientas/${actividad}`);
  }

  getEspecialistasByHerramientas<EspecialistasActividad>(actividad:number,form:FormFilterEspecialista):Observable<EspecialistasActividad>{
    console.log(form)
    return this.http.post<EspecialistasActividad>(`${baseUrl}/herramientas/especialistasByHerramientas/${actividad}`,form);
  }
}
