import React from 'react'
import { Link } from 'react-router-dom'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import { connect } from 'react-redux'

import styled from '../theme/styled'
import { H4, H3 } from '../components/typography'
import { Flex } from '../components/grid'

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

const OdersList = styled(Flex)`
  flex-direction: column;
`

const Card = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 5px 15px #ccc;
  width: 100%;
  max-height: 150px;
  h4 {
    margin-bottom: 0;
  }
`

const MyOrders = ({ order, store }) => {
  console.log(order)
  return (
    <Wrapper w={1}>
      <H3 mt="20px">My Orders</H3>
      {order && !isEmpty(order) ? (
        <OdersList w={1 / 2}>
          {map(order, order => (
            <Link to={`/order/${order.id}`} key={order.id}>
              <Card>
                <H4>{moment(order.date).fromNow()}</H4>
                <H4>{store.filter(store => store.id === order.storeId)[0].name}</H4>
                <H4>{order.status}</H4>
              </Card>
            </Link>
          ))}
        </OdersList>
      ) : (
        <H4>You don't have any orders yeat</H4>
      )}
    </Wrapper>
  )
}

const ConnectMyOrders = connect(({ order, store }) => ({
  order: order.order,
  store: store.stores,
}))(MyOrders)

export default ConnectMyOrders
