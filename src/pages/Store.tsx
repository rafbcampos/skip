import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import filter from 'lodash/filter'

import Button from '../components/ui/Button'
import RouterProps from '../types/router'
import styled from '../theme/styled'
import { Flex } from '../components/grid'
import { H4, H2 } from '../components/typography'
import { getProducts } from '../actions/product'
import { setCart } from '../actions/cart'
import { ProductCard } from '../components/ui/ProductCard'
import { Store as StoreInterface, Product, CartItem } from '../types/api'

interface StoreProps extends RouterProps {
  getProducts: Function
  setCart: Function
  products: Product[]
  stores: StoreInterface[]
  cart: CartItem[]
}

interface StoreState {
  cart?: CartItem[]
}

const GoChartBtn = styled(Button)`
  height: 50px;
  margin-left: 30px;
`

const StoreHeader = styled(Flex)`
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5%;
`

const Total = styled(H4)`
  margin-bottom: 0;
  line-height: 2.5em;
`

class Store extends Component<StoreProps, StoreState> {
  constructor(props) {
    super(props)
    let cart = this.parseCartFromStore()
    this.state = { cart }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  setItems = (product: Product, count: number) => {
    const { cart } = this.state
    const totalPrice: number = product.price * count

    this.setState({
      cart: {
        ...cart,
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

  getCount = id => {
    const { cart } = this.state
    if (cart && cart[id] && cart[id].count) {
      return cart[id].count
    }
    return 0
  }

  parseCartFromStore = () => {
    const cartFromStore = this.props.cart
    let cart = null
    if (cartFromStore) {
      const items = cartFromStore.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {})
      cart = items
    }
    return cart
  }

  getCountFromStore = id => {
    const cart = this.parseCartFromStore()

    if (cart && cart[id] && cart[id].count) {
      return cart[id].count
    }
    return 0
  }

  getTotalPrice = id => {
    const { cart } = this.state
    if (cart && cart[id] && cart[id].totalPrice) {
      return cart[id].totalPrice
    }
    return 0
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
    const total = this.getTotal()

    return (
      <Fragment>
        <StoreHeader>
          <H2 mb={0}>{store && store.name}</H2>
          <Flex justify="center">
            {total > 0 && <Total mb={0}>Total ${total}</Total>}
            {filter(cart, item => item.count > 0).length > 0 && (
              <GoChartBtn onClick={this.fillCart}>Go to Chart!</GoChartBtn>
            )}
          </Flex>
        </StoreHeader>
        {productsToRender &&
          productsToRender.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              initialCount={this.getCountFromStore(product.id)}
              count={this.getCount(product.id)}
              totalPrice={this.getTotalPrice(product.id)}
              onChangeCount={count => {
                this.setItems(product, count)
              }}
            />
          ))}
      </Fragment>
    )
  }
}

const ConectedStore = connect(
  ({ products, store, order, cart }) => ({
    products: products.products,
    stores: store.stores,
    order: order.orders,
    cart: cart.cart,
  }),
  {
    getProducts,
    setCart,
  },
)(Store)

export default ConectedStore
