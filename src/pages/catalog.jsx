import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from 'redux/actions'
import { Preloader } from 'components/Preloader/Preloader'
import { CategoryList } from 'components/CategoryList/CategoryList'

const Catalog = ({ logout, loading }) => {
  const logoutHandler = () => {
    logout()
  }

  return (
    <>
      {loading && <Preloader />}
      <NavLink
        className="btn deep-orange lighten-3"
        to="/"
        onClick={logoutHandler}
      >
        Logout
      </NavLink>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <CategoryList />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ login: { loading } }) => {
  return { loading }
}

const catalogConnect = connect(mapStateToProps, { logout })(Catalog)

export { catalogConnect as Catalog }
