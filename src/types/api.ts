export interface Product {
  id: number
  storeId: number
  name: string
  description: string
  price: number
}

export interface Order {
  id: number
  date: Date
  customerId: number
  deliveryAddress: string
  contact: string
  storeId: number
  orderItems: [
    {
      id: number
      orderId: number
      productId: number
      product: {
        id: number
        storeId: number
        name: string
        description: string
        price: number
      }
      price: number
      quantity: number
      total: number
    }
  ]
  total: number
  status: string // 'WAITING'
  lastUpdate: Date
}

export interface Customer {
  id: number
  email: string
  name: string
  address: string
  creation: string
  password: string
}

export interface Login {
  email: string
  password: string
}

export interface CartItem {
  id: number
  storeId: number
  name: string
  description: string
  price: number
  count: number
  totalPrice: number
}

export interface Cuisine {
  id: number
  name: string
}

export interface Store {
  id: number
  address: string
  cousineId: number
  name: string
}
