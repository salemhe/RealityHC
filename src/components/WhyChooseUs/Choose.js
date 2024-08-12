import React from 'react';
import ChooseImg from './../../media/WhyChoose.jpg';
import './Choose.css'

const Choose = () => {
  return (
    <div className='why-choose-us__container'>
      <div className='textes__section'>
        <h4>WHY CHOOSE US</h4>
        <h3>Senior Care Is Not Our Job It's Pride</h3>
        <p>
            We believe that caring for seniors is a privilege. Our compassionate team is dedicated to providing personalized support and comfort.
        </p>
      </div>

      <div className='body__section'>
        <div className='images__section'>
          <img src={ChooseImg} alt='Chooseus Cover' />
        </div>

        <div className='write__section'>
          <h3>Residential Elderly Care  For All Your Needs </h3>
          
          <div className='choose__box'>
            <div className='choose__boxes'>
              <div className='icones'>
                 <i className='fas fa-calendar'></i>
              </div>
              <div className='textes'>
                <h5>Years Experience</h5>
                <p>With a decade of experience, our team excels in delivering exceptional home health care tailored to individual needs.</p>
              </div>
            </div>
          </div>

          <div className='choose__box'>
            <div className='choose__boxes'>
              <div className='icones'>
                  <i className='fas fa-user-tie'></i>
              </div>
              <div className='textes'>
                <h5>Professional Care</h5>
                <p>Our dedicated professionals offer personalized, high-quality care, ensuring each patient receives the attention and support they deserve.</p>
              </div>
            </div>
          </div>

          <button><a href='/contact'>Contact Us</a></button>
        </div>
      </div>
      
    </div>
  )
}

export default Choose;

