import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leaderboard } from './side/side.component';

@Injectable()
export class DataService {

  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  get_leaderboard(game_number: string): Observable<Leaderboard[]> {
    return this.httpClient.get<Leaderboard[]>(this.baseUrl + 'leaderboard/' + game_number);
  }

  get_description(game_number: string) {
    return this.httpClient.get(this.baseUrl + 'description/' + game_number);
  }
}
