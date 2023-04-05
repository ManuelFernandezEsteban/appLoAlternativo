import { Injectable } from '@angular/core';

import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketServiceCheckoutService {

  socket = io('https://nativos-tierra-app-6d5iw.ondigitalocean.app:8080');


  constructor() { }
}
