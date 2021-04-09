import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username: string = "connectedUser"

  constructor() { }

  ngOnInit(): void { }
}
