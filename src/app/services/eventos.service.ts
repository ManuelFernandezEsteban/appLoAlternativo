import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Evento } from '../auth/models/evento.model';
import { RespuestaEventos } from '../interfaces/eventos-respuesta.interface';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class EventosService {

  

  constructor(private http:HttpClient) { }

  getEventos(especialista:string):Observable<RespuestaEventos>{

    return this.http.get<RespuestaEventos>(`${base_url}/eventos/eventos/${especialista}`);

  }
}
