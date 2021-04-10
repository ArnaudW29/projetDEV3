import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { io } from 'socket.io-client'

@Injectable()

export class ChatService{

  baseUrl: string = 'localhost:3000'

  private socket = io(this.baseUrl, { transports : ['websocket'] });

  joinRoom(data: any){
    this.socket.emit('join', data);
  }

  newUserJoined(){
    let obserable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obserable;
  }

  leaveRoom(data: any) {
    this.socket.emit('leave', data);
  }

  userLeftRoom(){
    let obserable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on('left room', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obserable;
  }

  sendMessage(data: any) {
    this.socket.emit('message', data);
  }

  newMessagedReceived() {
    let obserable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });
    return obserable;
  }

}
