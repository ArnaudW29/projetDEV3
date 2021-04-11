import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Leaderboard, Description } from './app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {

  url: string = "http://localhost:3000/";

  description: any = '';
  leaderboard: any = '';
  activeGame: string = '';

  private changeActiveLeaderboardBehaviorSubject = new BehaviorSubject(this.leaderboard);
  observable_leaderboard = this.changeActiveLeaderboardBehaviorSubject.asObservable();

  private changeActiveDescriptionBehaviorSubject = new BehaviorSubject(this.description);
  observable_description = this.changeActiveLeaderboardBehaviorSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  changeActiveGame(game: string) {
    this.activeGame = game;
  }

  getActiveGame() {
    return this.activeGame;
  }

  getDescription() {
    return this.httpClient.get(this.url + 'description/' + this.activeGame);
  }

  getLeaderboard() {
    return this.httpClient.get<Leaderboard[]>(this.url + 'leaderboard/' + this.activeGame);
  }
}
