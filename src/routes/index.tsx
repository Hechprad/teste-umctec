import React from 'react'
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom'

import Activities from 'pages/Activities'
import NotFound from 'pages/NotFound'

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/activities" />} />
    <Route path="/activities" exact component={Activities} />
    <Route path="/activity/:id" exact component={Activities} />
    <Route path="/accounts" exact component={NotFound} />
    <Route path="/users" exact component={NotFound} />
    <Route path="/performance" exact component={NotFound} />
    <Route path="/dashboard" exact component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
