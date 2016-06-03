import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <h3 class="selected">Edit Food Details:</h3>
  <input [(ngModel)]="food.name" class="input-lg" style="width: 50%"/>
  <input [(ngModel)]="food.details" class="input-lg" style="width: 50%"/>
  <input [(ngModel)]="food.calories" class="input-lg" style="width: 50%"/>
  `
})

export class EditFoodComponent {
}
