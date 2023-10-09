import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ShareId = ({ idImage, downloadLinkData, formDetails }) => {
    const handleRefreshClick = () => {
        window.location.reload(); // This line refreshes the page
      };    
  

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      window && (window.innerWidth < 768) && setIsMobile(true)
    
    //   return () => {
    //     second
    //   }
    }, [])

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

    const [stepCount, setStepCount] = useState(0)

    const Step1 = () => {

        return (
            <div className="flex-row center flex-column-mobile" style={{justifyContent: 'space-around'}}>
                {isMobile && <p className='white-text vcr-text font-size-m'>Welcome To The Club</p> }
                {/* <img src={idImage} alt="generated agent id" />  */}
               
                <div class="tilting-card-wrapper">
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="mouse-position-tracker"></div>
                    <div class="tilting-card-body">
                        <img className='downloadImage' src={idImage} alt="generated agent id" />
                    </div>
                </div>
                
                <div className="step-1-text">
                    {!isMobile && <p className='white-text vcr-text font-size-m'>Welcome To The Club</p> }
                    <p className="white-text vcr-text font-size-xs">
                        { isMobile ? 
                            "Download your ID onto your device by pressing and holding it and selecting 'Add to Photos'"
                            :
                            "First, download your ID onto your device"
                        }
                    </p>
                    { !isMobile && 
                    <>
                        <a href={downloadLinkData.href} download={downloadLinkData.download}>
                            <button className="button-default font-size-xs" onClick={() => {setStepCount(stepCount + 1)}}>
                                Download your ID
                            </button>
                        </a>
                        <button
                            className="blur-button"
                            onClick={handleRefreshClick}>
                            BACK TO ID
                        </button>
                      </>
                    }
                </div>
            </div>
        )
    }

    const Step2 = () => {
        const [platformChoice, setPlatformChoice] = useState(null)

        const platforms = { ig: "IG", twitter: "Twitter", fb: "Facebook"}

        const { ig, twitter, fb } = platforms

        const platformSelected = () => {
            if(platformChoice === ig){
                return <div>
                    {/* video instructions on how to share to IG */}
                    {
                        isMobile ?
                            <a href="instagram://share-story" rel="noopener noreferrer" target="_blank">
                                <button className="button-default font-size-xs">Share on IG</button>{` `}
                            </a>
                            :
                            <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                                <button className="button-default font-size-xs">Share on IG</button>{` `}
                            </a>
                    }
                </div>
            } else if(platformChoice === twitter){
                return <div>
                    {/* video instructions twitter */}
                    <a href="https://twitter.com/intent/tweet?text=Get%20your%20ID%20and%20join%20the%20Pan%20African%20Rockstar%20Club%3A%20https%3A//panafricanrockstar.club" rel="noopener noreferrer" target="_blank">
                        <button className="button-default font-size-xs">Share on Twitter</button>
                    </a>
                </div>
            } else if(platformChoice === fb){
                return <div>
                    {/* video instructions fb */}
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://panafricanrockstar.club" rel="noopener noreferrer" target="_blank">
                        <button className="button-default font-size-xs">Share on FB</button>{` `}
                    </a>
                </div>
            }
        }

        return (
            <div className='sharePadding'>
                <p className='white-text vcr-text font-size-s text-center'>Now that your ID is downloaded you can share it on any platform of your choice</p>
                <ul className="step2-share-links">
                    <li className="white-text" onClick={() => setPlatformChoice(ig)}>Share on IG</li>
                    <li className="white-text" onClick={() => setPlatformChoice(twitter)}>Share on Twitter</li>
                    <li className="white-text" onClick={() => setPlatformChoice(fb)}>Share on Facebook</li>
                </ul>
                
                <div className="text-center">
                    { platformChoice && platformSelected() }
                </div>
                
            </div>
        )
    }

    const Step3 = () => {
        return (
            <div className='sharePadding'>
                <p className='white-text vcr-text font-size-s text-center'>Don't forget to stream PAN AFRICAN ROCKSTAR on your fave streaming platform</p>
                {/* Spotify embed link */}
                {/* Apple Music embed link */}
            </div>
        )
    }

    const shareSteps = [ <Step1 />, <Step2 />, <Step3 /> ]

  return (
    <>
    {
        email ?
            <div id="share-id">
                { shareSteps[stepCount] }
                {
                    stepCount < shareSteps.length - 1 ?
                        <div className="center-container">
                            <button
                                className="blur-button"
                                id="get-id-btn"
                                onClick={() => {setStepCount(stepCount + 1)}}>
                               Next Step
                            </button>
                        </div>
                        
                        :
                        <div className="center-container">
                        <button className="blur-button"
                                id="get-id-btn" onClick={() => {setStepCount(0)}}>Back</button>
                        </div>
                }
            </div>
        :   
        <div className="ConfirmEmail flex-column email-form-container">
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
                <div className="center-container">
                     <button
                        className="blur-button"
                        id="get-id-btn"
                        type="submit">
                       Confirm Email
                    </button>
                </div>
            </form>
        </div>
    }
    </>
  )
}

export default ShareId