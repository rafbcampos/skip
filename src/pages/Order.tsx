import React from 'react'
import filter from 'lodash/filter'
import moment from 'moment'
import { connect } from 'react-redux'

import { H4, H3 } from '../components/typography'
import styled from '../theme/styled'
import { Flex } from '../components/grid'

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Card = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 5px 15px #ccc;
  width: 100%;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 0;
  }
`

const Order = props => {
  const { match: { params: { id } } } = props
  const order = filter(props.orders, order => order.id == id)[0]

  return (
    <Wrapper>
      {order && (
        <Card>
          <H3>Order {order.id}</H3>
          {order.orderItems.map(item => (
            <H4 key={item.id}>
              {item.quantity} x {item.product.name} - ${item.total}
            </H4>
          ))}
          <br />
          <H4>{moment(order.date).fromNow()}</H4>
          <H4>Status: {order.status}</H4>
          <H4>Total: {order.total}</H4>
        </Card>
      )}
    </Wrapper>
  )
}

const ConnectOrder = connect(({ order }) => ({ orders: order.order }))(Order)

export default ConnectOrder
