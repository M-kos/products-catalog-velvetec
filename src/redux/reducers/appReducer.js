import { APP_ACTION_CONST } from 'redux/constants'

const initialState = {
  loading: true,
  categories: null,
  products: null,
  error: null,
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTION_CONST.LOADING_FALSE:
      return { ...state, loading: false }
    case APP_ACTION_CONST.LOADING_TRUE:
      return { ...state, loading: true }

    case APP_ACTION_CONST.ERROR:
      return { ...state, error: payload }

    case APP_ACTION_CONST.FETCH_CATEGORIES:
      return { ...state, categories: payload }
    case APP_ACTION_CONST.FETCH_PRODUCTS:
      return { ...state, products: payload }
    default:
      return state
  }
}
