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
         <div onClick={() => handleShow()} className=''
         // className= 'menu-button'
          style= {{
            
            backgroundColor: 'transparent',
            borderRadius: '100%',
            cursor: 'pointer',
            
            height: '55px',
            position: 'absolute',
            right: '10px',
            top: '50%',
            
            transform: 'translateY(-50%)',
            width: '55px',
            
            
          }}
          >
          </div>
         <a className="" onClick={() => handleShow()} 
         // className= 'header-menu-top'
         style={{
          width: "45px",
          height: "1.5px",
          backgroundColor: "black",
          //marginLeft: "90vw",
          position: "absolute",
          marginTop: '40px',
          //zIndex: '1',
          //top: "50%",
          //transform: 'translateY(-50%)',
          right: "17px",
          
         }}
         >
        </a> 
        <a className="" onClick={() => handleShow()} 
          //className= 'header-menu'
        style={{
          width: "45px",
          height: "1.5px",
          backgroundColor: "black",
          //marginTop: '10px',
          //marginLeft: "90vw",
          position: "absolute",
          //top: '50%',
          right: '17px',
          marginTop: '30px',
          //transform: 'translateY(-50%)',
          

          
        }}
        >
        </a>
        
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