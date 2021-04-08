import { Leaderboard } from './../modules/dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {
  leaderboard: any = '';
  private changeActiveLeaderboardBehaviorSubject = new BehaviorSubject(this.leaderboard);
  observable_leaderboard = this.changeActiveLeaderboardBehaviorSubject.asObservable();

  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  get_description(game_number: string) {
    return this.httpClient.get(this.baseUrl + 'description/' + game_number);
  }

  get_leaderboard(game_number: string): Observable<Leaderboard[]> {
    let httpResponse = this.httpClient.get<Leaderboard[]>(this.baseUrl + 'leaderboard/' + game_number);
    this.leaderboard = httpResponse;
    this.changeActiveLeaderboardBehaviorSubject.next(this.leaderboard)
    return httpResponse
  }
}
