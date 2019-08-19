import { Action, createReducer, on } from '@ngrx/store';
import * as IngredientsActions from '../actions/ingredients.action';
import { IIngredientItem } from '../../core/models/ingredient-item.model';

export interface Ingredients {
    data: { items: IIngredientItem[], count: number };
    loading: boolean;
}

export interface IngredientsState {
    readonly ingredients: Ingredients;
}

export const ingredientsInitialState: Ingredients = {
    data: {} as { items: IIngredientItem[], count: number },
    loading: false
};

const reducer = createReducer(
    ingredientsInitialState,
    on(
        IngredientsActions.loadIngredients,
        state => ({
            ...state,
            loading: true
        })
    ),
    on(
        IngredientsActions.loadIngredientsSuccess,
        (state, action) => ({
            ...state,
            data: action.data,
            loading: false
        })
    ),
    on(
        IngredientsActions.loadIngredientsFail,
        state => ({
            ...state,
            data: ingredientsInitialState.data,
            loading: false
        })
    ),
);

export function ingredientsReducer(
    state: Ingredients | undefined,
    action: Action
): Ingredients {
    return reducer(state, action);
}
