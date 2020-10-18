import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from 'pages/login'

export const useRoutes = (isAuth) => {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}
