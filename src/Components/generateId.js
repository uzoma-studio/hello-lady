import React, { useState, useRef } from 'react'
import '../Styles/Components/agentId.css'
import badge from '../Images/badge.png'
import html2canvas from "html2canvas"
import ShareId from './shareId'

const AgentId = () => {

    const [file, setFile] = useState(null)
    const [ idImage, setIdImage ] = useState(null)
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
            const canvas = await html2canvas(element)
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
                <div className="form-control flex-column">
                    <form id="agent-id" className={`flex-column ${bgGradient}`}>
                        <h3 className="text-center">HELLO LADY AGENT ID</h3>
                        <label htmlFor="file" id="file-label" className="text-center">
                            { file ? <img src={file} alt="hello lady uploaded id" /> :
                                    <span style={{fontSize: '14px'}}>+ Upload Photo</span>
                            }
                            <input type="file" id="file" onChange={(event) => handleFileChange(event)}/>
                        </label>
                        <ul>
                            <li>
                                <label htmlFor="name">Issued To</label>
                                <input type="text" id="name" name="name" ref={nameRef} /> 
                            </li>
                            <li>
                                <label htmlFor="codename">Codename</label>
                                <input type="text" id="codename" name="codename" ref={codeNameRef} /> 
                            </li>
                            <li>
                                <label htmlFor="place-of-issue">Place of Issue</label>
                                <input type="text" id="place-of-issue" name="place-of-issue" ref={placeOfIssueRef} /> 
                            </li>
                        </ul>
                        <div className='flex-row'>
                            <p>
                                This certifies that the information hereon is that of an appointed HELLO LADY SPECIAL AGENT
                            </p>
                            <img src={badge} alt="Pan-African Rockstar badge" style={{width: '125px'}} />
                        </div>
                    </form>
                    <button className="button-default font-size-s" onClick={() => generateImage()}>Get Your ID</button>
                </div>
            </>
        :
            <ShareId idImage={idImage} downloadLinkData={downloadLinkData} formDetails={{
                name: nameRef.current.value,
                codeName: codeNameRef.current.value,
                placeOfIssue: placeOfIssueRef.current.value
            }} />
        }
        </>
    )
}

export default AgentId