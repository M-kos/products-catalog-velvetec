import React from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

export const Modal = ({ show, title, actionHandler, children, style }) => {
  const cardClickHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const localStyles = {
    minWidth: '350px',
  }

  if (show) {
    return (
      <div className="modalOverlay" onClick={actionHandler}>
        <div
          className="card"
          onClick={cardClickHandler}
          style={style || localStyles}
        >
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

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  actionHandler: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
}
Modal.defaultProps = {
  show: false,
  title: '',
  actionHandler: () => {},
  children: null,
  style: null,
}
