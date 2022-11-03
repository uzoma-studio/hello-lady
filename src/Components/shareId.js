import React from 'react'

const ShareId = ({ idImage, downloadLinkData }) => {
  return (
    <div className="flex-row">
        <img src={idImage} alt="generated agent id" />
        <div className="share-id">
            <div>
                <p className="font-size-s white-text vcr-text">Welcome aboard agent</p>
                <p className="font-size-s white-text vcr-text">Share your ID to show your affiliation</p>
            </div>
            <ul>
                <li>
                    <a href={downloadLinkData.href} download={downloadLinkData.download}>
                        <button className="button-default font-size-s">Download ID</button>
                    </a>
                </li>
                <li>
                    <button className="button-default font-size-s">Share on IG</button>
                </li>
                <li>
                    <button className="button-default font-size-s">Share on FB</button>
                </li>
                <li>
                    <button className="button-default font-size-s">Share on Twitter</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ShareId