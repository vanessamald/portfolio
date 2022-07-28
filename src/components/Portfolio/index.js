import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Gallery from '../../components/Gallery';

function MydModalWithGrid(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true)
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => setIsModalOpen(true);
    console.log('clicked');
  const handleClickClose = () => setIsModalOpen(false);
    

  return (
   
    <Modal  fullscreen={fullscreen} {...props} aria-labelledby="contained-modal-title-vcenter"
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false} 
    >
      <Modal.Header className='portfolio' closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='portfolio'>
          My Work
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid portfolio">
        <Container className="justify-content-md-center portfolio">
            <div className="portfolio">
              <a data-dismiss="modal" data-toggle="modal" href="/portfolio/friends" className="portfolio-link" id="friends">Friends Timed Quiz</a>
            </div> 
            <br/>         
            <div className="portfolio">
              <a className="portfolio-link" id="portfolio">Portfolio</a>              
            </div>
            <br/>
            <div className="portfolio">
            <a className="portfolio-link">Weather Dashboard</a>            
            </div>
            <br/>
            <div className="portfolio">
            <a className="portfolio-link">Run Buddy</a>
            </div>  
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <button className="left-btn" variant="primary" onClick={handleClose}>
        Close
      </button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;

