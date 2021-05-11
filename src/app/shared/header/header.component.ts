// default imports
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

// import services
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userIsAdmin!: string;

  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();
  @Output() dropActiveGameEvent: EventEmitter<any> = new EventEmitter();
  @Output() signOutEvent: EventEmitter<any> = new EventEmitter();

  // variables
  username: string = '';

  constructor(private userService: UserService) {
    this.userService.username$.subscribe(username => {this.username = username;});
  }

  ngOnInit(): void { }

  /**
   * 
   * emet un evenement signalant au composant parent (app.component) l'intention de l'utilisateur
   * de toggle la barre laterale
   * 
   */
  toggleSideBar() {
    this.toggleSideBarEvent.emit();
  }

  /**
   * 
   * emet un evenement signalant au composant parent (app.component) l'intention de l'utilisateur
   * de changer de jeu actif
   * 
   */
   dropActiveGame() {
    this.dropActiveGameEvent.emit();
  }

  /**
   * 
   * permet de deconnecter l'utilisateur
   * 
   */
  signOut() {
    this.signOutEvent.emit();
    this.userService.setUsername('');
    this.dropActiveGame();
  }

}
