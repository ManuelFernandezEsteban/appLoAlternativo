import { Injectable } from '@angular/core';
import { Moneda, Monedas } from '../interfaces/monedas.interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MonedasService {  

  constructor(private http: HttpClient) { }

  getMonedas<Monedas>(): Observable<Monedas> {
    return this.http.get<Monedas>(`${base_url}/Monedas`);
  }

}

