import React, { useRef, useState, useEffect } from 'react';
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';
import VideoBackground from '../Components/videoBackground';

const UploadPage = ({ audio }) => {

  

  const playAudio = () => {
    audio.play();
  };


  return (
    <>
   <main className="page-content flex-column space-evenly">
      {/* Page links component */}

      <VideoBackground/>
     
    
      <AgentId />
      </main>
    </>
  )
}

export default UploadPage