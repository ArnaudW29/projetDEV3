import { ActiveGameService } from './../../active-game.service';
import { Leaderboard } from './../../app.component';

import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-widget-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() selectedGame: string = '';

  displayedColumns: string[] = ['pseudo', 'score'];
  leaderboard!: Leaderboard[];
  leaderboard_subscription!: Subscription;

  constructor(private activeGameService: ActiveGameService) {}

  ngOnInit(): void {
    this.leaderboard_subscription = this.activeGameService.observable_leaderboard.subscribe(observable_leaderboard => this.leaderboard = observable_leaderboard)
  }
}
