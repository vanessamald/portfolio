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
              <Route exact path="/portfolio/" element={<Home/>}/>
              <Route exact path="/portfolio/resume" element={<Resume/>}/>
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
         <button onClick={() => handleShow()} className='menu-button'
          style= {{
            position: 'relative',
            width: '50px',
            height: '50px',
            left: '90%',
            top: '10%',
            border: 'none',
            backgroundColor: 'transparent'
          }}
          >
         <div className="header-menu" 
         style={{
          width: "50px",
          height: "1.5px",
          backgroundColor: "#15242e",
          
          
          position: "absolute",
          marginBottom: "5px",
          
         }}
         >
        </div> 
        <div className="header-menu" 
        style={{
          width: "50px",
          height: "1.5px",
          backgroundColor: "#15242e",
          marginTop: '10px',
          
          position: "absolute",
          
          
        }}
        >
        </div>
        </button>
        <Modal className= "nav-menu-modal" onClick={() => handleClose()}
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
                <a onClick={() => window.location.replace("/portfolio/#resume")} className="nav-link-right">Resume</a> 
                <a onClick={() => window.location.replace("/portfolio/#portfolio")} className="nav-link-right" >Portfolio</a>
          </Modal.Body>
        </Modal>
        </div>
      </>
    );
  }

export default Home;