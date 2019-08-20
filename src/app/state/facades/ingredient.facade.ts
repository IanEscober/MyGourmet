import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as IngredientActions from '../actions/ingredient.action';
import { IngredientState } from '../reducers';
import { ingredientQuery } from '../selectors';

@Injectable()
export class IngredientFacade {
    ingredient$ = this.store.select(ingredientQuery.getIngredientData);
    isLoading$ = this.store.select(ingredientQuery.getIngredientLoading);

    constructor(private store: Store<IngredientState>) { }

    loadIngredient(id: number) {
        this.store.dispatch(IngredientActions.loadIngredient({ id }));
    }
}
