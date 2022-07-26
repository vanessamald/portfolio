import React, { Component } from "react";
//import About from "../About/index.js";
import coverImage from "../../assets/images/cover.JPG";
import Nav from "../Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././index.css';

function Header() {
        return ( 
        <div className="d-flex flex-row flex-wrap justify-content-center justify-content-around"> 
            
            <header >
            
                <Nav/>
            
            </header>
            
            
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" ></img>
            
        </div>
    );
}


export default Header;