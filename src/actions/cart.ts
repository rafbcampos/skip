import { CartItem } from '../types/api'

export function setCart(cart: CartItem[]) {
  return {
    type: 'SET_CART',
    payload: cart,
  }
}

export function clearCart() {
  return {
    type: 'CLEAR_CART',
  }
}
