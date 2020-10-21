import { FirebaseDb } from 'request/FirebaseDb'
import { APP_ACTION_CONST, OPERATION } from 'redux/constants'
import { showLoader, hideLoader, appError } from './appAction'

const ProductDb = new FirebaseDb('/products')

export const setProducts = (type, products) => ({
  type,
  payload: products,
})

export const fetchProducts = () => (dispatch) => {
  try {
    dispatch(showLoader())

    ProductDb.subscribeDb((snapshot) => {
      const products = []

      snapshot.forEach((snap) => {
        products.push({ ...snap.val(), id: snap.key })
      })

      dispatch(setProducts(APP_ACTION_CONST.FETCH_PRODUCTS, products))
      dispatch(hideLoader())
    })
  } catch (error) {
    dispatch(appError(error))
    dispatch(hideLoader())
  }
}

export const addProductItem = (payload) => async (dispatch) => {
  try {
    await ProductDb.addItem(payload)
  } catch (error) {
    dispatch(appError(error))
  }
}

export const removeProductItem = ({ id }) => async (dispatch) => {
  try {
    await ProductDb.removeItem(id)
  } catch (error) {
    dispatch(appError(error))
  }
}

export const updateProductItem = ({ id, ...payload }) => async (dispatch) => {
  try {
    await ProductDb.updateItem(id, payload)
  } catch (error) {
    dispatch(appError(error))
  }
}

export const productOperationHandler = (operation, ...rest) => (dispatch) => {
  switch (operation) {
    case OPERATION.ADD:
      dispatch(addProductItem(...rest))
      break
    case OPERATION.REMOVE:
      dispatch(removeProductItem(...rest))
      break
    case OPERATION.UPDATE:
      dispatch(updateProductItem(...rest))
      break
    default:
      break
  }
}
