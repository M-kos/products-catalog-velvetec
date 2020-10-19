import React from 'react'
import { Portal } from 'components/Portal/Portal'

import './Modal.scss'

export const Modal = ({ title, reject, confirm, children }) => {
  return (
    <Portal>
      <div className="modalOverlay" onClick={reject}>
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title pb-3">{title}</span>
            {children}
          </div>
          <div className="card-action">
            <button
              className="btn waves-effect waves-light mr-3"
              type="button"
              onClick={reject}
            >
              Cancel
            </button>
            <button
              className="btn waves-effect waves-light deep-orange"
              type="button"
              onClick={confirm}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
