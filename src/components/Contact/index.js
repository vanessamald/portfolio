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
            backgroundColor: "#1f1f1f", 
        }}
        >
        <div 
        style={{
            padding: "60px",
            backgroundColor: "#1f1f1f",
            width: "100%"
            
        }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                marginTop: "10px",
                fontSize: "30px",
                fontFamily: "SilkSerif-Regular",
                flexWrap: "wrap",
                color: "white"
                
            }}
            >

            <div className="">
            <p 
            style={{ 
                animationDuration: "3.5s",
                animationName: "slideInFromBottom", 
            }}>h</p>
            <p
            style={{
                animationDuration: "4s",
                animationName: "slideInFromBottom", 
            }}>e</p>
            <p
             style={{
                animationDuration: "4.5s",
                animationName: "slideInFromBottom", 
            }} >l</p>
            <p
             style={{
                animationDuration: "5s",
                animationName: "slideInFromBottom", 
            }}>l</p>
            <p
             style={{
                animationDuration: "5.5s",
                animationName: "slideInFromBottom", 
            }}>o</p>
            <p
             style={{
                animationDuration: "6s",
                animationName: "slideInFromBottom", 
            }}>.</p>
            <p
             style={{
                animationDuration: "6.5s",
                animationName: "slideInFromBottom", 
            }}>h</p>
             <p
             style={{
                animationDuration: "7s",
                animationName: "slideInFromBottom", 
            }}>o</p>
             <p
             style={{
                animationDuration: "7.5s",
                animationName: "slideInFromBottom", 
            }}>l</p>
             <p
             style={{
                animationDuration: "8s",
                animationName: "slideInFromBottom", 
            }}>a</p>
            
            </div>
            <a 
            style ={{
                textDecoration: "none",
                color: "#9f7e69",
                fontSize: "12px"
            }}
            target="_blank" href="mailto:vnessamaldon@gmail.com">Email</a>
            
            <a
            style={{
                textDecoration: "none",
                color: "#9f7e69",
                fontSize: "12px"

            }}
             target="_blank" href="https://www.linkedin.com/in/vanessa-maldonado-807344191/">LinkedIn </a>
            </div>

          <button 
            style={{
                float: "left",
                
            }}
            className='contact-btn' onClick={handleClose}>
            Close
          </button>
        </div>
    </Modal>
        
</>
    )
}

export default Contact;