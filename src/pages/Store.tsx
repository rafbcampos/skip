import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import filter from 'lodash/filter'

import Button from '../components/ui/Button'
import RouterProps from '../types/router'
import { H4 } from '../components/typography'
import { getProducts } from '../actions/product'
import { setCart } from '../actions/cart'
import { ProductCard } from '../components/ui/ProductCard'
import { Store as StoreInterface, Product } from '../types/api'

interface StoreProps extends RouterProps {
  getProducts: Function
  setCart: Function
  products: Product[]
  stores: StoreInterface[]
}

class Store extends Component<StoreProps> {
  state = { cart: null }

  componentDidMount() {
    this.props.getProducts()
  }

  setItems = (product: Product, count: number) => {
    const totalPrice: number = product.price * count

    this.setState({
      cart: {
        ...this.state.cart,
        [product.id]: {
          ...product,
          count,
          totalPrice,
        },
      },
    })
  }

  getTotal = () => {
    const { cart } = this.state
    let total = 0
    map(cart, item => (total = total + item.price * item.count))
    return total
  }

  fillCart = () => {
    const { cart } = this.state
    const items = filter(cart, item => item.count > 0)

    this.props.setCart(items)
    this.props.history.push('/cart')
  }

  render() {
    const { products } = this.props
    const { cart } = this.state
    const { match: { params: { id } } } = this.props

    const store: StoreInterface = this.props.stores.filter(store => {
      return store.id == id
    })[0]
    const productsToRender = products.filter(product => product.storeId == id)

    return (
      <Fragment>
        <H4>{store && store.name}</H4>
        {productsToRender &&
          productsToRender.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              count={(cart && cart[product.id] && cart[product.id].count) || 0}
              totalPrice={(cart && cart[product.id] && cart[product.id].totalPrice) || 0}
              onChangeCount={count => {
                this.setItems(product, count)
              }}
            />
          ))}
        <H4>{this.getTotal()}</H4>
        {filter(cart, item => item.count > 0).length > 0 && (
          <Button onClick={this.fillCart}>Go to Chart!</Button>
        )}
      </Fragment>
    )
  }
}

const ConectedStore = connect(
  ({ products, store, order }) => ({
    products: products.products,
    stores: store.stores,
    order: order.orders,
  }),
  {
    getProducts,
    setCart,
  },
)(Store)

export default ConectedStore
