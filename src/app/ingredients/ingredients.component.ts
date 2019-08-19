import { Component, OnInit, OnDestroy } from '@angular/core';
import { IIngredientItem } from '../core/models/ingredient-item.model';
import { IPage } from '../core/models/page.model';
import { Subscription } from 'rxjs';
import { IngredientsFacade } from '../state/facades/ingredients.facade';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients: IIngredientItem[];
  page: IPage;
  isFetching = false;
  ingredientsSubscription: Subscription;
  isFetchingSubscription: Subscription;

  constructor(private ingredientsFacade: IngredientsFacade) {
    // Initial Pager values
    this.page = {
      currentPage: 1,
      perPageItems: 5
    };
  }

  ngOnInit() {
    this.ingredientsSubscription = this.ingredientsFacade.ingredients$
      .subscribe(({ items, count }) => {
        this.ingredients = items;
        this.page = {
          currentPage: this.page.currentPage,
          perPageItems: this.page.perPageItems,
          shownItems: this.page.currentPage * this.page.perPageItems,
          totalItems: count,
          totalPages: Math.ceil(count / this.page.perPageItems)
        };
      });

    this.isFetchingSubscription = this.ingredientsFacade.isLoading$
      .subscribe(isLoading => this.isFetching = isLoading);

    this.ingredientsFacade.loadIngredients(this.page.currentPage, this.page.perPageItems);
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
    this.isFetchingSubscription.unsubscribe();
  }

  onChangePage(index: number) {
    this.page.currentPage = index;
    this.ingredientsFacade.loadIngredients(index, this.page.perPageItems);
  }
}
