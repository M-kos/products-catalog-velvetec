import { APP_ACTION_CONST, LOGIN_ACTION_CONST } from 'redux/constants'

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
}

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ACTION_CONST.LOADING_FALSE:
    case LOGIN_ACTION_CONST.LOADING_TRUE:
      return { ...state, loading: payload }
    case LOGIN_ACTION_CONST.LOGIN:
    case LOGIN_ACTION_CONST.LOGOUT:
    case LOGIN_ACTION_CONST.FETCH_USER:
      return { ...state, user: payload.user, isAuth: payload.isAuth }
    case APP_ACTION_CONST.ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
