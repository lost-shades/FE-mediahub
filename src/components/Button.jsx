import React from 'react'
import "./Components.css"

export const Button = ({value}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // my submit logic
  }

  return (
    <button 
      onClick={handleSubmit} 
      className='buttonStyle' 
      type='submit'>
      {value}
    </button>
  )
}
