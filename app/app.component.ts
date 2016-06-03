import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker!</h1>
    <food-display [food] = "food">
    </food-display>
  </div>
  `
})

export class AppComponent {
  public food: Food;
  constructor() {
    this.food = new Food("Banana", "They're tropical yo", 100);
  }
}
