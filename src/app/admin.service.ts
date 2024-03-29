// default imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// local imports
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // variables
  url: string  = environment.apiUrl

  /**
   *
   * @param httpClient - importe du module @angular/comon/http ; declare ici afin de pouvoir etre utilise dans AdminService
   *
   */
  constructor(private httpClient: HttpClient) { }

  /**
   *
   * effectue une requete http vers le serveur express afin de recuperer la liste des reports d'utilisateurs
   *
   * @returns la liste des reports d'utilisateurs
   */
  getAdminMessages() {
    return this.httpClient.get(this.url + 'admin/reports');
  }

}
