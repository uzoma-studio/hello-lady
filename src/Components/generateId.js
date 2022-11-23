import React, { useState, useRef } from 'react'
import '../Styles/Components/agentId.css'
import badge from '../Images/badge.png'
import html2canvas from "html2canvas"
import ShareId from './shareId'

const AgentId = () => {

    const [file, setFile] = useState(null)
    const [ idImage, setIdImage ] = useState(null) // the generated image of the ID from html2canvas
    const [ downloadLinkData, setDownloadLinkData ] = useState(null)
    
    const nameRef = useRef(null)
    const codeNameRef = useRef(null)
    const placeOfIssueRef = useRef(null)

    const handleFileChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    const transformInputToUppercase = (...inputRefs) => {
        inputRefs.forEach(ref => {
            ref.current.value = ref.current.value.toLocaleUpperCase()
        });
    }

    const generateImage = async () => {

        if(!file || !nameRef.current.value || !codeNameRef.current.value || !placeOfIssueRef.current.value){
            alert('PLEASE FILL IN ALL YOUR DETAILS AGENT')
        } else {
            // set file name before text transform
            const filename = `${codeNameRef.current.value} agent ID.jpg`

            transformInputToUppercase(nameRef, codeNameRef, placeOfIssueRef)
            
            const element = document.getElementById('agent-id')
            const canvas = await html2canvas(element, {backgroundColor: null})
            const data = canvas.toDataURL('image/jpg')
            setIdImage(data)

            setDownloadLinkData({ href: data, download: filename })

            URL.revokeObjectURL(file)
        }
    }

    const gradient1 = 'gradient-1'
    const gradient2 = 'gradient-2'
    const gradient3 = 'gradient-3'
    const gradient4 = 'gradient-4'
    const gradient5 = 'gradient-5'

    const [bgGradient, setBgGradient] = useState(gradient1)

    const setGradient = (event, gradient) => {
        document.getElementsByClassName('active-gradient')[0].classList.remove('active-gradient')
        event.target.className += " active-gradient"
        setBgGradient(gradient)
    }

    const capitalize = (word) => {
        return word[0] + word.slice(1).toLowerCase()
    }

    const uploadedImageStyle = {
        backgroundImage: `url(${file})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }

    return (
        <>
        { !idImage ? 
            <>
                <ul id="bg-selector">
                    <li className="gradient-1 active-gradient" onClick={ (e) => setGradient(e, gradient1) }></li>
                    <li className="gradient-2" onClick={ (e) => setGradient(e, gradient2) }></li>
                    <li className="gradient-3" onClick={ (e) => setGradient(e, gradient3) }></li>
                    <li className="gradient-4" onClick={ (e) => setGradient(e, gradient4) }></li>
                    <li className="gradient-5" onClick={ (e) => setGradient(e, gradient5) }></li>
                </ul>
                <div className="form-control flex-row flex-column-mobile">
                    <form id="agent-id" className={`flex-column ${bgGradient}`}>
                        <h3 className="text-center form-title">LADY DONLI'S DETECTIVE AGENCY</h3>
                        <label htmlFor="file" id="file-label" className="text-center" style={uploadedImageStyle}>
                            {/* { file ? <img src={file} alt="lady donli's detective agency uploaded id" /> :
                                    <span style={{fontSize: '14px'}}>+ Upload Photo</span>
                            } */}
                            { !file && <span style={{fontSize: '14px'}}>+ Upload Photo</span> }
                            <input type="file" id="file" onChange={(event) => handleFileChange(event)}/>
                        </label>
                        <ul>
                            <li>
                                <label htmlFor="name" style={{width: '35%'}}>Issued To</label>
                                <input type="text" id="name" name="name" ref={nameRef} style={{width: 'calc(65% - var(--form-padding)'}} /> 
                            </li>
                            <li>
                                <label htmlFor="codename" style={{width: '30%'}}>Codename</label>
                                <input type="text" id="codename" name="codename" ref={codeNameRef} style={{width: 'calc(70% - var(--form-padding)'}} /> 
                            </li>
                            <li>
                                <label htmlFor="place-of-issue" style={{width: '50%'}}>Place of Issue</label>
                                <input type="text" id="place-of-issue" name="place-of-issue" ref={placeOfIssueRef} style={{width: 'calc(50% - var(--form-padding)'}} /> 
                            </li>
                        </ul>
                        <div className='flex-row'>
                            <p style={{ textAlign: 'left' }}>
                                This certifies that the information hereon is that of an appointed HELLO LADY SPECIAL AGENT
                            </p>
                            <img src={badge} alt="Pan-African Rockstar badge" style={{width: '125px'}} />
                        </div>
                    </form>
                    <button className="button-default font-size-s" id="get-id-btn"
                        onClick={() => generateImage()}>Get Your ID</button>
                </div>
            </>
        :
            <ShareId idImage={idImage} downloadLinkData={downloadLinkData} formDetails={{
                "name": capitalize(nameRef.current.value),
                "codename": capitalize(codeNameRef.current.value),
                "place-of-issue": capitalize(placeOfIssueRef.current.value)
            }} />
        }
        </>
    )
}

export default AgentId