import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { HealthyFoodPipe } from './healthy-food.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  pipes: [HealthyFoodPipe],
  directives: [FoodComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Foods</option>
    <option value="healthy">Show healthy foods</option>
    <option value="unhealthy">Show unhealthy foods</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | health:filterLevel"
    [food]="currentFood">
  </food-display>
  `
})

export class FoodListComponent {
  public filterLevel: String = "all";

  onChange(filterOption): void {
    this.filterLevel = filterOption;
  }
}
