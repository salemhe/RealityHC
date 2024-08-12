import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='how-it-works__container'>
        <div className='main__text'>
            <h3>How It Works?</h3> 
            <p>What Can We Help You With Today?</p>
        </div>
      

      <div className='main__box'>
        <div className='how-it-works__box'>
            <i className="fas fa-sticky-note"></i>
            <h5>Describe Needs</h5>
            <p>Tell us your issues and what you need us to do, we would get to it.</p>
        </div>

        <div className='how-it-works__box'>
            <i className="fas fa-user-nurse"></i>
            <h5>Choose Your Hero</h5>
            <p>Select the caregiver that best suits your loved one’s needs. We’ll connect you with them.</p>
        </div>

        <div className='how-it-works__box'>
            <i className="fas fa-user-tie"></i>
            <h5>Stay Connected</h5>
            <p>Keep in touch with our team for updates and support. We’re here for you every step.</p>
        </div>
      </div>

      


    </div>
  )
}

export default HowItWorks
