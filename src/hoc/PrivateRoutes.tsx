import { Component } from 'react'
import { connect } from 'react-redux'

import RouterProps from '../types/router'

interface PrivateRouteProps extends RouterProps {
  render: Function
  token: string
}

class PrivateRoute extends Component<PrivateRouteProps> {
  componentDidMount() {
    const { token } = this.props
    if (token) {
      this.props.history.replace('/dashboard')
    }
  }

  render() {
    return this.props.render()
  }
}

const ConnectedPrivateRoute = connect(({ token }) => {
  token
})(PrivateRoute)

export default ConnectedPrivateRoute
