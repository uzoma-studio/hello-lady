import React from 'react'
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';

const UploadPage = ({ audio }) => {
  return (
    <main className="page-content flex-column-mobile">
      {/* Page links component */}
      <AgentId />
      <AudioControl audio={audio} />
    </main>
  )
}

export default UploadPage