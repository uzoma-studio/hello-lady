import React from 'react'
import AgentId from '../Components/generateId'
import AudioControl from '../Components/audioControl';
import HeaderData from '../Components/headerData';
import '../Styles/Components/rootStyles.css'

const UploadPage = ({ audio }) => {
  return (
    <>
      {/* Page links component */}
      <div className='mainContainer'>
        <AudioControl audio={audio} />
        <AgentId />
        <HeaderData />
      </div>
    </>
  )
}

export default UploadPage