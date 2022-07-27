import React, { useState } from "react";

function About() {
    const [modalShow, setModalShow] = useState(false);
    return(
        <section id="about">
            <h1>About</h1>
            <p>
            Hi! My name is Vanessa, a Mexican-American Front End Web Developer in training. 
            I graduated with a Public Health degree in May 2020 and am currently in the process of a career change.
            </p> 
            <p>
            I am currently attending the University of Texas Full Stack Coding Bootcamp. 
            My friends and colleages would describe me as empathetic, passionate, and creative. 
            I want to help users have an intuitive experience through artistic and seamless designs.
            </p>
            <h2>Skills</h2>
            <p></p>
            <h2>Experience</h2>
            <p></p>  
        </section>
    )
}

export default About;