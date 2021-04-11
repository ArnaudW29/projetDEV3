import { Leaderboard } from './app.component';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {

  url: string = "http://localhost:3000/";
  game_url!: string;

  private activeGame = new Subject<string>(); // Source
  activeGame$ = this.activeGame.asObservable(); // Stream

  constructor(private httpClient: HttpClient) { }

  changeActiveGame(game: string) {
    this.activeGame.next(game);
    this.game_url = game;
  }

  getActiveGame() {
    return this.activeGame;
  }

  getDescription() {
    return this.httpClient.get(this.url + 'description/' + this.game_url);
  }

  getLeaderboard() {
    return this.httpClient.get<Leaderboard[]>(this.url + 'leaderboard/' + this.game_url);
  }
}
