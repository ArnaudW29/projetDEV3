import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  ingameSideBarOpen: boolean;
  ingameSideBarMode: string;
  screenWidth: any = window.innerWidth;

  constructor(private sideBarService: SidebarService) { }

  ngOnInit(): void {
    this.sideBarService.changeIngameSidebarOpen(false);
    this.sideBarService.getIngameSideBarOpen().subscribe(ingameSideBarOpen => this.ingameSideBarOpen = ingameSideBarOpen);
    this.dynamicWindowResize();
  }

  dynamicWindowResize(){
    if ( this.screenWidth < 1280) {
      this.ingameSideBarOpen = false;
      this.ingameSideBarMode = "push";
    }
    else if ( this.screenWidth >= 1280) {
      this.ingameSideBarOpen = true;
      this.ingameSideBarMode = "side";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    this.dynamicWindowResize();    
  }

}
