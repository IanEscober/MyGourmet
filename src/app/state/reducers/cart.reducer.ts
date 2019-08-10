import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { ICart } from '../../core/models/cart.model';

export interface Cart {
    data: ICart;
    loading: boolean;
}

export interface CartState {
    readonly cart: Cart;
}

export const cartInitialState: Cart = {
    data: {} as ICart,
    loading: false
};

const reducer = createReducer(
    cartInitialState,
    on(
        CartActions.loadCart,
        CartActions.addToCart,
        CartActions.removeFromCart,
        state => ({
            ...state,
            loading: true
        })
    ),

    on(
        CartActions.loadCartSuccess,
        CartActions.addToCartSuccess,
        CartActions.removeFromCartSuccess,
        (state, action) => ({
            ...state,
            data: action.cart,
            loading: false
        })),

    on(CartActions.loadCartFail, state => ({
        ...state,
        data: cartInitialState.data,
        loading: false
    })),

    on(
        CartActions.addToCartFail,
        CartActions.removeFromCartFail,
        state => ({
            ...state,
            loading: false
        }))
);

export function cartReducer(
    state: Cart | undefined,
    action: Action
): Cart {
    return reducer(state, action);
}
