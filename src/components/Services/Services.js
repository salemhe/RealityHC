import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__text'>
        <h4>OUR SERVICES</h4>
        <h3>Compassionate Care for Life</h3>
        <p>We understand the importance of providing loving and supportive care for your loved ones. Our dedicated team is here to ensure they receive the highest quality of care in a comfortable and nurturing environment.</p>
      </div>

      <div className='services__box'>
        <div className='services__boxes'>
            <i className="fas fa-user-md"></i>
            <h5>Skilled Nursing</h5>
            <p>Our skilled nursing staff is available around the clock to provide personalized medical care, including medication management and health monitoring, ensuring that your loved ones are safe and well cared for.</p>
        </div>

        <div className='services__boxes'>
            <i className="fas fa-running"></i>
            <h5>Physical Therapy</h5>
            <p>Our experienced physical therapists offer tailored programs to help seniors regain strength and mobility, enhancing their independence and overall well-being through gentle exercises and support.</p>
        </div>

        <div className='services__boxes'>
            <i className="fas fa-briefcase"></i>
            <h5>Occupational Therapy</h5>
            <p>We focus on helping seniors maintain their daily activities and independence. Our occupational therapy sessions are designed to improve their ability to perform everyday tasks comfortably and confidently.</p>
        </div>

        <div className='services__boxes'>
            <i className="fas fa-medkit"></i>
            <h5>Home Health Aide</h5>
            <p>Our compassionate home health aides assist with personal care and daily living activities, ensuring your loved ones receive the attention and support they need in the comfort of their own homes.</p>
        </div>

        <div className='services__boxes'>
            <i className="fas fa-comments"></i>
            <h5>Speech Therapy</h5>
            <p>Our skilled speech therapists help seniors improve their communication and swallowing abilities, providing personalized strategies to enhance their quality of life and connect with loved ones.</p>
        </div>

        <div className='services__boxes'>
            <i className="fas fa-hands-helping"></i>
            <h5>Personal Assistant</h5>
            <p>We offer dedicated personal assistants to help seniors manage their daily tasks, appointments, and errands, providing the support they need to live independently and comfortably.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

