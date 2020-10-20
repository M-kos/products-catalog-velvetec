import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, categoryOperationHandler } from 'redux/actions'
import { OPERATION } from 'redux/constants'

import { CategoryItem } from 'components/CategoryItem/CategoryItem'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'
import { CategoryForm } from 'components/CategoryForm/CategoryForm'
import { Modal } from 'components/Modal/Modal'

import './CategoryList.scss'

const CategoryList = ({
  fetchCategories,
  categories,
  loading,
  categoryOperationHandler,
}) => {
  const [categoryName, setCategoryName] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  let list = <li className="collection-item">Empty</li>

  if (categories && categories.length) {
    list = categories.map((category) => {
      return <CategoryItem key={category.id} category={category} />
    })
  }

  const modalHandler = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setShowModal((prev) => !prev)
  }

  const addHandler = () => {
    categoryOperationHandler(OPERATION.ADD, categoryName)
    modalHandler()
    setCategoryName('')
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
      <Modal
        show={showModal}
        reject={modalHandler}
        confirm={addHandler}
        title="Add Category"
      >
        <CategoryForm
          categoryName={categoryName}
          setCategoryName={setCategoryName}
        />
      </Modal>
    </>
  )
}

const mapStateToProps = ({ app: { categories, loading } }) => {
  return { categories, loading }
}

const mapDispatchToProps = {
  fetchCategories,
  categoryOperationHandler,
}

const categoryListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export { categoryListConnect as CategoryList }
