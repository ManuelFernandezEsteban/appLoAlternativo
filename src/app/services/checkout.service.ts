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

  constructor(private http: HttpClient) { }


  startEventoCheckoutSession(eventoId: string, clienteId:string): Observable<CheckoutSesion> {

    let callbackUrl: string = this.buildCallbackUrl('/stripe-checkout');
    //console.log(callbackUrl);
    return this.http.post<CheckoutSesion>(`${base_url}/checkout/`, {
      eventoId,
      clienteId,
      callbackUrl
    });
  }

  startSubscriptionCheckoutSesion(plan:number,especialista:string){
    let callbackUrl: string = this.buildCallbackUrl('/auth/principal/planes');
    //console.log(callbackUrl);
    return this.http.post<CheckoutSesion>(`${base_url}/checkout/`, {
      plan,
      especialista,
      callbackUrl
    });
  }

  buildCallbackUrl(end:string): string {

    const protocol = window.location.protocol,
      hostname = window.location.hostname,
      port = window.location.port;
    let callbackUrl = `${protocol}//${hostname}`;
    if (port) {
      callbackUrl += ':' + port;
    }
    return callbackUrl += end;
  }



}
