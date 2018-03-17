import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from '../components/ui/Nav'
import PrivateRoute from '../hoc/PrivateRoutes'
import { About } from './About'
import { Dashboard } from './Dashboard'

const Routes = () => (
  <Router>
    <Fragment>
      <Nav />

      <Route
        exact
        path="/"
        render={props => <PrivateRoute {...props} child={props => <Home {...props} />} />}
      />
      <Route path="/about" component={About} />
      <Route
        path="/dashboard"
        crender={props => <PrivateRoute {...props} child={props => <Dashboard {...props} />} />}
      />
    </Fragment>
  </Router>
)

export default Routes
