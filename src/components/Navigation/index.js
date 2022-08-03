import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Modal } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';

/* other nav items
  <a className="" href="https://www.linkedin.com/in/vanessa-maldonado-807344191/" target="_blank" >LinkedIn</a>
          <a className="" href="" target="_blank" >VM</a>
*/

// import components
import Gallery from '../Gallery';
import Contact from '../Contact';
import Resume from '../Resume';
import About  from '../About';
import Contact2 from '../Contact';

function Nav(props)  {
    return(
        <HashRouter>
        <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>}/>
                <Route path="portfolio" element={<Gallery/>} />
                <Route path="contact" element={<Contact/>} /> 
                <Route path="resume" element={<Resume/>} />
                <Route path="nav" element={<Home/>} />
        </Routes> 
        </HashRouter> 
    )
}

function Home () {  
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div>
         <div onClick={() => handleShow()}
          style= {{
            

            
          }}
          >
         
         <a onClick={() => handleShow()}
         style={{
          marginTop: "10px",
          width: "50px",
          height: "1.6px",
          backgroundColor: "#15242e",
          marginBottom: "5px",
          marginLeft: "90vw",
          position: "absolute",
         }}
         >
        </a> 
        <a onClick={() => handleShow()}
        style={{
          width: "50px",
          height: "1.6px",
          backgroundColor: "#15242e",
          marginLeft: "90vw",
          position: "absolute",
          
        }}
        >

        </a>
        </div>
        
        <Modal className= "nav-menu-modal"
        style={{
          // make menu fullscreen?
        /*
        height: fullscreen ? "100vh" : "auto",
        */
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
                <HashLink to="resume" className="nav-link-right" >Resume</HashLink>
                
                <HashLink to="about" className="nav-link-right">About</HashLink>
                
                <HashLink to="portfolio" className="nav-link-right" >Portfolio</HashLink>
          </Modal.Body>
        </Modal>
        </div>
      </>
    );
  }

export default Nav;