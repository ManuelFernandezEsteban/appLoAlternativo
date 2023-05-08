import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/loginForm.interface';
import { RegisterForm } from '../interfaces/registerForm.interface';
import { RespuestaToken } from '../interfaces/respuesta-token.interface';
import { Especialista } from '../auth/models/especialista.model';
import { ActualizarEspecialistaForm } from '../interfaces/actualizar-especialista-form';
import { RespuestaEspecialista } from '../interfaces/respuesta-especialista.interface';
import { EspecialistasActividad } from '../interfaces/especialistas-actividad.interface';
import { NewPassForm } from '../interfaces/newPassForm.interface';
import { Suscripcion } from '../interfaces/suscripcion';
import { RespuestaCuenta } from '../interfaces/cuenta_conectada.interface';


const base_url = environment.base_url;



@Injectable({
  providedIn: 'root'
})
export class EspecialistasService {

  private limiteResultados:number=5;
  public especialista: Especialista;
  public especialistaInicial:RegisterForm;

  public isOroActive:boolean=false;


  constructor(private http: HttpClient) { }

  logOut() {
    localStorage.removeItem('token');
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/auth/renovar`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((res: RespuestaToken) => {

        this.especialista = new Especialista(res.especialista);
        localStorage.setItem('token', res.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    )
  }

  iniciarRegistro(formData:RegisterForm){

    this.especialistaInicial=formData;

  }

  crearEspecialista(formData: RegisterForm) {    

    return this.http.post(`${base_url}/especialistas`, formData)
      .pipe(
        tap((res: RespuestaToken) => {
          localStorage.setItem('token', res.token)
          this.especialista = new Especialista(res.especialista);

          //console.log(this.especialista)
          
        })
      );
  }



  loginEspecialista(formData: LoginForm) {

    return this.http.post(`${base_url}/auth/login`, formData)
      .pipe(
        tap((res: RespuestaToken) => {
          localStorage.setItem('token', res.token);          
          this.especialista = new Especialista(res.especialista);
          
          
        })
      );
  }

  forgotEspecialista(formData:LoginForm){    
    return this.http.put(`${base_url}/auth/forgot-password`, formData)      
  }

  newPassword(formData:NewPassForm,resetToken:string){    
    return this.http.put(`${base_url}/auth/new-password`, formData,{
      headers:{
        resetToken
      }
    })      
  }

  actualizarEspecialista(formData: ActualizarEspecialistaForm) {
    const token = localStorage.getItem('token');
    return this.http.put(`${base_url}/especialistas/${formData.id}`, formData, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((res: RespuestaEspecialista) => {        
        this.especialista = new Especialista(res.especialista); 
      })
    );;
  }

  getEspecialistasActividadPagination(actividad:number,pagina:number):Observable<EspecialistasActividad>{
    
    const desde:number = (pagina*this.limiteResultados)-this.limiteResultados;
   
    return this.http.get<EspecialistasActividad>(`${base_url}/especialistas/pagination/${actividad}?desde=${desde}`);
  }

  getEspecialistasActividad(actividad:number):Observable<EspecialistasActividad>{    
   
    return this.http.get<EspecialistasActividad>(`${base_url}/especialistas/${actividad}`);
  }


  getCategoriasEspecialista<Especialistas_Categorias>(id:string):Observable<Especialistas_Categorias>{

    return this.http.get<Especialistas_Categorias>(`${base_url}/categorias_especialistas/${id}`);

  }


  getSubscription(){
  
    return this.http.get<Suscripcion>(`${base_url}/subscriptions/${this.especialista.id}`);

  }

  cancelarSuscripcion(){
    return this.http.delete<Suscripcion>(`${base_url}/subscriptions/cancelar/${this.especialista.token_pago}`);
  }

  getAccount():Observable<RespuestaCuenta>{
    const token = localStorage.getItem('token');
    return this.http.get<RespuestaCuenta>(`${base_url}/especialistas/cuenta_conectada/${this.especialista.cuentaConectada}`,
    {
      headers: {
        'x-token': token
      }
    })
  }

  crearCuentaConectada(){

    const token = localStorage.getItem('token');

    let callbackUrl: string = this.buildCallbackUrl();
    return this.http.post(`${base_url}/especialistas/cuenta_conectada/${this.especialista.id}`,
      {
        callbackUrl
      },
      {
        headers:{'x-token':token}
      }
    )

  }

  buildCallbackUrl(): string {

    const protocol = window.location.protocol,
      hostname = window.location.hostname,
      port = window.location.port;
    let callbackUrl = `${protocol}//${hostname}`;
    if (port) {
      callbackUrl += ':' + port;
    }
    return callbackUrl += '/home';
  }
}
