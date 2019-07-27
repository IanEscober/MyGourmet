import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IIngredientItem } from '../core/models/ingredient-item.model';
import { IngredientsService } from '../core/services/ingredients.service';

@Injectable()
export class IngredientsDetailResolver implements Resolve<IIngredientItem>  {
  constructor(
    private ingredientssService: IngredientsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IIngredientItem> {
    return this.ingredientssService.getIngredient(route.params['id']);
  }
}
