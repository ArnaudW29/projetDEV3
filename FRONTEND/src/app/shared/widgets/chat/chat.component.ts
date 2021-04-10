import { ChatService } from './chat.service';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-widget-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  chat_username: string = '';
  room: string = '420';
  socket: any;
  messageText: string = '';
  messageArray:Array<{user:String, message:String}> = [];

  constructor(private _chatService: ChatService) {
    this._chatService.newUserJoined()
    .subscribe(data => this.messageArray.push(data));
    this._chatService.userLeftRoom()
    .subscribe(data => this.messageArray.push(data));
    this._chatService.newMessagedReceived()
    .subscribe(data => this.messageArray.push(data));
  }

  ngOnInit(): void { }

  join(){
    this._chatService.joinRoom({user:this.chat_username, room:this.room});
  }

  leave(){
    this._chatService.leaveRoom({user:this.chat_username, room:this.room});
  }

  sendMessage() {
    this._chatService.sendMessage({user:this.chat_username, room:this.room, message:this.messageText});
  }
}
