import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Name:</label>
      <input placeholder="Burger" #name>
      <label>Details:</label>
      <input #details>
      <label>Calories:</label>
      <input #calories>
      <button (click)="
        addClicked(name.value, details.value, calories.value);
        name.value='';
        details.value='';
        calories.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name : string, details : string, calories : number) {
    var newMealToAdd: Meal = new Meal (name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
