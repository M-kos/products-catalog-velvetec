import React from 'react'

export const Preloader = () => {
  const styles = {
    position: 'absolute',
    zIndex: 5,
  }

  return (
    <div className="progress ma-0 deep-orange lighten-3" style={styles}>
      <div className="indeterminate deep-orange"></div>
    </div>
  )
}
