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
            src="https://res.cloudinary.com/ds4krgzbj/video/upload/q_auto,f_auto/PAR/PAR_comme_ci_comme_ca_bdss9l.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

      </div>

      <div className="start-sound">
        <button onClick={toggleSound} className="sound-toggle-button">
          {videoRef.current && !videoRef.current.muted ? (
            <img
              src="https://res.cloudinary.com/ds4krgzbj/image/upload/q_auto,f_auto/v1696527965/PAR/giphy_uwda4y.gif"
              alt="Unmute"
              width="70"
              height="70"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/ds4krgzbj/image/upload/q_auto,f_auto/v1696527706/PAR/sound-Off_eedft4.png"
              alt="Mute"
              width="70"
              height="70"
            />
          )}
        </button>
      </div>


      <div className="centered-image">
        <Link to="/id">
          <img src={badge} alt="Pan-African Rockstar badge" onClick={() => playAudio()} style={{ width: '208px' }} /><br />
        </Link>
        <Link to="/id">
          <button onClick={() => playAudio()} className="blur-button" style={{cursor: 'none'}}>
            Get Your ID
          </button>
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

    </main>
  );
};

export default StartPage;
