import React, { useEffect } from 'react'

export const ProductForm = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('select')
    if (window.M) {
      window.M.FormSelect.init(elems)
    }
  }, [])

  const changeHandler = (e) => {
    if (e.target?.value?.trim()) {
    }
  }

  return (
    <>
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="Enter category name"
            id="categoryName"
            type="text"
            name="categoryName"
            onChange={changeHandler}
            value="1"
          />
        </div>
        <div className="input-field col s6">
          <input
            placeholder="Enter category name"
            id="categoryName"
            type="text"
            name="categoryName"
            onChange={changeHandler}
            value="2"
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="Enter category name"
            id="categoryName"
            type="text"
            name="categoryName"
            onChange={changeHandler}
            value="3"
          />
        </div>
        <div className="input-field col s6">
          <select name="categoryList">
            <option value="category1">133</option>
            <option value="category2">133</option>
            <option value="category3">133</option>
          </select>
          <label>Choose category</label>
        </div>
      </div>
    </>
  )
}
