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

const Nav = props => (
  <NavWrapper>
    <H2 mb={0}>SKIP</H2>
    <Flex>
      <Link to="/">
        <H4 mb={0}>Home</H4>
      </Link>
      <Link to="/about">
        <H4 mb={0}>About</H4>
      </Link>
      {props.token && <FaSignOut onClick={props.logOut} color="#fff" />}
    </Flex>
  </NavWrapper>
)

export default connect(
  ({ auth }) => ({
    token: auth.token,
  }),
  { logOut },
)(Nav)
