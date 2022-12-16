import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEspecialistasService {

  constructor(private http:HttpClient) { }

  getEspecialistas<Especialistas>():Observable<Especialistas>{
    return this.http.get<Especialistas>('./../../assets/data/especialistas.json');
  }
}
