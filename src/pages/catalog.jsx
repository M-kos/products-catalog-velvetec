import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, fetchData } from 'redux/actions'
import { Preloader } from 'components/Preloader/Preloader'
import { CategoryList } from 'components/CategoryList/CategoryList'

const Catalog = ({ logout, loading, fetchData }) => {
  useEffect(() => {
    fetchData()
  }, [fetchData])

  const logoutHandler = () => {
    logout()
  }

  return (
    <>
      {loading && <Preloader />}
      <nav>
        <div className="flex flex-ai-center snav-wrapper deep-orange lighten-2 pl-3 pr-3">
          <ul>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
          </ul>
          <div className="flex-fill" />
          <NavLink
            className="btn deep-orange lighten-3"
            to="/"
            onClick={logoutHandler}
          >
            Logout
          </NavLink>
        </div>
      </nav>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <Switch>
            <Route path="/categories" exact>
              <CategoryList />
            </Route>
            <Route path="/products" exact>
              <div>Hello</div>
            </Route>
            <Redirect to="/products" />
          </Switch>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ app: { loading } }) => {
  return { loading }
}

const catalogConnect = connect(mapStateToProps, { logout, fetchData })(Catalog)

export { catalogConnect as Catalog }
