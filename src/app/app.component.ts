// service imports
import { UserService } from './user.service';
import { ActiveGameService } from './active-game.service';
import { SidebarService } from './sidebar.service';

// default imports
import { Component } from '@angular/core';

// other imports
import { HostListener } from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username: any;
  userIsAdmin: any;

  screenWidth: any = window.innerWidth;

  selectedGame: string = '';

  sideBarOpen: boolean;
  sideBarMode: string;

  /**
   * 
   * toggle la valeur de la variable sideBarOpen. celle-ci est utilisee pour definir l'etat ouvert ou ferme de la barre laterale
   * 
   */
  sidebarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  closeSideBar() {
    console.log('test');
    this.sideBarOpen = false;
  }

  /**
   * 
   * @param userService - user.service ; declare ici afin de pouvoir etre utilise dans ngOnInit()
   * 
   */
  constructor(private userService: UserService, private activeGameService: ActiveGameService, private sideBarService: SidebarService) {
    this.userService.userIsAdmin$.subscribe(status => {this.userIsAdmin = (status == 'true');});
  }

  /**
   * recupere le username de l'utilisateur connecte et l'enregistre dans la variable username
   */
  ngOnInit() {
    this.username = this.userService.getUsername();
    this.sideBarService.changeSideBarOpen(false);
    this.sideBarService.getSideBarOpen().subscribe(sideBarOpen => this.sideBarOpen = sideBarOpen);
    this.dynamicWindowResize();
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
    if (this.sideBarOpen) {
      this.sideBarOpen = !this.sideBarOpen;
    }
  }

  signOut() {
    
  }

  dynamicWindowResize(){
    if ( this.screenWidth < 1280) {
      this.sideBarMode = "over";
    }
    else if ( this.screenWidth >= 1280) {
      this.sideBarMode = "side";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    this.dynamicWindowResize();    
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
