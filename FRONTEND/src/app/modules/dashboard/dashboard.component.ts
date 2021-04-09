import { ActiveGameService } from './../../shared/active-game.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export interface description {
  name: string;
  description: string;
}

export interface Leaderboard {
  pseudo: string;
  score: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  description: any;
  description_subscription!: Subscription;
  active_game_number: string = ''

  constructor(private activeGameService: ActiveGameService) {}

  get_game_data(game_number: string) {
    this.activeGameService.get_description(game_number)
      .subscribe(response => {
        this.active_game_number = game_number;
        this.description = response;
        this.activeGameService.change_active_description(this.description)
    });
    this.activeGameService.get_leaderboard(game_number);
  }

  ngOnInit(): void {
    this.description_subscription = this.activeGameService.observable_description.subscribe(active_description => this.description = active_description)
  }
}
