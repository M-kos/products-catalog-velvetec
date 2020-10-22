import { APP_ACTION_CONST } from 'redux/constants'
import { fetchCategories, fetchProducts } from 'redux/actions'

export const showLoader = () => ({ type: APP_ACTION_CONST.LOADING_TRUE })
export const hideLoader = () => ({ type: APP_ACTION_CONST.LOADING_FALSE })

export const appError = (error) => {
  if (window.M) {
    window.M.toast({ html: error.message || error.error })
  }
  return {
    type: APP_ACTION_CONST.ERROR,
    payload: error,
  }
}

export const fetchData = () => (dispatch) => {
  dispatch(fetchCategories())
  dispatch(fetchProducts())
}
