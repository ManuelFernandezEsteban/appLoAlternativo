import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsors } from '../interfaces/sponsors';
import { environment } from '../../environments/environment';

const baseUrl= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private http:HttpClient) { }

  getSponsors():Observable<Sponsors>{

    return this.http.get<Sponsors>(`${baseUrl}/sponsors/sponsors/2`)
  }
}
