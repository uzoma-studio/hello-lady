import React from 'react'

const ShareId = ({ idImage, downloadLinkData }) => {
  return (
    <div className="flex-row center">
        <img src={idImage} alt="generated agent id" />
        <div id="share-id">
            <div>
                <p className="font-size-s white-text vcr-text">Welcome aboard agent</p>
                <p className="font-size-s white-text vcr-text">Share your ID to show your affiliation</p>
            </div>
            <ol>
                <li>
                    <p className='font-size-xs white-text'>Download your generated ID onto your device {` `}</p>
                    <a href={downloadLinkData.href} download={downloadLinkData.download}>
                        <button className="button-default font-size-s">Download ID</button>
                    </a>
                </li>
                <li style={{marginTop: '2em'}}>
                    <p className='font-size-xs white-text'>Be sure to include an image of your ID when you share on any of these platforms:</p>
                    <ul id="social-share-links">
                        <li>
                            <a href="https://instagram.com" rel="noopener noreferrer">
                                <button className="button-default font-size-s">Share on IG</button>{` `}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://sayhellolady.com" rel="noopener noreferrer">
                                <button className="button-default font-size-s">Share on FB</button>{` `}
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/intent/tweet?text=Want%20to%20join%20the%20elite%20agency?%20Go%20to%20https%3A//sayhellolady.com" rel="noopener noreferrer">
                                <button className="button-default font-size-s">Share on Twitter</button>
                            </a>
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default ShareId