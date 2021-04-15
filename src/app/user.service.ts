import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:3000/";

  username: string = 'currentUser';

  constructor(private httpClient: HttpClient) { }

  getUsername() {
    return this.username;
  }

  getUsernameFromId(userId){
    return this.httpClient.get(this.url + 'users/' + userId);
  }
}
