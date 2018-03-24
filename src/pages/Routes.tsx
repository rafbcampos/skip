import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from '../components/ui/Nav'
import ReplaceRouteIfAuth from '../hoc/ReplaceRouteIfAuth'
import StoreList from './StoreList'
import Store from './Store'
import Cart from './Cart'
import MyOrders from './MyOrders'
import Order from './Order'

const Routes = () => (
  <Router>
    <Fragment>
      <Nav />
      <Route
        exact
        path="/"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <Home {...props} {...routeProps} />}
          />
        )}
      />
      <Route
        path="/stores"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <StoreList {...props} {...routeProps} />}
          />
        )}
      />
      <Route
        path="/store/:id"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <Store {...props} {...routeProps} />}
          />
        )}
      />
      <Route
        path="/cart"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <Cart {...props} {...routeProps} />}
          />
        )}
      />
      <Route
        path="/orders"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <MyOrders {...props} {...routeProps} />}
          />
        )}
      />
      <Route
        path="/order/:id"
        render={routeProps => (
          <ReplaceRouteIfAuth
            {...routeProps}
            child={props => <Order {...props} {...routeProps} />}
          />
        )}
      />
    </Fragment>
  </Router>
)

export default Routes
