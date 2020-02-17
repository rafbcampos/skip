import React from 'react'

import { Link } from 'react-router-dom'
import { Flex } from '../grid'
import { H4, Paragraph } from '../typography'
import styled from '../../theme/styled'
import { Store } from '../../types/api'

const Wrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 5px 15px #ccc;
  width: 90%;
  min-height: 271px;
`

const Thumb = styled.img`
  width: 50%;
  height: 50%;
`

export const StoreCard = props => {
  const store: Store = props.store
  return (
    <Wrapper w={[1, 1 / 2, 1 / 3]}>
      <Card to={`/store/${store.id}`}>
        <Thumb src="http://barrieads.ca/wp-content/uploads/2017/06/skip-the-dishes-barrie.png" />
        <H4>{store.name}</H4>
        <Paragraph>{store.address}</Paragraph>
      </Card>
    </Wrapper>
  )
}
