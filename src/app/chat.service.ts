import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment'
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
 // variable

  socket: any;
  username: string;
  visiteur: string
  constructor( ) {}


  setupConnection(){
    this.socket= io(environment.apiUrl);
    console.log('connection io établie');
  }

  getUserName(pseudoReçu: string){
    console.log(pseudoReçu + ' reçu sur le service');
    // Si l'utilisateur ne se connecte pas à un compte, ça lui attribue un numéro de guest pour communiquer dans le chat
    if (pseudoReçu==''){
      this.visiteur = " Guest" + String(Math.floor(Math.random() * 1000));
      this.socket.emit("username", this.visiteur);
    }

    else{
      this.socket.emit("username", pseudoReçu);
    }
  }

  joinGame(data){
    this.socket.emit('joinRoom',{username: this.socket.username, roomName: data});
    this.socket.emit('joinGame',{username: this.socket.username, roomName: data});


  }

  joinRoom(data){
    this.socket.emit('joinRoom',{username: this.socket.username, roomName: data});
  }

  newUserJoined(){
    var observable = new Observable<{ username:String, message:String}>(observer =>{
      this.socket.on('newUser', (data)=> {
        observer.next(data)
      });
    });
    return observable;
  }


  leftRoom(){
    var observable = new Observable<{ username:String, message:String}>(observer =>{
      this.socket.on('leavingUser', (data)=> {
        observer.next(data)
      });
    });
    return observable
  }

  envoieMsg(data){
    this.socket.emit('newMsg', data);
  }

  msgReçu(){
    var observable = new Observable<{ username:String, message:String}>(observer =>{
      this.socket.on('newMsg', (data)=> {
        console.log("msg reçu service")
        observer.next(data)
      });
    });
    return observable;
  }

  joueursConnectés(){
    var observable = new Observable<{ room :String, nbConnecté: number}>(observer =>{
      this.socket.on('connectedUsers', (data)=> {
        observer.next(data)
      });
    });
    return observable;
  }

  joueursDéconnectés(){
    var observable = new Observable<{ room :String, nbConnecté: number}>(observer =>{
      this.socket.on('disconnectedUsers', (data)=> {
        observer.next(data)
      });
    });
    return observable;
  }

 /* isWriting(data){
    this.socket.emit('isWriting', data);
    console.log('passé ds le service')
  }

   Non fonctionnel je sais pas pourquoi, à réessayer si l'envie me vient
  qqnEcrit(){
    var observable = new Observable<{ username:String, message:String}>(observer =>{
      this.socket.on('isWriting', (data)=> {
        console.log("Qqn écrit")
        observer.next(data)
      });
    });
    return observable;
  }

  isNotWriting(data){
    this.socket.emit('notWriting', data);

  }

  qqnNecritPlus(){
    var observable = new Observable<{ username:String, message:String}>(observer =>{
      this.socket.on('notWriting', (data)=> {
        console.log("Qqn n'écrit plus")
        observer.next(data)
      });
    });
    return observable;
  }*/
}

