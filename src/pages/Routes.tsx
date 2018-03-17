import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from '../components/ui/Nav'
import { About } from './About'
import { Dashboard } from './Dashboard'

const Routes = () => (
  <Router>
    <Fragment>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
    </Fragment>
  </Router>
)

export default Routes
