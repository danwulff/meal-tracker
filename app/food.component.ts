import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
    template:`
    <div>
      <h3>
        {{ food.name }}:<br>Details: {{ food.details }}<br>Calories: {{ food.calories }}
      </h3>
    </div>
    `
})

export class FoodComponent {
  public food: Food;
}
