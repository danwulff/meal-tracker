import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template:`
  <form name="newFoodForm">
    <h3>Add Food:</h3>
    <input placeholder="Name" class="input-lg" style="width: 50%" #newName /><br>
    <input placeholder="Details" class="input-lg" style="width: 50%" #newDetails /><br>
    <input placeholder="Calories" class="input-lg" style="width: 50%" #newCalories /><br>
    <button (click)="addFood(newName, newDetails, newCalories)" class="btn-primary btn-lg">Submit</button>
  </form>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var food = new Food(newName.value, newDetails.value, parseInt(newCalories.value));

    this.onSubmitNewFood.emit(food);

    //clear forms
    newName.value= "";
    newDetails.value= "";
    newCalories.value= "";
  }
}
