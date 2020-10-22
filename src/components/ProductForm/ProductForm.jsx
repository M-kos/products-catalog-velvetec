import React, { useEffect } from 'react'

import './ProductsForm.scss'

export const ProductForm = ({
  fields,
  setFields,
  error,
  setError,
  selectOptions,
}) => {
  useEffect(() => {
    const elems = document.querySelectorAll('select')
    if (window.M) {
      window.M.FormSelect.init(elems)
    }
  }, [])

  const localSelectOptions = selectOptions.map((option) => {
    return (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    )
  })

  const changeHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    setError({ ...error, [e.target.name]: false })
  }

  return (
    <>
      <div className="row">
        <div className="product-input-wrapper col s6 pb-2">
          <input
            className={error.productName ? 'error' : ''}
            placeholder="Enter product name"
            required
            minLength="5"
            maxLength="40"
            id="productName"
            type="text"
            name="productName"
            onChange={changeHandler}
            value={fields.productName}
          />
          <p className="error-message">{error.productName && 'Wrong name'}</p>
        </div>
        <div className="product-input-wrapper col s6 pb-2">
          <input
            className={error.productPrice ? 'error' : ''}
            placeholder="Enter product price"
            required
            id="productPrice"
            type="number"
            name="productPrice"
            onChange={changeHandler}
            value={fields.productPrice}
          />
          <p className="error-message">{error.productPrice && 'Wrong price'}</p>
        </div>
      </div>
      <div className="row">
        <div className="product-input-wrapper col s6 pb-2">
          <input
            className={error.expirationDate ? 'error' : ''}
            placeholder="Enter expiration date"
            required
            id="expirationDate"
            type="date"
            name="expirationDate"
            onChange={changeHandler}
            value={fields.expirationDate}
          />
          <p className="error-message">
            {error.expirationDate && 'Wrong date'}
          </p>
        </div>
        <div className="product-input-wrapper col s6 pb-2">
          <select
            className={error.category ? 'error' : ''}
            required
            name="category"
            onChange={changeHandler}
            value={fields.category || 'disabled'}
          >
            <option value="disabled" disabled>
              Choose category
            </option>
            {localSelectOptions}
          </select>
          <p className="error-message">{error.category && 'Wrong category'}</p>
        </div>
      </div>
    </>
  )
}
