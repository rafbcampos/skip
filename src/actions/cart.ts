export interface CartItem {
  id: number
  storeId: number
  name: string
  description: string
  price: number
  count: number
  totalPrice: number
}

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
