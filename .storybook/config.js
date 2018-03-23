import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { StorybookWrapper } from './StorybookWrapper'

import baseTheme from '../src/theme'
const themes = [baseTheme]

function loadStories() {
  const req = require.context('../src', true, /\.story\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

const WrapperDecorator = storyFn => <StorybookWrapper themes={themes}>{storyFn()}</StorybookWrapper>
addDecorator(WrapperDecorator)

configure(loadStories, module)
