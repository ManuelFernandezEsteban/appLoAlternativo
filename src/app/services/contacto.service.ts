import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactoForm } from '../interfaces/contactoForm.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }


  enviarConsulta( contacto:ContactoForm){
    
    return this.http.post(`${base_url}/contacto/`,contacto);

  }
}
