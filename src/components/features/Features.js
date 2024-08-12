import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='features__container'>
      <div className='features__box'>
        <div className='icons'>
            <i className='fas fa-clock'></i>
        </div>
        <div className='text'>
            <h4>24/7 Service</h4>
            <p>We’re here for you 24/7</p>
        </div>
      </div>

      <div className='features__box'>
        <div className='icons'>
            <i className='fas fa-user-tie'></i>
        </div>
        <div className='text'>
            <h4>Professional</h4>
            <p>Dedicated to your well-being</p>
        </div>
      </div>

      <div className='features__box'>
        <div className='icons'>
            <i className='fas fa-hand-holding-usd'></i>
        </div>
        <div className='text'>
            <h4>Affordable</h4>
            <p>Care that won’t break the bank</p>
        </div>
      </div>

      <div className='features__box'>
        <div className='icons'>
            <i className='fas fa-shield-alt'></i>
        </div>
        <div className='text'>
            <h4>Guaranteed</h4>
            <p>Your satisfaction our priority</p>
        </div>
      </div>
    </div>
  )
}

export default Features
