// import services
import { ActiveGameService } from './../../active-game.service';

import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-widget-game-expanded',
  templateUrl: './game-expanded.component.html',
  styleUrls: ['./game-expanded.component.scss']
})
export class GameExpandedComponent implements OnInit, OnChanges {

  @Input() activeGame!: string;

  description: any;

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
  }

}
