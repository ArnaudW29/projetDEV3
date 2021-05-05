import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() username!: string;
  @Input() userEmail!: string;

  constructor() { }

  ngOnInit(): void { }

}
