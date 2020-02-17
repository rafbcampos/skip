import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Nav } from './Nav'

storiesOf('UI', module).add('Nav', () => (
  <Fragment>
    <Nav token="token" />
    <br />
    <Nav />
  </Fragment>
))
