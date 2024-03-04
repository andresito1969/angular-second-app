import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})

export class ShoppingListComponent{
    ingredientList: Ingredient[] = [
        new Ingredient('gambas', 12),
        new Ingredient('Pescado', 2),
        new Ingredient('Arroz', 500)
    ];

    addNewIngredient = (ingredient: Ingredient) => this.ingredientList.push(ingredient);
}