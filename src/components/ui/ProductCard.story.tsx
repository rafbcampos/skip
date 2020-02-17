import React from 'react'
import { storiesOf } from '@storybook/react'

import { ProductCard } from './ProductCard'

const product = {
  id: 0,
  storeId: 1,
  name: 'Awesome Burger',
  description: '200g burger with blue cheese',
  price: 20,
}

const totalPrice = 100

const onChangeCount = count => console.log(count)

storiesOf('UI', module).add('ProductCard', () => (
  <ProductCard product={product} totalPrice={totalPrice} onChangeCount={onChangeCount} />
))
