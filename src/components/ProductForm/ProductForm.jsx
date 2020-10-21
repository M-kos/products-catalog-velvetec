import React, { useEffect } from 'react'

export const ProductForm = ({ fields, setFields, selectOptions }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('select')
    if (window.M) {
      window.M.FormSelect.init(elems)
    }
  }, [])

  const localSelectOptions = selectOptions.map((option) => {
    return (
      <option
        key={option.id}
        value={option.id}
        selected={option.id === fields.categoryList}
      >
        {option.name}
      </option>
    )
  })

  const changeHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {}

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Enter product name"
              required
              id="productName"
              type="text"
              name="productName"
              onChange={changeHandler}
              value={fields.productName}
            />
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Enter product price"
              required
              id="productPrice"
              type="number"
              name="productPrice"
              onChange={changeHandler}
              value={fields.productPrice}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Enter expiration date"
              required
              id="expirationDate"
              type="date"
              name="expirationDate"
              onChange={changeHandler}
              value={fields.expirationDate}
            />
          </div>
          <div className="input-field col s6">
            <select required name="categoryList" onChange={changeHandler}>
              <option value="disabled" disabled selected>
                Choose category
              </option>
              {localSelectOptions}
            </select>
          </div>
        </div>
      </form>
    </>
  )
}
