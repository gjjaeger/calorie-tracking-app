import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'empty-keg-list',
  template: `
    <h2>Reorder these kegs</h2>
    <div *ngFor="let currentKeg of KegListChild">
      <div *ngIf="currentKeg.pints < 10">
        <h3>Name: {{currentKeg.name}} - Brand: {{currentKeg.brand}} - Price: {{currentKeg.price}} -  Alcohol %: {{currentKeg.alcohol}} - Pints left: {{currentKeg.pints}}</h3>
      </div>
    </div>
  `
})

export class EmptyKegListComponent {
  @Input() KegListChild : Keg[];
}
