import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './ProductsItem.scss'

const ProductsItem = ({
  product,
  categories,
  updateHandler,
  deleteHandler,
}) => {
  const onAction = (e) => {
    switch (e?.currentTarget?.name) {
      case 'update':
        updateHandler(product)
        break
      case 'delete':
        deleteHandler(product)
        break
      default:
        break
    }
  }

  const category =
    categories.find((item) => item.id === product.category) || categories[0]

  return (
    <li className="collection-item flex-row flex-ai-center">
      <p className="product-item product-item-name pr-3">
        {product.productName}
      </p>
      <p className="product-item product-item-price pr-3">
        {product.productPrice + '$'}
      </p>
      <p className="product-item product-item-date pr-3">
        {product.expirationDate}
      </p>
      <p className="product-item product-item-category pr-3">{category.name}</p>
      <div className="flex-fill"></div>
      <button
        className="btn-floating btn-small z-depth-0 green darken-1 mr-2"
        name="update"
        onClick={onAction}
      >
        <i className="material-icons">create</i>
      </button>
      <button
        className="btn-floating btn-small z-depth-0 red darken-4"
        name="delete"
        onClick={onAction}
      >
        <i className="material-icons">delete</i>
      </button>
    </li>
  )
}

ProductsItem.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string,
    productPrice: PropTypes.string,
    expirationDate: PropTypes.string,
    category: PropTypes.string,
  }),
  categories: PropTypes.array,
  updateHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
}
ProductsItem.defaultProps = {
  product: {},
  categories: [],
  updateHandler: () => {},
  deleteHandler: () => {},
}

const mapStateToProps = ({ app: { categories } }) => {
  return { categories }
}

const productsItemConnect = connect(mapStateToProps, null)(ProductsItem)

export { productsItemConnect as ProductsItem }
