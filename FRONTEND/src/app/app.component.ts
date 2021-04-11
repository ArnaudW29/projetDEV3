// service imports
import { UserService } from './user.service';

// default imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  username: any;
  userIsAdmin: boolean = true;

  selectedGame: string = '';

  sideBarOpen: boolean = true;

  sidebarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUsername();
  }

}

export interface Description {
  name: string;
  description: string;
}

export interface Leaderboard {
  pseudo: string;
  score: string;
}
