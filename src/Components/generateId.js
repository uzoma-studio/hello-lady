import React, { useState, useRef, useEffect } from "react";
import "../Styles/Components/agentId.css";
import badge from "../Images/badge.png";
import chipImg from "../Images/chip.png";
import html2canvas from "html2canvas";
import ShareId from "./shareId";
import cities from 'cities.json';

const AgentId = () => {

  const [file, setFile] = useState(null);
  const [idImage, setIdImage] = useState(null); // the generated image of the ID from html2canvas
  const [downloadLinkData, setDownloadLinkData] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const nameRef = useRef(null);
  const codeNameRef = useRef(null);
  const placeOfIssueRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window && (window.innerWidth < 768) && setIsMobile(true)

    //   return () => {
    //     second
    //   }
  }, [])


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
      alert("PLEASE FILL IN ALL YOUR DETAILS");
    } else if (!isCitySelected) {
      alert("PLEASE SELECT A CITY FROM THE LIST");
    }else {

      setButtonDisabled(true);

      // set file name before text transform
      const filename = `${codeNameRef.current.value} PARC ID.jpg`;

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

  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [isCheckingCity, setIsCheckingCity] = useState(false)
  const [city, setCity] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [isCitySelected, setIsCitySelected] = useState(false)

  const handleCityChange = (e) => {

    setCity(e.target.value)

    // use isCheckingCity to ensure function is only run once
    if(!isCheckingCity){
      setIsCheckingCity(true)
      setShowDropdown(false)

      setTimeout(() => {
        if(e.target.value) {
          setIsCheckingCity(false)
          const cityList = cities.filter(({ name }) => name.toLowerCase().includes(e.target.value.toLowerCase()))
          setAutocompleteCities(cityList)
          // const { name, country } = cityList[0]
          // setCity(`${name}, ${country}`)
          setShowDropdown(true)
        }
      }, 5000);
    }
  }

  const cityOfIssue = <>
    <label className="cardLabel" htmlFor="name" style={{ color: "white", opacity: 0.5 }}>
      CITY OF ISSUE
    </label>
    <input type="text"
      list="cities"
      id="place-of-issue"
      name="place-of-issue"
      style={{ borderBottom: "2px dotted rgba(255, 255, 255, 0.5" }}
      ref={placeOfIssueRef}
      className="formInputs"
      value={city}
      onChange={handleCityChange}
      onClick={() => { autocompleteCities.length > 0 && setShowDropdown(true) }}
    />
    {placeOfIssueRef.current && placeOfIssueRef.current.value && isCheckingCity && <p className="white-text">SCANNING THE GLOBE...</p>}
    {showDropdown && (
      <select
        id="cities"
        onChange={(e) => {
          setCity(e.target.value);
          setShowDropdown(false);
          !isCitySelected && setIsCitySelected(true)
        }}
      >
        <option>City list:</option>
        {autocompleteCities.map(({ name, country }, i) => (
          <option key={i} value={`${name}, ${country}`}>
            {`${name}, ${country}`}
          </option>
        ))}
      </select>
    )}
  </>

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

                {isMobile ?
                  <div>
                    <div style={{ width: "300px" }}>
                      <div className={`flex-column ${bgGradient}`} cursorPointer={false} shineStrength={0.75}
                        style={{ borderRadius: "20px", cursor: "pointer", padding: "20px 0px" }} id="MainCard">
                        <div className="formDetails form-control flex-column flex-column-mobile">

                          <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', width: "100%" }}>
                            <img src={badge}
                              className="card-item__logo"
                              alt="PAR card logo" />
                          </div>

                          <div style={{ fontFamily: "Fira Code", color: "white" }}>
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

                            <div style={{ paddingTop: "15px" }}>
                              <ul style={{ margin: "0px" }}>
                                <li>
                                  <label className="cardLabel" htmlFor="name" style={{ color: "white", opacity: 0.5 }}>
                                    ISSUED TO
                                  </label>
                                  <input type="text"
                                    className="formInputs"
                                    id="name"
                                    name="name"
                                    style={{ borderBottom: "2px dotted rgba(255, 255, 255, 0.5" }}
                                    ref={nameRef}
                                  />
                                </li>
                                <li>
                                  <label className="cardLabel" htmlFor="name" style={{ color: "white", opacity: 0.5 }}>
                                    CODENAME
                                  </label>
                                  <input type="text"
                                    id="codename"
                                    name="codename"
                                    style={{ borderBottom: "2px dotted rgba(255, 255, 255, 0.5" }}
                                    ref={codeNameRef}
                                    className="formInputs" />
                                </li>
                                <li>
                                  { cityOfIssue }
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div style={{ width: '100%' }}>
                            <div className="labelDiv" style={{ paddingTop: "10px" }}>
                              <label className="Cardlabeldata1" style={{ fontSize: "10px", paddingLeft: "10px" }}>
                                certified
                              </label>
                            </div>
                            <div className="labelDiv certified-label" >
                              <label className="Cardlabeldata" style={{ paddingLeft: "10px" }}>
                                PAN AFRICAN <br /> ROCKSTAR ID
                              </label>
                              <img src={chipImg}
                                className="card-item__chip"
                                alt="credit card chip"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  :
                  <div className="tilting-card-wrapper">
                    <div className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div style={{ height: "10px", width: "10px" }} className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div style={{ height: "20%" }} className="mouse-position-tracker"></div>
                    <div className="mouse-position-tracker"></div>
                    <div className="tilting-card-body">

                      <div className={`flex-column ${bgGradient}`} cursorPointer={false} shineStrength={0.75}
                        style={{ borderRadius: "20px", cursor: "pointer", }} id="MainCard">
                        <div className="formDetails form-control flex-column flex-column-mobile">

                          <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', width: "100%" }}>
                            <img src={badge}
                              className="card-item__logo"
                              alt="PAR card logo" />
                          </div>

                          <div style={{ fontFamily: "Fira Code", color: "white" }}>
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

                            <div style={{ paddingTop: "15px" }}>
                              <ul style={{ margin: "0px" }}>
                                <li>
                                  <label className="cardLabel" htmlFor="name" style={{ color: "white", opacity: 0.5 }}>
                                    ISSUED TO
                                  </label>
                                  <input type="text"
                                    className="formInputs"
                                    id="name"
                                    name="name"
                                    ref={nameRef}
                                  />
                                </li>
                                <li>
                                  <label className="cardLabel" htmlFor="name" style={{ color: "white", opacity: 0.5 }}>
                                    CODENAME
                                  </label>
                                  <input type="text"
                                    id="codename"
                                    name="codename"
                                    ref={codeNameRef}
                                    className="formInputs" />
                                </li>
                                <li>
                                  { cityOfIssue }
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div style={{ width: '100%' }}>
                            <div className="labelDiv" style={{ paddingTop: "10px" }}>
                              <label className="Cardlabeldata1" style={{ fontSize: "10px", paddingLeft: "10px" }}>
                                certified
                              </label>
                            </div>
                            <div className="labelDiv certified-label" >
                              <label className="Cardlabeldata" style={{ paddingLeft: "10px" }}>
                                PAN AFRICAN <br /> ROCKSTAR ID
                              </label>
                              <img src={chipImg}
                                className="card-item__chip"
                                alt="credit card chip"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                }

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
