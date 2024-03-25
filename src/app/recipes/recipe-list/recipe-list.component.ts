import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]= [
    new Recipe('Test recipe', 'This is test desc', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg'),
    new Recipe('Test recipe', 'This is test desc', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg')
  ];
}
