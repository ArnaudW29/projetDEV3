import { Leaderboard } from './../../../../modules/dashboard/dashboard.component';
import { ActiveGameService } from './../../../active-game.service';

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-widget-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['pseudo', 'score'];
  leaderboard!: Leaderboard[];
  leaderboard_subscription!: Subscription;

  constructor(private activeGameService: ActiveGameService) {}

  ngOnInit(): void {
    this.leaderboard_subscription = this.activeGameService.observable_leaderboard.subscribe(observable_leaderboard => this.leaderboard = observable_leaderboard)
  }
}
