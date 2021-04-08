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
export class LeaderboardComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['pseudo', 'score'];
  leaderboard!: Leaderboard[];
  leaderboard_subscription!: Subscription;
  dataSource: any;

  constructor(private activeGameService: ActiveGameService) {}

  ngOnInit(): void {
    this.leaderboard_subscription = this.activeGameService.observable_leaderboard.subscribe(active_leaderboard => this.leaderboard = active_leaderboard as Leaderboard[])
    this.dataSource = new MatTableDataSource<Leaderboard>(this.leaderboard);
  }

  @ViewChild(MatPaginator, { read: true })
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
