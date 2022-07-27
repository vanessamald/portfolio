import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

function MydModalWithGrid(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false)
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
   
    <Modal  fullscreen={fullscreen} {...props} aria-labelledby="contained-modal-title-vcenter"  >
      <Modal.Header className='portfolio'>
        <Modal.Title id="contained-modal-title-vcenter" className='portfolio'>
          My Work
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid portfolio">
        <Container className="justify-content-md-center portfolio">
            <div className="portfolio">
              <a className="portfolio-link">Friends Timed Quiz</a>
            </div>          
            <div className="portfolio">
              <a className="portfolio-link">Portfolio</a>              
            </div>
            <div className="portfolio">
            <a className="portfolio-link">Weather Dashboard</a>            
            </div>
            <div className="portfolio">
            <a className="portfolio-link">Run Buddy</a>
            </div>  
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <button className="left-btn" variant="primary" onClick={() => setShow(false)}>
        Close
      </button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;

