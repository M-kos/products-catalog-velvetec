import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from 'redux/actions'
import { CategoryItem } from 'components/CategoryItem/CategoryItem'

import './CategoryList.scss'

const CategoryList = ({ fetchCategories, categories }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  let list = <li className="collection-item">Empty</li>

  if (categories) {
    list = categories.map((category) => {
      return <CategoryItem key={category.key} />
    })
  }

  return (
    <ul className="collection with-header">
      <li className="category-list-header collection-header">
        <h5 className="mt-1 mb-1">Category</h5>
        <button className="btn-floating waves-effect waves-light deep-orange">
          <i className="material-icons">add</i>
        </button>
      </li>
      {list}
    </ul>
  )
}

const mapStateToProps = ({ login: { categories } }) => {
  return { categories }
}

const categoryListConnect = connect(mapStateToProps, { fetchCategories })(
  CategoryList
)

export { categoryListConnect as CategoryList }
