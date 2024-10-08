import React, { useState } from 'react';
import './ContactBody.css';

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comment: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate Name
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Validate Email
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // // Validate Comment
    // if (!formData.comment) {
    //   errors.comment = 'Comment is required';
    //   isValid = false;
    // }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      const response = await fetch('https://formspree.io/f/xgvwdeoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          comment: ''
        });
        setFormErrors({});
        setShowPopup('success');
        setTimeout(() => setShowPopup(null), 3000); // Hide popup after 3 seconds
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      setFormErrors({ submit: 'There was a problem with your submission. Please try again.' });
      setShowPopup('error');
    }
  };

  return (
    <div className='contactbody__container'>
      <div className='contactbody__content'>
        <div className='contact__T'>
          <h3>Get In Touch</h3>
          <p>Our team is standing by to help with any questions, comments or concerns you may have. You can fill out the form, email, call, chat or message us anytime.</p>
          <div className='map-responsive'>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226566.52381791736!2d-97.16880767447282!3d33.031788181312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c6fa1b4d5e90f%3A0x7e4b7e4b4a5aebf7!2sFlower%20Mound%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1632909277226!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}  
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className='contact__form'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
            
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone Number'
            />
            
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder='Address'
            />
            
            <textarea
              id="comment"
              name="comment"
              rows="4"
              value={formData.comment}
              onChange={handleChange}
              placeholder='How can we help ?'
            ></textarea>
            {/* {formErrors.comment && <span className="error">{formErrors.comment}</span>} */}
            
            <button type="submit">Submit</button>
            {formErrors.submit && <span className="error">{formErrors.submit}</span>}
          </form>
        </div>

        {showPopup === 'success' && (
          <div className="popup success">
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        {showPopup === 'error' && (
          <div className="popup error">
            <p>There was a problem with your submission. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactBody;

