import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/features/Features'
import WhoWeAre from '../components/Whoweare/WhoWeAre'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Choose from '../components/WhyChooseUs/Choose'
import Info from '../components/InfoField/Info'
import Testimonials from '../components/Testimonials/Testimonials'
import DownloadButton from '../components/Button/DownloadButton'
import Assessment from '../components/Assessment/Assessment'
import  Footer from '../components/Footer/Footer'
import Faq from '../components/FAQ/Faq'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <WhoWeAre />
      <HowItWorks />
      <About />
      <Services />
      <Banner />
      <Choose /> <br />
      <Info />
      <Testimonials />
      <DownloadButton />
      <Faq />
      {/* <Assessment /> <br /> */}
      <Footer />
    </div>
  )
}

export default Home
