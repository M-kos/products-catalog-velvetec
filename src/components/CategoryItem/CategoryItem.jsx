import React from 'react'
import { connect } from 'react-redux'
import { removeCategoryItem } from 'redux/actions'

import './CategoryItem.scss'

const CategoryItem = ({ category, removeCategoryItem }) => {
  const deleteHandler = () => {
    removeCategoryItem(category.id)
  }

  return (
    <li className="collection-item">
      <p>{category.name}</p>
      <i className="material-icons">create</i>
      <i className="material-icons" onClick={deleteHandler}>
        delete
      </i>
    </li>
  )
}

const mapDispatchToProps = {
  removeCategoryItem,
}

const categoryItemConnect = connect(null, mapDispatchToProps)(CategoryItem)

export { categoryItemConnect as CategoryItem }
