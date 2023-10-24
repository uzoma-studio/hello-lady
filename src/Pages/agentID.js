import React from 'react'
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';
import HeaderData from '../Components/headerData';

const UploadPage = ({ audio }) => {
  return (
    <>
      {/* Page links component */}
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <AudioControl audio={audio} />
        <AgentId />
        <HeaderData />
      </div>
    </>
  )
}

export default UploadPage