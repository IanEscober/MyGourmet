import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Menus } from '../reducers';

const getMenus = createFeatureSelector<Menus>('menus');
export const getMenusData = createSelector(getMenus, (state: Menus) => state.data);
export const getMenusLoading = createSelector(getMenus, (state: Menus) => state.loading);

export const menusQuery = {
    getMenusData,
    getMenusLoading
};
