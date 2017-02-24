import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'total-calories',
  template: `
  <p>Total Calories {{selectedtotal(MealListChildChild,chosenDay)}} </p>
  `
})

export class TotalCaloriesComponent {
  @Input() MealListChildChild : Meal[];
  @Input() chosenDay : string;

  selectedtotal(Meals, Daychosen){
    var todaysdate : number = new Date().getDay();
    var yesterday : number = todaysdate - 1;
    var total : number = 0;
    if(Daychosen=="today"){
      for(var i = 0; i<Meals.length; i++){
        if (Meals[i].daynoconsumed == todaysdate){
          total = parseInt(Meals[i].calories) + total;
        }
      }
    }
    if(Daychosen=="yesterday"){
      for(var i = 0; i<Meals.length; i++){
        if (Meals[i].daynoconsumed == yesterday){
          total = parseInt(Meals[i].calories) + total;
        }
      }
    }
    return total;
  }

}
