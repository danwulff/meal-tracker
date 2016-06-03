import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { HealthyFoodPipe } from './healthy-food.pipe';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [HealthyFoodPipe],
  directives: [FoodComponent, NewFoodComponent],
  template: `
  <div class="row">
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All Foods</option>
      <option value="healthy">Show healthy foods</option>
      <option value="unhealthy">Show unhealthy foods</option>
    </select>
  </div>
  <div class="row">
    <food-display *ngFor="#currentFood of foodList | health:filterLevel"
    [food]="currentFood">
    </food-display>
  </div>
  <div class="row">
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public filterLevel: String = "all";

  onChange(filterOption): void {
    this.filterLevel = filterOption;
  }

  createFood(newFood: Food): void {
    this.foodList.push(newFood);
  }
}
