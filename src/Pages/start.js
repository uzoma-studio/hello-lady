import React, { useRef, useState, useEffect } from 'react';
import '../Styles/pages.css';
import '../Styles/Pages/start.css';
import { Link } from 'react-router-dom';
import badge from '../Images/badge.png'
import CustomCursor from '../Components/customCursor';

const StartPage = ({ audio }) => {
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
    <main className="page-content flex-column space-evenly">
           <CustomCursor />

        <div className="video-background">
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
        
        <div className="start-sound">
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


        <div className="centered-image">
          <Link to="/id">
            <img src={badge} alt="Pan-African Rockstar badge"  style={{width: '208px'}} />
          </Link>
        </div>
        <div className="page-row buttons">
          {/* <Link to="/id">
            <button className="control-button button-accept font-size-l" onClick={() => playAudio()}>
              ACCEPT
            </button>
          </Link>
          <Link to="/">
            <button className="control-button button-reject font-size-l">REJECT</button>
          </Link>*/}
          
        </div>
        <span className="vcr-text text-center bottom-data " style={{ color: 'var(--white)' }}>Club ID</span>
    </main>
  );
};

export default StartPage;
