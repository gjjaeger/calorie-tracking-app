import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  template: `
    <div *ngIf="restaurant.show == true">
      <div>
        {{restaurant.speciality}}
      </div>
      <div>
        {{restaurant.address}}
      </div>
      <div>
        {{restaurant.pricerange}}
      </div>
      <button>Review</button>
    </div>
  `
})

export class MealDetailsComponent {
  @Input() meal : Meal;
}
