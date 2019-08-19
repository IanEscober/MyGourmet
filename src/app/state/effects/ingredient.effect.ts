import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IngredientsService } from 'src/app/core/services/ingredients.service';
import * as IngredientAction from '../actions/ingredient.action';
import { concatMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class IngredientEffect {
    constructor(
        private actions$: Actions,
        private ingredientsService: IngredientsService
    ) { }

    loadIngredient = createEffect(() =>
        this.actions$.pipe(
            ofType(IngredientAction.loadIngredient),
            concatMap(({ id }) =>
                this.ingredientsService.getIngredient(id).pipe(
                    map(ingredient => IngredientAction.loadIngredientSuccess({ ingredient })),
                    catchError(error => of(IngredientAction.loadIngredientFail(error)))
                )
            )
        )
    );
}
