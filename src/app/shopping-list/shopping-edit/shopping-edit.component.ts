import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  addIngredient = (name: HTMLInputElement, amount: HTMLInputElement) => {
    this.newIngredient.emit({
      name: name.value, 
      amount: parseInt(amount.value)
    })
  }
}
