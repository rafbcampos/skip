import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import filter from 'lodash/filter'

import { searchProductsByStoreId } from '../actions/store'
import RouterProps from '../types/router'
import { ProductCard } from '../components/ui/ProductCard'

export interface Product {
  id: number
  storeId: number
  name: string
  description: string
  price: number
}

interface StoreProps extends RouterProps {
  searchProductsByStoreId: Function
  products: Product[]
}

class Store extends Component<StoreProps> {
  state = { items: {} }
  componentDidMount() {
    const { match: { params: { id } } } = this.props
    this.props.searchProductsByStoreId(id)
  }

  setItems = ({ productId, productPrice, count }) => {
    this.setState({ items: { ...this.state.items, productId: { productId, productPrice, count } } })
  }

  getTotal = () => {
    const { items } = this.state
    let total = 0
    map(items, ticket => (total = total + ticket.price * ticket.count))
    return total
  }

  getItemTotalPrice = id => {
    const { items } = this.state
    const item = filter(items, item => item.id === id)
    if (item.lenght > 0) {
      return item[0].price * item[0].count
    }
    return 0
  }

  render() {
    console.log(this.props)
    const { products } = this.props
    return (
      <Fragment>
        {products &&
          products.map(product => (
            <ProductCard
              product={product}
              totalPrice={this.getItemTotalPrice(product.id)}
              onChangeCount={count =>
                this.setItems({ productId: product.id, productPrice: product.price, count })
              }
            />
          ))}
      </Fragment>
    )
  }
}

const ConectedStore = connect(({ products }) => ({ products: products.products }), {
  searchProductsByStoreId,
})(Store)

export default ConectedStore
