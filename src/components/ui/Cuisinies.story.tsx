import React from 'react'
import { storiesOf } from '@storybook/react'

import { Cuisines } from './Cuisines'

const cuisines = [
  {
    id: 1,
    name: 'Pizza',
  },
  {
    id: 2,
    name: 'Burgers',
  },
  {
    id: 3,
    name: 'Tacos',
  },
  {
    id: 4,
    name: 'Vegetarian',
  },
]

const getCousines = () => console.log('fetch_cuisines')

const setCousine = cuisine => console.log(cuisine)

storiesOf('UI', module).add('Cuisine', () => (
  <Cuisines cuisines={cuisines} setCusine={setCousine} getCousines={getCousines} />
))
