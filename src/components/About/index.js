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
            My name is Vanessa, a Mexican-American Freelance Front End Web Developer with a background in Public Health & over 10 years of Healthcare experience. 
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
            <a> </a>
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
                <h3>Web Design & Development</h3>
            <p className="about-text"
            style = {{
                
                }} 
                >
                HTML / CSS / JAVASCRIPT / NODE / EXPRESS / REACT / BOOTSTRAP / FRAMER MOTION / MONGODB / INQUIRER / SQL / MYSQL / JQUERY / PWA / GIT / HEROKU / GODADDY  </p>
     
                <h3>Social Media & Marketing</h3>
                <p className="about-text"
                style = {{
                
                }} 
                >
                SEO / SOCIAL MEDIA MANAGEMENT AND STRATEGY DEVELOPMENT / CONTENT CREATION / COPYWRITING / BRANDING / INFOGRAPHICS 
                </p>
            <h2 className="about-subtitle"
            style = {{
                
                }} 
            >
                Education</h2>
            <p className="about-text"
            style = {{
                
                }} 
            > Hubspot Academy's Social Media Strategy Certificate (2023)</p>
              <p className="about-text"
            style = {{
                
                }} 
            > University of Texas Full Stack Web Developer Certificate (2022)</p>
            <p className="about-text"
              style = {{

                }} 
            > University of Texas Bachelor's Degree in Public Health (2020) </p>
            <p className="about-text"
             style = {{
                transform: `translate3d(${offset/1000}vw, 0px, 0px)`,
                transition: 'transform 0.5s',
                alignItems: 'center',
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '60px',
                letterSpacing: '-5px',
                textTransform: 'lowercase',
                }} 
            > 1 year of web developer experience</p>
            <p className="about-text"
            style={{
                transform: `translate3d(-${offset/1000}vw, 0px, 0px)`,
                transition: 'transform 0.5s',
                alignItems: 'center',
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '64px',
                letterSpacing: '-5px',
                textTransform: 'lowercase',   
            }}
            > <em
            style={{
                
                backgroundSize: '0var(20%),100% var(20%)',
                letterSpacing: '-10px'
            }}></em></p>

           
            
            </div>  
        </section>
    )
}

export default About;