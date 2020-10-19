import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export const Portal = ({ children }) => {
  const el = document.createElement('div')

  useEffect(() => {
    document.body.append(el)

    return () => {
      el.remove()
    }
  })

  return ReactDOM.createPortal(children, el)
}
