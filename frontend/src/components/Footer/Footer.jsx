import React from 'react'
import './Footer.css'
import Title from '../Title/Title'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left-col">
        <h1>{Title}</h1>
      </div>

      <div className="mid-col"></div>

      <div className="right-col"></div>
    </div>
  )
}

export default Footer
