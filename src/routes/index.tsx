import React from 'react'
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom'

import Activities from 'pages/Activities'

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/activities" />} />
    <Route path="/activities" exact component={Activities} />
  </Switch>
)

export default Routes
