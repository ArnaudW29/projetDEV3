import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  url: string = 'http://localhost:3000/';

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
