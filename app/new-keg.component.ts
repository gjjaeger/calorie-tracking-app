import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Name:</label>
      <input #name>
      <label>Brand:</label>
      <input #brand>
      <label>Price:</label>
      <input #price>
      <label>Alcohol %:</label>
      <input #alcohol>
      <button (click)="
        addClicked(name.value, brand.value, price.value, alcohol.value);
        name.value='';
        brand.value='';
        price.value='';
        alcohol.value='';
      ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name : string, brand : string, price : number, alcohol : number) {
    var newKegToAdd: Keg = new Keg (name, brand, price, alcohol, 40);
    this.newTaskSender.emit(newKegToAdd);
  }
}
