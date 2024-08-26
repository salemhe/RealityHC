import React, { useState } from 'react';
import './Appointments.css';
import { FaUser, FaHome, FaMapMarkedAlt, FaPhone, FaEnvelope, FaFax, FaCalendarAlt, FaClock, FaCreditCard, FaCommentDots } from 'react-icons/fa';

const Appointments = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        state: '',
        city: '', 
        zipcode: '',
        contactMethod: '',
        emailAddress: '',
        phoneNumber: '',
        fax: '',
        bestTimeToCall: '',
        preferredDate: '',
        preferredTime: '',
        desiredPaymentType: '',
        patientCondition: '',
        comments: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        //Validate Full Name
        if (!formData.fullName) {
            setFormErrors.fullName = 'full Name is required';
            isValid = false;
        }

        //Validate Email Address 
        if (!formData.emailAddress) {
            setFormErrors.emailAddress = 'Email Address is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            errors.emailAddress = 'Email Address is invalid';
            isValid = false;
        }

        //Validate Phone Number (If Provided)
        if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Phone Number must be 10 digits';
            isValid = false;
        }

        //Validate Zip Code
        if(!formData.zipcode) {
            errors.zipcode = 'Zip Code is required';
            isValid = false;
        } else if (!/^\d{5}$/.test(formData.zipcode)) {
            errors.zipcode = 'Zip Code Must be 5 digits';
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        
        try {
            const response = await fetch('https://formspree.io/f/xzzpobbd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    address: formData.address,
                    state: formData.state,
                    city: formData.city,
                    zipcode: formData.zipcode,
                    contactMethod: formData.contactMethod,
                    email: formData.emailAddress,
                    phone: formData.phoneNumber,
                    fax: formData.fax,
                    bestTimeToCall: formData.bestTimeToCall,
                    preferredDate: formData.preferredDate,
                    preferredTime: formData.preferredTime,
                    paymentType: formData.desiredPaymentType,
                    condition: formData.patientCondition,
                    comments: formData.comments
                })
            });

            if (response.ok) {
                setStatusMessage('Thank you! Your appointment request has been submitted.');
                // Reset form fields after successful submission
                setFormData({
                    fullName: '',
                    address: '',
                    state: '',
                    city: '',
                    zipcode: '',
                    contactMethod: '',
                    emailAddress: '',
                    phoneNumber: '',
                    fax: '',
                    bestTimeToCall: '',
                    preferredDate: '',
                    preferredTime: '',
                    desiredPaymentType: '',
                    patientCondition: '',
                    comments: ''
                });
            } else {
                throw new Error('Form submission failed.');
            }
        } catch (error) {
            setStatusMessage('There was a problem with your submission. Please try again.');
        }

        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    };

    return (
        <div className='appointment__page'>
            <div className='container'>
                <h1>Book Your Appointment</h1>
                <p>We’re here to provide compassionate, high-quality care tailored to your needs. Fill out the form below to schedule an appointment with one of our healthcare professionals.</p>

                <form onSubmit={handleSubmit} className="appointment-form">
                    <div className="form-group">
                        <label htmlFor='fullName'><FaUser /> Full Name</label>
                        <input type='text' id='fullName' name='fullName' value={formData.fullName} onChange={handleChange} required />
                        {formErrors.fullName && <span className='error'>{formErrors.fullName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor='address'><FaHome /> Address</label>
                        <input type='text' id='address' name='address' value={formData.address} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor='state'><FaMapMarkedAlt /> State</label>
                        <select id='state' name='state' value={formData.state} onChange={handleChange} required>
                            <option value=''>Select State</option>
                            <option value='AL'>Alabama</option>
                            <option value='AK'>Alaska</option>
                            <option value='AZ'>Arizona</option>
                            <option value='AR'>Arkansas</option>
                            <option value='CA'>California</option>
                            <option value='CO'>Colorado</option>
                            <option value='CT'>Connecticut</option>
                            <option value='DE'>Delaware</option>
                            <option value='FL'>Florida</option>
                            <option value='GA'>Georgia</option>
                            <option value='HI'>Hawaii</option>
                            <option value='ID'>Idaho</option>
                            <option value='IL'>Illinois</option>
                            <option value='IN'>Indiana</option>
                            <option value='IA'>Iowa</option>
                            <option value='KS'>Kansas</option>
                            <option value='KY'>Kentucky</option>
                            <option value='LA'>Louisiana</option>
                            <option value='ME'>Maine</option>
                            <option value='MD'>Maryland</option>
                            <option value='MA'>Massachusetts</option>
                            <option value='MI'>Michigan</option>
                            <option value='MN'>Minnesota</option>
                            <option value='MS'>Mississippi</option>
                            <option value='MO'>Missouri</option>
                            <option value='MT'>Montana</option>
                            <option value='NE'>Nebraska</option>
                            <option value='NV'>Nevada</option>
                            <option value='NH'>New Hampshire</option>
                            <option value='NJ'>New Jersey</option>
                            <option value='NM'>New Mexico</option>
                            <option value='NY'>New York</option>
                            <option value='NC'>North Carolina</option>
                            <option value='ND'>North Dakota</option>
                            <option value='OH'>Ohio</option>
                            <option value='OK'>Oklahoma</option>
                            <option value='OR'>Oregon</option>
                            <option value='PA'>Pennsylvania</option>
                            <option value='RI'>Rhode Island</option>
                            <option value='SC'>South Carolina</option>
                            <option value='SD'>South Dakota</option>
                            <option value='TN'>Tennessee</option>
                            <option value='TX'>Texas</option>
                            <option value='UT'>Utah</option>
                            <option value='VT'>Vermont</option>
                            <option value='VA'>Virginia</option>
                            <option value='WA'>Washington</option>
                            <option value='WV'>West Virginia</option>
                            <option value='WI'>Wisconsin</option>
                            <option value='WY'>Wyoming</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='city'><FaMapMarkedAlt /> City</label>
                        <input type='text' id='city' name='city' value={formData.city} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor='zipcode'><FaMapMarkedAlt /> Zip Code</label>
                        <input type='text' id='zipcode' name='zipcode' value={formData.zipcode} onChange={handleChange} required />
                        {formErrors.zipcode && <span className='error'>{formErrors.zipcode}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor='contactMethod'><FaPhone /> Preferred Contact Method</label>
                        <select id='contactMethod' name='contactMethod' value={formData.contactMethod} onChange={handleChange} required>
                            <option value=''>Select Contact Method</option>
                            <option value='phone'>Phone</option>
                            <option value='fax'>Fax</option>
                            <option value='email'>Email</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='emailAddress'><FaEnvelope /> Email Address</label>
                        <input type='email' id='emailAddress' name='emailAddress' value={formData.emailAddress} onChange={handleChange} required />
                        {formErrors.emailAddress && <span className='error'>{formErrors.emailAddress}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor='phoneNumber'><FaPhone /> Phone Number</label>
                        <input type='tel' id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
                        {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor='fax'><FaFax /> Fax</label>
                        <input type='tel' id='fax' name='fax' value={formData.fax} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor='bestTimeToCall'><FaClock /> Best Time to Call?</label>
                        <select id='bestTimeToCall' name='bestTimeToCall' value={formData.bestTimeToCall} onChange={handleChange}>
                            <option value="">Select Best Time</option>
                            <option value="anytime">Anytime</option>
                            <option value="morning_home">Morning at Home</option>
                            <option value="morning_work">Morning at Work</option>
                            <option value="afternoon_home">Afternoon at Home</option>
                            <option value="afternoon_work">Afternoon at Work</option>
                            <option value="evening_home">Evening at Home</option>
                            <option value="evening_work">Evening at Work</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='preferredDate'><FaCalendarAlt /> Preferred Date</label>
                        <input type='date' id='preferredDate' name='preferredDate' value={formData.preferredDate} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor='preferredTime'><FaClock /> Preferred Time</label>
                        <input type='time' id='preferredTime' name='preferredTime' value={formData.preferredTime} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor='desiredPaymentType'><FaCreditCard /> Desired Payment Type</label>
                        <select id='desiredPaymentType' name='desiredPaymentType' value={formData.desiredPaymentType} onChange={handleChange}>
                            <option value="">Select Payment Type</option>
                            <option value="private_pay">Private Pay</option>
                            <option value="ssi">SSI</option>
                            <option value="medicare">Medicare</option>
                            <option value="medigap">Medigap</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='patientCondition'><FaCommentDots /> Patient's Condition</label>
                        <select id='patientCondition' name='patientCondition' value={formData.patientCondition} onChange={handleChange}>
                            <option value="">Select Condition</option>
                            <option value="able-to-move">Able to Move Around Without Assistance</option>
                            <option value="able-to-move-but-assistance">Able to Move Around, but Needing Assistance</option>
                            <option value="wheelchair">On Wheelchair</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor='comments'><FaCommentDots /> Comments</label>
                        <textarea id='comments' name='comments' value={formData.comments} onChange={handleChange} rows={4} />
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                    {formErrors.submit && <span className="error">{formErrors.submit}</span>}
                </form>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Thank You!</h2>
                        <p>Your appointment request has been submitted. We will contact you shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appointments;




