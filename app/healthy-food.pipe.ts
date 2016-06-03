import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "health",
  pure: false
})

export class HealthyFoodPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredLowFoodState = args[0];
    if(desiredLowFoodState === "healthy") {
      return input.filter((food) => {
        return (food.calories <= 500);
      });
    } else if(desiredLowFoodState === "unhealthy") {
      return input.filter((food) => {
        return (food.calories > 500);
      });
    }
    else {
      return input.filter((food) => {
        return true;
      });
    }
  }
}
