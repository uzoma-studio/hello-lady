import React from 'react'

const VideoEmbed = () => {
  return (
    <>
        <div style={{padding: "56.39% 0 0 0" , position: "relative", height: '50px' }}>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/554775452?h=aa2083498c&title=0&byline=0&portrait=0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}

export default VideoEmbed