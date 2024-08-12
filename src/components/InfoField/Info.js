import React from 'react'
import './Info.css'

const Info = () => {
  return (
    <div className='info__container'>
      <h2>Emergency ? <br /> Contact Us</h2>
      <p>If you have an emergency, don’t hesitate to reach out. Our dedicated team is available to assist you promptly and efficiently.</p> 

      <div className='info__icons__box'>
        <div className='iconess'>
            <i className='fas fa-phone'></i>
        </div>
        <div className='info__text'>
            <h5>Call us</h5>
            <p>214 222 5201</p>
        </div>
      </div>

      <div className='info__icons__box'>
        <div className='iconess'>
            <i className='fas fa-envelope'></i>
        </div>
        <div className='info__text'>
            <h5>Mail Us</h5>
            <p>info@realityhomecare.com</p>
        </div>
      </div>

      
    </div>
  )
}

export default Info
