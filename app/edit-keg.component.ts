import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg</h1>
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <label>Enter Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
        <label>Enter Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <label>Enter Alcohol %:</label>
        <input [(ngModel)]="childSelectedKeg.alcohol">
        <label>Pints left in Keg:</label>
        <input [(ngModel)]="childSelectedKeg.pints">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
