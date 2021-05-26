import { UserService } from './../../user.service';


// default imports
import { ChatService } from './../../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-game-chat-room',
  templateUrl: './game-chat-room.component.html',
  styleUrls: ['./game-chat-room.component.scss']
})
export class GameChatRoomComponent {

  username: string
  room: string ;
  listeMsg: Array<{username:String, message:String}> = [];
  contentMsg: String;

  constructor(private chatService:ChatService, private userService: UserService ) {

    this.chatService.newUserJoined()
    .subscribe(data=> this.listeMsg.push(data));

    this.chatService.leftRoom()
    .subscribe(data=> this.listeMsg.push(data));

    this.chatService.msgReçu()
    .subscribe(data=> this.listeMsg.push(data));
  /* Non fonctionnel je sais pas pourquoi, à réessayer si l'envie me vient

    this.chatService.qqnEcrit()
    .subscribe(data=> this.alerteEcriture.push(data));

    this.chatService.qqnNecritPlus()
    .subscribe(data=> this.alerteEcriture.splice(this.alerteEcriture.indexOf(data),1));
  */
    }

    joinRoom(){
      this.chatService.joinRoom({username:this.username,room: this.room });
    }


    envoieMsg(){
      if((document.getElementById("userMsg") as HTMLInputElement).value.length > 0){
        this.chatService.envoieMsg({username:this.username,room: this.room , message:this.contentMsg});
        (document.getElementById("userMsg") as HTMLInputElement).value = ""
      }



    }
      /* Non fonctionnel je sais pas pourquoi, à réessayer si l'envie me vient
    writing(){
      this.chatService.isWriting({username: this.username, room: this.room});
      console.log("ça écrit");
    }

    notWriting(){
      this.chatService.isNotWriting({username: this.username, room: this.room});
      console.log("fonction appelé")

    }
    */
  }



