import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    imgUrl: string = "https://imag.bonviveur.com/ceviche-de-camaron.jpg";
    imgUrl2: string = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg";

    private recipeList: Recipe[] = [
        new Recipe('Ceviche', 'Ecuatoriano, limón, Gambas ...', this.imgUrl),
        new Recipe('Encebollado', 'Pescado, gambas, cebolla', this.imgUrl2)
    ];

    getRecipes() {
        return this.recipeList.slice();
    }
}