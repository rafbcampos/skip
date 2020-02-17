import { Order } from '../types/api'

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
