import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList"
    [food]="currentFood">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];

  constructor() {
  }

}
