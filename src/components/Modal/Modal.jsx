import React from 'react'

import './Modal.scss'

export const Modal = ({ show, title, actionHandler, children }) => {
  const cardClickHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  if (show) {
    return (
      <div className="modalOverlay" onClick={actionHandler}>
        <div className="card modalCard" onClick={cardClickHandler}>
          <div className="card-content">
            <span className="card-title pb-3">{title}</span>
            {children}
          </div>
          <div className="card-action right-align">
            <button
              className="btn waves-effect waves-light mr-3"
              type="button"
              name="reject"
              onClick={actionHandler}
            >
              Cancel
            </button>
            <button
              className="btn waves-effect waves-light deep-orange"
              type="button"
              name="confirm"
              onClick={actionHandler}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
