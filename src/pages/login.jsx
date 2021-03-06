import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from 'redux/actions'
import { Preloader } from 'components/Preloader/Preloader'

const Login = ({ login, loading }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (window.M) {
      window.M.updateTextFields()
    }
  })

  const changeHandler = (event) => {
    switch (event.target?.name) {
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        throw new Error('Something went wrong...')
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    login(email, password)
  }

  return (
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="card-content">
              <span className="card-title pb-3">Login</span>
              <div className="input-field">
                <input
                  placeholder="Enter your email"
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}
                  value={email}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={password}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="card-action right-align">
              <button className="btn deep-orange lighten-3" type="submit">
                Login
              </button>
            </div>
          </form>
          {loading && <Preloader />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ login: { loading } }) => {
  return { loading }
}

const connectLogin = connect(mapStateToProps, { login })(Login)

export { connectLogin as Login }
