import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Resources from './routes/Resources'
import Appointment from './routes/Appointment'


function App ()  {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <AboutUs />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/resources' element={ <Resources />} />
        <Route path='/appointment' element={ <Appointment />} />
      </Routes>
    </div>
  )
}

export default App
