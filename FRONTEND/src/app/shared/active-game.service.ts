import { Leaderboard, description } from './../modules/dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ActiveGameService {
  leaderboard: any = '';
  description: any = '';
  private changeActiveLeaderboardBehaviorSubject = new BehaviorSubject(this.leaderboard);
  observable_leaderboard = this.changeActiveLeaderboardBehaviorSubject.asObservable();

  private changeActiveDescriptionBehaviorSubject = new BehaviorSubject(this.description);
  observable_description = this.changeActiveLeaderboardBehaviorSubject.asObservable();

  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  get_description(game_number: string) {
    let httpResponse = this.httpClient.get(this.baseUrl + 'description/' + game_number);
    this.description = httpResponse;
    this.changeActiveDescriptionBehaviorSubject.next(this.description)
    return httpResponse
  }

  get_leaderboard(game_number: string) {
    let httpResponse = this.httpClient.get<Leaderboard[]>(this.baseUrl + 'leaderboard/' + game_number);
    this.leaderboard = httpResponse;
    this.changeActiveLeaderboardBehaviorSubject.next(this.leaderboard)
    return httpResponse
  }

  change_active_description(description: string) {
    this.description = description;
  }
}
