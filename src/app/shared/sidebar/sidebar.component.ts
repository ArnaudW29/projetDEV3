import { ActiveGameService } from './../../active-game.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() userIsAdmin: boolean = false;

  selectedGame: string = '';

   /**
   * 
   * souscrit a la valeur de la variable activeGame de active-game.service pour que sa propre variable selectedGame soit
   * toujours à jour en fonction du jeu selectionne
   * 
   * @param activeGameService - active-game.service
   */
  constructor(private activeGameService: ActiveGameService) {
    this.activeGameService.activeGame$.subscribe(activeGame => {this.selectedGame = activeGame;});
  }

  ngOnInit(): void { }
}
