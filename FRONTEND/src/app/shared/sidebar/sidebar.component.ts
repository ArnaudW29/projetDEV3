import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() userIsAdmin: boolean = false;

  selectedGame: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    console.log(this.selectedGame)
  }
}
