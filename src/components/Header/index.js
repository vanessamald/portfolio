import React, { useEffect, useState, Component } from 'react';
import Nav from "../Navigation";
import Contact from "../Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././index.css';

function Header() {
    const [ offset, setOffset ] = useState(0);

    useEffect(() => {
        const onScroll= () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

        return (       
        <div className="container">
          <div className="nav-left">
           <div className="nav-left-item">
                <a className="nav-left-link" href="https://github.com/vanessamald">git</a>
            </div>
            <div className="nav-left-line" ></div>
            <div className="nav-left-item">
                <a className="nav-left-link" href="" target="_blank" ></a>
            </div> 
            <div className="nav-line" ></div>
            <Contact ></Contact>
        </div>
        <div
            style= {{
            width: "100%",
            height: `${offset > 0 ? "10%" : "100%"}`,
            position: "fixed",
            zIndex: "500",
            backgroundColor: "rgb(249, 247, 241)",
            top: "0",
            left: "0",
            paddingBottom: "100px",
            paddingTop: "0px",
            }}
        > 
                   <Nav></Nav>
            <a href="/"
            style={{
                textDecoration: "none"
            }}
            >
            <h1 className="" 
            style={{
                color: "#3d352e",
                verticalAlign: "middle",
                fontSize: `${offset > 0 ? "20px" : "8vw"}`,
                fontWeight: `${offset > 0 ? "normal" : "normal"}`,
                color: `${offset > 0 ? "#3d352e" : "white"}`,
                textDecoration: "none",
                marginTop: `${offset > 0 ? "0px" : "300px"}`,
                textAlign: "center",
                background: "transparent",
                opacity: "1",
                transition: "all 2s",
                fontFamily: "Styrene",
                letterSpacing: "4px",
                marginBottom: "0px",
            }}   
            >Vanessa</h1></a>
            <a href="/"
            style={{
                textDecoration: "none"
            }}
            >
            <h2 className="" 
            style={{
            color: "#3d352e",
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: `${offset > 0 ? "26px" : "10vw"}`,
            fontWeight: `${offset > 0 ? "normal" : "normal"}`,
            color: `${offset > 0 ? "#3d352e" : "white"}`,
            textDecoration: "none",
            background: "transparent",
            opacity: "1",
            transition: "all 2s",
            marginTop: "0px",
            paddingBottom: "100px",
            letterSpacing: "2px",
            }}   
            >Maldonado</h2></a>
            </div> 
    </div>
    );
}

export default Header;