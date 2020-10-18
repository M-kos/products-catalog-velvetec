import React, { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  return (
    <div className="row">
      <div className="col s4 offset-s4">
        <div className="card">
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
            <button className="btn purple lighten-3" onClick={() => {}}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
