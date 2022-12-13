import React from 'react'
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';

const UploadPage = ({ audio }) => {
  return (
    <>
      {/* Page links component */}
      <AgentId />
      <AudioControl audio={audio} />
    </>
  )
}

export default UploadPage