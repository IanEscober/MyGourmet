import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ingredients } from '../reducers/ingredients.reducer';

const getIngredients = createFeatureSelector<Ingredients>('ingredients');
export const getIngredientsData = createSelector(getIngredients, (state: Ingredients) => state.data);
export const getIngredientsLoading = createSelector(getIngredients, (state: Ingredients) => state.loading);

export const ingredientsQuery = {
    getIngredientsData,
    getIngredientsLoading
};
