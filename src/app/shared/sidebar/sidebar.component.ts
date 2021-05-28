// import services
import { ActiveGameService } from './../../active-game.service';
import { UserService } from 'src/app/user.service';
import { ChatService } from './../../chat.service';

// default imports
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// local imports
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() userIsAdmin: boolean = false;

  // variables
  selectedGame: string = '';
  username: string = '';
  url: string  = environment.apiUrl

   /**
   *
   * souscrit a la valeur de la variable activeGame de active-game.service pour que sa propre variable selectedGame soit
   * toujours à jour en fonction du jeu selectionne
   *
   * @param activeGameService - active-game.service
   */
  constructor(private activeGameService: ActiveGameService, private userService: UserService, private httpClient: HttpClient, private chatService: ChatService) {
    this.activeGameService.activeGame$.subscribe(activeGame => {this.selectedGame = activeGame;});
    this.userService.username$.subscribe(username => {
      this.username = username;
      this.chatService.getUserName(username)

    });

  }

  ngOnInit(): void { }
}
