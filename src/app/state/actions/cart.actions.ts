import { createAction, props } from '@ngrx/store';
import { ICartItem } from '../../core/models/cart-item.model';
import { ICart } from 'src/app/core/models/cart.model';

export const loadCart = createAction(
    '[cart] LOAD_CART'
);

export const loadCartSuccess = createAction(
    '[cart] LOAD_CART_SUCCESS',
    props<{ cart: ICart }>()
);

export const loadCartFail = createAction(
    '[cart] LOAD_CART_FAIL',
    props<{ error: Error }>()
);

export const addToCart = createAction(
    '[cart] ADD_TO_CART',
    props<{ cartItem: ICartItem }>()
);

export const addToCartSuccess = createAction(
    '[cart] ADD_TO_CART_SUCCESS',
    props<{ cart: ICart }>()
);

export const addToCartFail = createAction(
    '[cart] ADD_TO_CART_FAIL',
    props<{ error: Error }>()
);

export const removeFromCart = createAction(
    '[cart] REMOVE_FROM_CART',
    props<{ id: number }>()
);

export const removeFromCartSuccess = createAction(
    '[cart] REMOVE_FROM_CART_SUCCESS',
    props<{ cart: ICart }>()
);

export const removeFromCartFail = createAction(
    '[cart] REMOVE_FROM_CART_FAIL',
    props<{ error: Error }>()
);
