import React from 'react'
import AboutPage from '../components/PagesHero/AboutPage'
import Navbar from '../components/Navbar/Navbar'
import AboutBody from '../components/PagesBody/AboutBody'
import Footer from '../components/Footer/Footer'
import Info from '../components/InfoField/Info'


const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <AboutBody /> <br />
      <Info /> <br />
      <Footer />
    </div>
  )
}

export default AboutUs
