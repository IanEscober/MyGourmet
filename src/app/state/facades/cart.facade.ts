import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { CartState } from '../reducers';
import { cartQuery } from '../selectors';
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
        this.store.dispatch(CartActions.addToCart({ cartItem }));
    }

    removeFromCart(id: number) {
        this.store.dispatch(CartActions.removeFromCart({ id }));
    }
}
