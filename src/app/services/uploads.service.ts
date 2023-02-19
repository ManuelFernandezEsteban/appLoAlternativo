import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData,tipo:string): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.post(`${base_url}/uploads/${tipo}`, formData, {
      headers: {
        'x-token': token
      }
    })

  }

  uploadEvento(formData: FormData,tipo:string,id:string): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.post(`${base_url}/uploads/${tipo}/${id}`, formData, {
      headers: {
        'x-token': token
      }
    })

  }

  deleteEvento(key:string){
    const token = localStorage.getItem('token');

    return this.http.delete(`${base_url}/uploads/delete/${key}`, {
      headers: {
        'x-token': token
      }
    })

  }
}


