import { ChatService } from './../../chat.service';
import { ActiveGameService } from './../../active-game.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-rooms-list',
  templateUrl: './game-rooms-list.component.html',
  styleUrls: ['./game-rooms-list.component.scss']
})
export class GameRoomsListComponent{

  game: any;
  connectedUsers: number

  constructor(private activeGameService: ActiveGameService, private chatService: ChatService) {
    this.game= this.activeGameService.activeGame$
   }

  joinGame(game){
    this.chatService.joinGame(game)
  }

}
