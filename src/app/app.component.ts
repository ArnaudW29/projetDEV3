// service imports
import { UserService } from './user.service';
import { ActiveGameService } from './active-game.service';

// default imports
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username: any;
  userIsAdmin: boolean = true;

  selectedGame: string = '';

  sideBarOpen: boolean = false;

  /**
   * 
   * toggle la valeur de la variable sideBarOpen. celle-ci est utilisee pour definir l'etat ouvert ou ferme de la barre laterale
   * 
   */
  sidebarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  /**
   * 
   * @param userService - user.service ; declare ici afin de pouvoir etre utilise dans ngOnInit()
   * 
   */
  constructor(private userService: UserService, private activeGameService: ActiveGameService) { }

  /**
   * recupere le username de l'utilisateur connecte et l'enregistre dans la variable username
   */
  ngOnInit() {
    this.username = this.userService.getUsername();
  }

  /**
   * 
   * change la valeur de la variable activeGame du service active-game.service et recupere
   * la description associee au nouveau jeu actif
   * 
   * @param game - la nouvelle valeur de activeGame
   */
   dropActiveGame() {
    this.activeGameService.changeActiveGame('');
  }

}

export interface Description {
  name: string;
  description: string;
}

export interface Leaderboard {
  pseudo: string;
  score: string;
}
