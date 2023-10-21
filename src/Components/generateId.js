import React, { useState, useRef } from "react";
import "../Styles/Components/agentId.css";
import badge from "../Images/badge.png";
import chipImg from "../Images/chip.png";
import html2canvas from "html2canvas";
import ShareId from "./shareId";
const AgentId = () => {

  const [file, setFile] = useState(null);
  const [idImage, setIdImage] = useState(null); // the generated image of the ID from html2canvas
  const [downloadLinkData, setDownloadLinkData] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const nameRef = useRef(null);
  const codeNameRef = useRef(null);
  const placeOfIssueRef = useRef(null);

  
  const handleFileChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const transformInputToUppercase = (...inputRefs) => {
    inputRefs.forEach((ref) => {
      ref.current.value = ref.current.value.toLocaleUpperCase();
    });
  };

  const generateImage = async () => {
    if (
      !file ||
      !nameRef.current.value ||
      !codeNameRef.current.value ||
      !placeOfIssueRef.current.value
    ) {
      alert("PLEASE FILL IN ALL YOUR DETAILS AGENT");
    } else {

      setButtonDisabled(true);

      // set file name before text transform
      const filename = `${codeNameRef.current.value} agent ID.jpg`;

      transformInputToUppercase(nameRef, codeNameRef, placeOfIssueRef);

      const element = document.getElementById("agent-id");
      const canvas = await html2canvas(element, { backgroundColor: null });
      const data = canvas.toDataURL("image/jpg");
      setIdImage(data);


      setDownloadLinkData({ href: data, download: filename });

      URL.revokeObjectURL(file);

      setButtonDisabled(false);
    }
  };

  const gradient1 = "gradient-1";
  const gradient2 = "gradient-2";
  const gradient3 = "gradient-3";
  const gradient4 = "gradient-4";
  const gradient5 = "gradient-5";

  const [bgGradient, setBgGradient] = useState(gradient1);

  const setGradient = (event, gradient) => {
    document
      .getElementsByClassName("active-gradient")[0]
      .classList.remove("active-gradient");
    event.target.className += " active-gradient";
    setBgGradient(gradient);
  };

  const capitalize = (word) => {
    return word[0] + word.slice(1).toLowerCase();
  };

  const uploadedImageStyle = {
    backgroundImage: `url(${file})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <>
      {!idImage ? (
        <div className="page-content flex flex-column-mobile">

          <ul id="bg-selector">
            <li
              className="gradient-1 active-gradient"
              onClick={(e) => setGradient(e, gradient1)}
            ></li>
            <li
              className="gradient-2"
              onClick={(e) => setGradient(e, gradient2)}
            ></li>
            <li
              className="gradient-3"
              onClick={(e) => setGradient(e, gradient3)}
            ></li>
            <li
              className="gradient-4"
              onClick={(e) => setGradient(e, gradient4)}
            ></li>
            <li
              className="gradient-5"
              onClick={(e) => setGradient(e, gradient5)}
            ></li>
          </ul>

          <div className="App" style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
            <div>
       
                  <form id="agent-id">
                      <div class="tilting-card-wrapper">
                        <div class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div style={{height: "10px", width: "10px"}} class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div style={{height: "20%"}} class="mouse-position-tracker"></div>
                        <div class="mouse-position-tracker"></div>
                        <div class="tilting-card-body">
      
                          <div className={`flex-column ${bgGradient}`} cursorPointer={false} shineStrength={0.75}
                              style={{borderRadius: "20px", cursor: "pointer", }} id="MainCard">
                              <div  className="formDetails form-control flex-column flex-column-mobile">
                          
                                      <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                          <img src={chipImg}
                                          className="card-item__chip"
                                          alt="credit card chip"/>
                                          <img src={badge}
                                          className="card-item__logo"
                                          alt="PAR card logo"/>
                                      </div>
                                          
                                      <div style={{  fontFamily: "Fira Code", color: "white" }}>
                                        <div>
                                          <label
                                          htmlFor="file"
                                          id="file-label"
                                          className="text-center"
                                          style={uploadedImageStyle}
                                          >
                                          {/* { file ? <img src={file} alt="lady donli's detective agency uploaded id" /> :
                                                              <span style={{fontSize: '14px'}}>+ Upload Photo</span>
                                                      } */}
                                          {!file && (
                                              <span style={{ fontSize: "14px" }}>+ Upload Photo</span>
                                          )}
                                          <input
                                              type="file"
                                              id="file"
                                              onChange={(event) => handleFileChange(event)}
                                          />
                                          </label>

                                          </div>

                                          <div style={{paddingTop: "10px"}}>
                                              <ul style={{margin: "0px"}}>
                                                  <li>
                                                      <label className="cardLabel" htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5,  width: "25%"  }}>
                                                          ISSUED TO   
                                                      </label>
                                                      <input type="text" 
                                                      className="formInputs" 
                                                      id="name" 
                                                      name="name" 
                                                      ref={nameRef}
                                                      style={{ width: "55%" }}/>
                                                  </li>
                                                  <li>
                                                      <label className="cardLabel" htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5, width: "25%" }}>
                                                          CODENAME
                                                      </label>
                                                      <input type="text" 
                                                      id="codename"
                                                      name="codename"
                                                      ref={codeNameRef}
                                                      className="formInputs" style={{ width: "55%" }}/>
                                                  </li>
                                                  <li>
                                                      <label className="cardLabel" htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5,  width: "25%"  }}>
                                                          PLACE OF ISSUE
                                                      </label>
                                                      <input type="text" 
                                                      id="place-of-issue"
                                                      name="place-of-issue"
                                                      ref={placeOfIssueRef}
                                                      className="formInputs"  style={{ width: "55%" }}/>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>

                                      <div className="labelDiv" style={{ paddingTop:"10px"}}>
                                          <label  className="Cardlabeldata1"  style={{ fontSize: "10px", paddingLeft: "10px" }}>
                                          certified
                                          </label>
                                          <label className="Cardlabeldata1" style={{ fontSize: "14px", paddingRight: "10px"  }}>
                                          PAR
                                          </label>
                                      </div>
                                      <div className="labelDiv" >
                                          <label className="Cardlabeldata" style={{ paddingLeft: "10px"}}>
                                              PAN AFRICAN <br/> ROCKSTAR ID
                                          </label>
                                          <label className="Cardlabeldata" style={{ fontSize: "2vw", paddingRight: "10px"}}>
                                          AGENT
                                          </label>
                                      </div>
                          
                              </div>
                          </div>
                        </div>
                    </div>
                </form>
                <div className="center-container">
                     <button
                        className="blur-button"
                        id="get-id-btn"
                        onClick={() => generateImage()}
                        disabled={isButtonDisabled}> 
                        Get Your ID
                    </button>
                </div>
               
            </div>
          </div>

        </div>
      ) : (
        <ShareId
          idImage={idImage}   
          downloadLinkData={downloadLinkData}
          formDetails={{
            name: capitalize(nameRef.current.value),
            codename: capitalize(codeNameRef.current.value),
            "place-of-issue": capitalize(placeOfIssueRef.current.value),
          }}
        />
      )}
    </>
  );
};

export default AgentId;
