export function getOrder(orderId) {
  return {
    type: 'GET_ORDER',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Order/${orderId}`,
      },
    },
  }
}

interface Order {
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

export function makeOrder(order: Order, token) {
  return {
    type: 'MAKE_ORDER',
    payload: {
      request: {
        method: 'post',
        url: `/api/v1/Order`,
        data: order,
        headers: { Authorization: `Bearer ${token}` },
      },
    },
  }
}

export function getCustomerByOrder() {
  return {
    type: 'GET_CUSTOMER_BY_ORDER',
    payload: {
      request: {
        method: 'get',
        url: `/api/v1/Order/customer`,
      },
    },
  }
}
