import React from 'react'
import './ResourcesBody.css'

const ResourcesBody = () => {
  return (
    <div className='ResourcesBody__container'>
      <h1>Resources</h1>

      <div className='ResourcesBody__Body'>
        <div className='Resources__box'>
            <h3>Texas Department of Aging and Disability Services</h3>
            <p>www.dads.state.tx.us</p>
        </div>

        <div className='Resources__box'>
            <h3>Texas Associate of Home Care</h3>
            <p>www.tahc.org</p>
        </div>

        <div className='Resources__box'>
            <h3>Texas Health Care Information Collection</h3>
            <p>www.dshs.state.tx.us/thcic</p>
        </div>

        <div className='Resources__box'>
            <h3>Texas Health Care Assosiation</h3>
            <p>www.txhca.org</p>
        </div>


      </div>

      
    </div>
  )
}

export default ResourcesBody
