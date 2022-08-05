import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';

import Resume from '../Resume/index';

function Nav(props)  {
    return(
      <HashRouter>
      <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="resume" element={<Resume/>}/>
      </Routes> 
      </HashRouter> 
    )
}

function Home () { 
const scrollToRef = useRef();
  
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div>
         <div onClick={() => handleShow()} className='menu-button'
          style= {{
            
            marginTop: '10px',
           
            
          }}
          >
         <a className="header-menu" onClick={() => handleShow()} 
         style={{
          width: "40px",
          height: "1.5px",
          backgroundColor: "#15242e",
          marginTop: '30px',
          marginLeft: "90vw",
          position: "absolute",
          transform: "rotate(-90deg)"
         }}
         >
        </a> 
        <a className="header-menu" onClick={() => handleShow()} 
        style={{
          width: "40px",
          height: "1.5px",
          backgroundColor: "#15242e",
          marginTop: '30px',
          marginLeft: "88vw",
          position: "absolute", 
          transform: "rotate(-90deg)" 
        }}
        >
        </a>
        </div>
        <Modal className= "nav-menu-modal"
        style={{
        animationDuration: "3s",
        animationName: "slideFromLeft",
        overflow: "hidden",
        height: "100%",
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d"
        }} 
        show={show} 
        fullscreen={fullscreen} 
        onHide={() => setShow(false)}  >
          <Modal.Header className="nav-right-container" 
          closeButton
          >
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <a onClick={() => window.location.replace("/portfolio/#about")} className="nav-link-right">About</a> 
                <a onClick={() => window.location.replace("/#resume")} className="nav-link-right">Resume</a> 
                <a onClick={() => window.location.replace("/#portfolio")} className="nav-link-right" >Portfolio</a>
          </Modal.Body>
        </Modal>
        </div>
      </>
    );
  }

export default Nav;