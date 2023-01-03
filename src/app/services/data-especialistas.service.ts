import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, pipe } from 'rxjs';
import { Especialista, Especialistas } from 'src/app/interfaces/especialistas';

@Injectable({
  providedIn: 'root'
})
export class DataEspecialistasService {

  especialista:Especialista={
    id: 0,
    nombre: '',
    apellidos: '',
    fecha_alta: '',
    descripcion_terapia: '',
    actividad: 0,
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: '',
    telefono: '',
    plan_contratado: '',
    token_pago: '',
    email: '',
    password:'',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  }

  constructor(private http:HttpClient) { }

  getEspecialistas<Especialistas>():Observable<Especialistas>{
    return this.http.get<Especialistas>('./../../assets/data/especialistas.json');
  }




}
