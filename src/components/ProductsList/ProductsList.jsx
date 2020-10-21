import React, { useState } from 'react'
import { connect } from 'react-redux'
import { productOperationHandler } from 'redux/actions'
import { OPERATION } from 'redux/constants'

import { ProductsItem } from 'components/ProductsItem/ProductsItem'
import { ProductForm } from 'components/ProductForm/ProductForm'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'
import { Modal } from 'components/Modal/Modal'

import './ProductsList.scss'

const ProductsList = ({ products, loading, productOperationHandler }) => {
  const [showModal, setShowModal] = useState(false)

  const modalHandler = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (e?.target?.name === 'confirm') {
      productOperationHandler() /*//////*/
    }

    setShowModal((prev) => !prev)
  }

  const addHandler = () => {
    setShowModal(true)
  }

  const updateHandler = (payload) => {
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
          category={product}
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
      <Modal show={showModal} actionHandler={modalHandler} title="Add Product">
        <ProductForm />
      </Modal>
    </>
  )
}

const mapStateToProps = ({ app: { products, loading } }) => {
  return { products, loading }
}

const mapDispatchToProps = {
  productOperationHandler,
}

const productsListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)

export { productsListConnect as ProductsList }
