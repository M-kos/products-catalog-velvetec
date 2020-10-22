import React, { useState } from 'react'
import { connect } from 'react-redux'
import { categoryOperationHandler } from 'redux/actions'
import { OPERATION } from 'redux/constants'

import { CategoryItem } from 'components/CategoryItem/CategoryItem'
import { CircularPreloader } from 'components/CircularPreloader/CircularPreloader'
import { CategoryForm } from 'components/CategoryForm/CategoryForm'
import { Modal } from 'components/Modal/Modal'

import './CategoryList.scss'

const CategoryList = ({ categories, loading, categoryOperationHandler }) => {
  const [categoryName, setCategoryName] = useState('')
  const [categoryId, setCategoryId] = useState(null)
  const [operation, setOperation] = useState('')
  const [showModal, setShowModal] = useState(false)

  const modalHandler = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (e?.target?.name === 'confirm') {
      if (!categoryName || !categoryName.trim()) {
        return
      }

      categoryOperationHandler(operation, {
        id: categoryId,
        name: categoryName,
      })
    }

    setCategoryName()
    setCategoryId()
    setOperation()
    setShowModal((prev) => !prev)
  }

  const addHandler = () => {
    setOperation(OPERATION.ADD)
    setShowModal(true)
  }

  const updateHandler = ({ id, name }) => {
    setCategoryName(name)
    setCategoryId(id)
    setOperation(OPERATION.UPDATE)
    setShowModal(true)
  }

  const deleteHandler = ({ id }) => {
    categoryOperationHandler(OPERATION.REMOVE, { id })
  }

  let list = <li className="collection-item">Empty</li>

  if (categories && categories.length) {
    list = categories.map((category) => {
      return (
        <CategoryItem
          key={category.id}
          category={category}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      )
    })
  }

  return (
    <>
      <ul className="collection with-header">
        <li className="category-list-header collection-header">
          <h5 className="mt-1 mb-1">Category</h5>
          <button
            className="btn-floating waves-effect waves-light deep-orange"
            onClick={addHandler}
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
      <Modal show={showModal} actionHandler={modalHandler} title="Add Category">
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
  categoryOperationHandler,
}

const categoryListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export { categoryListConnect as CategoryList }
