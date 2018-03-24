import React from 'react'

import { Flex } from '../grid'
import { H4, Paragraph } from '../typography'
import styled from '../../theme/styled'
import { Stepper } from './Stepper'
import { Product } from '../../pages/Store'

const Wrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Card = styled(Flex)`
  align-items: center;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 5px 15px #ccc;
  width: 90%;
  min-height: 271px;
`

const Thumb = styled.img`
  width: 100px;
  height: 100px;
`

const NameAndDescription = styled(Flex)`
  flex-direction: column;
`

export const ProductCard = props => {
  const product: Product = props.product
  return (
    <Wrapper w={1}>
      <Card>
        <Thumb src="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg" />
        <NameAndDescription>
          <H4>{product.name}</H4>
          <Paragraph>{product.description}</Paragraph>
        </NameAndDescription>
        <H4>{product.price}</H4>
        <H4>{props.totalPrice}</H4>
        <Stepper limit={10} onChangeCount={props.onChangeCount} />
      </Card>
    </Wrapper>
  )
}
