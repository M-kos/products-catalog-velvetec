import React from 'react'

import './CategoryList.scss'

export const CategoryList = () => {
  return (
    <ul className="collection with-header">
      <li className="category-list-header collection-header">
        <h5 className="mt-1 mb-1">Category</h5>
        <button className="btn-floating waves-effect waves-light deep-orange">
          <i className="material-icons">add</i>
        </button>
      </li>
      <li className="collection-item">Alvin</li>
      <li className="collection-item">Alvin</li>
      <li className="collection-item">Alvin</li>
      <li className="collection-item">Alvin</li>
    </ul>
  )
}
