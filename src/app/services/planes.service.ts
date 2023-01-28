import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan, ResPlan } from '../auth/interfaces/plan.interface';
import { environment } from 'src/environments/environment';


const base_url:string = environment.base_url;


@Injectable({
  providedIn: 'root'
})



export class PlanesService {

  constructor(private http:HttpClient) { }

  getPlan(id:number):Observable<ResPlan>{

    return this.http.get<ResPlan>(`${base_url}/planes/${id}`);
    
  }

  getPlanes():Observable<Plan[]>{
    return this.http.get<Plan[]>(`${base_url}/planes/`);
  }
}
