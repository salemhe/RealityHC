import React, { useState } from 'react'
import './Assessment.css'

const Assessment = () => {
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
        preferredTime:'',
        desiredPaymentType: '',
        patientCondition: '',
        comments: ''
    })

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setFormData ({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Hanle form submission here

        console.log(formData);
        //Reset form fields after submission
        setFormData ({
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
    };


  return (
    <div className='assessment__container'>
        <div className='assessment__form'>
            <h2>Book Assessment</h2>
            <form onSubmit={handleSubmit} className="form-container">
            <div className="form-column">
                <label htmlFor='fullName'>Full Name</label> <br />
                <input 
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChnage}
                    required
                />
                <br />

                <label htmlFor='address'>Address</label> <br />
                <input 
                    type='text'
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChnage}
                    required
                />
                <br />

                <label htmlFor='state'>State</label> <br />
                <select 
                    id='state'
                    name='state'
                    value={formData.state}
                    onChange={handleChnage}
                    required
                >
                    <option value=''>Select State</option>
                    <option value='AL'>Alabama</option>
                    <option value='AK'>Alaska</option>
                    <option value='AZ'>Arizona</option>
                    <option value='AR'>Arkansas</option>
                    <option value='CA'>California</option>
                    <option value='CO'>Colorado</option>
                    <option value='CT'>Connecticut</option>
                    <option value='DE'>Delaware</option>
                    <option value='DC'>District of Columbia</option>
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

                </select> <br />

                <label htmlFor='city'>City</label> <br />
                <input 
                    type='text'
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleChnage}
                    required
                /> <br />

                <label htmlFor='zipcode'>Zip Code</label> <br />
                <input 
                    type='text'
                    id='zipcode'
                    name='zipcode'
                    value={formData.zipcode}
                    onChange={handleChnage}
                    required
                /> <br />

                <label htmlFor='contactMethod'>Preferred contact Method</label> <br />
                <select 
                    id='contactMethod'
                    name='contactMethod'
                    value={formData.contactMethod}
                    onChange={handleChnage}
                    required
                >
                    <option value=''>Select contact Method</option>
                    <option value='phone'>Phone</option>
                    <option value='fax'>Fax</option>
                    <option value='email'>Email</option>
                </select> <br />

                <label htmlFor='desiredPaymentType'>Desired Payment Type</label> <br />
                <select 
                    id='desiredPaymentType'
                    name='desiredPaymentType'
                    value={formData.desiredPaymentType}
                    onChange={handleChnage}
                >
                    <option value="">Private Pay</option>
                    <option value="ssi">SSI</option>
                    <option value="medicare">Medicare</option>
                    <option value="medigap">Medigap</option>
                </select>
            </div>

            <div className="form-column">
                <label htmlFor='emailAddress'>Email Address</label> <br />
                <input 
                    type='email'
                    id='emailAddress'
                    name='emailAddress'
                    value={formData.emailAddress}
                    onChange={handleChnage}
                    required
                /> <br />

                <label htmlFor='phoneNumber'>Phone Number</label> <br />
                <input 
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChnage}
                /> <br />

                <label htmlFor='fax'>Fax</label> <br />
                <input 
                    type='tel'
                    id='fax'
                    name='fax'
                    value={formData.fax}
                    onChange={handleChnage}
                /> <br />

                <label htmlFor='bestTimeToCall'>Best Time to Call?</label> <br />
                <select 
                    id='bestTimeToCall'
                    name='bestTimeToCall'
                    value={formData.bestTimeToCall}
                    onChange={handleChnage}
                >
                    <option value="">Select Best Time</option>
                    <option value="anytime">Anytime</option>
                    <option value="morning_home">Morning at Home</option>
                    <option value="morning_work">Morning at Work</option>
                    <option value="afternoon_home">Afternoon at Home</option>
                    <option value="afternoon_work">Afternoon at Work</option>
                    <option value="evening_home">Evening at Home</option>
                    <option value="evening_work">Evening at Work</option>
                </select> <br />

                <label htmlFor='preferredDate'>Preferred Date</label> <br />
                <input 
                    type='text'
                    id='preferredDate'
                    name='preferredDate'
                    value={formData.preferredDate}
                    onChange={handleChnage}
                /> <br />

                <label htmlFor='preferredTime'>Preferred Time</label> <br />
                <input 
                    type='text'
                    id='preferredTime'
                    name='preferredTime'
                    value={formData.preferredTime}
                    onChange={handleChnage}
                /> <br />

                <label htmlFor='patientCondition'>Please provide patient's condition</label> <br />
                <select 
                    id='patientCondition'
                    name='patientCondition'
                    value={formData.patientCondition}
                    onChange={handleChnage}
                >
                    <option value="">Select</option>
                    <option value="able-to-move">Able To Move Around Without Assistance</option>
                    <option value="able-to-move-but-assistance">Able To Move Around,but needing Assistance</option>
                    <option value="wheelchair">On Wheelchair</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <div className="single-column">
                <label htmlFor='comments'>Comment</label> <br />
                <textarea
                    id='comments'
                    name='comments'
                    value={formData.comments}
                    onChange={handleChnage}
                    rows={4}
                    cols={50}
                /> <br />

                <button type="submit">Submit</button> {/* Changed anchor tag to button with type submit */}
            </div>
        </form>
    </div>
</div>

  )
}

export default Assessment
