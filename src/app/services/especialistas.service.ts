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

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EspecialistasService {

  public especialista: Especialista;

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

  crearEspecialista(formData: RegisterForm) {
    return this.http.post(`${base_url}/especialistas`, formData)
      .pipe(
        tap((res: RespuestaToken) => {
          localStorage.setItem('token', res.token)
          this.especialista = res.especialista;
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

  actualizarEspecialista(formData: ActualizarEspecialistaForm) {
    const token = localStorage.getItem('token');
    return this.http.put(`${base_url}/especialistas/${formData.id}`, formData, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((res: RespuestaEspecialista) => {
        console.log(res.especialista);
        this.especialista = new Especialista(res.especialista);

        console.log(this.especialista)

      })
    );;
  }

  cambiarPlan(plan: number) {
    const token = localStorage.getItem('token');
    let datos = { "PlaneId": plan };    
    return this.http.patch(`${base_url}/especialistas/modificarPlan/${this.especialista.id}`,
      datos,
      {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap((res: RespuestaEspecialista) => {

          this.especialista = new Especialista(res.especialista);

          console.log(this.especialista)

        })
      );
  }

}
