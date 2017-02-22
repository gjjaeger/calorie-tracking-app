import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Your bar inventory</h2>
    <div *ngFor="let currentKeg of KegListChild">
      <h3>Name: {{currentKeg.name}} - Brand: {{currentKeg.brand}} - Price: {{currentKeg.price}} -  Alcohol %: {{currentKeg.alcohol}} - Pints left: {{currentKeg.pints}}</h3>
      <button (click)="soldPint(currentKeg);">A pint was sold</button>
      <button (click)="editbuttonhasbeenclicked(currentKeg);">Edit this keg</button>
    </div>
  `
})

export class KegListComponent {
  @Input() KegListChild : Keg[];
  @Output() clickSender = new EventEmitter();

  soldPint(currentKeg){
    currentKeg.pints=currentKeg.pints-1;
  }

  editbuttonhasbeenclicked(kegToEdit:Keg){
    this.clickSender.emit(kegToEdit);
  }
}
