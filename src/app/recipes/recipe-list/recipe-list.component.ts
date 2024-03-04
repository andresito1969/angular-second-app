import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }

}
