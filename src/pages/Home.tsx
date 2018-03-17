import React, { Component, Fragment } from 'react'

import { Flex } from '../components/grid'
import color from 'tinycolor2'
import { connect } from 'react-redux'
import { signUp, signIn } from '../actions/auth'

import styled from '../theme/styled'
import Button from '../components/ui/Button'

const Input = styled('input')`
  font-family: ${props => props.theme.font};
  font-weight: bold;
  background-color: ${props =>
    color(props.theme.colors.background)
      .setAlpha(0.5)
      .toString()};
  width: 100%;
  margin: 8px 0;
  text-indent: 1em;
  padding: 10px 0;
  border-radius: 3px;
  border: 1px solid lightgray;
`

interface HomeProps {
  signUp: Function
  signIn: Function
}
class Home extends Component<HomeProps> {
  state = { signUpMode: true, email: '', password: '', name: '', address: '' }

  changeSingMode = () => this.setState({ signUpMode: !this.state.signUpMode })

  signIn = e => {
    e.preventDefault()
    const { email, password } = this.state
    const login = {
      email,
      password,
    }

    this.props.signIn(login)
  }

  signUp = e => {
    e.preventDefault()
    const { email, name, address, password } = this.state
    const customer = {
      id: 0,
      email,
      name,
      address,
      creation: new Date(),
      password,
    }

    this.props.signUp(customer)
  }

  render() {
    const { signUpMode, email, password, name, address } = this.state

    return (
      <Flex w={1} justify="center" align="center">
        <Button onClick={this.changeSingMode}>
          {signUpMode ? "I'm a old friend!" : "I'm new here!"}
        </Button>
        <form onSubmit={signUpMode ? this.signUp : this.signIn}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          {signUpMode && (
            <Fragment>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={e => this.setState({ address: e.target.value })}
              />
            </Fragment>
          )}
          <Button>{signUpMode ? 'SignUp' : 'SignIn'}</Button>
        </form>
      </Flex>
    )
  }
}

const ConectedHome = connect(null, { signUp, signIn })(Home)

export default ConectedHome
