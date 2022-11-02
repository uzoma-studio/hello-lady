import React from 'react'
import '../Styles/Components/agentId.css'
import badge from '../Images/badge.png'

const AgentId = () => {
  return (
    <div className="form-control flex-column">
        <form className="flex-column">
            <h3 className="text-center">HELLO LADY AGENT ID</h3>
            <label for="file" id="file-label" className="text-center">
                <span style={{fontSize: '14px'}}>+ Upload Photo</span>
                <input type="file" id="file"/>
            </label>
            <ul>
                <li>
                    <label for="name">Issued To</label>
                    <input type="text" id="name" name="name" /> 
                </li>
                <li>
                    <label for="codename">Codename</label>
                    <input type="text" id="codename" name="codename" /> 
                </li>
                <li>
                    <label for="place-of-issue">Place of Issue</label>
                    <input type="text" id="place-of-issue" name="place-of-issue" /> 
                </li>
            </ul>
            <div className='flex-row'>
                <p>
                    This certifies that the information hereon is that of an appointed HELLO LADY SPECIAL AGENT
                </p>
                <img src={badge} alt="Pan-African Rockstar badge" style={{width: '125px'}} />
            </div>
        </form>
        <button className="button-default font-size-s">Get Your ID</button>
    </div>
  )
}

export default AgentId