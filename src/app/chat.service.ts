import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
 // variable

  socket: any;
  constructor() { }


  setupConnectio(){
    this.socket= io()
  }
}
