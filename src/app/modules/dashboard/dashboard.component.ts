// import services
import { ActiveGameService } from './../../active-game.service';

// default imports
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  description: any;
  activeGame: string = '';

  /**
   * 
   * @param activeGameService - active-game.service ; declare ici afin de pouvoir etre utilise dans changeActiveGame()
   * 
   */
  constructor(private activeGameService: ActiveGameService) { }

  ngOnInit(): void { }

  /**
   * 
   * change la valeur de la variable activeGame du service active-game.service et recupere
   * la description associee au nouveau jeu actif
   * 
   * @param game - la nouvelle valeur de activeGame
   */
  changeActiveGame(game: string) {
    this.activeGame = game;
    this.activeGameService.changeActiveGame(game);
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
  }

}
