import React from 'react'
import '../Styles/pages.css'
import '../Styles/Pages/start.css'
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <main className="page-content flex-column space-evenly">
      <h2 className="vcr-text text-center">AN ASSIGNMENT FROM LADY DONLI...</h2>
      {/* <iframe title="An Assignment from Lady Donli" src="https://player.vimeo.com/video/554775452?h=aa2083498c&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0"></iframe> */}
      <div id="video-container">
        <iframe title="An Assignment from Lady Donli" 
          src="https://player.vimeo.com/video/554775452?h=aa2083498c&title=0&byline=0&portrait=0" 
          style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
          frameBorder='0' allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
            </iframe>
      </div>
      <div className="page-row buttons">
        <Link to="/id">
          <button className="control-button button-accept font-size-l">
            ACCEPT
          </button>  
        </Link>
        <Link to="/">
          <button className="control-button button-reject font-size-l">REJECT</button>
        </Link>
      </div>
    </main>
  )
}

export default StartPage