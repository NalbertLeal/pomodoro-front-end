import React from 'react'

function Button(label, onClick=(e) => e.stopPropagation()) {
  return <button id="login-btn" className="matter-button-contained" onClick={() => onClick()}>
    {label}
  </button>
} 

export default Button