import React from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import Home from 'pages/Home'

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
)

export default Routes
