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
            
            backgroundColor: "rgb(249, 247, 241)",
            height: "100%",
            width: "100%",
            
        }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "left",
                
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
                color: '#9f7e69',
                fontFamily: 'Styrene',
                letterSpacing: '4px',
                fontSize: '50px',
                

                
            }}
            > Get In Touch! </p>
            
            <a className="contact-link" 
            style ={{
                
                
                
                marginBottom: '0px',
                animationDuration: "5s",
                animationName: "slideInFromBottom"
            }}
            target="_blank" href="mailto:vnessamaldon@gmail.com">Email</a>
            
            <a className="contact-link"
            style={{
                
                
                marginTop: "0px",
                marginBottom: '0px',
                animationDuration: "5s",
                animationName: "slideInFromBottom"
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