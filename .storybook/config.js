import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { StorybookWrapper } from 'ef-common/stories/StorybookWrapper'

import landingTheme from 'ef-landing/theme/landing'
import lightTheme from 'ef-landing/theme/light'
import darkTheme from 'ef-landing/theme/dark'
const themes = [landingTheme, lightTheme, darkTheme]

function loadStories() {
  const req = require.context('../src', true, /\.story\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

const WrapperDecorator = storyFn => <StorybookWrapper themes={themes}>{storyFn()}</StorybookWrapper>
addDecorator(WrapperDecorator)

configure(loadStories, module)
