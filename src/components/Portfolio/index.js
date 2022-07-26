import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

// images
import RunBuddy from "../.././assets/images/run-buddy.png";
import portfolioImage from "../.././assets/images/portfolio_screenshot.jpg"
import timedQuiz from "../.././assets/images/timed-quiz.jpg";
import timedQuiz2 from "../.././assets/images/timed-quiz2.jpg";
import timedQuiz3 from "../.././assets/images/timed-quiz3.jpg";
import weatherDashboard from "../.././assets/images/weather-dashboard.jpg";

function MydModalWithGrid(props) {
    const [fullscreen, setFullscreen] = useState(true);
  return (
    <Modal fullscreen={fullscreen} {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Work
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
            <h2>Friends Timed Quiz</h2>
            <img src={timedQuiz} alt="timed quiz landing page image" width="100%" ></img>
            
            </Col>
            <Col xs={6} md={4}>
            <h2>Portfolio</h2>
            <img src={portfolioImage} alt="Portfolio website" width="100%" ></img>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            <p>HTML, CSS, JAVASCRIPT</p>
            <img src={timedQuiz2} alt="timed quiz page" width="100%" ></img>
            <img src={timedQuiz3} alt="timed quiz page" width="100%" ></img>
            </Col>
            <Col xs={6} md={4}>
            <h2>Weather Dashboard</h2>
            <img src={weatherDashboard} alt="weather dashboard website" width="150%" ></img>
            </Col>
            <Col xs={6} md={4}>
            <h2>Run Buddy</h2>
            <img src={RunBuddy} alt="Run Buddy Website" width='100%' ></img>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

//render(<App />);
export default MydModalWithGrid;