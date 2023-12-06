import React from 'react'

const ResetButton = ({resetGame}) => {
  return (
    <button className="reset-btn" onClick={resetGame}>Reset</button>
  )
}

export default ResetButton