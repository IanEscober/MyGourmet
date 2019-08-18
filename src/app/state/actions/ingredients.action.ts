import { createAction, props } from '@ngrx/store';
import { IIngredientItem } from '../../core/models/ingredient-item.model';

export const loadIngredients = createAction(
    '[ingredients] LOAD_INGREDIENTS',
    props<{ index: number, take: number }>()
);

export const loadIngredientsSuccess = createAction(
    '[ingredients] LOAD_INGREDIENTS_SUCCESS',
    props<{ data: { items: IIngredientItem[], count: number } }>()
);

export const loadIngredientsFail = createAction(
    '[ingredients] LOAD_INGREDIENTS_FAIL',
    props<{ error: Error }>()
);
