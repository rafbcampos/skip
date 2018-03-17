import React from 'react'
import styled from '../../theme/styled'

interface ButtonProps extends React.HTMLProps<'button'> {
  large?: boolean
  small?: boolean
  primary?: boolean
  borderRadius?: number
  backgroundColor?: string
  secondary?: boolean
  color?: string
  padding?: string
  border?: DOMStringMap
}

const Button = styled<ButtonProps, 'button'>('button')`
  cursor: pointer;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.16);
  font-family: ${props => props.theme.font};
  padding: ${props => {
    if (props.padding) return props.padding
    if (props.large) return props.theme.buttons.size.large.padding
    if (props.small) return props.theme.buttons.size.small.padding
    return props.theme.buttons.size.medium.padding
  }};
  border-radius: ${props => {
    if (props.borderRadius) return props.borderRadius
    if (props.large) return props.theme.buttons.size.large.borderRadius
    if (props.small) return props.theme.buttons.size.small.borderRadius
    return props.theme.buttons.size.medium.borderRadius
  }};
  font-size: ${props => {
    if (props.large) return props.theme.buttons.size.large.fontSize
    if (props.small) return props.theme.buttons.size.small.fontSize
    return props.theme.buttons.size.medium.fontSize
  }};
  color: ${props => {
    if (props.color) return props.color
    if (props.primary) return props.theme.buttons.style.primary.color
    if (props.secondary) return props.theme.buttons.style.secondary.color
    return props.theme.buttons.style.regular.color
  }};
  background: ${props => {
    if (props.backgroundColor) return props.backgroundColor
    if (props.primary) return props.theme.buttons.style.primary.background
    if (props.secondary) return props.theme.buttons.style.secondary.background
    return props.theme.buttons.style.regular.background
  }};
  border: ${props => {
    if (props.border) return props.border
    if (props.primary) return props.theme.buttons.style.primary.border
    if (props.secondary) return props.theme.buttons.style.secondary.border
    return props.theme.buttons.style.regular.border
  }};
  text-align: center;
  font-weight: bolder;
  transition: all 120ms ease;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transition: all 60ms ease-out;
    transform: scale(0.95);
  }
`

export default Button
