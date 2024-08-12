import React from 'react';
import './ContactBody.css';

const ContactBody = () => {
  return (
    <div className='contactbody__container'>
      <div className='contactbody__content'>

        <div className='contact__T'>
          <h3>Get In Touch</h3>
          <p>Our team is standing by to help with any questions, comments or concerns you may have. You can fill out the form, email, call, chat or message us anytime.</p>
          <div className='map-responsive'>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.420542435336!2d-74.00601578495369!3d40.71277637933065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a26d5c4f6d3%3A0x5e4c6cde3c4e2d3e!2sNew%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1632909277226!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className='contact__form'>
          <form>
            {/* <label htmlFor="name">Name:</label> */}
            <input type="text" id="name" name="name" required  placeholder='Your name'/>

            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" id="email" name="email" required placeholder='Email Address'/>

            {/* <label htmlFor="phone">Phone Number:</label> */}
            <input type="tel" id="phone" name="phone" placeholder='Phone Number'/>

            {/* <label htmlFor="phone">Phone Number:</label> */}
            <input type="text" id="address" name="address" placeholder='Address'/>

            {/* <label htmlFor="comment">Comment:</label> */}
            <textarea id="comment" name="comment" rows="4" required placeholder='How can we help ?'></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactBody;
