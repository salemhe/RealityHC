import React from 'react';
import './AboutBody.css';

import AboutImage from '../../media/Backdrop.jpg';
import AboutImage2 from '../../media/elderlycare2.jpg';

const AboutBody = () => {
  return (
    <div className='AboutBody__container'>
      <div className='First__section'>
        <h3>Making a difference with senior living</h3>
        <p>
          Our mission is to enrich the lives of seniors and create supportive environments where they can feel secure and cared for. <br />
          We focus on promoting well-being and ensuring that every individual feels valued and respected.
        </p>
      </div>

      <div className='Second__section'>
        <div className='aboutbody'>
          <div className='aboutbody__text'>
            <h3>About Us!</h3> <br />
            <p>
              Welcome to <span>Reality Health Care</span>, a trusted home healthcare agency located in Flower Mound, TX. Thank you for visiting our website. We provide "THE REAL" quality care in the privacy and comfort of your home.
            </p> <br />
            <p>
              Our goal is to provide top-quality personalized care through coordination with family and healthcare providers. As an independently owned agency, we pride ourselves on our compassionate approach to eldercare.
            </p>
            <p>
              Under the direction of your physician, our trained and certified professionals deliver consistent case management to ensure your needs are met.
            </p>
          </div>

          <img src={AboutImage} alt='Banner image' />
        </div>
      </div>

      <div className='Second__section'>
        <div className='aboutbody'>
          <img src={AboutImage2} alt='Banner image' />

          <div className='aboutbody__text'>
            <p>
              At <span>Reality Health Care</span>, we recognize that choosing the right healthcare agency for your loved ones can be a challenging decision. Our agency is grounded in respect, integrity, compassion, and open communication.
            </p> <br />
            <p style={{ color: '#09b0d9',  fontWeight: "bold"}}>❇ Our services include:</p>
            <p>
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Skilled Nursing (RN, LVN) <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Home Health Aide <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Physical Therapy (PT, PTA) <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Occupational Therapy (OT, OTA) <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Speech Therapy <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Medical Social Work (LCSW, MSW) <br />
              <i className="fas fa-check-square-o" aria-hidden="true"></i> Personal Assistant Service (PAS) <br />
            </p>
            <br />
            <p>
              We appreciate all feedback; it helps us enhance our services and improve our care. Our caregivers receive thorough training and regularly attend seminars to keep their skills up to date.
            </p> 
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AboutBody;






