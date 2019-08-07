import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, concatMap, mergeMap } from 'rxjs/operators';
import { RepositoryService } from './repository.service';
import { AuthService } from './auth.service';
import { IUser } from '../models/User.model';
import { ICartItem } from '../models/cart-item.model';
import { ICart } from '../models/cart.model';

@Injectable()
export class CartService {
  private cartsUrl = 'api/carts';
  private user: IUser

  constructor(private repository: RepositoryService, private authService: AuthService) {
    this.authService.user
      .subscribe(user => this.user = user);
  }

  private getCarts(): Observable<ICart[]> {
    return this.repository.get<ICart[]>(this.cartsUrl);
  }

  private addCart(cart: ICart): Observable<ICart> {
    return this.repository.post<ICart>(this.cartsUrl, cart);
  }

  private updateCart(cart: ICart): Observable<ICart> {
    return this.repository.put<ICart>(this.cartsUrl, cart);
  }

  private deleteCart(): Observable<{}> {
    const deleteUrl = `${this.cartsUrl}/${this.user.id}`;
    return this.repository.delete(deleteUrl);
  }

  loadCart(): Observable<ICart> {
    return this.getCarts()
      .pipe(
        map(response => {
          const cart = response.find(carts => carts.id == this.user.id);
          if (cart) {
            return cart;
          } else {
            return null;
          }
        })
      );
  }

  addToCart(cartItem: ICartItem): Observable<ICart> {
    return this.loadCart()
      .pipe(
        concatMap(cart => {
          if (cart) {
            cartItem.id = cart.cartItems.length + 1;
            cart.cartItems.push(cartItem);
            return this.updateCart(cart)
              .pipe(
                mergeMap(() => this.loadCart())
              );
          } else {
            cartItem.id = 1;
            const newCart: ICart = {
              id: this.user.id,
              cartItems: [cartItem]
            }
            return this.addCart(newCart);
          }
        })
      );
  }

  removeFromCart(id: number): Observable<ICart> {
    return this.loadCart()
      .pipe(
        concatMap(cart => {
          if (cart) {
            const filteredItems =  cart.cartItems.filter(item => item.id !== id);
            cart.cartItems = filteredItems;
            return this.updateCart(cart)
            .pipe(
              mergeMap(() => this.loadCart())
            );
          }
        })
      );
  }

  dropCart(): Observable<{}> {
    return this.deleteCart();
  }
}
