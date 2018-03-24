import React, { Fragment } from 'react'
import filter from 'lodash/filter'
import { connect } from 'react-redux'
import { H4 } from '../components/typography'

const Order = props => {
  const { match: { params: { id } } } = props
  const order = filter(props.orders.order, order => order.id == id)[0]

  return (
    <Fragment>
      {order && (
        <Fragment>
          <H4>Order {order.id}</H4>
          {order.orderItems.map(item => (
            <H4 key={item.id}>
              {item.quantity} x {item.product.name} - ${item.total}
            </H4>
          ))}
        </Fragment>
      )}
    </Fragment>
  )
}

const ConnectOrder = connect(({ order }) => ({ orders: order.order }))(Order)

export default ConnectOrder
