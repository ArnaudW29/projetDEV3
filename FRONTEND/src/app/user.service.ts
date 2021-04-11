import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = 'currentUser';

  constructor() { }

  getUsername() {
    return this.username;
  }
}
