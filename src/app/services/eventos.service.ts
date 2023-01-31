import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RespuestaEventos } from '../interfaces/eventos-respuesta.interface';
import { IEvento } from '../interfaces/eventos';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class EventosService {

  

  constructor(private http:HttpClient) { }

  crearEvento(formData:IEvento){

    console.log(formData);

    const token = localStorage.getItem('token');

    return this.http.post(`${base_url}/eventos`,
      formData,{
          headers:{'x-token':token}
        }
      )
  }

  actualizarEvento(formData:IEvento){
    console.log(formData);
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
}
