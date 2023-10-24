import React, { useState } from 'react'
import '../Styles/Components/audioControl.css'

const AudioControl = ({ audio }) => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(true) //audio plays initially

    const toggleAudio = () => {
        if(isAudioPlaying){
            audio.pause()
            setIsAudioPlaying(false)
        } else {
            audio.play()
            setIsAudioPlaying(true)
        }
    }

    const audioText = isAudioPlaying ? "Pause" : "Play"

    return (
        <div className='bottomHeader pageHeader'>
            <div style={{ zIndex: "50" }}>
                <button className='blur-button'>
                    <a href='#' className="vcr-text" style={{ color: 'var(--white)' }}>PARC Shop</a>
                </button>
            </div>
            <button className="sound-toggle-button" onClick={() => toggleAudio()}>
                {isAudioPlaying ? (
                    <img
                    src="https://res.cloudinary.com/ds4krgzbj/image/upload/v1696527965/PAR/giphy_uwda4y.gif"
                    alt="Unmute"
                    style={{width: "70px", maxHeight: "70px"}}
                    />
                ) : (
                    <img
                    src="https://res.cloudinary.com/ds4krgzbj/image/upload/v1696527706/PAR/sound-Off_eedft4.png"
                    alt="Mute"
                   style={{width: "70px", maxHeight: "70px"}}
                    />
                )}

            </button>
        </div>
    )
}

export default AudioControl