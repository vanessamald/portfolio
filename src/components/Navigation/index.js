import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';

// import components
import Gallery from '../Gallery';
import Contact from '../Contact';
import Resume from '../Resume';
import About from '../About';

function Nav(props)  {
    return(
        <HashRouter>
        <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="about" element={<About></About>} />
                <Route path="portfolio" element={<Gallery/>} />
                <Route path="contact" element={<Contact/>} /> 
                <Route path="resume" element={<Resume/>} />
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
      <div className='nav-menu-container'>
        <div className="nav-menu-item">
          <a className="nav-menu-btn" onClick={() => handleShow()}>
            menu
          </a>
          <a className="nav-menu-btn" href="https://www.linkedin.com/in/vanessa-maldonado-807344191/" target="_blank" >LinkedIn</a>
          <a className="nav-menu-btn" href="" target="_blank" >VM</a> 
        </div>
        <Modal className= "nav-menu-modal"
        style={{
          // make menu fullscreen?
        /*
        height: fullscreen ? "100vh" : "auto",
        */
        overflow: "hidden",
        height: "100%"
        }} 
         
        show={show} 
        fullscreen={fullscreen} 
        onHide={() => setShow(false)}>
          <Modal.Header className="nav-right-container" 
          closeButton
          >
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <HashLink to="resume" className="nav-link-right" >Resume</HashLink>
                <HashLink to="about" className="nav-link-right" >About</HashLink>
                <HashLink to="portfolio" className="nav-link-right" >Portfolio</HashLink>
          </Modal.Body>
        </Modal>
        </div>
      </>
    );
  }

export default Nav;