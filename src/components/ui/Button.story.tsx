import React from 'react'
import { storiesOf } from '@storybook/react'

import styled from '../../theme/styled'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  button {
    margin-bottom: 20px;
  }
`

storiesOf('UI', module).add('Button', () => (
  <Wrapper>
    <Button>Standart</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button large>Large</Button>
    <Button small>Small</Button>
  </Wrapper>
))
