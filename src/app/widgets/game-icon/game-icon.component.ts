// default imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-game-icon',
  templateUrl: './game-icon.component.html',
  styleUrls: ['./game-icon.component.scss']
})
export class GameIconComponent implements OnInit {

  @Input() label!: string;
  @Input() img_source!: string;

  @Output() changeActiveGame: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  /**
   * 
   * emet un evenement signalant au composant parent (app.component) l'intention de l'utilisateur
   * de changer de jeu actif
   * 
   */
  selectActiveGame() {
    this.changeActiveGame.emit();
  }

}
