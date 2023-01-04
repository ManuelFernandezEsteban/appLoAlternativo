import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento, Eventos } from '../interfaces/eventos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEventosService {

  constructor(private http:HttpClient) { }

  getEventos<Eventos>():Observable<Eventos>{
    return this.http.get<Eventos>('./../../assets/data/eventosEsoterismo.json');
  }
  getEventosAlernativo<Eventos>():Observable<Eventos>{
    return this.http.get<Eventos>('./../../assets/data/eventos-loalternativo.json');
  }

}
