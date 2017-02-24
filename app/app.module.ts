import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealDetailsComponent } from './meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';
import { EditMealComponent } from './edit-meal.component';
import { DailyMealListComponent } from './daily-meal-list.component';
import { DayPipe } from './day.pipe';
import { TotalCaloriesComponent } from './total-calories.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealDetailsComponent,
    NewMealComponent,
    CaloriePipe,
    EditMealComponent,
    DailyMealListComponent,
    DayPipe,
    TotalCaloriesComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
