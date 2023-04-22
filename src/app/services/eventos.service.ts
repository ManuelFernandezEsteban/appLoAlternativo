import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RespuestaEventos } from '../interfaces/eventos-respuesta.interface';
import { IEvento, IEventos } from '../interfaces/eventos';
import { EventosActividad } from '../interfaces/eventos-actividad.interface';
import { ComprasEventosNoFinalizadas } from '../interfaces/compras_eventos.interface';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class EventosService {

  limiteResultados:number=5;
  

  constructor(private http:HttpClient) { }

  crearEvento(formData:IEvento){

    //console.log(formData);

    const token = localStorage.getItem('token');

    return this.http.post(`${base_url}/eventos`,
      formData,{
          headers:{'x-token':token}
        }
      )
  }

  actualizarEvento(formData:IEvento){
    
    const token = localStorage.getItem('token');

    return this.http.put(`${base_url}/eventos/${formData.id}`,
      formData,{
          headers:{'x-token':token}
        }
      )
  }

  eliminarEvento(id:string){

    const token = localStorage.getItem('token');   

    return this.http.delete(`${base_url}/eventos/${id}`,{
      headers:{
        'x-token':token
      }
    });

  }
  

  getEventos(especialista:string):Observable<RespuestaEventos>{

    return this.http.get<RespuestaEventos>(`${base_url}/eventos/eventos/${especialista}`);

  }

  getEventosActividad(especialidad:number,pagina:number):Observable<EventosActividad>{

    const desde:number = (pagina*this.limiteResultados)-this.limiteResultados;

    return this.http.get<EventosActividad>(`${base_url}/eventos/eventoxactividad/${especialidad}?desde=${desde}`);

  }

  getEventosVendidos(id:string){
    return this.http.get<ComprasEventosNoFinalizadas>(`${base_url}/eventos/ventas/${id}`);
  }
}
