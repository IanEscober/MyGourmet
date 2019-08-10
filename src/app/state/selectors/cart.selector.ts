import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cart } from '../reducers/cart.reducer';

const getCart = createFeatureSelector<Cart>('cart');
export const getCartData = createSelector(getCart, (state: Cart) => state.data);
export const getCartLoading = createSelector(getCart, (state: Cart) => state.loading);

export const cartQuery = {
    getCartData,
    getCartLoading
};
