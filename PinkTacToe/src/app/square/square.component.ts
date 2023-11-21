import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template:`
<button [ngClass]="{'no-padding': value === 'X' || value === 'O'}">
  <img *ngIf="value === 'X'" src="https://i.ibb.co/f4rqPgG/Picsart-23-11-21-13-29-54-346.png" alt="X" style="width: 90px; height: 90px;">
  <img *ngIf="value === 'O'" src="https://i.ibb.co/xzR0RkK/Picsart-23-11-21-13-31-54-211.png" alt="O" style="width: 90px; height: 90px;">
</button>

`,
  styleUrl: 'square.component.css'
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
