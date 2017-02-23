import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Your bar inventory</h2>
    <div class="col-xs-3" *ngFor="let currentKeg of KegListChild" [class.lowalc] = "currentKeg.alcohol<=5" [class.mediumalc] = "currentKeg.alcohol > 5 && currentKeg.alcohol <= 15" [class.highalc]="currentKeg.alcohol>15 && currentKeg.alcohol<20" [class.veryhighalc] = "currentKeg.alcohol >= 20">
      <h3>Name: {{currentKeg.name}}</h3>
      <p>Brand: {{currentKeg.brand}}</p>
      <p>Price: {{currentKeg.price}}</p>
      <p>Alcohol %: {{currentKeg.alcohol}}</p>
      <p>Pints left: {{currentKeg.pints}}</p>
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
