import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string  = environment.apiUrl

  private username = new Subject<string>(); // Source
  username$ = this.username.asObservable(); // Stream

  private userIsAdmin = new Subject<string>(); // Source
  userIsAdmin$ = this.userIsAdmin.asObservable(); // Stream

  currentUsername: string = '';

  /**
   *
   * @param httpClient - importe du module @angular/comon/http ; declare ici afin de pouvoir etre utilise dans UserService
   *
   */
  constructor(private httpClient: HttpClient) {
    this.userIsAdmin.next('false');
  }

  /**
   *
   * @returns la valeur de la variable username
   *
   */
  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.currentUsername = username;
    if(username) {
      this.getAdminStatus();
    }
    else {
      this.setAdminStatus('false');
    }
    this.username.next(username);
  }

  getEmail() {
    return this.httpClient.get(this.url + 'users/email/' + this.currentUsername);
  }

  getAdminStatus() {
    return this.httpClient.get(this.url + 'users/isAdmin/' + this.currentUsername).subscribe(status =>
      this.userIsAdmin.next(JSON.stringify(status)));
  }

  setAdminStatus(status) {
    this.userIsAdmin.next(status);
  }

  /**
   *
   * effectue une requete http vers le serveur express afin de recuperer le username associe a un userId
   *
   * @param userId - le userId dont on aimerait connaitre le nom d'utilisateur associe
   * @returns le nom d'utilisateur recherche
   */
  getUsernameFromId(userId){
    return this.httpClient.get(this.url + 'users/username/' + userId);
  }
}
