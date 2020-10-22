import React, { useState } from 'react'
import { connect } from 'react-redux'
import { productOperationHandler } from 'redux/actions'
import { OPERATION } from 'redux/constants'
import PropTypes from 'prop-types'

import { ProductsItem } from 'components/ProductsItem/ProductsItem'
import { ProductForm } from 'components/ProductForm/ProductForm'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'
import { Modal } from 'components/Modal/Modal'

import './ProductsList.scss'

const initData = {
  productName: '',
  productPrice: '',
  expirationDate: '',
  category: '',
}

const ProductsList = ({
  products,
  categories,
  loading,
  productOperationHandler,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [operation, setOperation] = useState('')
  const [productData, setProductData] = useState(initData)
  const [error, setError] = useState({
    productName: false,
    productPrice: false,
    expirationDate: false,
    category: false,
  })

  const validation = () => {
    const { productName, productPrice, expirationDate, category } = productData

    const price = parseFloat(productPrice)

    const errors = {}

    if (
      !productName ||
      !productName.trim() ||
      productName.length < 5 ||
      productName.length > 40
    ) {
      errors.productName = true
    }

    if (!price || isNaN(price) || price <= 0) {
      errors.productPrice = true
    }

    if (!expirationDate || new Date(expirationDate).getTime() < Date.now()) {
      errors.expirationDate = true
    }

    if (!category || !Object.keys(category).length) {
      errors.category = true
    }

    setError({ ...error, ...errors })

    return Object.keys(errors).some((v) => errors[v])
  }

  const modalHandler = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (e?.target?.name === 'confirm') {
      if (validation()) {
        return
      }
      productOperationHandler(operation, productData)
    }

    setProductData(initData)
    setShowModal((prev) => !prev)
  }

  const addHandler = () => {
    setOperation(OPERATION.ADD)
    setShowModal(true)
  }

  const updateHandler = (payload) => {
    setProductData(payload)
    setOperation(OPERATION.UPDATE)
    setShowModal(true)
  }

  const deleteHandler = ({ id }) => {
    productOperationHandler(OPERATION.REMOVE, { id })
  }

  let list = <li className="collection-item">Empty</li>

  if (products && products.length) {
    list = products.map((product) => {
      return (
        <ProductsItem
          key={product.id}
          product={product}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      )
    })
  }

  return (
    <>
      <ul className="collection with-header">
        <li className="product-list-header collection-header">
          <h5 className="mt-1 mb-1">Products</h5>
          <button
            className="btn-floating waves-effect waves-light deep-orange"
            onClick={addHandler}
          >
            <i className="material-icons">add</i>
          </button>
        </li>
        {loading ? (
          <div className="product-list-preloader-container">
            <CircularPreloader />
          </div>
        ) : (
          list
        )}
      </ul>
      <Modal
        show={showModal}
        actionHandler={modalHandler}
        title="Add Product"
        style={{ minWidth: '600px' }}
      >
        <ProductForm
          selectOptions={categories}
          fields={productData}
          error={error}
          setError={setError}
          setFields={setProductData}
        />
      </Modal>
    </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.array,
  loading: PropTypes.bool,
  productOperationHandler: PropTypes.func,
}
ProductsList.defaultProps = {
  products: [],
  categories: [],
  loading: true,
  productOperationHandler: () => {},
}

const mapStateToProps = ({ app: { products, categories, loading } }) => {
  return { categories, products, loading }
}

const mapDispatchToProps = {
  productOperationHandler,
}

const productsListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)

export { productsListConnect as ProductsList }
