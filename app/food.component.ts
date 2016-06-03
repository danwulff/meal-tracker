import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
    template:`
    <div>
      <p>----------</p>
      <h3>
        <strong>{{ food.name }}</strong>:
      </h3>
      <p>
        Details: {{ food.details }}<br>Calories: {{ food.calories }}
      </p>
      <p>----------</p>
    </div>
    `
})

export class FoodComponent {
  public food: Food;
}
