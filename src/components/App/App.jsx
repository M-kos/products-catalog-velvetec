import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from 'redux/actions/loginAction'
import { Login } from 'pages/login'
import { Catalog } from 'pages/catalog'
import { Preloader } from 'components/Preloader/Preloader'
import './App.scss'

function App({ fetchUser, isAuth, user, loading }) {
  useLayoutEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (loading && !user) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <div className="App">
        {isAuth ? (
          <Catalog />
        ) : (
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = ({ login: { isAuth, user }, app: { loading } }) => {
  return { isAuth, user, loading }
}

export default connect(mapStateToProps, { fetchUser })(App)
