import React, { Component } from 'react'
import { css } from 'react-emotion'
import color from 'tinycolor2'

import TiMinus from 'react-icons/lib/ti/minus'
import TiPlus from 'react-icons/lib/ti/plus'

import { Flex, FlexComponent } from '../grid'
import styled from '../../theme/styled'

interface WrapperProps extends FlexComponent {
  selected?: boolean
  count?: number
  limit?: number
  initialCount?: number
}

const Button = styled<WrapperProps, FlexComponent>(Flex)`
  ${props => {
    const selected = props.selected
    const alpha = selected ? 1 : 0.3
    const label = selected ? props.theme.colors.background : props.theme.colors.action
    const background = color(props.theme.colors.action)
      .setAlpha(alpha)
      .toString()

    return css`
      justify-content: center;
      align-items: center;
      background-color: ${background};
      color: ${label};
      fill: ${label};
    `
  }};
  cursor: pointer;
  width: 42px;
  height: 42px;
  transition: box-shadow 60ms ease-out;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.16);

  &:first-child {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    &:active {
      box-shadow: inset -2px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }
  }
  &:last-child {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    &: active {
      box-shadow: inset 2px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }
  }
`

export interface StepperProps extends WrapperProps {
  onChangeCount: (count: number) => void
}

interface StepperState {
  minusDisable: boolean
  count: number
}

export class Stepper extends Component<StepperProps & FlexComponent, StepperState> {
  constructor(props) {
    super(props)
    this.state = { minusDisable: true, count: this.props.initialCount }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      this.props.onChangeCount(nextState.count)
      return true
    }
    if (this.props !== nextProps) {
      return true
    }
    return false
  }

  handleAddClick = event => {
    event.preventDefault()
    if (this.state.count < this.props.limit) {
      this.setState({ count: this.state.count + 1, minusDisable: false })
    }
  }

  handleMinusClick = event => {
    event.preventDefault()
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  render() {
    const { count } = this.state
    const { limit, selected, ml } = this.props
    return (
      <Flex ml={ml}>
        <Button count={count} onClick={this.handleMinusClick} selected={selected} limit={limit}>
          <TiMinus style={{ opacity: count === 0 ? 0.5 : 1 }} />
        </Button>
        <Button count={count} onClick={this.handleAddClick} selected={selected} limit={limit}>
          <TiPlus style={{ opacity: count >= limit ? 0.5 : 1 }} />
        </Button>
      </Flex>
    )
  }
}
