import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'

import { CartItem, clearCart } from '../actions/cart'
import { makeOrder } from '../actions/order'
import Button from '../components/ui/Button'

interface CartProps {
  makeOrder: Function
  cart: CartItem[]
  token: string
}

class Cart extends Component<CartProps> {
  getTotal = () => {
    const { cart } = this.props
    let total = 0
    map(cart, item => (total = total + item.price * item.count))
    return total
  }

  makeOrder = () => {
    const date = new Date()
    const { token } = this.props
    const orderItems = this.props.cart.map(item => {
      return {
        id: 0,
        orderId: 0,
        productId: item.id,
        product: {
          id: item.id,
          storeId: item.storeId,
          name: item.name,
          description: item.description,
          price: item.price,
        },
        price: item.price,
        quantity: item.count,
        total: item.totalPrice,
      }
    })

    const order = {
      id: 0,
      date: date.toISOString(),
      customerId: 0,
      deliveryAddress: 'address',
      contact: 'contact',
      storeId: this.props.cart[0].storeId,
      orderItems,
      total: this.getTotal(),
      status: 'WAITING',
      lastUpdate: date.toISOString(),
    }

    console.log(JSON.stringify(order, null, 2))

    this.props.makeOrder(order, token)
  }

  render() {
    return (
      <Fragment>
        {JSON.stringify(this.props, null, 2)}
        <Button onClick={this.makeOrder}>Order</Button>
      </Fragment>
    )
  }
}

const ConnectedCart = connect(({ cart, auth }) => ({ cart: cart.cart, token: auth.token }), {
  makeOrder,
  clearCart,
})(Cart)

export default ConnectedCart
