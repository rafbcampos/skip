import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'

import { H4 } from '../components/typography'
// import { searchProductsByStoreId } from '../actions/store'
import { getProducts } from '../actions/product'
import RouterProps from '../types/router'
import { ProductCard } from '../components/ui/ProductCard'
import { Store as StoreInterface } from './StoreList'

export interface Product {
  id: number
  storeId: number
  name: string
  description: string
  price: number
}

interface StoreProps extends RouterProps {
  searchProductsByStoreId: Function
  getProducts: Function
  products: Product[]
  stores: StoreInterface[]
}

class Store extends Component<StoreProps> {
  state = { cart: null }

  componentDidMount() {
    // const { match: { params: { id } } } = this.props
    // this.props.searchProductsByStoreId(id)
    this.props.getProducts()
  }

  setItems = ({ productId, productPrice, productName, count }) => {
    console.log('called')
    const { cart } = this.state
    const totalPrice = productPrice * count
    this.setState({
      cart: {
        ...cart,
        [productId]: {
          productId,
          productPrice,
          productName,
          count,
          totalPrice,
        },
      },
    })
  }

  getTotal = () => {
    const { cart } = this.state
    let total = 0
    map(cart, item => (total = total + item.productPrice * item.count))
    return total
  }

  render() {
    console.log(this.state)

    const { products } = this.props
    const { match: { params: { id } } } = this.props
    const store: StoreInterface = this.props.stores.filter(store => {
      return store.id == id
    })[0]
    const productsToRender = products.filter(product => product.storeId == id)
    const { cart } = this.state

    return (
      <Fragment>
        <H4>{store && store.name}</H4>
        {productsToRender &&
          productsToRender.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              totalPrice={
                cart && cart.cart && cart.cart[product.id] ? cart.cart[product.id].totalPrice : 'N'
              }
              onChangeCount={count => {
                this.setItems({
                  productId: product.id,
                  productPrice: product.price,
                  productName: product.name,
                  count,
                })
              }}
            />
          ))}
        <H4>{this.getTotal()}</H4>
      </Fragment>
    )
  }
}

const ConectedStore = connect(
  ({ products, store }) => ({ products: products.products, stores: store.stores }),
  {
    // searchProductsByStoreId,
    getProducts,
  },
)(Store)

export default ConectedStore
