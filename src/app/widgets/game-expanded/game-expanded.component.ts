// import services
import { ActiveGameService } from './../../active-game.service';
import { UserService } from 'src/app/user.service';
import { ChatService } from './../../chat.service';

// default imports
import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

// local imports
import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-widget-game-expanded',
  templateUrl: './game-expanded.component.html',
  styleUrls: ['./game-expanded.component.scss']
})
export class GameExpandedComponent implements OnInit, OnChanges {

  @Input() activeGame!: string;

  @Output() closeSideBarEvent: EventEmitter<any> = new EventEmitter();

  // variables
  activeGametitle: string;
  description: any;
  gameImageUrl: String = "";
  connectedUser!: any;

  // dynamic button
  buttonText: string = "Connecte toi pour jouer !"
  buttonRouterLink: string = '/login';

  /**
   *
   * @param activeGameService - active-game.service ; declare ici afin de pouvoir etre utilise dans ngOnChanges()
   *
   */
  constructor(private activeGameService: ActiveGameService, private userService: UserService, private chatService: ChatService) { }

  ngOnInit(): void { }

  /**
   *
   * lors d'un changement de l'input (ici activeGame), appelle la methode getDescription() de active-game.service
   * afin de recuperer la description corresondant au nouveau jeu selectione
   *
   */
  ngOnChanges() {
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
    this.gameImageUrl = environment.apiUrl + "games/image/" + this.activeGame;
    if(this.userService.getUsername()){
      this.buttonText = "play now!";
      this.buttonRouterLink = '/' + this.activeGame;
    }
    let scrollTarget = document.getElementById("scrollTarget");
    setTimeout(function(){
      scrollTarget.scrollIntoView(false);
  }, 100);

    this.changeTitle()
  }

  /**
   *
   * Permet de modifier la valeur de la variable activeGame en fonction des choix de l'utilisateur
   *
   */
  changeTitle() {
    switch(this.activeGame) {
      case "morpion": {
        this.activeGametitle = "Le morpion";
        break
      }
      case "421": {
        this.activeGametitle = "Le 421";
        break
      }
      case "puissance4": {
        this.activeGametitle = "Le Puissance 4";
        break
      }
      case "garticPhones": {
        this.activeGametitle = "Gartic Phones";

      }
    }
  }

  /**
   *
   * permet de fermer la sidebar lorsque l'utilisateur clique sur le bouton
   * (il est redirige sur une autre section du site - c'est le meme comportement que celui adopte dans le header)
   *
   */
  closeSideBar() {
    this.closeSideBarEvent.emit();
  }

  joinGame(gameRoom){
    this.chatService.joinGame(gameRoom)
  }

}
