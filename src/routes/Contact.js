import React from 'react'
import ContactPage from '../components/PagesHero/ContactPage'
import Navbar from '../components/Navbar/Navbar'
import ContactBody from '../components/PagesBody/ContactBody'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactPage />
      <ContactBody />
      <Footer />
    </div>
  )
}

export default Contact
