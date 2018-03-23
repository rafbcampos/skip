import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getStores } from '../actions/store'
import { Flex } from '../components/grid'
import styled from '../theme/styled'
import Cuisines from '../components/ui/Cuisines'
import { StoreCard } from '../components/ui/StoreCard'

const StoresWrapper = styled(Flex)`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  min-height: calc(100vh - 80px);
  width: 100vw;
`

export interface Store {
  id: number
  name: string
  address: string
  cousineId: number
}

interface StoresProps {
  getStores: Function
  store: Store[]
}

class Stores extends Component<StoresProps> {
  state = { filteredStores: null }

  componentDidMount() {
    this.props.getStores()
  }

  setCusine = cuisine => {
    if (cuisine === 0) {
      this.setState({ filteredStores: null })
    } else {
      const filteredStores = this.props.store
        ? this.props.store.filter(store => store.cousineId === cuisine)
        : null
      this.setState({ filteredStores })
    }
  }

  render() {
    const { store } = this.props
    const { filteredStores } = this.state

    const storeToRender = filteredStores ? filteredStores : store

    return (
      <Fragment>
        <Cuisines setCusine={this.setCusine} />
        <StoresWrapper>
          {storeToRender && storeToRender.map(store => <StoreCard key={store.id} store={store} />)}
        </StoresWrapper>
      </Fragment>
    )
  }
}

export default connect(({ store }) => ({ store: store.stores }), { getStores })(Stores)
