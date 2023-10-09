import React, { useRef, useState, useEffect } from 'react';
import AgentId from '../Components/generateId'
import HeaderData from '../Components/headerData';

const VideoBackground = ({ audio }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Function to toggle video sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
    }
  }, []);
  

  const playAudio = () => {
    audio.play();
  };


  return (
    <>
  
      {/* Page links component */}
      <HeaderData />

      <div className="video-background" style={{position: "absolute"}}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted  // Mute the video
          className="video-element"
        >
          <source
            src="https://res.cloudinary.com/ds4krgzbj/video/upload/v1696521695/PAR/Comme_ci_comme_c%CC%A7a_-_Lady_Donli_The_Lagos_Panic_Visualiser_fqyfoz.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
       
      </div>


        <div className='bottomHeader'>
            <span className="vcr-text text-center " style={{ color: 'var(--white)', zIndex: "50" }}>LADY DONLI</span>
            <button onClick={toggleSound} className="sound-toggle-button">
            {videoRef.current && !videoRef.current.muted ? (
                <img
                src="https://res.cloudinary.com/ds4krgzbj/image/upload/v1696527965/PAR/giphy_uwda4y.gif"
                alt="Unmute"
                width="70"
                height="70"
                />
            ) : (
                <img
                src="https://res.cloudinary.com/ds4krgzbj/image/upload/v1696527706/PAR/sound-Off_eedft4.png"
                alt="Mute"
                width="70"
                height="70"
                />
            )}
            </button>
        </div>
     
    </>
  )
}

export default VideoBackground