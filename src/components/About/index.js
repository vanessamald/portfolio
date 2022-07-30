import React, { useState } from "react";

function About() {
    return(
        <section className="about-container">
            <div className="about-content">
                <br/>
                <br/>
                
            <h1 className="about-title" >About</h1>
            <img src={require("../../assets/images/profile-pic.jpg")} alt="profile pic" className="profile-pic"/>
            
            <p className="about-text">
            Hi! 
            </p>
            <p className="about-text">
            My name is Vanessa, a Mexican-American Front End Web Developer in training. 
            I graduated with a Public Health degree in May 2020 and am currently in the process of a career change.
            </p> 
            <p className="about-text">
            I am currently attending the University of Texas Full Stack Coding Bootcamp. 
            My friends and colleages would describe me as empathetic, passionate, and creative. 
            I want to help users have an intuitive experience through artistic and seamless designs.
            </p>
            <h2>Skills</h2>
            <p className="about-text">HTML / CSS / JAVASCRIPT / REACT / BOOTSTRAP / MERN / INQUIRER / SQL </p>
            <h2>Experience</h2>
            <p className="about-text"> Degree in Public Health</p>
            <p className="about-text"> 14 years customer service experience relating to healthcare </p>
            <p className="about-text"> 6 months of web developer experience</p>


            </div> 
            
        </section>
    )
}

export default About;