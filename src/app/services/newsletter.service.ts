import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormNewsletter } from '../interfaces/formNewsletter.interface';

const baseUrl=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http:HttpClient) { }

  postUser(user:FormNewsletter){
    return this.http.post(`${baseUrl}/newsletter/`,user);
  }
}
