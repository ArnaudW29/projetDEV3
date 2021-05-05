// import services
import { ActiveGameService } from './../../active-game.service';

// default imports
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { environment } from './../../../environments/environment'
import { SidebarService } from 'src/app/sidebar.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  description: any;
  activeGame: string = '';
  apiUrl: string = environment.apiUrl;
  username: any;

  /**
   * 
   * @param activeGameService - active-game.service ; declare ici afin de pouvoir etre utilise dans changeActiveGame()
   * 
   */
  constructor(private activeGameService: ActiveGameService, private sideBarService: SidebarService, private userService: UserService) {
    this.activeGameService.activeGame$.subscribe(activeGame => {this.activeGame = activeGame;});
  }

  ngOnInit(): void { }

  /**
   * 
   * change la valeur de la variable activeGame du service active-game.service et recupere
   * la description associee au nouveau jeu actif
   * 
   * @param game - la nouvelle valeur de activeGame
   */
  changeActiveGame(game: string) {
    this.activeGameService.changeActiveGame(game);
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
  }

  closeSideBar() {
    this.sideBarService.changeSideBarOpen(false);
  }

}
