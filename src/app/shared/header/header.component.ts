import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userIsAdmin!: boolean;

  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();
  @Output() dropActiveGameEvent: EventEmitter<any> = new EventEmitter();

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

  signOut() {
    this.userService.setUsername('');
    this.dropActiveGame();
  }

}
