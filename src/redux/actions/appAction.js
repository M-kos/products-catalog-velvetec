import * as firebase from 'firebase'
import { APP_ACTION_CONST } from 'redux/constants'

export const showLoader = () => ({ type: APP_ACTION_CONST.LOADING_TRUE })
export const hideLoader = () => ({ type: APP_ACTION_CONST.LOADING_FALSE })

export const setCategories = (type, categories) => ({
  type,
  payload: categories,
})

export const appError = (error) => ({
  type: APP_ACTION_CONST.ERROR,
  payload: error,
})

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(showLoader())

    firebase
      .database()
      .ref('/categories')
      .on('value', (snapshot) => {
        const categories = []

        snapshot.forEach((snap) => {
          categories.push(snap.val())
        })

        dispatch(setCategories(APP_ACTION_CONST.FETCH_CATEGORIES, categories))
        dispatch(hideLoader())
      })
  } catch (error) {
    dispatch(appError(error))
    dispatch(hideLoader())
  }
}
