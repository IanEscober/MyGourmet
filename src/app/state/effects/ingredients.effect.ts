import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IngredientsService } from 'src/app/core/services/ingredients.service';
import * as IngredientsAction from '../actions/ingredients.action';
import { concatMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class IngredientsEffect {
    constructor(
        private actions$: Actions,
        private ingredientsService: IngredientsService
    ) { }

    loadIngredients = createEffect(() =>
        this.actions$.pipe(
            ofType(IngredientsAction.loadIngredients),
            concatMap(({ index, take }) =>
                this.ingredientsService.getIngredients(index, take).pipe(
                    map(data => IngredientsAction.loadIngredientsSuccess({ data })),
                    catchError(error => of(IngredientsAction.loadIngredientsFail(error)))
                )
            )
        )
    );
}
