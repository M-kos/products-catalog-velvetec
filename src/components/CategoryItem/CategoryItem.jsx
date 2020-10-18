import React from 'react'

import './CategoryItem.scss'

export const CategoryItem = () => {
  return (
    <li className="collection-item">
      <p>Title</p>
      <i className="material-icons">create</i>
      <i className="material-icons">delete</i>
    </li>
  )
}
