import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoreCard } from './StoreCard'

const store = {
  id: 2,
  address: '3596 Commercial St, Vancouver, BC V5N 4E9, Canada',
  cousineId: 3,
  name: 'Skip Cafe',
}

storiesOf('UI', module).add('StoreCard', () => <StoreCard store={store} />)
