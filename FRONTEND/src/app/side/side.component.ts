import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';


export interface Leaderboard {
  pseudo: string;
  score: string;
}

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  providers: [DataService]
})
export class SideComponent {
  displayedColumns: string[] = ['pseudo', 'score'];
  leaderboard: any;
  active_leaderboard: Leaderboard[] = [];

  constructor(private dataService: DataService) {}

  get_game_leaderboard(game_number: string) {
    this.dataService.get_leaderboard(game_number)
      .subscribe(response => {
        this.leaderboard = new MatTableDataSource(response);
      });
  }
}
