import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';


@Pipe({
  name: "day",
  pure: false
})
export class DayPipe implements PipeTransform {
  transform(input: Meal[], selectedDay) {
    var output: Meal[] = [];
    var todaysdate : number = new Date().getDay();
    var yesterday : number = todaysdate - 1;
    if(selectedDay === "today") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].daynoconsumed == todaysdate) {
          input[i].shown=true;
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedDay === "yesterday") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].daynoconsumed == yesterday) {
          output.push(input[i]);
          input[i].shown=true;
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
