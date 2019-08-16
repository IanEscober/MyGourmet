import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIngredientItem } from 'src/app/core/models/ingredient-item.model';
import { CartFacade } from 'src/app/state/facades/cart.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ingredients-detail',
  templateUrl: './ingredients-detail.component.html',
  styleUrls: ['./ingredients-detail.component.css']
})
export class IngredientsDetailComponent implements OnInit {
  ingredient: IIngredientItem;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private cartFacade: CartFacade
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.ingredient = data.ingredient);
  }

  onAddToCart() {
    this.cartFacade.addToCart(this.ingredient.id, this.ingredient.name, 1);
    this.location.back();
  }
}
