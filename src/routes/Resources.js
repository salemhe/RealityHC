import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ResourcesPage from '../components/PagesHero/ResourcesPage'
import ResourcesBody from '../components/PagesBody/ResourcesBody'
import Footer from '../components/Footer/Footer'
import DownloadButton from '../components/Button/DownloadButton'

const Resources = () => {
  return (
    <div>
     <Navbar />
     <ResourcesPage />
     <ResourcesBody />
     <DownloadButton />
     <Footer />
    </div>
  )
}

export default Resources
