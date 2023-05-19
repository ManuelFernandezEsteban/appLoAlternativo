import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';

import { io } from 'socket.io-client'
import { environment } from 'src/environments/environment';

const socket_url = environment.url_socket;
@Injectable({
  providedIn: 'root'
})
export class SocketServiceCheckoutService {

  private socketStatus: boolean = false;  
  private newMessage: Subject<any>;
  private socket = io(socket_url);

  constructor() {
    this.checkStatus()

  }
  listen(evento): Observable<any> {

    this.newMessage?.complete();
    this.newMessage = new Subject<any>();  
    console.log(evento)  
    this.socket.on(evento, (payload) => {  
      console.log(payload)
      this.newMessage.next(payload)
    })
    
    return this.newMessage.asObservable();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      //console.log('Conectado al servidor');
      this.socketStatus = true;
    })
    this.socket.on('disconnect', () => {
      //console.log('Desconectado al servidor');
      this.socketStatus = false;
    })
  }



  emit(evento: string, payload?: any, callback?: Function) {
    console.log('emitiendo', evento);
    this.socket.emit(evento, payload, callback);

  }



}
