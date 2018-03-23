import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Nav } from './Nav'

storiesOf('Token', module).add('Token', () => (
  <Fragment>
    <Nav token="token" />
    <br />
    <Nav />
  </Fragment>
))
