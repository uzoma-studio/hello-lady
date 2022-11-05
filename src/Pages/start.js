import React from 'react'
import '../Styles/pages.css'
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <main className="page-content">
      <h2 className="vcr-text">AN ASSIGNMENT FROM LADY DONLI...</h2>
      <iframe title="An Assignment from Lady Donli" src="https://player.vimeo.com/video/554775452?h=aa2083498c&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0"></iframe>
      <div className="page-row">
        <Link to="/id">
          <button className="control-button button-accept font-size-l">
            ACCEPT
          </button>  
        </Link>
        <button className="control-button button-reject font-size-l">REJECT</button>
      </div>
    </main>
  )
}

export default StartPage