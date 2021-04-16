import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-stroked-button color="accent" *ngIf="!value" disabled={{isDisabled}}>{{ value }}</button>
    <button mat-flat-button color="accent" *ngIf="value == 'X'">{{ value }}</button>
    <button mat-flat-button color="primary" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em; }']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';
  @Input() isDisabled: boolean;

}