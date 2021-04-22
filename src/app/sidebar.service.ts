import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sideBarOpen = new Subject<boolean>(); // Source
  sideBarOpen$ = this.sideBarOpen.asObservable(); // Stream


  constructor() { }

  /**
   *
   * @returns la valeur de la variable sideBarOpen
   *
   */
   getSideBarOpen() {
    return this.sideBarOpen;
  }

  changeSideBarOpen(open: boolean) {
    this.sideBarOpen.next(open);
  }

}
