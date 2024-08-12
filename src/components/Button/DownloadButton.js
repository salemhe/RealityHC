import React from 'react'
import './DownloadButton.css'

const DownloadButton = () => {
  return (
    <div className='downloadbutton__container'>
      <div className='db__center'>
        <h3>Download our Form Here</h3>
        <button>
          <a href='/'>
            <i class="fa-solid fa-copy"></i>Download Form
          </a>
          </button>
            <br />
          <button>
          <a href='/appointment'>
            <i class="fa-solid fa-clipboard-list"></i>Admission
          </a>
          </button>
      </div>
      
    </div>
  )
}

export default DownloadButton

