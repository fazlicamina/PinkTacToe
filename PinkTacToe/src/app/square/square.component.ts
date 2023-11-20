import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template:`
<button [ngClass]="{'no-padding': value === 'AMINA' || value === 'MIRZET'}">
  <img *ngIf="value === 'AMINA'" src="https://i.ibb.co/59N9d7F/Clipped-image-20231120-222209.png" alt="AMINA" style="width: 90px; height: 90px;">
  <img *ngIf="value === 'MIRZET'" src="https://i.ibb.co/McmhDF2/Clipped-image-20231120-222226.png" alt="MIRZET" style="width: 90px; height: 90px;">
</button>

`,
  styleUrl: 'square.component.css'
})
export class SquareComponent {
  @Input() value: 'AMINA' | 'MIRZET';
}
