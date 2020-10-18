import { APP_ACTION_CONST } from 'redux/constants'

const initialState = {
  loading: false,
  categories: null,
  products: [],
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

    case APP_ACTION_CONST.ADD_CATEGORY_ITEM:
    case APP_ACTION_CONST.UPDATE_CATEGORY_ITEM:
    case APP_ACTION_CONST.REMOVE_CATEGORY_ITEM:
    case APP_ACTION_CONST.FETCH_PRODUCTS:
    case APP_ACTION_CONST.ADD_PRODUCT_ITEM:
    case APP_ACTION_CONST.UPDATE_PRODUCT_ITEM:
    case APP_ACTION_CONST.REMOVE_PRODUCT_ITEM:

    default:
      return state
  }
}
