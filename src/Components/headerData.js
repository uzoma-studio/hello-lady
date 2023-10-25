import React from 'react'
import '../Styles/pages.css';
import '../Styles/Components/headerData.css'
import badge from '../Images/badge.png'

const AudioControl = ({ audio }) => {


    return (

        <div className='topHeader pageHeader'>
            <img src={badge} alt="Pan-African Rockstar badge" style={{ width: '84px', zIndex: "50" }} />
            <span className="vcr-text text-center " style={{ color: 'var(--white)', zIndex: "50" }}>LADY DONLI &copy; {new Date().getFullYear()}</span>
        </div>
    )
}

export default AudioControl