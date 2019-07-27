import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../core/services/ingredients.service';
import { IIngredientItem } from 'src/app/core/models/ingredient-item.model';

@Component({
  selector: 'app-ingredients-detail',
  templateUrl: './ingredients-detail.component.html',
  styleUrls: ['./ingredients-detail.component.css']
})
export class IngredientsDetailComponent implements OnInit {
  ingredient: IIngredientItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.ingredient = data.ingredient);
  }
}
