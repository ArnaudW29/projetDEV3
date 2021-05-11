// default imports
import { Component, OnInit, Input } from '@angular/core';

// import services
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-widget-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() username!: string;

  // variables
  userEmail!: any;

  /**
   * 
   * permet de recuperer l'email de l'utilisateur connecte des l'initialisation du component
   * 
   * @param userService 
   */
  constructor(private userService: UserService) {
    this.userService.getEmail().subscribe(email => {
      this.userEmail = email;
    });
  }

  ngOnInit(): void { }

}
