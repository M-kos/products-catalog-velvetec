import { FirebaseDb } from 'request/FirebaseDb'
import { APP_ACTION_CONST, OPERATION } from 'redux/constants'
import { appError, showLoader, hideLoader } from './appAction'

const CategoryDb = new FirebaseDb('/categories')

export const setCategories = (type, categories) => ({
  type,
  payload: categories,
})

export const fetchCategories = () => (dispatch) => {
  dispatch(showLoader())

  try {
    CategoryDb.subscribeDb((snapshot) => {
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

export const addCategoryItem = ({ name }) => async (dispatch) => {
  try {
    await CategoryDb.addItem({ name })
  } catch (error) {
    dispatch(appError(error))
  }
}

export const removeCategoryItem = ({ id }) => async (dispatch) => {
  try {
    await CategoryDb.removeItem(id)
  } catch (error) {
    dispatch(appError(error))
  }
}

export const updateCategoryItem = ({ id, name }) => async (dispatch) => {
  try {
    await CategoryDb.updateItem(id, {
      name,
    })
  } catch (error) {
    dispatch(appError(error))
  }
}

export const categoryOperationHandler = (operation, ...rest) => (dispatch) => {
  switch (operation) {
    case OPERATION.ADD:
      dispatch(addCategoryItem(...rest))
      break
    case OPERATION.REMOVE:
      dispatch(removeCategoryItem(...rest))
      break
    case OPERATION.UPDATE:
      dispatch(updateCategoryItem(...rest))
      break
    default:
      break
  }
}
