import * as firebase from 'firebase'
import { LOGIN_ACTION_CONST, APP_ACTION_CONST } from 'redux/constants'
import { showLoader, hideLoader } from 'redux/actions'

export const loginShowLoader = () => ({
  type: LOGIN_ACTION_CONST.LOADING_TRUE,
  payload: true,
})

export const loginHideLoader = () => ({
  type: LOGIN_ACTION_CONST.LOADING_FALSE,
  payload: false,
})

export const loginSuccess = (user) => ({
  type: LOGIN_ACTION_CONST.LOGIN,
  payload: {
    user,
    isAuth: true,
  },
})

export const loginFail = (type) => ({
  type: type || LOGIN_ACTION_CONST.LOGOUT,
  payload: {
    user: null,
    isAuth: false,
  },
})

export const loginError = (error) => ({
  type: APP_ACTION_CONST.ERROR,
  payload: error,
})

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(loginShowLoader())

      await firebase.auth().signOut()

      dispatch(loginFail())
    } catch (error) {
      dispatch(loginError(error))
    } finally {
      dispatch(loginHideLoader())
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginShowLoader())

      await firebase.auth().signInWithEmailAndPassword(email, password)

      dispatch(loginSuccess(firebase.auth().currentUser))
    } catch (error) {
      dispatch(loginError(error))
    } finally {
      dispatch(loginHideLoader())
    }
  }
}

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch(showLoader())

    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(loginSuccess(currentUser))
      } else {
        dispatch(loginFail(LOGIN_ACTION_CONST.FETCH_USER))
      }
      dispatch(hideLoader())
    })
  } catch (error) {
    dispatch(loginError(error))
    dispatch(hideLoader())
  }
}
