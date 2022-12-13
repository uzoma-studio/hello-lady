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
        <button className="button-default audio-btn" onClick={() => toggleAudio()}>
            {`${audioText} audio`}
        </button>
    )
}

export default AudioControl