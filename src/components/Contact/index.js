import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className="nav-left-item"> 
      <a className="nav-left-link left-btn"  onClick={handleShow}>
        Contact
      </a>
    </div>
    
      <Modal className="contact-form" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="youremail@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="hi"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='contact-btn' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button className='contact-btn' variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;