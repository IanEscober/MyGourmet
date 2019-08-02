import { ICartItem } from './cart-item.model';

export interface ICart {
    id: number,
    cartItems: ICartItem[]
}