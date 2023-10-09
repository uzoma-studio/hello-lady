import React, { useState } from 'react'
import '../Styles/pages.css';
import '../Styles/Components/headerData.css'
import badge from '../Images/badge.png'

const AudioControl = ({ audio }) => {


    return (
            <div className='topHeader'>
                <img src={badge} alt="Pan-African Rockstar badge"  style={{width: '84px'}} />
                <div>
                    <ul>
                        <li><a href='#' className="vcr-text" style={{ color: 'var(--white)' }}>Shop</a></li>
                        <li><a href='#' className="vcr-text" style={{ color: 'var(--white)' }}>Info</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default AudioControl