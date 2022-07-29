import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import About from '../About';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';

import Gallery from '../Gallery';
import Photos from '../Gallery';
import Contact from '../Contact';

function Nav(props)  {
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/portfolio" element={<Gallery/>} />
                <Route path="/contact" element={<Contact/>} />   
        </Routes> 
        </BrowserRouter>        
    )
}

/*

function Home() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <div>
            
            <nav>
            <div className="nav-left">
                <div className="nav-left-item">
                <a onClick={() => {
                    setIsNavExpanded(!isNavExpanded)}}
                 className="nav-left-link nav-menu-btn">X</a>
                </div>
            </div>
            
                <div 
                className={isNavExpanded ? "navigation-menu expanded nav-right": "navigation-menu"}
                >
                <Link to="/resume" className="nav-link-right" >Resume</Link>
                <Link to="/about" className="nav-link-right" >About</Link>
                <Link to="/portfolio" className="nav-link-right" >Portfolio</Link>
                </div>
            </nav> 
        </div>
    )
    
}
*/


function Home() {
    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
          <a className="nav-link-left nav-menu-btn" onClick={() => handleShow()}>
            menu
            
          </a>

        
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                <Link to="/resume" className="nav-link-right" >Resume</Link>
                <Link to="/about" className="nav-link-right" >About</Link>
                <Link to="/portfolio" className="nav-link-right" >Portfolio</Link>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default Nav;