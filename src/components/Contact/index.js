import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

function Contact () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fullscreen, setFullscreen] = useState(true);

    return (
        <>
        <div className="nav-left-item"> 
        <a className="nav-left-link left-btn"  onClick={handleShow}>
          Contact
        </a>
        </div>

        <Modal show={show} fullscreen={fullscreen} onHide={handleClose} 
        style={{
            animationDuration: "3s",
            animationName: "slideFromLeft",
           
            
        }}
        >
        <Modal.Header closeButton> Get in Touch!</Modal.Header>
        <div 
        style={{
            
            backgroundColor: "",
            width: "100%",
            height: "100%"
            
        }}
        >
            <div
            style={{
                
                
                
                
            }}
            >
        
           
            
            <a className="nav-link-right"
            style ={{
                
                
             
            }}
            target="_blank" href="mailto:vnessamaldon@gmail.com">Email</a>
            
            <a className="nav-link-right"
            style={{
                
               
            }}
             target="_blank" href="https://www.linkedin.com/in/vanessa-maldonado-807344191/">LinkedIn </a>
            

         

          
          </div>
        </div>
    </Modal>
    </>
)}

export default Contact;