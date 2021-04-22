// import services
import { ActiveGameService } from './../../active-game.service';

import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-widget-game-expanded',
  templateUrl: './game-expanded.component.html',
  styleUrls: ['./game-expanded.component.scss']
})
export class GameExpandedComponent implements OnInit, OnChanges {

  @Input() activeGame!: string;

  activeGametitle: string;
  description: any;
  gameImageUrl: String = "";

  /**
   * 
   * @param activeGameService - active-game.service ; declare ici afin de pouvoir etre utilise dans ngOnChanges()
   * 
   */
  constructor(private activeGameService: ActiveGameService) { }

  ngOnInit(): void { }

  /**
   * 
   * lors d'un changement de l'input (ici activeGame), appelle la methode getDescription() de active-game.service
   * afin de recuperer la description corresondant au nouveau jeu selectione
   * 
   */
  ngOnChanges() {
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
    this.gameImageUrl = environment.apiUrl + "images/games/" + this.activeGame;
    let scrollTarget = document.getElementById("scrollTarget");
    scrollTarget.scrollIntoView(true);

    this.changeTitle()
  }

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
        break
      }
    }
  }

}
