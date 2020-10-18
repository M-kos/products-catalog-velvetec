import { APP_ACTION_CONST, LOGIN_ACTION_CONST } from 'redux/constants'

const initialState = {}

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ACTION_CONST.LOGIN:
    case LOGIN_ACTION_CONST.LOGOUT:
    case LOGIN_ACTION_CONST.FETCH_USER:
      return { ...state, user: payload }
    case APP_ACTION_CONST.ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
