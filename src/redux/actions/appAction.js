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

export const fetchCategories = () => (dispatch) => {
  try {
    dispatch(showLoader())

    firebase
      .database()
      .ref('/categories')
      .on('value', (snapshot) => {
        const categories = []

        snapshot.forEach((snap) => {
          categories.push({ ...snap.val(), id: snap.key })
        })

        dispatch(setCategories(APP_ACTION_CONST.FETCH_CATEGORIES, categories))
        dispatch(hideLoader())
      })
  } catch (error) {
    dispatch(appError(error))
    dispatch(hideLoader())
  }
}

export const addCategoryItem = (name) => async (dispatch) => {
  try {
    await firebase.database().ref('/categories').push({
      name,
    })
  } catch (error) {
    dispatch(appError(error))
  }
}

export const removeCategoryItem = (id) => async (dispatch) => {
  try {
    await firebase
      .database()
      .ref('/categories/' + id)
      .remove()
  } catch (error) {
    dispatch(appError(error))
  }
}

export const updateCategoryItem = (id, name) => async (dispatch) => {
  try {
    await firebase
      .database()
      .ref('/categories/' + id)
      .update({
        name,
      })
  } catch (error) {
    dispatch(appError(error))
  }
}
