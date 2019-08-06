import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { CartState } from '../reducers/cart.reducer';
import { cartQuery } from '../selectors/cart.selector';
import { ICartItem } from 'src/app/core/models/cart-item.model';

@Injectable()
export class CartFacade {
    cart$ = this.store.select(cartQuery.getCartData);
    isLoading$ = this.store.select(cartQuery.getCartLoading);

    constructor(private store: Store<CartState>) { }

    loadCart() {
        this.store.dispatch(CartActions.loadCart());
    }

    addToCart(itemId: number, itemName: string, quantity: number) {
        const cartItem = { itemId, itemName, quantity } as ICartItem;
        this.store.dispatch(CartActions.addToCart({ cartItem }))
    }

    removeFromCart(itemId: number, itemName: string, quantity: number) {
        const cartItem = { itemId, itemName, quantity } as ICartItem;
        this.store.dispatch(CartActions.removeFromCart({ cartItem }))
    }
}