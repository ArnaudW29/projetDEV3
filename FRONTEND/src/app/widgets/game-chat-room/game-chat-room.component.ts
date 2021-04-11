// services imports
import { ChatService } from './../../chat.service';
import { UserService } from './../../user.service';

// default imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-widget-game-chat-room',
  templateUrl: './game-chat-room.component.html',
  styleUrls: ['./game-chat-room.component.scss']
})
export class GameChatRoomComponent implements OnInit, OnChanges {

  @Input() activeGame!: string;
  room!: string;

  chat_username: string = '';
  messageText: string = '';
  messageArray:Array<{user:String, message:String}> = [];

  constructor(private _chatService: ChatService, private userService: UserService) {
    this.chat_username = this.userService.getUsername();
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

  ngOnChanges() {
    if (this.room) {
      this.messageArray = [];
      this.leave();
    }
    this.room = this.activeGame;
    this.join();
  }

}
