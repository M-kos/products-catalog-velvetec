import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from 'redux/actions'
import { CategoryItem } from 'components/CategoryItem/CategoryItem'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'

import './CategoryList.scss'

const CategoryList = ({ fetchCategories, categories, loading }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  let list = <li className="collection-item">Empty</li>

  if (categories && categories.length) {
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
      {loading ? (
        <div className="category-list-preloader-container">
          <CircularPreloader />
        </div>
      ) : (
        list
      )}
    </ul>
  )
}

const mapStateToProps = ({ app: { categories, loading } }) => {
  return { categories, loading }
}

const categoryListConnect = connect(mapStateToProps, { fetchCategories })(
  CategoryList
)

export { categoryListConnect as CategoryList }
