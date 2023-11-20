import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template:`
<button [ngClass]="{'no-padding': value === 'HAMZAZAZA' || value === 'ADYYS'}">
  <img *ngIf="value === 'HAMZAZAZA'" src="https://i.ibb.co/ykdtgkq/hamza.png" alt="HAMZAZAZA" style="width: 90px; height: 90px;">
  <img *ngIf="value === 'ADYYS'" src="https://i.ibb.co/N696PFd/adis.png" alt="ADYYS" style="width: 90px; height: 90px;">
</button>

`,
  styleUrl: 'square.component.css'
})
export class SquareComponent {
  @Input() value: 'HAMZAZAZA' | 'ADYYS';
}
