import React from 'react'
import ServicePage from '../components/PagesHero/ServicesPage'
import Navbar from '../components/Navbar/Navbar'
import ServicesBody from '../components/PagesBody/ServicesBody'
import Footer from '../components/Footer/Footer'
import Info from '../components/InfoField/Info'

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicePage />
      <ServicesBody />
      <Info /> <br />
      <Footer />
    </div>
  )
}

export default Services

