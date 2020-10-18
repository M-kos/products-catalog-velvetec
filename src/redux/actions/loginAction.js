import * as firebase from 'firebase'
import { LOGIN_ACTION_CONST, APP_ACTION_CONST } from 'redux/constants'

export const loginSuccess = () => ({
  type: LOGIN_ACTION_CONST.LOGIN,
  payload: firebase.auth().currentUser,
})

export const loginError = (error) => ({
  type: APP_ACTION_CONST.ERROR,
  payload: error,
})

export const logout = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut()
      dispatch({
        type: LOGIN_ACTION_CONST.LOGOUT,
        payload: null,
      })
    } catch (error) {
      dispatch(loginError(error))
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      dispatch(loginSuccess())
    } catch (error) {
      dispatch(loginError(error))
    }
  }
}

export const fetchUser = () => async (dispatch) => {
  try {
    await firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        localStorage.setItem('isAuthenticated', true)
        dispatch({
          type: LOGIN_ACTION_CONST.FETCH_USER,
          user: currentUser,
        })
      } else {
        localStorage.removeItem('isAuthenticated')
        dispatch({
          type: 'FETCH_USER',
          user: null,
        })
      }
    })
  } catch (error) {
    dispatch(loginError(error))
  }
}
