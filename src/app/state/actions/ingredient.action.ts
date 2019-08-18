import { createAction, props } from '@ngrx/store';
import { IIngredientItem } from '../../core/models/ingredient-item.model';

export const loadIngredient = createAction(
    '[ingredient] LOAD_INGREDIENT',
    props<{ id: number }>()
);

export const loadIngredientSuccess = createAction(
    '[ingredient] LOAD_INGREDIENT_SUCCESS',
    props<{ ingredient: IIngredientItem }>()
);

export const loadIngredientFail = createAction(
    '[ingredient] LOAD_INGREDIENT_FAIL',
    props<{ error: Error }>()
);
