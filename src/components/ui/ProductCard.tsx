import React from 'react'
import { size } from 'styled-system'

import { Flex, ResponsiveProp } from '../grid'
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
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 5px 15px #ccc;
  width: 90%;
  max-height: 150px;
`

interface ThumbProps {
  size?: ResponsiveProp
}

const Thumb = styled<ThumbProps, 'img'>('img')`
  border-radius: 6px;
  ${size};
`

const Column = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
  margin-left: 20px;
`

export const ProductCard = props => {
  const product: Product = props.product
  return (
    <Wrapper w={1}>
      <Card>
        <Thumb
          size={['100px']}
          src="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg"
        />
        <Column w={1}>
          <Flex justify="space-between" w={1}>
            <Flex>
              <H4>
                {props.count !== 0 && <span>{props.count} x </span>}
                {product.name}
              </H4>
              <H4 ml="10px">${product.price}</H4>
            </Flex>
            <H4>${props.totalPrice}</H4>
          </Flex>
          <Flex justify="space-between" w={1}>
            <Paragraph>{product.description}</Paragraph>
            <Stepper limit={10} onChangeCount={props.onChangeCount} />
          </Flex>
        </Column>
      </Card>
    </Wrapper>
  )
}
