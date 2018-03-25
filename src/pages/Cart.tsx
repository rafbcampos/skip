import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import map from 'lodash/map'

import styled from '../theme/styled'
import { clearCart } from '../actions/cart'
import { makeOrder } from '../actions/order'
import Button from '../components/ui/Button'
import { Flex } from '../components/grid'
import { H4, H3 } from '../components/typography'
import { CartItem } from '../types/api'

interface CartProps {
  makeOrder: Function
  clearCart: Function
  cart: CartItem[]
  token: string
}

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

class Cart extends Component<CartProps> {
  state = { orderSuccess: false }

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

    this.props.makeOrder(order, token).then(res => {
      if (res.type === 'MAKE_ORDER_SUCCESS') {
        this.props.clearCart()
        this.setState({ orderSuccess: true })
      }
    })
  }

  render() {
    const { cart } = this.props
    const { orderSuccess } = this.state
    return (
      <Wrapper w={1}>
        <H3>Cart</H3>
        {cart && cart.length > 0 ? (
          <Fragment>
            {cart.map(item => (
              <Flex key={item.id} justify="space-between" w={1 / 2}>
                <H4>{`${item.count} x ${item.name}`}</H4>
                <H4>{item.totalPrice}</H4>
              </Flex>
            ))}
            <Flex justify="space-between" w={1 / 2}>
              <H4>Total</H4>
              <H4>{this.getTotal()}</H4>
            </Flex>
            <Button onClick={this.makeOrder}>Order</Button>
          </Fragment>
        ) : (
          <H4>
            You cart is empty, <Link to="/stores">let's chose something?</Link>
          </H4>
        )}
        {orderSuccess && <H4>Order sended with success!</H4>}
      </Wrapper>
    )
  }
}

const ConnectedCart = connect(({ cart, auth }) => ({ cart: cart.cart, token: auth.token }), {
  makeOrder,
  clearCart,
})(Cart)

export default ConnectedCart
