import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Menu } from '../reducers';

const getMenu = createFeatureSelector<Menu>('menu');
export const getMenuData = createSelector(getMenu, (state: Menu) => state.data);
export const getMenuLoading = createSelector(getMenu, (state: Menu) => state.loading);

export const menuQuery = {
    getMenuData,
    getMenuLoading
};
