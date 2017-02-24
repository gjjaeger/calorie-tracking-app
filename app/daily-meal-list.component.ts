import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'daily-meal-list',
  template: `
  <h3>Daily Consumption Overview</h3>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="today">Today</option>
      <option value="yesterday">Yesterday</option>
    </select>
    <div class="col-xs-8" *ngFor="let currentMeal of MealListChild | day : selectedDay">
      --------------
      <h3>
        {{currentMeal.name}}
      </h3>
      <p>Details : {{currentMeal.details}}</p>
      <p>Calories : {{currentMeal.calories}}</p>
      <p>Consumed : {{currentMeal.consumed}}</p>
      --------------
    </div>
    <total-calories
      [MealListChildChild]="MealListChild"
      [chosenDay]="selectedDay">
    </total-calories>
  `
})

export class DailyMealListComponent {
  @Input() MealListChild : Meal[];

  selectedDay : string = "today";
  onChange(optionFromMenu) {
    this.selectedDay = optionFromMenu;
  }

}
