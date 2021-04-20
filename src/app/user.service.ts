import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://devgames3.herokuapp.com/";

  username: string = 'currentUser';

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

  /**
   *
   * effectue une requete http vers le serveur express afin de recuperer le username associe a un userId
   *
   * @param userId - le userId dont on aimerait connaitre le nom d'utilisateur associe
   * @returns le nom d'utilisateur recherche
   */
  getUsernameFromId(userId){
    return this.httpClient.get(this.url + 'users/' + userId);
  }
}
