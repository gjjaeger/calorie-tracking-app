import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All</option>
      <option value="lowCalories">Less than 500 Calories</option>
      <option value="highCalories">More than 500 Calories</option>
    </select>
    <div class="col-xs-8" *ngFor="let currentMeal of MealListChild | calorie : selectedCalorieCount">
      --------------
      <h3>
        {{currentMeal.name}}
      </h3>
      <p>Details : {{currentMeal.details}}</p>
      <p>Calories : {{currentMeal.calories}}</p>
      <p>Consumed : {{currentMeal.consumed}}</p>

      <button (click)="editbuttonhasbeenclicked(currentMeal)">Edit this Meal</button>
      <button (click)="consumed(currentMeal)">Consumed</button>
      --------------
    </div>
  `
})

export class MealListComponent {
  @Input() MealListChild : Meal[];
  @Output() ClickSender = new EventEmitter();

  selectedCalorieCount : string = "all";
  onChange(optionFromMenu) {
    this.selectedCalorieCount = optionFromMenu;
  }
  editbuttonhasbeenclicked(thisMeal){
    this.ClickSender.emit(thisMeal);
  }

  consumed(currentMeal){
    var today = new Date().getDay();
    currentMeal.daynoconsumed=today;
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    currentMeal.consumed = weekday[today];
  }
}
