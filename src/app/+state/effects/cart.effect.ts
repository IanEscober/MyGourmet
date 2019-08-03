import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from 'src/app/core/services/cart.service';
import * as CartActions from '../actions/cart.actions';
import { concatMap, catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CartEffect {
    constructor(
        private actions$: Actions,
        private cartService: CartService
    ) { }

    loadCart = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.loadCart),
            concatMap(() =>
                this.cartService.loadCart().pipe(
                    map(cart => CartActions.loadCartSuccess({ cart })),
                    catchError(error => of(CartActions.loadCartFail(error)))
                )
            )
        )
    );

    addToCart = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.addToCart),
            exhaustMap(action =>
                this.cartService.addToCart(action.cartItem).pipe(
                    map(cart => CartActions.addToCartSuccess({cart})),
                    catchError(error => of(CartActions.addToCartFail(error)))
                )
            )
        )
    );

    removeFromCart = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.removeFromCart),
            exhaustMap(action =>
                this.cartService.addToCart(action.cartItem).pipe(
                    map(cart => CartActions.removeFromCartSuccess({cart})),
                    catchError(error => of(CartActions.removeFromCartFail(error)))
                )
            )
        )
    );

}