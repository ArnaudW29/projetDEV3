// local imports
import { Leaderboard } from './../../app.component';
import { MatTableDataSource } from '@angular/material/table';
import { ActiveGameService } from './../../active-game.service';

// default imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-widget-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, OnChanges {

  @Input() selectedGame: string = '';

  // variables
  selectedGameTitle: string;
  displayedColumns: string[] = ['pseudo', 'score'];
  leaderboard: any;

  /**
   * 
   * @param activeGameService - active-game.service ; declare ici afin de pouvoir etre utilise dans ngOnChanges()
   * 
   */
  constructor(private activeGameService: ActiveGameService) {}

  ngOnInit(): void { }

  /**
   * 
   * lors d'un changement de l'input (ici selectedGame), appelle la methode getLeaderboard() de active-game.service
   * afin de recuperer le leaderboard corresondant au nouveau jeu selectione
   * 
   */
  ngOnChanges() {
    this.activeGameService.getLeaderboard().subscribe( leaderboard => this.leaderboard = new MatTableDataSource<Leaderboard>(leaderboard));
    this.changeLeaderboardTitle();
  }

  /**
   * 
   * Permet d'adapter le titre du tableau en fonction du choix de l'utilisateur
   * 
   */
  changeLeaderboardTitle() {
    switch(this.selectedGame) {
      case "morpion": {
        this.selectedGameTitle = "Morpion";
        break
      }
      case "421": {
        this.selectedGameTitle = "421";
        break
      }
      case "puissance4": {
        this.selectedGameTitle = "Puissance 4";
        break
      }
      case "garticPhones": {
        this.selectedGameTitle = "Gartic Phones";
        break
      }
    }
  }
}
