import React from 'react';
import './About.css';
import AboutImg from './../../media/banner.jpg';

const About = () => {
  return (
    <div className='about__container'>
      <div className='image__section'>
        <img src={AboutImg} alt="About Cover" />
      </div>

      <div className='text__section'>
        <p>
            <span>ABOUT US</span>
        </p>

        <h3>Care and Compassion are Provided in Bulk</h3>
        <p>We provide personalized, compassionate care to enhance the well-being and happiness of seniors in a nurturing environment.</p>

        <div className='about__box'>
            <div className='about__boxes'>
                <div className='icon'>
                    <i className='fas fa-calendar'></i>
                </div>
                <div className='texts'>
                    <h4>Our Vision</h4>
                    <p>Enriching lives through compassionate home health care</p>
                </div>
            </div>

            <div className='about__boxes'>
                <div className='icon'>
                    <i className='fas fa-calendar'></i>
                </div>
                <div className='texts'>
                    <h4>Our Mission</h4>
                    <p>Committed to compassionate, high-quality home health care.</p>
                </div>
            </div> 
        </div>
        <button><a href='/about'>Read More</a></button>
      </div>
      
    </div>
  );
};

export default About;

