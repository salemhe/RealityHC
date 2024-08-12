import React from 'react';
import './Hero.css';
 

const Hero = () => {
  return (
    <div className='hero__background'>
        <div className='hero__container'>
          <h1>
              Find Comfort in Your Living
          </h1>
          <p>
              We provide tailored home healthcare to support your recovery and health at home.
          </p>

            <a href='/appointment'>Book Appointment</a>
        </div>
    </div>
  );
};

export default Hero;



