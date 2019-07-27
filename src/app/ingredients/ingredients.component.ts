import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../core/services/ingredients.service';
import { IIngredientItem } from '../core/models/ingredient-item.model';
import { IPage } from '../core/models/page.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: IIngredientItem[];
  page: IPage;
  isFetching: boolean = false;

  constructor(private ingredientsService: IngredientsService) { 
    //Initial Pager values
    this.page = {
      currentPage: 1,
      perPageItems: 5
    }
  }

  ngOnInit() {
    this.getIngredients(this.page.currentPage, this.page.perPageItems);
  }

  getIngredients(index: number, take: number) {
    this.isFetching = true;
    this.ingredientsService.getIngredients(index, take)
      .subscribe(ingredients => {
        this.ingredients = ingredients.items;
        this.page = {
          currentPage: index,
          perPageItems: take,
          shownItems: index * take,
          totalItems: ingredients.count,
          totalPages: Math.ceil(ingredients.count / take)
        }
        this.isFetching = false;
      });
  }

  onChangePage(index: number) {
    this.getIngredients(index, this.page.perPageItems);
  }

}
