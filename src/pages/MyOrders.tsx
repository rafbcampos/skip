import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import { connect } from 'react-redux'
import { H4 } from '../components/typography'
import { Flex } from '../components/grid'

const MyOrders = ({ orders }) => {
  return (
    <Fragment>
      <H4>My Orders</H4>
      {orders ? (
        <Flex>
          {map(orders.order, order => (
            <Link to={`/order/${order.id}`} key={order.id}>
              <Flex justify="space-between" w={1 / 2}>
                <H4>{order.date}</H4>
                <H4>{order.status}</H4>
              </Flex>
            </Link>
          ))}
        </Flex>
      ) : (
        <H4>You don't have any orders yeat</H4>
      )}
    </Fragment>
  )
}

const ConnectMyOrders = connect(({ order }) => ({ orders: order.order }))(MyOrders)

export default ConnectMyOrders
