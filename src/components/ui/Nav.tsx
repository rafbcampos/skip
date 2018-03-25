import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FaSignOut from 'react-icons/lib/fa/sign-out'

import { logOut } from '../../actions/auth'
import { H4, H2 } from '../typography'
import styled from '../../theme/styled'
import { Flex } from '../grid'

const NavWrapper = styled(Flex)`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.nav};
  a {
    margin-left: 20px;
  }
  h4,
  h2 {
    color: ${props => props.theme.colors.heading};
  }
`

export const Nav = props => (
  <NavWrapper>
    <H2 mb={0}>SKIP</H2>
    <Flex>
      <Link to="/">
        <H4 mb={0}>{props.token ? 'Stores' : 'Login/Register'}</H4>
      </Link>
      <Link to="/cart">
        <H4 mb={0}>Cart</H4>
      </Link>
      <Link to="/orders">
        <H4 mb={0}>My Orders</H4>
      </Link>
      {props.token && (
        <FaSignOut style={{ marginLeft: '20px' }} size="20px" onClick={props.logOut} color="#fff" />
      )}
    </Flex>
  </NavWrapper>
)

export default connect(
  ({ auth }) => ({
    token: auth.token,
  }),
  { logOut },
)(Nav)
