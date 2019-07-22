import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../ingredients.service';
import { IIngredientItem } from 'src/app/core/models/ingredientItem.model';

@Component({
  selector: 'app-ingredients-detail',
  templateUrl: './ingredients-detail.component.html',
  styleUrls: ['./ingredients-detail.component.css']
})
export class IngredientsDetailComponent implements OnInit {
  ingredient: IIngredientItem;

  constructor(private route: ActivatedRoute, private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const ingredientId = +params.get('id');
        this.getIngredient(ingredientId);
      });
  }

  getIngredient(id: number) {
    this.ingredientsService.getIngredient(id)
      .subscribe(ingredient => this.ingredient = ingredient);
  }
}
