import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userIsAdmin!: boolean;

  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleSideBar() {
    this.toggleSideBarEvent.emit();
  }

}
