import React, { Component } from "react";
//import About from "../About/index.js";
import coverImage from "../../assets/images/cover.JPG";
import Nav from "../Navigation";

function Header() {
        return ( 
        <div> 
            
            <header>
                <Nav/>
            </header>
            
            
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" ></img>
            
        </div>
    );
}


export default Header;