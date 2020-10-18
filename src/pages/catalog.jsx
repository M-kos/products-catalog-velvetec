import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from 'redux/actions'
import { Preloader } from 'components/Preloader/Preloader'

const Catalog = ({ logout, loading }) => {
  const logoutHandler = () => {
    logout()
  }

  return (
    <>
      {loading && <Preloader />}
      <NavLink className="btn purple lighten-3" to="/" onClick={logoutHandler}>
        Logout
      </NavLink>
    </>
  )
}

const mapStateToProps = ({ login: { loading } }) => {
  return { loading }
}

const catalogConnect = connect(mapStateToProps, { logout })(Catalog)

export { catalogConnect as Catalog }
