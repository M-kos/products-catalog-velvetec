import React from 'react'
import PropTypes from 'prop-types'

export const CategoryForm = ({ categoryName, setCategoryName }) => {
  const changeHandler = (e) => {
    if (e.target?.value?.trim()) {
      setCategoryName(e.target.value)
    }
  }

  return (
    <input
      placeholder="Enter category name"
      id="categoryName"
      type="text"
      name="categoryName"
      onChange={changeHandler}
      value={categoryName}
    />
  )
}

CategoryForm.propTypes = {
  categoryName: PropTypes.string,
  setCategoryName: PropTypes.func,
}
CategoryForm.defaultProps = {
  categoryName: '',
  setCategoryName: () => {},
}
