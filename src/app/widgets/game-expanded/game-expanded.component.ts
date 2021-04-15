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

  constructor(private activeGameService: ActiveGameService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.activeGameService.getDescription().subscribe(description => { this.description = description });
  }

}
