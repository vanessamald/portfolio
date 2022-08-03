import { event } from 'jquery';
import React, { useEffect, useState } from 'react';
import Resume from '../Resume';

function About() {
    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        const onScroll= () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
      

    return(
        <section className="about-container"
        style= {{
            marginTop: '400px',
            padding: "30px"
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
            <p
             style = {{
                fontFamily: "Ogg",
                background: 'transparent',
                
                }} 
            >
            I am currently attending the University of Texas Full Stack Coding Bootcamp. 
            </p>
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
                
                
                }} 
            > 6 months of web developer experience</p>

            <Resume/>
            </div> 
            
        </section>
    )
}

export default About;