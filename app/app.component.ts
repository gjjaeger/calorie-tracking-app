import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>What did you eat today</h1>
    <meal-list
      class="col-xs-12"
      [MealListChild]="MealList"
      (ClickSender)="showDetails($event)">
    </meal-list>
    <new-meal
      (newMealSender)="addMeal($event)">
    </new-meal>
    <edit-meal
      [childSelectedMeal]="clickedonMeal"
      (doneCLickedSender)="editFinished()">
    </edit-meal>
    <daily-meal-list
      [MealListChild]="MealList">
    </daily-meal-list>
  </div>
  `
})

export class AppComponent {

  public MealList : Meal [] = [];

  addMeal (newMeal : Meal){
    this.MealList.push(newMeal);
  }

  clickedonMeal : Meal = null;
  showDetails(clickedMeal : Meal){
    this.clickedonMeal=clickedMeal;
  }

  editFinishsed(){
    this.clickedonMeal = null;
  }
}
