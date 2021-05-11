import { Leaderboard } from './app.component';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {

  url: string = environment.apiUrl
  game_url!: string;

  private activeGame = new Subject<string>(); // Source
  activeGame$ = this.activeGame.asObservable(); // Stream

  /**
   *
   * @param httpClient - importe du module @angular/comon/http ; declare ici afin de pouvoir etre utilise dans ActiveGameService
   *
   */
  constructor(private httpClient: HttpClient) { }

  /**
   *
   * change la valeur de activeGame et de game_url
   *
   * @param game - nouveau jeu actif
   */
  changeActiveGame(game: string) {
    this.activeGame.next(game);
    this.game_url = game;
  }

  /**
   *
   * effectue une requete http vers le serveur express afin de recuperer la description du jeu actif
   *
   * @returns la description du jeu actif
   */
  getDescription() {
    return this.httpClient.get(this.url + 'description/' + this.game_url);
  }

  /**
   *
   * effectue une requete http vers le serveur express afin de recuperer le leaderboard du jeu actif
   *
   * @returns le leaderboard du jeu actif
   */
  getLeaderboard() {
    return this.httpClient.get<Leaderboard[]>(this.url + 'leaderboard/' + this.game_url);
  }
}
