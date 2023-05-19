import { Injectable } from '@angular/core';
import { FormCliente } from '../interfaces/formCliente.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class VerificarCompraClienteService {

  constructor(private http:HttpClient) { }

  enviarVerificacion(data:FormCliente,token:string,type:string){

    console.log(data,token);

    return this.http.post(`${base_url}/validar-compras/${type}/`, data,{
      headers:{
        token
      }
    })

  }
}
