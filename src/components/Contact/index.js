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
        <div 
        style={{
            
            backgroundColor: "#b5aa9c",
            width: "100%",
            height: "100%"
            
        }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "10px",
                fontSize: "8vw",
                fontFamily: "SilkSerif-Regular",
                flexWrap: "wrap",
                
                
                
            }}
            >
            <div
            style={{
               
            }}
            > 

        </div>
            <p
            style={{
                color: '#1f1f1f',
                fontFamily: 'Styrene',
                letterSpacing: '4px',
                fontSize: '50px',
                marginTop: '40px',

                
            }}
            > Get In Touch! </p>
            
            <a className="contact-link" 
            style ={{
                
                
                fontSize: "26px",
                marginBottom: '40px'
            }}
            target="_blank" href="mailto:vnessamaldon@gmail.com">Email</a>
            
            <a className="contact-link"
            style={{
                
                fontSize: "26px",
                marginTop: "0px",
                marginBottom: '100px'
            }}
             target="_blank" href="https://www.linkedin.com/in/vanessa-maldonado-807344191/">LinkedIn </a>
            

          <button 
            style={{
                fontSize: '12px',
                
                
                
            }}
            className='contact-btn' onClick={handleClose}>
            Close
          </button>

          
          </div>
        </div>
    </Modal>
    </>
)}

export default Contact;