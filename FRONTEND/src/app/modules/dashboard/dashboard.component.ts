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

  constructor(private activeGameService: ActiveGameService) { }

  ngOnInit(): void {
  }

  changeActiveGame(game: string) {
    this.activeGame = game;
    this.activeGameService.changeActiveGame(game);
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
  }

}
