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

  /**
   *
   * @param httpClient - importe du module @angular/comon/http ; declare ici afin de pouvoir etre utilise dans UserService
   *
   */
  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @returns la valeur de la variable username
   *
   */
  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username.next(username);
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
