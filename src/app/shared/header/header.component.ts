import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userIsAdmin!: boolean;

  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();
  @Output() dropActiveGame: EventEmitter<any> = new EventEmitter();

  constructor() { }

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
   selectActiveGame() {
    this.dropActiveGame.emit();
  }

}
