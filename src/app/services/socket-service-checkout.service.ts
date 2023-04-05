import { Injectable } from '@angular/core';

import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketServiceCheckoutService {

  socket = io('http://localhost:8000');
  

  constructor() { }
}
