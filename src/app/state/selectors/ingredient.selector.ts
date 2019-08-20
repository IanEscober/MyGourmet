import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Ingredient } from '../reducers';

const getIngredient = createFeatureSelector<Ingredient>('ingredient');
export const getIngredientData = createSelector(getIngredient, (state: Ingredient) => state.data);
export const getIngredientLoading = createSelector(getIngredient, (state: Ingredient) => state.loading);

export const ingredientQuery = {
    getIngredientData,
    getIngredientLoading
};
