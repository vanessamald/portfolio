import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
//import {render} from 'react-dom';

// images
import RunBuddy from "../.././assets/images/run-buddy.png";
import portfolioImage from "../.././assets/images/portfolio_screenshot.jpg"
import timedQuiz from "../.././assets/images/timed-quiz.jpg";
import timedQuiz2 from "../.././assets/images/timed-quiz2.jpg";
import timedQuiz3 from "../.././assets/images/timed-quiz3.jpg";
import weatherDashboard from "../.././assets/images/weather-dashboard.jpg";

function MydModalWithGrid(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false)
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
   
    <Modal className="mobile-portfolio" fullscreen={fullscreen} {...props} aria-labelledby="contained-modal-title-vcenter"  >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          My Work
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container >
          <Row className="justify-content-md-center">
            <Col xs ls="2">
            <h2>Friends Timed Quiz</h2>
            <img src={timedQuiz} alt="timed quiz landing page image" width="100%" ></img>
            
            </Col>
            <Col xs ls="2">
            <h2>Portfolio</h2>
            <img src={portfolioImage} alt="Portfolio website" width="100%" ></img>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs ls="2">
            <p>HTML, CSS, JAVASCRIPT</p>
            <img src={timedQuiz2} alt="timed quiz page" width="100%" ></img>
            <img src={timedQuiz3} alt="timed quiz page" width="100%" ></img>
            </Col>
            <Col xs ls="2">
            <h2>Weather Dashboard</h2>
            <img src={weatherDashboard} alt="weather dashboard website" width="100%" ></img>
            </Col>
            <Col xs ls="2">
            <h2>Run Buddy</h2>
            <img src={RunBuddy} alt="Run Buddy Website" width='100%' ></img>
            </Col>
          </Row>
          
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

