import React from 'react'
import PropTypes from 'prop-types'

export const CategoryItem = ({ category, updateHandler, deleteHandler }) => {
  const onAction = (e) => {
    switch (e?.currentTarget?.name) {
      case 'update':
        updateHandler(category)
        break
      case 'delete':
        deleteHandler(category)
        break
      default:
        break
    }
  }

  return (
    <li className="collection-item flex-row flex-ai-center">
      <p>{category.name}</p>
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

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
  updateHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
}
CategoryItem.defaultProps = {
  category: {},
  updateHandler: () => {},
  deleteHandler: () => {},
}
