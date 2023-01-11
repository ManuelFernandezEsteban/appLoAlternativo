import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialista, Especialistas } from '../interfaces/especialistas';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(username:string,pass:string):number{
    return 5;
  }

  getUser(id:number){
    let user;
    this.http.get<Especialistas>('./../../assets/data/especialistas.json').subscribe(res=>{
      const especialistas = res.especialistas;
      especialistas.forEach(element => {
        if(element.id===id){
          user= element;
        }
      });
    })
    return user
  }

}
