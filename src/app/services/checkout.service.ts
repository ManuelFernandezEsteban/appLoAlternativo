import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckoutSesion } from '../interfaces/checkoutsesion.interface';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }


  startEventoCheckoutSession(eventoId:string):Observable<CheckoutSesion>{ 

  let callBack:string = this.buildCallbackUrl();

    return this.http.post<CheckoutSesion>(`${base_url}/checkout/`,{
      eventoId,
      callbackUrl:callBack      
    });
  }

  buildCallbackUrl():string{

    const protocol = window.location.protocol,
          hostname = window.location.hostname,
          port = window.location.port;
    let callbackUrl = `${protocol}//${hostname}`;
    if (port){
      callbackUrl+= ':' + port;
    }
    return callbackUrl+='/stripe-checkout';    
  }




}
