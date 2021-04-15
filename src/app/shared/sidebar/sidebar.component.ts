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

  constructor(private activeGameService: ActiveGameService) {
    this.activeGameService.activeGame$.subscribe(activeGame => {
      this.selectedGame = activeGame;
    });
  }

  ngOnInit(): void { }
}
