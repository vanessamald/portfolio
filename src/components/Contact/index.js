import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { validateEmail } from '../../utils/helpers.js';

function Contact() {
  const [ formState, setFormState ] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formState;
  const [ errorMessage, setErrorMessage ] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) {
    if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
         // isValid conditional statement
        if (!isValid) {
            setErrorMessage("Please enter a valid email address");
        //} else {
            //setErrorMessage(" ");
        }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
                console.log('Handle Form', formState);
            }
        }
  
function handleSubmit(e) {
  e.preventDefault();
  console.log(formState);
}
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
          <Form id="contact-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label  >Name</Form.Label>
              <Form.Control
                name="name" 
                type="name"
                placeholder="name"
                autoFocus
                defaultValue={name}
                onBlur={handleChange} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  >Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="youremail@example.com"
                autoFocus
                defaultValue={email}
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
              <Form.Label  >Message</Form.Label>
              <Form.Control 
              name="message" 
              type="message" 
              as="textarea" 
              rows={3} 
              placeholder="hi"
              defaultValue={message}
              onBlur={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='contact-btn' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button 
          type="submit"
          className='contact-btn' 
          variant="primary" 
          onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;