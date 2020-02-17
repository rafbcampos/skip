import { Component } from 'react'
import { connect } from 'react-redux'

import RouterProps from '../types/router'

interface ReplaceRouteIfAuthProps extends RouterProps {
  child: Function
  token: string
}

class ReplaceRouteIfAuth extends Component<ReplaceRouteIfAuthProps> {
  componentWillMount() {
    const { match: { path }, token } = this.props
    if (token && path === '/') {
      this.props.history.replace('/stores')
    } else if (!token) {
      this.props.history.replace('/')
    }
  }

  render() {
    return this.props.child()
  }
}

const ConnectedReplaceRouteIfAuth = connect(({ auth }) => ({
  token: auth.token,
}))(ReplaceRouteIfAuth)

export default ConnectedReplaceRouteIfAuth
