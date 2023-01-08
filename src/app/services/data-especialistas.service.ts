import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Especialista } from '../auth/models/user.models';


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
    this.observer = new Observable<Especialista>((observer)=>{
      observer.next(this.especialista);
    })
  }

  getEspecialista():Observable<Especialista>{
    this.observer = new Observable<Especialista>((observer)=>{
      observer.next(this.especialista);
    })
    return this.observer
   
  }



}
