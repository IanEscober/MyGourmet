import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as IngredientsActions from '../actions/ingredients.action';
import { IngredientsState } from '../reducers/ingredients.reducer';
import { ingredientsQuery } from '../selectors/ingredients.selector';

@Injectable()
export class IngredientsFacade {
    ingredients$ = this.store.select(ingredientsQuery.getIngredientsData);
    isLoading$ = this.store.select(ingredientsQuery.getIngredientsLoading);

    constructor(private store: Store<IngredientsState>) { }

    loadIngredients(index: number, take: number) {
        this.store.dispatch(IngredientsActions.loadIngredients({ index, take }));
    }
}