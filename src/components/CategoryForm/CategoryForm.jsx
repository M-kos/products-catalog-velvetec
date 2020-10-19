import React from 'react'

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
