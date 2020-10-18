import { APP_ACTION_CONST } from 'redux/constants'

const initialState = {
  loading: false,
}

export const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case APP_ACTION_CONST.LOADING_FALSE:
      return { ...state, loading: false }
    case APP_ACTION_CONST.LOADING_TRUE:
      return { ...state, loading: true }
    default:
      return state
  }
}
