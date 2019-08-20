import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartFacade } from '../state/facades';
import { ICart } from '../core/models/cart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: ICart;
  isLoading: boolean;
  cartSubscription: Subscription;
  isLoadingSubscription: Subscription;

  constructor(private cartFacade: CartFacade) { }

  ngOnInit() {
    this.cartSubscription = this.cartFacade.cart$
      .subscribe(cart => this.cart = cart);
    this.cartSubscription = this.cartFacade.isLoading$
      .subscribe(isLoading => this.isLoading = isLoading);
    this.cartFacade.loadCart();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  onRemoveFromCart(id: number) {
    this.cartFacade.removeFromCart(id);
  }
}
