import { Component, OnInit, OnDestroy } from '@angular/core';
import { IIngredientItem } from 'src/app/core/models/ingredient-item.model';
import { CartFacade } from 'src/app/state/facades/cart.facade';
import { Location } from '@angular/common';
import { IngredientFacade } from 'src/app/state/facades/ingredient.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-detail',
  templateUrl: './ingredients-detail.component.html',
  styleUrls: ['./ingredients-detail.component.css']
})
export class IngredientsDetailComponent implements OnInit, OnDestroy {
  ingredient: IIngredientItem;
  isLoading = false;
  ingredientSubscription: Subscription;
  isLoadingSubscription: Subscription;

  constructor(
    private location: Location,
    private cartFacade: CartFacade,
    private ingredientFacade: IngredientFacade
  ) { }

  ngOnInit() {
    this.ingredientSubscription = this.ingredientFacade.ingredient$
      .subscribe(ingredient => this.ingredient = ingredient);
    this.isLoadingSubscription = this.ingredientFacade.isLoading$
      .subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
    this.isLoadingSubscription.unsubscribe();
  }

  onAddToCart() {
    this.cartFacade.addToCart(this.ingredient.id, this.ingredient.name, 1);
    this.location.back();
  }
}
