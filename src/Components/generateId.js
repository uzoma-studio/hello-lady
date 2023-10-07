import React, { useState, useRef } from "react";
import "../Styles/Components/agentId.css";
import badge from "../Images/badge.png";
import chipImg from "../Images/chip.png";
import html2canvas from "html2canvas";
import ShareId from "./shareId";
import Card from "react-animated-3d-card";

const AgentId = () => {
  const [showFront, setShowFront] = useState("PAN AFRICAN ROCKSTAR ID");

  const [file, setFile] = useState(null);
  const [idImage, setIdImage] = useState(null); // the generated image of the ID from html2canvas
  const [downloadLinkData, setDownloadLinkData] = useState(null);

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
      // set file name before text transform
      const filename = `${codeNameRef.current.value} agent ID.jpg`;

      transformInputToUppercase(nameRef, codeNameRef, placeOfIssueRef);

      const element = document.getElementById("agent-id");
      const canvas = await html2canvas(element, { backgroundColor: null });
      const data = canvas.toDataURL("image/jpg");
      setIdImage(data);

      setDownloadLinkData({ href: data, download: filename });

      URL.revokeObjectURL(file);
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

          <div className="App" style={{ display: "flex", justifyContent: "center", alignContent: "center", marginTop: "70px"}}>
            <div>
                <form id="agent-id">
                    <Card cursorPointer={false} shineStrength={0.75}
                        style={{ background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", width: "350px", height: "500px", cursor: "pointer", }} >
                        <div className="formDetails form-control flex-column flex-column-mobile">
                    
                                <div>
                                    <img src={chipImg}
                                    className="card-item__chip"
                                    alt="credit card chip"/>
                                    <img src={badge}
                                    className="card-item__logo"
                                    alt="PAR card logo"/>
                                </div>
                                    
                                <div style={{  fontFamily: "Fira Code", color: "white", paddingTop:"100px" }}>
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
                                    <div>
                                        <ul style={{margin: "0px"}}>
                                            <li>
                                                <label htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5, fontSize: "16px",  width: "30%"  }}>
                                                    ISSUED TO   
                                                </label>
                                                <input type="text" 
                                                className="formInputs" 
                                                id="name" 
                                                name="name" 
                                                ref={nameRef}
                                                style={{ width: "calc(65% - var(--form-padding)" }}/>
                                            </li>
                                            <li>
                                                <label htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5, fontSize: "16px", width: "30%" }}>
                                                    CODENAME
                                                </label>
                                                <input type="text" 
                                                id="codename"
                                                name="codename"
                                                ref={codeNameRef}
                                                className="formInputs" style={{ width: "calc(65% - var(--form-padding)" }}/>
                                            </li>
                                            <li>
                                                <label htmlFor="name" style={{color: "white", paddingLeft: "10px", opacity: 0.5, fontSize: "16px",  width: "30%"  }}>
                                                    PLACE OF ISSUE
                                                </label>
                                                <input type="text" 
                                                id="place-of-issue"
                                                name="place-of-issue"
                                                ref={placeOfIssueRef}
                                                className="formInputs"  style={{ width: "calc(65% - var(--form-padding)" }}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "flex-end", paddingTop:"10px"}}>
                                    <label style={{ color: "white", opacity: 0.5, fontSize: "10px", paddingLeft: "10px" }}>
                                    certified
                                    </label>
                                    <label style={{ color: "white", opacity: 0.5, fontSize: "14px", paddingRight: "10px"  }}>
                                    PAR
                                    </label>
                                </div>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "flex-end"}}>
                                    <label style={{ color: "white", opacity: 1, fontSize: "30px", paddingLeft: "10px"}}>
                                        PAN AFRICAN <br/> ROCKSTAR ID
                                    </label>
                                    <label style={{ color: "white", opacity: 1, fontSize: "20px", paddingRight: "10px"}}>
                                    AGENT
                                    </label>
                                </div>
                    
                        </div>
                    </Card>
                </form>
                <button
                    className="button-default font-size-s"
                    style={{marginTop: "50px"}}
                    id="get-id-btn"
                    onClick={() => generateImage()}>
                    Get Your ID
                </button>
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
