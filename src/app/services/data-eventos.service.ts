import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { EventosForm } from '../auth/interfaces/eventosForm.interface';
import { Evento } from '../auth/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class DataEventosService {

  eventos_especialista:Evento[]=[];

  constructor(private http:HttpClient) { }

  getEventos<Eventos>():Observable<Eventos>{
    return this.http.get<Eventos>('./../../assets/data/eventosEsoterismo.json');
  }
  getEventosAlernativo<Eventos>():Observable<Eventos>{
    return this.http.get<Eventos>('./../../assets/data/eventos-loalternativo.json');
  }

  setEventosEspecialistaRegistro(id:number){
    this.eventos_especialista=[];

  }
  setEventosEspecialistaLogin(id:number){
    this.eventos_especialista=[];
    
  }
  agregarEvento(evento:Evento){
    this.eventos_especialista.push(evento);
  }

  eliminarEvento(evento:Evento){
    const pos= this.eventos_especialista.findIndex((e)=>{
      e.id===evento.id
    });
    this.eventos_especialista.splice(pos,1);
  }


  setEvento(dataForm:EventosForm,id_especialista:number){
    
    let evento = new Evento (dataForm.evento,dataForm.fecha,dataForm.precio,id_especialista,dataForm.descripcion);
    evento.codigo_postal= dataForm.cp;
    evento.direccion=dataForm.direccion;
    evento.email=dataForm.email;
    evento.id=this.eventos_especialista.length+1;
    evento.imagen=dataForm.img;
    evento.online=dataForm.online;
    evento.localidad=dataForm.poblacion;
    evento.pdf=evento.pdf;
    evento.provincia=dataForm.provincia;
    evento.telefono=dataForm.telefono;
    evento.web=dataForm.web;

    this.agregarEvento(evento)
  }
}
