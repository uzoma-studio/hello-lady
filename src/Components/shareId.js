import React, { useState, useRef } from 'react'

const ShareId = ({ idImage, downloadLinkData, formDetails }) => {

    const [ email, setEmail ] = useState(null)
    const emailRef = useRef(null)

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        setEmail(emailRef.current.value)

        fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "Agent Details", "email": emailRef.current.value, ...formDetails })
            })
            .then(() => console.log('Form uploaded successfully'))
            .catch(error => alert(error));
    
            e.preventDefault();
    }

    const shareIdText = <>
                            <p className="white-text vcr-text">Welcome aboard agent</p>
                            <p className="white-text vcr-text">Share your ID to show your affiliation</p>
                        </>

  return (
    <>
    {
        email ?
            <div className="flex-row center flex-column-mobile" id="share-id-container">
                <div className="is-mobile font-size-xs">{shareIdText}</div>
                <img src={idImage} alt="generated agent id" />
                <div id="share-id">
                    <div className="is-desktop font-size-s">{shareIdText}</div>
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
                                    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                                        <button className="button-default font-size-s">Share on IG</button>{` `}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://sayhellolady.com" rel="noopener noreferrer" target="_blank">
                                        <button className="button-default font-size-s">Share on FB</button>{` `}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/intent/tweet?text=Want%20to%20join%20the%20elite%20spy%20agency?%20Go%20to%20https%3A//sayhellolady.com" rel="noopener noreferrer" target="_blank">
                                        <button className="button-default font-size-s">Share on Twitter</button>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        :   
        <div className="flex-column">
            <div>
                <h3 className="text-center white-text vcr-text">PLEASE ENTER YOUR EMAIL ADDRESS AGENT</h3>
                <p className="white-text font-size-xs vcr-text">We need to be able to occassionally brief you on top secret missions</p>
            </div>
            <form id="email-form" onSubmit={(event) => handleSubmit(event)}>
                <p>
                    <label htmlFor="email" id="email-label" className="text-center">
                        <input type="email" id="email" name="email" ref={emailRef} required />
                    </label>
                </p>
                <p>
                    <button type="submit" className="button-default font-size-s email-form-btn">Confirm Email</button>
                </p>
            </form>
        </div>
    }
    </>
  )
}

export default ShareId