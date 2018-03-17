import React, { Component, Fragment } from 'react'
import { width } from 'styled-system'

import { Flex, ResponsiveProp } from '../components/grid'
import { H3, Small } from '../components/typography'
import color from 'tinycolor2'
import { connect } from 'react-redux'
import FaSignIn from 'react-icons/lib/fa/sign-in'
import FaUserPlus from 'react-icons/lib/fa/user-plus'

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

interface FormProps {
  width: ResponsiveProp
}

const Form = styled<FormProps, 'form'>('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${width};
`

interface HomeProps {
  signUp: Function
  signIn: Function
  error: string
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
        <Form onSubmit={signUpMode ? this.signUp : this.signIn} width={[1, 1 / 2, 1 / 4]}>
          <H3 mt="10px">{signUpMode ? 'SignUp' : 'SignIn'}</H3>

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
          <Small>{this.props.error}</Small>
          <Flex w={1} justify="space-around" mt="20px">
            <Button type="submit">{signUpMode ? 'SignUp' : 'SignIn'}</Button>
            <Button type="button" onClick={this.changeSingMode}>
              {signUpMode ? <FaSignIn /> : <FaUserPlus />}
            </Button>
          </Flex>
        </Form>
      </Flex>
    )
  }
}

const ConectedHome = connect(({ auth }) => ({ error: auth.authError }), { signUp, signIn })(Home)

export default ConectedHome
