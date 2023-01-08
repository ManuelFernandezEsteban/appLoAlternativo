import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Especialista, Evento } from '../auth/models/user.models';

import { EventosForm } from '../auth/interfaces/eventosForm.interface';


@Injectable({
  providedIn: 'root'
})
export class DataEspecialistasService {

  especialista!: Especialista;


  observer=new Observable<Especialista>();

  constructor(private http:HttpClient) { }

  getEspecialistas<Especialistas>():Observable<Especialistas>{
    return this.http.get<Especialistas>('./../../assets/data/especialistas.json');
  }

  setEspecialista(especialista:Especialista){    
    this.especialista= especialista;
  /*  this.observer = new Observable<Especialista>((observer)=>{
      observer.next(this.especialista);
    })*/
  }

  getEspecialista():Observable<Especialista>{
    this.observer = new Observable<Especialista>((observer)=>{
      observer.next(this.especialista);
    })
    return this.observer
   
  }

  setEvento(dataForm:EventosForm){
    let evento = new Evento (dataForm.evento,dataForm.fecha,dataForm.precio,this.especialista.id,dataForm.descripcion);
    evento.codigo_postal= dataForm.cp;
    evento.direccion=dataForm.direccion;
    evento.email=dataForm.email;
    evento.id=this.especialista.eventos.length+1;
    evento.imagen=dataForm.img;
    evento.online=dataForm.online;
    evento.localidad=dataForm.poblacion;
    evento.pdf=evento.pdf;
    evento.provincia=dataForm.provincia;
    evento.telefono=dataForm.telefono;
    evento.web=dataForm.web;
    this.especialista.eventos.push(evento);

    
    

  }

}
