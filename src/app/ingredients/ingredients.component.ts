import { Component, OnInit } from '@angular/core';

import { IngredientsService } from './ingredients.service';
import { IIngredientItem } from '../shared/models/IngredientItem.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: IIngredientItem[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientsService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

}
