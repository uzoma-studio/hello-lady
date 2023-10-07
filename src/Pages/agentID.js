import React from 'react'
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';
import HeaderData from '../Components/headerData';

const UploadPage = ({ audio }) => {
  return (
    <>
      {/* Page links component */}
      <HeaderData />
      <AudioControl audio={audio} />
      <AgentId />
    </>
  )
}

export default UploadPage