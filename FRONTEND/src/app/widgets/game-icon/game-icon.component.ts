import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget-game-icon',
  templateUrl: './game-icon.component.html',
  styleUrls: ['./game-icon.component.scss']
})
export class GameIconComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  img_source!: string;

  @Output() changeActiveGame: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectActiveGame() {
    this.changeActiveGame.emit();
  }

}
