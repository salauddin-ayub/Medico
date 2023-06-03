import React from "react"

const PrimaryButton = ({ children, classes, onClick }) => {
  return (
    <button
      className={`btn btn-primary bg-gradient-to-r from-primary to-secondary ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
