import React, { Component } from "react";
import coverImage from "../../assets/images/cover.JPG";
import Nav from "../Navigation";
import Contact from "../Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././index.css';

function Header() {
        return ( 
            
            
        <div className="container"> 
           <div className="nav-left">

            <div className="nav-left-item">
                <a className="nav-left-link" href="/">Home</a>
            </div>
            
            <div className="nav-left-line" ></div>

            <div className="nav-left-item">
                <a className="nav-left-link" href="https://github.com/vanessamald" target="_blank" >Git</a>
            </div> 

            <div className="nav-line" ></div>

            <Contact ></Contact>
        </div>
    </div>   
    );
}


export default Header;