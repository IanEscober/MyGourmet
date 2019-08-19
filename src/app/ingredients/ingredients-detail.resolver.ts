import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { IngredientFacade } from '../state/facades/ingredient.facade';

@Injectable()
export class IngredientsDetailResolver implements Resolve<any>  {
  constructor(
    private ingredientFacade: IngredientFacade
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    this.ingredientFacade.loadIngredient(route.params.id);
  }
}
