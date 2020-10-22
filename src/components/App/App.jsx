import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from 'redux/actions'
import PropTypes from 'prop-types'
import { Login } from 'pages/login'
import { Catalog } from 'pages/catalog'
import { Preloader } from 'components/Preloader/Preloader'
import './App.scss'

const App = ({ fetchUser, isAuth, user, loading }) => {
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

App.propTypes = {
  fetchUser: PropTypes.func,
  isAuth: PropTypes.bool,
  user: PropTypes.object,
  loading: PropTypes.bool,
}
App.defaultProps = {
  fetchUser: () => {},
  isAuth: false,
  user: {},
  loading: true,
}

const mapStateToProps = ({ login: { isAuth, user }, app: { loading } }) => {
  return { isAuth, user, loading }
}

export default connect(mapStateToProps, { fetchUser })(App)
