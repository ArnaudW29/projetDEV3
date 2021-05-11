// default imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// local imports
import { environment } from './../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // variables
  url: string  = environment.apiUrl
  currentUsername: string = '';

  // observables
  private username = new Subject<string>(); // Source
  username$ = this.username.asObservable(); // Stream

  private userIsAdmin = new Subject<string>(); // Source
  userIsAdmin$ = this.userIsAdmin.asObservable(); // Stream

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
    return this.currentUsername;
  }

  /**
   * 
   * permet d'enregistrer le nom d'utlisateur juste apres la connexion
   * 
   * @param username - le nom de l'utilisateur connecte
   * 
   */
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

  /**
   * 
   * permet de recuperer l'email de l'utlisateur connecte
   * 
   * @returns - l'email de l'utilisateur connecte
   * 
   */
  getEmail() {
    return this.httpClient.get(this.url + 'users/email/' + this.currentUsername);
  }

  /**
   * 
   * permet de recuperer le statut admin/non admin de l'utlisateur connecte
   * 
   * @returns - le statut de l'utilisateur connecte
   * 
   */
  getAdminStatus() {
    return this.httpClient.get(this.url + 'users/isAdmin/' + this.currentUsername).subscribe(status =>
      this.userIsAdmin.next(JSON.stringify(status)));
  }

  /**
   * 
   * permet de definir le statut admin/non admin de l'utilisateur connecte
   * 
   * @param status 
   * 
   */
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
