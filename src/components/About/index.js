import React, { useEffect, useState, useRef } from 'react';
import Resume from '../Resume';

function About() {
    const scrollToRef = useRef();

    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        const onScroll= () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
      
    return(
        <section className="about-container" id="about"
        style= {{
            padding: "0px",
            marginTop: "600px",
            marginBottom: '100px'
                }}
            >
            <div 
            className="about-content">
                <br/>
                <br/>   
            <h1 className="about-title" 
            style = {{
                
                }} 
            >About</h1>
            <img src={require("../../assets/images/profile-pic.jpg")} alt="profile pic" className="profile-pic"/>
            <p className="about-text">
            Hi! 
            </p>
            <p className="about-text"
            >
            My name is Vanessa, a Mexican-American Front End Web Developer in training.
            I graduated with a Public Health degree in May 2020 and am currently in the process of a career change.
            </p> 
            <em
             style = {{
                fontFamily: "Ogg",
                background: 'transparent',
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '80px',
                letterSpacing: '-10px',
                textTransform: 'lowercase',
                
                }} 
            >
            I am currently attending the University of Texas Full Stack Coding Bootcamp. 
            </em>
            <p className="about-text">
            My friends and colleages would describe me as empathetic, passionate, and creative. 
            I want to help users have an intuitive experience through artistic and seamless designs.
            </p>
            <h2 className="about-subtitle"
             style = {{
                
                }} 
            >
                Skills</h2>
            <p className="about-text"
            style = {{
                
                }} 
                >
                HTML / CSS / JAVASCRIPT / REACT / BOOTSTRAP / MERN / INQUIRER / SQL </p>
                <p className="about-text"
                style = {{
                
                }} 
                >
                MYSQL / JQUERY / PWA / GIT 
                </p>
            <h2 className="about-subtitle"
            style = {{
                
                }} 
            >
                Experience</h2>
            <p className="about-text"
            style = {{
                
                }} 
            > Degree in Public Health</p>
            <p className="about-text"
              style = {{

                }} 
            > 14 years customer service experience relating to healthcare </p>
            <p className="about-text"
             style = {{
                transform: `translate3d(${offset/1000}vw, 0px, 0px)`,
                transition: 'transform 0.5s',
                alignItems: 'center',
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '80px',
                letterSpacing: '-10px',
                textTransform: 'lowercase',
                }} 
            > 6 months of web developer experience</p>
            <p className="about-text"
            style={{
                transform: `translate3d(-${offset/1000}vw, 0px, 0px)`,
                transition: 'transform 0.5s',
                alignItems: 'center',
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '80px',
                letterSpacing: '-10px',
                textTransform: 'lowercase',   
            }}
            > <em
            style={{
                
                backgroundSize: '0var(20%),100% var(20%)'
            }}>Fun Fact: </em>My favorite language is React.</p>

           
            <Resume></Resume>
            </div> 

            
           
            
        </section>
    )
}

export default About;