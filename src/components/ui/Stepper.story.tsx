import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Stepper } from './Stepper'

storiesOf('UI', module).add('Stepper', () => (
  <Fragment>
    <Stepper count={0} limit={10} onChangeCount={count => console.log(count)} />
  </Fragment>
))
