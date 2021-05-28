import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // observables
  private sideBarOpen = new Subject<boolean>(); // Source
  sideBarOpen$ = this.sideBarOpen.asObservable(); // Stream

  private ingameSideBarOpen = new Subject<boolean>(); // Source
  ingameSideBarOpen$ = this.ingameSideBarOpen.asObservable(); // Stream


  constructor() { }

  /**
   *
   * @returns la valeur de la variable sideBarOpen
   *
   */
   getSideBarOpen() {
    return this.sideBarOpen;
  }

  /**
   * 
   * Permet de changer l'etat ouvert/ferme de la sidebar
   * 
   * @param open - booleen correspondant au nouvel etat
   * 
   */
  changeSideBarOpen(open: boolean) {
    this.sideBarOpen.next(open);
  }

  /**
   *
   * @returns la valeur de la variable ingameSideBarOpen
   *
   */
   getIngameSideBarOpen() {
    return this.ingameSideBarOpen;
  }

 /**
   * 
   * Permet de changer l'etat ouvert/ferme de la ingame sidebar
   * 
   * @param open - booleen correspondant au nouvel etat
   * 
   */
  changeIngameSidebarOpen(open: boolean) {
    this.ingameSideBarOpen.next(open)
  }

}
