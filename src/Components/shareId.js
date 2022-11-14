import React, { useState, useRef } from 'react'
import { NetlifyForm } from 'react-netlify-forms'

const ShareId = ({ idImage, downloadLinkData, formDetails }) => {

    const [email, setEmail] = useState(null)
    const emailRef = useRef(null)

    const { name, codeName, placeOfIssue } = formDetails

    const confirmEmail = (emailAddress) => {
        if(emailAddress && emailAddress.includes('@')){
            setEmail(emailAddress)
            // save form data
        } else {
            alert('AGENT PLEASE ENTER A VALID EMAIL')
        }
    }

  return (
    <>
    {
        email ?
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
        :   
        <div className="flex-column">
            <div>
                <h3 className="text-center white-text vcr-text">PLEASE ENTER YOUR EMAIL ADDRESS AGENT</h3>
                <p className="white-text font-size-xs vcr-text">We need to be able to occassionally brief you on top secret missions</p>
            </div>
            <div id="email-form">
                <NetlifyForm className="email-form" name="Agent Details" method="post">
                        <p>
                            <label htmlFor="email" id="email-label" className="text-center">
                                <input type="email" id="email" name="email" ref={emailRef} />
                            </label>
                        </p>
                        <p><input type="hidden" id="name" name="name" value={name} /></p>
                        <p><input type="hidden" id="codename" name="codename" value={codeName} /></p> 
                        <p><input type="hidden" id="place-of-issue" name="place-of-issue" value={placeOfIssue} /></p> 
                        <p>
                            <button type="submit" className="button-default font-size-s email-form-btn" onClick={() => confirmEmail(emailRef.current.value)}>Confirm Email</button>
                        </p>
                </NetlifyForm>
            </div>
        </div>
    }
    </>
  )
}

export default ShareId