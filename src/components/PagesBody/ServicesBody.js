import React, { useState } from 'react';
import './ServicesBody.css';
import ServiceImage from '../../media/Second-cover.jpg';
import SkilledNursing from '../../media/skilled-nursing.jpg';
import PhysicalTherapy from '../../media/physical-therapy.jpg';
import Occupational from '../../media/occupational.jpg';
import Speech from '../../media/adults-speech.jpg'
import Wounds from '../../media/Wounds.jpeg';
import Assistant from '../../media/Assistant.jpg'

const ServicesBody = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the open dropdown

  const toggleDropdown = (index) => {
    // If the clicked index is already open, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className='ServiceBody__container'>
        {/* Various sections */}
        <div className='Services__first'>
          <h3>Our Core Services</h3>
          <p>
            When your loved ones require more support due to age, disability, or injury, Reality Care offers a range of services 
            from personal assistance to skilled medical care. We are dedicated to providing the highest quality of care, treating 
            your family as our own. <br />
            <span className='green-text'>Below are our services:</span>
          </p>
        </div>

        <div className='Services__second'>
          {/* Service Box for Skilled Nursing */}
          <div className='service__box' onClick={() => toggleDropdown(0)}>
            <img 
              src={SkilledNursing}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Skilled Nursing</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our skilled nursing services, provided by registered nurses, focus on improving patient conditions.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 0 ? 'open' : ''}`}>
              <p>Our skilled nursing services, provided by experienced registered nurses and licensed practical nurses, focus on improving patient health and preventing further decline.</p> <br />
              <p style={{color: '#09b0d9'}}><b>Services Include:</b></p> <br />
              <p>
                🟦 Dressing Changes <br />
                🟦 IV Treatments <br />
                🟦 Respiratory Care <br />
                🟦 Pain & Symptom Management <br />
                🟦 Medication Instruction & Management <br />
                🟦 Surgical Aftercare <br />
                🟦 Infusion Therapy
              </p>
            </div>
          </div>

          {/* Service Box for Physical Therapy */}
          <div className='service__box' onClick={() => toggleDropdown(1)}>
            <img 
              src={PhysicalTherapy}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Physical Therapy</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our physical therapy services focus on restoring mobility and functional independence.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 1 ? 'open' : ''}`}>
              <p>Our physical therapists help seniors regain mobility and address physical issues through tailored exercise programs,</p> <br />
              <p style={{color: '#09b0d9'}}><b>including:</b></p>
              <p>
              🟦 Pain Management <br />
              🟦 Post-Surgery Care <br />
              🟦 Pre-Surgery Care <br />
              🟦 Assistive Device Training <br />
              🟦 Orthopedics <br />
              🟦 Pediatrics <br />
              🟦 Body Mechanics <br />
              🟦 Exercise programs <br />
              🟦 Improving Range of Motion <br />
              🟦 Muscle Re-Education <br />
              🟦 Regaining mobility <br />
              🟦 Daily Living skills Training <br />
              🟦 Strength Training <br />
              </p>
            </div>
          </div>

          {/* Service Box for Occupational Therapy */}
          <div className='service__box' onClick={() => toggleDropdown(2)}>
            <img 
              src={Occupational}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Occupational Therapy</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our occupational therapy services help individuals achieve independence in daily activities.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 2 ? 'open' : ''}`}>
              <p> <i>Group of people doing flexibility exercises</i>.</p> <br />
              <p>Our occupational therapy services help you relearn daily skills and acquire new ones to adapt to your physical condition or aid recovery.</p> <br />
              <p style={{color: '#09b0d9'}}><b>We offer:</b></p> <br />
              <p>
                🟦 Pain Management<br />
                🟦 Post-Surgery Care <br />
                🟦 Pre-Surgery Care <br />
                🟦 Assistive Devices Training <br />
                🟦 Orthopedics <br />
                🟦 Pediatrics <br />
                🟦 Body Mechanics <br />
                🟦 Exercise Programs <br />
                🟦 Range of Motion Improvement <br />
                🟦 Muscle Re-Education <br />
                🟦 Mobility Recovery <br />
                🟦 Daily Living Skills Training <br />
                🟦 Strength Training
              </p>
            </div>
          </div>

          {/* Service Box for Speech Therapy */}
          <div className='service__box' onClick={() => toggleDropdown(3)}>
            <img 
              src={Speech}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Speech Therapy</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our speech therapy services focus on improving communication and swallowing abilities.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 3 ? 'open' : ''}`}>
              <p><i>Senior woman with a nurse viewing a photo album.</i></p> <br />
              <p>Our speech therapists enhance patients' language and communication skills through personalized programs and exercises to reduce speech difficulties.</p> <br />
              <p style={{color: '#09b0d9'}}> <b>Treatments include:</b></p> <br />
              <p>
                🟦 Speech<br />
                🟦 Language<br />
                🟦 Dysphagia (Swallowing)<br />
                🟦 Cognition<br />
                🟦 Adaptive Speech Devices<br />
                🟦 Aural (Hearing) Rehabilitation<br />
                🟦 Non-oral Communication<br />
                🟦 Home Speech and Language Exercises<br />
                🟦 Patient Education<br />
                🟦 Communication Options<br />
                🟦 Eating and Swallowing Strategies<br />
                🟦 Speech Articulation Exercises<br />
                🟦 Aural Rehabilitation<br />
              </p>
            </div>
          </div>

          {/* Service Box for Wounds/Ostomy Care */}
          <div className='service__box' onClick={() => toggleDropdown(4)}>
            <img 
              src={Wounds}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Wounds/Ostomy Care</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our wounds/ostomy care services ensure proper treatment and management of wounds.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 4 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 4 ? 'open' : ''}`}>
              <p><i>Caregiver dressing an elderly man's wound.</i></p> <br />
              <p>Our skilled nurses are trained to manage various types of wounds, ensuring proper care and healing.</p> <br />
              <p style={{color: '#09b0d9'}}><b>Types of Wounds Include:</b></p> <br />
              <p>
                🟦 Surgical Wounds<br />
                🟦 Lacerations<br />
                🟦 Gangrene<br />
                🟦 Bed Sores<br />
                🟦 Cuts<br />
                🟦 Open Wounds<br />
                🟦 Abrasions<br />
                🟦 Contusions<br />
                🟦 Avulsions
              </p>
            </div>
          </div>

          {/* Service Box for Personal Assistant */}
          <div className='service__box' onClick={() => toggleDropdown(5)}>
            <img 
              src={Assistant}
              alt='Service Image'
              className='service__image'
            />
            <h4 className='service__title'>Personal Assistant</h4>
            <div className='green__line'></div>
            <p className='service__description'>
              Our personal assistant services provide support for daily living activities.
            </p>
            <div className='icon'>
              <i className={`fas ${openIndex === 5 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`dropdown-content ${openIndex === 5 ? 'open' : ''}`}>
              <p><i>Caregiver and elder talking.</i></p> <br />
              <p>Our personal assistant services provide flexible, customized support for loved ones facing challenges due to age, injury, or disabilities.</p> <br />
              <p style={{color: '#09b0d9'}}><b>Services May Include:</b></p> <br />
              <p>
                🟦 Medication Reminders<br />
                🟦 Tuck-in<br />
                🟦 Mobility Assistance<br />
                🟦 Grooming Assistance<br />
                🟦 Light Housekeeping<br />
                🟦 Grocery Shopping<br />
                🟦 Fall Prevention<br />
                🟦 Meal Preparation<br />
                🟦 Meal Planning<br />
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesBody;





