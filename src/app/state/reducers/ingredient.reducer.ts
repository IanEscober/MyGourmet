import { Action, createReducer, on } from '@ngrx/store';
import * as IngredientActions from '../actions/ingredient.action';
import { IIngredientItem } from '../../core/models/ingredient-item.model';

export interface Ingredient {
    data: IIngredientItem;
    loading: boolean;
}

export interface IngredientState {
    readonly ingredient: Ingredient;
}

export const ingredientInitialState: Ingredient = {
    data: {} as IIngredientItem,
    loading: false
};

const reducer = createReducer(
    ingredientInitialState,
    on(
        IngredientActions.loadIngredient,
        state => ({
            ...state,
            loading: true
        })
    ),
    on(
        IngredientActions.loadIngredientSuccess,
        (state, action) => ({
            ...state,
            data: action.ingredient,
            loading: false
        })
    ),
    on(
        IngredientActions.loadIngredientFail,
        state => ({
            ...state,
            data: ingredientInitialState.data,
            loading: false
        })
    ),
);

export function ingredientReducer(
    state: Ingredient | undefined,
    action: Action
): Ingredient {
    return reducer(state, action);
}
