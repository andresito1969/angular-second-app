import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  imgUrl: string = "https://imag.bonviveur.com/ceviche-de-camaron.jpg";
  imgUrl2: string = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg";
  recipeList: Recipe[] = [
    new Recipe('Ceviche', 'Ecuatoriano, limón, Gambas ...', this.imgUrl),
    new Recipe('Encebollado', 'Pescado, gambas, cebolla', this.imgUrl2)
  ];

  @Output() currentRecipe = new EventEmitter<Recipe>();

  recipeElem = (recipe: Recipe) => {
    this.currentRecipe.emit(recipe);
  };
}
