import { Component } from 'react'
import { connect } from 'react-redux'

import RouterProps from '../types/router'

interface PrivateRouteProps extends RouterProps {
  child: Function
  token: string
}

class PrivateRoute extends Component<PrivateRouteProps> {
  componentDidMount() {
    const { token } = this.props
    if (token) {
      this.props.history.push('/dashboard')
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return this.props.child()
  }
}

const ConnectedPrivateRoute = connect(({ auth }) => ({
  token: auth.token,
}))(PrivateRoute)

export default ConnectedPrivateRoute
