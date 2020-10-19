import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, addCategoryItem } from 'redux/actions'
import { CategoryItem } from 'components/CategoryItem/CategoryItem'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'
import { Modal } from 'components/Modal/Modal'

import './CategoryList.scss'

const CategoryList = ({
  fetchCategories,
  categories,
  loading,
  addCategoryItem,
}) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  let list = <li className="collection-item">Empty</li>

  if (categories && categories.length) {
    list = categories.map((category) => {
      return <CategoryItem key={category.key} />
    })
  }

  const modalHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowModal((prev) => !prev)
  }

  return (
    <>
      <ul className="collection with-header">
        <li className="category-list-header collection-header">
          <h5 className="mt-1 mb-1">Category</h5>
          <button
            className="btn-floating waves-effect waves-light deep-orange"
            onClick={modalHandler}
          >
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
      {showModal && <Modal reject={modalHandler} />}
    </>
  )
}

const mapStateToProps = ({ app: { categories, loading } }) => {
  return { categories, loading }
}

const mapDispatchToProps = {
  fetchCategories,
  addCategoryItem,
}

const categoryListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export { categoryListConnect as CategoryList }
