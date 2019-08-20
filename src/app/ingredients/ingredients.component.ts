import { Component, OnInit, OnDestroy } from '@angular/core';
import { IIngredientItem } from '../core/models/ingredient-item.model';
import { IPage } from '../core/models/page.model';
import { Subscription } from 'rxjs';
import { IngredientsFacade } from '../state/facades';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients: IIngredientItem[];
  page: IPage;
  isLoading = false;
  subSink = new Array<Subscription>();

  constructor(private ingredientsFacade: IngredientsFacade) {
    // Initial Pager values
    this.page = {
      currentPage: 1,
      perPageItems: 5
    };
  }

  ngOnInit() {
    this.subSink.push(this.ingredientsFacade.ingredients$
      .subscribe(({ items, count }) => {
        this.ingredients = items;
        this.page = {
          currentPage: this.page.currentPage,
          perPageItems: this.page.perPageItems,
          shownItems: this.page.currentPage * this.page.perPageItems,
          totalItems: count,
          totalPages: Math.ceil(count / this.page.perPageItems)
        };
      }));

    this.subSink.push(this.ingredientsFacade.isLoading$
      .subscribe(isLoading => this.isLoading = isLoading));

    this.ingredientsFacade.loadIngredients(this.page.currentPage, this.page.perPageItems);
  }

  ngOnDestroy() {
    this.subSink.forEach(sub => sub.unsubscribe());
  }

  onChangePage(index: number) {
    this.page.currentPage = index;
    this.ingredientsFacade.loadIngredients(index, this.page.perPageItems);
  }
}
