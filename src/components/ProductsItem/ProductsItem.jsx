import React from 'react'
import { connect } from 'react-redux'

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
      <div>
        <p>{product.productName}</p>
        <p>{product.productPrice}</p>
      </div>
      <div>
        <p>{product.expirationDate}</p>
        <p>{category.name}</p>
      </div>
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

const mapStateToProps = ({ app: { categories } }) => {
  return { categories }
}

const productsItemConnect = connect(mapStateToProps, null)(ProductsItem)

export { productsItemConnect as ProductsItem }
