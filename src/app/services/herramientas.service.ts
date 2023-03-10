import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const baseUrl=environment.base_url

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  constructor(private http:HttpClient) { }

  getHerramienta<Herramienta>(id):Observable<Herramienta>{
    return this.http.get<Herramienta>(`${baseUrl}/herramientas/${id}`);
  }

  getHerramientasByEspecialista<HerramientasResp>(id):Observable<HerramientasResp>{
    return this.http.get<HerramientasResp>(`${baseUrl}/herramientas/especialista/${id}`);
  }
}
