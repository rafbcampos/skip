import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStores } from '../actions/store'
import { Flex } from '../components/grid'
import styled from '../theme/styled'
import Cuisines from './Cuisines'

const DashboardWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100vw;
`

interface Store {
  id: number
  name: string
  address: string
  cousineId: number
}

interface DashboardProps {
  getStores: Function
  stores: Store[]
}

class Dashboard extends Component<DashboardProps> {
  state = { cuisine: [] }

  componentDidMount() {
    this.props.getStores()
  }

  setCusine = cuisine => {
    this.setState({ cuisine })
  }

  render() {
    const { stores } = this.props

    return (
      <DashboardWrapper>
        <Cuisines setCusine={this.setCusine} />
        {stores && stores.map(store => <div key={store.id}>{store.name}</div>)}
      </DashboardWrapper>
    )
  }
}

export default connect(({ stores }) => ({ stores: stores.stores }), { getStores })(Dashboard)
