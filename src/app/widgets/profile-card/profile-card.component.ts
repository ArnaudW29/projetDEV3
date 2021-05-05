import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-widget-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() username!: string;
  userEmail!: any;

  constructor(private userService: UserService) {
    this.userService.getEmail().subscribe(email => {
      this.userEmail = email;
    });
  }

  ngOnInit(): void { }

}
