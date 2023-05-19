import { Injectable } from '@angular/core';
import { ClienteForm } from '../interfaces/clienteForm.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) { }

  darAltaCliente(formData:ClienteForm){   

    return this.http.post(`${base_url}/clientes`,formData)
    
  }
}
