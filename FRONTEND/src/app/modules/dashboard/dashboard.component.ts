import { ActiveGameService } from './../../shared/active-game.service';

import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private activeGameService: ActiveGameService) {}

  get_game_data(game_number: string) {
    this.activeGameService.get_description(game_number)
      .subscribe(response => {
        this.description = response;
    });
    this.activeGameService.get_leaderboard(game_number);
  }

  ngOnInit(): void {
  }
}
